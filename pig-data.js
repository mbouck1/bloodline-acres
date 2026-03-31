// ══════════════════════════════════════════════════════════════════════════════
// PIG GENETICS ENGINE — pig-data.js
// 15 breeds across 3 types: Heritage, Commercial, Miniature
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as sheep-data.js / goat-data.js.
// ══════════════════════════════════════════════════════════════════════════════

// ── BREED DEFINITIONS ────────────────────────────────────────────────────────
// Weights in lbs (boar avg). Heights in inches at shoulder.
// coatFreqs: E = Extension (black/red), A = Agouti, S = Spotting, W = White, Bl = Belt
// healthProfile: 0-1 probability of "G" (good) allele
// perfProfile: 1-5 scale per QTL
// Perf QTLs: GROWTH, MUSCLE, LITTER, TEMP, HARDY, FEED
//   (LITTER = prolificacy; FEED = feed conversion efficiency)

var PIG_BREED_DEFS = [
  // ═══ HERITAGE (6) ═══
  { name:"Berkshire",        group:"Heritage", weightBoar:600, weightSow:500, weightRange:[400,700], heightAvg:28, type:"heritage",
    colors:["Black with white points"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.85,ReproQ:0.82,StressQ:0.85},
    perfProfile:{GROWTH:3,MUSCLE:4,LITTER:3,TEMP:5,HARDY:4,FEED:3},
    coatFreqs:{E:[["E",0.95],["e",0.05]],A:[["Aa",0.90],["Aw",0.10]],S:[["S",0.70],["s",0.30]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Duroc",            group:"Heritage", weightBoar:650, weightSow:550, weightRange:[450,800], heightAvg:29, type:"heritage",
    colors:["Red","Golden Red","Dark Cherry"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.82,ReproQ:0.85,StressQ:0.80},
    perfProfile:{GROWTH:5,MUSCLE:4,LITTER:3,TEMP:4,HARDY:4,FEED:4},
    coatFreqs:{E:[["e",1.0]],A:[["Aw",0.70],["At",0.30]],S:[["S",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Hampshire",        group:"Heritage", weightBoar:650, weightSow:550, weightRange:[450,750], heightAvg:28, type:"heritage",
    colors:["Black with white belt"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.80,ReproQ:0.82,StressQ:0.82},
    perfProfile:{GROWTH:4,MUSCLE:5,LITTER:3,TEMP:4,HARDY:4,FEED:4},
    coatFreqs:{E:[["E",0.95],["e",0.05]],A:[["Aa",0.90],["Aw",0.10]],S:[["S",1.0]],W:[["w",1.0]],Bl:[["Bl",0.90],["bl",0.10]]} },

  { name:"Tamworth",         group:"Heritage", weightBoar:550, weightSow:450, weightRange:[350,650], heightAvg:27, type:"heritage",
    colors:["Sandy Red","Ginger","Golden"],
    healthProfile:{LegQ:0.88,RespiQ:0.85,GutQ:0.85,ReproQ:0.80,StressQ:0.88},
    perfProfile:{GROWTH:3,MUSCLE:3,LITTER:3,TEMP:4,HARDY:5,FEED:3},
    coatFreqs:{E:[["e",1.0]],A:[["Aw",0.80],["At",0.20]],S:[["S",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Large Black",      group:"Heritage", weightBoar:700, weightSow:600, weightRange:[500,800], heightAvg:30, type:"heritage",
    colors:["Solid Black"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.88,ReproQ:0.85,StressQ:0.85},
    perfProfile:{GROWTH:3,MUSCLE:3,LITTER:4,TEMP:5,HARDY:5,FEED:3},
    coatFreqs:{E:[["E",1.0]],A:[["Aa",1.0]],S:[["S",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Gloucestershire Old Spots", group:"Heritage", weightBoar:600, weightSow:500, weightRange:[400,700], heightAvg:28, type:"heritage",
    colors:["White with black spots"],
    healthProfile:{LegQ:0.80,RespiQ:0.80,GutQ:0.85,ReproQ:0.85,StressQ:0.88},
    perfProfile:{GROWTH:3,MUSCLE:3,LITTER:4,TEMP:5,HARDY:4,FEED:3},
    coatFreqs:{E:[["E",0.50],["e",0.50]],A:[["Aw",0.80],["At",0.20]],S:[["s",1.0]],W:[["W",0.70],["w",0.30]],Bl:[["bl",1.0]]} },

  // ═══ COMMERCIAL (5) ═══
  { name:"Yorkshire",        group:"Commercial", weightBoar:650, weightSow:550, weightRange:[450,750], heightAvg:29, type:"commercial",
    colors:["White","Pink"],
    healthProfile:{LegQ:0.82,RespiQ:0.78,GutQ:0.80,ReproQ:0.88,StressQ:0.75},
    perfProfile:{GROWTH:5,MUSCLE:4,LITTER:5,TEMP:3,HARDY:3,FEED:5},
    coatFreqs:{E:[["E",0.50],["e",0.50]],A:[["Aw",1.0]],S:[["S",1.0]],W:[["W",0.92],["w",0.08]],Bl:[["bl",1.0]]} },

  { name:"Landrace",         group:"Commercial", weightBoar:650, weightSow:550, weightRange:[450,750], heightAvg:28, type:"commercial",
    colors:["White"],
    healthProfile:{LegQ:0.78,RespiQ:0.78,GutQ:0.80,ReproQ:0.90,StressQ:0.72},
    perfProfile:{GROWTH:5,MUSCLE:4,LITTER:5,TEMP:3,HARDY:3,FEED:5},
    coatFreqs:{E:[["E",0.50],["e",0.50]],A:[["Aw",1.0]],S:[["S",1.0]],W:[["W",0.95],["w",0.05]],Bl:[["bl",1.0]]} },

  { name:"Chester White",    group:"Commercial", weightBoar:600, weightSow:500, weightRange:[400,700], heightAvg:27, type:"commercial",
    colors:["White"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.82,ReproQ:0.85,StressQ:0.78},
    perfProfile:{GROWTH:4,MUSCLE:4,LITTER:4,TEMP:4,HARDY:3,FEED:4},
    coatFreqs:{E:[["E",0.50],["e",0.50]],A:[["Aw",1.0]],S:[["S",1.0]],W:[["W",0.92],["w",0.08]],Bl:[["bl",1.0]]} },

  { name:"Pietrain",         group:"Commercial", weightBoar:550, weightSow:450, weightRange:[350,650], heightAvg:26, type:"commercial",
    colors:["White with black/gray spots","Piebald"],
    healthProfile:{LegQ:0.80,RespiQ:0.72,GutQ:0.78,ReproQ:0.78,StressQ:0.65},
    perfProfile:{GROWTH:4,MUSCLE:5,LITTER:3,TEMP:3,HARDY:2,FEED:4},
    coatFreqs:{E:[["E",0.60],["e",0.40]],A:[["Aw",0.50],["At",0.30],["Aa",0.20]],S:[["s",1.0]],W:[["W",0.40],["w",0.60]],Bl:[["bl",1.0]]} },

  { name:"Spot",             group:"Commercial", weightBoar:600, weightSow:500, weightRange:[400,700], heightAvg:27, type:"commercial",
    colors:["Black and white spotted"],
    healthProfile:{LegQ:0.82,RespiQ:0.80,GutQ:0.82,ReproQ:0.85,StressQ:0.80},
    perfProfile:{GROWTH:4,MUSCLE:4,LITTER:4,TEMP:4,HARDY:4,FEED:4},
    coatFreqs:{E:[["E",0.70],["e",0.30]],A:[["Aw",0.50],["Aa",0.50]],S:[["s",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  // ═══ MINIATURE (4) ═══
  { name:"Kunekune",         group:"Miniature", weightBoar:200, weightSow:150, weightRange:[100,250], heightAvg:20, type:"mini",
    colors:["Black","Ginger","Brown","Cream","Spotted","Tricolor"],
    healthProfile:{LegQ:0.85,RespiQ:0.85,GutQ:0.88,ReproQ:0.80,StressQ:0.90},
    perfProfile:{GROWTH:2,MUSCLE:2,LITTER:2,TEMP:5,HARDY:5,FEED:2},
    coatFreqs:{E:[["E",0.40],["e",0.60]],A:[["Aw",0.25],["At",0.25],["Ab",0.25],["Aa",0.25]],S:[["S",0.40],["s",0.60]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Juliana",          group:"Miniature", weightBoar:65, weightSow:55, weightRange:[40,80], heightAvg:14, type:"mini",
    colors:["Silver","Red","White","Black","Spotted"],
    healthProfile:{LegQ:0.82,RespiQ:0.82,GutQ:0.85,ReproQ:0.78,StressQ:0.88},
    perfProfile:{GROWTH:2,MUSCLE:1,LITTER:2,TEMP:5,HARDY:4,FEED:2},
    coatFreqs:{E:[["E",0.40],["e",0.60]],A:[["Aw",0.30],["At",0.30],["Ab",0.20],["Aa",0.20]],S:[["S",0.30],["s",0.70]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"American Guinea Hog", group:"Miniature", weightBoar:200, weightSow:150, weightRange:[100,250], heightAvg:18, type:"mini",
    colors:["Black","Dark Gray"],
    healthProfile:{LegQ:0.88,RespiQ:0.85,GutQ:0.90,ReproQ:0.82,StressQ:0.90},
    perfProfile:{GROWTH:2,MUSCLE:2,LITTER:3,TEMP:5,HARDY:5,FEED:2},
    coatFreqs:{E:[["E",1.0]],A:[["Aa",0.90],["Ab",0.10]],S:[["S",1.0]],W:[["w",1.0]],Bl:[["bl",1.0]]} },

  { name:"Ossabaw Island",   group:"Miniature", weightBoar:200, weightSow:150, weightRange:[100,250], heightAvg:18, type:"mini",
    colors:["Black","Spotted","Red","Gray"],
    healthProfile:{LegQ:0.85,RespiQ:0.82,GutQ:0.88,ReproQ:0.80,StressQ:0.88},
    perfProfile:{GROWTH:2,MUSCLE:2,LITTER:3,TEMP:4,HARDY:5,FEED:2},
    coatFreqs:{E:[["E",0.50],["e",0.50]],A:[["Aw",0.20],["At",0.20],["Ab",0.30],["Aa",0.30]],S:[["S",0.50],["s",0.50]],W:[["w",1.0]],Bl:[["bl",1.0]]} }
];

// ── LOOKUP HELPERS ───────────────────────────────────────────────────────────

var PIG_HERITAGE_BREEDS    = PIG_BREED_DEFS.filter(function(b){ return b.type==="heritage"; }).map(function(b){ return b.name; });
var PIG_COMMERCIAL_BREEDS  = PIG_BREED_DEFS.filter(function(b){ return b.type==="commercial"; }).map(function(b){ return b.name; });
var PIG_MINI_BREEDS        = PIG_BREED_DEFS.filter(function(b){ return b.type==="mini"; }).map(function(b){ return b.name; });

// ── QTL DEFINITIONS ─────────────────────────────────────────────────────────

var PIG_PERF_QTLS   = ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];
var PIG_HEALTH_QTLS = ["LegQ","RespiQ","GutQ","ReproQ","StressQ"];

var PIG_PERF_QTL_INFO = {
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",        desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Muscle/Carcass",     desc:"Meat quality and lean yield" },
  LITTER: { icon:"\uD83D\uDC37", full:"Litter Size",        desc:"Number of piglets per farrowing" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",        desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",          desc:"Outdoor tolerance and resilience" },
  FEED:   { icon:"\uD83C\uDF3D", full:"Feed Efficiency",    desc:"Weight gain per unit of feed" }
};

var PIG_HEALTH_QTL_INFO = {
  LegQ:    { icon:"\uD83E\uDDB6", full:"Leg Soundness",      desc:"Joint and hoof integrity" },
  RespiQ:  { icon:"\uD83D\uDCA8", full:"Respiratory Health",  desc:"Resistance to pneumonia and PRRS" },
  GutQ:    { icon:"\uD83E\uDDE0", full:"Gut Health",          desc:"Digestive efficiency and disease resistance" },
  ReproQ:  { icon:"\uD83C\uDF31", full:"Reproduction",        desc:"Conception rate and farrowing ease" },
  StressQ: { icon:"\uD83D\uDCA2", full:"Stress Tolerance",    desc:"Resistance to porcine stress syndrome" }
};

// ── GENOME GENERATION ────────────────────────────────────────────────────────

function pickWeightedPig(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidPig(freqArr) {
  return [pickWeightedPig(freqArr), pickWeightedPig(freqArr)];
}

function punnettPig(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generatePigGenome(breedName) {
  var breed = PIG_BREED_DEFS.find(function(b){ return b.name === breedName; }) || PIG_BREED_DEFS[0];
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["E","A","S","W","Bl"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidPig(cf[loc]) : ["N","N"];
  });
  var health = {};
  PIG_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidPig([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });
  var perf = {};
  PIG_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedPigGenomes(g1, g2) {
  var coat = {};
  ["E","A","S","W","Bl"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettPig(a[0], a[1]), punnettPig(b[0], b[1])];
  });
  var health = {};
  PIG_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettPig(a[0], a[1]), punnettPig(b[0], b[1])];
  });
  var perf = {};
  PIG_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettPig(a[0], a[1]);
    var v2 = punnettPig(b[0], b[1]);
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────
// E = Extension: E (allows dark pigment), e (recessive red — ee = red/ginger) — E dominant
// A = Agouti: Aw (wild), At (tan points), Ab (brown), Aa (solid dark) — Aw > At > Ab > Aa
// S = Spotting: S (solid), s (spotted) — S dominant
// W = White: W (dominant white), w (shows color) — W dominant
// Bl = Belt: Bl (white belt around shoulders), bl (no belt) — Bl dominant

function interpretPigColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;
  var E  = c.E  || ["E","E"];
  var A  = c.A  || ["Aw","Aw"];
  var S  = c.S  || ["S","S"];
  var W  = c.W  || ["w","w"];
  var Bl = c.Bl || ["bl","bl"];

  var isWhite = W[0] === "W" || W[1] === "W";
  if (isWhite) return "White";

  var isRed = E[0] === "e" && E[1] === "e";
  var hasBelt = Bl[0] === "Bl" || Bl[1] === "Bl";
  var hasSpots = S[0] === "s" || S[1] === "s";
  var heavySpots = S[0] === "s" && S[1] === "s";

  if (isRed) {
    var base = "Red";
    if (hasBelt) return "Red with White Belt";
    if (heavySpots) return "Red and White";
    if (hasSpots) return "Red Spotted";
    return base;
  }

  var agoutiOrder = { Aw: 4, At: 3, Ab: 2, Aa: 1 };
  var a0rank = agoutiOrder[A[0]] || 1;
  var a1rank = agoutiOrder[A[1]] || 1;
  var topAgouti = a0rank >= a1rank ? A[0] : A[1];

  var base;
  if (topAgouti === "Aw") base = "Sandy";
  else if (topAgouti === "At") base = "Black with Tan Points";
  else if (topAgouti === "Ab") base = "Dark Brown";
  else base = "Black";

  if (hasBelt) return base + " with White Belt";
  if (heavySpots) return base + " and White";
  if (hasSpots) return base + " Spotted";
  return base;
}

// ── SCORING ─────────────────────────────────────────────────────────────────

function calcPigHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  PIG_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / PIG_HEALTH_QTLS.length);
}

function calcPigPerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  PIG_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (PIG_PERF_QTLS.length * 5)) * 100);
}

// ── NAMES ───────────────────────────────────────────────────────────────────

var PIG_NAMES_M = [
  "Hamlet","Bacon","Truffles","Wilbur","Porky","Chester","Gus","Tank",
  "Boomer","Hank","Duke","Brisket","Copper","Oakley","Bruno","Magnus",
  "Rusty","Tater","Chunk","Biscuit","Angus","Whiskey","Blaze","Bubba"
];
var PIG_NAMES_F = [
  "Petunia","Daisy","Rosie","Maple","Honey","Buttercup","Truffle","Pearl",
  "Clover","Ginger","Hazel","Nutmeg","Blossom","Poppy","Willow","Sage",
  "Dolly","Fern","Olive","Ruby","Penny","Ivy","Belle","Cinnamon"
];

function generatePigName(sex, existingNames) {
  var pool = sex === "M" ? PIG_NAMES_M : PIG_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ─────────────────────────────────────────────────────────

function createPig(breedName, type, sex, ageMonths) {
  var breed = PIG_BREED_DEFS.find(function(b){ return b.name === breedName; }) || PIG_BREED_DEFS[0];
  var genome = generatePigGenome(breedName);
  var coatColor = interpretPigColor(genome);
  var healthScore = calcPigHealthScore(genome);
  var perfScore = calcPigPerfScore(genome);

  var baseWeight = sex === "F" ? (breed.weightSow || breed.weightBoar * 0.8) : (breed.weightBoar || 550);
  var weight = baseWeight + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.2);
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 4);
  if (sex === "F") height = Math.round(height * 0.92);

  var basePrices = { heritage: 150, commercial: 80, mini: 200 };
  var base = basePrices[breed.type] || 100;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 25) * 25;

  return {
    id: "pig_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "pig",
    name: generatePigName(sex),
    breed: breedName,
    group: breed.group,
    type: type || breed.type,
    sex: sex || "F",
    ageMonths: ageMonths || (Math.floor(Math.random()*24) + 6),
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
    lifespan: 96 + Math.round((Math.random()-0.5) * 24) // ~6-10 years
  };
}

// ── PIGLET CREATION (breeding) ──────────────────────────────────────────────

function createPiglet(sire, dam) {
  var genome = breedPigGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = PIG_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretPigColor(genome);
  var healthScore = calcPigHealthScore(genome);
  var perfScore = calcPigPerfScore(genome);

  var sireW = sire.weightLbs || 550;
  var damW = dam.weightLbs || 450;
  var avgW = Math.round((sireW + damW) / 2);
  var weight = avgW + Math.round((Math.random()-0.5) * 40);
  if (sex === "F") weight = Math.round(weight * 0.8);

  var sireH = sire.heightIn || 27;
  var damH = dam.heightIn || 27;
  var height = Math.round((sireH + damH) / 2) + Math.round((Math.random()-0.5) * 3);

  var coi = sire.breed === dam.breed ? Math.round((3 + Math.random()*3)*10)/10 : 0;
  if (sire.sireId && dam.sireId && sire.sireId === dam.sireId) coi += 12.5;
  if (sire.damId && dam.damId && sire.damId === dam.damId) coi += 12.5;

  var pigletType = dam.type || (breedDef ? breedDef.type : "commercial");

  return {
    id: "pig_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "pig",
    name: generatePigName(sex),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Commercial",
    type: pigletType,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(weight * 0.02), // piglets ~2% of adult weight
    heightIn: Math.round(height * 0.30),
    price: 0,
    coi: Math.min(coi, 50),
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation||1, dam.generation||1) + 1,
    lifespan: 96 + Math.round((Math.random()-0.5) * 24)
  };
}

// ── NORMALIZE (healing existing pigs that lack genetics) ─────────────────────

function normalizePig(animal) {
  if (!animal || animal.species !== "pig") return animal;
  if (animal.genome) return animal;

  var breedDef = PIG_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || null;
  if (!breedDef) {
    var type = animal.type || randomPigType();
    var breedName = pigBreedForType(type);
    breedDef = PIG_BREED_DEFS.find(function(b){ return b.name === breedName; }) || PIG_BREED_DEFS[0];
  }

  var genome = generatePigGenome(breedDef.name);
  var coatColor = interpretPigColor(genome);
  var healthScore = calcPigHealthScore(genome);
  var perfScore = calcPigPerfScore(genome);

  return Object.assign({}, animal, {
    name: animal.name || breedDef.name,
    breed: breedDef.name,
    group: breedDef.group,
    type: breedDef.type,
    genome: genome,
    coatColor: coatColor,
    ageMonths: animal.ageMonths || (Math.floor(Math.random()*24) + 6),
    healthScore: animal.healthScore != null ? animal.healthScore : healthScore,
    perfScore: animal.perfScore != null ? animal.perfScore : perfScore,
    weightLbs: animal.weightLbs || (animal.sex === "F" ? (breedDef.weightSow || 450) : (breedDef.weightBoar || 550)),
    heightIn: animal.heightIn || breedDef.heightAvg || 27,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (96 + Math.round((Math.random()-0.5) * 24)),
    coi: animal.coi || 0
  });
}

// ── MARKET HELPERS ──────────────────────────────────────────────────────────

function randomPigType() {
  var r = Math.random();
  if (r < 0.40) return "heritage";
  if (r < 0.75) return "commercial";
  return "mini";
}

function pigBreedForType(type) {
  var list = type==="heritage" ? PIG_HERITAGE_BREEDS : type==="commercial" ? PIG_COMMERCIAL_BREEDS : PIG_MINI_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

var PIG_MEAT_PRICE = {
  heritage: 140,
  commercial: 120,
  mini: 80
};
