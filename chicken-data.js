// ══════════════════════════════════════════════════════════════════════════════
// CHICKEN GENETICS ENGINE — chicken-data.js
// 18 breeds across 4 types: Egg, Meat, Dual, Ornamental
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as duck-data.js / pig-data.js.
// ══════════════════════════════════════════════════════════════════════════════

// ── BREED DEFINITIONS ────────────────────────────────────────────────────────
// Weights in lbs (rooster avg). Heights in inches (standing).
// coatFreqs: E = Extension (black/wild), B = Barring, S = Silver/Gold, W = White, L = Lacing
// healthProfile: 0-1 probability of "G" (good) allele
// perfProfile: 1-5 scale per QTL
// Perf QTLs: EGG, GROWTH, MUSCLE, TEMP, HARDY, FORAGE
//   (EGG = egg production; FORAGE = ability to forage/free-range)

var CHICKEN_BREED_DEFS = [
  // ═══ EGG (5) ═══
  { name:"White Leghorn",     group:"Egg", weightRooster:6, weightHen:4.5, weightRange:[4,7], heightAvg:18, type:"egg",
    colors:["White","Light Yellow"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,ParQ:0.80,FertQ:0.88},
    perfProfile:{EGG:5,GROWTH:2,MUSCLE:2,TEMP:3,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["E",0.30],["e",0.70]],B:[["b",1.0]],S:[["S",0.90],["s",0.10]],W:[["W",0.95],["w",0.05]],L:[["l",1.0]]} },

  { name:"Rhode Island Red",  group:"Egg", weightRooster:8.5, weightHen:6.5, weightRange:[5,9], heightAvg:16, type:"egg",
    colors:["Deep Red","Mahogany","Rust"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.88,ParQ:0.82,FertQ:0.88},
    perfProfile:{EGG:5,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:5,FORAGE:5},
    coatFreqs:{E:[["E",0.70],["e",0.30]],B:[["b",1.0]],S:[["s",1.0]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Australorp",        group:"Egg", weightRooster:8.5, weightHen:6.5, weightRange:[5,9], heightAvg:17, type:"egg",
    colors:["Black","Blue","White"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,ParQ:0.82,FertQ:0.88},
    perfProfile:{EGG:5,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:5,FORAGE:4},
    coatFreqs:{E:[["E",0.90],["e",0.10]],B:[["b",1.0]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"ISA Brown",         group:"Egg", weightRooster:6, weightHen:4.5, weightRange:[4,7], heightAvg:16, type:"egg",
    colors:["Brown","Light Brown"],
    healthProfile:{LegQ:0.78,RespiQ:0.78,GutQ:0.80,ParQ:0.75,FertQ:0.85},
    perfProfile:{EGG:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:3,FORAGE:3},
    coatFreqs:{E:[["E",0.50],["e",0.50]],B:[["b",1.0]],S:[["s",1.0]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Easter Egger",      group:"Egg", weightRooster:7, weightHen:5, weightRange:[4,8], heightAvg:16, type:"egg",
    colors:["Brown","Black","Wheaten","Splash","Multi"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.85,ParQ:0.82,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:5,FORAGE:5},
    coatFreqs:{E:[["E",0.50],["e",0.50]],B:[["B",0.20],["b",0.80]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],L:[["l",1.0]]} },

  // ═══ MEAT (4) ═══
  { name:"Cornish Cross",     group:"Meat", weightRooster:12, weightHen:8, weightRange:[7,14], heightAvg:16, type:"meat",
    colors:["White","Yellowish White"],
    healthProfile:{LegQ:0.60,RespiQ:0.65,GutQ:0.72,ParQ:0.65,FertQ:0.70},
    perfProfile:{EGG:1,GROWTH:5,MUSCLE:5,TEMP:3,HARDY:1,FORAGE:1},
    coatFreqs:{E:[["e",1.0]],B:[["b",1.0]],S:[["S",1.0]],W:[["W",1.0]],L:[["l",1.0]]} },

  { name:"Jersey Giant",      group:"Meat", weightRooster:13, weightHen:10, weightRange:[9,15], heightAvg:22, type:"meat",
    colors:["Black","White","Blue"],
    healthProfile:{LegQ:0.78,RespiQ:0.80,GutQ:0.82,ParQ:0.78,FertQ:0.82},
    perfProfile:{EGG:3,GROWTH:4,MUSCLE:5,TEMP:5,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",0.80],["e",0.20]],B:[["b",1.0]],S:[["S",0.30],["s",0.70]],W:[["W",0.15],["w",0.85]],L:[["l",1.0]]} },

  { name:"Freedom Ranger",    group:"Meat", weightRooster:9, weightHen:6.5, weightRange:[5,10], heightAvg:17, type:"meat",
    colors:["Red","Tricolor","Black"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,ParQ:0.80,FertQ:0.85},
    perfProfile:{EGG:2,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["E",0.60],["e",0.40]],B:[["b",1.0]],S:[["s",1.0]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Brahma",            group:"Meat", weightRooster:12, weightHen:9.5, weightRange:[8,14], heightAvg:24, type:"meat",
    colors:["Light","Dark","Buff"],
    healthProfile:{LegQ:0.80,RespiQ:0.80,GutQ:0.85,ParQ:0.78,FertQ:0.80},
    perfProfile:{EGG:3,GROWTH:4,MUSCLE:4,TEMP:5,HARDY:5,FORAGE:3},
    coatFreqs:{E:[["E",0.50],["e",0.50]],B:[["b",1.0]],S:[["S",0.60],["s",0.40]],W:[["w",1.0]],L:[["L",0.70],["l",0.30]]} },

  // ═══ DUAL (5) ═══
  { name:"Plymouth Rock",     group:"Dual", weightRooster:9.5, weightHen:7.5, weightRange:[6,10], heightAvg:17, type:"dual",
    colors:["Barred","White","Buff","Partridge"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,ParQ:0.82,FertQ:0.88},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:3,TEMP:5,HARDY:5,FORAGE:4},
    coatFreqs:{E:[["E",0.70],["e",0.30]],B:[["B",0.80],["b",0.20]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Orpington",         group:"Dual", weightRooster:10, weightHen:8, weightRange:[7,11], heightAvg:17, type:"dual",
    colors:["Buff","Black","Blue","White"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,ParQ:0.85,FertQ:0.88},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:3,TEMP:5,HARDY:4,FORAGE:3},
    coatFreqs:{E:[["E",0.30],["e",0.70]],B:[["b",1.0]],S:[["s",1.0]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Wyandotte",         group:"Dual", weightRooster:8.5, weightHen:6.5, weightRange:[5,9], heightAvg:16, type:"dual",
    colors:["Silver Laced","Golden Laced","Blue Laced Red","Columbian"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,ParQ:0.82,FertQ:0.85},
    perfProfile:{EGG:4,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:5,FORAGE:4},
    coatFreqs:{E:[["E",0.60],["e",0.40]],B:[["b",1.0]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],L:[["L",0.85],["l",0.15]]} },

  { name:"Sussex",            group:"Dual", weightRooster:9, weightHen:7, weightRange:[6,10], heightAvg:17, type:"dual",
    colors:["Speckled","Light","Red","Buff"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.85,ParQ:0.82,FertQ:0.88},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:3,TEMP:5,HARDY:4,FORAGE:5},
    coatFreqs:{E:[["E",0.40],["e",0.60]],B:[["b",1.0]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],L:[["L",0.30],["l",0.70]]} },

  { name:"Delaware",          group:"Dual", weightRooster:8.5, weightHen:6.5, weightRange:[5,9], heightAvg:16, type:"dual",
    colors:["White with Black Barring","Columbian Pattern"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.85,ParQ:0.82,FertQ:0.88},
    perfProfile:{EGG:4,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4,FORAGE:4},
    coatFreqs:{E:[["E",0.30],["e",0.70]],B:[["B",0.60],["b",0.40]],S:[["S",0.80],["s",0.20]],W:[["w",1.0]],L:[["l",1.0]]} },

  // ═══ ORNAMENTAL (4) ═══
  { name:"Silkie",            group:"Ornamental", weightRooster:4, weightHen:3, weightRange:[2,5], heightAvg:10, type:"ornamental",
    colors:["White","Black","Blue","Buff","Splash","Partridge"],
    healthProfile:{LegQ:0.80,RespiQ:0.78,GutQ:0.82,ParQ:0.88,FertQ:0.80},
    perfProfile:{EGG:3,GROWTH:1,MUSCLE:1,TEMP:5,HARDY:3,FORAGE:3},
    coatFreqs:{E:[["E",0.30],["e",0.70]],B:[["b",1.0]],S:[["S",0.40],["s",0.60]],W:[["W",0.40],["w",0.60]],L:[["l",1.0]]} },

  { name:"Polish",            group:"Ornamental", weightRooster:6, weightHen:4.5, weightRange:[3,7], heightAvg:14, type:"ornamental",
    colors:["White Crested Black","Golden Laced","Silver Laced","Buff Laced"],
    healthProfile:{LegQ:0.78,RespiQ:0.75,GutQ:0.80,ParQ:0.78,FertQ:0.78},
    perfProfile:{EGG:3,GROWTH:2,MUSCLE:1,TEMP:4,HARDY:3,FORAGE:3},
    coatFreqs:{E:[["E",0.50],["e",0.50]],B:[["b",1.0]],S:[["S",0.50],["s",0.50]],W:[["W",0.30],["w",0.70]],L:[["L",0.60],["l",0.40]]} },

  { name:"Cochin",            group:"Ornamental", weightRooster:11, weightHen:8.5, weightRange:[7,12], heightAvg:16, type:"ornamental",
    colors:["Buff","Black","Blue","White","Partridge"],
    healthProfile:{LegQ:0.78,RespiQ:0.78,GutQ:0.82,ParQ:0.85,FertQ:0.78},
    perfProfile:{EGG:2,GROWTH:3,MUSCLE:2,TEMP:5,HARDY:3,FORAGE:2},
    coatFreqs:{E:[["E",0.30],["e",0.70]],B:[["b",1.0]],S:[["s",1.0]],W:[["w",1.0]],L:[["l",1.0]]} },

  { name:"Sebright",          group:"Ornamental", weightRooster:1.4, weightHen:1.2, weightRange:[1,2], heightAvg:8, type:"ornamental",
    colors:["Gold Laced","Silver Laced"],
    healthProfile:{LegQ:0.78,RespiQ:0.75,GutQ:0.78,ParQ:0.72,FertQ:0.72},
    perfProfile:{EGG:1,GROWTH:1,MUSCLE:1,TEMP:4,HARDY:3,FORAGE:4},
    coatFreqs:{E:[["E",0.60],["e",0.40]],B:[["b",1.0]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],L:[["L",1.0]]} }
];

// ── LOOKUP HELPERS ───────────────────────────────────────────────────────────

var CHICKEN_EGG_BREEDS         = CHICKEN_BREED_DEFS.filter(function(b){ return b.type==="egg"; }).map(function(b){ return b.name; });
var CHICKEN_MEAT_BREEDS        = CHICKEN_BREED_DEFS.filter(function(b){ return b.type==="meat"; }).map(function(b){ return b.name; });
var CHICKEN_DUAL_BREEDS        = CHICKEN_BREED_DEFS.filter(function(b){ return b.type==="dual"; }).map(function(b){ return b.name; });
var CHICKEN_ORNAMENTAL_BREEDS  = CHICKEN_BREED_DEFS.filter(function(b){ return b.type==="ornamental"; }).map(function(b){ return b.name; });

// ── QTL DEFINITIONS ─────────────────────────────────────────────────────────

var CHICKEN_PERF_QTLS   = ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
var CHICKEN_HEALTH_QTLS = ["LegQ","RespiQ","GutQ","ParQ","FertQ"];

var CHICKEN_PERF_QTL_INFO = {
  EGG:    { icon:"\uD83E\uDD5A", full:"Egg Production",     desc:"Eggs per year" },
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",        desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Meat Quality",       desc:"Carcass quality and yield" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",        desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",          desc:"Weather tolerance and resilience" },
  FORAGE: { icon:"\uD83D\uDC1B", full:"Foraging Ability",   desc:"Free-range efficiency and pest control" }
};

var CHICKEN_HEALTH_QTL_INFO = {
  LegQ:   { icon:"\uD83E\uDDB6", full:"Leg Soundness",      desc:"Joint and foot integrity" },
  RespiQ: { icon:"\uD83D\uDCA8", full:"Respiratory Health",  desc:"Resistance to CRD and mycoplasma" },
  GutQ:   { icon:"\uD83E\uDDE0", full:"Gut Health",          desc:"Coccidiosis resistance and digestion" },
  ParQ:   { icon:"\uD83D\uDEE1", full:"Parasite Resistance", desc:"Mite, lice, and worm tolerance" },
  FertQ:  { icon:"\uD83C\uDF31", full:"Fertility",           desc:"Hatchability and clutch viability" }
};

// ── GENOME GENERATION ────────────────────────────────────────────────────────

function pickWeightedChicken(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidChicken(freqArr) {
  return [pickWeightedChicken(freqArr), pickWeightedChicken(freqArr)];
}

function punnettChicken(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generateChickenGenome(breedName) {
  var breed = CHICKEN_BREED_DEFS.find(function(b){ return b.name === breedName; }) || CHICKEN_BREED_DEFS[0];
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["E","B","S","W","L"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidChicken(cf[loc]) : ["N","N"];
  });
  var health = {};
  CHICKEN_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidChicken([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });
  var perf = {};
  CHICKEN_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedChickenGenomes(g1, g2) {
  var coat = {};
  ["E","B","S","W","L"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettChicken(a[0], a[1]), punnettChicken(b[0], b[1])];
  });
  var health = {};
  CHICKEN_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettChicken(a[0], a[1]), punnettChicken(b[0], b[1])];
  });
  var perf = {};
  CHICKEN_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettChicken(a[0], a[1]);
    var v2 = punnettChicken(b[0], b[1]);
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────
// E = Extension: E (allows dark/wild pigment), e (recessive wheaten/gold) — E dominant
// B = Barring: B (barred pattern), b (non-barred) — B dominant (sex-linked)
// S = Silver/Gold: S (silver), s (gold) — S dominant
// W = White: W (dominant white), w (shows color) — W dominant
// L = Lacing: L (laced feather edges), l (non-laced) — L dominant

function interpretChickenColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;
  var E  = c.E  || ["E","E"];
  var B  = c.B  || ["b","b"];
  var S  = c.S  || ["s","s"];
  var W  = c.W  || ["w","w"];
  var L  = c.L  || ["l","l"];

  var isWhite = W[0] === "W" || W[1] === "W";
  if (isWhite) return "White";

  var isWheaten = E[0] === "e" && E[1] === "e";
  var hasBarring = B[0] === "B" || B[1] === "B";
  var isSilver = S[0] === "S" || S[1] === "S";
  var hasLacing = L[0] === "L" || L[1] === "L";

  if (isWheaten) {
    var base = isSilver ? "Light" : "Buff";
    if (hasLacing) return base + " Laced";
    if (hasBarring) return base + " Barred";
    return base;
  }

  if (hasBarring) {
    var base = isSilver ? "Silver Barred" : "Barred";
    if (hasLacing) return base + " Laced";
    return base;
  }

  if (hasLacing) {
    return isSilver ? "Silver Laced" : "Golden Laced";
  }

  return isSilver ? "Silver" : "Black";
}

// ── SCORING ─────────────────────────────────────────────────────────────────

function calcChickenHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  CHICKEN_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / CHICKEN_HEALTH_QTLS.length);
}

function calcChickenPerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  CHICKEN_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (CHICKEN_PERF_QTLS.length * 5)) * 100);
}

// ── NAMES ───────────────────────────────────────────────────────────────────

var CHICKEN_NAMES_M = [
  "Roo","Foghorn","Colonel","Rex","Rusty","Copper","Bandit","Chester",
  "Buck","Spur","Hawk","General","Duke","Flint","Bruno","Maverick",
  "Strider","Jet","Boss","Clyde","Grit","Sage","Atlas","Ranger"
];
var CHICKEN_NAMES_F = [
  "Hennie","Goldie","Clover","Daisy","Poppy","Ginger","Rosie","Pearl",
  "Nutmeg","Maple","Sunny","Dottie","Hazel","Ivy","Willow","Fern",
  "Penny","Pepper","Cinnamon","Lacey","Birdie","Marigold","Cricket","Olive"
];

function generateChickenName(sex, existingNames) {
  var pool = sex === "M" ? CHICKEN_NAMES_M : CHICKEN_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ─────────────────────────────────────────────────────────

function createChicken(breedName, type, sex, ageMonths) {
  var breed = CHICKEN_BREED_DEFS.find(function(b){ return b.name === breedName; }) || CHICKEN_BREED_DEFS[0];
  var genome = generateChickenGenome(breedName);
  var coatColor = interpretChickenColor(genome);
  var healthScore = calcChickenHealthScore(genome);
  var perfScore = calcChickenPerfScore(genome);

  var baseWeight = sex === "F" ? (breed.weightHen || breed.weightRooster * 0.75) : (breed.weightRooster || 7);
  var weight = baseWeight + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.3 * 10) / 10;
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 3);
  if (sex === "F") height = Math.round(height * 0.90);

  var basePrices = { egg: 15, meat: 12, dual: 18, ornamental: 40 };
  var base = basePrices[breed.type] || 15;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 5) * 5;

  return {
    id: "chicken_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "chicken",
    name: generateChickenName(sex),
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

// ── CHICK CREATION (breeding) ───────────────────────────────────────────────

function createChick(sire, dam) {
  var genome = breedChickenGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = CHICKEN_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretChickenColor(genome);
  var healthScore = calcChickenHealthScore(genome);
  var perfScore = calcChickenPerfScore(genome);

  var sireW = sire.weightLbs || 7;
  var damW = dam.weightLbs || 5;
  var avgW = Math.round(((sireW + damW) / 2) * 10) / 10;
  var weight = avgW + Math.round((Math.random()-0.5) * 2 * 10) / 10;
  if (sex === "F") weight = Math.round(weight * 0.75 * 10) / 10;

  var sireH = sire.heightIn || 16;
  var damH = dam.heightIn || 14;
  var height = Math.round((sireH + damH) / 2) + Math.round((Math.random()-0.5) * 2);

  var coi = sire.breed === dam.breed ? Math.round((3 + Math.random()*3)*10)/10 : 0;
  if (sire.sireId && dam.sireId && sire.sireId === dam.sireId) coi += 12.5;
  if (sire.damId && dam.damId && sire.damId === dam.damId) coi += 12.5;

  var chickType = dam.type || (breedDef ? breedDef.type : "dual");

  return {
    id: "chicken_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "chicken",
    name: generateChickenName(sex),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Dual",
    type: chickType,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(weight * 0.03 * 10) / 10, // chicks ~3% of adult weight
    heightIn: Math.round(height * 0.20),
    price: 0,
    coi: Math.min(coi, 50),
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation||1, dam.generation||1) + 1,
    lifespan: 72 + Math.round((Math.random()-0.5) * 24)
  };
}

// ── NORMALIZE (healing existing chickens that lack genetics) ─────────────────

function normalizeChicken(animal) {
  if (!animal || animal.species !== "chicken") return animal;
  if (animal.genome) return animal;

  var breedDef = CHICKEN_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || null;
  if (!breedDef) {
    var type = animal.type || randomChickenType();
    var breedName = chickenBreedForType(type);
    breedDef = CHICKEN_BREED_DEFS.find(function(b){ return b.name === breedName; }) || CHICKEN_BREED_DEFS[0];
  }

  var genome = generateChickenGenome(breedDef.name);
  var coatColor = interpretChickenColor(genome);
  var healthScore = calcChickenHealthScore(genome);
  var perfScore = calcChickenPerfScore(genome);

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
    weightLbs: animal.weightLbs || (animal.sex === "F" ? (breedDef.weightHen || 5) : (breedDef.weightRooster || 7)),
    heightIn: animal.heightIn || breedDef.heightAvg || 16,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (72 + Math.round((Math.random()-0.5) * 24)),
    coi: animal.coi || 0
  });
}

// ── MARKET HELPERS ──────────────────────────────────────────────────────────

function randomChickenType() {
  var r = Math.random();
  if (r < 0.30) return "egg";
  if (r < 0.55) return "meat";
  if (r < 0.85) return "dual";
  return "ornamental";
}

function chickenBreedForType(type) {
  var list = type==="egg" ? CHICKEN_EGG_BREEDS : type==="meat" ? CHICKEN_MEAT_BREEDS : type==="dual" ? CHICKEN_DUAL_BREEDS : CHICKEN_ORNAMENTAL_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

var CHICKEN_MEAT_PRICE = {
  egg: 5,
  meat: 10,
  dual: 8,
  ornamental: 3
};
