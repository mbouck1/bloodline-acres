// ── Breed Image Uploader ─────────────────────────────────────────────────
// Globals: window.sb (Supabase client), React, window.baSupabaseSync

var SUPABASE_URL = "https://vjxaltcdvxlmnmymkcox.supabase.co";
var ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGFsdGNkdnhsbW5teW1rY294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjgxMjMsImV4cCI6MjA4ODg0NDEyM30.p-zRdzhyGpDd_ujKj1ScfPnIjiIgQEkOSxdy_BgrEeE";

function baGetAuthToken() {
  if (window.baSupabaseSync && window.baSupabaseSync.getToken) {
    return window.baSupabaseSync.getToken();
  }
  try {
    var keys = Object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].indexOf("-auth-token") !== -1) {
        var raw = localStorage.getItem(keys[i]);
        var parsed = JSON.parse(raw);
        if (parsed && parsed.access_token) return parsed.access_token;
        if (parsed && parsed.currentSession && parsed.currentSession.access_token) return parsed.currentSession.access_token;
      }
    }
  } catch(e) {}
  return ANON_KEY;
}

var BA_APPROVED_IMAGES = {};
var BA_IMAGES_LOADED = false;

function baLoadApprovedImages(callback) {
  var token = baGetAuthToken();
  fetch(SUPABASE_URL + "/rest/v1/breed_image_submissions?select=species,breed,public_url&status=eq.approved", {
    headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + token }
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (Array.isArray(data)) {
      data.forEach(function(row) {
        var key = (row.species || 'dog') + '::' + row.breed;
        BA_APPROVED_IMAGES[key] = row.public_url;
      });
    }
    BA_IMAGES_LOADED = true;
    if (callback) callback();
  })
  .catch(function() { BA_IMAGES_LOADED = true; if (callback) callback(); });
}

function baGetApprovedImage(species, breed) {
  var key = (species || 'dog') + '::' + breed;
  return BA_APPROVED_IMAGES[key] || null;
}

function BaImageUploader(props) {
  var species  = props.species  || 'dog';
  var breed    = props.breed    || '';
  var onCancel = props.onCancel || function(){};

  var _f = React.useState(null);   var fileVal    = _f[0]; var setFileVal    = _f[1];
  var _p = React.useState('');     var previewVal = _p[0]; var setPreviewVal = _p[1];
  var _s = React.useState('idle'); var statusVal  = _s[0]; var setStatusVal  = _s[1];
  var _m = React.useState('');     var msgVal     = _m[0]; var setMsgVal     = _m[1];

  function handleFile(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) { setMsgVal('File too large \u2014 max 5MB.'); return; }
    setFileVal(f);
    var reader = new FileReader();
    reader.onload = function(ev) { setPreviewVal(ev.target.result); };
    reader.readAsDataURL(f);
    setMsgVal('');
  }

  function handleSubmit() {
    if (!fileVal) { setMsgVal('Pick a photo first.'); return; }
    setStatusVal('uploading');
    setMsgVal('Uploading...');

    var token = baGetAuthToken();

    // Step 1: Get current user
    fetch(SUPABASE_URL + "/auth/v1/user", {
      headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + token }
    })
    .then(function(r) { return r.json(); })
    .then(function(userData) {
      if (!userData || !userData.id) {
        setStatusVal('error'); setMsgVal('You must be logged in to submit photos.');
        return;
      }
      var userId = userData.id;
      var ext = fileVal.name.split('.').pop().toLowerCase() || 'jpg';
      var safeName = breed.replace(/[^a-zA-Z0-9]/g, '_');
      var path = userId + '/' + species + '/' + safeName + '_' + Date.now() + '.' + ext;

      // Step 2: Upload to storage
      fetch(SUPABASE_URL + "/storage/v1/object/breed-photos/" + path, {
        method: "POST",
        headers: {
          "apikey": ANON_KEY,
          "Authorization": "Bearer " + token,
          "Content-Type": fileVal.type || "image/jpeg"
        },
        body: fileVal
      })
      .then(function(upRes) {
        if (!upRes.ok) {
          return upRes.text().then(function(t) {
            console.error("[BA Image] Storage upload failed:", t);
            setStatusVal('error'); setMsgVal('Upload failed: ' + t);
          });
        }
        var publicUrl = SUPABASE_URL + "/storage/v1/object/public/breed-photos/" + path;

        // Step 3: Insert submission record
        fetch(SUPABASE_URL + "/rest/v1/breed_image_submissions", {
          method: "POST",
          headers: {
            "apikey": ANON_KEY,
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            user_id: userId,
            species: species,
            breed: breed,
            storage_path: path,
            public_url: publicUrl,
            status: "pending"
          })
        })
        .then(function(insRes) {
          if (!insRes.ok) {
            return insRes.text().then(function(t) {
              console.error("[BA Image] DB insert failed:", t);
              setStatusVal('error'); setMsgVal('Submission failed: ' + t);
            });
          }
          console.log("[BA Image] Submission successful for " + breed);
          setStatusVal('done');
          setMsgVal('Submitted! Your photo will appear after review. Thanks!');
        });
      })
      .catch(function(err) {
        console.error("[BA Image] Upload error:", err);
        setStatusVal('error'); setMsgVal('Upload error: ' + err.message);
      });
    })
    .catch(function(err) {
      console.error("[BA Image] Auth error:", err);
      setStatusVal('error'); setMsgVal('Auth error: ' + err.message);
    });
  }

  var boxStyle = {
    background:'#071828', border:'1px solid #1e3a5f', borderRadius:8,
    padding:'10px 12px', display:'flex', flexDirection:'column', gap:8, fontSize:'0.78rem'
  };
  var btnBase = { borderRadius:6, padding:'4px 10px', cursor:'pointer', fontSize:'0.75rem', background:'transparent' };

  return React.createElement('div', { style: boxStyle },

    // Header
    React.createElement('div', { style:{ display:'flex', alignItems:'center', justifyContent:'space-between' } },
      React.createElement('span', { style:{ color:'#38bdf8', fontWeight:'bold' } }, '\uD83D\uDCF8 Submit Photo \u2014 ' + breed),
      React.createElement('button', {
        onClick: onCancel,
        style: Object.assign({}, btnBase, { border:'1px solid #475569', color:'#475569' })
      }, '\u2715 Cancel')
    ),

    // Instructions
    React.createElement('div', { style:{ color:'#64748b', fontSize:'0.7rem' } },
      'Photos are reviewed before going live. JPG/PNG/WEBP, max 5MB.'
    ),

    // File input
    statusVal !== 'done' && React.createElement('input', {
      type:'file', accept:'image/jpeg,image/jpg,image/png,image/webp',
      onChange: handleFile,
      style:{ color:'#e2e8f0', fontSize:'0.72rem' }
    }),

    // Preview
    previewVal && statusVal !== 'done' && React.createElement('img', {
      src: previewVal,
      style:{ maxWidth:'100%', maxHeight:120, borderRadius:6, objectFit:'cover', border:'1px solid #1e3a5f' }
    }),

    // Status message
    msgVal && React.createElement('div', {
      style:{
        color: statusVal==='error' ? '#ef4444' : statusVal==='done' ? '#22c55e' : '#94a3b8',
        fontSize:'0.72rem'
      }
    }, msgVal),

    // Submit button
    statusVal !== 'done' && statusVal !== 'uploading' && React.createElement('button', {
      onClick: handleSubmit,
      disabled: !fileVal,
      style: Object.assign({}, btnBase, {
        border: '1px solid ' + (fileVal ? '#22c55e' : '#334155'),
        color: fileVal ? '#22c55e' : '#475569',
        opacity: fileVal ? 1 : 0.5,
        cursor: fileVal ? 'pointer' : 'not-allowed'
      })
    }, '\u2705 Submit for Review')
  );
}
