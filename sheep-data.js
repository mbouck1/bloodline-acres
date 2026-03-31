// ══════════════════════════════════════════════════════════════════════════════
// SHEEP GENETICS ENGINE — sheep-data.js
// 20 breeds across 3 types: Wool, Meat, Dual Purpose
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as goat-data.js.
// ══════════════════════════════════════════════════════════════════════════════

// ── BREED DEFINITIONS ────────────────────────────────────────────────────────
// Weights in lbs (ram avg). Heights in inches at withers.
// coatFreqs: A = Agouti pattern, B = Brown, S = Spotting, W = White/pigment, Bl = Black
// healthProfile: 0-1 probability of "G" (good) allele
// perfProfile: 1-5 scale per QTL
// Perf QTLs: WOOL, GROWTH, MUSCLE, TEMP, HARDY, MILK
//   (WOOL only matters for wool breeds; meat breeds get 1-2)
//   (MILK only matters for dairy-leaning dual breeds)

var SHEEP_BREED_DEFS = [
  // ═══ WOOL (7) ═══
  { name:"Merino",           group:"Wool",   weightRam:185, weightEwe:135, weightRange:[110,230], heightAvg:27, type:"wool",
    colors:["White","Cream"],
    healthProfile:{FootQ:0.80,ParasiteQ:0.75,UdderQ:0.70,RespiQ:0.80,FertQ:0.80},
    perfProfile:{WOOL:5,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:4,MILK:2},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.90],["b",0.10]],S:[["S",1.0]],W:[["W",0.92],["w",0.08]],Bl:[["bl",1.0]]} },

  { name:"Rambouillet",      group:"Wool",   weightRam:225, weightEwe:160, weightRange:[130,275], heightAvg:29, type:"wool",
    colors:["White","Ivory"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.78,UdderQ:0.72,RespiQ:0.82,FertQ:0.82},
    perfProfile:{WOOL:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:4,MILK:2},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.90],["b",0.10]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Bl:[["bl",1.0]]} },

  { name:"Corriedale",       group:"Wool",   weightRam:200, weightEwe:150, weightRange:[120,250], heightAvg:28, type:"wool",
    colors:["White","Cream"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.80,UdderQ:0.75,RespiQ:0.82,FertQ:0.82},
    perfProfile:{WOOL:4,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:4,MILK:2},
    coatFreqs:{A:[["Aw",0.90],["At",0.10]],B:[["B",0.85],["b",0.15]],S:[["S",0.95],["s",0.05]],W:[["W",0.88],["w",0.12]],Bl:[["bl",1.0]]} },

  { name:"Romney",           group:"Wool",   weightRam:225, weightEwe:160, weightRange:[130,275], heightAvg:28, type:"wool",
    colors:["White","Silver","Gray"],
    healthProfile:{FootQ:0.88,ParasiteQ:0.85,UdderQ:0.72,RespiQ:0.82,FertQ:0.80},
    perfProfile:{WOOL:4,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:5,MILK:2},
    coatFreqs:{A:[["Aw",0.75],["At",0.20],["Aa",0.05]],B:[["B",0.80],["b",0.20]],S:[["S",0.90],["s",0.10]],W:[["W",0.70],["w",0.30]],Bl:[["bl",1.0]]} },

  { name:"Lincoln",          group:"Wool",   weightRam:275, weightEwe:200, weightRange:[170,350], heightAvg:31, type:"wool",
    colors:["White","Silver"],
    healthProfile:{FootQ:0.80,ParasiteQ:0.78,UdderQ:0.68,RespiQ:0.78,FertQ:0.78},
    perfProfile:{WOOL:5,GROWTH:3,MUSCLE:3,TEMP:3,HARDY:3,MILK:1},
    coatFreqs:{A:[["Aw",0.90],["At",0.10]],B:[["B",0.85],["b",0.15]],S:[["S",1.0]],W:[["W",0.88],["w",0.12]],Bl:[["bl",1.0]]} },

  { name:"Shetland",         group:"Wool",   weightRam:90, weightEwe:75, weightRange:[55,125], heightAvg:22, type:"wool",
    colors:["White","Black","Moorit","Gray","Fawn","Dark Brown","Emsket","Shaela","Musket","Mioget","Katmoget"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.88,UdderQ:0.75,RespiQ:0.85,FertQ:0.85},
    perfProfile:{WOOL:4,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:5,MILK:2},
    coatFreqs:{A:[["Aw",0.30],["At",0.30],["Ab",0.20],["Aa",0.20]],B:[["B",0.50],["b",0.50]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],Bl:[["Bl",0.15],["bl",0.85]]} },

  { name:"Bluefaced Leicester",group:"Wool", weightRam:200, weightEwe:150, weightRange:[120,250], heightAvg:28, type:"wool",
    colors:["White","White with dark speckles"],
    healthProfile:{FootQ:0.78,ParasiteQ:0.75,UdderQ:0.78,RespiQ:0.78,FertQ:0.85},
    perfProfile:{WOOL:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,MILK:3},
    coatFreqs:{A:[["Aw",0.85],["At",0.15]],B:[["B",0.80],["b",0.20]],S:[["S",0.85],["s",0.15]],W:[["W",0.85],["w",0.15]],Bl:[["bl",1.0]]} },

  // ═══ MEAT (7) ═══
  { name:"Suffolk",          group:"Meat",   weightRam:275, weightEwe:200, weightRange:[165,350], heightAvg:30, type:"meat",
    colors:["White body, Black face and legs"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.78,UdderQ:0.70,RespiQ:0.78,FertQ:0.82},
    perfProfile:{WOOL:2,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3,MILK:2},
    coatFreqs:{A:[["Aw",0.90],["At",0.10]],B:[["B",0.95],["b",0.05]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Bl:[["Bl",0.85],["bl",0.15]]} },

  { name:"Hampshire",        group:"Meat",   weightRam:275, weightEwe:200, weightRange:[165,350], heightAvg:30, type:"meat",
    colors:["White with dark face"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.78,UdderQ:0.72,RespiQ:0.80,FertQ:0.85},
    perfProfile:{WOOL:2,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3,MILK:2},
    coatFreqs:{A:[["Aw",0.85],["At",0.15]],B:[["B",0.92],["b",0.08]],S:[["S",1.0]],W:[["W",0.85],["w",0.15]],Bl:[["Bl",0.80],["bl",0.20]]} },

  { name:"Texel",            group:"Meat",   weightRam:220, weightEwe:165, weightRange:[130,280], heightAvg:27, type:"meat",
    colors:["White"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.80,UdderQ:0.70,RespiQ:0.82,FertQ:0.80},
    perfProfile:{WOOL:2,GROWTH:4,MUSCLE:5,TEMP:4,HARDY:4,MILK:1},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.95],["b",0.05]],S:[["S",1.0]],W:[["W",0.92],["w",0.08]],Bl:[["bl",1.0]]} },

  { name:"Dorper",           group:"Meat",   weightRam:230, weightEwe:175, weightRange:[140,295], heightAvg:27, type:"meat",
    colors:["White body, Black head","All White"],
    healthProfile:{FootQ:0.88,ParasiteQ:0.90,UdderQ:0.72,RespiQ:0.85,FertQ:0.90},
    perfProfile:{WOOL:1,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:5,MILK:2},
    coatFreqs:{A:[["Aw",0.85],["At",0.15]],B:[["B",0.85],["b",0.15]],S:[["S",0.60],["s",0.40]],W:[["W",0.50],["w",0.50]],Bl:[["Bl",0.60],["bl",0.40]]} },

  { name:"Katahdin",         group:"Meat",   weightRam:225, weightEwe:160, weightRange:[130,280], heightAvg:27, type:"meat",
    colors:["White","Red","Brown","Black","Spotted","Any Color"],
    healthProfile:{FootQ:0.90,ParasiteQ:0.92,UdderQ:0.75,RespiQ:0.85,FertQ:0.90},
    perfProfile:{WOOL:1,GROWTH:4,MUSCLE:4,TEMP:5,HARDY:5,MILK:2},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Dorset",           group:"Meat",   weightRam:225, weightEwe:165, weightRange:[130,280], heightAvg:27, type:"meat",
    colors:["White"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.80,UdderQ:0.78,RespiQ:0.82,FertQ:0.88},
    perfProfile:{WOOL:3,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4,MILK:3},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.95],["b",0.05]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Bl:[["bl",1.0]]} },

  { name:"Southdown",        group:"Meat",   weightRam:190, weightEwe:140, weightRange:[110,240], heightAvg:24, type:"meat",
    colors:["White with light brown face","Mouse-colored face"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.82,UdderQ:0.75,RespiQ:0.85,FertQ:0.85},
    perfProfile:{WOOL:3,GROWTH:4,MUSCLE:5,TEMP:5,HARDY:4,MILK:2},
    coatFreqs:{A:[["Aw",0.80],["At",0.20]],B:[["B",0.70],["b",0.30]],S:[["S",0.95],["s",0.05]],W:[["W",0.80],["w",0.20]],Bl:[["bl",1.0]]} },

  // ═══ DUAL PURPOSE (6) ═══
  { name:"Columbia",         group:"Dual",   weightRam:250, weightEwe:175, weightRange:[140,310], heightAvg:29, type:"dual",
    colors:["White"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.80,UdderQ:0.75,RespiQ:0.82,FertQ:0.85},
    perfProfile:{WOOL:4,GROWTH:4,MUSCLE:3,TEMP:4,HARDY:4,MILK:2},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.90],["b",0.10]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Bl:[["bl",1.0]]} },

  { name:"Polypay",          group:"Dual",   weightRam:200, weightEwe:150, weightRange:[120,250], heightAvg:27, type:"dual",
    colors:["White"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.82,UdderQ:0.80,RespiQ:0.82,FertQ:0.90},
    perfProfile:{WOOL:3,GROWTH:4,MUSCLE:3,TEMP:4,HARDY:4,MILK:3},
    coatFreqs:{A:[["Aw",0.95],["At",0.05]],B:[["B",0.90],["b",0.10]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Bl:[["bl",1.0]]} },

  { name:"Finn",             group:"Dual",   weightRam:170, weightEwe:130, weightRange:[100,210], heightAvg:26, type:"dual",
    colors:["White","Black","Brown","Gray","Pied"],
    healthProfile:{FootQ:0.80,ParasiteQ:0.78,UdderQ:0.82,RespiQ:0.78,FertQ:0.92},
    perfProfile:{WOOL:3,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,MILK:3},
    coatFreqs:{A:[["Aw",0.30],["At",0.25],["Ab",0.20],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.50],["s",0.50]],W:[["W",0.30],["w",0.70]],Bl:[["Bl",0.10],["bl",0.90]]} },

  { name:"Icelandic",        group:"Dual",   weightRam:185, weightEwe:140, weightRange:[110,235], heightAvg:27, type:"dual",
    colors:["White","Black","Moorit","Gray","Badgerface","Mouflon"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.88,UdderQ:0.78,RespiQ:0.85,FertQ:0.85},
    perfProfile:{WOOL:4,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:5,MILK:3},
    coatFreqs:{A:[["Aw",0.25],["At",0.30],["Ab",0.25],["Aa",0.20]],B:[["B",0.50],["b",0.50]],S:[["S",0.50],["s",0.50]],W:[["W",0.20],["w",0.80]],Bl:[["Bl",0.10],["bl",0.90]]} },

  { name:"Jacob",            group:"Dual",   weightRam:160, weightEwe:120, weightRange:[90,200], heightAvg:25, type:"dual",
    colors:["Black and White Spotted","Lilac and White"],
    healthProfile:{FootQ:0.85,ParasiteQ:0.85,UdderQ:0.75,RespiQ:0.85,FertQ:0.85},
    perfProfile:{WOOL:3,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:5,MILK:2},
    coatFreqs:{A:[["Aw",0.20],["At",0.20],["Ab",0.20],["Aa",0.40]],B:[["B",0.60],["b",0.40]],S:[["s",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Tunis",            group:"Dual",   weightRam:200, weightEwe:150, weightRange:[120,250], heightAvg:27, type:"dual",
    colors:["Cream body, Red-tan face and legs"],
    healthProfile:{FootQ:0.82,ParasiteQ:0.82,UdderQ:0.78,RespiQ:0.82,FertQ:0.85},
    perfProfile:{WOOL:3,GROWTH:4,MUSCLE:3,TEMP:5,HARDY:4,MILK:3},
    coatFreqs:{A:[["Aw",0.60],["At",0.30],["Ab",0.10]],B:[["B",0.40],["b",0.60]],S:[["S",0.85],["s",0.15]],W:[["W",0.70],["w",0.30]],Bl:[["bl",1.0]]} }
];

// ── LOOKUP HELPERS ───────────────────────────────────────────────────────────

var SHEEP_WOOL_BREEDS = SHEEP_BREED_DEFS.filter(function(b){ return b.type==="wool"; }).map(function(b){ return b.name; });
var SHEEP_MEAT_BREEDS = SHEEP_BREED_DEFS.filter(function(b){ return b.type==="meat"; }).map(function(b){ return b.name; });
var SHEEP_DUAL_BREEDS = SHEEP_BREED_DEFS.filter(function(b){ return b.type==="dual"; }).map(function(b){ return b.name; });

// ── QTL DEFINITIONS ─────────────────────────────────────────────────────────

var SHEEP_PERF_QTLS   = ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];
var SHEEP_HEALTH_QTLS = ["FootQ","ParasiteQ","UdderQ","RespiQ","FertQ"];

var SHEEP_PERF_QTL_INFO = {
  WOOL:   { icon:"\uD83E\uDDF6", full:"Wool Quality",       desc:"Fleece yield, crimp, and fineness" },
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",        desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Muscle/Carcass",     desc:"Meat quality and yield" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",        desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",          desc:"Cold tolerance and resilience" },
  MILK:   { icon:"\uD83E\uDD5B", full:"Milk Yield",         desc:"Ewe milk production for lamb growth" }
};

var SHEEP_HEALTH_QTL_INFO = {
  FootQ:     { icon:"\uD83E\uDDB6", full:"Foot Health",         desc:"Resistance to foot rot and scald" },
  ParasiteQ: { icon:"\uD83E\uDDA0", full:"Parasite Resistance", desc:"Natural resistance to internal parasites" },
  UdderQ:    { icon:"\uD83C\uDF7C", full:"Udder Quality",       desc:"Udder attachment and teat structure" },
  RespiQ:    { icon:"\uD83D\uDCA8", full:"Respiratory Health",  desc:"Resistance to pneumonia and pasteurella" },
  FertQ:     { icon:"\uD83C\uDF31", full:"Fertility",           desc:"Conception rate and lambing ease" }
};

// ── GENOME GENERATION ────────────────────────────────────────────────────────

function pickWeightedSheep(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidSheep(freqArr) {
  return [pickWeightedSheep(freqArr), pickWeightedSheep(freqArr)];
}

function punnettSheep(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generateSheepGenome(breedName) {
  var breed = SHEEP_BREED_DEFS.find(function(b){ return b.name === breedName; }) || SHEEP_BREED_DEFS[0];

  // Coat loci
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["A","B","S","W","Bl"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidSheep(cf[loc]) : ["N","N"];
  });

  // Health QTLs: G = good, g = poor
  var health = {};
  SHEEP_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidSheep([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });

  // Performance QTLs: 1-5 scale per allele
  var perf = {};
  SHEEP_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedSheepGenomes(g1, g2) {
  var coat = {};
  ["A","B","S","W","Bl"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettSheep(a[0], a[1]), punnettSheep(b[0], b[1])];
  });

  var health = {};
  SHEEP_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettSheep(a[0], a[1]), punnettSheep(b[0], b[1])];
  });

  var perf = {};
  SHEEP_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettSheep(a[0], a[1]);
    var v2 = punnettSheep(b[0], b[1]);
    // Small mutation chance
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────
// A = Agouti: Aw (wild/white), At (tan/badgerface), Ab (brown/grey), Aa (self/solid) — dominance: Aw > At > Ab > Aa
// B = Brown: B (black-based), b (brown/moorit) — B dominant
// S = Spotting: S (solid), s (spotted/piebald) — S dominant, ss = heavy spotting
// W = White: W (dominant white, masks color), w (shows color) — W dominant
// Bl = Black face: Bl (dark face/legs), bl (light face) — Bl dominant

function interpretSheepColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;

  var A  = c.A  || ["Aw","Aw"];
  var B  = c.B  || ["B","B"];
  var S  = c.S  || ["S","S"];
  var W  = c.W  || ["w","w"];
  var Bl = c.Bl || ["bl","bl"];

  // Dominant white masks everything to white fleece
  var isWhite = W[0] === "W" || W[1] === "W";

  // Black face / dark points
  var hasDarkFace = Bl[0] === "Bl" || Bl[1] === "Bl";

  // Brown locus: bb = moorit/brown base
  var isMoorit = B[0] === "b" && B[1] === "b";

  // Agouti dominance
  var agoutiOrder = { Aw: 4, At: 3, Ab: 2, Aa: 1 };
  var a0rank = agoutiOrder[A[0]] || 1;
  var a1rank = agoutiOrder[A[1]] || 1;
  var topAgouti = a0rank >= a1rank ? A[0] : A[1];

  // Spotting
  var hasSpots = S[0] === "s" || S[1] === "s";
  var heavySpots = S[0] === "s" && S[1] === "s";

  // Build color description
  if (isWhite) {
    if (hasDarkFace) return "White with Dark Face";
    if (heavySpots) return "White Spotted";
    return "White";
  }

  // Non-white sheep — show underlying color
  var base;
  if (topAgouti === "Aw") {
    base = isMoorit ? "Light Moorit" : "Light Gray";
  } else if (topAgouti === "At") {
    base = isMoorit ? "Moorit Badgerface" : "Gray Badgerface";
  } else if (topAgouti === "Ab") {
    base = isMoorit ? "Moorit" : "Gray";
  } else { // Aa = self
    base = isMoorit ? "Dark Moorit" : "Black";
  }

  if (hasDarkFace) base += ", Dark Face";
  if (heavySpots) return base + " and White";
  if (hasSpots) return base + " Spotted";
  return base;
}

// ── SCORING ─────────────────────────────────────────────────────────────────

function calcSheepHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  SHEEP_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / SHEEP_HEALTH_QTLS.length);
}

function calcSheepPerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  SHEEP_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (SHEEP_PERF_QTLS.length * 5)) * 100);
}

// ── NAMES ───────────────────────────────────────────────────────────────────

var SHEEP_NAMES_M = [
  "Ramsey","Angus","Baxter","Chester","Dusty","Earl","Fleece","Gideon",
  "Hardy","Ivan","Jupiter","Kingston","Lambert","Magnus","Noel","Oliver",
  "Porter","Quincy","Rufus","Sterling","Thatch","Ulysses","Vane","Winston"
];
var SHEEP_NAMES_F = [
  "Clover","Daisy","Elsie","Fern","Greta","Hazel","Iris","Juniper",
  "Keira","Luna","Maple","Nellie","Opal","Primrose","Quinn","Rosemary",
  "Sage","Tilly","Uma","Violet","Willow","Xena","Yarrow","Zinnia"
];

function generateSheepName(sex, existingNames) {
  var pool = sex === "M" ? SHEEP_NAMES_M : SHEEP_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ─────────────────────────────────────────────────────────

function createSheep(breedName, type, sex, ageMonths) {
  var breed = SHEEP_BREED_DEFS.find(function(b){ return b.name === breedName; }) || SHEEP_BREED_DEFS[0];
  var genome = generateSheepGenome(breedName);
  var coatColor = interpretSheepColor(genome);
  var healthScore = calcSheepHealthScore(genome);
  var perfScore = calcSheepPerfScore(genome);

  var baseWeight = sex === "F" ? (breed.weightEwe || breed.weightRam * 0.72) : (breed.weightRam || 200);
  var weight = baseWeight + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.2);
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 4);
  if (sex === "F") height = Math.round(height * 0.93);

  // Pricing by type
  var basePrices = { wool: 200, meat: 150, dual: 175 };
  var base = basePrices[breed.type] || 150;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 25) * 25;

  // Wool yield (lbs per shearing)
  var woolQtl = (genome.perf||{}).WOOL || [3,3];
  var woolAvg = (woolQtl[0]+woolQtl[1])/2;
  var shearYield = Math.round(woolAvg * (breed.type === "wool" ? 2.5 : breed.type === "dual" ? 1.8 : 1.0) * 10) / 10;

  return {
    id: "sheep_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "sheep",
    name: generateSheepName(sex),
    breed: breedName,
    group: breed.group,
    type: type || breed.type,
    sex: sex || "F",
    ageMonths: ageMonths || (Math.floor(Math.random()*36) + 8),
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: weight,
    heightIn: height,
    price: price,
    coi: 0,
    sireId: null,
    damId: null,
    generation: 1,
    lifespan: 120 + Math.round((Math.random()-0.5) * 36), // ~8.5-13 years
    shearYield: shearYield
  };
}

// ── LAMB CREATION (breeding) ────────────────────────────────────────────────

function createLamb(sire, dam) {
  var genome = breedSheepGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = SHEEP_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretSheepColor(genome);
  var healthScore = calcSheepHealthScore(genome);
  var perfScore = calcSheepPerfScore(genome);

  var sireW = sire.weightLbs || 200;
  var damW = dam.weightLbs || 150;
  var avgW = Math.round((sireW + damW) / 2);
  var weight = avgW + Math.round((Math.random()-0.5) * 30);
  if (sex === "F") weight = Math.round(weight * 0.75);

  var sireH = sire.heightIn || 27;
  var damH = dam.heightIn || 27;
  var height = Math.round((sireH + damH) / 2) + Math.round((Math.random()-0.5) * 3);

  // COI calculation
  var coi = sire.breed === dam.breed ? Math.round((3 + Math.random()*3)*10)/10 : 0;
  if (sire.sireId && dam.sireId && sire.sireId === dam.sireId) coi += 12.5;
  if (sire.damId && dam.damId && sire.damId === dam.damId) coi += 12.5;

  var lambType = dam.type || (breedDef ? breedDef.type : "dual");

  // Wool yield
  var woolQtl = (genome.perf||{}).WOOL || [3,3];
  var woolAvg = (woolQtl[0]+woolQtl[1])/2;
  var shearYield = Math.round(woolAvg * (lambType === "wool" ? 2.5 : lambType === "dual" ? 1.8 : 1.0) * 10) / 10;

  return {
    id: "sheep_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "sheep",
    name: generateSheepName(sex),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Dual",
    type: lambType,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(weight * 0.06), // lambs are ~6% of adult weight
    heightIn: Math.round(height * 0.40),
    price: 0,
    coi: Math.min(coi, 50),
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation||1, dam.generation||1) + 1,
    lifespan: 120 + Math.round((Math.random()-0.5) * 36),
    shearYield: shearYield
  };
}

// ── NORMALIZE (healing existing sheep that lack genetics) ────────────────────

function normalizeSheep(animal) {
  if (!animal || animal.species !== "sheep") return animal;
  if (animal.genome) return animal; // already has genetics

  var breedDef = SHEEP_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || null;
  // Assign a random breed if none or unrecognized
  if (!breedDef) {
    var type = animal.type || randomSheepType();
    var breedName = sheepBreedForType(type);
    breedDef = SHEEP_BREED_DEFS.find(function(b){ return b.name === breedName; }) || SHEEP_BREED_DEFS[0];
  }

  var genome = generateSheepGenome(breedDef.name);
  var coatColor = interpretSheepColor(genome);
  var healthScore = calcSheepHealthScore(genome);
  var perfScore = calcSheepPerfScore(genome);

  var woolQtl = (genome.perf||{}).WOOL || [3,3];
  var woolAvg = (woolQtl[0]+woolQtl[1])/2;
  var shearYield = Math.round(woolAvg * (breedDef.type === "wool" ? 2.5 : breedDef.type === "dual" ? 1.8 : 1.0) * 10) / 10;

  return Object.assign({}, animal, {
    name: animal.name || breedDef.name,
    breed: breedDef.name,
    group: breedDef.group,
    type: breedDef.type,
    genome: genome,
    coatColor: coatColor,
    ageMonths: animal.ageMonths || (Math.floor(Math.random()*36) + 8),
    healthScore: animal.healthScore != null ? animal.healthScore : healthScore,
    perfScore: animal.perfScore != null ? animal.perfScore : perfScore,
    weightLbs: animal.weightLbs || (animal.sex === "F" ? (breedDef.weightEwe || 150) : (breedDef.weightRam || 200)),
    heightIn: animal.heightIn || breedDef.heightAvg || 27,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (120 + Math.round((Math.random()-0.5) * 36)),
    shearYield: animal.shearYield != null ? animal.shearYield : shearYield,
    coi: animal.coi || 0
  });
}

// ── MARKET HELPERS ──────────────────────────────────────────────────────────

function randomSheepType() {
  var r = Math.random();
  if (r < 0.35) return "wool";
  if (r < 0.65) return "meat";
  return "dual";
}

function sheepBreedForType(type) {
  var list = type==="wool" ? SHEEP_WOOL_BREEDS : type==="meat" ? SHEEP_MEAT_BREEDS : SHEEP_DUAL_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

// Commodity output constants
var SHEEP_WOOL_OUTPUT = {
  wool: 10,   // lbs per shearing season (base, genetics adjust via shearYield)
  meat:  3,
  dual:  7
};

var SHEEP_MEAT_PRICE = {
  wool: 200,
  meat: 260,
  dual: 240
};
