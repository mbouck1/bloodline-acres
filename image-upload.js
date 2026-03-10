// image-upload.js — Supabase image submission & retrieval for Bloodline Acres

var BA_SUPABASE_URL  = "https://shlamfwaasjqtjjdnxma.supabase.co";
var BA_SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNobGFtZndhYXNqcXRqamRueG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzg4OTUsImV4cCI6MjA4ODcxNDg5NX0.XgvJsSGdZLGLbkZc4wvriUKSCK-OKFuDA86Vr1yIGDc";

// ── In-memory cache of approved images: { "species:breed": url } ──────────
var BA_APPROVED_IMAGES = {};
var BA_IMAGES_LOADED   = false;

// Load all approved images from Supabase on startup
function baLoadApprovedImages(callback) {
  fetch(BA_SUPABASE_URL + "/rest/v1/animal_images?status=eq.approved&select=species,breed,image_url", {
    headers: {
      "apikey": BA_SUPABASE_ANON,
      "Authorization": "Bearer " + BA_SUPABASE_ANON
    }
  })
  .then(function(r){ return r.json(); })
  .then(function(rows){
    BA_APPROVED_IMAGES = {};
    if (Array.isArray(rows)) {
      rows.forEach(function(row){
        var key = row.species + ":" + row.breed;
        BA_APPROVED_IMAGES[key] = row.image_url;
      });
    }
    BA_IMAGES_LOADED = true;
    if (callback) callback(BA_APPROVED_IMAGES);
  })
  .catch(function(e){
    console.warn("BA: Could not load approved images", e);
    BA_IMAGES_LOADED = true;
    if (callback) callback({});
  });
}

// Get approved image URL for a specific animal (returns null if none)
function baGetApprovedImage(species, breed) {
  return BA_APPROVED_IMAGES[species + ":" + breed] || null;
}

// Upload image file to Supabase Storage, then submit to DB as pending
function baSubmitImage(species, breed, file, submitterName, onSuccess, onError) {
  if (!file) { onError("No file selected."); return; }
  if (file.size > 2 * 1024 * 1024) { onError("Image must be under 2MB."); return; }
  if (!file.type.startsWith("image/")) { onError("File must be an image."); return; }

  // Sanitize filename
  var ext = file.name.split(".").pop().toLowerCase() || "jpg";
  var safe = (species + "_" + breed).replace(/[^a-zA-Z0-9_-]/g, "_").toLowerCase();
  var filename = safe + "_" + Date.now() + "." + ext;
  var storagePath = "submissions/" + filename;

  // Upload to Storage
  fetch(BA_SUPABASE_URL + "/storage/v1/object/animal-images/" + storagePath, {
    method: "POST",
    headers: {
      "apikey": BA_SUPABASE_ANON,
      "Authorization": "Bearer " + BA_SUPABASE_ANON,
      "Content-Type": file.type,
      "x-upsert": "false"
    },
    body: file
  })
  .then(function(r){
    if (!r.ok) return r.json().then(function(e){ throw new Error(e.message || "Upload failed"); });
    return r.json();
  })
  .then(function(){
    var publicUrl = BA_SUPABASE_URL + "/storage/v1/object/public/animal-images/" + storagePath;
    // Insert record into DB as pending
    return fetch(BA_SUPABASE_URL + "/rest/v1/animal_images", {
      method: "POST",
      headers: {
        "apikey": BA_SUPABASE_ANON,
        "Authorization": "Bearer " + BA_SUPABASE_ANON,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        species: species,
        breed: breed,
        image_url: publicUrl,
        submitter_name: submitterName || "Anonymous",
        status: "pending"
      })
    });
  })
  .then(function(r){
    if (!r.ok) return r.json().then(function(e){ throw new Error(e.message || "DB insert failed"); });
    return r.json();
  })
  .then(function(){ onSuccess(); })
  .catch(function(e){ onError(e.message || "Submission failed."); });
}

// ── DRAG-DROP UPLOAD WIDGET (used on animal cards) ─────────────────────────
function BaImageUploader(props) {
  var species  = props.species;
  var breed    = props.breed;
  var onCancel = props.onCancel;

  var _ds = React.useState(false),   dragging   = _ds[0], setDragging   = _ds[1];
  var _fs = React.useState(null),    file        = _fs[0], setFile        = _fs[1];
  var _ps = React.useState(null),    preview     = _ps[0], setPreview     = _ps[1];
  var _ns = React.useState(""),      name        = _ns[0], setName        = _ns[1];
  var _ss = React.useState("idle"),  status      = _ss[0], setStatus      = _ss[1];
  var _es = React.useState(""),      errMsg      = _es[0], setErrMsg      = _es[1];

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) { setErrMsg("Please select an image file."); return; }
    if (f.size > 2 * 1024 * 1024) { setErrMsg("Image must be under 2MB."); return; }
    setFile(f);
    setErrMsg("");
    var reader = new FileReader();
    reader.onload = function(e){ setPreview(e.target.result); };
    reader.readAsDataURL(f);
  }

  function handleDrop(e) {
    e.preventDefault(); setDragging(false);
    var f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) handleFile(f);
  }

  function handleSubmit() {
    if (!file) { setErrMsg("Please choose an image first."); return; }
    setStatus("uploading");
    baSubmitImage(species, breed, file, name,
      function(){ setStatus("done"); },
      function(e){ setStatus("error"); setErrMsg(e); }
    );
  }

  if (status === "done") {
    return React.createElement("div", {
      style:{background:"#0f2010",border:"1px solid #22c55e",borderRadius:8,padding:16,textAlign:"center"}
    },
      React.createElement("div",{style:{fontSize:"2rem",marginBottom:8}},"✅"),
      React.createElement("div",{style:{color:"#22c55e",fontWeight:"bold",marginBottom:4}},"Submitted for review!"),
      React.createElement("div",{style:{color:"#64748b",fontSize:"0.75rem",marginBottom:12}},
        "Your image will appear once a mod approves it. Thanks!"),
      React.createElement("button",{onClick:onCancel,
        style:{background:"#1a2a1a",border:"1px solid #22c55e",color:"#22c55e",
          borderRadius:6,padding:"6px 18px",cursor:"pointer",fontSize:"0.8rem"}},
        "Close")
    );
  }

  return React.createElement("div",{
    style:{background:"#0a0f14",border:"1px solid #1e3a5f",borderRadius:8,padding:14,
      display:"flex",flexDirection:"column",gap:10}
  },
    // Header
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},
      React.createElement("div",{style:{color:"#38bdf8",fontWeight:"bold",fontSize:"0.88rem"}},
        "📸 Submit Photo — ",
        React.createElement("span",{style:{color:"#94a3b8"}}, breed)),
      React.createElement("button",{onClick:onCancel,
        style:{background:"none",border:"none",color:"#475569",cursor:"pointer",fontSize:"1rem"}},
        "✕")
    ),

    // Drop zone
    React.createElement("div",{
      onDragOver:function(e){e.preventDefault();setDragging(true);},
      onDragLeave:function(){setDragging(false);},
      onDrop:handleDrop,
      onClick:function(){document.getElementById("ba-file-input-"+species+breed.replace(/\s/g,"")).click();},
      style:{
        border:"2px dashed "+(dragging?"#38bdf8":"#1e3a5f"),
        borderRadius:8, padding:preview?"4px":"24px",
        textAlign:"center", cursor:"pointer",
        background:dragging?"#071828":"#080e14",
        transition:"all 0.15s", minHeight:preview?0:80,
        display:"flex",alignItems:"center",justifyContent:"center"
      }
    },
      preview
        ? React.createElement("img",{src:preview,alt:"preview",
            style:{maxHeight:140,maxWidth:"100%",borderRadius:6,objectFit:"contain"}})
        : React.createElement("div",{},
            React.createElement("div",{style:{fontSize:"1.8rem",marginBottom:4}},"🖼️"),
            React.createElement("div",{style:{color:"#38bdf8",fontSize:"0.78rem",fontWeight:"bold"}},"Drop image here"),
            React.createElement("div",{style:{color:"#475569",fontSize:"0.68rem"}},"or click to browse • max 2MB")
          )
    ),
    React.createElement("input",{
      id:"ba-file-input-"+species+breed.replace(/\s/g,""),
      type:"file", accept:"image/*",
      style:{display:"none"},
      onChange:function(e){ if(e.target.files[0]) handleFile(e.target.files[0]); }
    }),

    // Name field
    React.createElement("input",{
      type:"text", placeholder:"Your name (optional)",
      value:name, onChange:function(e){setName(e.target.value);},
      style:{background:"#0a0f14",border:"1px solid #1e3a5f",color:"#e2e8f0",
        borderRadius:5,padding:"6px 10px",fontSize:"0.78rem"}
    }),

    // Error
    errMsg && React.createElement("div",{style:{color:"#ef4444",fontSize:"0.72rem"}}, "⚠️ "+errMsg),

    // Notice
    React.createElement("div",{style:{color:"#475569",fontSize:"0.65rem",lineHeight:1.4}},
      "📋 Images are reviewed before going live. Please submit real breed photos only — no memes, logos, or watermarked images."),

    // Submit
    React.createElement("button",{
      onClick:handleSubmit,
      disabled:!file||status==="uploading",
      style:{background:file?"#0c2a4a":"#0a0f14",
        border:"1px solid "+(file?"#38bdf8":"#1e3a5f"),
        color:file?"#38bdf8":"#334155",
        borderRadius:6,padding:"8px 0",cursor:file?"pointer":"default",
        fontSize:"0.82rem",fontWeight:"bold"}
    }, status==="uploading"?"Uploading...":"Submit for Review")
  );
}
