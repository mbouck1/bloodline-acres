// ── Breed Image Uploader ─────────────────────────────────────────────────
// Globals: window.sb (Supabase client), React

var BA_APPROVED_IMAGES = {};
var BA_IMAGES_LOADED = false;

function baLoadApprovedImages(callback) {
  if (!window.sb) { if (callback) callback(); return; }
  window.sb
    .from('breed_image_submissions')
    .select('species, breed, public_url')
    .eq('status', 'approved')
    .then(function(res) {
      if (res.data) {
        res.data.forEach(function(row) {
          var key = (row.species || 'dog') + '::' + row.breed;
          BA_APPROVED_IMAGES[key] = row.public_url;
        });
      }
      BA_IMAGES_LOADED = true;
      if (callback) callback();
    });
}

function baGetApprovedImage(species, breed) {
  var key = (species || 'dog') + '::' + breed;
  return BA_APPROVED_IMAGES[key] || null;
}

function BaImageUploader(props) {
  var species = props.species || 'dog';
  var breed = props.breed || '';
  var onCancel = props.onCancel || function(){};

  var _s1 = React.useState(null),   file       = _s1[0], setFile       = React.useState(null)[1];
  var _s2 = React.useState(''),     preview    = _s2[0], setPreview    = React.useState('')[1];
  var _s3 = React.useState('idle'), status     = _s3[0], setStatus     = React.useState('idle')[1];
  var _s4 = React.useState(''),     msg        = _s4[0], setMsg        = React.useState('')[1];

  // re-wire setters properly
  var _r1 = React.useState(null);   var fileVal    = _r1[0]; var setFileVal    = _r1[1];
  var _r2 = React.useState('');     var previewVal = _r2[0]; var setPreviewVal = _r2[1];
  var _r3 = React.useState('idle'); var statusVal  = _r3[0]; var setStatusVal  = _r3[1];
  var _r4 = React.useState('');     var msgVal     = _r4[0]; var setMsgVal     = _r4[1];

  function handleFile(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) { setMsgVal('File too large — max 5MB.'); return; }
    setFileVal(f);
    var reader = new FileReader();
    reader.onload = function(ev) { setPreviewVal(ev.target.result); };
    reader.readAsDataURL(f);
    setMsgVal('');
  }

  function handleSubmit() {
    if (!fileVal) { setMsgVal('Pick a photo first.'); return; }
    if (!window.sb) { setMsgVal('Not connected to server.'); return; }
    setStatusVal('uploading');
    setMsgVal('Uploading...');
    window.sb.auth.getUser().then(function(res) {
      var user = res.data && res.data.user;
      if (!user) { setStatusVal('error'); setMsgVal('You must be logged in to submit photos.'); return; }
      var ext = fileVal.name.split('.').pop().toLowerCase() || 'jpg';
      var path = user.id + '/' + species + '/' + breed.replace(/[^a-zA-Z0-9]/g, '_') + '_' + Date.now() + '.' + ext;
      window.sb.storage.from('breed-photos').upload(path, fileVal, { upsert: false })
        .then(function(upRes) {
          if (upRes.error) { setStatusVal('error'); setMsgVal('Upload failed: ' + upRes.error.message); return; }
          var urlRes = window.sb.storage.from('breed-photos').getPublicUrl(path);
          var publicUrl = urlRes.data && urlRes.data.publicUrl;
          if (!publicUrl) { setStatusVal('error'); setMsgVal('Could not get public URL.'); return; }
          window.sb.from('breed_image_submissions').insert({
            user_id: user.id,
            species: species,
            breed: breed,
            storage_path: path,
            public_url: publicUrl,
            status: 'pending'
          }).then(function(insRes) {
            if (insRes.error) { setStatusVal('error'); setMsgVal('Submission failed: ' + insRes.error.message); return; }
            setStatusVal('done');
            setMsgVal('Submitted! Your photo will appear after review. Thanks!');
          });
        });
    });
  }

  var boxStyle = { background:'#071828', border:'1px solid #1e3a5f', borderRadius:8,
    padding:'10px 12px', display:'flex', flexDirection:'column', gap:8, fontSize:'0.78rem' };
  var btnStyle = function(col) { return { background:'transparent', border:'1px solid '+col,
    color:col, borderRadius:6, padding:'4px 10px', cursor:'pointer', fontSize:'0.75rem' }; };

  return React.createElement('div', { style: boxStyle },
    React.createElement('div', { style:{ display:'flex', alignItems:'center', justifyContent:'space-between' } },
      React.createElement('span', { style:{ color:'#38bdf8', fontWeight:'bold' } }, '📸 Submit Photo — ' + breed),
      React.createElement('button', { onClick: onCancel, style: btnStyle('#475569') }, '✕ Cancel')
    ),
    React.createElement('div', { style:{ color:'#64748b', fontSize:'0.7rem' } },
      'Photos are reviewed before going live. JPG/PNG/WEBP, max 5MB.'
    ),
    statusVal !== 'done' && React.createElement('input', {
      type:'file', accept:'image/jpeg,image/jpg,image/png,image/webp',
      onChange: handleFile,
      style:{ color:'#e2e8f0', fontSize:'0.72rem' }
    }),
    previewVal && statusVal !== 'done' && React.createElement('img', {
      src: previewVal,
      style:{ maxWidth:'100%', maxHeight:120, borderRadius:6, objectFit:'cover', border:'1px solid #1e3a5f' }
    }),
    msgVal && React.createElement('div', {
      style:{ color: statusVal==='error' ? '#ef4444' : statusVal==='done' ? '#22c55e' : '#94a3b8',
        fontSize:'0.72rem' }
    }, msgVal),
    statusVal !== 'done' && statusVal !== 'uploading' && React.createElement('div', {
      style:{ display:'flex', gap:8 }
    },
      React.createElement('button', {
        onClick: handleSubmit,
        disabled: !fileVal,
        style: Object.assign({}, btnStyle(fileVal ? '#22c55e' : '#334155'),
          { opacity: fileVal ? 1 : 0.5, cursor: fileVal ? 'pointer' : 'not-allowed' })
      }, '✅ Submit for Review')
    )
  );
}