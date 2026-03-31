// ══════════════════════════════════════════════════════════════════════════════
// DUCK GENETICS ENGINE — duck-data.js
// 18 breeds across 4 types: Egg, Meat, Dual, Ornamental
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as pig-data.js / sheep-data.js.
// ══════════════════════════════════════════════════════════════════════════════

// ── BREED DEFINITIONS ────────────────────────────────────────────────────────
// Weights in lbs (drake avg). Heights in inches (standing).
// coatFreqs: E = Extension (dark/light), M = Mallard pattern, S = Spotting, W = White, R = Runner pattern
// healthProfile: 0-1 probability of "G" (good) allele
// perfProfile: 1-5 scale per QTL
// Perf QTLs: EGG, GROWTH, MUSCLE, TEMP, HARDY, FORAGE
//   (EGG = egg production; FORAGE = ability to find food/pest control)

var DUCK_BREED_DEFS = [
  // ═══ EGG (5) ═══
  { name:"Khaki Campbell",   group:"Egg", weightDrake:5, weightHen:4, weightRange:[3,6], heightAvg:18, type:"egg",
    colors:["Khaki","Seal Brown","Dark Khaki"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.85,WingQ:0.80,FertQ:0.88},
    perfProfile:{EGG:5,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["E",0.50],["e",0.50]],M:[["Md",0.80],["m",0.20]],S:[["S",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Indian Runner",    group:"Egg", weightDrake:5, weightHen:4, weightRange:[3,5], heightAvg:22, type:"egg",
    colors:["Fawn","White","Chocolate","Black","Blue"],
    healthProfile:{LegQ:0.80,RespiQ:0.85,GutQ:0.82,WingQ:0.78,FertQ:0.85},
    perfProfile:{EGG:5,GROWTH:2,MUSCLE:1,TEMP:4,HARDY:4,FORAGE:5},
    coatFreqs:{E:[["E",0.40],["e",0.60]],M:[["Md",0.30],["m",0.70]],S:[["S",0.60],["s",0.40]],W:[["W",0.25],["w",0.75]],R:[["R",0.90],["r",0.10]]} },

  { name:"Welsh Harlequin",  group:"Egg", weightDrake:6, weightHen:5, weightRange:[4,7], heightAvg:17, type:"egg",
    colors:["Silver","Gold","Cream"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,WingQ:0.82,FertQ:0.88},
    perfProfile:{EGG:5,GROWTH:3,MUSCLE:2,TEMP:5,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["e",0.80],["E",0.20]],M:[["Md",0.70],["m",0.30]],S:[["S",0.90],["s",0.10]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Magpie",           group:"Egg", weightDrake:6, weightHen:5, weightRange:[4,7], heightAvg:17, type:"egg",
    colors:["Black and White","Blue and White"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,WingQ:0.85,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:4,FORAGE:5},
    coatFreqs:{E:[["E",0.70],["e",0.30]],M:[["m",1.0]],S:[["s",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Ancona",           group:"Egg", weightDrake:6, weightHen:5, weightRange:[5,7], heightAvg:17, type:"egg",
    colors:["Black and White","Chocolate and White","Blue and White"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.82,WingQ:0.82,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:5,FORAGE:5},
    coatFreqs:{E:[["E",0.60],["e",0.40]],M:[["m",1.0]],S:[["s",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  // ═══ MEAT (5) ═══
  { name:"Pekin",            group:"Meat", weightDrake:10, weightHen:9, weightRange:[8,11], heightAvg:16, type:"meat",
    colors:["White","Cream"],
    healthProfile:{LegQ:0.78,RespiQ:0.78,GutQ:0.80,WingQ:0.70,FertQ:0.85},
    perfProfile:{EGG:3,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3,FORAGE:2},
    coatFreqs:{E:[["E",0.30],["e",0.70]],M:[["m",1.0]],S:[["S",1.0]],W:[["W",0.95],["w",0.05]],R:[["r",1.0]]} },

  { name:"Rouen",            group:"Meat", weightDrake:10, weightHen:8, weightRange:[7,11], heightAvg:16, type:"meat",
    colors:["Mallard Pattern","Gray"],
    healthProfile:{LegQ:0.80,RespiQ:0.80,GutQ:0.82,WingQ:0.78,FertQ:0.82},
    perfProfile:{EGG:2,GROWTH:4,MUSCLE:5,TEMP:4,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",0.90],["e",0.10]],M:[["Md",0.95],["m",0.05]],S:[["S",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Muscovy",          group:"Meat", weightDrake:12, weightHen:7, weightRange:[6,14], heightAvg:18, type:"meat",
    colors:["Black","White","Chocolate","Blue","Pied"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.88,WingQ:0.85,FertQ:0.78},
    perfProfile:{EGG:2,GROWTH:5,MUSCLE:5,TEMP:3,HARDY:5,FORAGE:5},
    coatFreqs:{E:[["E",0.60],["e",0.40]],M:[["m",1.0]],S:[["S",0.40],["s",0.60]],W:[["W",0.30],["w",0.70]],R:[["r",1.0]]} },

  { name:"Aylesbury",        group:"Meat", weightDrake:10, weightHen:9, weightRange:[8,11], heightAvg:16, type:"meat",
    colors:["Pure White"],
    healthProfile:{LegQ:0.72,RespiQ:0.75,GutQ:0.78,WingQ:0.70,FertQ:0.80},
    perfProfile:{EGG:2,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:2,FORAGE:2},
    coatFreqs:{E:[["e",1.0]],M:[["m",1.0]],S:[["S",1.0]],W:[["W",1.0]],R:[["r",1.0]]} },

  { name:"Silver Appleyard", group:"Meat", weightDrake:9, weightHen:8, weightRange:[7,10], heightAvg:17, type:"meat",
    colors:["Silver","Mallard-type with Silver"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.82,WingQ:0.80,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",0.70],["e",0.30]],M:[["Md",0.80],["m",0.20]],S:[["S",0.85],["s",0.15]],W:[["w",1.0]],R:[["r",1.0]]} },

  // ═══ DUAL (4) ═══
  { name:"Cayuga",           group:"Dual", weightDrake:8, weightHen:7, weightRange:[6,9], heightAvg:16, type:"dual",
    colors:["Iridescent Black-Green","Beetle Green"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,WingQ:0.82,FertQ:0.85},
    perfProfile:{EGG:3,GROWTH:4,MUSCLE:3,TEMP:5,HARDY:5,FORAGE:4},
    coatFreqs:{E:[["E",1.0]],M:[["m",1.0]],S:[["S",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Swedish Blue",     group:"Dual", weightDrake:8, weightHen:7, weightRange:[6,9], heightAvg:16, type:"dual",
    colors:["Blue","Splash","Black"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.85,WingQ:0.82,FertQ:0.85},
    perfProfile:{EGG:3,GROWTH:4,MUSCLE:3,TEMP:4,HARDY:5,FORAGE:4},
    coatFreqs:{E:[["E",0.80],["e",0.20]],M:[["m",1.0]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Buff Orpington",   group:"Dual", weightDrake:8, weightHen:7, weightRange:[6,9], heightAvg:16, type:"dual",
    colors:["Buff","Fawn Buff"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,WingQ:0.80,FertQ:0.88},
    perfProfile:{EGG:4,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["e",1.0]],M:[["Md",0.40],["m",0.60]],S:[["S",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Saxony",           group:"Dual", weightDrake:9, weightHen:8, weightRange:[7,10], heightAvg:17, type:"dual",
    colors:["Blue-Gray and Buff","Oatmeal"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.82,WingQ:0.80,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:3,TEMP:4,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",0.50],["e",0.50]],M:[["Md",0.70],["m",0.30]],S:[["S",0.90],["s",0.10]],W:[["w",1.0]],R:[["r",1.0]]} },

  // ═══ ORNAMENTAL (4) ═══
  { name:"Call Duck",        group:"Ornamental", weightDrake:2, weightHen:1.5, weightRange:[1,2.5], heightAvg:10, type:"ornamental",
    colors:["White","Gray","Snowy","Pastel","Butterscotch"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.82,WingQ:0.88,FertQ:0.78},
    perfProfile:{EGG:2,GROWTH:1,MUSCLE:1,TEMP:5,HARDY:3,FORAGE:3},
    coatFreqs:{E:[["E",0.30],["e",0.70]],M:[["Md",0.30],["m",0.70]],S:[["S",0.40],["s",0.60]],W:[["W",0.50],["w",0.50]],R:[["r",1.0]]} },

  { name:"East Indie",       group:"Ornamental", weightDrake:2, weightHen:1.5, weightRange:[1,2.5], heightAvg:10, type:"ornamental",
    colors:["Iridescent Black-Green","Beetle Green"],
    healthProfile:{LegQ:0.80,RespiQ:0.80,GutQ:0.82,WingQ:0.88,FertQ:0.78},
    perfProfile:{EGG:2,GROWTH:1,MUSCLE:1,TEMP:5,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",1.0]],M:[["m",1.0]],S:[["S",1.0]],W:[["w",1.0]],R:[["r",1.0]]} },

  { name:"Crested",          group:"Ornamental", weightDrake:7, weightHen:6, weightRange:[5,8], heightAvg:15, type:"ornamental",
    colors:["White","Black","Gray","Blue","Buff"],
    healthProfile:{LegQ:0.78,RespiQ:0.78,GutQ:0.80,WingQ:0.82,FertQ:0.75},
    perfProfile:{EGG:3,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,FORAGE:3},
    coatFreqs:{E:[["E",0.30],["e",0.70]],M:[["Md",0.20],["m",0.80]],S:[["S",0.50],["s",0.50]],W:[["W",0.40],["w",0.60]],R:[["r",1.0]]} },

  { name:"Miniature Silver Appleyard", group:"Ornamental", weightDrake:3, weightHen:2.5, weightRange:[2,4], heightAvg:12, type:"ornamental",
    colors:["Silver Mallard-type","Fawn"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.82,WingQ:0.85,FertQ:0.80},
    perfProfile:{EGG:3,GROWTH:2,MUSCLE:2,TEMP:5,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["E",0.70],["e",0.30]],M:[["Md",0.85],["m",0.15]],S:[["S",0.85],["s",0.15]],W:[["w",1.0]],R:[["r",1.0]]} }
];

// ── LOOKUP HELPERS ───────────────────────────────────────────────────────────

var DUCK_EGG_BREEDS         = DUCK_BREED_DEFS.filter(function(b){ return b.type==="egg"; }).map(function(b){ return b.name; });
var DUCK_MEAT_BREEDS        = DUCK_BREED_DEFS.filter(function(b){ return b.type==="meat"; }).map(function(b){ return b.name; });
var DUCK_DUAL_BREEDS        = DUCK_BREED_DEFS.filter(function(b){ return b.type==="dual"; }).map(function(b){ return b.name; });
var DUCK_ORNAMENTAL_BREEDS  = DUCK_BREED_DEFS.filter(function(b){ return b.type==="ornamental"; }).map(function(b){ return b.name; });

// ── QTL DEFINITIONS ─────────────────────────────────────────────────────────

var DUCK_PERF_QTLS   = ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
var DUCK_HEALTH_QTLS = ["LegQ","RespiQ","GutQ","WingQ","FertQ"];

var DUCK_PERF_QTL_INFO = {
  EGG:    { icon:"\uD83E\uDD5A", full:"Egg Production",     desc:"Eggs per year" },
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",        desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Meat Quality",       desc:"Carcass quality and yield" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",        desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",          desc:"Weather tolerance and resilience" },
  FORAGE: { icon:"\uD83D\uDC1B", full:"Foraging Ability",   desc:"Pest control and self-feeding" }
};

var DUCK_HEALTH_QTL_INFO = {
  LegQ:   { icon:"\uD83E\uDDB6", full:"Leg Soundness",      desc:"Joint and foot integrity" },
  RespiQ: { icon:"\uD83D\uDCA8", full:"Respiratory Health",  desc:"Resistance to aspergillosis" },
  GutQ:   { icon:"\uD83E\uDDE0", full:"Gut Health",          desc:"Digestive health and disease resistance" },
  WingQ:  { icon:"\uD83E\uDEB6", full:"Wing/Feather",        desc:"Feather quality and waterproofing" },
  FertQ:  { icon:"\uD83C\uDF31", full:"Fertility",           desc:"Hatchability and clutch viability" }
};

// ── GENOME GENERATION ────────────────────────────────────────────────────────

function pickWeightedDuck(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidDuck(freqArr) {
  return [pickWeightedDuck(freqArr), pickWeightedDuck(freqArr)];
}

function punnettDuck(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generateDuckGenome(breedName) {
  var breed = DUCK_BREED_DEFS.find(function(b){ return b.name === breedName; }) || DUCK_BREED_DEFS[0];
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["E","M","S","W","R"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidDuck(cf[loc]) : ["N","N"];
  });
  var health = {};
  DUCK_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidDuck([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });
  var perf = {};
  DUCK_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedDuckGenomes(g1, g2) {
  var coat = {};
  ["E","M","S","W","R"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettDuck(a[0], a[1]), punnettDuck(b[0], b[1])];
  });
  var health = {};
  DUCK_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettDuck(a[0], a[1]), punnettDuck(b[0], b[1])];
  });
  var perf = {};
  DUCK_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettDuck(a[0], a[1]);
    var v2 = punnettDuck(b[0], b[1]);
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────
// E = Extension: E (allows dark pigment), e (dilute/light) — E dominant
// M = Mallard: Md (mallard pattern), m (non-mallard) — Md dominant
// S = Spotting: S (solid), s (pied/spotted) — S dominant
// W = White: W (dominant white), w (shows color) — W dominant
// R = Runner: R (upright carriage), r (normal carriage) — R dominant

function interpretDuckColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;
  var E  = c.E  || ["E","E"];
  var M  = c.M  || ["m","m"];
  var S  = c.S  || ["S","S"];
  var W  = c.W  || ["w","w"];

  var isWhite = W[0] === "W" || W[1] === "W";
  if (isWhite) return "White";

  var isDilute = E[0] === "e" && E[1] === "e";
  var hasMallard = M[0] === "Md" || M[1] === "Md";
  var hasPied = S[0] === "s" || S[1] === "s";
  var heavyPied = S[0] === "s" && S[1] === "s";

  if (isDilute) {
    var base = hasMallard ? "Fawn" : "Buff";
    if (heavyPied) return base + " and White";
    if (hasPied) return base + " Pied";
    return base;
  }

  if (hasMallard) {
    var base = "Mallard Pattern";
    if (heavyPied) return "Mallard and White";
    if (hasPied) return "Mallard Pied";
    return base;
  }

  var base = "Black";
  if (heavyPied) return "Black and White";
  if (hasPied) return "Black Pied";
  return base;
}

// ── SCORING ─────────────────────────────────────────────────────────────────

function calcDuckHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  DUCK_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / DUCK_HEALTH_QTLS.length);
}

function calcDuckPerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  DUCK_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (DUCK_PERF_QTLS.length * 5)) * 100);
}

// ── NAMES ───────────────────────────────────────────────────────────────────

var DUCK_NAMES_M = [
  "Drake","Quacker","Waddles","Puddle","Splash","Webster","Donald","Scrooge",
  "Pepper","Teal","Jet","Mallard","Copper","Foghorn","Marsh","River",
  "Bandit","Skipper","Ziggy","Chester","Gander","Flint","Cobalt","Sterling"
];
var DUCK_NAMES_F = [
  "Daisy","Jemima","Puddles","Dottie","Maple","Willow","Pearl","Feather",
  "Ginger","Honey","Clover","Misty","Sunny","Pebble","Iris","Fern",
  "Dotty","Rosie","Luna","Olive","Poppy","Ivy","Hazel","Cricket"
];

function generateDuckName(sex, existingNames) {
  var pool = sex === "M" ? DUCK_NAMES_M : DUCK_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ─────────────────────────────────────────────────────────

function createDuck(breedName, type, sex, ageMonths) {
  var breed = DUCK_BREED_DEFS.find(function(b){ return b.name === breedName; }) || DUCK_BREED_DEFS[0];
  var genome = generateDuckGenome(breedName);
  var coatColor = interpretDuckColor(genome);
  var healthScore = calcDuckHealthScore(genome);
  var perfScore = calcDuckPerfScore(genome);

  var baseWeight = sex === "F" ? (breed.weightHen || breed.weightDrake * 0.85) : (breed.weightDrake || 7);
  var weight = baseWeight + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.3 * 10) / 10;
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 3);
  if (sex === "F") height = Math.round(height * 0.92);

  var basePrices = { egg: 25, meat: 30, dual: 28, ornamental: 50 };
  var base = basePrices[breed.type] || 25;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 5) * 5;

  return {
    id: "duck_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "duck",
    name: generateDuckName(sex),
    breed: breedName,
    group: breed.group,
    type: type || breed.type,
    sex: sex || "F",
    ageMonths: ageMonths || (Math.floor(Math.random()*18) + 4),
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
    lifespan: 72 + Math.round((Math.random()-0.5) * 24) // ~4-8 years
  };
}

// ── DUCKLING CREATION (breeding) ────────────────────────────────────────────

function createDuckling(sire, dam) {
  var genome = breedDuckGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = DUCK_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretDuckColor(genome);
  var healthScore = calcDuckHealthScore(genome);
  var perfScore = calcDuckPerfScore(genome);

  var sireW = sire.weightLbs || 7;
  var damW = dam.weightLbs || 6;
  var avgW = Math.round(((sireW + damW) / 2) * 10) / 10;
  var weight = avgW + Math.round((Math.random()-0.5) * 2 * 10) / 10;
  if (sex === "F") weight = Math.round(weight * 0.85 * 10) / 10;

  var sireH = sire.heightIn || 16;
  var damH = dam.heightIn || 16;
  var height = Math.round((sireH + damH) / 2) + Math.round((Math.random()-0.5) * 2);

  var coi = sire.breed === dam.breed ? Math.round((3 + Math.random()*3)*10)/10 : 0;
  if (sire.sireId && dam.sireId && sire.sireId === dam.sireId) coi += 12.5;
  if (sire.damId && dam.damId && sire.damId === dam.damId) coi += 12.5;

  var duckType = dam.type || (breedDef ? breedDef.type : "dual");

  return {
    id: "duck_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "duck",
    name: generateDuckName(sex),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Dual",
    type: duckType,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(weight * 0.05 * 10) / 10, // ducklings ~5% of adult weight
    heightIn: Math.round(height * 0.25),
    price: 0,
    coi: Math.min(coi, 50),
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation||1, dam.generation||1) + 1,
    lifespan: 72 + Math.round((Math.random()-0.5) * 24)
  };
}

// ── NORMALIZE (healing existing ducks that lack genetics) ────────────────────

function normalizeDuck(animal) {
  if (!animal || animal.species !== "duck") return animal;
  if (animal.genome) return animal;

  var breedDef = DUCK_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || null;
  if (!breedDef) {
    var type = animal.type || randomDuckType();
    var breedName = duckBreedForType(type);
    breedDef = DUCK_BREED_DEFS.find(function(b){ return b.name === breedName; }) || DUCK_BREED_DEFS[0];
  }

  var genome = generateDuckGenome(breedDef.name);
  var coatColor = interpretDuckColor(genome);
  var healthScore = calcDuckHealthScore(genome);
  var perfScore = calcDuckPerfScore(genome);

  return Object.assign({}, animal, {
    name: animal.name || breedDef.name,
    breed: breedDef.name,
    group: breedDef.group,
    type: breedDef.type,
    genome: genome,
    coatColor: coatColor,
    ageMonths: animal.ageMonths || (Math.floor(Math.random()*18) + 4),
    healthScore: animal.healthScore != null ? animal.healthScore : healthScore,
    perfScore: animal.perfScore != null ? animal.perfScore : perfScore,
    weightLbs: animal.weightLbs || (animal.sex === "F" ? (breedDef.weightHen || 5) : (breedDef.weightDrake || 7)),
    heightIn: animal.heightIn || breedDef.heightAvg || 16,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (72 + Math.round((Math.random()-0.5) * 24)),
    coi: animal.coi || 0
  });
}

// ── MARKET HELPERS ──────────────────────────────────────────────────────────

function randomDuckType() {
  var r = Math.random();
  if (r < 0.30) return "egg";
  if (r < 0.60) return "meat";
  if (r < 0.85) return "dual";
  return "ornamental";
}

function duckBreedForType(type) {
  var list = type==="egg" ? DUCK_EGG_BREEDS : type==="meat" ? DUCK_MEAT_BREEDS : type==="dual" ? DUCK_DUAL_BREEDS : DUCK_ORNAMENTAL_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

var DUCK_MEAT_PRICE = {
  egg: 8,
  meat: 15,
  dual: 12,
  ornamental: 5
};
