// ══════════════════════════════════════════════════════════════════════════════
// GOAT GENETICS ENGINE — goat-data.js
// 25 breeds across 4 types: Dairy, Meat, Fiber, Dual Purpose
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as cattle genetics in game.js.
// ══════════════════════════════════════════════════════════════════════════════

// ── BREED DEFINITIONS ────────────────────────────────────────────────────────
// Weights in lbs (buck avg). Heights in inches at withers.
// coatFreqs: A = Agouti (dominant patterns), B = Brown, S = Spotting, W = White, Rn = Roan
// healthProfile: 0-1 probability of "G" (good) allele
// perfProfile: 1-5 scale per QTL
// Perf QTLs: MILK, GROWTH, MUSCLE, TEMP, HARDY, FIBER
//   (FIBER only matters for fiber breeds; others get 1)

var GOAT_BREED_DEFS = [
  // ═══ DAIRY (9) ═══
  // weightBuck/weightDoe = average adult weights in lbs
  { name:"Alpine",          group:"Dairy",  weightBuck:170, weightDoe:135, weightRange:[120,200], heightAvg:32, type:"dairy",
    colors:["Cou Blanc","Cou Clair","Cou Noir","Chamoisee","Sundgau","Pied","Two-Tone"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.85,RespiQ:0.80,FertQ:0.85},
    perfProfile:{MILK:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.30],["At",0.30],["Ab",0.20],["Aa",0.20]],B:[["B",0.70],["b",0.30]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Nubian",          group:"Dairy",  weightBuck:175, weightDoe:135, weightRange:[120,210], heightAvg:32, type:"dairy",
    colors:["Bay","Black","Red","Tan","Spotted","Multicolor"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.85,RespiQ:0.80,FertQ:0.85},
    perfProfile:{MILK:4,GROWTH:4,MUSCLE:3,TEMP:3,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.60],["b",0.40]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Saanen",          group:"Dairy",  weightBuck:170, weightDoe:135, weightRange:[120,200], heightAvg:32, type:"dairy",
    colors:["White","Cream"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.90,RespiQ:0.75,FertQ:0.85},
    perfProfile:{MILK:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",1.0]],B:[["B",1.0]],S:[["S",1.0]],W:[["W",0.90],["w",0.10]],Rn:[["rn",1.0]]} },

  { name:"Sable",           group:"Dairy",  weightBuck:165, weightDoe:130, weightRange:[115,195], heightAvg:31, type:"dairy",
    colors:["Black","Brown","Tan","Red","Gold","Spotted"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.88,RespiQ:0.75,FertQ:0.85},
    perfProfile:{MILK:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.20],["At",0.30],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"LaMancha",        group:"Dairy",  weightBuck:155, weightDoe:130, weightRange:[115,180], heightAvg:30, type:"dairy",
    colors:["Black","Brown","White","Gold","Spotted","Any Color"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.85,RespiQ:0.85,FertQ:0.85},
    perfProfile:{MILK:4,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.60],["b",0.40]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Oberhasli",       group:"Dairy",  weightBuck:150, weightDoe:120, weightRange:[105,170], heightAvg:30, type:"dairy",
    colors:["Chamoisee","Bay","Black"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.82,RespiQ:0.80,FertQ:0.80},
    perfProfile:{MILK:4,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:4,FIBER:1},
    coatFreqs:{A:[["At",0.85],["Aa",0.15]],B:[["B",0.80],["b",0.20]],S:[["S",0.95],["s",0.05]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Toggenburg",      group:"Dairy",  weightBuck:155, weightDoe:120, weightRange:[105,180], heightAvg:28, type:"dairy",
    colors:["Light Brown","Chocolate","Fawn"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.85,RespiQ:0.85,FertQ:0.80},
    perfProfile:{MILK:4,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:5,FIBER:1},
    coatFreqs:{A:[["At",0.90],["Ab",0.10]],B:[["B",0.40],["b",0.60]],S:[["S",0.90],["s",0.10]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Nigerian Dwarf",  group:"Dairy",  weightBuck:75, weightDoe:60, weightRange:[45,90], heightAvg:20, type:"dairy",
    colors:["Black","Chocolate","Gold","Cream","White","Spotted","Buckskin","Chamoisee","Moon Spots"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.80,UdderQ:0.80,RespiQ:0.85,FertQ:0.90},
    perfProfile:{MILK:3,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.30],["s",0.70]],W:[["W",0.10],["w",0.90]],Rn:[["rn",1.0]]} },

  { name:"Guernsey",        group:"Dairy",  weightBuck:150, weightDoe:120, weightRange:[105,175], heightAvg:28, type:"dairy",
    colors:["Gold","Tan","Saffron","Rosy Brown"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.78,UdderQ:0.82,RespiQ:0.78,FertQ:0.82},
    perfProfile:{MILK:4,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.60],["At",0.30],["Ab",0.10]],B:[["B",0.30],["b",0.70]],S:[["S",0.60],["s",0.40]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  // ═══ MEAT (8) ═══
  { name:"Boer",            group:"Meat",   weightBuck:240, weightDoe:190, weightRange:[155,340], heightAvg:30, type:"meat",
    colors:["White with Red Head","Solid Red","Paint","Dappled"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.70,RespiQ:0.80,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.80],["At",0.15],["Ab",0.05]],B:[["B",0.75],["b",0.25]],S:[["S",0.30],["s",0.70]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Kiko",            group:"Meat",   weightBuck:200, weightDoe:130, weightRange:[100,250], heightAvg:28, type:"meat",
    colors:["White","Cream","Brown","Black"],
    healthProfile:{HoofQ:0.90,ParasiteQ:0.90,UdderQ:0.70,RespiQ:0.85,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:5,FIBER:1},
    coatFreqs:{A:[["Aw",0.60],["At",0.20],["Ab",0.10],["Aa",0.10]],B:[["B",0.70],["b",0.30]],S:[["S",0.60],["s",0.40]],W:[["W",0.30],["w",0.70]],Rn:[["rn",1.0]]} },

  { name:"Spanish",         group:"Meat",   weightBuck:250, weightDoe:150, weightRange:[120,250], heightAvg:27, type:"meat",
    colors:["Black","Brown","White","Red","Spotted","Any Color"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.90,UdderQ:0.70,RespiQ:0.85,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:4,TEMP:3,HARDY:5,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Myotonic",        group:"Meat",   weightBuck:175, weightDoe:120, weightRange:[100,200], heightAvg:25, type:"meat",
    colors:["Black","White","Brown","Spotted","Multicolor"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.70,RespiQ:0.80,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:3,MUSCLE:5,TEMP:5,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.30],["s",0.70]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Savanna",         group:"Meat",   weightBuck:240, weightDoe:140, weightRange:[125,310], heightAvg:29, type:"meat",
    colors:["White"],
    healthProfile:{HoofQ:0.90,ParasiteQ:0.85,UdderQ:0.70,RespiQ:0.85,FertQ:0.90},
    perfProfile:{MILK:2,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:5,FIBER:1},
    coatFreqs:{A:[["Aw",1.0]],B:[["B",1.0]],S:[["S",1.0]],W:[["W",0.95],["w",0.05]],Rn:[["rn",1.0]]} },

  { name:"Rangeland",       group:"Meat",   weightBuck:180, weightDoe:110, weightRange:[80,240], heightAvg:27, type:"meat",
    colors:["White","Brown","Black","Spotted","Any Color"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.90,UdderQ:0.65,RespiQ:0.85,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:4,TEMP:3,HARDY:5,FIBER:1},
    coatFreqs:{A:[["Aw",0.30],["At",0.25],["Ab",0.25],["Aa",0.20]],B:[["B",0.50],["b",0.50]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Arapawa",         group:"Meat",   weightBuck:130, weightDoe:90, weightRange:[70,160], heightAvg:24, type:"meat",
    colors:["Brown and Black Patchwork","Dark Brown","Black"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.85,UdderQ:0.70,RespiQ:0.80,FertQ:0.80},
    perfProfile:{MILK:2,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:5,FIBER:1},
    coatFreqs:{A:[["At",0.60],["Ab",0.30],["Aa",0.10]],B:[["B",0.40],["b",0.60]],S:[["S",0.70],["s",0.30]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Texmaster",       group:"Meat",   weightBuck:220, weightDoe:150, weightRange:[120,280], heightAvg:28, type:"meat",
    colors:["White with Red Head","Red","Spotted","White"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.70,RespiQ:0.80,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:5,MUSCLE:5,TEMP:5,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.70],["At",0.20],["Ab",0.10]],B:[["B",0.70],["b",0.30]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  // ═══ FIBER (4) ═══
  { name:"Angora",          group:"Fiber",  weightBuck:150, weightDoe:100, weightRange:[75,185], heightAvg:26, type:"fiber",
    colors:["White","Silver","Brown","Black","Red"],
    healthProfile:{HoofQ:0.75,ParasiteQ:0.70,UdderQ:0.65,RespiQ:0.70,FertQ:0.75},
    perfProfile:{MILK:1,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:3,FIBER:5},
    coatFreqs:{A:[["Aw",0.70],["At",0.15],["Ab",0.10],["Aa",0.05]],B:[["B",0.70],["b",0.30]],S:[["S",0.80],["s",0.20]],W:[["W",0.60],["w",0.40]],Rn:[["rn",1.0]]} },

  { name:"Cashmere",        group:"Fiber",  weightBuck:130, weightDoe:90, weightRange:[70,170], heightAvg:25, type:"fiber",
    colors:["White","Gray","Brown","Black","Tan"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.80,UdderQ:0.65,RespiQ:0.80,FertQ:0.80},
    perfProfile:{MILK:1,GROWTH:2,MUSCLE:2,TEMP:3,HARDY:5,FIBER:4},
    coatFreqs:{A:[["Aw",0.30],["At",0.30],["Ab",0.20],["Aa",0.20]],B:[["B",0.50],["b",0.50]],S:[["S",0.70],["s",0.30]],W:[["W",0.15],["w",0.85]],Rn:[["rn",1.0]]} },

  { name:"Pygora",          group:"Fiber",  weightBuck:95, weightDoe:70, weightRange:[50,120], heightAvg:22, type:"fiber",
    colors:["White","Brown","Black","Gray","Caramel","Spotted"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.78,UdderQ:0.70,RespiQ:0.80,FertQ:0.80},
    perfProfile:{MILK:2,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:4,FIBER:4},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.40],["s",0.60]],W:[["W",0.20],["w",0.80]],Rn:[["rn",1.0]]} },

  { name:"Nigora",          group:"Fiber",  weightBuck:80, weightDoe:60, weightRange:[45,110], heightAvg:21, type:"fiber",
    colors:["White","Black","Brown","Gold","Spotted","Any Color"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.78,UdderQ:0.72,RespiQ:0.80,FertQ:0.82},
    perfProfile:{MILK:2,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:4,FIBER:4},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.30],["s",0.70]],W:[["W",0.15],["w",0.85]],Rn:[["rn",1.0]]} },

  // ═══ DUAL PURPOSE (4) ═══
  { name:"Pygmy",           group:"Dual",   weightBuck:85, weightDoe:65, weightRange:[50,100], heightAvg:20, type:"dual",
    colors:["Caramel","Gray Agouti","Black Agouti","Brown Agouti","Black","Solid"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.75,RespiQ:0.85,FertQ:0.85},
    perfProfile:{MILK:2,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:5,FIBER:1},
    coatFreqs:{A:[["Aw",0.30],["At",0.40],["Ab",0.20],["Aa",0.10]],B:[["B",0.50],["b",0.50]],S:[["S",0.80],["s",0.20]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Kinder",          group:"Dual",   weightBuck:135, weightDoe:115, weightRange:[90,160], heightAvg:26, type:"dual",
    colors:["Black","Brown","Red","Gold","Spotted","Any Color"],
    healthProfile:{HoofQ:0.85,ParasiteQ:0.80,UdderQ:0.80,RespiQ:0.80,FertQ:0.90},
    perfProfile:{MILK:3,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4,FIBER:1},
    coatFreqs:{A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],B:[["B",0.50],["b",0.50]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["rn",1.0]]} },

  { name:"Jamnapari",       group:"Dual",   weightBuck:175, weightDoe:130, weightRange:[100,220], heightAvg:32, type:"dual",
    colors:["White","White with Tan Spots","Spotted"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.78,RespiQ:0.75,FertQ:0.80},
    perfProfile:{MILK:3,GROWTH:4,MUSCLE:3,TEMP:3,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.70],["At",0.20],["Ab",0.10]],B:[["B",0.70],["b",0.30]],S:[["S",0.40],["s",0.60]],W:[["W",0.40],["w",0.60]],Rn:[["rn",1.0]]} },

  { name:"Damascus",        group:"Dual",   weightBuck:165, weightDoe:125, weightRange:[95,200], heightAvg:30, type:"dual",
    colors:["Red","Brown","Pied","White","Black"],
    healthProfile:{HoofQ:0.80,ParasiteQ:0.75,UdderQ:0.80,RespiQ:0.75,FertQ:0.80},
    perfProfile:{MILK:4,GROWTH:3,MUSCLE:3,TEMP:3,HARDY:3,FIBER:1},
    coatFreqs:{A:[["Aw",0.30],["At",0.30],["Ab",0.20],["Aa",0.20]],B:[["B",0.40],["b",0.60]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Rn:[["Rn",0.15],["rn",0.85]]} }
];

// ── LOOKUP HELPERS ───────────────────────────────────────────────────────────

var GOAT_DAIRY_BREEDS  = GOAT_BREED_DEFS.filter(function(b){ return b.type==="dairy"; }).map(function(b){ return b.name; });
var GOAT_MEAT_BREEDS   = GOAT_BREED_DEFS.filter(function(b){ return b.type==="meat"; }).map(function(b){ return b.name; });
var GOAT_FIBER_BREEDS  = GOAT_BREED_DEFS.filter(function(b){ return b.type==="fiber"; }).map(function(b){ return b.name; });
var GOAT_DUAL_BREEDS   = GOAT_BREED_DEFS.filter(function(b){ return b.type==="dual"; }).map(function(b){ return b.name; });

// ── QTL DEFINITIONS ─────────────────────────────────────────────────────────

var GOAT_PERF_QTLS   = ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
var GOAT_HEALTH_QTLS = ["HoofQ","ParasiteQ","UdderQ","RespiQ","FertQ"];

var GOAT_PERF_QTL_INFO = {
  MILK:   { icon:"\uD83E\uDD5B", full:"Milk Yield",       desc:"Dairy production potential" },
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",       desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Muscle/Carcass",    desc:"Meat quality and yield" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",       desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",         desc:"Parasite resistance and resilience" },
  FIBER:  { icon:"\uD83E\uDDF6", full:"Fiber Quality",     desc:"Fleece yield and softness" }
};

var GOAT_HEALTH_QTL_INFO = {
  HoofQ:     { icon:"\uD83E\uDDB6", full:"Hoof Health",       desc:"Resistance to hoof rot and overgrowth" },
  ParasiteQ: { icon:"\uD83E\uDDA0", full:"Parasite Resistance",desc:"Natural resistance to internal parasites" },
  UdderQ:    { icon:"\uD83C\uDF7C", full:"Udder Quality",      desc:"Udder attachment and teat structure" },
  RespiQ:    { icon:"\uD83D\uDCA8", full:"Respiratory Health", desc:"Resistance to pneumonia and respiratory illness" },
  FertQ:     { icon:"\uD83C\uDF31", full:"Fertility",          desc:"Conception rate and kidding ease" }
};

// ── GENOME GENERATION ────────────────────────────────────────────────────────

function pickWeightedGoat(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidGoat(freqArr) {
  return [pickWeightedGoat(freqArr), pickWeightedGoat(freqArr)];
}

function punnettGoat(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generateGoatGenome(breedName) {
  var breed = GOAT_BREED_DEFS.find(function(b){ return b.name === breedName; }) || GOAT_BREED_DEFS[0];

  // Coat loci
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["A","B","S","W","Rn"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidGoat(cf[loc]) : ["N","N"];
  });

  // Health QTLs: G = good, g = poor
  var health = {};
  GOAT_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidGoat([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });

  // Performance QTLs: 1-5 scale per allele
  var perf = {};
  GOAT_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedGoatGenomes(g1, g2) {
  var coat = {};
  ["A","B","S","W","Rn"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettGoat(a[0], a[1]), punnettGoat(b[0], b[1])];
  });

  var health = {};
  GOAT_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettGoat(a[0], a[1]), punnettGoat(b[0], b[1])];
  });

  var perf = {};
  GOAT_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettGoat(a[0], a[1]);
    var v2 = punnettGoat(b[0], b[1]);
    // Small mutation chance
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────
// A = Agouti: Aw (wild/light), At (tan points), Ab (brown/bay), Aa (self/solid black) — dominance: Aw > At > Ab > Aa
// B = Brown: B (black-based), b (brown/chocolate) — B dominant
// S = Spotting: S (solid), s (spotted/pied) — S dominant, ss = heavy spotting
// W = White: W (dominant white), w (normal) — W dominant, masks other colors
// Rn = Roan: Rn (roan), rn (normal) — Rn dominant

function interpretGoatColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;

  var A  = c.A  || ["Aw","Aw"];
  var B  = c.B  || ["B","B"];
  var S  = c.S  || ["S","S"];
  var W  = c.W  || ["w","w"];
  var Rn = c.Rn || ["rn","rn"];

  // White is dominant — masks everything
  var isWhite = W[0] === "W" || W[1] === "W";
  if (isWhite) return "White";

  // Roan check
  var isRoan = Rn[0] === "Rn" || Rn[1] === "Rn";

  // Brown locus: bb = chocolate/brown base instead of black
  var isBrown = B[0] === "b" && B[1] === "b";

  // Agouti dominance hierarchy: Aw > At > Ab > Aa
  var agoutiOrder = { Aw: 4, At: 3, Ab: 2, Aa: 1 };
  var a0rank = agoutiOrder[A[0]] || 1;
  var a1rank = agoutiOrder[A[1]] || 1;
  var topAgouti = a0rank >= a1rank ? A[0] : A[1];

  // Spotting
  var hasSpots = S[0] === "s" || S[1] === "s";
  var heavySpots = S[0] === "s" && S[1] === "s";

  // Determine base color from agouti + brown
  var base;
  if (topAgouti === "Aw") {
    base = isBrown ? "Tan" : "Light Gray";
  } else if (topAgouti === "At") {
    base = isBrown ? "Chocolate Tan Points" : "Black Tan Points";
  } else if (topAgouti === "Ab") {
    base = isBrown ? "Brown" : "Bay";
  } else { // Aa = self
    base = isBrown ? "Chocolate" : "Black";
  }

  // Apply modifiers
  if (isRoan) return base + " Roan";
  if (heavySpots) return base + " and White";
  if (hasSpots) return base + " Spotted";
  return base;
}

// ── SCORING ─────────────────────────────────────────────────────────────────

function calcGoatHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  GOAT_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / GOAT_HEALTH_QTLS.length);
}

function calcGoatPerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  GOAT_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (GOAT_PERF_QTLS.length * 5)) * 100);
}

// ── NAMES ───────────────────────────────────────────────────────────────────

var GOAT_NAMES_M = [
  "Billy","Clyde","Buck","Chester","Gus","Jasper","Otis","Tucker",
  "Merlin","Apollo","Archie","Bandit","Blaze","Copper","Django","Elm",
  "Finn","Houdini","Igor","Jet","Knox","Loki","Moose","Nitro"
];
var GOAT_NAMES_F = [
  "Nanny","Clover","Hazel","Maple","Willow","Fern","Ivy","Daisy",
  "Poppy","Rosie","Sage","Thistle","Brandy","Cinnamon","Dottie","Ellie",
  "Flora","Ginger","Holly","Iris","Juniper","Latte","Meadow","Nutmeg"
];

function generateGoatName(sex, existingNames) {
  var pool = sex === "M" ? GOAT_NAMES_M : GOAT_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ─────────────────────────────────────────────────────────

function createGoat(breedName, type, sex, ageMonths) {
  var breed = GOAT_BREED_DEFS.find(function(b){ return b.name === breedName; }) || GOAT_BREED_DEFS[0];
  var genome = generateGoatGenome(breedName);
  var coatColor = interpretGoatColor(genome);
  var healthScore = calcGoatHealthScore(genome);
  var perfScore = calcGoatPerfScore(genome);

  var baseWeight = sex === "F" ? (breed.weightDoe || breed.weightBuck * 0.7) : (breed.weightBuck || 150);
  var weight = baseWeight + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.2);
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 4);
  if (sex === "F") height = Math.round(height * 0.92);

  // Pricing by type
  var basePrices = { dairy: 250, meat: 150, fiber: 200, dual: 175 };
  var base = basePrices[breed.type] || 150;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 25) * 25;

  // Milk yield for dairy and dual does
  var milkYield = 0;
  if (breed.type === "dairy" || breed.type === "dual") {
    var milkQtl = (genome.perf||{}).MILK || [3,3];
    var avg = (milkQtl[0]+milkQtl[1])/2;
    milkYield = Math.round(avg * (breed.type === "dairy" ? 3.0 : 1.6));
  }

  // Fiber yield for fiber breeds
  var fiberYield = 0;
  if (breed.type === "fiber") {
    var fiberQtl = (genome.perf||{}).FIBER || [3,3];
    var favg = (fiberQtl[0]+fiberQtl[1])/2;
    fiberYield = Math.round(favg * 0.8 * 10) / 10; // lbs per shearing
  }

  return {
    id: "goat_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "goat",
    name: generateGoatName(sex),
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
    lifespan: 144 + Math.round((Math.random()-0.5) * 36), // ~10-15 years
    milkYield: milkYield,
    fiberYield: fiberYield
  };
}

// ── KID CREATION (breeding) ─────────────────────────────────────────────────

function createKid(sire, dam) {
  var genome = breedGoatGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = GOAT_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretGoatColor(genome);
  var healthScore = calcGoatHealthScore(genome);
  var perfScore = calcGoatPerfScore(genome);

  var sireW = sire.weightLbs || 150;
  var damW = dam.weightLbs || 120;
  var avgW = Math.round((sireW + damW) / 2);
  var weight = avgW + Math.round((Math.random()-0.5) * 30);
  if (sex === "F") weight = Math.round(weight * 0.75);

  var sireH = sire.heightIn || 26;
  var damH = dam.heightIn || 26;
  var height = Math.round((sireH + damH) / 2) + Math.round((Math.random()-0.5) * 3);

  // COI calculation (simple — same breed = 3-6%, cross = 0%)
  var coi = sire.breed === dam.breed ? Math.round((3 + Math.random()*3)*10)/10 : 0;
  if (sire.sireId && dam.sireId && sire.sireId === dam.sireId) coi += 12.5;
  if (sire.damId && dam.damId && sire.damId === dam.damId) coi += 12.5;

  // Determine type from parents or breed
  var kidType = dam.type || (breedDef ? breedDef.type : "meat");

  // Milk yield for dairy/dual females
  var milkYield = 0;
  if ((kidType === "dairy" || kidType === "dual")) {
    var milkQtl = (genome.perf||{}).MILK || [3,3];
    milkYield = Math.round(((milkQtl[0]+milkQtl[1])/2) * (kidType === "dairy" ? 3.0 : 1.6));
  }

  // Fiber yield
  var fiberYield = 0;
  if (kidType === "fiber") {
    var fiberQtl = (genome.perf||{}).FIBER || [3,3];
    fiberYield = Math.round(((fiberQtl[0]+fiberQtl[1])/2) * 0.8 * 10) / 10;
  }

  var existingNames = [];
  return {
    id: "goat_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "goat",
    name: generateGoatName(sex, existingNames),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Meat",
    type: kidType,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(weight * 0.08), // kids are ~8% of adult weight
    heightIn: Math.round(height * 0.45),
    price: 0,
    coi: Math.min(coi, 50),
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation||1, dam.generation||1) + 1,
    lifespan: 144 + Math.round((Math.random()-0.5) * 36),
    milkYield: milkYield,
    fiberYield: fiberYield
  };
}

// ── NORMALIZE (healing existing goats that lack genetics) ────────────────────

function normalizeGoat(animal) {
  if (!animal || animal.species !== "goat") return animal;
  if (animal.genome) return animal; // already has genetics

  var breedDef = GOAT_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || GOAT_BREED_DEFS[0];
  var genome = generateGoatGenome(animal.breed || breedDef.name);
  var coatColor = interpretGoatColor(genome);
  var healthScore = calcGoatHealthScore(genome);
  var perfScore = calcGoatPerfScore(genome);

  var milkYield = 0;
  var goatType = animal.type || breedDef.type || "meat";
  if (goatType === "dairy" || goatType === "dual") {
    var milkQtl = (genome.perf||{}).MILK || [3,3];
    milkYield = Math.round(((milkQtl[0]+milkQtl[1])/2) * (goatType === "dairy" ? 3.0 : 1.6));
  }

  var fiberYield = 0;
  if (goatType === "fiber") {
    var fiberQtl = (genome.perf||{}).FIBER || [3,3];
    fiberYield = Math.round(((fiberQtl[0]+fiberQtl[1])/2) * 0.8 * 10) / 10;
  }

  return Object.assign({}, animal, {
    name: animal.name || animal.breed || breedDef.name,
    breed: animal.breed || breedDef.name,
    group: breedDef.group,
    type: goatType,
    genome: genome,
    coatColor: coatColor,
    ageMonths: animal.ageMonths || (Math.floor(Math.random()*36) + 8),
    healthScore: animal.healthScore != null ? animal.healthScore : healthScore,
    perfScore: animal.perfScore != null ? animal.perfScore : perfScore,
    weightLbs: animal.weightLbs || (animal.sex === "F" ? (breedDef.weightDoe || 100) : (breedDef.weightBuck || 150)),
    heightIn: animal.heightIn || breedDef.heightAvg || 26,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (144 + Math.round((Math.random()-0.5) * 36)),
    milkYield: animal.milkYield != null ? animal.milkYield : milkYield,
    fiberYield: animal.fiberYield != null ? animal.fiberYield : fiberYield,
    coi: animal.coi || 0
  });
}

// ── MARKET HELPERS ──────────────────────────────────────────────────────────

function randomGoatType() {
  var r = Math.random();
  if (r < 0.35) return "dairy";
  if (r < 0.60) return "meat";
  if (r < 0.80) return "fiber";
  return "dual";
}

function goatBreedForType(type) {
  var list = type==="dairy" ? GOAT_DAIRY_BREEDS : type==="meat" ? GOAT_MEAT_BREEDS : type==="fiber" ? GOAT_FIBER_BREEDS : GOAT_DUAL_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

// Commodity output constants
var GOAT_MILK_OUTPUT = {
  dairy: 15,   // gallons per game month (base, genetics adjust)
  dual:  8,
  meat:  0,
  fiber: 0
};

var GOAT_FIBER_OUTPUT = {
  fiber: 2.5,  // lbs per shearing (base, genetics adjust)
  dairy: 0,
  meat:  0,
  dual:  0
};

var GOAT_MEAT_PRICE = {
  dairy: 90,
  dual:  90,
  meat:  120,
  fiber: 80
};
