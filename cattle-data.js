// ══════════════════════════════════════════════════════════════════════════════
// CATTLE GENETICS ENGINE — cattle-data.js
// Coat color genetics, health QTLs, performance QTLs, breeding, and scoring.
// Follows the same architecture as horses-data.js.
// ══════════════════════════════════════════════════════════════════════════════
// ── BREED DEFINITIONS ────────────────────────────────────────────────────────

var CATTLE_BREED_DEFS = [
  // === BEEF BREEDS ===
  { name:"Angus",           group:"Beef",  weightAvg:1200, weightRange:[1000,1400], heightAvg:52, colors:["Black"],
    healthProfile:{HoofQ:0.85,UdderQ:0.70,FertQ:0.85,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:5,TEMP:4,HARDY:4}, coatFreqs:{E:[["E",0.95],["e",0.05]],D:[["D",1.0]],S:[["S",0.95],["s",0.05]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Red Angus",       group:"Beef",  weightAvg:1150, weightRange:[950,1350], heightAvg:51, colors:["Red"],
    healthProfile:{HoofQ:0.85,UdderQ:0.70,FertQ:0.85,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:5,TEMP:4,HARDY:4}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["S",0.95],["s",0.05]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Hereford",        group:"Beef",  weightAvg:1250, weightRange:[1050,1500], heightAvg:53, colors:["Red with White Face"],
    healthProfile:{HoofQ:0.80,UdderQ:0.70,FertQ:0.80,RespiQ:0.85,FrameQ:0.80},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:4,TEMP:5,HARDY:5}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["s",0.90],["S",0.10]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Charolais",       group:"Beef",  weightAvg:1400, weightRange:[1200,1700], heightAvg:56, colors:["White","Cream"],
    healthProfile:{HoofQ:0.80,UdderQ:0.65,FertQ:0.75,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:2,GROWTH:5,MUSCLE:5,TEMP:3,HARDY:3}, coatFreqs:{E:[["e",1.0]],D:[["D",0.30],["d",0.70]],S:[["S",1.0]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Simmental",       group:"Beef",  weightAvg:1350, weightRange:[1100,1600], heightAvg:55, colors:["Red and White","Gold and White","Black"],
    healthProfile:{HoofQ:0.80,UdderQ:0.75,FertQ:0.80,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:3,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3}, coatFreqs:{E:[["E",0.50],["e",0.50]],D:[["D",1.0]],S:[["s",0.60],["S",0.40]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Limousin",        group:"Beef",  weightAvg:1300, weightRange:[1100,1550], heightAvg:54, colors:["Golden Red","Red"],
    healthProfile:{HoofQ:0.80,UdderQ:0.65,FertQ:0.80,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:5,TEMP:3,HARDY:3}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["S",0.90],["s",0.10]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Shorthorn",       group:"Beef",  weightAvg:1250, weightRange:[1000,1500], heightAvg:53, colors:["Red","White","Roan","Red and White"],
    healthProfile:{HoofQ:0.80,UdderQ:0.75,FertQ:0.80,RespiQ:0.80,FrameQ:0.80},
    perfProfile:{MILK:3,GROWTH:4,MUSCLE:4,TEMP:4,HARDY:4}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["s",0.50],["S",0.50]],Rn:[["Rn",0.40],["rn",0.60]],Br:[["br",1.0]]} },
  { name:"Brahman",         group:"Beef",  weightAvg:1200, weightRange:[900,1500], heightAvg:54, colors:["Grey","Red","White","Brindle"],
    healthProfile:{HoofQ:0.85,UdderQ:0.65,FertQ:0.70,RespiQ:0.85,FrameQ:0.80},
    perfProfile:{MILK:2,GROWTH:3,MUSCLE:3,TEMP:2,HARDY:5}, coatFreqs:{E:[["E",0.30],["e",0.70]],D:[["D",0.60],["d",0.40]],S:[["S",0.70],["s",0.30]],Rn:[["rn",1.0]],Br:[["Br",0.005],["br",0.995]]} },
  { name:"Brangus",         group:"Beef",  weightAvg:1250, weightRange:[1000,1450], heightAvg:53, colors:["Black","Red"],
    healthProfile:{HoofQ:0.85,UdderQ:0.70,FertQ:0.80,RespiQ:0.85,FrameQ:0.85},
    perfProfile:{MILK:2,GROWTH:4,MUSCLE:4,TEMP:3,HARDY:5}, coatFreqs:{E:[["E",0.80],["e",0.20]],D:[["D",1.0]],S:[["S",0.95],["s",0.05]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Gelbvieh",        group:"Beef",  weightAvg:1300, weightRange:[1050,1500], heightAvg:54, colors:["Red","Black","Gold"],
    healthProfile:{HoofQ:0.80,UdderQ:0.75,FertQ:0.85,RespiQ:0.80,FrameQ:0.85},
    perfProfile:{MILK:3,GROWTH:5,MUSCLE:5,TEMP:4,HARDY:3}, coatFreqs:{E:[["E",0.40],["e",0.60]],D:[["D",1.0]],S:[["S",0.90],["s",0.10]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },

  // === DAIRY BREEDS ===
  { name:"Holstein",        group:"Dairy", weightAvg:1500, weightRange:[1300,1700], heightAvg:58, colors:["Black and White","Red and White"],
    healthProfile:{HoofQ:0.70,UdderQ:0.85,FertQ:0.70,RespiQ:0.75,FrameQ:0.75},
    perfProfile:{MILK:5,GROWTH:3,MUSCLE:2,TEMP:4,HARDY:2}, coatFreqs:{E:[["E",0.85],["e",0.15]],D:[["D",1.0]],S:[["s",1.0]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Jersey",          group:"Dairy", weightAvg:1000, weightRange:[800,1200], heightAvg:48, colors:["Fawn","Light Brown","Dark Brown"],
    healthProfile:{HoofQ:0.80,UdderQ:0.90,FertQ:0.85,RespiQ:0.80,FrameQ:0.70},
    perfProfile:{MILK:5,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:3}, coatFreqs:{E:[["e",1.0]],D:[["D",0.70],["d",0.30]],S:[["S",0.90],["s",0.10]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Guernsey",        group:"Dairy", weightAvg:1050, weightRange:[900,1200], heightAvg:50, colors:["Fawn and White","Red and White"],
    healthProfile:{HoofQ:0.80,UdderQ:0.85,FertQ:0.80,RespiQ:0.80,FrameQ:0.75},
    perfProfile:{MILK:4,GROWTH:2,MUSCLE:2,TEMP:4,HARDY:3}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["s",0.80],["S",0.20]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Brown Swiss",     group:"Dairy", weightAvg:1400, weightRange:[1200,1600], heightAvg:56, colors:["Brown","Grey-Brown"],
    healthProfile:{HoofQ:0.85,UdderQ:0.85,FertQ:0.80,RespiQ:0.85,FrameQ:0.85},
    perfProfile:{MILK:4,GROWTH:3,MUSCLE:3,TEMP:5,HARDY:4}, coatFreqs:{E:[["e",1.0]],D:[["D",0.50],["d",0.50]],S:[["S",1.0]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Ayrshire",        group:"Dairy", weightAvg:1150, weightRange:[1000,1300], heightAvg:52, colors:["Red and White","Mahogany and White"],
    healthProfile:{HoofQ:0.85,UdderQ:0.80,FertQ:0.80,RespiQ:0.85,FrameQ:0.80},
    perfProfile:{MILK:4,GROWTH:3,MUSCLE:2,TEMP:3,HARDY:4}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["s",0.85],["S",0.15]],Rn:[["rn",1.0]],Br:[["br",1.0]]} },
  { name:"Milking Shorthorn",group:"Dairy",weightAvg:1200, weightRange:[1000,1400], heightAvg:53, colors:["Red","White","Roan","Red and White"],
    healthProfile:{HoofQ:0.80,UdderQ:0.80,FertQ:0.80,RespiQ:0.80,FrameQ:0.80},
    perfProfile:{MILK:4,GROWTH:3,MUSCLE:3,TEMP:4,HARDY:4}, coatFreqs:{E:[["e",1.0]],D:[["D",1.0]],S:[["s",0.50],["S",0.50]],Rn:[["Rn",0.40],["rn",0.60]],Br:[["br",1.0]]} }
];

// ── GENOME GENERATION ────────────────────────────────────────────────────────

var CATTLE_PERF_QTLS = ["MILK","GROWTH","MUSCLE","TEMP","HARDY"];
var CATTLE_HEALTH_QTLS = ["HoofQ","UdderQ","FertQ","RespiQ","FrameQ"];

function pickWeightedCattle(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

function sampleDiploidCattle(freqArr) {
  return [pickWeightedCattle(freqArr), pickWeightedCattle(freqArr)];
}

function punnettCattle(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

function generateCattleGenome(breedName) {
  var breed = CATTLE_BREED_DEFS.find(function(b){ return b.name === breedName; }) || CATTLE_BREED_DEFS[0];

  // Coat loci
  var coat = {};
  var cf = breed.coatFreqs || {};
  ["E","D","S","Rn","Br"].forEach(function(loc) {
    coat[loc] = cf[loc] ? sampleDiploidCattle(cf[loc]) : ["N","N"];
  });

  // Health QTLs: G = good, g = poor
  var health = {};
  CATTLE_HEALTH_QTLS.forEach(function(q) {
    var goodFreq = (breed.healthProfile && breed.healthProfile[q]) || 0.80;
    health[q] = sampleDiploidCattle([["G", goodFreq], ["g", 1.0 - goodFreq]]);
  });

  // Performance QTLs: 1-5 scale per allele
  var perf = {};
  CATTLE_PERF_QTLS.forEach(function(q) {
    var avg = (breed.perfProfile && breed.perfProfile[q]) || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── BREEDING ─────────────────────────────────────────────────────────────────

function breedCattleGenomes(g1, g2) {
  var coat = {};
  ["E","D","S","Rn","Br"].forEach(function(loc) {
    var a = (g1.coat||{})[loc] || ["N","N"];
    var b = (g2.coat||{})[loc] || ["N","N"];
    coat[loc] = [punnettCattle(a[0], a[1]), punnettCattle(b[0], b[1])];
  });

  var health = {};
  CATTLE_HEALTH_QTLS.forEach(function(loc) {
    var a = (g1.health||{})[loc] || ["G","G"];
    var b = (g2.health||{})[loc] || ["G","G"];
    health[loc] = [punnettCattle(a[0], a[1]), punnettCattle(b[0], b[1])];
  });

  var perf = {};
  CATTLE_PERF_QTLS.forEach(function(q) {
    var a = (g1.perf||{})[q] || [3,3];
    var b = (g2.perf||{})[q] || [3,3];
    var v1 = punnettCattle(a[0], a[1]);
    var v2 = punnettCattle(b[0], b[1]);
    // Small mutation chance
    if (Math.random() < 0.08) v1 = Math.max(1, Math.min(5, v1 + (Math.random()<0.5 ? 1 : -1)));
    if (Math.random() < 0.08) v2 = Math.max(1, Math.min(5, v2 + (Math.random()<0.5 ? 1 : -1)));
    perf[q] = [v1, v2];
  });

  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// ── COLOR INTERPRETATION ─────────────────────────────────────────────────────

function interpretCattleColor(genome) {
  if (!genome || !genome.coat) return "Unknown";
  var c = genome.coat;
  var E = c.E || ["E","E"];
  var D = c.D || ["D","D"];
  var S = c.S || ["S","S"];
  var Rn = c.Rn || ["rn","rn"];
  var Br = c.Br || ["br","br"];

  var isBlack = E[0] === "E" || E[1] === "E"; // E is dominant for black
  var isDilute = D[0] === "d" && D[1] === "d"; // dd = diluted
  var hasWhite = S[0] === "s" || S[1] === "s"; // s = spotted/white pattern
  var allWhiteSpot = S[0] === "s" && S[1] === "s"; // ss = heavily spotted
  var isRoan = Rn[0] === "Rn" || Rn[1] === "Rn"; // Rn dominant = roan
  var isBrindle = Br[0] === "Br" || Br[1] === "Br";

  var base;
  if (isBlack) {
    base = isDilute ? "Smoky" : "Black";
  } else {
    base = isDilute ? "Cream" : "Red";
  }

  if (isBrindle) return base + " Brindle";
  if (isRoan) return base + " Roan";
  if (allWhiteSpot) return base + " and White";
  if (hasWhite) return base + " with White Markings";
  if (isDilute && !isBlack) return "White"; // ee dd = white/cream
  return base;
}

// ── BULL STUD FEE CALCULATOR ─────────────────────────────────────────────────

function calcSuggestedBullFee(bull) {
  if (!bull || bull.sex !== "M") return 400;
  var breedDef = CATTLE_BREED_DEFS.find(function(b){ return b.name === bull.breed; }) || null;
  var isDairy = bull.type === "dairy" || (breedDef && breedDef.group === "Dairy");

  var fee = isDairy ? 600 : 400;
  var reasons = [];

  // Show titles
  var titles = bull.cattleEarnedTitles || [];
  var nationalTitles = titles.filter(function(t){ return ["Ch.","GMCh.","DCh."].indexOf(t) !== -1; });
  var stateTitles    = titles.filter(function(t){ return ["SBB","SMC","SDB"].indexOf(t) !== -1; });
  var countyTitles   = titles.filter(function(t){ return ["CBB","CMC","CDB"].indexOf(t) !== -1; });
  if (nationalTitles.length > 0) { fee += nationalTitles.length * 800; reasons.push("🏆 National title" + (nationalTitles.length > 1 ? "s" : "") + " (" + nationalTitles.join(", ") + ")"); }
  if (stateTitles.length > 0)    { fee += stateTitles.length * 400;    reasons.push("🥈 State title" + (stateTitles.length > 1 ? "s" : "") + " (" + stateTitles.join(", ") + ")"); }
  if (countyTitles.length > 0)   { fee += countyTitles.length * 200;   reasons.push("🎪 County title" + (countyTitles.length > 1 ? "s" : "") + " (" + countyTitles.join(", ") + ")"); }

  // Performance score
  var perf = bull.perfScore || 0;
  if (perf >= 95)      { fee += 400; reasons.push("⚡ Exceptional genetics (" + perf + " perf)"); }
  else if (perf >= 85) { fee += 200; reasons.push("⚡ High-performance genetics (" + perf + " perf)"); }

  // Size vs breed average
  var breedWeightAvg = breedDef ? breedDef.weightAvg : 1200;
  var bullWeight = bull.weightLbs || breedWeightAvg;
  var weightPct = (bullWeight - breedWeightAvg) / breedWeightAvg;
  if (weightPct >= 0.15)      { fee += 400; reasons.push("📏 Exceptional frame (+" + Math.round(weightPct*100) + "% over breed avg)"); }
  else if (weightPct >= 0.10) { fee += 200; reasons.push("📏 Large frame (+" + Math.round(weightPct*100) + "% over breed avg)"); }

  // Rare coat
  var coat = (bull.coatColor || "").toLowerCase();
  var isBrindle = coat.indexOf("brindle") !== -1;
  var isRare    = !isBrindle && (coat.indexOf("roan") !== -1 || coat.indexOf("smoky") !== -1 || coat.indexOf("cream") !== -1);
  if (isBrindle) { fee += 1000; reasons.push("🎨 Brindle coat — exceptionally rare"); }
  else if (isRare) { fee += 400; reasons.push("🎨 Rare coat color (" + bull.coatColor + ")"); }

  // COI modifier
  var coi = bull.coi || 0;
  if (coi < 0.05)      { fee += 100; reasons.push("🧬 Outbred (low COI)"); }
  else if (coi >= 0.20) { fee -= 200; reasons.push("⚠️ High inbreeding penalty (COI " + Math.round(coi*100) + "%)"); }

  // Round to nearest $25, minimum $200
  fee = Math.max(200, Math.round(fee / 25) * 25);
  return { fee: fee, reasons: reasons };
}

// ── SCORING ──────────────────────────────────────────────────────────────────

function calcCattleHealthScore(genome) {
  if (!genome || !genome.health) return 70;
  var total = 0;
  CATTLE_HEALTH_QTLS.forEach(function(q) {
    var alleles = genome.health[q] || ["G","G"];
    var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
    total += (good / 2) * 100;
  });
  return Math.round(total / CATTLE_HEALTH_QTLS.length);
}

function calcCattlePerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var total = 0;
  CATTLE_PERF_QTLS.forEach(function(q) {
    var v = genome.perf[q] || [3,3];
    total += (v[0] + v[1]) / 2;
  });
  return Math.round((total / (CATTLE_PERF_QTLS.length * 5)) * 100);
}

// ── CATTLE NAMES ─────────────────────────────────────────────────────────────

var CATTLE_NAMES_M = [
  "Duke","Brutus","Tank","Thunder","Big Red","Ace","Maverick","Buster",
  "Hank","Rusty","Ranger","Chief","Buck","Bullet","Tex","Rocko",
  "Goliath","Atlas","Bruno","Magnus","Rex","Samson","Titan","Wyatt"
];
var CATTLE_NAMES_F = [
  "Daisy","Bella","Rosie","Buttercup","Clover","Dixie","Penny","Maggie",
  "Ruby","Sadie","Ginger","Honey","Lucy","Molly","Peaches","Annie",
  "Bonnie","Dolly","Hazel","Ivy","June","Lulu","Pearl","Stella"
];

function generateCattleName(sex, existingNames) {
  var pool = sex === "M" ? CATTLE_NAMES_M : CATTLE_NAMES_F;
  var existing = (existingNames || []).map(function(n){ return n.toLowerCase(); });
  var available = pool.filter(function(n){ return existing.indexOf(n.toLowerCase()) === -1; });
  if (available.length === 0) {
    return pool[Math.floor(Math.random()*pool.length)] + " " + Math.floor(Math.random()*99+1);
  }
  return available[Math.floor(Math.random()*available.length)];
}

// ── ANIMAL CREATION ──────────────────────────────────────────────────────────

function createCattle(breedName, type, sex, ageMonths) {
  var breed = CATTLE_BREED_DEFS.find(function(b){ return b.name === breedName; }) || CATTLE_BREED_DEFS[0];
  var genome = generateCattleGenome(breedName);
  var coatColor = interpretCattleColor(genome);
  var healthScore = calcCattleHealthScore(genome);
  var perfScore = calcCattlePerfScore(genome);

  var weight = breed.weightAvg + Math.round((Math.random()-0.5) * (breed.weightRange[1] - breed.weightRange[0]) * 0.5);
  var height = breed.heightAvg + Math.round((Math.random()-0.5) * 4);

  var basePrices = { Beef: 500, Dairy: 600 };
  var base = basePrices[breed.group] || 500;
  var qualityMult = 0.7 + (healthScore / 100) * 0.6;
  var price = Math.round(base * qualityMult / 25) * 25;

  return {
    id: "cattle_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "cow",
    name: generateCattleName(sex),
    breed: breedName,
    group: breed.group,
    type: type || (breed.group === "Dairy" ? "dairy" : "beef"),
    sex: sex || "F",
    ageMonths: ageMonths || (Math.floor(Math.random()*48) + 18),
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
    lifespan: 240 + Math.round((Math.random()-0.5) * 48), // ~18-22 years
    milkYield: breed.group === "Dairy" ? (function(){
      var milkQtl = (genome.perf||{}).MILK || [3,3];
      var avg = (milkQtl[0]+milkQtl[1])/2;
      return Math.round(avg * 3.2); // gallons per game month, scaled by genetics
    })() : 0
  };
}

// ── CALF CREATION (breeding) ─────────────────────────────────────────────────

function createCalf(sire, dam) {
  var genome = breedCattleGenomes(sire.genome, dam.genome);
  var breed = sire.breed === dam.breed ? dam.breed : "Crossbred";
  var breedDef = CATTLE_BREED_DEFS.find(function(b){ return b.name === breed; }) || null;
  var sex = Math.random() < 0.5 ? "M" : "F";
  var coatColor = interpretCattleColor(genome);
  var healthScore = calcCattleHealthScore(genome);
  var perfScore = calcCattlePerfScore(genome);

  var sireW = sire.weightLbs || 1200;
  var damW = dam.weightLbs || 1100;
  var avgW = Math.round((sireW + damW) / 2 + (Math.random()-0.5) * 100);

  var sireH = sire.heightIn || 52;
  var damH = dam.heightIn || 50;
  var avgH = Math.round((sireH + damH) / 2 + (Math.random()-0.5) * 3);

  // Type: if both same type use it, otherwise pick based on dam
  var type = sire.type === dam.type ? dam.type : dam.type;

  return {
    id: "cattle_calf_" + Date.now() + "_" + Math.random().toString(36).slice(2,6),
    species: "cow",
    name: "Calf #" + Math.floor(Math.random()*999+1),
    breed: breed,
    group: breedDef ? breedDef.group : dam.group || "Beef",
    type: type,
    sex: sex,
    ageMonths: 0,
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    weightLbs: Math.round(avgW * 0.07), // ~7% of adult weight at birth
    heightIn: Math.round(avgH * 0.5),
    price: Math.round((healthScore + perfScore) / 2 * 4),
    coi: 0,
    sireId: sire.id,
    damId: dam.id,
    generation: Math.max(sire.generation || 1, dam.generation || 1) + 1,
    lifespan: (function(){
      var sL = sire.lifespan || 240;
      var dL = dam.lifespan || 240;
      return Math.round((sL + dL) / 2) + Math.round((Math.random()-0.5) * 24);
    })(),
    milkYield: type === "dairy" ? (function(){
      var milkQtl = (genome.perf||{}).MILK || [3,3];
      var avg = (milkQtl[0]+milkQtl[1])/2;
      return Math.round(avg * 3.2);
    })() : 0
  };
}

// ── NORMALIZE (backfill genome onto existing cows) ───────────────────────────

function normalizeCattle(animal) {
  if (!animal || animal.species !== "cow") return animal;
  if (animal.genome) return animal; // already has genetics

  var breedDef = CATTLE_BREED_DEFS.find(function(b){ return b.name === animal.breed; }) || CATTLE_BREED_DEFS[0];
  var genome = generateCattleGenome(animal.breed || breedDef.name);
  var coatColor = interpretCattleColor(genome);
  var healthScore = calcCattleHealthScore(genome);
  var perfScore = calcCattlePerfScore(genome);

  return Object.assign({}, animal, {
    name: animal.name || animal.breed || breedDef.name,
    genome: genome,
    coatColor: coatColor,
    ageMonths: animal.ageMonths || (Math.floor(Math.random()*48) + 18),
    healthScore: animal.healthScore != null ? animal.healthScore : healthScore,
    perfScore: animal.perfScore != null ? animal.perfScore : perfScore,
    weightLbs: animal.weightLbs || breedDef.weightAvg || 1200,
    heightIn: animal.heightIn || breedDef.heightAvg || 52,
    generation: animal.generation || 1,
    lifespan: animal.lifespan || (240 + Math.round((Math.random()-0.5) * 48)),
    milkYield: animal.milkYield != null ? animal.milkYield : (
      (animal.type === "dairy") ? (function(){
        var milkQtl = (genome.perf||{}).MILK || [3,3];
        return Math.round(((milkQtl[0]+milkQtl[1])/2) * 3.2);
      })() : 0
    )
  });
}

// ── CATTLE PERF QTL INFO (for UI display) ────────────────────────────────────

var CATTLE_PERF_QTL_INFO = {
  MILK:   { icon:"\uD83E\uDD5B", full:"Milk Yield",   desc:"Dairy production potential" },
  GROWTH: { icon:"\uD83D\uDCC8", full:"Growth Rate",   desc:"Speed of weight gain" },
  MUSCLE: { icon:"\uD83E\uDD69", full:"Muscle/Carcass",desc:"Meat quality and yield" },
  TEMP:   { icon:"\uD83E\uDDD8", full:"Temperament",   desc:"Docility and handling ease" },
  HARDY:  { icon:"\uD83C\uDF3F", full:"Hardiness",     desc:"Foraging ability and resilience" }
};

var CATTLE_HEALTH_QTL_INFO = {
  HoofQ:  { icon:"\uD83E\uDDB6", full:"Hoof Health",     desc:"Soundness and hoof quality" },
  UdderQ: { icon:"\uD83E\uDD5B", full:"Udder Quality",   desc:"Udder attachment and health" },
  FertQ:  { icon:"\uD83D\uDC23", full:"Fertility",       desc:"Reproductive soundness" },
  RespiQ: { icon:"\uD83D\uDCA8", full:"Respiratory",     desc:"Lung health and BRD resistance" },
  FrameQ: { icon:"\uD83E\uDDB4", full:"Frame/Structure", desc:"Skeletal soundness" }
};

// ══════════════════════════════════════════════════════════════════════════════
// CATTLE COUNTY FAIR SHOWS
// ══════════════════════════════════════════════════════════════════════════════

var CATTLE_SHOW_CLASSES = [
  { key:"beef_breed",    label:"Best of Breed (Beef)", emoji:"\uD83C\uDFC6", type:"beef",  purebredOnly:true,
    desc:"Purebred beef cattle judged on breed standard, conformation, and genetics.",
    qtlWeights:{ MILK:0.0, GROWTH:0.25, MUSCLE:0.35, TEMP:0.25, HARDY:0.15 },
    entryFee:{ county:50, state:150, national:400 },
    purse:{ county:[300,150,50], state:[1200,600,200], national:[5000,2500,1000] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"market_champ",  label:"Market Champion",      emoji:"\uD83E\uDD69", type:"beef",  purebredOnly:false,
    desc:"Judged on weight, muscling, growth, and carcass quality. Crossbreds welcome.",
    qtlWeights:{ MILK:0.0, GROWTH:0.35, MUSCLE:0.40, TEMP:0.10, HARDY:0.15 },
    entryFee:{ county:40, state:120, national:350 },
    purse:{ county:[250,125,40], state:[1000,500,175], national:[4000,2000,800] },
    fieldSize:{ county:10, state:16, national:24 }
  },
  { key:"dairy_breed",   label:"Best of Breed (Dairy)", emoji:"\uD83E\uDD5B", type:"dairy", purebredOnly:true,
    desc:"Purebred dairy cattle judged on breed standard, udder quality, and milk genetics.",
    qtlWeights:{ MILK:0.40, GROWTH:0.05, MUSCLE:0.05, TEMP:0.25, HARDY:0.25 },
    entryFee:{ county:50, state:150, national:400 },
    purse:{ county:[300,150,50], state:[1200,600,200], national:[5000,2500,1000] },
    fieldSize:{ county:8, state:14, national:22 }
  }
];

var CATTLE_SHOW_LEVELS = ["county","state","national"];
var CATTLE_SHOW_LEVEL_LABELS = { county:"County Fair", state:"State Fair", national:"National" };

var CATTLE_SHOW_TITLES = {
  beef_breed: {
    county:   { key:"CBB", label:"County Best of Breed",   prefix:"CBB " },
    state:    { key:"SBB", label:"State Best of Breed",    prefix:"SBB " },
    national: { key:"NBB", label:"National Best of Breed", prefix:"Ch. " }
  },
  market_champ: {
    county:   { key:"CMC", label:"County Market Champion",   prefix:"CMC " },
    state:    { key:"SMC", label:"State Market Champion",    prefix:"SMC " },
    national: { key:"GMC", label:"Grand Market Champion",    prefix:"GMCh. " }
  },
  dairy_breed: {
    county:   { key:"CDB", label:"County Best Dairy",      prefix:"CDB " },
    state:    { key:"SDB", label:"State Best Dairy",        prefix:"SDB " },
    national: { key:"NDB", label:"National Best Dairy",     prefix:"DCh. " }
  }
};

function getCattleShowLevel(animal, classKey) {
  return (animal.cattleShowLevels && animal.cattleShowLevels[classKey]) || "county";
}

function calcCattleShowScore(animal, classKey) {
  if (!animal || !animal.genome) return 0;
  var cls = CATTLE_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return 0;
  var hs = animal.healthScore || 50;
  var perf = animal.genome.perf || {};
  var weights = cls.qtlWeights;

  var qtlScore = 0;
  CATTLE_PERF_QTLS.forEach(function(q) {
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg/5)*100*(weights[q]||0.2);
  });

  // Weight bonus for market class
  var weightBonus = 0;
  if (classKey === "market_champ" && animal.weightLbs) {
    weightBonus = Math.min(10, (animal.weightLbs - 800) / 100);
  }

  // Milk yield bonus for dairy class
  var milkBonus = 0;
  if (classKey === "dairy_breed" && animal.milkYield) {
    milkBonus = Math.min(10, animal.milkYield / 2);
  }

  // Age modifier — cattle peak 2-8 years (24-96 months)
  var age = animal.ageMonths || 0;
  var ageMod = 1.0;
  if (age < 12) ageMod = 0.4;
  else if (age < 18) ageMod = 0.65;
  else if (age < 24) ageMod = 0.85;
  else if (age <= 96) ageMod = 1.0;
  else if (age <= 144) ageMod = 0.85;
  else ageMod = 0.65;

  var healthWeight = classKey === "market_champ" ? 0.3 : 0.4;
  var perfWeight = 1 - healthWeight;
  var coi = animal.coi || 0;
  var coiPenalty = coi > 10 ? Math.min(12, (coi-10)*0.5) : 0;

  var raw = (hs*healthWeight + qtlScore*perfWeight)*ageMod - coiPenalty + weightBonus + milkBonus;
  var variance = (Math.random()-0.5)*0.14;
  return Math.max(0, Math.min(100, raw*(1+variance)));
}

function runCattleShow(animal, classKey) {
  var cls = CATTLE_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return null;
  var level = getCattleShowLevel(animal, classKey);

  if (cls.purebredOnly && animal.breed === "Crossbred") return { error:"Best of Breed is purebreds only." };
  if (animal.retiredLivestock) return { error:"Retired cattle cannot compete." };
  if ((animal.ageMonths||0) < 12) return { error:"Must be at least 1 year old to show." };
  if (cls.type && animal.type !== cls.type) return { error:"This class is for "+cls.type+" cattle only." };

  var playerScore = calcCattleShowScore(animal, classKey);
  var fieldSize = (cls.fieldSize[level]||8) - 1;
  var aiNames = ["Thunderbolt","Iron Ridge","Willow Creek","Blackjack","Golddust",
    "Summit","Prairie King","Diamond Bar","Lone Star","Highland","Blue Ribbon",
    "Coppertop","Sterling","Maverick","Legacy","Stonewall","Stampede","Oakwood"];
  var aiSuffixes = ["Ranch","Farms","Cattle Co.","Acres","Station","Valley"];
  var competitors = [];
  var baseMean = { county:48, state:62, national:74 }[level] || 52;
  var spread = { county:20, state:14, national:10 }[level] || 18;
  for (var i = 0; i < fieldSize; i++) {
    var score = baseMean + (Math.random()-0.5)*spread*2;
    var aiName = aiNames[i % aiNames.length] + " " + aiSuffixes[Math.floor(Math.random()*aiSuffixes.length)];
    competitors.push({ name:aiName, isAI:true, score:Math.max(20, Math.min(98, score)) });
  }
  competitors.push({ name:animal.name||animal.breed, isAI:false, score:playerScore });
  competitors.sort(function(a,b){ return b.score - a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; }) + 1;
  var entryFee = cls.entryFee[level] || 50;
  var purse = cls.purse[level] || [0,0,0];
  var prize = placement===1?purse[0] : placement===2?purse[1] : placement===3?purse[2] : 0;
  var pts = placement===1?{county:3,state:6,national:12}[level] :
            placement===2?{county:2,state:4,national:8}[level] :
            placement===3?{county:1,state:2,national:4}[level] : 0;

  var promoted = false;
  var nextLevel = null;
  if (placement <= 3) {
    var levelIdx = CATTLE_SHOW_LEVELS.indexOf(level);
    if (levelIdx < CATTLE_SHOW_LEVELS.length - 1) {
      nextLevel = CATTLE_SHOW_LEVELS[levelIdx + 1];
      promoted = true;
    }
  }

  var titleEarned = null;
  if (placement === 1) {
    var typeTitles = CATTLE_SHOW_TITLES[classKey];
    if (typeTitles && typeTitles[level]) titleEarned = typeTitles[level];
  }

  return {
    placement:placement, totalEntries:cls.fieldSize[level]||8,
    prize:prize, entryFee:entryFee, net:prize-entryFee,
    playerScore:Math.round(playerScore*10)/10, competitors:competitors,
    classKey:classKey, level:level, promoted:promoted, nextLevel:nextLevel,
    titleEarned:titleEarned, showPoints:pts
  };
}

// ── Cattle Shows View ────────────────────────────────────────────────────────
function CattleShowsView(props) {
  var cattle = props.cattle || [];
  var money = props.money || 0;
  var onMoneyChange = props.onMoneyChange;
  var onCattleUpdate = props.onCattleUpdate;
  var onLog = props.onLog;
  var onClose = props.onClose;
  var lastShowDates = props.lastShowDates || {};
  var onShowDatesUpdate = props.onShowDatesUpdate;

  var _sc = React.useState(null), selectedCow = _sc[0], setSelectedCow = _sc[1];
  var _cl = React.useState("beef_breed"), selectedClass = _cl[0], setSelectedClass = _cl[1];
  var _rs = React.useState(null), lastResult = _rs[0], setLastResult = _rs[1];

  var cls = CATTLE_SHOW_CLASSES.find(function(c){ return c.key===selectedClass; });
  var showCooldownMs = 12 * 60 * 60 * 1000; // 12 hour cooldown

  // Filter cattle eligible for selected class
  var eligible = cattle.filter(function(a) {
    if (a.retiredLivestock) return false;
    if ((a.ageMonths||0) < 12) return false;
    if (cls && cls.type && a.type !== cls.type) return false;
    if (cls && cls.purebredOnly && a.breed === "Crossbred") return false;
    return true;
  });

  function isOnCooldown(animalId) {
    var key = "cattle_" + animalId + "_" + selectedClass;
    var last = lastShowDates[key];
    if (!last) return false;
    return (Date.now() - last) < showCooldownMs;
  }

  function getCooldownRemaining(animalId) {
    var key = "cattle_" + animalId + "_" + selectedClass;
    var last = lastShowDates[key];
    if (!last) return "";
    var remaining = showCooldownMs - (Date.now() - last);
    if (remaining <= 0) return "";
    var hrs = Math.ceil(remaining / (60*60*1000));
    return hrs + "h";
  }

  function enterShow(animal) {
    var level = getCattleShowLevel(animal, selectedClass);
    var fee = cls.entryFee[level] || 50;
    if (money < fee) { alert("Not enough money! Entry fee is $" + fee); return; }

    var result = runCattleShow(animal, selectedClass);
    if (!result) return;
    if (result.error) { alert(result.error); return; }

    setLastResult(result);
    onMoneyChange(money - fee + result.prize);

    // Record cooldown
    var dateKey = "cattle_" + animal.id + "_" + selectedClass;
    var newDates = Object.assign({}, lastShowDates, { [dateKey]: Date.now() });
    if (onShowDatesUpdate) onShowDatesUpdate(newDates);

    // Update animal with show points, level, titles
    var updates = {};
    updates.cattleShowPoints = (animal.cattleShowPoints||0) + (result.showPoints||0);
    if (!animal.cattleShowHistory) updates.cattleShowHistory = [];
    updates.cattleShowHistory = (animal.cattleShowHistory||[]).concat([{
      classKey:selectedClass, level:result.level, placement:result.placement,
      score:result.playerScore, date:new Date().toLocaleString()
    }]).slice(-20);

    if (result.promoted && result.nextLevel) {
      var lvls = Object.assign({}, animal.cattleShowLevels||{});
      lvls[selectedClass] = result.nextLevel;
      updates.cattleShowLevels = lvls;
    }
    if (result.titleEarned) {
      var titles = (animal.cattleEarnedTitles||[]).slice();
      if (titles.indexOf(result.titleEarned.key) === -1) titles.push(result.titleEarned.key);
      updates.cattleEarnedTitles = titles;
    }
    if (onCattleUpdate) onCattleUpdate(Object.assign({}, animal, updates));

    // Log
    var placeStr = result.placement===1?"1st \uD83C\uDFC6":result.placement===2?"2nd \uD83E\uDD48":result.placement===3?"3rd \uD83E\uDD49":result.placement+"th";
    var netStr = result.net >= 0 ? "+$"+result.net : "-$"+Math.abs(result.net);
    if (onLog) onLog({ id:Date.now()+Math.random(), type:"show",
      name:"\uD83D\uDC04 " + (animal.name||animal.breed) + " placed " + placeStr + " in " + cls.label + " (" + CATTLE_SHOW_LEVEL_LABELS[result.level] + ") \u2014 " + netStr,
      date:new Date().toLocaleString() });
  }

  return React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#141008", zIndex:80, display:"flex", flexDirection:"column", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"12px 18px", borderBottom:"2px solid #4a3a18", background:"#1a1408", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.4rem" } }, "\uD83C\uDFC6"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "County Fair \u2014 Cattle Shows"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
            cattle.length + " head \u00B7 " + eligible.length + " eligible for " + (cls?cls.label:""))
        )
      ),
      React.createElement("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715 Close")
    ),

    // Class tabs
    React.createElement("div", { style:{ display:"flex", gap:6, padding:"10px 18px", borderBottom:"1px solid #2a1e10",
      flexShrink:0, flexWrap:"wrap" } },
      CATTLE_SHOW_CLASSES.map(function(c) {
        var active = selectedClass === c.key;
        var borderCol = c.type==="dairy" ? (active?"#7dd3fc":"#1a4a6a") : (active?"#d4942a":"#4a3a28");
        var textCol = c.type==="dairy" ? (active?"#7dd3fc":"#4a6a8a") : (active?"#d4942a":"#8a7055");
        return React.createElement("button", { key:c.key, onClick:function(){ setSelectedClass(c.key); setSelectedCow(null); setLastResult(null); },
          style:{ background:active?"#2a1e08":"transparent", border:"1px solid "+borderCol,
            color:textCol, borderRadius:6, padding:"5px 14px", cursor:"pointer",
            fontSize:"0.78rem", fontWeight:active?"bold":"normal" }
        }, c.emoji + " " + c.label);
      })
    ),

    // Class description
    cls && React.createElement("div", { style:{ padding:"8px 18px", borderBottom:"1px solid #1a1610",
      fontSize:"0.72rem", color:"#6b5038", flexShrink:0 } },
      cls.desc + (cls.purebredOnly ? " Purebreds only." : " Crossbreds welcome.")),

    // Content area: two columns
    React.createElement("div", { style:{ flex:1, display:"flex", overflow:"hidden" } },
      // Left: eligible cattle list
      React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"12px 18px", borderRight:"1px solid #1a1610" } },
        eligible.length === 0
          ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 0" } },
              "No eligible cattle for this class.")
          : eligible.map(function(a) {
              var level = getCattleShowLevel(a, selectedClass);
              var fee = cls.entryFee[level] || 50;
              var cooldown = isOnCooldown(a.id);
              var cdRemain = getCooldownRemaining(a.id);
              var isSelected = selectedCow && selectedCow.id === a.id;
              var ageYrs = Math.round((a.ageMonths||0)/12*10)/10;
              var titles = (a.cattleEarnedTitles||[]).join(" ");
              return React.createElement("div", { key:a.id,
                style:{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px",
                  background:isSelected?"#2a1e08":"#1a1410", border:"1px solid "+(isSelected?"#d4942a":"#2a1e10"),
                  borderRadius:8, marginBottom:6, cursor:"pointer" },
                onClick:function(){ setSelectedCow(a); setLastResult(null); }
              },
                React.createElement("span", { style:{ fontSize:"1.2rem" } }, a.sex==="M"?"\uD83D\uDC02":"\uD83D\uDC04"),
                React.createElement("div", { style:{ flex:1, minWidth:0 } },
                  React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem" } },
                    (titles ? titles+" " : "") + (a.name||a.breed)),
                  React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.68rem" } },
                    a.breed + " \u00B7 " + (a.type||"") + " \u00B7 " + ageYrs + "y \u00B7 " +
                    (a.sex==="M"?"\u2642":"\u2640")),
                  React.createElement("div", { style:{ display:"flex", gap:8, marginTop:2 } },
                    React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.68rem" } }, "\u2764\uFE0F"+(a.healthScore||0)),
                    React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.68rem" } }, "\u26A1"+(a.perfScore||0)),
                    a.weightLbs && React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.68rem" } }, a.weightLbs+"lb")
                  )
                ),
                React.createElement("div", { style:{ textAlign:"right", flexShrink:0 } },
                  React.createElement("div", { style:{ fontSize:"0.62rem", color:"#6b5038", textTransform:"uppercase" } },
                    CATTLE_SHOW_LEVEL_LABELS[level]||level),
                  React.createElement("div", { style:{ fontSize:"0.65rem", color:"#8a7055" } }, "Fee: $"+fee),
                  cooldown && React.createElement("div", { style:{ fontSize:"0.6rem", color:"#ef4444" } }, "\u23F3 "+cdRemain)
                )
              );
            })
      ),

      // Right: selected animal + enter/results
      React.createElement("div", { style:{ width:320, overflowY:"auto", padding:"12px 16px", flexShrink:0 } },
        !selectedCow
          ? React.createElement("div", { style:{ textAlign:"center", color:"#4a3a28", padding:"60px 0" } },
              React.createElement("div", { style:{ fontSize:"1.6rem", marginBottom:8 } }, "\uD83D\uDC04"),
              React.createElement("div", { style:{ fontSize:"0.82rem" } }, "Select an animal to enter"))
          : React.createElement("div", null,
              // Animal card
              React.createElement("div", { style:{ background:"#1a1410", border:"1px solid #2a1e10", borderRadius:10, padding:14, marginBottom:12 } },
                React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"1rem", marginBottom:4 } },
                  selectedCow.name || selectedCow.breed),
                React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:8 } },
                  selectedCow.breed + " \u00B7 " + (selectedCow.type||"") + " \u00B7 " +
                  (selectedCow.sex==="M"?"\u2642 Bull":"\u2640 Cow") + " \u00B7 " +
                  Math.round((selectedCow.ageMonths||0)/12*10)/10 + "y"),
                // QTL bars
                selectedCow.genome && selectedCow.genome.perf && React.createElement("div", { style:{ marginBottom:8 } },
                  CATTLE_PERF_QTLS.map(function(q) {
                    var v = selectedCow.genome.perf[q] || [3,3];
                    var avg = (v[0]+v[1])/2;
                    var weight = cls.qtlWeights[q] || 0;
                    var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#4a5568";
                    var info = CATTLE_PERF_QTL_INFO[q] || {};
                    return React.createElement("div", { key:q, style:{ display:"flex", alignItems:"center", gap:5, marginBottom:3 } },
                      React.createElement("span", { style:{ fontSize:"0.6rem", width:55, color:col, flexShrink:0 } },
                        (info.icon||"") + " " + q),
                      React.createElement("div", { style:{ flex:1, background:"#2a1e10", borderRadius:2, height:5, overflow:"hidden" } },
                        React.createElement("div", { style:{ background:col, width:Math.round((avg/5)*100)+"%", height:"100%" } })
                      ),
                      React.createElement("span", { style:{ fontSize:"0.58rem", color:col, width:22, textAlign:"right" } }, avg.toFixed(1)),
                      React.createElement("span", { style:{ fontSize:"0.52rem", color: weight>0.2?"#d4942a":"#3a2e20", width:28, textAlign:"right" } },
                        weight>0 ? Math.round(weight*100)+"%" : "\u2014")
                    );
                  })
                ),
                React.createElement("div", { style:{ display:"flex", gap:8 } },
                  React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.75rem", fontWeight:"bold" } }, "\u2764\uFE0F "+(selectedCow.healthScore||0)),
                  React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.75rem", fontWeight:"bold" } }, "\u26A1 "+(selectedCow.perfScore||0)),
                  React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } },
                    (selectedCow.cattleShowPoints||0) + " show pts")
                )
              ),
              // Enter button
              (function() {
                var level = getCattleShowLevel(selectedCow, selectedClass);
                var fee = cls.entryFee[level] || 50;
                var cooldown = isOnCooldown(selectedCow.id);
                var canAfford = money >= fee;
                var disabled = cooldown || !canAfford;
                return React.createElement("button", {
                  onClick:function(){ if(!disabled) enterShow(selectedCow); },
                  disabled:disabled,
                  style:{ width:"100%", background:disabled?"#1a1410":"#2a1e08", border:"2px solid "+(disabled?"#3a2e20":"#d4942a"),
                    color:disabled?"#4a3a28":"#d4942a", borderRadius:8, padding:"10px 0",
                    cursor:disabled?"not-allowed":"pointer", fontSize:"0.9rem", fontWeight:"bold", marginBottom:12 }
                }, cooldown ? "\u23F3 Cooldown ("+getCooldownRemaining(selectedCow.id)+")" :
                   !canAfford ? "Can't Afford ($"+fee+")" :
                   "\uD83C\uDFC6 Enter " + CATTLE_SHOW_LEVEL_LABELS[level] + " \u2014 $"+fee);
              })(),
              // Results
              lastResult && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #2a1e10",
                borderRadius:10, padding:14 } },
                React.createElement("div", { style:{ textAlign:"center", marginBottom:10 } },
                  React.createElement("div", { style:{ fontSize:"1.4rem", marginBottom:4 } },
                    lastResult.placement===1?"\uD83C\uDFC6":lastResult.placement===2?"\uD83E\uDD48":lastResult.placement===3?"\uD83E\uDD49":"\uD83D\uDC04"),
                  React.createElement("div", { style:{ color: lastResult.placement<=3?"#d4942a":"#8a7055", fontWeight:"bold", fontSize:"1rem" } },
                    lastResult.placement===1?"1st Place!":lastResult.placement===2?"2nd Place!":lastResult.placement===3?"3rd Place!":
                    lastResult.placement+"th of "+lastResult.totalEntries),
                  lastResult.titleEarned && React.createElement("div", { style:{ color:"#22c55e", fontSize:"0.8rem", fontWeight:"bold", marginTop:4 } },
                    "\uD83C\uDF1F Title Earned: "+lastResult.titleEarned.label),
                  lastResult.promoted && React.createElement("div", { style:{ color:"#7dd3fc", fontSize:"0.72rem", marginTop:2 } },
                    "\u2B06\uFE0F Promoted to "+CATTLE_SHOW_LEVEL_LABELS[lastResult.nextLevel]+"!")
                ),
                React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", fontSize:"0.75rem",
                  padding:"6px 0", borderTop:"1px solid #1a1610" } },
                  React.createElement("span", { style:{ color:"#8a7055" } }, "Entry Fee: -$"+lastResult.entryFee),
                  React.createElement("span", { style:{ color:lastResult.prize>0?"#22c55e":"#8a7055" } },
                    "Prize: " + (lastResult.prize>0?"+$"+lastResult.prize:"$0")),
                  React.createElement("span", { style:{ color:lastResult.net>=0?"#22c55e":"#ef4444", fontWeight:"bold" } },
                    "Net: " + (lastResult.net>=0?"+$"+lastResult.net:"-$"+Math.abs(lastResult.net)))
                ),
                // Leaderboard
                React.createElement("div", { style:{ marginTop:8 } },
                  React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.62rem", textTransform:"uppercase", marginBottom:4 } }, "Standings"),
                  lastResult.competitors.slice(0, 8).map(function(c, idx) {
                    var isPlayer = !c.isAI;
                    return React.createElement("div", { key:idx,
                      style:{ display:"flex", justifyContent:"space-between", padding:"2px 0",
                        fontSize:"0.7rem", color:isPlayer?"#d4942a":"#6b5038",
                        fontWeight:isPlayer?"bold":"normal" }
                    },
                      React.createElement("span", null, (idx+1)+". "+c.name),
                      React.createElement("span", null, Math.round(c.score*10)/10)
                    );
                  })
                )
              )
            )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════

// CATTLE UI COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════════
// GOAT COUNTY FAIR SHOWS
// ══════════════════════════════════════════════════════════════════════════════

var GOAT_SHOW_CLASSES = [
  { key:"dairy_breed", label:"Best of Breed (Dairy)", emoji:"\uD83E\uDD5B", type:"dairy", purebredOnly:true,
    desc:"Purebred dairy goats judged on udder quality, milk genetics, and breed standard.",
    qtlWeights:{ MILK:0.40, GROWTH:0.05, MUSCLE:0.05, TEMP:0.25, HARDY:0.15, FIBER:0.0 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"meat_breed", label:"Best of Breed (Meat)", emoji:"\uD83E\uDD69", type:"meat", purebredOnly:true,
    desc:"Purebred meat goats judged on muscling, growth rate, and carcass quality.",
    qtlWeights:{ MILK:0.0, GROWTH:0.30, MUSCLE:0.35, TEMP:0.20, HARDY:0.15, FIBER:0.0 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"fiber_breed", label:"Best of Breed (Fiber)", emoji:"\uD83E\uDDF6", type:"fiber", purebredOnly:true,
    desc:"Purebred fiber goats judged on fleece quality, yield, and breed standard.",
    qtlWeights:{ MILK:0.0, GROWTH:0.05, MUSCLE:0.05, TEMP:0.20, HARDY:0.20, FIBER:0.50 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  }
];

var GOAT_SHOW_LEVELS = ["county","state","national"];
var GOAT_SHOW_LEVEL_LABELS = { county:"County Fair", state:"State Fair", national:"National" };

var GOAT_SHOW_TITLES = {
  dairy_breed: {
    county:  { key:"GDB", label:"County Best Dairy Goat",    prefix:"GDB " },
    state:   { key:"SDB", label:"State Best Dairy Goat",     prefix:"SGDB " },
    national:{ key:"NDB", label:"National Best Dairy Goat",  prefix:"GDCh. " }
  },
  meat_breed: {
    county:  { key:"GMB", label:"County Best Meat Goat",     prefix:"GMB " },
    state:   { key:"SMB", label:"State Best Meat Goat",      prefix:"SGMB " },
    national:{ key:"NMB", label:"National Best Meat Goat",   prefix:"GMCh. " }
  },
  fiber_breed: {
    county:  { key:"GFB", label:"County Best Fiber Goat",    prefix:"GFB " },
    state:   { key:"SFB", label:"State Best Fiber Goat",     prefix:"SGFB " },
    national:{ key:"NFB", label:"National Best Fiber Goat",  prefix:"GFCh. " }
  }
};

function getGoatShowLevel(animal, classKey) {
  return (animal.goatShowLevels && animal.goatShowLevels[classKey]) || "county";
}

function calcGoatShowScore(animal, classKey) {
  if (!animal || !animal.genome) return 0;
  // Age/longevity checks
  if (typeof canShowByAge === "function" && !canShowByAge(animal.ageMonths || 0, "goat")) return 0;
  if (typeof isAnimalLocked === "function" && isAnimalLocked(animal)) return 0;

  var cls = GOAT_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return 0;
  var hs = animal.healthScore || 50;
  var perf = animal.genome.perf || {};
  var weights = cls.qtlWeights;
  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];

  var qtlScore = 0;
  perfQtls.forEach(function(q) {
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg/5)*100*(weights[q]||0);
  });

  // Weight bonus for meat class
  var weightBonus = 0;
  if (classKey === "meat_breed" && animal.weightLbs) {
    weightBonus = Math.min(8, (animal.weightLbs - 80) / 30);
  }

  // Milk yield bonus for dairy class
  var milkBonus = 0;
  if (classKey === "dairy_breed" && animal.milkYield) {
    milkBonus = Math.min(8, animal.milkYield / 2);
  }

  // Fiber yield bonus for fiber class
  var fiberBonus = 0;
  if (classKey === "fiber_breed" && animal.fiberYield) {
    fiberBonus = Math.min(8, animal.fiberYield * 2);
  }

  // Age modifier \u2014 goats peak at 1.5-7 years (18-84 months)
  var age = animal.ageMonths || 0;
  var ageMod = 1.0;
  if (age < 8) ageMod = 0.4;
  else if (age < 12) ageMod = 0.65;
  else if (age < 18) ageMod = 0.85;
  else if (age <= 84) ageMod = 1.0;
  else if (age <= 120) ageMod = 0.85;
  else ageMod = 0.65;

  var healthWeight = 0.4;
  var perfWeight = 0.6;
  var coi = animal.coi || 0;
  var coiPenalty = coi > 10 ? Math.min(12, (coi-10)*0.5) : 0;

  var raw = (hs*healthWeight + qtlScore*perfWeight)*ageMod - coiPenalty + weightBonus + milkBonus + fiberBonus;
  var variance = (Math.random()-0.5)*0.14;
  return Math.max(0, Math.min(100, raw*(1+variance)));
}

function runGoatShow(animal, classKey) {
  var cls = GOAT_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return null;
  var level = getGoatShowLevel(animal, classKey);

  if (cls.purebredOnly && animal.breed === "Crossbred") return { error:"Best of Breed is purebreds only." };
  if (animal.retiredLivestock) return { error:"Retired goats cannot compete." };
  if ((animal.ageMonths||0) < 8) return { error:"Must be at least 8 months old to show." };
  // Determine eligibility: dual-purpose can show in the class matching their stronger type
  var eligibleType = animal.type;
  if (animal.type === "dual") {
    // Dual goats can enter dairy OR meat \u2014 pick based on class
    if (cls.type === "dairy" || cls.type === "meat") eligibleType = cls.type;
  }
  if (cls.type && eligibleType !== cls.type) return { error:"This class is for " + cls.type + " goats only." };

  var playerScore = calcGoatShowScore(animal, classKey);
  var fieldSize = (cls.fieldSize[level]||8) - 1;
  var aiNames = ["Willow Creek","Sunny Meadow","Iron Hill","Golden Valley","Oak Ridge",
    "Crystal Spring","Rocky Top","Cedar Grove","Silver Brook","Pine Haven","Maple Leaf",
    "Riverside","Sunset Ridge","Hidden Hollow","Mountain View","Blue Sky","Stonewall","Clover Field"];
  var aiSuffixes = ["Farm","Dairy","Ranch","Acres","Homestead","Creamery"];
  var competitors = [];
  var baseMean = { county:46, state:60, national:72 }[level] || 50;
  var spread = { county:20, state:14, national:10 }[level] || 18;
  for (var i = 0; i < fieldSize; i++) {
    var score = baseMean + (Math.random()-0.5)*spread*2;
    var aiName = aiNames[i % aiNames.length] + " " + aiSuffixes[Math.floor(Math.random()*aiSuffixes.length)];
    competitors.push({ name:aiName, isAI:true, score:Math.max(20, Math.min(98, score)) });
  }
  competitors.push({ name:animal.name||animal.breed, isAI:false, score:playerScore });
  competitors.sort(function(a,b){ return b.score - a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; }) + 1;
  var entryFee = cls.entryFee[level] || 30;
  var purse = cls.purse[level] || [0,0,0];
  var prize = placement===1?purse[0] : placement===2?purse[1] : placement===3?purse[2] : 0;
  var pts = placement===1?{county:3,state:6,national:12}[level] :
            placement===2?{county:2,state:4,national:8}[level] :
            placement===3?{county:1,state:2,national:4}[level] : 0;

  var promoted = false;
  var nextLevel = null;
  if (placement <= 3) {
    var levelIdx = GOAT_SHOW_LEVELS.indexOf(level);
    if (levelIdx < GOAT_SHOW_LEVELS.length - 1) {
      nextLevel = GOAT_SHOW_LEVELS[levelIdx + 1];
      promoted = true;
    }
  }

  var titleEarned = null;
  if (placement === 1) {
    var typeTitles = GOAT_SHOW_TITLES[classKey];
    if (typeTitles && typeTitles[level]) titleEarned = typeTitles[level];
  }

  return {
    placement:placement, totalEntries:cls.fieldSize[level]||8,
    prize:prize, entryFee:entryFee, net:prize-entryFee,
    playerScore:Math.round(playerScore*10)/10, competitors:competitors,
    classKey:classKey, level:level, promoted:promoted, nextLevel:nextLevel,
    titleEarned:titleEarned, showPoints:pts
  };
}

// \u2500\u2500 Goat Shows View \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function GoatShowsView(props) {
  var goats = props.goats || [];
  var money = props.money || 0;
  var onMoneyChange = props.onMoneyChange;
  var onGoatUpdate = props.onGoatUpdate;
  var onLog = props.onLog;
  var onClose = props.onClose;
  var lastShowDates = props.lastShowDates || {};
  var onShowDatesUpdate = props.onShowDatesUpdate;

  var _sc = React.useState(null), selectedGoat = _sc[0], setSelectedGoat = _sc[1];
  var _cl = React.useState("dairy_breed"), selectedClass = _cl[0], setSelectedClass = _cl[1];
  var _rs = React.useState(null), lastResult = _rs[0], setLastResult = _rs[1];

  var cls = GOAT_SHOW_CLASSES.find(function(c){ return c.key===selectedClass; });
  var showCooldownMs = 12 * 60 * 60 * 1000;

  var eligible = goats.filter(function(a) {
    if (a.retiredLivestock) return false;
    if ((a.ageMonths||0) < 8) return false;
    if (cls && cls.type) {
      if (a.type === "dual" && (cls.type === "dairy" || cls.type === "meat")) return true;
      if (a.type !== cls.type) return false;
    }
    if (cls && cls.purebredOnly && a.breed === "Crossbred") return false;
    return true;
  });

  function isOnCooldown(animalId) {
    var key = "goat_" + animalId + "_" + selectedClass;
    var last = lastShowDates[key];
    if (!last) return false;
    return (Date.now() - last) < showCooldownMs;
  }

  function getCooldownRemaining(animalId) {
    var key = "goat_" + animalId + "_" + selectedClass;
    var last = lastShowDates[key];
    if (!last) return "";
    var remaining = showCooldownMs - (Date.now() - last);
    if (remaining <= 0) return "";
    var hrs = Math.ceil(remaining / (60*60*1000));
    return hrs + "h";
  }

  function enterShow(animal) {
    var level = getGoatShowLevel(animal, selectedClass);
    var fee = cls.entryFee[level] || 30;
    if (money < fee) { alert("Not enough money! Entry fee is $" + fee); return; }

    var result = runGoatShow(animal, selectedClass);
    if (!result) return;
    if (result.error) { alert(result.error); return; }

    setLastResult(result);
    onMoneyChange(money - fee + result.prize);

    var dateKey = "goat_" + animal.id + "_" + selectedClass;
    var newDates = Object.assign({}, lastShowDates);
    newDates[dateKey] = Date.now();
    if (onShowDatesUpdate) onShowDatesUpdate(newDates);

    var updates = {};
    updates.goatShowPoints = (animal.goatShowPoints || 0) + result.showPoints;
    if (result.promoted && result.nextLevel) {
      var levels = Object.assign({}, animal.goatShowLevels || {});
      levels[selectedClass] = result.nextLevel;
      updates.goatShowLevels = levels;
    }
    if (result.titleEarned) {
      var titles = (animal.goatEarnedTitles || []).slice();
      if (titles.indexOf(result.titleEarned.key) === -1) titles.push(result.titleEarned.key);
      updates.goatEarnedTitles = titles;
    }
    if (onGoatUpdate) onGoatUpdate(Object.assign({}, animal, updates));

    if (onLog) {
      var placeStr = result.placement === 1 ? "1st" : result.placement === 2 ? "2nd" : result.placement === 3 ? "3rd" : result.placement + "th";
      onLog({ id: Date.now() + Math.random(), type: "show",
        name: "\uD83D\uDC10 " + (animal.name||animal.breed) + " placed " + placeStr + " at " +
          GOAT_SHOW_LEVEL_LABELS[result.level] + " " + cls.label +
          (result.net >= 0 ? " \u2014 +$" + result.prize : " \u2014 -$" + Math.abs(result.net)),
        date: new Date().toLocaleString() });
    }
  }

  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
  var perfInfo = typeof GOAT_PERF_QTL_INFO !== "undefined" ? GOAT_PERF_QTL_INFO : {};

  return React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#141008", zIndex:55, display:"flex", flexDirection:"column", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center",
      padding:"12px 16px", borderBottom:"1px solid #2a1e10" } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.3rem" } }, "\uD83C\uDFC6"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "Goat County Fair"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.68rem" } }, "Show your goats for prizes and titles")
        )
      ),
      React.createElement("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem" }
      }, "\u2190 Back")
    ),
    // Body
    React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },
      // Left: class tabs + eligible list
      React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #2a1e10", overflow:"hidden" } },
        // Class tabs
        React.createElement("div", { style:{ display:"flex", gap:4, padding:"8px 12px", borderBottom:"1px solid #2a1e10", flexWrap:"wrap" } },
          GOAT_SHOW_CLASSES.map(function(c) {
            var active = selectedClass === c.key;
            return React.createElement("button", { key:c.key, onClick:function(){ setSelectedClass(c.key); setLastResult(null); },
              style:{ background:active?"#2a1e08":"transparent", border:"1px solid "+(active?"#d4942a":"#4a3a28"),
                color:active?"#d4942a":"#8a7055", borderRadius:6, padding:"5px 10px",
                cursor:"pointer", fontSize:"0.72rem", fontWeight:active?"bold":"normal" }
            }, c.emoji + " " + c.label);
          })
        ),
        // Class desc
        cls && React.createElement("div", { style:{ padding:"6px 12px", color:"#6b5038", fontSize:"0.68rem",
          borderBottom:"1px solid #1a1610", background:"#0e0c08" } }, cls.desc),
        // Eligible animals
        React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:8 } },
          eligible.length === 0
            ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 0", fontSize:"0.82rem" } },
                "No eligible goats for this class")
            : eligible.map(function(a) {
                var selected = selectedGoat && selectedGoat.id === a.id;
                var cooldown = isOnCooldown(a.id);
                var ageYrs = Math.round((a.ageMonths||0)/12*10)/10;
                return React.createElement("div", { key:a.id,
                  onClick:function(){ setSelectedGoat(a); setLastResult(null); },
                  style:{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px",
                    background:selected?"#2a1e10":"transparent", border:"1px solid "+(selected?"#d4942a":"transparent"),
                    borderRadius:8, cursor:"pointer", marginBottom:4 }
                },
                  React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83D\uDC10"),
                  React.createElement("div", { style:{ flex:1 } },
                    React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, a.name||a.breed),
                    React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
                      a.breed + " \u00B7 " + (a.type||"") + " \u00B7 " + ageYrs + "y \u00B7 \u2764\uFE0F" + (a.healthScore||0) + " \u26A1" + (a.perfScore||0))
                  ),
                  cooldown && React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.62rem" } }, "\u23F3"),
                  React.createElement("span", { style:{ color:"#4a3a28", fontSize:"0.68rem" } },
                    (a.goatShowPoints||0) + " pts")
                );
              })
        )
      ),
      // Right: selected + enter/results
      React.createElement("div", { style:{ width:320, overflowY:"auto", padding:"12px 16px", flexShrink:0 } },
        !selectedGoat
          ? React.createElement("div", { style:{ textAlign:"center", color:"#4a3a28", padding:"60px 0" } },
              React.createElement("div", { style:{ fontSize:"1.6rem", marginBottom:8 } }, "\uD83D\uDC10"),
              React.createElement("div", { style:{ fontSize:"0.82rem" } }, "Select a goat to enter"))
          : React.createElement("div", null,
              React.createElement("div", { style:{ background:"#1a1410", border:"1px solid #2a1e10", borderRadius:10, padding:14, marginBottom:12 } },
                React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"1rem", marginBottom:4 } },
                  selectedGoat.name || selectedGoat.breed),
                React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:8 } },
                  selectedGoat.breed + " \u00B7 " + (selectedGoat.type||"") + " \u00B7 " +
                  (selectedGoat.sex==="M"?"\u2642 Buck":"\u2640 Doe") + " \u00B7 " +
                  Math.round((selectedGoat.ageMonths||0)/12*10)/10 + "y"),
                selectedGoat.genome && selectedGoat.genome.perf && React.createElement("div", { style:{ marginBottom:8 } },
                  perfQtls.map(function(q) {
                    var v = selectedGoat.genome.perf[q] || [3,3];
                    var avg = (v[0]+v[1])/2;
                    var weight = cls.qtlWeights[q] || 0;
                    var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#4a5568";
                    var info = perfInfo[q] || {};
                    return React.createElement("div", { key:q, style:{ display:"flex", alignItems:"center", gap:5, marginBottom:3 } },
                      React.createElement("span", { style:{ fontSize:"0.6rem", width:55, color:col, flexShrink:0 } },
                        (info.icon||"") + " " + q),
                      React.createElement("div", { style:{ flex:1, background:"#2a1e10", borderRadius:2, height:5, overflow:"hidden" } },
                        React.createElement("div", { style:{ background:col, width:Math.round((avg/5)*100)+"%", height:"100%" } })
                      ),
                      React.createElement("span", { style:{ fontSize:"0.58rem", color:col, width:22, textAlign:"right" } }, avg.toFixed(1)),
                      React.createElement("span", { style:{ fontSize:"0.52rem", color: weight>0.2?"#d4942a":"#3a2e20", width:28, textAlign:"right" } },
                        weight>0 ? Math.round(weight*100)+"%" : "\u2014")
                    );
                  })
                ),
                React.createElement("div", { style:{ display:"flex", gap:8 } },
                  React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.75rem", fontWeight:"bold" } }, "\u2764\uFE0F "+(selectedGoat.healthScore||0)),
                  React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.75rem", fontWeight:"bold" } }, "\u26A1 "+(selectedGoat.perfScore||0)),
                  React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } },
                    (selectedGoat.goatShowPoints||0) + " show pts")
                )
              ),
              (function() {
                var level = getGoatShowLevel(selectedGoat, selectedClass);
                var fee = cls.entryFee[level] || 30;
                var cooldown = isOnCooldown(selectedGoat.id);
                var canAfford = money >= fee;
                var disabled = cooldown || !canAfford;
                return React.createElement("button", {
                  onClick:function(){ if(!disabled) enterShow(selectedGoat); },
                  disabled:disabled,
                  style:{ width:"100%", background:disabled?"#1a1410":"#2a1e08", border:"2px solid "+(disabled?"#3a2e20":"#d4942a"),
                    color:disabled?"#4a3a28":"#d4942a", borderRadius:8, padding:"10px 0",
                    cursor:disabled?"not-allowed":"pointer", fontSize:"0.9rem", fontWeight:"bold", marginBottom:12 }
                }, cooldown ? "\u23F3 Cooldown ("+getCooldownRemaining(selectedGoat.id)+")" :
                   !canAfford ? "Can't Afford ($"+fee+")" :
                   "\uD83C\uDFC6 Enter " + GOAT_SHOW_LEVEL_LABELS[level] + " \u2014 $"+fee);
              })(),
              lastResult && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #2a1e10",
                borderRadius:10, padding:14 } },
                React.createElement("div", { style:{ textAlign:"center", marginBottom:10 } },
                  React.createElement("div", { style:{ fontSize:"1.4rem", marginBottom:4 } },
                    lastResult.placement===1?"\uD83C\uDFC6":lastResult.placement===2?"\uD83E\uDD48":lastResult.placement===3?"\uD83E\uDD49":"\uD83D\uDC10"),
                  React.createElement("div", { style:{ color: lastResult.placement<=3?"#d4942a":"#8a7055", fontWeight:"bold", fontSize:"1rem" } },
                    lastResult.placement===1?"1st Place!":lastResult.placement===2?"2nd Place!":lastResult.placement===3?"3rd Place!":
                    lastResult.placement+"th of "+lastResult.totalEntries),
                  lastResult.titleEarned && React.createElement("div", { style:{ color:"#22c55e", fontSize:"0.8rem", fontWeight:"bold", marginTop:4 } },
                    "\uD83C\uDF1F Title Earned: "+lastResult.titleEarned.label),
                  lastResult.promoted && React.createElement("div", { style:{ color:"#7dd3fc", fontSize:"0.72rem", marginTop:2 } },
                    "\u2B06\uFE0F Promoted to "+GOAT_SHOW_LEVEL_LABELS[lastResult.nextLevel]+"!")
                ),
                React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", fontSize:"0.75rem",
                  padding:"6px 0", borderTop:"1px solid #1a1610" } },
                  React.createElement("span", { style:{ color:"#8a7055" } }, "Entry Fee: -$"+lastResult.entryFee),
                  React.createElement("span", { style:{ color:lastResult.prize>0?"#22c55e":"#8a7055" } },
                    "Prize: " + (lastResult.prize>0?"+$"+lastResult.prize:"$0")),
                  React.createElement("span", { style:{ color:lastResult.net>=0?"#22c55e":"#ef4444", fontWeight:"bold" } },
                    "Net: " + (lastResult.net>=0?"+$"+lastResult.net:"-$"+Math.abs(lastResult.net)))
                ),
                React.createElement("div", { style:{ marginTop:8 } },
                  React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.62rem", textTransform:"uppercase", marginBottom:4 } }, "Standings"),
                  lastResult.competitors.slice(0, 8).map(function(c, idx) {
                    var isPlayer = !c.isAI;
                    return React.createElement("div", { key:idx,
                      style:{ display:"flex", justifyContent:"space-between", padding:"2px 0",
                        fontSize:"0.7rem", color:isPlayer?"#d4942a":"#6b5038",
                        fontWeight:isPlayer?"bold":"normal" }
                    },
                      React.createElement("span", null, (idx+1)+". "+c.name),
                      React.createElement("span", null, Math.round(c.score*10)/10)
                    );
                  })
                )
              )
            )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// GOAT STUD FEE CALCULATOR
// ══════════════════════════════════════════════════════════════════════════════

function calcSuggestedBuckFee(buck) {
  if (!buck || buck.sex !== "M") return { fee: 100, reasons: [] };
  var breedDef = (typeof GOAT_BREED_DEFS !== "undefined") ? GOAT_BREED_DEFS.find(function(b){ return b.name === buck.breed; }) : null;
  var goatType = buck.type || (breedDef ? breedDef.type : "meat");

  var baseFees = { dairy: 200, meat: 150, fiber: 180, dual: 160 };
  var fee = baseFees[goatType] || 150;
  var reasons = [];

  // Show titles
  var titles = buck.goatEarnedTitles || [];
  var nationalTitles = titles.filter(function(t){ return ["NDB","NMB","NFB"].indexOf(t) !== -1; });
  var stateTitles    = titles.filter(function(t){ return ["SDB","SMB","SFB"].indexOf(t) !== -1; });
  var countyTitles   = titles.filter(function(t){ return ["GDB","GMB","GFB"].indexOf(t) !== -1; });
  if (nationalTitles.length > 0) { fee += nationalTitles.length * 400; reasons.push("\uD83C\uDFC6 National title" + (nationalTitles.length > 1 ? "s" : "")); }
  if (stateTitles.length > 0)    { fee += stateTitles.length * 200;    reasons.push("\uD83E\uDD48 State title" + (stateTitles.length > 1 ? "s" : "")); }
  if (countyTitles.length > 0)   { fee += countyTitles.length * 100;   reasons.push("\uD83C\uDFAA County title" + (countyTitles.length > 1 ? "s" : "")); }

  // Performance score
  var perf = buck.perfScore || 0;
  if (perf >= 95)      { fee += 200; reasons.push("\u26A1 Exceptional genetics (" + perf + " perf)"); }
  else if (perf >= 85) { fee += 100; reasons.push("\u26A1 High-performance genetics (" + perf + " perf)"); }

  // Size vs breed average
  var breedWeightAvg = breedDef ? breedDef.weightBuck : 150;
  var buckWeight = buck.weightLbs || breedWeightAvg;
  var weightPct = (buckWeight - breedWeightAvg) / breedWeightAvg;
  if (weightPct >= 0.15)      { fee += 150; reasons.push("\uD83D\uDCCF Exceptional frame (+" + Math.round(weightPct*100) + "%)"); }
  else if (weightPct >= 0.10) { fee += 75;  reasons.push("\uD83D\uDCCF Large frame (+" + Math.round(weightPct*100) + "%)"); }

  // Rare coat (Roan only for goats)
  var coat = (buck.coatColor || "").toLowerCase();
  if (coat.indexOf("roan") !== -1) { fee += 150; reasons.push("\uD83C\uDFA8 Roan coat \u2014 rare color"); }

  // COI modifier
  var coi = buck.coi || 0;
  if (coi < 5)       { fee += 50;  reasons.push("\uD83E\uDDEC Outbred (low COI)"); }
  else if (coi >= 20) { fee -= 100; reasons.push("\u26A0\uFE0F High inbreeding penalty"); }

  // Fiber bonus for fiber bucks
  if (goatType === "fiber" && buck.fiberYield && buck.fiberYield >= 3) {
    fee += 100; reasons.push("\uD83E\uDDF6 High fiber yield (" + buck.fiberYield + " lb)");
  }

  fee = Math.max(50, Math.round(fee / 25) * 25);
  return { fee: fee, reasons: reasons };
}

// ══════════════════════════════════════════════════════════════════════════════
// COMMUNITY BUCKS PANEL
// ══════════════════════════════════════════════════════════════════════════════

function CommunityBucksPanel(props) {
  var user = props.user;
  var money = props.money || 0;
  var onHireBuck = props.onHireBuck;

  var _cb1 = React.useState([]), bucks = _cb1[0], setBucks = _cb1[1];
  var _cb2 = React.useState(false), loading = _cb2[0], setLoading = _cb2[1];
  var _cb3 = React.useState("all"), filter = _cb3[0], setFilter = _cb3[1];
  var _cb4 = React.useState(null), peekBuck = _cb4[0], setPeekBuck = _cb4[1];
  var _cb5 = React.useState(null), confirmHire = _cb5[0], setConfirmHire = _cb5[1];

  function loadBucks() {
    if (!window.baSupabaseSync || !window.baSupabaseSync.fetchGoatStudDirectory) return;
    setLoading(true);
    var excludeId = user ? user.id : null;
    window.baSupabaseSync.fetchGoatStudDirectory(excludeId).then(function(rows) {
      setBucks(rows || []);
      setLoading(false);
    }).catch(function(e) {
      console.warn("[BA] fetchGoatStudDirectory failed", e);
      setLoading(false);
    });
  }

  React.useEffect(function() { loadBucks(); }, []);

  var typeMap = { dairy:["alpine","nubian","saanen","sable","lamancha","oberhasli","toggenburg","nigerian dwarf","guernsey"],
    meat:["boer","kiko","spanish","myotonic","savanna","rangeland","arapawa","texmaster"],
    fiber:["angora","cashmere","pygora","nigora"] };
  var filtered = bucks.filter(function(b) {
    if (filter === "all") return true;
    var breed = (b.breed || "").toLowerCase();
    var list = typeMap[filter] || [];
    return list.some(function(bb){ return breed.indexOf(bb) !== -1; });
  });

  var filterBtn = function(key, label) {
    var active = filter === key;
    return React.createElement("button", {
      key: key, onClick: function(){ setFilter(key); },
      style: { background: active ? "#3a2810" : "transparent", border: "1px solid " + (active ? "#d4942a" : "#4a3a28"),
        color: active ? "#d4942a" : "#8a7055", borderRadius: 6, padding: "3px 10px", cursor: "pointer",
        fontSize: "0.7rem", fontWeight: active ? "bold" : "normal" }
    }, label);
  };

  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
  var perfInfo = typeof GOAT_PERF_QTL_INFO !== "undefined" ? GOAT_PERF_QTL_INFO : {};

  return React.createElement("div", { style: { marginTop: 8 } },
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" } },
      React.createElement("div", { style: { color: "#38bdf8", fontWeight: "bold", fontSize: "0.8rem" } },
        "\uD83C\uDF10 Community Bucks (" + bucks.length + ")"),
      filterBtn("all", "All"),
      filterBtn("dairy", "\uD83E\uDD5B Dairy"),
      filterBtn("meat", "\uD83E\uDD69 Meat"),
      filterBtn("fiber", "\uD83E\uDDF6 Fiber"),
      React.createElement("div", { style: { flex: 1 } }),
      React.createElement("button", {
        onClick: loadBucks,
        style: { background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
          borderRadius: 6, padding: "3px 8px", cursor: "pointer", fontSize: "0.68rem" }
      }, "\u21BB Refresh")
    ),
    loading && React.createElement("div", { style: { textAlign: "center", color: "#6b5038", padding: 20, fontSize: "0.8rem" } },
      "Loading community bucks..."),
    !loading && filtered.length === 0 && React.createElement("div", {
      style: { textAlign: "center", color: "#6b5038", padding: 20, fontSize: "0.8rem" }
    }, bucks.length === 0 ? "No community bucks listed yet. List your bucks to be the first!"
      : "No " + filter + " bucks available."),
    !loading && filtered.length > 0 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
      filtered.map(function(b) {
        var isPeek = peekBuck && peekBuck.animal_id === b.animal_id;
        var ageYrs = b.age_months ? Math.round(b.age_months / 12 * 10) / 10 : 0;

        return React.createElement("div", { key: b.animal_id,
          style: { background: "#0e0c08", border: "1px solid #2a3a18", borderRadius: 8, padding: "10px 12px" }
        },
          React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 } },
            React.createElement("span", { style: { fontSize: "1.4rem", flexShrink: 0 } }, "\uD83D\uDC10"),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { color: "#f0e6d3", fontWeight: "bold", fontSize: "0.88rem" } },
                b.dog_name || b.breed || "Unknown Buck"),
              React.createElement("div", { style: { color: "#8a7055", fontSize: "0.7rem", marginTop: 2 } },
                (b.breed || "?") + " \u00B7 " + (b.coat_color || "?") + " \u00B7 " + ageYrs + " yrs" +
                (b.size ? " \u00B7 " + b.size + " lb" : "")),
              React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" } },
                React.createElement("span", { style: { color: "#22c55e", fontSize: "0.68rem" } },
                  "\u2764\uFE0F " + (b.health_score || 0)),
                React.createElement("span", { style: { color: "#d4942a", fontSize: "0.68rem" } },
                  "\u26A1 " + (b.perf_score || 0)),
                b.coi != null && React.createElement("span", {
                  style: { color: (b.coi||0) < 5 ? "#22c55e" : (b.coi||0) < 20 ? "#d4942a" : "#ef4444", fontSize: "0.68rem" }
                }, "COI: " + (b.coi||0) + "%"),
                b.titles && React.createElement("span", { style: { color: "#c4956a", fontSize: "0.68rem" } }, b.titles)
              ),
              b.owner_name && React.createElement("div", { style: { color: "#4a3a28", fontSize: "0.62rem", marginTop: 2 } },
                "Owner: " + b.owner_name)
            ),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", flexShrink: 0 } },
              React.createElement("div", { style: { color: "#22c55e", fontWeight: "bold", fontSize: "0.82rem" } },
                "$" + (b.fee || 0).toLocaleString()),
              React.createElement("button", {
                onClick: function() { setPeekBuck(isPeek ? null : b); },
                style: { background: isPeek ? "#1a0a2e" : "#141008", border: "1px solid " + (isPeek ? "#7c3aed" : "#4a3a28"),
                  color: isPeek ? "#a78bfa" : "#8a7055", borderRadius: 6, padding: "3px 8px", cursor: "pointer", fontSize: "0.65rem" }
              }, "\uD83E\uDDEC DNA Peek"),
              React.createElement("button", {
                onClick: function() { setConfirmHire(b); },
                style: { background: "#0a2a10", border: "1px solid #22c55e", color: "#22c55e",
                  borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: "0.7rem", fontWeight: "bold" }
              }, "\uD83E\uDD1D Hire")
            )
          ),
          isPeek && React.createElement("div", {
            style: { marginTop: 8, background: "#1a0a1e", border: "1px solid #3a2a5a", borderRadius: 8, padding: "10px 12px" }
          },
            React.createElement("div", { style: { color: "#a78bfa", fontWeight: "bold", fontSize: "0.75rem", marginBottom: 6 } },
              "\uD83E\uDDEC DNA Peek \u2014 " + (b.dog_name || b.breed || "Buck")),
            (function() {
              var genome = b.genome;
              if (genome && typeof genome === "string") { try { genome = JSON.parse(genome); } catch(e) { genome = null; } }
              if (!genome) return React.createElement("div", { style: { color: "#6b5038", fontSize: "0.72rem" } }, "No genome data available");
              return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } },
                React.createElement("div", { style: { display: "flex", gap: 10, fontSize: "0.7rem", marginBottom: 4 } },
                  React.createElement("span", { style: { color: "#22c55e" } }, "\u2764\uFE0F Health: " + (b.health_score||0)),
                  React.createElement("span", { style: { color: "#d4942a" } }, "\u26A1 Perf: " + (b.perf_score||0)),
                  React.createElement("span", { style: { color: (b.coi||0)<5?"#22c55e":(b.coi||0)<20?"#d4942a":"#ef4444" } },
                    "COI: " + (b.coi||0) + "%")
                ),
                genome.perf && perfQtls.map(function(q) {
                  var info = perfInfo[q] || {};
                  var v = genome.perf[q] || [3,3];
                  var avg = (v[0]+v[1])/2;
                  var pct = Math.round((avg/5)*100);
                  var col = avg >= 4 ? "#d4942a" : avg >= 3 ? "#22c55e" : "#4a5568";
                  return React.createElement("div", { key: q, style: { display: "flex", alignItems: "center", gap: 5 } },
                    React.createElement("span", { style: { fontSize: "0.6rem", width: 60, color: col, flexShrink: 0 } },
                      (info.icon || "") + " " + q),
                    React.createElement("div", { style: { flex: 1, background: "#2e2218", borderRadius: 2, height: 4, overflow: "hidden" } },
                      React.createElement("div", { style: { background: col, width: pct + "%", height: "100%" } })
                    ),
                    React.createElement("span", { style: { fontSize: "0.6rem", color: col, width: 20, textAlign: "right", flexShrink: 0 } },
                      avg.toFixed(1))
                  );
                })
              );
            })()
          )
        );
      })
    ),
    confirmHire && React.createElement("div", {
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "center" },
      onClick: function(e) { if (e.target === e.currentTarget) setConfirmHire(null); }
    },
      React.createElement("div", {
        style: { background: "#1a1410", border: "1px solid #3a2810", borderRadius: 12,
          padding: "20px 24px", maxWidth: 380, width: "90%" }
      },
        React.createElement("div", { style: { color: "#f0e6d3", fontWeight: "bold", fontSize: "1rem", marginBottom: 10 } },
          "\uD83E\uDD1D Hire Community Buck"),
        React.createElement("div", { style: { color: "#e8d0a8", fontSize: "0.85rem", marginBottom: 6 } },
          (confirmHire.dog_name || confirmHire.breed || "Buck") + " \u2014 " + (confirmHire.breed || "")),
        React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", marginBottom: 4 } },
          "\u2764\uFE0F " + (confirmHire.health_score||0) + "  \u26A1 " + (confirmHire.perf_score||0) +
          "  COI: " + (confirmHire.coi||0) + "%"),
        React.createElement("div", { style: { color: "#22c55e", fontWeight: "bold", fontSize: "1.1rem", margin: "12px 0" } },
          "Fee: $" + (confirmHire.fee||0).toLocaleString()),
        money < (confirmHire.fee||0)
          ? React.createElement("div", { style: { color: "#ef4444", fontSize: "0.82rem", marginBottom: 10 } },
              "Not enough money! You have $" + money.toLocaleString())
          : React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", marginBottom: 10 } },
              "This buck will be used for one breeding cycle. Your balance: $" + money.toLocaleString()),
        React.createElement("div", { style: { display: "flex", gap: 8 } },
          money >= (confirmHire.fee||0) && React.createElement("button", {
            onClick: function() {
              if (onHireBuck) onHireBuck(confirmHire);
              setConfirmHire(null);
            },
            style: { flex: 1, background: "#0a2a10", border: "1px solid #22c55e", color: "#22c55e",
              borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: "0.85rem", fontWeight: "bold" }
          }, "\u2705 Confirm Hire"),
          React.createElement("button", {
            onClick: function() { setConfirmHire(null); },
            style: { flex: 1, background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
              borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: "0.82rem" }
          }, "Cancel")
        )
      )
    )
  );
}

// ── GOAT UI COMPONENTS ──────────────────────────────────────────────────────

function GoatDNAPanel(props) {
  var goat = props.goat;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!goat || !goat.genome) return null;
  var g = goat.genome;
  var ce = React.createElement;

  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
  var healthQtls = typeof GOAT_HEALTH_QTLS !== "undefined" ? GOAT_HEALTH_QTLS : ["HoofQ","ParasiteQ","UdderQ","RespiQ","FertQ"];
  var perfInfo = typeof GOAT_PERF_QTL_INFO !== "undefined" ? GOAT_PERF_QTL_INFO : {};
  var healthInfo = typeof GOAT_HEALTH_QTL_INFO !== "undefined" ? GOAT_HEALTH_QTL_INFO : {};

  var extraStats = [];
  if ((goat.type==="dairy"||goat.type==="dual") && goat.sex==="F") extraStats.push({ label:"Milk", value:(goat.milkYield||0)+" gal/mo", color:"#7dd3fc" });
  if (goat.type==="fiber") extraStats.push({ label:"Fiber", value:(goat.fiberYield||0)+" lb", color:"#c4b5fd" });

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#1a1410", border:"1px solid #4a3a28", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (goat.name || goat.breed)),
        ce("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
          goat.breed + " \u00B7 " + (goat.coatColor||"") + " \u00B7 " + (goat.type||"meat") + " \u00B7 " + (goat.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:goat.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:goat.perfScore||0, color:"#d4942a" },
        { label:"Weight", value:(goat.weightLbs||120)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(goat.coi||0)+"%", color:(goat.coi||0)>=25?"#ef4444":"#22c55e" }
      ].concat(extraStats)
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#141008", border:"1px solid #2a1e10", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#4a3a28", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(perfQtls.length,6)+",1fr)", gap:6, marginBottom:14 } },
      perfQtls.map(function(q) {
        var info = perfInfo[q] || { icon:"\u2B50", full:q, desc:"" };
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #2a3a18",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(healthQtls.length,5)+",1fr)", gap:6 } },
      healthQtls.map(function(q) {
        var info = healthInfo[q] || { icon:"\u2764", full:q, desc:"" };
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #1a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ── Goat Card ─────────────────────────────────────────────────────────────

function GoatCard(props) {
  var goat = props.goat;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onLock = props.onLock;
  var onListGoatStud = props.onListGoatStud;
  if (!goat) return null;
  var isBuck = goat.sex === "M";
  var feeCalcGoat = isBuck && typeof calcSuggestedBuckFee === "function" ? calcSuggestedBuckFee(goat) : null;

  var goatAgeStatus = (typeof isDeclining==="function"&&isDeclining(goat.ageMonths||0,"goat")) ? "declining" : ((typeof isPastPrime==="function"&&isPastPrime(goat.ageMonths||0,"goat")) ? "past_prime" : "ok");

  var _en = React.useState(false), editing = _en[0], setEditing = _en[1];
  var _nv = React.useState(goat.name||""), nameVal = _nv[0], setNameVal = _nv[1];
  var _dn = React.useState(false), showDNA = _dn[0], setShowDNA = _dn[1];
  var _sf = React.useState(false), showFeePanel = _sf[0], setShowFeePanel = _sf[1];

  var sexColor = goat.sex==="M" ? "#60a5fa" : "#f472b6";
  var ageYrs = Math.round((goat.ageMonths||0)/12*10)/10;
  var typeColors = { dairy:"#7dd3fc", meat:"#fca5a5", fiber:"#c4b5fd", dual:"#fbbf24" };
  var typeIcons = { dairy:"\uD83E\uDD5B Dairy", meat:"\uD83E\uDD69 Meat", fiber:"\uD83E\uDDF6 Fiber", dual:"\u2696\uFE0F Dual" };
  var typeColor = typeColors[goat.type] || "#b09070";
  var typeLabel = typeIcons[goat.type] || goat.type;

  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
  var perfInfo = typeof GOAT_PERF_QTL_INFO !== "undefined" ? GOAT_PERF_QTL_INFO : {};

  function saveName() {
    var trimmed = nameVal.trim();
    if (trimmed && onRename) onRename(goat, trimmed);
    setEditing(false);
  }

  return React.createElement("div", {
    style:{ background:"#1a1410", border:"1px solid #2e2218", borderRadius:10, padding:14 }
  },
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 } },
      React.createElement("span", { style:{ fontSize:"1.6rem" } }, goat.sex==="M"?"\uD83D\uDC10":"\uD83D\uDC10"),
      React.createElement("span", { style:{ background:"#0a1a1a",
        border:"1px solid "+typeColor, color:typeColor, borderRadius:4,
        padding:"2px 6px", fontSize:"0.65rem", fontWeight:"bold" } }, typeLabel)
    ),
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4, gap:6 } },
      editing
        ? React.createElement("div", { style:{ display:"flex", gap:4, flex:1 } },
            React.createElement("input", {
              autoFocus:true, value:nameVal,
              onChange:function(e){ setNameVal(e.target.value); },
              onKeyDown:function(e){ if(e.key==="Enter")saveName(); if(e.key==="Escape")setEditing(false); },
              style:{ flex:1, background:"#0a1a0a", border:"1px solid #22c55e", color:"#f0e6d3",
                borderRadius:4, padding:"2px 6px", fontSize:"0.88rem", fontWeight:"bold" }
            }),
            React.createElement("button", { onClick:saveName,
              style:{ background:"#0a2a15", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4,
                padding:"2px 7px", cursor:"pointer", fontSize:"0.75rem" } }, "\u2713"),
            React.createElement("button", { onClick:function(){ setEditing(false); },
              style:{ background:"transparent", border:"1px solid #4a3a28", color:"#6b5038", borderRadius:4,
                padding:"2px 7px", cursor:"pointer", fontSize:"0.75rem" } }, "\u2715")
          )
        : React.createElement(React.Fragment, null,
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.95rem", flex:1 } },
              goat.name || goat.breed || React.createElement("span", { style:{ color:"#4a3a28", fontStyle:"italic" } }, "(unnamed)")),
            React.createElement("button", {
              onClick:function(){ setNameVal(goat.name||""); setEditing(true); },
              style:{ background:"transparent", border:"none", color:"#4a3a28", cursor:"pointer", fontSize:"0.8rem" }
            }, "\u270F\uFE0F")
          ),
      !editing && React.createElement("span", { style:{ color:sexColor, fontSize:"0.8rem", flexShrink:0 } }, goat.sex==="M"?"\u2642":"\u2640")
    ),
    React.createElement("div", { style:{ background:"#1a1408", border:"1px solid #2e2218", borderRadius:4,
      padding:"3px 8px", fontSize:"0.72rem", color:"#b09070", marginBottom:6 } },
      goat.breed, " \u00B7 ", React.createElement("span", { style:{ color:"#c4956a" } }, goat.coatColor || "Unknown")
    ),
    React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6, flexWrap:"wrap" } },
      React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+(goat.healthScore||0)),
      React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+(goat.perfScore||0)),
      React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, ageYrs+" yrs"),
      React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, (goat.weightLbs||120)+" lb"),
      (goat.type==="dairy"||goat.type==="dual") && goat.sex==="F" && React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem" } },
        "\uD83E\uDD5B "+(goat.milkYield||0)+" gal/mo"),
      goat.type==="fiber" && React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } },
        "\uD83E\uDDF6 "+(goat.fiberYield||0)+" lb fiber"),
      goat.pregnantUntil && (function(){
        var dl = Math.max(0, Math.ceil((goat.pregnantUntil - Date.now())/(24*60*60*1000)));
        return React.createElement("span", { style:{ color:"#f472b6", fontSize:"0.72rem", fontWeight:"bold" } }, "\uD83E\uDD30 "+dl+"d");
      })()
    ),
    goat.genome && goat.genome.perf && React.createElement("div", { style:{ background:"#141008", border:"1px solid #2e2218",
      borderRadius:5, padding:"6px 8px", marginBottom:6 } },
      React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.6rem", textTransform:"uppercase", marginBottom:4 } }, "Performance"),
      React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:2 } },
        perfQtls.map(function(q) {
          var info = perfInfo[q] || { icon:"\u2B50", full:q };
          var v = goat.genome.perf[q] || [3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#4a5568";
          return React.createElement("div", { key:q, style:{ display:"flex", alignItems:"center", gap:5 } },
            React.createElement("span", { style:{ fontSize:"0.6rem", width:60, color:col, flexShrink:0 } }, info.icon+" "+q),
            React.createElement("div", { style:{ flex:1, background:"#2e2218", borderRadius:2, height:4, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            ),
            React.createElement("span", { style:{ fontSize:"0.6rem", color:col, width:20, textAlign:"right", flexShrink:0 } }, avg.toFixed(1))
          );
        })
      )
    ),
    React.createElement("div", { style:{ display:"flex", gap:5, marginTop:4, flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(true); },
        style:{ flex:1, background:"#0a1a08", border:"1px solid #2a4a18", color:"#84cc16",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
      }, "\uD83E\uDDEC DNA"),
      onSell && React.createElement("button", {
        onClick:function(){ onSell(goat); },
        style:{ flex:1, background:"#1a0a00", border:"1px solid #d4860a", color:"#d4860a",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.78rem" }
      }, "\uD83D\uDCB0 Sell"),
      isBuck && onListGoatStud && React.createElement("button", {
        onClick:function(){ setShowFeePanel(function(v){ return !v; }); },
        style:{ flex:"1 1 100%", background: goat.isGoatStud ? "#0a1a2a" : "#0a1a0a",
          border:"1px solid " + (goat.isGoatStud ? "#60a5fa" : "#22c55e"),
          color: goat.isGoatStud ? "#60a5fa" : "#22c55e",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
      }, goat.isGoatStud ? "\uD83D\uDC10 Listed as Stud \u2014 $" + (goat.goatStudFee||0).toLocaleString() + "/breeding" : "\uD83D\uDC10 List as Community Stud")
    ),
    // Lock button
    onLock && React.createElement("div", { style:{ display:"flex", gap:4, marginTop:4 } },
      React.createElement("button", {
        onClick:function(){ onLock(goat); },
        style:{ flex:1, background:goat.locked?"#1a1408":"#141008",
          border:"1px solid "+(goat.locked?"#f59e0b":"#4a3a28"),
          color:goat.locked?"#f59e0b":"#8a7055",
          borderRadius:6, padding:"4px 0", cursor:"pointer", fontSize:"0.72rem", fontWeight:"bold" }
      }, goat.locked ? "\uD83D\uDD13 Unlock" : "\uD83D\uDD12 Lock")
    ),
    // Status badges
    (goat.locked || goatAgeStatus!=="ok") && React.createElement("div", {
      style:{ display:"flex", gap:4, marginTop:4, flexWrap:"wrap" }
    },
      goat.locked && React.createElement("span", { style:{ fontSize:"0.63rem", background:"#92400e", color:"#fef3c7", padding:"2px 8px", borderRadius:4, fontWeight:"bold" } }, "\uD83D\uDD12 LOCKED"),
      !goat.locked && goatAgeStatus==="declining" && React.createElement("span", { style:{ fontSize:"0.63rem", background:"#7f1d1d", color:"#fecaca", padding:"2px 8px", borderRadius:4, fontWeight:"bold" } }, "\u26A0\uFE0F DECLINING"),
      !goat.locked && goatAgeStatus==="past_prime" && React.createElement("span", { style:{ fontSize:"0.63rem", background:"#78350f", color:"#fde68a", padding:"2px 8px", borderRadius:4, fontWeight:"bold" } }, "\u23F3 PAST PRIME")
    ),
    // Show titles
    (goat.goatEarnedTitles && goat.goatEarnedTitles.length > 0) && React.createElement("div", {
      style:{ display:"flex", gap:4, marginTop:4, flexWrap:"wrap" }
    },
      goat.goatEarnedTitles.map(function(t,i) {
        return React.createElement("span", { key:i, style:{ fontSize:"0.6rem", background:"#2a1e08",
          border:"1px solid #d4942a", color:"#d4942a", padding:"1px 6px", borderRadius:3 } }, t);
      })
    ),
    // Goat show points
    (goat.goatShowPoints > 0) && React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem", marginTop:3 } },
      "\uD83C\uDFC6 " + goat.goatShowPoints + " show pts"),
    // Stud fee panel
    isBuck && showFeePanel && feeCalcGoat && React.createElement("div", {
      style:{ background:"#0a1208", border:"1px solid #1a4a28", borderRadius:8, padding:"10px 12px", marginTop:6 }
    },
      React.createElement("div", { style:{ color:"#84cc16", fontWeight:"bold", fontSize:"0.78rem", marginBottom:6 } },
        "\uD83D\uDC10 Stud Fee Breakdown"),
      feeCalcGoat.reasons.length === 0
        ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem", marginBottom:6 } }, "Base rate \u2014 no bonuses yet")
        : feeCalcGoat.reasons.map(function(r, i){
            return React.createElement("div", { key:i, style:{ color:"#b0c090", fontSize:"0.7rem", marginBottom:3 } }, r);
          }),
      React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.85rem", marginTop:6, borderTop:"1px solid #2a3a18", paddingTop:6 } },
        "Suggested fee: $" + feeCalcGoat.fee.toLocaleString()),
      React.createElement("div", { style:{ display:"flex", gap:6, marginTop:8 } },
        goat.isGoatStud
          ? React.createElement(React.Fragment, null,
              React.createElement("button", {
                onClick:function(){
                  var newFee = prompt("Update stud fee for " + (goat.name||goat.breed) + ":", goat.goatStudFee||feeCalcGoat.fee);
                  if (newFee && !isNaN(Number(newFee)) && Number(newFee) > 0) {
                    onListGoatStud(goat.id, true, Number(newFee));
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#0a1a2a", border:"1px solid #60a5fa", color:"#60a5fa",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Update Fee"),
              React.createElement("button", {
                onClick:function(){
                  if (confirm("Remove " + (goat.name||goat.breed) + " from community stud listings?")) {
                    onListGoatStud(goat.id, false, 0);
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#1a0808", border:"1px solid #ef4444", color:"#ef4444",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Remove Listing")
            )
          : React.createElement(React.Fragment, null,
              React.createElement("button", {
                onClick:function(){
                  onListGoatStud(goat.id, true, feeCalcGoat.fee);
                  setShowFeePanel(false);
                },
                style:{ flex:1, background:"#0a2a10", border:"1px solid #22c55e", color:"#22c55e",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem", fontWeight:"bold" }
              }, "List at $" + feeCalcGoat.fee.toLocaleString()),
              React.createElement("button", {
                onClick:function(){
                  var custom = prompt("Enter custom stud fee:", feeCalcGoat.fee);
                  if (custom && !isNaN(Number(custom)) && Number(custom) > 0) {
                    onListGoatStud(goat.id, true, Number(custom));
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#1a1408", border:"1px solid #6b5038", color:"#b09070",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Custom Fee")
            )
      )
    ),
    showDNA && React.createElement(GoatDNAPanel, { goat:goat, onClose:function(){ setShowDNA(false); } })
  );
}

// ── Goat View Tab ───────────────────────────────────────────────────────────

function GoatView(props) {
  var goats = props.goats || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var pendingCalves = props.pendingCalves || [];
  var onShowsOpen = props.onShowsOpen;
  var naturalMatingOn = props.naturalMatingOn || false;
  var onToggleNaturalMating = props.onToggleNaturalMating;
  var onListGoatStud = props.onListGoatStud;
  var user = props.user;
  var money = props.money || 0;
  var onHireBuck = props.onHireBuck;
  var onBreedGoat = props.onBreedGoat;
  var _cbOpen = React.useState(false), communityBucksOpen = _cbOpen[0], setCommunityBucksOpen = _cbOpen[1];
  var _breed = React.useState(false), showBreeding = _breed[0], setShowBreeding = _breed[1];

  var _f = React.useState("all"), filterType = _f[0], setFilterType = _f[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];

  var bucks = goats.filter(function(g){ return g.sex==="M" && !g.retiredLivestock; });
  var does = goats.filter(function(g){ return g.sex==="F" && !g.retiredLivestock; });
  var pregnantDoes = does.filter(function(g){ return g.pregnantUntil && g.pregnantUntil > Date.now(); });
  var dairyCount = goats.filter(function(g){ return g.type==="dairy"; }).length;
  var meatCount = goats.filter(function(g){ return g.type==="meat"; }).length;
  var fiberCount = goats.filter(function(g){ return g.type==="fiber"; }).length;
  var dualCount = goats.filter(function(g){ return g.type==="dual"; }).length;

  var topBuck = bucks.slice().sort(function(a,b){ return (b.perfScore||0)-(a.perfScore||0); })[0] || null;

  var filtered = filterType==="all" ? goats :
    goats.filter(function(g){ return g.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var goatPending = pendingCalves.filter(function(pc){ return pc.species==="goat"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83D\uDC10"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "Goat Management"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem" } },
            goats.length+" goats \u00B7 "+bucks.length+" bucks \u00B7 "+does.length+" does"+
            (pregnantDoes.length>0?" \u00B7 "+pregnantDoes.length+" pregnant":""))
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        goats.length >= 2 && React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setShowBreeding(true); },
          disabled: bucks.length===0 || does.length===0,
          style:{ background: (bucks.length>0&&does.length>0)?"#2a1e08":"#141008",
            border:"1px solid "+((bucks.length>0&&does.length>0)?"#d4942a":"#2a2a18"),
            color: (bucks.length>0&&does.length>0)?"#d4942a":"#3a3a28",
            borderRadius:8, padding:"6px 14px", cursor:(bucks.length>0&&does.length>0)?"pointer":"not-allowed",
            fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83E\uDD1D Breed"),
        goats.length > 0 && onShowsOpen && React.createElement("button", {
          onClick:onShowsOpen,
          style:{ background:"#2a1e08", border:"1px solid #d4942a", color:"#d4942a",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83C\uDFC6 County Fair"),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#b09070",
            borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
        }, "\u2190 Back to Farm")
      )
    ),

    // Natural Mating Control Panel (always on for goats)
    goats.length > 0 && React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #2a1e10",
      background:"#1a1a08", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom:8 } },
        React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } },
            "Goats breed naturally \u2014 your buck"+(bucks.length!==1?"s":"")+" will cover eligible does automatically")
        ),
        React.createElement("div", { style:{ background:"#22c55e", borderRadius:10, padding:"2px 10px", flexShrink:0 } },
          React.createElement("span", { style:{ color:"#fff", fontSize:"0.65rem", fontWeight:"bold" } }, "ALWAYS ON"))
      ),

      React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        topBuck && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a5a28",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83D\uDC10 Herd Buck"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, topBuck.name || topBuck.breed),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            topBuck.breed + " \u00B7 " + (topBuck.type||"") + " \u00B7 \u2764\uFE0F" + (topBuck.healthScore||0) +
            " \u26A1" + (topBuck.perfScore||0) + " \u00B7 covers " + does.length + " doe" + (does.length!==1?"s":""))
        ),
        !topBuck && does.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Buck"),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            does.length + " doe"+(does.length!==1?"s":"")+" won\u2019t breed without a buck")
        ),
        React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Herd Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + bucks.length + " buck" + (bucks.length!==1?"s":"")),
            React.createElement("div", null, "\u2640 " + does.length + " doe" + (does.length!==1?"s":"")),
            React.createElement("div", { style:{ color: pregnantDoes.length>0 ? "#f472b6" : "#6b5038" } },
              "\uD83E\uDD30 " + pregnantDoes.length + " pregnant")
          )
        ),
        goatPending.length > 0 && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Kids"),
          goatPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83D\uDC10 " + pc.damName + " \u2014 " + pc.offspring.length + " kid" +
              (pc.offspring.length!==1?"s":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    // Browse Community Bucks (collapsible)
    goats.length > 0 && React.createElement("div", {
      style: { margin: "0 16px 8px", background: "#0a0e14", border: "1px solid #1a3a5a", borderRadius: 8, overflow: "hidden" }
    },
      React.createElement("button", {
        onClick: function() { setCommunityBucksOpen(function(v){ return !v; }); },
        style: { width: "100%", background: "transparent", border: "none", color: "#38bdf8",
          padding: "8px 12px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "bold",
          display: "flex", alignItems: "center", gap: 6, textAlign: "left" }
      },
        React.createElement("span", { style: { transform: communityBucksOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s", display: "inline-block" } }, "\u25B6"),
        "Browse Community Bucks"
      ),
      communityBucksOpen && React.createElement("div", { style: { padding: "0 12px 10px" } },
        React.createElement(CommunityBucksPanel, { user: user, money: money, onHireBuck: onHireBuck })
      )
    ),

    // Type stats bar
    React.createElement("div", { style:{ display:"flex", gap:8, padding:"8px 16px", borderBottom:"1px solid #2a1e10",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem" } }, "\uD83E\uDD5B Dairy: "+dairyCount),
      React.createElement("span", { style:{ color:"#fca5a5", fontSize:"0.72rem" } }, "\uD83E\uDD69 Meat: "+meatCount),
      React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } }, "\uD83E\uDDF6 Fiber: "+fiberCount),
      React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.72rem" } }, "\u2696\uFE0F Dual: "+dualCount)
    ),

    // Filters + sort
    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #2a1e10",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      ["all","dairy","meat","fiber","dual"].map(function(t) {
        var active = filterType===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilterType(t); },
          style:{ background: active?"#2a1e10":"transparent", border:"1px solid "+(active?"#d4942a":"#4a3a28"),
            color: active?"#d4942a":"#6b5038", borderRadius:5, padding:"3px 10px",
            cursor:"pointer", fontSize:"0.72rem", textTransform:"capitalize" } }, t);
      }),
      React.createElement("span", { style:{ color:"#4a3a28", margin:"0 4px" } }, "|"),
      React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.68rem" } }, "Sort:"),
      ["name","breed","health","perf","type"].map(function(s) {
        var active = listSort===s;
        return React.createElement("button", { key:s, onClick:function(){ setListSort(s); },
          style:{ background: active?"#1a2a0a":"transparent", border:"1px solid "+(active?"#22c55e":"#3a3020"),
            color: active?"#22c55e":"#6b5038", borderRadius:4, padding:"2px 7px",
            cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" } }, s);
      })
    ),

    // Grid
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12 } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 0" } },
            "No goats yet \u2014 buy some from the Livestock Market!")
        : React.createElement("div", { style:{ display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:10 } },
            sorted.map(function(g) {
              return React.createElement(GoatCard, { key:g.id, goat:g, onSell:onSell, onRename:onRename, onLock:props.onLock, onListGoatStud:onListGoatStud });
            })
          )
    ),

    showBreeding && React.createElement(GoatBreedingModal, {
      goats: goats,
      onClose: function(){ setShowBreeding(false); },
      onConfirm: function(sireId, damId){
        if (onBreedGoat) onBreedGoat(sireId, damId);
        setShowBreeding(false);
      }
    })
  );
}


// ── Goat Breeding Modal ──────────────────────────────────────────────────────

function GoatBreedingModal(props) {
  var goats = props.goats || [];
  var onClose = props.onClose;
  var onConfirm = props.onConfirm;

  var allBucks = goats.filter(function(g){ return g.sex==="M" && !g.pregnantUntil && !g.locked && !g.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(g.ageMonths||0,"goat")); });
  var allDoes  = goats.filter(function(g){ return g.sex==="F" && !g.pregnantUntil && !g.locked && !g.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(g.ageMonths||0,"goat")); });

  var _ss = React.useState(null), selectedSire = _ss[0], setSelectedSire = _ss[1];
  var _sd = React.useState(null), selectedDam  = _sd[0], setSelectedDam  = _sd[1];
  var _sf = React.useState(""),   sireFilter   = _sf[0], setSireFilter   = _sf[1];
  var _df = React.useState(""),   damFilter    = _df[0], setDamFilter    = _df[1];
  var _dna = React.useState(null), dnaGoat     = _dna[0], setDnaGoat     = _dna[1];
  var _sortS = React.useState("perf"), sortS    = _sortS[0], setSortS   = _sortS[1];
  var _sortD = React.useState("perf"), sortD    = _sortD[0], setSortD   = _sortD[1];

  var sire = selectedSire ? goats.find(function(g){ return g.id===selectedSire; }) : null;
  var dam  = selectedDam  ? goats.find(function(g){ return g.id===selectedDam;  }) : null;

  var perfQtls = typeof GOAT_PERF_QTLS !== "undefined" ? GOAT_PERF_QTLS : ["MILK","GROWTH","MUSCLE","TEMP","HARDY","FIBER"];
  var perfInfo = typeof GOAT_PERF_QTL_INFO !== "undefined" ? GOAT_PERF_QTL_INFO : {};

  function filterAndSort(list, filter, sort) {
    var f = filter.toLowerCase();
    var filtered = f ? list.filter(function(g){
      return (g.name||"").toLowerCase().includes(f) ||
             (g.breed||"").toLowerCase().includes(f) ||
             (g.coatColor||"").toLowerCase().includes(f) ||
             (g.type||"").toLowerCase().includes(f);
    }) : list;
    return filtered.slice().sort(function(a,b){
      if (sort==="perf")   return (b.perfScore||0)-(a.perfScore||0);
      if (sort==="health") return (b.healthScore||0)-(a.healthScore||0);
      if (sort==="name")   return (a.name||"").localeCompare(b.name||"");
      return 0;
    });
  }

  function countHealthWarnings(g) {
    if (!g || !g.genome || !g.genome.health) return 0;
    var n = 0;
    Object.values(g.genome.health).forEach(function(al){
      if (al && al[0]==="g" && al[1]==="g") n++;
    });
    return n;
  }

  // COI preview for selected pair
  function estimateCOI(s, d) {
    if (!s || !d) return null;
    if (s.breed !== d.breed) return 0;
    var coi = 3 + Math.random()*3;
    if (s.sireId && d.sireId && s.sireId === d.sireId) coi += 12.5;
    if (s.damId && d.damId && s.damId === d.damId) coi += 12.5;
    return Math.round(Math.min(coi, 50)*10)/10;
  }

  function GoatOption(g, selected, onSelect, accentColor) {
    var warn = countHealthWarnings(g);
    var perf = g.genome && g.genome.perf;
    var icons = {MILK:"\uD83E\uDD5B",GROWTH:"\uD83C\uDF31",MUSCLE:"\uD83D\uDCAA",TEMP:"\uD83E\uDDE0",HARDY:"\u2744\uFE0F",FIBER:"\uD83E\uDDF6"};
    var typeColors = {dairy:"#7dd3fc",meat:"#fca5a5",fiber:"#c4b5fd",dual:"#fbbf24"};
    var typeCol = typeColors[g.type] || "#e8d0a8";
    return React.createElement("div", {
      key: g.id,
      style: {
        background: selected ? "#1a2a08" : "#141008",
        border: "1px solid " + (selected ? accentColor : (warn>0?"#4a2a08":"#2a1e10")),
        borderRadius: 8, marginBottom: 6, overflow:"hidden"
      }
    },
      // Main row — clickable
      React.createElement("div", {
        onClick: function(e){ e.stopPropagation(); onSelect(g.id); },
        style: { padding:"9px 10px", cursor:"pointer" }
      },
        // Top line: name + scores
        React.createElement("div", { style: { display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 } },
          React.createElement("div", { style:{ flex:1 } },
            React.createElement("div", { style: { color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem", display:"flex", alignItems:"center", gap:5 } },
              g.name,
              warn>0 && React.createElement("span", { style:{ background:"#481808", border:"1px solid #ef4444", color:"#fca5a5",
                borderRadius:3, padding:"0px 4px", fontSize:"0.6rem", fontWeight:"bold" } }, "\u26A0\uFE0F"+warn)
            ),
            React.createElement("div", { style: { color:"#6b5038", fontSize:"0.67rem", marginTop:1 } },
              g.breed + " \u00B7 " + (g.coatColor||"") + " \u00B7 "),
            React.createElement("span", { style:{ color:typeCol, fontSize:"0.67rem" } }, (g.type||"meat"))
          ),
          React.createElement("div", { style: { textAlign:"right", flexShrink:0, marginLeft:8 } },
            React.createElement("div", { style: { fontSize:"0.68rem", color:"#22c55e", fontWeight:"bold" } }, "\u2764\uFE0F "+g.healthScore),
            React.createElement("div", { style: { fontSize:"0.68rem", color:"#d4942a", fontWeight:"bold" } }, "\u26A1 "+g.perfScore)
          )
        ),
        // QTL mini bars
        perf && React.createElement("div", { style:{ display:"flex", gap:3, alignItems:"center" } },
          perfQtls.map(function(q){
            var v = perf[q]||[3,3];
            var avg = (v[0]+v[1])/2;
            var pct = Math.round((avg/5)*100);
            var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
            return React.createElement("div", { key:q, style:{ flex:1 } },
              React.createElement("div", { style:{ fontSize:"0.52rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
              React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
                React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
              ),
              React.createElement("div", { style:{ fontSize:"0.5rem", color:col, textAlign:"center", marginTop:1 } }, avg.toFixed(1))
            );
          })
        )
      ),
      // DNA peek button
      React.createElement("div", {
        onClick: function(e){ e.stopPropagation(); setDnaGoat(dnaGoat&&dnaGoat.id===g.id ? null : g); },
        style: { borderTop:"1px solid #2a1e10", padding:"4px 10px", cursor:"pointer",
          background: dnaGoat&&dnaGoat.id===g.id ? "#0a1a08" : "transparent",
          color: dnaGoat&&dnaGoat.id===g.id ? "#84cc16" : "#3a5a28",
          fontSize:"0.62rem", textAlign:"center" }
      }, dnaGoat&&dnaGoat.id===g.id ? "\u25B2 Hide DNA" : "\uD83E\uDDEC View DNA")
    );
  }

  var filteredBucks = filterAndSort(allBucks, sireFilter, sortS);
  var filteredDoes  = filterAndSort(allDoes,  damFilter,  sortD);

  function SortBar(sort, setSort, color) {
    var opts = [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]];
    return React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:6 } },
      opts.map(function(o){
        return React.createElement("button", {
          key:o[0],
          onClick:function(e){ e.stopPropagation(); setSort(o[0]); },
          style:{ flex:1, background:sort===o[0]?"#1a2a08":"transparent",
            border:"1px solid "+(sort===o[0]?color:"#2a1e10"),
            color:sort===o[0]?color:"#6b5038", borderRadius:4,
            padding:"2px 0", fontSize:"0.62rem", cursor:"pointer" }
        }, o[1]);
      })
    );
  }

  // Pairing analysis
  var pairCOI = estimateCOI(sire, dam);
  var crossbred = sire && dam && sire.breed !== dam.breed;

  return React.createElement("div", {
    onClick: onClose,
    style: { position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1300,
      display:"flex", alignItems:"center", justifyContent:"center", padding:12 }
  },
    React.createElement("div", {
      onClick: function(e){ e.stopPropagation(); },
      style: { background:"#0e0c08", border:"1px solid #2a1e10", borderRadius:12,
        width:"100%", maxWidth:860, maxHeight:"92vh", display:"flex", flexDirection:"column" }
    },
      // Header
      React.createElement("div", { style:{ padding:"16px 20px 12px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
          React.createElement("div", {},
            React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83E\uDD1D Breed Goats"),
            React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem", marginTop:2 } }, "Gestation: 5 days \u00B7 1\u20133 kids per breeding \u00B7 Cross-breeds produce Crossbred kids")
          ),
          React.createElement("button", { onClick:onClose,
            style:{ background:"none", border:"1px solid #2a1e10", color:"#6b5038",
              borderRadius:5, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem" } }, "\u2715 Close")
        )
      ),

      // Main body: two columns + DNA panel
      React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden", gap:0 } },

        // Buck column
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #2a1e10", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#60a5fa", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } },
              "\u2642 BUCKS ("+allBucks.length+")"),
            React.createElement("input", {
              value: sireFilter,
              onChange: function(e){ e.stopPropagation(); setSireFilter(e.target.value); },
              onClick: function(e){ e.stopPropagation(); },
              placeholder: "Search name / breed / type...",
              style:{ width:"100%", background:"#141008", border:"1px solid #2a1e10", color:"#f0e6d3",
                borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" }
            }),
            SortBar(sortS, setSortS, "#60a5fa")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredBucks.length===0
              ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } },
                  allBucks.length===0 ? "No available bucks" : "No matches")
              : filteredBucks.map(function(g){ return GoatOption(g, selectedSire===g.id, setSelectedSire, "#60a5fa"); })
          )
        ),

        // Doe column
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight: dnaGoat?"1px solid #2a1e10":"none", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } },
              "\u2640 DOES ("+allDoes.length+")"),
            React.createElement("input", {
              value: damFilter,
              onChange: function(e){ e.stopPropagation(); setDamFilter(e.target.value); },
              onClick: function(e){ e.stopPropagation(); },
              placeholder: "Search name / breed / type...",
              style:{ width:"100%", background:"#141008", border:"1px solid #2a1e10", color:"#f0e6d3",
                borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" }
            }),
            SortBar(sortD, setSortD, "#f472b6")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredDoes.length===0
              ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } },
                  allDoes.length===0 ? "No available does" : "No matches")
              : filteredDoes.map(function(g){ return GoatOption(g, selectedDam===g.id, setSelectedDam, "#f472b6"); })
          )
        ),

        // DNA peek panel (slides in)
        dnaGoat && React.createElement("div", { style:{ width:280, flexShrink:0, overflowY:"auto", borderLeft:"none" } },
          React.createElement(GoatDNAPanel, { goat:dnaGoat, inline:true, onClose:function(){ setDnaGoat(null); } })
        )
      ),

      // Pairing preview + confirm
      React.createElement("div", { style:{ padding:"12px 20px", borderTop:"1px solid #2a1e10", flexShrink:0 } },
        sire && dam
          ? React.createElement("div", null,
              React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, marginBottom:10, flexWrap:"wrap" } },
                React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a1408", border:"1px solid #2a1e10", borderRadius:6, padding:"6px 10px" } },
                  React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2642 "+sire.name),
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.63rem" } }, sire.breed+" \u00B7 "+(sire.coatColor||"")+" \u00B7 "+(sire.type||"")),
                  React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+sire.healthScore+"  \u26A1 "+sire.perfScore)
                ),
                React.createElement("div", { style:{ color:"#d4942a", fontSize:"1.1rem", fontWeight:"bold" } }, "\u00D7"),
                React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a1408", border:"1px solid #2a1e10", borderRadius:6, padding:"6px 10px" } },
                  React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2640 "+dam.name),
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.63rem" } }, dam.breed+" \u00B7 "+(dam.coatColor||"")+" \u00B7 "+(dam.type||"")),
                  React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+dam.healthScore+"  \u26A1 "+dam.perfScore)
                ),
                // Pairing info badges
                crossbred && React.createElement("div", { style:{ color:"#fde68a", fontSize:"0.65rem", background:"#2d1e00", border:"1px solid #ca8a04", borderRadius:4, padding:"3px 8px" } },
                  "\u26A0\uFE0F Crossbred kids"),
                pairCOI !== null && React.createElement("div", { style:{ color: pairCOI>=20?"#ef4444":pairCOI>=10?"#eab308":"#22c55e", fontSize:"0.65rem",
                  background: pairCOI>=20?"#1a0808":pairCOI>=10?"#1a1808":"#0a1a08",
                  border:"1px solid "+(pairCOI>=20?"#ef4444":pairCOI>=10?"#eab308":"#22c55e"),
                  borderRadius:4, padding:"3px 8px" } },
                  "COI ~"+pairCOI+"%")
              )
            )
          : React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.75rem", textAlign:"center", marginBottom:10 } },
              "Select a buck and a doe to continue"),
        React.createElement("button", {
          disabled: !sire || !dam,
          onClick: function(e){ e.stopPropagation(); if(sire && dam) onConfirm(sire.id, dam.id); },
          style:{
            width:"100%", padding:"11px 0", borderRadius:8,
            cursor: sire&&dam?"pointer":"not-allowed",
            background: sire&&dam?"#1a2a08":"#0a0c08",
            border:"1px solid "+(sire&&dam?"#84cc16":"#2a1e10"),
            color: sire&&dam?"#84cc16":"#2a4a18",
            fontWeight:"bold", fontSize:"0.9rem"
          }
        }, sire&&dam ? "\uD83E\uDD1D Confirm Breeding \u2014 Kids due in 5 days" : "No pairing selected")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════

// ── DNA Panel (inline or modal) ──────────────────────────────────────────────

function CattleDNAPanel(props) {
  var cow = props.cow;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!cow || !cow.genome) return null;
  var g = cow.genome;
  var ce = React.createElement;

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#1a1410", border:"1px solid #4a3a28", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    // Header
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (cow.name || cow.breed)),
        ce("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
          cow.breed + " \u00B7 " + (cow.coatColor||"") + " \u00B7 " + (cow.type||"beef") + " \u00B7 " + (cow.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    // Stats row
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:cow.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:cow.perfScore||0, color:"#d4942a" },
        { label:"Weight", value:(cow.weightLbs||1200)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(cow.coi||0)+"%", color:(cow.coi||0)>=25?"#ef4444":"#22c55e" }
      ].concat(cow.type==="dairy" && cow.sex==="F" ? [{ label:"Milk", value:(cow.milkYield||0)+" gal/mo", color:"#7dd3fc" }] : [])
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#141008", border:"1px solid #2a1e10", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#4a3a28", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    // Performance QTLs
    ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:6, marginBottom:14 } },
      CATTLE_PERF_QTLS.map(function(q) {
        var info = CATTLE_PERF_QTL_INFO[q];
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #2a3a18",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    // Health QTLs
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:6 } },
      CATTLE_HEALTH_QTLS.map(function(q) {
        var info = CATTLE_HEALTH_QTL_INFO[q];
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #1a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ── Cattle Card ──────────────────────────────────────────────────────────────

function CattleCard(props) {
  var cow = props.cow;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onListCattleStud = props.onListCattleStud;
  var onLock = props.onLock;
  if (!cow) return null;

  var ageStatus = typeof getCattleAgeStatus==="function" ? getCattleAgeStatus(cow) : "ok";

  var _en = React.useState(false), editing = _en[0], setEditing = _en[1];
  var _nv = React.useState(cow.name||""), nameVal = _nv[0], setNameVal = _nv[1];
  var _dn = React.useState(false), showDNA = _dn[0], setShowDNA = _dn[1];
  var _sf = React.useState(false), showFeePanel = _sf[0], setShowFeePanel = _sf[1];

  var isBull = cow.sex === "M";
  var feeCalc = isBull && typeof calcSuggestedBullFee === "function" ? calcSuggestedBullFee(cow) : null;

  var sexColor = cow.sex==="M" ? "#60a5fa" : "#f472b6";
  var ageYrs = Math.round((cow.ageMonths||0)/12*10)/10;
  var typeColor = cow.type==="dairy" ? "#7dd3fc" : "#fca5a5";
  var typeLabel = cow.type==="dairy" ? "\uD83E\uDD5B Dairy" : "\uD83E\uDD69 Beef";

  function saveName() {
    var trimmed = nameVal.trim();
    if (trimmed && onRename) onRename(cow, trimmed);
    setEditing(false);
  }

  return React.createElement("div", {
    style:{ background:"#1a1410", border:"1px solid #2e2218", borderRadius:10, padding:14 }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 } },
      React.createElement("span", { style:{ fontSize:"1.6rem" } }, cow.sex==="M"?"\uD83D\uDC02":"\uD83D\uDC04"),
      React.createElement("span", { style:{ background: cow.type==="dairy"?"#0a1a2a":"#2a0a0a",
        border:"1px solid "+typeColor, color:typeColor, borderRadius:4,
        padding:"2px 6px", fontSize:"0.65rem", fontWeight:"bold" } }, typeLabel)
    ),
    // Name + edit
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4, gap:6 } },
      editing
        ? React.createElement("div", { style:{ display:"flex", gap:4, flex:1 } },
            React.createElement("input", {
              autoFocus:true, value:nameVal,
              onChange:function(e){ setNameVal(e.target.value); },
              onKeyDown:function(e){ if(e.key==="Enter")saveName(); if(e.key==="Escape")setEditing(false); },
              style:{ flex:1, background:"#0a1a0a", border:"1px solid #22c55e", color:"#f0e6d3",
                borderRadius:4, padding:"2px 6px", fontSize:"0.88rem", fontWeight:"bold" }
            }),
            React.createElement("button", { onClick:saveName,
              style:{ background:"#0a2a15", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4,
                padding:"2px 7px", cursor:"pointer", fontSize:"0.75rem" } }, "\u2713"),
            React.createElement("button", { onClick:function(){ setEditing(false); },
              style:{ background:"transparent", border:"1px solid #4a3a28", color:"#6b5038", borderRadius:4,
                padding:"2px 7px", cursor:"pointer", fontSize:"0.75rem" } }, "\u2715")
          )
        : React.createElement(React.Fragment, null,
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.95rem", flex:1 } },
              cow.name || cow.breed || React.createElement("span", { style:{ color:"#4a3a28", fontStyle:"italic" } }, "(unnamed)")),
            React.createElement("button", {
              onClick:function(){ setNameVal(cow.name||""); setEditing(true); },
              style:{ background:"transparent", border:"none", color:"#4a3a28", cursor:"pointer", fontSize:"0.8rem" }
            }, "\u270F\uFE0F")
          ),
      !editing && React.createElement("span", { style:{ color:sexColor, fontSize:"0.8rem", flexShrink:0 } }, cow.sex==="M"?"\u2642":"\u2640")
    ),
    // Breed + color
    React.createElement("div", { style:{ background:"#1a1408", border:"1px solid #2e2218", borderRadius:4,
      padding:"3px 8px", fontSize:"0.72rem", color:"#b09070", marginBottom:6 } },
      cow.breed, " \u00B7 ", React.createElement("span", { style:{ color:"#c4956a" } }, cow.coatColor || "Unknown")
    ),
    // Stats
    React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6, flexWrap:"wrap" } },
      React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+(cow.healthScore||0)),
      React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+(cow.perfScore||0)),
      React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, ageYrs+" yrs"),
      React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, (cow.weightLbs||1200)+" lb"),
      cow.type==="dairy" && cow.sex==="F" && React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem" } },
        "\uD83E\uDD5B "+(cow.milkYield||0)+" gal/mo"),
      cow.pregnantUntil && (function(){
        var dl = Math.max(0, Math.ceil((cow.pregnantUntil - Date.now())/(24*60*60*1000)));
        return React.createElement("span", { style:{ color:"#f472b6", fontSize:"0.72rem", fontWeight:"bold" } }, "\uD83E\uDD30 "+dl+"d");
      })()
    ),
    // Perf bars
    cow.genome && cow.genome.perf && React.createElement("div", { style:{ background:"#141008", border:"1px solid #2e2218",
      borderRadius:5, padding:"6px 8px", marginBottom:6 } },
      React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.6rem", textTransform:"uppercase", marginBottom:4 } }, "Performance"),
      React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:2 } },
        CATTLE_PERF_QTLS.map(function(q) {
          var info = CATTLE_PERF_QTL_INFO[q];
          var v = cow.genome.perf[q] || [3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#4a5568";
          return React.createElement("div", { key:q, style:{ display:"flex", alignItems:"center", gap:5 } },
            React.createElement("span", { style:{ fontSize:"0.6rem", width:60, color:col, flexShrink:0 } }, info.icon+" "+q),
            React.createElement("div", { style:{ flex:1, background:"#2e2218", borderRadius:2, height:4, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            ),
            React.createElement("span", { style:{ fontSize:"0.6rem", color:col, width:20, textAlign:"right", flexShrink:0 } }, avg.toFixed(1))
          );
        })
      )
    ),
    // Action buttons
    React.createElement("div", { style:{ display:"flex", gap:5, marginTop:4, flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(true); },
        style:{ flex:1, background:"#0a1a08", border:"1px solid #2a4a18", color:"#84cc16",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
      }, "\uD83E\uDDEC DNA"),
      onSell && React.createElement("button", {
        onClick:function(){ onSell(cow); },
        style:{ flex:1, background:"#1a0a00", border:"1px solid #d4860a", color:"#d4860a",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.78rem" }
      }, "\uD83D\uDCB0 Sell"),
      isBull && onListCattleStud && React.createElement("button", {
        onClick:function(){ setShowFeePanel(function(v){ return !v; }); },
        style:{ flex:"1 1 100%", background: cow.isCattleStud ? "#0a1a2a" : "#0a1a0a",
          border:"1px solid " + (cow.isCattleStud ? "#60a5fa" : "#22c55e"),
          color: cow.isCattleStud ? "#60a5fa" : "#22c55e",
          borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
      }, cow.isCattleStud ? "\uD83D\uDC02 Listed as Stud \u2014 $" + (cow.cattleStudFee||0).toLocaleString() + "/breeding" : "\uD83D\uDC02 List as Community Stud")
    ),
    // Lock button
    onLock && React.createElement("div", { style:{ display:"flex", gap:4, marginTop:4 } },
      React.createElement("button", {
        onClick:function(){ onLock(cow); },
        style:{ flex:1, background:cow.locked?"#1a1408":"#141008",
          border:"1px solid "+(cow.locked?"#f59e0b":"#4a3a28"),
          color:cow.locked?"#f59e0b":"#8a7055",
          borderRadius:6, padding:"4px 0", cursor:"pointer", fontSize:"0.72rem", fontWeight:"bold" }
      }, cow.locked ? "\uD83D\uDD13 Unlock" : "\uD83D\uDD12 Lock")
    ),
    // Status badges
    (cow.locked || ageStatus==="declining" || ageStatus==="past_prime") && React.createElement("div", {
      style:{ display:"flex", gap:4, marginTop:4, flexWrap:"wrap" }
    },
      cow.locked && React.createElement("span", {
        style:{ fontSize:"0.63rem", background:"#92400e", color:"#fef3c7", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
      }, "\uD83D\uDD12 LOCKED"),
      !cow.locked && ageStatus==="declining" && React.createElement("span", {
        style:{ fontSize:"0.63rem", background:"#7f1d1d", color:"#fecaca", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
      }, "\u26A0\uFE0F DECLINING"),
      !cow.locked && ageStatus==="past_prime" && React.createElement("span", {
        style:{ fontSize:"0.63rem", background:"#78350f", color:"#fde68a", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
      }, "\u23F3 PAST PRIME")
    ),
    // Stud fee panel
    isBull && showFeePanel && feeCalc && React.createElement("div", {
      style:{ background:"#0a1208", border:"1px solid #1a4a28", borderRadius:8, padding:"10px 12px", marginTop:6 }
    },
      React.createElement("div", { style:{ color:"#84cc16", fontWeight:"bold", fontSize:"0.78rem", marginBottom:6 } },
        "\uD83D\uDC02 Stud Fee Breakdown"),
      feeCalc.reasons.length === 0
        ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem", marginBottom:6 } }, "Base rate \u2014 no bonuses yet")
        : feeCalc.reasons.map(function(r, i){
            return React.createElement("div", { key:i, style:{ color:"#b0c090", fontSize:"0.7rem", marginBottom:3 } }, r);
          }),
      React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.85rem", marginTop:6, borderTop:"1px solid #2a3a18", paddingTop:6 } },
        "Suggested fee: $" + feeCalc.fee.toLocaleString()),
      React.createElement("div", { style:{ display:"flex", gap:6, marginTop:8 } },
        cow.isCattleStud
          ? React.createElement(React.Fragment, null,
              React.createElement("button", {
                onClick:function(){
                  var newFee = prompt("Update stud fee for " + (cow.name||cow.breed) + ":", cow.cattleStudFee||feeCalc.fee);
                  if (newFee && !isNaN(Number(newFee)) && Number(newFee) > 0) {
                    onListCattleStud(cow.id, true, Number(newFee));
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#0a1a2a", border:"1px solid #60a5fa", color:"#60a5fa",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Update Fee"),
              React.createElement("button", {
                onClick:function(){
                  if (confirm("Remove " + (cow.name||cow.breed) + " from community stud listings?")) {
                    onListCattleStud(cow.id, false, 0);
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#1a0808", border:"1px solid #ef4444", color:"#ef4444",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Remove Listing")
            )
          : React.createElement(React.Fragment, null,
              React.createElement("button", {
                onClick:function(){
                  onListCattleStud(cow.id, true, feeCalc.fee);
                  setShowFeePanel(false);
                },
                style:{ flex:1, background:"#0a2a10", border:"1px solid #22c55e", color:"#22c55e",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem", fontWeight:"bold" }
              }, "List at $" + feeCalc.fee.toLocaleString()),
              React.createElement("button", {
                onClick:function(){
                  var custom = prompt("Enter custom stud fee:", feeCalc.fee);
                  if (custom && !isNaN(Number(custom)) && Number(custom) > 0) {
                    onListCattleStud(cow.id, true, Number(custom));
                    setShowFeePanel(false);
                  }
                },
                style:{ flex:1, background:"#1a1408", border:"1px solid #6b5038", color:"#b09070",
                  borderRadius:6, padding:"5px 0", cursor:"pointer", fontSize:"0.72rem" }
              }, "Custom Fee")
            )
      )
    ),
    showDNA && React.createElement(CattleDNAPanel, { cow:cow, onClose:function(){ setShowDNA(false); } })
  );
}

// ── Community Bulls Panel ───────────────────────────────────────────────────────────────

function CommunityBullsPanel(props) {
  var user = props.user;
  var money = props.money || 0;
  var onHireBull = props.onHireBull;

  var _cb1 = React.useState([]), bulls = _cb1[0], setBulls = _cb1[1];
  var _cb2 = React.useState(false), loading = _cb2[0], setLoading = _cb2[1];
  var _cb3 = React.useState("all"), filter = _cb3[0], setFilter = _cb3[1];
  var _cb4 = React.useState(null), peekBull = _cb4[0], setPeekBull = _cb4[1];
  var _cb5 = React.useState(null), confirmHire = _cb5[0], setConfirmHire = _cb5[1];

  function loadBulls() {
    if (!window.baSupabaseSync || !window.baSupabaseSync.fetchCattleStudDirectory) return;
    setLoading(true);
    var excludeId = user ? user.id : null;
    window.baSupabaseSync.fetchCattleStudDirectory(excludeId).then(function(rows) {
      setBulls(rows || []);
      setLoading(false);
    }).catch(function(e) {
      console.warn("[BA] fetchCattleStudDirectory failed", e);
      setLoading(false);
    });
  }

  React.useEffect(function() { loadBulls(); }, []);

  var filtered = bulls.filter(function(b) {
    if (filter === "all") return true;
    var breed = (b.breed || "").toLowerCase();
    var beefBreeds = ["angus","hereford","charolais","simmental","limousin","brahman","red angus","shorthorn","wagyu","highland"];
    var isBeef = beefBreeds.some(function(bb){ return breed.indexOf(bb) !== -1; });
    return filter === "beef" ? isBeef : !isBeef;
  });

  var filterBtn = function(key, label) {
    var active = filter === key;
    return React.createElement("button", {
      key: key,
      onClick: function(){ setFilter(key); },
      style: { background: active ? "#3a2810" : "transparent", border: "1px solid " + (active ? "#d4942a" : "#4a3a28"),
        color: active ? "#d4942a" : "#8a7055", borderRadius: 6, padding: "3px 10px", cursor: "pointer",
        fontSize: "0.7rem", fontWeight: active ? "bold" : "normal" }
    }, label);
  };

  function isRareCoat(color) {
    if (!color) return null;
    var c = color.toLowerCase();
    if (c.indexOf("brindle") !== -1) return { label: "Brindle", color: "#f97316", bg: "#1a0e00" };
    if (c.indexOf("roan") !== -1 || c.indexOf("smoky") !== -1 || c.indexOf("cream") !== -1) return { label: "Rare", color: "#22c55e", bg: "#0a1a08" };
    return null;
  }

  return React.createElement("div", { style: { marginTop: 8 } },
    // Header row
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" } },
      React.createElement("div", { style: { color: "#38bdf8", fontWeight: "bold", fontSize: "0.8rem" } },
        "\uD83C\uDF10 Community Bulls (" + bulls.length + ")"),
      filterBtn("all", "All"),
      filterBtn("beef", "\uD83E\uDD69 Beef"),
      filterBtn("dairy", "\uD83E\uDD5B Dairy"),
      React.createElement("div", { style: { flex: 1 } }),
      React.createElement("button", {
        onClick: loadBulls,
        style: { background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
          borderRadius: 6, padding: "3px 8px", cursor: "pointer", fontSize: "0.68rem" }
      }, "\u21BB Refresh")
    ),
    // Loading state
    loading && React.createElement("div", { style: { textAlign: "center", color: "#6b5038", padding: 20, fontSize: "0.8rem" } },
      "Loading community bulls..."),
    // Empty state
    !loading && filtered.length === 0 && React.createElement("div", {
      style: { textAlign: "center", color: "#6b5038", padding: 20, fontSize: "0.8rem" }
    }, bulls.length === 0 ? "No community bulls listed yet. List your bulls to be the first!"
      : "No " + filter + " bulls available."),
    // Bull rows
    !loading && filtered.length > 0 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
      filtered.map(function(b) {
        var isPeek = peekBull && peekBull.animal_id === b.animal_id;
        var rare = isRareCoat(b.coat_color);
        var ageYrs = b.age_months ? Math.round(b.age_months / 12 * 10) / 10 : 0;

        return React.createElement("div", { key: b.animal_id,
          style: { background: "#0e0c08", border: "1px solid #2a3a18", borderRadius: 8, padding: "10px 12px" }
        },
          // Main row
          React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 } },
            // Bull icon
            React.createElement("span", { style: { fontSize: "1.4rem", flexShrink: 0 } }, "\uD83D\uDC02"),
            // Info column
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              // Name + rare tag
              React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } },
                React.createElement("span", { style: { color: "#f0e6d3", fontWeight: "bold", fontSize: "0.88rem" } },
                  b.dog_name || b.breed || "Unknown Bull"),
                rare && React.createElement("span", { style: { background: rare.bg, border: "1px solid " + rare.color,
                  color: rare.color, borderRadius: 4, padding: "1px 5px", fontSize: "0.55rem", fontWeight: "bold" } }, rare.label)
              ),
              // Breed + coat + age + weight
              React.createElement("div", { style: { color: "#8a7055", fontSize: "0.7rem", marginTop: 2 } },
                (b.breed || "?") + " \u00B7 " + (b.coat_color || "?") + " \u00B7 " + ageYrs + " yrs" +
                (b.size ? " \u00B7 " + b.size + " lb" : "")),
              // Scores + titles
              React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" } },
                React.createElement("span", { style: { color: "#22c55e", fontSize: "0.68rem" } },
                  "\u2764\uFE0F " + (b.health_score || 0)),
                React.createElement("span", { style: { color: "#d4942a", fontSize: "0.68rem" } },
                  "\u26A1 " + (b.perf_score || 0)),
                b.coi != null && React.createElement("span", {
                  style: { color: (b.coi||0) < 5 ? "#22c55e" : (b.coi||0) < 20 ? "#d4942a" : "#ef4444", fontSize: "0.68rem" }
                }, "COI: " + (b.coi||0) + "%"),
                b.titles && React.createElement("span", { style: { color: "#c4956a", fontSize: "0.68rem" } }, b.titles)
              ),
              // Owner
              b.owner_name && React.createElement("div", { style: { color: "#4a3a28", fontSize: "0.62rem", marginTop: 2 } },
                "Owner: " + b.owner_name)
            ),
            // Right side buttons
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", flexShrink: 0 } },
              // Fee display
              React.createElement("div", { style: { color: "#22c55e", fontWeight: "bold", fontSize: "0.82rem" } },
                "$" + (b.fee || 0).toLocaleString()),
              // DNA Peek button
              React.createElement("button", {
                onClick: function() { setPeekBull(isPeek ? null : b); },
                style: { background: isPeek ? "#1a0a2e" : "#141008", border: "1px solid " + (isPeek ? "#7c3aed" : "#4a3a28"),
                  color: isPeek ? "#a78bfa" : "#8a7055", borderRadius: 6, padding: "3px 8px", cursor: "pointer", fontSize: "0.65rem" }
              }, "\uD83E\uDDEC DNA Peek"),
              // Hire button
              React.createElement("button", {
                onClick: function() { setConfirmHire(b); },
                style: { background: "#0a2a10", border: "1px solid #22c55e", color: "#22c55e",
                  borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: "0.7rem", fontWeight: "bold" }
              }, "\uD83E\uDD1D Hire")
            )
          ),
          // DNA Peek panel (cattle QTLs)
          isPeek && React.createElement("div", {
            style: { marginTop: 8, background: "#1a0a1e", border: "1px solid #3a2a5a", borderRadius: 8, padding: "10px 12px" }
          },
            React.createElement("div", { style: { color: "#a78bfa", fontWeight: "bold", fontSize: "0.75rem", marginBottom: 6 } },
              "\uD83E\uDDEC DNA Peek \u2014 " + (b.dog_name || b.breed || "Bull")),
            (function() {
              var genome = b.genome;
              if (genome && typeof genome === "string") { try { genome = JSON.parse(genome); } catch(e) { genome = null; } }
              if (!genome) return React.createElement("div", { style: { color: "#6b5038", fontSize: "0.72rem" } }, "No genome data available");
              return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } },
                React.createElement("div", { style: { display: "flex", gap: 10, fontSize: "0.7rem", marginBottom: 4 } },
                  React.createElement("span", { style: { color: "#22c55e" } }, "\u2764\uFE0F Health: " + (b.health_score||0)),
                  React.createElement("span", { style: { color: "#d4942a" } }, "\u26A1 Perf: " + (b.perf_score||0)),
                  React.createElement("span", { style: { color: (b.coi||0)<5?"#22c55e":(b.coi||0)<20?"#d4942a":"#ef4444" } },
                    "COI: " + (b.coi||0) + "%")
                ),
                genome.perf && CATTLE_PERF_QTLS.map(function(q) {
                  var info = CATTLE_PERF_QTL_INFO[q];
                  var v = genome.perf[q] || [3,3];
                  var avg = (v[0]+v[1])/2;
                  var pct = Math.round((avg/5)*100);
                  var col = avg >= 4 ? "#d4942a" : avg >= 3 ? "#22c55e" : "#4a5568";
                  return React.createElement("div", { key: q, style: { display: "flex", alignItems: "center", gap: 5 } },
                    React.createElement("span", { style: { fontSize: "0.6rem", width: 60, color: col, flexShrink: 0 } },
                      (info ? info.icon : "") + " " + q),
                    React.createElement("div", { style: { flex: 1, background: "#2e2218", borderRadius: 2, height: 4, overflow: "hidden" } },
                      React.createElement("div", { style: { background: col, width: pct + "%", height: "100%" } })
                    ),
                    React.createElement("span", { style: { fontSize: "0.6rem", color: col, width: 20, textAlign: "right", flexShrink: 0 } },
                      avg.toFixed(1))
                  );
                }),
                genome.coat && React.createElement("div", { style: { color: "#b09070", fontSize: "0.65rem", marginTop: 4 } },
                  "Coat loci: " + Object.entries(genome.coat).map(function(e) { return e[0] + "(" + e[1].join("") + ")"; }).join(" "))
              );
            })()
          )
        );
      })
    ),
    // Hire confirmation modal
    confirmHire && React.createElement("div", {
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "center" },
      onClick: function(e) { if (e.target === e.currentTarget) setConfirmHire(null); }
    },
      React.createElement("div", {
        style: { background: "#1a1410", border: "1px solid #3a2810", borderRadius: 12,
          padding: "20px 24px", maxWidth: 380, width: "90%" }
      },
        React.createElement("div", { style: { color: "#f0e6d3", fontWeight: "bold", fontSize: "1rem", marginBottom: 10 } },
          "\uD83E\uDD1D Hire Community Bull"),
        React.createElement("div", { style: { color: "#e8d0a8", fontSize: "0.85rem", marginBottom: 6 } },
          (confirmHire.dog_name || confirmHire.breed || "Bull") + " \u2014 " + (confirmHire.breed || "")),
        React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", marginBottom: 4 } },
          "\u2764\uFE0F " + (confirmHire.health_score||0) + "  \u26A1 " + (confirmHire.perf_score||0) +
          "  COI: " + (confirmHire.coi||0) + "%"),
        React.createElement("div", { style: { color: "#22c55e", fontWeight: "bold", fontSize: "1.1rem", margin: "12px 0" } },
          "Fee: $" + (confirmHire.fee||0).toLocaleString()),
        money < (confirmHire.fee||0)
          ? React.createElement("div", { style: { color: "#ef4444", fontSize: "0.82rem", marginBottom: 10 } },
              "Not enough money! You have $" + money.toLocaleString())
          : React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", marginBottom: 10 } },
              "This bull will be used for one breeding cycle with your herd. Your balance: $" + money.toLocaleString()),
        React.createElement("div", { style: { display: "flex", gap: 8 } },
          money >= (confirmHire.fee||0) && React.createElement("button", {
            onClick: function() {
              if (onHireBull) onHireBull(confirmHire);
              setConfirmHire(null);
            },
            style: { flex: 1, background: "#0a2a10", border: "1px solid #22c55e", color: "#22c55e",
              borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: "0.85rem", fontWeight: "bold" }
          }, "\u2705 Confirm Hire"),
          React.createElement("button", {
            onClick: function() { setConfirmHire(null); },
            style: { flex: 1, background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
              borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: "0.82rem" }
          }, "Cancel")
        )
      )
    )
  );
}


// ── Cattle View (main tab) ───────────────────────────────────────────────────

function CattleView(props) {
  var cattle = props.cattle || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var onShowsOpen = props.onShowsOpen;
  var initialFilter = props.initialFilter || "all";
  var naturalMatingOn = props.naturalMatingOn || false;
  var onToggleNaturalMating = props.onToggleNaturalMating;
  var onListCattleStud = props.onListCattleStud;
  var pendingCalves = props.pendingCalves || [];
  var user = props.user;
  var money = props.money || 0;
  var onHireBull = props.onHireBull;
  var _cbOpen = React.useState(false), communityBullsOpen = _cbOpen[0], setCommunityBullsOpen = _cbOpen[1];

  var _f = React.useState(initialFilter), filterType = _f[0], setFilterType = _f[1];
  React.useEffect(function(){ setFilterType(initialFilter); }, [initialFilter]);
  var _v = React.useState("grid"), viewMode = _v[0], setViewMode = _v[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];

  var bulls = cattle.filter(function(c){ return c.sex==="M" && !c.retiredLivestock; });
  var cows = cattle.filter(function(c){ return c.sex==="F" && !c.retiredLivestock; });
  var pregnantCows = cows.filter(function(c){ return c.pregnantUntil && c.pregnantUntil > Date.now(); });
  var beefCount = cattle.filter(function(c){ return c.type==="beef"; }).length;
  var dairyCount = cattle.filter(function(c){ return c.type==="dairy"; }).length;
  var beefBulls = bulls.filter(function(b){ return b.type==="beef"; });
  var dairyBulls = bulls.filter(function(b){ return b.type==="dairy"; });
  var topBeefBull = beefBulls.slice().sort(function(a,b){ return (b.perfScore||0)-(a.perfScore||0); })[0] || null;
  var topDairyBull = dairyBulls.slice().sort(function(a,b){ return (b.perfScore||0)-(a.perfScore||0); })[0] || null;
  var beefCows = cows.filter(function(c){ return c.type==="beef"; });
  var dairyCows = cows.filter(function(c){ return c.type==="dairy"; });

  var filtered = filterType==="all" ? cattle :
    cattle.filter(function(c){ return c.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var cowPending = pendingCalves.filter(function(pc){ return pc.species==="cow"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.3rem" } }, "\uD83D\uDC04"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "Cattle Herd"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem" } },
            cattle.length+" head \u00B7 "+bulls.length+" bull"+(bulls.length!==1?"s":"")+
            " \u00B7 "+cows.length+" cow"+(cows.length!==1?"s":"")+
            " \u00B7 "+beefCount+" beef \u00B7 "+dairyCount+" dairy")
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        cattle.length > 0 && onShowsOpen && React.createElement("button", {
          onClick:onShowsOpen,
          style:{ background:"#2a1e08", border:"1px solid #d4942a", color:"#d4942a",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83C\uDFC6 County Fair"),
        React.createElement("button", {
          onClick:onClose,
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem" }
        }, "\u2715 Close")
      )
    ),

    // Natural Mating Control Panel
    React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #2a1e10",
      background: naturalMatingOn ? "#1a1a08" : "#141008", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: naturalMatingOn ? 8 : 0 } },
        React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
          React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
          React.createElement("div", null,
            React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
            React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } },
              naturalMatingOn ? "Your bull"+(bulls.length!==1?"s":"")+" will breed with eligible cows automatically"
                : "Turn on to let your bull"+(bulls.length!==1?"s":"")+" cover the herd naturally")
          )
        ),
        // Toggle switch
        React.createElement("div", {
          onClick: function() {
            if (!naturalMatingOn && bulls.length === 0) { alert("You need at least one bull to enable natural mating!"); return; }
            if (!naturalMatingOn && cows.length === 0) { alert("You need at least one cow to enable natural mating!"); return; }
            if (onToggleNaturalMating) onToggleNaturalMating(!naturalMatingOn);
          },
          style:{ width:48, height:26, borderRadius:13, cursor:"pointer",
            background: naturalMatingOn ? "#22c55e" : "#3a3020",
            border: "2px solid " + (naturalMatingOn ? "#22c55e" : "#6b5038"),
            position:"relative", transition:"background 0.2s", flexShrink:0 }
        },
          React.createElement("div", {
            style:{ width:20, height:20, borderRadius:10,
              background: naturalMatingOn ? "#fff" : "#6b5038",
              position:"absolute", top:1, left: naturalMatingOn ? 24 : 2,
              transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.3)" }
          })
        )
      ),

      // Status panel when natural mating is on
      naturalMatingOn && React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        // Beef herd bull
        topBeefBull && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#fca5a5", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83E\uDD69 Beef Herd Bull"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, topBeefBull.name || topBeefBull.breed),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            topBeefBull.breed + " \u00B7 \u2764\uFE0F" + (topBeefBull.healthScore||0) + " \u26A1" + (topBeefBull.perfScore||0) +
            " \u00B7 covers " + beefCows.length + " cow" + (beefCows.length!==1?"s":"")),
          topBeefBull.genome && topBeefBull.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3, marginTop:4 } },
            ["MILK","GROWTH","MUSCLE","TEMP","HARDY"].map(function(q) {
              var v = topBeefBull.genome.perf[q] || [3,3];
              var avg = (v[0]+v[1])/2;
              var icons = {MILK:"\uD83E\uDD5B",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83D\uDCAA",TEMP:"\uD83E\uDDE0",HARDY:"\uD83D\uDEE1\uFE0F"};
              var col = avg>=4 ? "#d4942a" : avg>=3 ? "#22c55e" : "#4a5568";
              return React.createElement("div", { key:q, style:{ flex:1, textAlign:"center" } },
                React.createElement("div", { style:{ fontSize:"0.5rem", color:col } }, icons[q]||q),
                React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:Math.round((avg/5)*100)+"%", height:"100%" } })
                )
              );
            })
          )
        ),
        // No beef bull warning
        !topBeefBull && beefCows.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Beef Bull"),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            beefCows.length + " beef cow"+(beefCows.length!==1?"s":"")+" won\u2019t breed without a beef bull")
        ),
        // Dairy herd bull
        topDairyBull && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #1a4a6a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#7dd3fc", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83E\uDD5B Dairy Herd Bull"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, topDairyBull.name || topDairyBull.breed),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            topDairyBull.breed + " \u00B7 \u2764\uFE0F" + (topDairyBull.healthScore||0) + " \u26A1" + (topDairyBull.perfScore||0) +
            " \u00B7 covers " + dairyCows.length + " cow" + (dairyCows.length!==1?"s":"")),
          topDairyBull.genome && topDairyBull.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3, marginTop:4 } },
            ["MILK","GROWTH","MUSCLE","TEMP","HARDY"].map(function(q) {
              var v = topDairyBull.genome.perf[q] || [3,3];
              var avg = (v[0]+v[1])/2;
              var icons = {MILK:"\uD83E\uDD5B",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83D\uDCAA",TEMP:"\uD83E\uDDE0",HARDY:"\uD83D\uDEE1\uFE0F"};
              var col = avg>=4 ? "#d4942a" : avg>=3 ? "#22c55e" : "#4a5568";
              return React.createElement("div", { key:q, style:{ flex:1, textAlign:"center" } },
                React.createElement("div", { style:{ fontSize:"0.5rem", color:col } }, icons[q]||q),
                React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:Math.round((avg/5)*100)+"%", height:"100%" } })
                )
              );
            })
          )
        ),
        // No dairy bull warning
        !topDairyBull && dairyCows.length > 0 && React.createElement("div", { style:{ background:"#0a0a1a", border:"1px solid #1a4a6a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Dairy Bull"),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            dairyCows.length + " dairy cow"+(dairyCows.length!==1?"s":"")+" won\u2019t breed without a dairy bull")
        ),
        // Herd stats
        React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Herd Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + bulls.length + " bull" + (bulls.length!==1?"s":"") +
              " (" + beefBulls.length + " beef, " + dairyBulls.length + " dairy)"),
            React.createElement("div", null, "\u2640 " + cows.length + " cow" + (cows.length!==1?"s":"")),
            React.createElement("div", { style:{ color: pregnantCows.length>0 ? "#f472b6" : "#6b5038" } },
              "\uD83E\uDD30 " + pregnantCows.length + " pregnant")
          )
        ),
        // Pending births
        cowPending.length > 0 && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Births"),
          cowPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83D\uDC04 " + pc.damName + " \u2014 " + pc.offspring.length + " calf" +
              (pc.offspring.length!==1?"ves":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    // Browse Community Bulls (collapsible, only when natural mating is on)
    naturalMatingOn && React.createElement("div", {
      style: { margin: "0 16px 8px", background: "#0a0e14", border: "1px solid #1a3a5a", borderRadius: 8, overflow: "hidden" }
    },
      React.createElement("button", {
        onClick: function() { setCommunityBullsOpen(function(v){ return !v; }); },
        style: { width: "100%", background: "transparent", border: "none", color: "#38bdf8",
          padding: "8px 12px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "bold",
          display: "flex", alignItems: "center", gap: 6, textAlign: "left" }
      },
        React.createElement("span", { style: { transform: communityBullsOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s", display: "inline-block" } }, "\u25B6"),
        "Browse Community Bulls"
      ),
      communityBullsOpen && React.createElement("div", { style: { padding: "0 12px 10px" } },
        React.createElement(CommunityBullsPanel, { user: user, money: money, onHireBull: onHireBull })
      )
    ),

    // Filter bar
    React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:8, padding:"8px 16px",
      borderBottom:"1px solid #1a1610", flexShrink:0 } },
      ["all","beef","dairy"].map(function(f) {
        var active = filterType===f;
        return React.createElement("button", { key:f, onClick:function(){ setFilterType(f); },
          style:{ background:active?"#3a2810":"transparent", border:"1px solid "+(active?"#d4942a":"#4a3a28"),
            color:active?"#d4942a":"#8a7055", borderRadius:6, padding:"4px 12px", cursor:"pointer",
            fontSize:"0.75rem", fontWeight:active?"bold":"normal" }
        }, f==="all"?"All ("+cattle.length+")":f==="beef"?"\uD83E\uDD69 Beef ("+beefCount+")":"\uD83E\uDD5B Dairy ("+dairyCount+")");
      }),
      React.createElement("div", { style:{ flex:1 } }),
      React.createElement("button", { onClick:function(){ setViewMode(viewMode==="grid"?"list":"grid"); },
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
      }, viewMode==="grid"?"\u2630 List":"\u25A6 Grid"),
      viewMode==="list" && React.createElement("select", {
        value:listSort, onChange:function(e){ setListSort(e.target.value); },
        style:{ background:"#141008", border:"1px solid #4a3a28", color:"#e8d0a8",
          borderRadius:6, padding:"4px 8px", fontSize:"0.72rem" }
      },
        React.createElement("option", { value:"name" }, "Name"),
        React.createElement("option", { value:"breed" }, "Breed"),
        React.createElement("option", { value:"health" }, "Health"),
        React.createElement("option", { value:"perf" }, "Perf"),
        React.createElement("option", { value:"type" }, "Type")
      )
    ),
    // Content
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:16 } },
      cattle.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"60px 0" } },
            React.createElement("div", { style:{ fontSize:"2rem", marginBottom:10 } }, "\uD83D\uDC04"),
            React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.85rem" } },
              "No cattle yet \u2014 buy some from the Livestock Market!")
          )
        : viewMode==="grid"
          ? React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:12 } },
              sorted.map(function(c) {
                return React.createElement(CattleCard, { key:c.id, cow:c, onSell:onSell, onRename:onRename, onListCattleStud:onListCattleStud, onLock:props.onLock });
              })
            )
          : React.createElement("table", { style:{ width:"100%", borderCollapse:"collapse" } },
              React.createElement("thead", null,
                React.createElement("tr", null,
                  ["","Name","Breed","Color","Type","Health","Perf","Age",""].map(function(h) {
                    return React.createElement("th", { key:h, style:{ padding:"5px 8px", textAlign:"left",
                      fontSize:"0.68rem", fontWeight:"bold", color:"#6b5038",
                      borderBottom:"1px solid #2a1e10", background:"#0e0c08" } }, h);
                  })
                )
              ),
              React.createElement("tbody", null,
                sorted.map(function(c) {
                  var ageYrs = Math.round((c.ageMonths||0)/12*10)/10;
                  var isPreg = !!(c.pregnantUntil && c.pregnantUntil > Date.now());
                  var pregDays = isPreg ? Math.max(0, Math.ceil((c.pregnantUntil - Date.now())/(24*60*60*1000))) : 0;
                  return React.createElement("tr", { key:c.id,
                    style:{ borderBottom:"1px solid #1a1610", cursor:"default" }
                  },
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.75rem", color:c.sex==="M"?"#60a5fa":"#f472b6" } },
                      c.sex==="M"?"\u2642":"\u2640"),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.78rem", color:"#f0e6d3", fontWeight:"bold" } },
                      c.name||c.breed||"(unnamed)",
                      isPreg && React.createElement("span", { style:{ marginLeft:5, fontSize:"0.6rem", color:"#f472b6" } },
                        "\uD83E\uDD30 "+pregDays+"d")
                    ),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.68rem", color:"#8a7055" } }, c.breed),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.68rem", color:"#c4956a" } }, c.coatColor||""),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.68rem", color:c.type==="dairy"?"#7dd3fc":"#fca5a5" } },
                      c.type==="dairy"?"Dairy":"Beef"),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.72rem", color:"#22c55e", fontWeight:"bold", textAlign:"right" } }, c.healthScore||0),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.72rem", color:"#d4942a", fontWeight:"bold", textAlign:"right" } }, c.perfScore||0),
                    React.createElement("td", { style:{ padding:"5px 8px", fontSize:"0.68rem", color:"#8a7055", textAlign:"right" } }, ageYrs+"y"),
                    React.createElement("td", { style:{ padding:"5px 8px" },
                      onClick:function(e){ e.stopPropagation(); }
                    },
                      React.createElement("button", {
                        onClick:function(e){ e.stopPropagation(); if(onSell) onSell(c); },
                        style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444",
                          borderRadius:4, padding:"2px 8px", cursor:"pointer", fontSize:"0.62rem" }
                      }, "\uD83D\uDCB0 Sell")
                    )
                  );
                })
              )
            )
    )
  );
}


// ══════════════════════════════════════════════════════════════════════════════
// SHEEP SHOW SYSTEM
// ══════════════════════════════════════════════════════════════════════════════

var SHEEP_SHOW_CLASSES = [
  { key:"wool_breed", label:"Best of Breed (Wool)", emoji:"\uD83E\uDDF6", type:"wool", purebredOnly:true,
    desc:"Purebred wool sheep judged on fleece quality, crimp, yield, and breed standard.",
    qtlWeights:{ WOOL:0.45, GROWTH:0.05, MUSCLE:0.05, TEMP:0.20, HARDY:0.15, MILK:0.0 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"meat_breed", label:"Best of Breed (Meat)", emoji:"\uD83E\uDD69", type:"meat", purebredOnly:true,
    desc:"Purebred meat sheep judged on muscling, growth rate, and carcass quality.",
    qtlWeights:{ WOOL:0.0, GROWTH:0.30, MUSCLE:0.35, TEMP:0.20, HARDY:0.15, MILK:0.0 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"dual_breed", label:"Best of Breed (Dual)", emoji:"\u2696\uFE0F", type:"dual", purebredOnly:true,
    desc:"Purebred dual-purpose sheep judged on wool quality, growth, and overall balance.",
    qtlWeights:{ WOOL:0.25, GROWTH:0.20, MUSCLE:0.15, TEMP:0.15, HARDY:0.15, MILK:0.10 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  }
];

var SHEEP_SHOW_LEVELS = ["county","state","national"];
var SHEEP_SHOW_LEVEL_LABELS = { county:"County Fair", state:"State Fair", national:"National" };

var SHEEP_SHOW_TITLES = {
  wool_breed: {
    county:  { key:"SWB", label:"County Best Wool Sheep",    prefix:"SWB " },
    state:   { key:"SSWB", label:"State Best Wool Sheep",   prefix:"SSWB " },
    national:{ key:"SWCh", label:"National Wool Champion",  prefix:"SWCh. " }
  },
  meat_breed: {
    county:  { key:"SMB", label:"County Best Meat Sheep",    prefix:"SMB " },
    state:   { key:"SSMB", label:"State Best Meat Sheep",   prefix:"SSMB " },
    national:{ key:"SMCh", label:"National Meat Champion",  prefix:"SMCh. " }
  },
  dual_breed: {
    county:  { key:"SDB", label:"County Best Dual Sheep",    prefix:"SDB " },
    state:   { key:"SSDB", label:"State Best Dual Sheep",   prefix:"SSDB " },
    national:{ key:"SDCh", label:"National Dual Champion",  prefix:"SDCh. " }
  }
};

function getSheepShowLevel(animal, classKey) {
  return (animal.sheepShowLevels && animal.sheepShowLevels[classKey]) || "county";
}

function calcSheepShowScore(animal, classKey) {
  if (!animal || !animal.genome) return 0;
  if (typeof canShowByAge === "function" && !canShowByAge(animal.ageMonths || 0, "sheep")) return 0;
  if (typeof isAnimalLocked === "function" && isAnimalLocked(animal)) return 0;

  var cls = SHEEP_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return 0;
  var hs = animal.healthScore || 50;
  var perf = animal.genome.perf || {};
  var weights = cls.qtlWeights;
  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];

  var qtlScore = 0;
  perfQtls.forEach(function(q) {
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg/5)*100*(weights[q]||0);
  });

  var weightBonus = 0;
  if (classKey === "meat_breed" && animal.weightLbs) {
    weightBonus = Math.min(8, (animal.weightLbs - 120) / 40);
  }

  var woolBonus = 0;
  if (classKey === "wool_breed" && animal.shearYield) {
    woolBonus = Math.min(8, animal.shearYield / 2);
  }

  var age = animal.ageMonths || 0;
  var ageMod = 1.0;
  if (age < 8) ageMod = 0.4;
  else if (age < 12) ageMod = 0.65;
  else if (age < 18) ageMod = 0.85;
  else if (age <= 72) ageMod = 1.0;
  else if (age <= 108) ageMod = 0.85;
  else ageMod = 0.65;

  var coi = animal.coi || 0;
  var coiPenalty = coi > 10 ? Math.min(12, (coi-10)*0.5) : 0;

  var raw = (hs*0.4 + qtlScore*0.6)*ageMod - coiPenalty + weightBonus + woolBonus;
  var variance = (Math.random()-0.5)*0.14;
  return Math.max(0, Math.min(100, raw*(1+variance)));
}

function runSheepShow(animal, classKey) {
  var cls = SHEEP_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return null;
  var level = getSheepShowLevel(animal, classKey);

  if (cls.purebredOnly && animal.breed === "Crossbred") return { error:"Best of Breed is purebreds only." };
  if (animal.retiredLivestock) return { error:"Retired sheep cannot compete." };
  if ((animal.ageMonths||0) < 8) return { error:"Must be at least 8 months old to show." };
  if (cls.type && animal.type !== cls.type) return { error:"This class is for " + cls.type + " sheep only." };

  var playerScore = calcSheepShowScore(animal, classKey);
  var fieldSize = (cls.fieldSize[level]||8) - 1;
  var aiNames = ["Willow Creek","Sunny Meadow","Iron Hill","Golden Valley","Oak Ridge",
    "Crystal Spring","Rocky Top","Cedar Grove","Silver Brook","Pine Haven","Maple Leaf",
    "Riverside","Sunset Ridge","Hidden Hollow","Mountain View","Blue Sky","Stonewall","Clover Field"];
  var aiSuffixes = ["Farm","Flock","Ranch","Acres","Homestead","Woolens"];
  var competitors = [];
  var baseMean = { county:46, state:60, national:72 }[level] || 50;
  var spread = { county:20, state:14, national:10 }[level] || 18;
  for (var i = 0; i < fieldSize; i++) {
    var score = baseMean + (Math.random()-0.5)*spread*2;
    var aiName = aiNames[i % aiNames.length] + " " + aiSuffixes[Math.floor(Math.random()*aiSuffixes.length)];
    competitors.push({ name:aiName, isAI:true, score:Math.max(20, Math.min(98, score)) });
  }
  competitors.push({ name:animal.name||animal.breed, isAI:false, score:playerScore });
  competitors.sort(function(a,b){ return b.score - a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; }) + 1;
  var entryFee = cls.entryFee[level] || 30;
  var purse = cls.purse[level] || [0,0,0];
  var prize = placement===1?purse[0] : placement===2?purse[1] : placement===3?purse[2] : 0;
  var pts = placement===1?{county:3,state:6,national:12}[level] :
            placement===2?{county:2,state:4,national:8}[level] :
            placement===3?{county:1,state:2,national:4}[level] : 0;

  var promoted = false;
  var nextLevel = null;
  if (placement <= 3) {
    var levelIdx = SHEEP_SHOW_LEVELS.indexOf(level);
    if (levelIdx < SHEEP_SHOW_LEVELS.length - 1) {
      nextLevel = SHEEP_SHOW_LEVELS[levelIdx + 1];
      promoted = true;
    }
  }

  var titleEarned = null;
  if (placement === 1) {
    var typeTitles = SHEEP_SHOW_TITLES[classKey];
    if (typeTitles && typeTitles[level]) titleEarned = typeTitles[level];
  }

  return {
    placement:placement, totalEntries:cls.fieldSize[level]||8,
    prize:prize, entryFee:entryFee, net:prize-entryFee,
    playerScore:Math.round(playerScore*10)/10, competitors:competitors,
    classKey:classKey, level:level, promoted:promoted, nextLevel:nextLevel,
    titleEarned:titleEarned, showPoints:pts
  };
}

// ── Sheep Shows View ─────────────────────────────────────────────────────────
function SheepShowsView(props) {
  var sheep = props.sheep || [];
  var money = props.money || 0;
  var onMoneyChange = props.onMoneyChange;
  var onSheepUpdate = props.onSheepUpdate;
  var onLog = props.onLog;
  var onClose = props.onClose;
  var lastShowDates = props.lastShowDates || {};
  var onShowDatesUpdate = props.onShowDatesUpdate;

  var _ct = React.useState(SHEEP_SHOW_CLASSES[0].key), selectedClass = _ct[0], setSelectedClass = _ct[1];
  var _sg = React.useState(null), selectedSheep = _sg[0], setSelectedSheep = _sg[1];
  var _lr = React.useState(null), lastResult = _lr[0], setLastResult = _lr[1];

  var cls = SHEEP_SHOW_CLASSES.find(function(c){ return c.key===selectedClass; });

  var eligible = sheep.filter(function(a) {
    if (!a.genome) return false;
    if (a.retiredLivestock) return false;
    if ((a.ageMonths||0) < 8) return false;
    if (a.breed === "Crossbred" && cls && cls.purebredOnly) return false;
    if (cls && cls.type && a.type !== cls.type) return false;
    if (typeof canShowByAge === "function" && !canShowByAge(a.ageMonths||0,"sheep")) return false;
    if (typeof isAnimalLocked === "function" && isAnimalLocked(a)) return false;
    return true;
  });

  var COOLDOWN_MS = 12*60*60*1000;

  function enterShow(animal) {
    if (!animal || !cls) return;
    var level = getSheepShowLevel(animal, selectedClass);
    var fee = cls.entryFee[level] || 30;
    if (money < fee) { alert("Not enough money! Entry fee: $"+fee); return; }
    var cooldownKey = animal.id+"_"+selectedClass;
    var lastDate = lastShowDates[cooldownKey] || 0;
    if (Date.now() - lastDate < COOLDOWN_MS) {
      var hrs = Math.ceil((COOLDOWN_MS-(Date.now()-lastDate))/3600000);
      alert("This sheep needs to rest. Can show again in ~"+hrs+" hour(s).");
      return;
    }
    var result = runSheepShow(animal, selectedClass);
    if (!result) return;
    if (result.error) { alert(result.error); return; }
    onMoneyChange(function(m){ return m - fee + result.prize; });
    if (onShowDatesUpdate) {
      var nd = Object.assign({}, lastShowDates);
      nd[cooldownKey] = Date.now();
      onShowDatesUpdate(nd);
    }
    var updated = Object.assign({}, animal);
    updated.sheepShowPoints = (updated.sheepShowPoints||0) + result.showPoints;
    if (result.promoted && result.nextLevel) {
      var lvls = Object.assign({}, updated.sheepShowLevels||{});
      lvls[selectedClass] = result.nextLevel;
      updated.sheepShowLevels = lvls;
    }
    if (result.titleEarned) {
      var titles = (updated.sheepEarnedTitles||[]).slice();
      if (titles.indexOf(result.titleEarned.key)===-1) titles.push(result.titleEarned.key);
      updated.sheepEarnedTitles = titles;
    }
    if (onSheepUpdate) onSheepUpdate(updated);
    if (onLog) onLog({ id:Date.now(), type:"show",
      name:"\uD83D\uDC11 "+animal.name+" placed #"+result.placement+" in "+cls.label+" ("+SHEEP_SHOW_LEVEL_LABELS[level]+") \u2014 "+(result.net>=0?"+":"")+"$"+result.net,
      date:new Date().toLocaleString() });
    setLastResult(result);
  }

  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];
  var perfInfo = typeof SHEEP_PERF_QTL_INFO !== "undefined" ? SHEEP_PERF_QTL_INFO : {};

  return React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#141008", zIndex:80, display:"flex", flexDirection:"column", overflow:"hidden" }
  },
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
      React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83C\uDFC6 Sheep County Fair"),
      React.createElement("button", { onClick:onClose, style:{ background:"transparent", border:"1px solid #4a3a28", color:"#b09070", borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" } }, "\u2190 Back")
    ),
    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0, flexWrap:"wrap" } },
      SHEEP_SHOW_CLASSES.map(function(c) {
        var active = selectedClass===c.key;
        return React.createElement("button", { key:c.key, onClick:function(){ setSelectedClass(c.key); setSelectedSheep(null); setLastResult(null); },
          style:{ background:active?"#2a1e10":"transparent", border:"1px solid "+(active?"#d4942a":"#4a3a28"),
            color:active?"#d4942a":"#6b5038", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontSize:"0.75rem", fontWeight:active?"bold":"normal" }
        }, c.emoji+" "+c.label);
      })
    ),
    cls && React.createElement("div", { style:{ padding:"8px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
      React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, cls.desc),
      React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem", marginTop:4 } },
        eligible.length+" eligible \u00B7 Entry: $"+(cls.entryFee.county||30)+" (County) / $"+(cls.entryFee.state||90)+" (State) / $"+(cls.entryFee.national||250)+" (National)")
    ),
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12, display:"flex", gap:12, flexWrap:"wrap", alignContent:"flex-start" } },
      eligible.length===0 && React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", width:"100%", padding:"30px 0" } },
        "No eligible sheep for this class. Purebred "+cls.type+" sheep required, 8+ months old."),
      eligible.map(function(a) {
        var sel = selectedSheep && selectedSheep.id===a.id;
        var level = getSheepShowLevel(a, selectedClass);
        return React.createElement("div", { key:a.id,
          onClick:function(){ setSelectedSheep(a); setLastResult(null); },
          style:{ background:sel?"#1a2a08":"#0e0c08", border:"1px solid "+(sel?"#84cc16":"#2a1e10"),
            borderRadius:8, padding:"10px 12px", cursor:"pointer", width:220, flexShrink:0 }
        },
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, a.name||a.breed),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } }, a.breed+" \u00B7 "+(a.coatColor||"")+" \u00B7 "+SHEEP_SHOW_LEVEL_LABELS[level]),
          React.createElement("div", { style:{ display:"flex", gap:6, marginTop:4 } },
            React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.68rem" } }, "\u2764\uFE0F"+a.healthScore),
            React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.68rem" } }, "\u26A1"+a.perfScore),
            (a.sheepShowPoints||0)>0 && React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.68rem" } }, "\u2B50"+(a.sheepShowPoints||0)+"pts")
          ),
          a.genome && a.genome.perf && React.createElement("div", { style:{ display:"flex", gap:2, marginTop:4 } },
            perfQtls.map(function(q) {
              var v = a.genome.perf[q]||[3,3];
              var avg = (v[0]+v[1])/2;
              var pct = Math.round((avg/5)*100);
              var w = cls.qtlWeights[q]||0;
              var col = w>=0.3?"#d4942a":w>=0.15?"#22c55e":"#4a5568";
              return React.createElement("div", { key:q, style:{ flex:1 } },
                React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
                )
              );
            })
          )
        );
      }),
      selectedSheep && React.createElement("div", { style:{ width:"100%", maxWidth:500, background:"#0e0c08", border:"1px solid #2a1e10", borderRadius:10, padding:16 } },
        React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.9rem", marginBottom:8 } },
          "\uD83D\uDC11 "+selectedSheep.name+" \u2014 "+(cls?cls.label:"")),
        React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem", marginBottom:8 } },
          "Level: "+SHEEP_SHOW_LEVEL_LABELS[getSheepShowLevel(selectedSheep, selectedClass)]+" \u00B7 Entry fee: $"+(cls?cls.entryFee[getSheepShowLevel(selectedSheep, selectedClass)]:30)),
        React.createElement("button", {
          onClick:function(){ if(selectedSheep) enterShow(selectedSheep); },
          disabled:!selectedSheep,
          style:{ background:"#1a3a0a", border:"1px solid #84cc16", color:"#84cc16", borderRadius:8,
            padding:"8px 20px", cursor:"pointer", fontWeight:"bold", fontSize:"0.85rem" }
        }, "\uD83C\uDFC6 Enter Show"),
        lastResult && React.createElement("div", { style:{ marginTop:12, background:"#141008", border:"1px solid #2a1e10", borderRadius:8, padding:12 } },
          React.createElement("div", { style:{ color:lastResult.placement<=3?"#22c55e":"#ef4444", fontWeight:"bold", fontSize:"0.9rem" } },
            "#"+lastResult.placement+" of "+lastResult.totalEntries+(lastResult.placement===1?" \uD83C\uDFC6":lastResult.placement<=3?" \uD83C\uDFC5":"")),
          React.createElement("div", { style:{ color:"#e8d0a8", fontSize:"0.75rem", marginTop:4 } },
            "Score: "+lastResult.playerScore+" \u00B7 "+(lastResult.net>=0?"+":"")+("$"+lastResult.net)+(lastResult.showPoints?" \u00B7 +"+lastResult.showPoints+" pts":"")),
          lastResult.titleEarned && React.createElement("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"0.78rem", marginTop:4 } },
            "\uD83C\uDFC6 Title earned: "+lastResult.titleEarned.label),
          lastResult.promoted && React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.72rem", marginTop:4 } },
            "\u2B06\uFE0F Promoted to "+SHEEP_SHOW_LEVEL_LABELS[lastResult.nextLevel]+"!"),
          React.createElement("div", { style:{ marginTop:8 } },
            lastResult.competitors.slice(0,5).map(function(c, idx) {
              return React.createElement("div", { key:idx, style:{ display:"flex", justifyContent:"space-between", padding:"2px 0",
                color:c.isAI?"#6b5038":"#d4942a", fontSize:"0.68rem", fontWeight:c.isAI?"normal":"bold" } },
                React.createElement("span", null, "#"+(idx+1)+" "+c.name),
                React.createElement("span", null, Math.round(c.score*10)/10)
              );
            })
          )
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SHEEP STUD FEE CALCULATOR
// ══════════════════════════════════════════════════════════════════════════════

function calcSuggestedRamFee(ram) {
  if (!ram || ram.sex !== "M") return { fee: 100, reasons: [] };
  var breedDef = (typeof SHEEP_BREED_DEFS !== "undefined") ? SHEEP_BREED_DEFS.find(function(b){ return b.name === ram.breed; }) : null;
  var sheepType = ram.type || (breedDef ? breedDef.type : "dual");

  var baseFees = { wool: 180, meat: 150, dual: 160 };
  var fee = baseFees[sheepType] || 150;
  var reasons = [];

  var titles = ram.sheepEarnedTitles || [];
  var nationalTitles = titles.filter(function(t){ return ["SWCh","SMCh","SDCh"].indexOf(t) !== -1; });
  var stateTitles    = titles.filter(function(t){ return ["SSWB","SSMB","SSDB"].indexOf(t) !== -1; });
  var countyTitles   = titles.filter(function(t){ return ["SWB","SMB","SDB"].indexOf(t) !== -1; });
  if (nationalTitles.length > 0) { fee += nationalTitles.length * 400; reasons.push("\uD83C\uDFC6 National title"+(nationalTitles.length>1?"s":"")); }
  if (stateTitles.length > 0)    { fee += stateTitles.length * 200;    reasons.push("\uD83E\uDD48 State title"+(stateTitles.length>1?"s":"")); }
  if (countyTitles.length > 0)   { fee += countyTitles.length * 100;   reasons.push("\uD83C\uDFAA County title"+(countyTitles.length>1?"s":"")); }

  var perf = ram.perfScore || 0;
  if (perf >= 95)      { fee += 200; reasons.push("\u26A1 Exceptional genetics ("+perf+" perf)"); }
  else if (perf >= 85) { fee += 100; reasons.push("\u26A1 High-performance genetics ("+perf+" perf)"); }

  var breedWeightAvg = breedDef ? breedDef.weightRam : 200;
  var ramWeight = ram.weightLbs || breedWeightAvg;
  var weightPct = (ramWeight - breedWeightAvg) / breedWeightAvg;
  if (weightPct >= 0.15)      { fee += 150; reasons.push("\uD83D\uDCCF Exceptional frame (+"+Math.round(weightPct*100)+"%)"); }
  else if (weightPct >= 0.10) { fee += 75;  reasons.push("\uD83D\uDCCF Large frame (+"+Math.round(weightPct*100)+"%)"); }

  var coat = (ram.coatColor || "").toLowerCase();
  if (coat.indexOf("moorit") !== -1) { fee += 100; reasons.push("\uD83C\uDFA8 Moorit coat \u2014 desirable color"); }
  if (coat.indexOf("badgerface") !== -1) { fee += 75; reasons.push("\uD83C\uDFA8 Badgerface pattern"); }

  var coi = ram.coi || 0;
  if (coi < 5)       { fee += 50;  reasons.push("\uD83E\uDDEC Outbred (low COI)"); }
  else if (coi >= 20) { fee -= 100; reasons.push("\u26A0\uFE0F High inbreeding penalty"); }

  if (sheepType === "wool" && ram.shearYield && ram.shearYield >= 10) {
    fee += 100; reasons.push("\uD83E\uDDF6 High wool yield ("+ram.shearYield+" lb)");
  }

  fee = Math.max(50, Math.round(fee / 25) * 25);
  return { fee: fee, reasons: reasons };
}

// ══════════════════════════════════════════════════════════════════════════════
// COMMUNITY RAMS PANEL
// ══════════════════════════════════════════════════════════════════════════════

function CommunityRamsPanel(props) {
  var user = props.user;
  var money = props.money || 0;
  var onHireRam = props.onHireRam;

  var _r1 = React.useState([]), rams = _r1[0], setRams = _r1[1];
  var _r2 = React.useState(false), loading = _r2[0], setLoading = _r2[1];
  var _r3 = React.useState("all"), filter = _r3[0], setFilter = _r3[1];
  var _r4 = React.useState(null), peekRam = _r4[0], setPeekRam = _r4[1];
  var _r5 = React.useState(null), confirmHire = _r5[0], setConfirmHire = _r5[1];

  React.useEffect(function() {
    if (!window.baSupabaseSync || !window.baSupabaseSync.fetchSheepStudDirectory) return;
    setLoading(true);
    var excludeId = user && user.id ? user.id : null;
    window.baSupabaseSync.fetchSheepStudDirectory(excludeId).then(function(listings) {
      setRams(listings || []);
      setLoading(false);
    }).catch(function(){ setLoading(false); });
  }, []);

  var filtered = filter === "all" ? rams : rams.filter(function(r) {
    var breed = (r.breed||"").toLowerCase();
    if (filter === "wool") return (typeof SHEEP_WOOL_BREEDS!=="undefined") && SHEEP_WOOL_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    if (filter === "meat") return (typeof SHEEP_MEAT_BREEDS!=="undefined") && SHEEP_MEAT_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    if (filter === "dual") return (typeof SHEEP_DUAL_BREEDS!=="undefined") && SHEEP_DUAL_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    return true;
  });

  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];

  if (loading) return React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:12 } }, "Loading community rams...");
  if (rams.length === 0) return React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:12 } }, "No community rams listed yet.");

  return React.createElement("div", null,
    React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:8, flexWrap:"wrap" } },
      ["all","wool","meat","dual"].map(function(t) {
        var active = filter===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilter(t); },
          style:{ background:active?"#0a1a2a":"transparent", border:"1px solid "+(active?"#38bdf8":"#1a3a5a"),
            color:active?"#38bdf8":"#4a6a8a", borderRadius:4, padding:"2px 8px", cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" }
        }, t);
      })
    ),
    filtered.map(function(r) {
      var genome = typeof r.genome === "string" ? (function(){ try { return JSON.parse(r.genome); } catch(e){ return null; } })() : r.genome;
      return React.createElement("div", { key:r.animal_id||r.id, style:{ background:"#0a0e14", border:"1px solid #1a3a5a", borderRadius:8, padding:"8px 10px", marginBottom:6 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
          React.createElement("div", null,
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.8rem" } }, r.dog_name||r.breed),
            React.createElement("div", { style:{ color:"#4a6a8a", fontSize:"0.65rem" } }, r.breed+" \u00B7 "+(r.coat_color||"")+" \u00B7 $"+r.fee)
          ),
          React.createElement("div", { style:{ display:"flex", gap:4 } },
            React.createElement("button", {
              onClick:function(){ setPeekRam(peekRam&&(peekRam.animal_id||peekRam.id)===(r.animal_id||r.id)?null:r); },
              style:{ background:"transparent", border:"1px solid #1a3a5a", color:"#38bdf8", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.6rem" }
            }, "\uD83E\uDDEC"),
            React.createElement("button", {
              onClick:function(){ setConfirmHire(r); },
              style:{ background:"#0a2a15", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 8px", cursor:"pointer", fontSize:"0.65rem", fontWeight:"bold" }
            }, "Hire $"+r.fee)
          )
        ),
        React.createElement("div", { style:{ display:"flex", gap:6, marginTop:4 } },
          React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.65rem" } }, "\u2764\uFE0F"+(r.health_score||0)),
          React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.65rem" } }, "\u26A1"+(r.perf_score||0)),
          React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.62rem" } }, "COI "+(r.coi||0)+"%")
        ),
        peekRam && (peekRam.animal_id||peekRam.id)===(r.animal_id||r.id) && genome && React.createElement("div", { style:{ marginTop:6 } },
          React.createElement("div", { style:{ display:"flex", gap:3 } },
            perfQtls.map(function(q) {
              var v = (genome.perf||{})[q]||[3,3];
              var avg = (v[0]+v[1])/2;
              var pct = Math.round((avg/5)*100);
              var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
              return React.createElement("div", { key:q, style:{ flex:1, textAlign:"center" } },
                React.createElement("div", { style:{ fontSize:"0.5rem", color:col } }, q),
                React.createElement("div", { style:{ background:"#1a2a3a", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
                ),
                React.createElement("div", { style:{ fontSize:"0.48rem", color:col } }, avg.toFixed(1))
              );
            })
          )
        )
      );
    }),
    confirmHire && React.createElement("div", {
      onClick:function(){ setConfirmHire(null); },
      style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:1400, display:"flex", alignItems:"center", justifyContent:"center" }
    },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); },
        style:{ background:"#0e1208", border:"1px solid #1a3a5a", borderRadius:12, padding:20, maxWidth:360 }
      },
        React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.95rem", marginBottom:8 } },
          "Hire "+(confirmHire.dog_name||confirmHire.breed)+"?"),
        React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.75rem", marginBottom:12 } },
          "Fee: $"+confirmHire.fee+" \u00B7 This ram will cover one ewe via natural mating, then leave."),
        money < confirmHire.fee && React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", marginBottom:8 } }, "Not enough money!"),
        React.createElement("div", { style:{ display:"flex", gap:8 } },
          React.createElement("button", { onClick:function(){ setConfirmHire(null); },
            style:{ flex:1, background:"#1a0808", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:6, padding:"8px 0", cursor:"pointer", fontSize:"0.8rem" }
          }, "Cancel"),
          React.createElement("button", {
            disabled: money < confirmHire.fee,
            onClick:function(){ if(onHireRam) onHireRam(confirmHire); setConfirmHire(null); },
            style:{ flex:1, background:money>=confirmHire.fee?"#0a2a15":"#141008", border:"1px solid "+(money>=confirmHire.fee?"#22c55e":"#2a2a18"),
              color:money>=confirmHire.fee?"#22c55e":"#3a3a28", borderRadius:6, padding:"8px 0", cursor:money>=confirmHire.fee?"pointer":"not-allowed", fontSize:"0.8rem", fontWeight:"bold" }
          }, "Confirm Hire")
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SHEEP BREEDING MODAL
// ══════════════════════════════════════════════════════════════════════════════

function SheepBreedingModal(props) {
  var sheep = props.sheep || [];
  var onClose = props.onClose;
  var onConfirm = props.onConfirm;

  var allRams = sheep.filter(function(s){ return s.sex==="M" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"sheep")); });
  var allEwes = sheep.filter(function(s){ return s.sex==="F" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"sheep")); });

  var _ss = React.useState(null), selectedSire = _ss[0], setSelectedSire = _ss[1];
  var _sd = React.useState(null), selectedDam  = _sd[0], setSelectedDam  = _sd[1];
  var _sf = React.useState(""),   sireFilter   = _sf[0], setSireFilter   = _sf[1];
  var _df = React.useState(""),   damFilter    = _df[0], setDamFilter    = _df[1];
  var _dna = React.useState(null), dnaSheep    = _dna[0], setDnaSheep    = _dna[1];
  var _sortS = React.useState("perf"), sortS   = _sortS[0], setSortS    = _sortS[1];
  var _sortD = React.useState("perf"), sortD   = _sortD[0], setSortD    = _sortD[1];

  var sire = selectedSire ? sheep.find(function(s){ return s.id===selectedSire; }) : null;
  var dam  = selectedDam  ? sheep.find(function(s){ return s.id===selectedDam;  }) : null;

  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];
  var icons = {WOOL:"\uD83E\uDDF6",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",MILK:"\uD83E\uDD5B"};
  var typeColors = {wool:"#f5d870",meat:"#fca5a5",dual:"#c4b5fd"};

  function filterAndSort(list, filter, sort) {
    var f = filter.toLowerCase();
    var filtered = f ? list.filter(function(s){
      return (s.name||"").toLowerCase().includes(f) || (s.breed||"").toLowerCase().includes(f) || (s.coatColor||"").toLowerCase().includes(f) || (s.type||"").toLowerCase().includes(f);
    }) : list;
    return filtered.slice().sort(function(a,b){
      if (sort==="perf") return (b.perfScore||0)-(a.perfScore||0);
      if (sort==="health") return (b.healthScore||0)-(a.healthScore||0);
      if (sort==="name") return (a.name||"").localeCompare(b.name||"");
      return 0;
    });
  }

  function SheepOption(s, selected, onSelect, accentColor) {
    var perf = s.genome && s.genome.perf;
    var typeCol = typeColors[s.type] || "#e8d0a8";
    return React.createElement("div", { key:s.id, style:{ background:selected?"#1a2a08":"#141008", border:"1px solid "+(selected?accentColor:"#2a1e10"), borderRadius:8, marginBottom:6, overflow:"hidden" } },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); onSelect(s.id); }, style:{ padding:"9px 10px", cursor:"pointer" } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 } },
          React.createElement("div", { style:{ flex:1 } },
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem" } }, s.name),
            React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.67rem" } }, s.breed+" \u00B7 "+(s.coatColor||"")+" \u00B7 "),
            React.createElement("span", { style:{ color:typeCol, fontSize:"0.67rem" } }, s.type||"dual")
          ),
          React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#22c55e", fontWeight:"bold" } }, "\u2764\uFE0F "+s.healthScore),
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#d4942a", fontWeight:"bold" } }, "\u26A1 "+s.perfScore)
          )
        ),
        perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
          perfQtls.map(function(q) {
            var v = perf[q]||[3,3]; var avg = (v[0]+v[1])/2; var pct = Math.round((avg/5)*100);
            var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
            return React.createElement("div", { key:q, style:{ flex:1 } },
              React.createElement("div", { style:{ fontSize:"0.52rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
              React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
                React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
              )
            );
          })
        )
      ),
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); setDnaSheep(dnaSheep&&dnaSheep.id===s.id?null:s); },
        style:{ borderTop:"1px solid #2a1e10", padding:"4px 10px", cursor:"pointer", background:dnaSheep&&dnaSheep.id===s.id?"#0a1a08":"transparent",
          color:dnaSheep&&dnaSheep.id===s.id?"#84cc16":"#3a5a28", fontSize:"0.62rem", textAlign:"center" }
      }, dnaSheep&&dnaSheep.id===s.id?"\u25B2 Hide DNA":"\uD83E\uDDEC View DNA")
    );
  }

  var filteredRams = filterAndSort(allRams, sireFilter, sortS);
  var filteredEwes = filterAndSort(allEwes, damFilter, sortD);
  var crossbred = sire && dam && sire.breed !== dam.breed;

  function SortBar(sort, setSort, color) {
    return React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:6 } },
      [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(o){
        return React.createElement("button", { key:o[0], onClick:function(e){ e.stopPropagation(); setSort(o[0]); },
          style:{ flex:1, background:sort===o[0]?"#1a2a08":"transparent", border:"1px solid "+(sort===o[0]?color:"#2a1e10"),
            color:sort===o[0]?color:"#6b5038", borderRadius:4, padding:"2px 0", fontSize:"0.62rem", cursor:"pointer" }
        }, o[1]);
      })
    );
  }

  return React.createElement("div", { onClick:onClose, style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1300, display:"flex", alignItems:"center", justifyContent:"center", padding:12 } },
    React.createElement("div", { onClick:function(e){ e.stopPropagation(); }, style:{ background:"#0e0c08", border:"1px solid #2a1e10", borderRadius:12, width:"100%", maxWidth:860, maxHeight:"92vh", display:"flex", flexDirection:"column" } },
      React.createElement("div", { style:{ padding:"16px 20px 12px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
          React.createElement("div", {},
            React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83E\uDD1D Breed Sheep"),
            React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem", marginTop:2 } }, "Gestation: 5 days \u00B7 1\u20132 lambs \u00B7 Cross-breeds produce Crossbred lambs")
          ),
          React.createElement("button", { onClick:onClose, style:{ background:"none", border:"1px solid #2a1e10", color:"#6b5038", borderRadius:5, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem" } }, "\u2715 Close")
        )
      ),
      React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #2a1e10", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#60a5fa", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2642 RAMS ("+allRams.length+")"),
            React.createElement("input", { value:sireFilter, onChange:function(e){ setSireFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#141008", border:"1px solid #2a1e10", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortS, setSortS, "#60a5fa")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredRams.length===0 ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allRams.length===0?"No available rams":"No matches")
            : filteredRams.map(function(s){ return SheepOption(s, selectedSire===s.id, setSelectedSire, "#60a5fa"); })
          )
        ),
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:dnaSheep?"1px solid #2a1e10":"none", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2640 EWES ("+allEwes.length+")"),
            React.createElement("input", { value:damFilter, onChange:function(e){ setDamFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#141008", border:"1px solid #2a1e10", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortD, setSortD, "#f472b6")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredEwes.length===0 ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allEwes.length===0?"No available ewes":"No matches")
            : filteredEwes.map(function(s){ return SheepOption(s, selectedDam===s.id, setSelectedDam, "#f472b6"); })
          )
        ),
        dnaSheep && React.createElement("div", { style:{ width:280, flexShrink:0, overflowY:"auto" } },
          React.createElement(SheepDNAPanel, { sheep:dnaSheep, inline:true, onClose:function(){ setDnaSheep(null); } })
        )
      ),
      React.createElement("div", { style:{ padding:"12px 20px", borderTop:"1px solid #2a1e10", flexShrink:0 } },
        sire && dam
          ? React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, marginBottom:10, flexWrap:"wrap" } },
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a1408", border:"1px solid #2a1e10", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2642 "+sire.name),
                React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.63rem" } }, sire.breed+" \u00B7 "+(sire.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+sire.healthScore+"  \u26A1 "+sire.perfScore)
              ),
              React.createElement("div", { style:{ color:"#d4942a", fontSize:"1.1rem", fontWeight:"bold" } }, "\u00D7"),
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a1408", border:"1px solid #2a1e10", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2640 "+dam.name),
                React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.63rem" } }, dam.breed+" \u00B7 "+(dam.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+dam.healthScore+"  \u26A1 "+dam.perfScore)
              ),
              crossbred && React.createElement("div", { style:{ color:"#fde68a", fontSize:"0.65rem", background:"#2d1e00", border:"1px solid #ca8a04", borderRadius:4, padding:"3px 8px" } }, "\u26A0\uFE0F Crossbred lambs")
            )
          : React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.75rem", textAlign:"center", marginBottom:10 } }, "Select a ram and a ewe to continue"),
        React.createElement("button", {
          disabled:!sire||!dam,
          onClick:function(e){ e.stopPropagation(); if(sire&&dam) onConfirm(sire.id, dam.id); },
          style:{ width:"100%", padding:"11px 0", borderRadius:8, cursor:sire&&dam?"pointer":"not-allowed",
            background:sire&&dam?"#1a2a08":"#0a0c08", border:"1px solid "+(sire&&dam?"#84cc16":"#2a1e10"),
            color:sire&&dam?"#84cc16":"#2a4a18", fontWeight:"bold", fontSize:"0.9rem" }
        }, sire&&dam?"\uD83E\uDD1D Confirm Breeding \u2014 Lambs due in 5 days":"No pairing selected")
      )
    )
  );
}

// ── Sheep DNA Panel (inline or modal) ────────────────────────────────────────

function SheepDNAPanel(props) {
  var sheep = props.sheep;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!sheep || !sheep.genome) return null;
  var g = sheep.genome;
  var ce = React.createElement;

  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];
  var healthQtls = typeof SHEEP_HEALTH_QTLS !== "undefined" ? SHEEP_HEALTH_QTLS : ["FootQ","ParasiteQ","UdderQ","RespiQ","FertQ"];
  var perfInfo = typeof SHEEP_PERF_QTL_INFO !== "undefined" ? SHEEP_PERF_QTL_INFO : {};
  var healthInfo = typeof SHEEP_HEALTH_QTL_INFO !== "undefined" ? SHEEP_HEALTH_QTL_INFO : {};

  var extraStats = [];
  if (sheep.shearYield) extraStats.push({ label:"Wool", value:(sheep.shearYield||0)+" lb", color:"#f5d870" });

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#1a1410", border:"1px solid #4a3a28", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (sheep.name || sheep.breed)),
        ce("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
          sheep.breed + " \u00B7 " + (sheep.coatColor||"") + " \u00B7 " + (sheep.type||"dual") + " \u00B7 " + (sheep.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:sheep.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:sheep.perfScore||0, color:"#d4942a" },
        { label:"Weight", value:(sheep.weightLbs||150)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(sheep.coi||0)+"%", color:(sheep.coi||0)>=25?"#ef4444":"#22c55e" }
      ].concat(extraStats)
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#141008", border:"1px solid #2a1e10", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#4a3a28", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(perfQtls.length,6)+",1fr)", gap:6, marginBottom:14 } },
      perfQtls.map(function(q) {
        var info = perfInfo[q] || { icon:"\u2B50", full:q, desc:"" };
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #2a3a18",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(healthQtls.length,5)+",1fr)", gap:6 } },
      healthQtls.map(function(q) {
        var info = healthInfo[q] || { icon:"\u2764", full:q, desc:"" };
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#141008", border:"1px solid #1a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a1008", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ── Sheep Card ───────────────────────────────────────────────────────────────

function SheepCard(props) {
  var sheep = props.sheep;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onLock = props.onLock;

  var isRam = sheep.sex === "M";
  var _e = React.useState(false), editing = _e[0], setEditing = _e[1];
  var _n = React.useState(""), nameVal = _n[0], setNameVal = _n[1];
  var _d = React.useState(false), showDNA = _d[0], setShowDNA = _d[1];

  var sheepAgeStatus = (typeof isDeclining==="function"&&isDeclining(sheep.ageMonths||0,"sheep")) ? "declining" : ((typeof isPastPrime==="function"&&isPastPrime(sheep.ageMonths||0,"sheep")) ? "past_prime" : "ok");
  var typeColors = {wool:"#f5d870",meat:"#fca5a5",dual:"#c4b5fd"};
  var typeCol = typeColors[sheep.type] || "#e8d0a8";

  var perfQtls = typeof SHEEP_PERF_QTLS !== "undefined" ? SHEEP_PERF_QTLS : ["WOOL","GROWTH","MUSCLE","TEMP","HARDY","MILK"];
  var icons = {WOOL:"\uD83E\uDDF6",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",MILK:"\uD83E\uDD5B"};

  return React.createElement("div", {
    style:{ background: sheepAgeStatus==="declining"?"#1a0808":"#141008", border:"1px solid "+(sheepAgeStatus==="declining"?"#5a2a2a":"#2a1e10"),
      borderRadius:10, overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ padding:"10px 12px 8px", borderBottom:"1px solid #2a1e10" } },
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
        React.createElement("div", { style:{ flex:1 } },
          editing
            ? React.createElement("div", { style:{ display:"flex", gap:4 } },
                React.createElement("input", { value:nameVal, onChange:function(e){setNameVal(e.target.value);},
                  style:{ background:"#0a0808", border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:4, padding:"2px 6px", fontSize:"0.8rem", flex:1 } }),
                React.createElement("button", { onClick:function(){ if(nameVal.trim() && onRename) onRename(sheep,nameVal.trim()); setEditing(false); },
                  style:{ background:"#1a3a0a", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2714"),
                React.createElement("button", { onClick:function(){ setEditing(false); },
                  style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2718")
              )
            : React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6 } },
                React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.88rem" } }, sheep.name || sheep.breed),
                React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.65rem", cursor:"pointer" },
                  onClick:function(){ setNameVal(sheep.name||""); setEditing(true); } }, "\u270F\uFE0F"),
                sheep.locked && React.createElement("span", { style:{ background:"#1a0a2a", border:"1px solid #7c3aed", color:"#a78bfa",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83D\uDD12"),
                (sheep.sheepEarnedTitles||[]).length > 0 && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #fbbf24", color:"#fbbf24",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83C\uDFC6 "+(sheep.sheepEarnedTitles||[]).join(" ")),
                (sheep.sheepShowPoints||0) > 0 && React.createElement("span", { style:{ background:"#141008", border:"1px solid #6b5038", color:"#d4942a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u2B50 "+(sheep.sheepShowPoints||0)+"pts"),
                sheepAgeStatus==="declining" && React.createElement("span", { style:{ background:"#2a0808", border:"1px solid #ef4444", color:"#fca5a5",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u26A0\uFE0F Declining"),
                sheepAgeStatus==="past_prime" && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #eab308", color:"#fde68a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "Past Prime")
              ),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem", marginTop:2 } },
            sheep.breed + " \u00B7 " + (sheep.coatColor||"") + " \u00B7 "),
          React.createElement("span", { style:{ color:typeCol, fontSize:"0.65rem" } }, sheep.type||"dual")
        ),
        React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
          React.createElement("div", { style:{ color:(sheep.sex==="M")?"#60a5fa":"#f472b6", fontSize:"0.7rem", fontWeight:"bold" } },
            (sheep.sex==="M"?"\u2642 Ram":"\u2640 Ewe")),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem" } },
            Math.floor((sheep.ageMonths||0)/12)+"y "+((sheep.ageMonths||0)%12)+"m"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem" } }, (sheep.weightLbs||150)+" lb")
        )
      )
    ),

    // Scores + QTL bars
    React.createElement("div", { style:{ padding:"6px 12px 8px" } },
      React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6 } },
        React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+sheep.healthScore),
        React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+sheep.perfScore),
        sheep.shearYield && React.createElement("span", { style:{ color:"#f5d870", fontSize:"0.72rem" } }, "\uD83E\uDDF6 "+(sheep.shearYield||0)+" lb"),
        React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.65rem" } }, "COI "+(sheep.coi||0)+"%")
      ),
      sheep.genome && sheep.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
        perfQtls.map(function(q) {
          var v = sheep.genome.perf[q]||[3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
          return React.createElement("div", { key:q, style:{ flex:1 } },
            React.createElement("div", { style:{ fontSize:"0.5rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
            React.createElement("div", { style:{ background:"#2a1e10", borderRadius:2, height:3, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            )
          );
        })
      ),
      sheep.pregnantUntil && sheep.pregnantUntil > Date.now() && React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", marginTop:4 } },
        "\uD83E\uDD30 Pregnant \u2014 " + Math.max(0,Math.ceil((sheep.pregnantUntil-Date.now())/(24*60*60*1000))) + " day(s) left")
    ),

    // Action buttons
    React.createElement("div", { style:{ display:"flex", gap:4, padding:"0 12px 8px", flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(!showDNA); },
        style:{ background:showDNA?"#0a1a08":"#141008", border:"1px solid "+(showDNA?"#84cc16":"#2a3a18"),
          color:showDNA?"#84cc16":"#3a5a28", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, showDNA?"\u25B2 Hide DNA":"\uD83E\uDDEC DNA"),
      sheep.sex==="M" && props.onListSheepStud && React.createElement("button", {
        onClick:function(){
          if (sheep.isSheepStud) { props.onListSheepStud(sheep.id, false, 0); }
          else {
            var calc = typeof calcSuggestedRamFee === "function" ? calcSuggestedRamFee(sheep) : { fee: 150 };
            props.onListSheepStud(sheep.id, true, calc.fee);
          }
        },
        style:{ background:sheep.isSheepStud?"#0a2a15":"#141008", border:"1px solid "+(sheep.isSheepStud?"#22c55e":"#4a3a28"),
          color:sheep.isSheepStud?"#22c55e":"#6b5038", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, sheep.isSheepStud?"\u2714 Listed $"+(sheep.sheepStudFee||0):"\uD83D\uDCE2 List Stud"),
      React.createElement("button", {
        onClick:function(){ onSell(sheep); },
        style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444",
          borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, "\uD83D\uDCB0 Sell"),
      onLock && React.createElement("button", {
        onClick:function(){ onLock(sheep); },
        style:{ background:sheep.locked?"#1a0a2a":"#141008", border:"1px solid "+(sheep.locked?"#7c3aed":"#4a3a28"),
          color:sheep.locked?"#a78bfa":"#6b5038", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, sheep.locked?"\uD83D\uDD13 Unlock":"\uD83D\uDD12 Lock")
    ),

    showDNA && React.createElement(SheepDNAPanel, { sheep:sheep, onClose:function(){ setShowDNA(false); } })
  );
}

// ── Sheep View (Management Tab) ──────────────────────────────────────────────

function SheepView(props) {
  var sheep = props.sheep || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var pendingCalves = props.pendingCalves || [];
  var onShowsOpen = props.onShowsOpen;
  var onListSheepStud = props.onListSheepStud;
  var onBreedSheep = props.onBreedSheep;
  var user = props.user;
  var money = props.money || 0;
  var onHireRam = props.onHireRam;

  var _f = React.useState("all"), filterType = _f[0], setFilterType = _f[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];
  var _breed = React.useState(false), showBreeding = _breed[0], setShowBreeding = _breed[1];
  var _crOpen = React.useState(false), communityRamsOpen = _crOpen[0], setCommunityRamsOpen = _crOpen[1];

  var rams = sheep.filter(function(s){ return s.sex==="M" && !s.retiredLivestock; });
  var ewes = sheep.filter(function(s){ return s.sex==="F" && !s.retiredLivestock; });
  var pregnantEwes = ewes.filter(function(s){ return s.pregnantUntil && s.pregnantUntil > Date.now(); });
  var woolCount = sheep.filter(function(s){ return s.type==="wool"; }).length;
  var meatCount = sheep.filter(function(s){ return s.type==="meat"; }).length;
  var dualCount = sheep.filter(function(s){ return s.type==="dual"; }).length;

  var filtered = filterType==="all" ? sheep :
    sheep.filter(function(s){ return s.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var sheepPending = pendingCalves.filter(function(pc){ return pc.species==="sheep"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #2a1e10", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83D\uDC11"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "Sheep Management"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem" } },
            sheep.length+" sheep \u00B7 "+rams.length+" ram"+(rams.length!==1?"s":"")+" \u00B7 "+ewes.length+" ewe"+(ewes.length!==1?"s":"")+
            (pregnantEwes.length>0?" \u00B7 "+pregnantEwes.length+" pregnant":""))
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        sheep.length >= 2 && React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setShowBreeding(true); },
          disabled: rams.length===0 || ewes.length===0,
          style:{ background: (rams.length>0&&ewes.length>0)?"#2a1e08":"#141008",
            border:"1px solid "+((rams.length>0&&ewes.length>0)?"#d4942a":"#2a2a18"),
            color: (rams.length>0&&ewes.length>0)?"#d4942a":"#3a3a28",
            borderRadius:8, padding:"6px 14px", cursor:(rams.length>0&&ewes.length>0)?"pointer":"not-allowed",
            fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83E\uDD1D Breed"),
        sheep.length > 0 && onShowsOpen && React.createElement("button", {
          onClick:onShowsOpen,
          style:{ background:"#2a1e08", border:"1px solid #d4942a", color:"#d4942a",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83C\uDFC6 County Fair"),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#b09070",
            borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
        }, "\u2190 Back to Farm")
      )
    ),

    // Natural mating info bar (always on for sheep)
    sheep.length > 0 && React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #2a1e10",
      background:"#1a1a08", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom: (rams.length>0||sheepPending.length>0)?8:0 } },
        React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } },
            "Sheep breed naturally \u2014 your ram"+(rams.length!==1?"s":"")+" will cover eligible ewes automatically")
        ),
        React.createElement("div", { style:{ background:"#22c55e", borderRadius:10, padding:"2px 10px", flexShrink:0 } },
          React.createElement("span", { style:{ color:"#fff", fontSize:"0.65rem", fontWeight:"bold" } }, "ALWAYS ON"))
      ),

      React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        rams.length > 0 && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a5a28",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83D\uDC11 Flock Ram"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } },
            rams.sort(function(a,b){return (b.perfScore||0)-(a.perfScore||0);})[0].name || rams[0].breed),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            rams[0].breed + " \u00B7 \u2764\uFE0F" + (rams[0].healthScore||0) + " \u26A1" + (rams[0].perfScore||0) + " \u00B7 covers " + ewes.length + " ewe" + (ewes.length!==1?"s":""))
        ),
        rams.length === 0 && ewes.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Ram"),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem" } },
            ewes.length + " ewe"+(ewes.length!==1?"s":"")+" won\u2019t breed without a ram")
        ),
        React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Flock Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + rams.length + " ram" + (rams.length!==1?"s":"")),
            React.createElement("div", null, "\u2640 " + ewes.length + " ewe" + (ewes.length!==1?"s":"")),
            React.createElement("div", { style:{ color: pregnantEwes.length>0 ? "#f472b6" : "#6b5038" } },
              "\uD83E\uDD30 " + pregnantEwes.length + " pregnant")
          )
        ),
        sheepPending.length > 0 && React.createElement("div", { style:{ background:"#0e0c08", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Lambs"),
          sheepPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83D\uDC11 " + pc.damName + " \u2014 " + pc.offspring.length + " lamb" +
              (pc.offspring.length!==1?"s":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    // Community Rams (collapsible)
    React.createElement("div", {
      style: { margin: "0 16px 8px", background: "#0a0e14", border: "1px solid #1a3a5a", borderRadius: 8, overflow: "hidden" }
    },
      React.createElement("button", {
        onClick: function() { setCommunityRamsOpen(function(v){ return !v; }); },
        style: { width: "100%", background: "transparent", border: "none", color: "#38bdf8",
          padding: "8px 12px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "bold",
          display: "flex", alignItems: "center", gap: 6, textAlign: "left" }
      },
        React.createElement("span", { style: { transform: communityRamsOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s", display: "inline-block" } }, "\u25B6"),
        "Browse Community Rams"
      ),
      communityRamsOpen && React.createElement("div", { style: { padding: "0 12px 10px" } },
        React.createElement(CommunityRamsPanel, { user: user, money: money, onHireRam: onHireRam })
      )
    ),

    // Type stats bar
    React.createElement("div", { style:{ display:"flex", gap:8, padding:"8px 16px", borderBottom:"1px solid #2a1e10",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      React.createElement("span", { style:{ color:"#f5d870", fontSize:"0.72rem" } }, "\uD83E\uDDF6 Wool: "+woolCount),
      React.createElement("span", { style:{ color:"#fca5a5", fontSize:"0.72rem" } }, "\uD83E\uDD69 Meat: "+meatCount),
      React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } }, "\u2696\uFE0F Dual: "+dualCount)
    ),

    // Filters + sort
    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #2a1e10",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      ["all","wool","meat","dual"].map(function(t) {
        var active = filterType===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilterType(t); },
          style:{ background: active?"#2a1e10":"transparent", border:"1px solid "+(active?"#d4942a":"#4a3a28"),
            color: active?"#d4942a":"#6b5038", borderRadius:5, padding:"3px 10px",
            cursor:"pointer", fontSize:"0.72rem", textTransform:"capitalize" } }, t);
      }),
      React.createElement("span", { style:{ color:"#4a3a28", margin:"0 4px" } }, "|"),
      React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.68rem" } }, "Sort:"),
      ["name","breed","health","perf","type"].map(function(s) {
        var active = listSort===s;
        return React.createElement("button", { key:s, onClick:function(){ setListSort(s); },
          style:{ background: active?"#1a2a0a":"transparent", border:"1px solid "+(active?"#22c55e":"#3a3020"),
            color: active?"#22c55e":"#6b5038", borderRadius:4, padding:"2px 7px",
            cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" } }, s);
      })
    ),

    // Grid
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12 } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 0" } },
            "No sheep yet \u2014 buy some from the Livestock Market!")
        : React.createElement("div", { style:{ display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:10 } },
            sorted.map(function(s) {
              return React.createElement(SheepCard, { key:s.id, sheep:s, onSell:onSell, onRename:onRename, onLock:props.onLock, onListSheepStud:onListSheepStud });
            })
          )
    ),

    showBreeding && React.createElement(SheepBreedingModal, {
      sheep: sheep,
      onClose: function(){ setShowBreeding(false); },
      onConfirm: function(sireId, damId){
        if (onBreedSheep) onBreedSheep(sireId, damId);
        setShowBreeding(false);
      }
    })
  );
}

// BUILD 1774259776 — cache bust

// ══════════════════════════════════════════════════════════════════════════════
// PIG SHOW SYSTEM
// ══════════════════════════════════════════════════════════════════════════════

var PIG_SHOW_CLASSES = [
  { key:"heritage_breed", label:"Best of Breed (Heritage)", emoji:"\uD83C\uDFAA", type:"heritage", purebredOnly:true,
    desc:"Purebred heritage pigs judged on breed standard, temperament, hardiness, and overall conformation.",
    qtlWeights:{ GROWTH:0.10, MUSCLE:0.15, LITTER:0.05, TEMP:0.30, HARDY:0.30, FEED:0.10 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"commercial_breed", label:"Best of Breed (Commercial)", emoji:"\uD83E\uDD69", type:"commercial", purebredOnly:true,
    desc:"Purebred commercial pigs judged on growth rate, muscling, feed efficiency, and carcass quality.",
    qtlWeights:{ GROWTH:0.30, MUSCLE:0.30, LITTER:0.10, TEMP:0.10, HARDY:0.05, FEED:0.15 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  },
  { key:"mini_breed", label:"Best of Breed (Miniature)", emoji:"\uD83D\uDC37", type:"mini", purebredOnly:true,
    desc:"Purebred miniature pigs judged on temperament, conformation, size standard, and overall health.",
    qtlWeights:{ GROWTH:0.05, MUSCLE:0.05, LITTER:0.10, TEMP:0.40, HARDY:0.30, FEED:0.10 },
    entryFee:{ county:30, state:90, national:250 },
    purse:{ county:[200,100,30], state:[800,400,130], national:[3500,1750,700] },
    fieldSize:{ county:8, state:14, national:22 }
  }
];

var PIG_SHOW_LEVELS = ["county","state","national"];
var PIG_SHOW_LEVEL_LABELS = { county:"County Fair", state:"State Fair", national:"National" };

var PIG_SHOW_TITLES = {
  heritage_breed: {
    county:  { key:"PHB", label:"County Best Heritage Pig",    prefix:"PHB " },
    state:   { key:"PSHB", label:"State Best Heritage Pig",   prefix:"PSHB " },
    national:{ key:"PHCh", label:"National Heritage Champion", prefix:"PHCh. " }
  },
  commercial_breed: {
    county:  { key:"PCB", label:"County Best Commercial Pig",    prefix:"PCB " },
    state:   { key:"PSCB", label:"State Best Commercial Pig",   prefix:"PSCB " },
    national:{ key:"PCCh", label:"National Commercial Champion", prefix:"PCCh. " }
  },
  mini_breed: {
    county:  { key:"PMB", label:"County Best Miniature Pig",    prefix:"PMB " },
    state:   { key:"PSMB", label:"State Best Miniature Pig",   prefix:"PSMB " },
    national:{ key:"PMCh", label:"National Miniature Champion", prefix:"PMCh. " }
  }
};

function getPigShowLevel(animal, classKey) {
  return (animal.pigShowLevels && animal.pigShowLevels[classKey]) || "county";
}

function calcPigShowScore(animal, classKey) {
  if (!animal || !animal.genome) return 0;
  if (typeof canShowByAge === "function" && !canShowByAge(animal.ageMonths || 0, "pig")) return 0;
  if (typeof isAnimalLocked === "function" && isAnimalLocked(animal)) return 0;

  var cls = PIG_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return 0;
  var hs = animal.healthScore || 50;
  var perf = animal.genome.perf || {};
  var weights = cls.qtlWeights;
  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];

  var qtlScore = 0;
  perfQtls.forEach(function(q) {
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg/5)*100*(weights[q]||0);
  });

  var weightBonus = 0;
  if (classKey === "commercial_breed" && animal.weightLbs) {
    weightBonus = Math.min(8, (animal.weightLbs - 400) / 80);
  }

  var age = animal.ageMonths || 0;
  var ageMod = 1.0;
  if (age < 6) ageMod = 0.4;
  else if (age < 10) ageMod = 0.65;
  else if (age < 18) ageMod = 0.85;
  else if (age <= 72) ageMod = 1.0;
  else if (age <= 96) ageMod = 0.85;
  else ageMod = 0.65;

  var coi = animal.coi || 0;
  var coiPenalty = coi > 10 ? Math.min(12, (coi-10)*0.5) : 0;

  var raw = (hs*0.4 + qtlScore*0.6)*ageMod - coiPenalty + weightBonus;
  var variance = (Math.random()-0.5)*0.14;
  return Math.max(0, Math.min(100, raw*(1+variance)));
}

function runPigShow(animal, classKey) {
  var cls = PIG_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  if (!cls) return null;
  var level = getPigShowLevel(animal, classKey);

  if (cls.purebredOnly && animal.breed === "Crossbred") return { error:"Best of Breed is purebreds only." };
  if (animal.retiredLivestock) return { error:"Retired pigs cannot compete." };
  if ((animal.ageMonths||0) < 6) return { error:"Must be at least 6 months old to show." };
  if (cls.type && animal.type !== cls.type) return { error:"This class is for " + cls.type + " pigs only." };

  var playerScore = calcPigShowScore(animal, classKey);
  var fieldSize = (cls.fieldSize[level]||8) - 1;
  var aiNames = ["Willow Creek","Sunny Meadow","Iron Hill","Golden Valley","Oak Ridge",
    "Crystal Spring","Rocky Top","Cedar Grove","Silver Brook","Pine Haven","Maple Leaf",
    "Riverside","Sunset Ridge","Hidden Hollow","Mountain View","Blue Sky","Stonewall","Clover Field"];
  var aiSuffixes = ["Farm","Hogs","Ranch","Acres","Homestead","Piggery"];
  var competitors = [];
  var baseMean = { county:46, state:60, national:72 }[level] || 50;
  var spread = { county:20, state:14, national:10 }[level] || 18;
  for (var i = 0; i < fieldSize; i++) {
    var score = baseMean + (Math.random()-0.5)*spread*2;
    var aiName = aiNames[i % aiNames.length] + " " + aiSuffixes[Math.floor(Math.random()*aiSuffixes.length)];
    competitors.push({ name:aiName, isAI:true, score:Math.max(20, Math.min(98, score)) });
  }
  competitors.push({ name:animal.name||animal.breed, isAI:false, score:playerScore });
  competitors.sort(function(a,b){ return b.score - a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; }) + 1;
  var entryFee = cls.entryFee[level] || 30;
  var purse = cls.purse[level] || [0,0,0];
  var prize = placement===1?purse[0] : placement===2?purse[1] : placement===3?purse[2] : 0;
  var pts = placement===1?{county:3,state:6,national:12}[level] :
            placement===2?{county:2,state:4,national:8}[level] :
            placement===3?{county:1,state:2,national:4}[level] : 0;

  var promoted = false;
  var nextLevel = null;
  if (placement <= 3) {
    var levelIdx = PIG_SHOW_LEVELS.indexOf(level);
    if (levelIdx < PIG_SHOW_LEVELS.length - 1) {
      nextLevel = PIG_SHOW_LEVELS[levelIdx + 1];
      promoted = true;
    }
  }

  var titleEarned = null;
  if (placement === 1) {
    var typeTitles = PIG_SHOW_TITLES[classKey];
    if (typeTitles && typeTitles[level]) titleEarned = typeTitles[level];
  }

  return {
    placement:placement, totalEntries:cls.fieldSize[level]||8,
    prize:prize, entryFee:entryFee, net:prize-entryFee,
    playerScore:Math.round(playerScore*10)/10, competitors:competitors,
    classKey:classKey, level:level, promoted:promoted, nextLevel:nextLevel,
    titleEarned:titleEarned, showPoints:pts
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG SHOWS VIEW
// ══════════════════════════════════════════════════════════════════════════════

function PigShowsView(props) {
  var pigs = props.pigs || [];
  var money = props.money || 0;
  var onMoneyChange = props.onMoneyChange;
  var onPigUpdate = props.onPigUpdate;
  var onLog = props.onLog;
  var onClose = props.onClose;
  var lastShowDates = props.lastShowDates || {};
  var onShowDatesUpdate = props.onShowDatesUpdate;

  var _ct = React.useState(PIG_SHOW_CLASSES[0].key), selectedClass = _ct[0], setSelectedClass = _ct[1];
  var _sg = React.useState(null), selectedPig = _sg[0], setSelectedPig = _sg[1];
  var _lr = React.useState(null), lastResult = _lr[0], setLastResult = _lr[1];

  var cls = PIG_SHOW_CLASSES.find(function(c){ return c.key===selectedClass; });

  var eligible = pigs.filter(function(a) {
    if (!a.genome) return false;
    if (a.retiredLivestock) return false;
    if ((a.ageMonths||0) < 6) return false;
    if (a.breed === "Crossbred" && cls && cls.purebredOnly) return false;
    if (cls && cls.type && a.type !== cls.type) return false;
    if (typeof canShowByAge === "function" && !canShowByAge(a.ageMonths||0,"pig")) return false;
    if (typeof isAnimalLocked === "function" && isAnimalLocked(a)) return false;
    return true;
  });

  var COOLDOWN_MS = 12*60*60*1000;

  function enterShow(animal) {
    if (!animal || !cls) return;
    var level = getPigShowLevel(animal, selectedClass);
    var fee = cls.entryFee[level] || 30;
    if (money < fee) { alert("Not enough money! Entry fee: $"+fee); return; }
    var cooldownKey = animal.id+"_"+selectedClass;
    var lastDate = lastShowDates[cooldownKey] || 0;
    if (Date.now() - lastDate < COOLDOWN_MS) {
      var hrs = Math.ceil((COOLDOWN_MS-(Date.now()-lastDate))/3600000);
      alert("This pig needs to rest. Can show again in ~"+hrs+" hour(s).");
      return;
    }
    var result = runPigShow(animal, selectedClass);
    if (!result) return;
    if (result.error) { alert(result.error); return; }
    onMoneyChange(function(m){ return m - fee + result.prize; });
    if (onShowDatesUpdate) {
      var nd = Object.assign({}, lastShowDates);
      nd[cooldownKey] = Date.now();
      onShowDatesUpdate(nd);
    }
    var updated = Object.assign({}, animal);
    updated.pigShowPoints = (updated.pigShowPoints||0) + result.showPoints;
    if (result.promoted && result.nextLevel) {
      var lvls = Object.assign({}, updated.pigShowLevels||{});
      lvls[selectedClass] = result.nextLevel;
      updated.pigShowLevels = lvls;
    }
    if (result.titleEarned) {
      var titles = (updated.pigEarnedTitles||[]).slice();
      if (titles.indexOf(result.titleEarned.key)===-1) titles.push(result.titleEarned.key);
      updated.pigEarnedTitles = titles;
    }
    if (onPigUpdate) onPigUpdate(updated);
    if (onLog) onLog({ id:Date.now(), type:"show",
      name:"\uD83D\uDC37 "+animal.name+" placed #"+result.placement+" in "+cls.label+" ("+PIG_SHOW_LEVEL_LABELS[level]+") \u2014 "+(result.net>=0?"+":"")+"$"+result.net,
      date:new Date().toLocaleString() });
    setLastResult(result);
  }

  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];
  var perfInfo = typeof PIG_PERF_QTL_INFO !== "undefined" ? PIG_PERF_QTL_INFO : {};

  return React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#140810", zIndex:80, display:"flex", flexDirection:"column", overflow:"hidden" }
  },
    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
      React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83C\uDFC6 Pig County Fair"),
      React.createElement("button", { onClick:onClose, style:{ background:"transparent", border:"1px solid #4a2838", color:"#b07090", borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" } }, "\u2190 Back")
    ),
    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #2a1018", flexShrink:0, flexWrap:"wrap" } },
      PIG_SHOW_CLASSES.map(function(c) {
        var active = selectedClass===c.key;
        return React.createElement("button", { key:c.key, onClick:function(){ setSelectedClass(c.key); setSelectedPig(null); setLastResult(null); },
          style:{ background:active?"#2a1018":"transparent", border:"1px solid "+(active?"#d4942a":"#4a2838"),
            color:active?"#d4942a":"#6b3858", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontSize:"0.75rem", fontWeight:active?"bold":"normal" }
        }, c.emoji+" "+c.label);
      })
    ),
    cls && React.createElement("div", { style:{ padding:"8px 16px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
      React.createElement("div", { style:{ color:"#8a5570", fontSize:"0.72rem" } }, cls.desc),
      React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.65rem", marginTop:4 } },
        eligible.length+" eligible \u00B7 Entry: $"+(cls.entryFee.county||30)+" (County) / $"+(cls.entryFee.state||90)+" (State) / $"+(cls.entryFee.national||250)+" (National)")
    ),
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12, display:"flex", gap:12, flexWrap:"wrap", alignContent:"flex-start" } },
      eligible.length===0 && React.createElement("div", { style:{ color:"#6b3858", textAlign:"center", width:"100%", padding:"30px 0" } },
        "No eligible pigs for this class. Purebred "+cls.type+" pigs required, 6+ months old."),
      eligible.map(function(a) {
        var sel = selectedPig && selectedPig.id===a.id;
        var level = getPigShowLevel(a, selectedClass);
        return React.createElement("div", { key:a.id,
          onClick:function(){ setSelectedPig(a); setLastResult(null); },
          style:{ background:sel?"#1a2a08":"#0e0810", border:"1px solid "+(sel?"#84cc16":"#2a1018"),
            borderRadius:8, padding:"10px 12px", cursor:"pointer", width:220, flexShrink:0 }
        },
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, a.name||a.breed),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.65rem" } }, a.breed+" \u00B7 "+(a.coatColor||"")+" \u00B7 "+PIG_SHOW_LEVEL_LABELS[level]),
          React.createElement("div", { style:{ display:"flex", gap:6, marginTop:4 } },
            React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.68rem" } }, "\u2764\uFE0F"+a.healthScore),
            React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.68rem" } }, "\u26A1"+a.perfScore),
            (a.pigShowPoints||0)>0 && React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.68rem" } }, "\u2B50"+(a.pigShowPoints||0)+"pts")
          ),
          a.genome && a.genome.perf && React.createElement("div", { style:{ display:"flex", gap:2, marginTop:4 } },
            perfQtls.map(function(q) {
              var v = a.genome.perf[q]||[3,3];
              var avg = (v[0]+v[1])/2;
              var pct = Math.round((avg/5)*100);
              var w = cls.qtlWeights[q]||0;
              var col = w>=0.3?"#d4942a":w>=0.15?"#22c55e":"#4a5568";
              return React.createElement("div", { key:q, style:{ flex:1 } },
                React.createElement("div", { style:{ background:"#2a1018", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
                )
              );
            })
          )
        );
      }),
      selectedPig && React.createElement("div", { style:{ width:"100%", maxWidth:500, background:"#0e0810", border:"1px solid #2a1018", borderRadius:10, padding:16 } },
        React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.9rem", marginBottom:8 } },
          "\uD83D\uDC37 "+selectedPig.name+" \u2014 "+(cls?cls.label:"")),
        React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.72rem", marginBottom:8 } },
          "Level: "+PIG_SHOW_LEVEL_LABELS[getPigShowLevel(selectedPig, selectedClass)]+" \u00B7 Entry fee: $"+(cls?cls.entryFee[getPigShowLevel(selectedPig, selectedClass)]:30)),
        React.createElement("button", {
          onClick:function(){ if(selectedPig) enterShow(selectedPig); },
          disabled:!selectedPig,
          style:{ background:"#1a3a0a", border:"1px solid #84cc16", color:"#84cc16", borderRadius:8,
            padding:"8px 20px", cursor:"pointer", fontWeight:"bold", fontSize:"0.85rem" }
        }, "\uD83C\uDFC6 Enter Show"),
        lastResult && React.createElement("div", { style:{ marginTop:12, background:"#140810", border:"1px solid #2a1018", borderRadius:8, padding:12 } },
          React.createElement("div", { style:{ color:lastResult.placement<=3?"#22c55e":"#ef4444", fontWeight:"bold", fontSize:"0.9rem" } },
            "#"+lastResult.placement+" of "+lastResult.totalEntries+(lastResult.placement===1?" \uD83C\uDFC6":lastResult.placement<=3?" \uD83C\uDFC5":"")),
          React.createElement("div", { style:{ color:"#e8d0a8", fontSize:"0.75rem", marginTop:4 } },
            "Score: "+lastResult.playerScore+" \u00B7 "+(lastResult.net>=0?"+":"")+("$"+lastResult.net)+(lastResult.showPoints?" \u00B7 +"+lastResult.showPoints+" pts":"")),
          lastResult.titleEarned && React.createElement("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"0.78rem", marginTop:4 } },
            "\uD83C\uDFC6 Title earned: "+lastResult.titleEarned.label),
          lastResult.promoted && React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.72rem", marginTop:4 } },
            "\u2B06\uFE0F Promoted to "+PIG_SHOW_LEVEL_LABELS[lastResult.nextLevel]+"!"),
          React.createElement("div", { style:{ marginTop:8 } },
            lastResult.competitors.slice(0,5).map(function(c, idx) {
              return React.createElement("div", { key:idx, style:{ display:"flex", justifyContent:"space-between", padding:"2px 0",
                color:c.isAI?"#6b3858":"#d4942a", fontSize:"0.68rem", fontWeight:c.isAI?"normal":"bold" } },
                React.createElement("span", null, "#"+(idx+1)+" "+c.name),
                React.createElement("span", null, Math.round(c.score*10)/10)
              );
            })
          )
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG STUD FEE CALCULATOR
// ══════════════════════════════════════════════════════════════════════════════

function calcSuggestedBoarFee(boar) {
  if (!boar || boar.sex !== "M") return { fee: 100, reasons: [] };
  var breedDef = (typeof PIG_BREED_DEFS !== "undefined") ? PIG_BREED_DEFS.find(function(b){ return b.name === boar.breed; }) : null;
  var pigType = boar.type || (breedDef ? breedDef.type : "commercial");

  var baseFees = { heritage: 180, commercial: 120, mini: 200 };
  var fee = baseFees[pigType] || 150;
  var reasons = [];

  var titles = boar.pigEarnedTitles || [];
  var nationalTitles = titles.filter(function(t){ return ["PHCh","PCCh","PMCh"].indexOf(t) !== -1; });
  var stateTitles    = titles.filter(function(t){ return ["PSHB","PSCB","PSMB"].indexOf(t) !== -1; });
  var countyTitles   = titles.filter(function(t){ return ["PHB","PCB","PMB"].indexOf(t) !== -1; });
  if (nationalTitles.length > 0) { fee += nationalTitles.length * 400; reasons.push("\uD83C\uDFC6 National title"+(nationalTitles.length>1?"s":"")); }
  if (stateTitles.length > 0)    { fee += stateTitles.length * 200;    reasons.push("\uD83E\uDD48 State title"+(stateTitles.length>1?"s":"")); }
  if (countyTitles.length > 0)   { fee += countyTitles.length * 100;   reasons.push("\uD83C\uDFAA County title"+(countyTitles.length>1?"s":"")); }

  var perf = boar.perfScore || 0;
  if (perf >= 95)      { fee += 200; reasons.push("\u26A1 Exceptional genetics ("+perf+" perf)"); }
  else if (perf >= 85) { fee += 100; reasons.push("\u26A1 High-performance genetics ("+perf+" perf)"); }

  var breedWeightAvg = breedDef ? breedDef.weightBoar : 550;
  var boarWeight = boar.weightLbs || breedWeightAvg;
  var weightPct = (boarWeight - breedWeightAvg) / breedWeightAvg;
  if (weightPct >= 0.15)      { fee += 150; reasons.push("\uD83D\uDCCF Exceptional frame (+"+Math.round(weightPct*100)+"%)"); }
  else if (weightPct >= 0.10) { fee += 75;  reasons.push("\uD83D\uDCCF Large frame (+"+Math.round(weightPct*100)+"%)"); }

  var stressAlleles = boar.genome && boar.genome.health && boar.genome.health.StressQ;
  if (stressAlleles) {
    var stressGood = (stressAlleles[0]==="G"?1:0) + (stressAlleles[1]==="G"?1:0);
    if (stressGood === 2) { fee += 100; reasons.push("\uD83D\uDCA2 Stress-free genetics (GG)"); }
  }

  var coi = boar.coi || 0;
  if (coi < 5)       { fee += 50;  reasons.push("\uD83E\uDDEC Outbred (low COI)"); }
  else if (coi >= 20) { fee -= 100; reasons.push("\u26A0\uFE0F High inbreeding penalty"); }

  fee = Math.max(50, Math.round(fee / 25) * 25);
  return { fee: fee, reasons: reasons };
}

// ══════════════════════════════════════════════════════════════════════════════
// COMMUNITY BOARS PANEL
// ══════════════════════════════════════════════════════════════════════════════

function CommunityBoarsPanel(props) {
  var user = props.user;
  var money = props.money || 0;
  var onHireBoar = props.onHireBoar;

  var _r1 = React.useState([]), boars = _r1[0], setBoars = _r1[1];
  var _r2 = React.useState(false), loading = _r2[0], setLoading = _r2[1];
  var _r3 = React.useState("all"), filter = _r3[0], setFilter = _r3[1];
  var _r4 = React.useState(null), peekBoar = _r4[0], setPeekBoar = _r4[1];
  var _r5 = React.useState(null), confirmHire = _r5[0], setConfirmHire = _r5[1];

  React.useEffect(function() {
    if (!window.baSupabaseSync || !window.baSupabaseSync.fetchPigStudDirectory) return;
    setLoading(true);
    var excludeId = user && user.id ? user.id : null;
    window.baSupabaseSync.fetchPigStudDirectory(excludeId).then(function(listings) {
      setBoars(listings || []);
      setLoading(false);
    }).catch(function(){ setLoading(false); });
  }, []);

  var filtered = filter === "all" ? boars : boars.filter(function(r) {
    var breed = (r.breed||"").toLowerCase();
    if (filter === "heritage") return (typeof PIG_HERITAGE_BREEDS!=="undefined") && PIG_HERITAGE_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    if (filter === "commercial") return (typeof PIG_COMMERCIAL_BREEDS!=="undefined") && PIG_COMMERCIAL_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    if (filter === "mini") return (typeof PIG_MINI_BREEDS!=="undefined") && PIG_MINI_BREEDS.some(function(b){ return b.toLowerCase()===breed; });
    return true;
  });

  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];

  if (loading) return React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.78rem", padding:12 } }, "Loading community boars...");
  if (boars.length === 0) return React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.78rem", padding:12 } }, "No community boars listed yet.");

  return React.createElement("div", null,
    React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:8, flexWrap:"wrap" } },
      ["all","heritage","commercial","mini"].map(function(t) {
        var active = filter===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilter(t); },
          style:{ background:active?"#0a1a2a":"transparent", border:"1px solid "+(active?"#38bdf8":"#1a3a5a"),
            color:active?"#38bdf8":"#4a6a8a", borderRadius:4, padding:"2px 8px", cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" }
        }, t);
      })
    ),
    filtered.map(function(r) {
      var genome = typeof r.genome === "string" ? (function(){ try { return JSON.parse(r.genome); } catch(e){ return null; } })() : r.genome;
      return React.createElement("div", { key:r.animal_id||r.id, style:{ background:"#0a0e14", border:"1px solid #1a3a5a", borderRadius:8, padding:"8px 10px", marginBottom:6 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
          React.createElement("div", null,
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.8rem" } }, r.dog_name||r.breed),
            React.createElement("div", { style:{ color:"#4a6a8a", fontSize:"0.65rem" } }, r.breed+" \u00B7 "+(r.coat_color||"")+" \u00B7 $"+r.fee)
          ),
          React.createElement("div", { style:{ display:"flex", gap:4 } },
            React.createElement("button", {
              onClick:function(){ setPeekBoar(peekBoar&&(peekBoar.animal_id||peekBoar.id)===(r.animal_id||r.id)?null:r); },
              style:{ background:"transparent", border:"1px solid #1a3a5a", color:"#38bdf8", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.6rem" }
            }, "\uD83E\uDDEC"),
            React.createElement("button", {
              onClick:function(){ setConfirmHire(r); },
              style:{ background:"#0a2a15", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 8px", cursor:"pointer", fontSize:"0.65rem", fontWeight:"bold" }
            }, "Hire $"+r.fee)
          )
        ),
        React.createElement("div", { style:{ display:"flex", gap:6, marginTop:4 } },
          React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.65rem" } }, "\u2764\uFE0F"+(r.health_score||0)),
          React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.65rem" } }, "\u26A1"+(r.perf_score||0)),
          React.createElement("span", { style:{ color:"#6b3858", fontSize:"0.62rem" } }, "COI "+(r.coi||0)+"%")
        ),
        peekBoar && (peekBoar.animal_id||peekBoar.id)===(r.animal_id||r.id) && genome && React.createElement("div", { style:{ marginTop:6 } },
          React.createElement("div", { style:{ display:"flex", gap:3 } },
            perfQtls.map(function(q) {
              var v = (genome.perf||{})[q]||[3,3];
              var avg = (v[0]+v[1])/2;
              var pct = Math.round((avg/5)*100);
              var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
              return React.createElement("div", { key:q, style:{ flex:1, textAlign:"center" } },
                React.createElement("div", { style:{ fontSize:"0.5rem", color:col } }, q),
                React.createElement("div", { style:{ background:"#1a2a3a", borderRadius:2, height:3, overflow:"hidden" } },
                  React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
                ),
                React.createElement("div", { style:{ fontSize:"0.48rem", color:col } }, avg.toFixed(1))
              );
            })
          )
        )
      );
    }),
    confirmHire && React.createElement("div", {
      onClick:function(){ setConfirmHire(null); },
      style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:1400, display:"flex", alignItems:"center", justifyContent:"center" }
    },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); },
        style:{ background:"#0e0812", border:"1px solid #1a3a5a", borderRadius:12, padding:20, maxWidth:360 }
      },
        React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.95rem", marginBottom:8 } },
          "Hire "+(confirmHire.dog_name||confirmHire.breed)+"?"),
        React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.75rem", marginBottom:12 } },
          "Fee: $"+confirmHire.fee+" \u00B7 This boar will cover one sow via natural mating, then leave."),
        money < confirmHire.fee && React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", marginBottom:8 } }, "Not enough money!"),
        React.createElement("div", { style:{ display:"flex", gap:8 } },
          React.createElement("button", { onClick:function(){ setConfirmHire(null); },
            style:{ flex:1, background:"#1a0808", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:6, padding:"8px 0", cursor:"pointer", fontSize:"0.8rem" }
          }, "Cancel"),
          React.createElement("button", {
            disabled: money < confirmHire.fee,
            onClick:function(){ if(onHireBoar) onHireBoar(confirmHire); setConfirmHire(null); },
            style:{ flex:1, background:money>=confirmHire.fee?"#0a2a15":"#140810", border:"1px solid "+(money>=confirmHire.fee?"#22c55e":"#2a2a18"),
              color:money>=confirmHire.fee?"#22c55e":"#3a3a28", borderRadius:6, padding:"8px 0", cursor:money>=confirmHire.fee?"pointer":"not-allowed", fontSize:"0.8rem", fontWeight:"bold" }
          }, "Confirm Hire")
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG BREEDING MODAL
// ══════════════════════════════════════════════════════════════════════════════

function PigBreedingModal(props) {
  var pigs = props.pigs || [];
  var onClose = props.onClose;
  var onConfirm = props.onConfirm;

  var allBoars = pigs.filter(function(s){ return s.sex==="M" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"pig")); });
  var allSows = pigs.filter(function(s){ return s.sex==="F" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"pig")); });

  var _ss = React.useState(null), selectedSire = _ss[0], setSelectedSire = _ss[1];
  var _sd = React.useState(null), selectedDam  = _sd[0], setSelectedDam  = _sd[1];
  var _sf = React.useState(""),   sireFilter   = _sf[0], setSireFilter   = _sf[1];
  var _df = React.useState(""),   damFilter    = _df[0], setDamFilter    = _df[1];
  var _dna = React.useState(null), dnaPig      = _dna[0], setDnaPig      = _dna[1];
  var _sortS = React.useState("perf"), sortS   = _sortS[0], setSortS    = _sortS[1];
  var _sortD = React.useState("perf"), sortD   = _sortD[0], setSortD    = _sortD[1];

  var sire = selectedSire ? pigs.find(function(s){ return s.id===selectedSire; }) : null;
  var dam  = selectedDam  ? pigs.find(function(s){ return s.id===selectedDam;  }) : null;

  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];
  var icons = {GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",LITTER:"\uD83D\uDC37",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FEED:"\uD83C\uDF3D"};
  var typeColors = {heritage:"#f9a8d4",commercial:"#93c5fd",mini:"#c4b5fd"};

  function filterAndSort(list, filter, sort) {
    var f = filter.toLowerCase();
    var filtered = f ? list.filter(function(s){
      return (s.name||"").toLowerCase().includes(f) || (s.breed||"").toLowerCase().includes(f) || (s.coatColor||"").toLowerCase().includes(f) || (s.type||"").toLowerCase().includes(f);
    }) : list;
    return filtered.slice().sort(function(a,b){
      if (sort==="perf") return (b.perfScore||0)-(a.perfScore||0);
      if (sort==="health") return (b.healthScore||0)-(a.healthScore||0);
      if (sort==="name") return (a.name||"").localeCompare(b.name||"");
      return 0;
    });
  }

  function PigOption(s, selected, onSelect, accentColor) {
    var perf = s.genome && s.genome.perf;
    var typeCol = typeColors[s.type] || "#e8d0a8";
    return React.createElement("div", { key:s.id, style:{ background:selected?"#1a2a08":"#140810", border:"1px solid "+(selected?accentColor:"#2a1018"), borderRadius:8, marginBottom:6, overflow:"hidden" } },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); onSelect(s.id); }, style:{ padding:"9px 10px", cursor:"pointer" } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 } },
          React.createElement("div", { style:{ flex:1 } },
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem" } }, s.name),
            React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.67rem" } }, s.breed+" \u00B7 "+(s.coatColor||"")+" \u00B7 "),
            React.createElement("span", { style:{ color:typeCol, fontSize:"0.67rem" } }, s.type||"commercial")
          ),
          React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#22c55e", fontWeight:"bold" } }, "\u2764\uFE0F "+s.healthScore),
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#d4942a", fontWeight:"bold" } }, "\u26A1 "+s.perfScore)
          )
        ),
        perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
          perfQtls.map(function(q) {
            var v = perf[q]||[3,3]; var avg = (v[0]+v[1])/2; var pct = Math.round((avg/5)*100);
            var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
            return React.createElement("div", { key:q, style:{ flex:1 } },
              React.createElement("div", { style:{ fontSize:"0.52rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
              React.createElement("div", { style:{ background:"#2a1018", borderRadius:2, height:3, overflow:"hidden" } },
                React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
              )
            );
          })
        )
      ),
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); setDnaPig(dnaPig&&dnaPig.id===s.id?null:s); },
        style:{ borderTop:"1px solid #2a1018", padding:"4px 10px", cursor:"pointer", background:dnaPig&&dnaPig.id===s.id?"#0a1a08":"transparent",
          color:dnaPig&&dnaPig.id===s.id?"#84cc16":"#3a5a28", fontSize:"0.62rem", textAlign:"center" }
      }, dnaPig&&dnaPig.id===s.id?"\u25B2 Hide DNA":"\uD83E\uDDEC View DNA")
    );
  }

  var filteredBoars = filterAndSort(allBoars, sireFilter, sortS);
  var filteredSows = filterAndSort(allSows, damFilter, sortD);
  var crossbred = sire && dam && sire.breed !== dam.breed;

  function SortBar(sort, setSort, color) {
    return React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:6 } },
      [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(o){
        return React.createElement("button", { key:o[0], onClick:function(e){ e.stopPropagation(); setSort(o[0]); },
          style:{ flex:1, background:sort===o[0]?"#1a2a08":"transparent", border:"1px solid "+(sort===o[0]?color:"#2a1018"),
            color:sort===o[0]?color:"#6b3858", borderRadius:4, padding:"2px 0", fontSize:"0.62rem", cursor:"pointer" }
        }, o[1]);
      })
    );
  }

  return React.createElement("div", { onClick:onClose, style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1300, display:"flex", alignItems:"center", justifyContent:"center", padding:12 } },
    React.createElement("div", { onClick:function(e){ e.stopPropagation(); }, style:{ background:"#0e0810", border:"1px solid #2a1018", borderRadius:12, width:"100%", maxWidth:860, maxHeight:"92vh", display:"flex", flexDirection:"column" } },
      React.createElement("div", { style:{ padding:"16px 20px 12px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
          React.createElement("div", {},
            React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83E\uDD1D Breed Pigs"),
            React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.72rem", marginTop:2 } }, "Gestation: 4 days \u00B7 3\u20138 piglets \u00B7 Cross-breeds produce Crossbred piglets")
          ),
          React.createElement("button", { onClick:onClose, style:{ background:"none", border:"1px solid #2a1018", color:"#6b3858", borderRadius:5, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem" } }, "\u2715 Close")
        )
      ),
      React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #2a1018", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#60a5fa", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2642 BOARS ("+allBoars.length+")"),
            React.createElement("input", { value:sireFilter, onChange:function(e){ setSireFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#140810", border:"1px solid #2a1018", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortS, setSortS, "#60a5fa")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredBoars.length===0 ? React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allBoars.length===0?"No available boars":"No matches")
            : filteredBoars.map(function(s){ return PigOption(s, selectedSire===s.id, setSelectedSire, "#60a5fa"); })
          )
        ),
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:dnaPig?"1px solid #2a1018":"none", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2640 SOWS ("+allSows.length+")"),
            React.createElement("input", { value:damFilter, onChange:function(e){ setDamFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#140810", border:"1px solid #2a1018", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortD, setSortD, "#f472b6")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredSows.length===0 ? React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allSows.length===0?"No available sows":"No matches")
            : filteredSows.map(function(s){ return PigOption(s, selectedDam===s.id, setSelectedDam, "#f472b6"); })
          )
        ),
        dnaPig && React.createElement("div", { style:{ width:280, flexShrink:0, overflowY:"auto" } },
          React.createElement(PigDNAPanel, { pig:dnaPig, inline:true, onClose:function(){ setDnaPig(null); } })
        )
      ),
      React.createElement("div", { style:{ padding:"12px 20px", borderTop:"1px solid #2a1018", flexShrink:0 } },
        sire && dam
          ? React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, marginBottom:10, flexWrap:"wrap" } },
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a0c10", border:"1px solid #2a1018", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2642 "+sire.name),
                React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.63rem" } }, sire.breed+" \u00B7 "+(sire.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+sire.healthScore+"  \u26A1 "+sire.perfScore)
              ),
              React.createElement("div", { style:{ color:"#d4942a", fontSize:"1.1rem", fontWeight:"bold" } }, "\u00D7"),
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#1a0c10", border:"1px solid #2a1018", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2640 "+dam.name),
                React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.63rem" } }, dam.breed+" \u00B7 "+(dam.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+dam.healthScore+"  \u26A1 "+dam.perfScore)
              ),
              crossbred && React.createElement("div", { style:{ color:"#fde68a", fontSize:"0.65rem", background:"#2d1e00", border:"1px solid #ca8a04", borderRadius:4, padding:"3px 8px" } }, "\u26A0\uFE0F Crossbred piglets")
            )
          : React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.75rem", textAlign:"center", marginBottom:10 } }, "Select a boar and a sow to continue"),
        React.createElement("button", {
          disabled:!sire||!dam,
          onClick:function(e){ e.stopPropagation(); if(sire&&dam) onConfirm(sire.id, dam.id); },
          style:{ width:"100%", padding:"11px 0", borderRadius:8, cursor:sire&&dam?"pointer":"not-allowed",
            background:sire&&dam?"#1a2a08":"#0a0c08", border:"1px solid "+(sire&&dam?"#84cc16":"#2a1018"),
            color:sire&&dam?"#84cc16":"#2a4a18", fontWeight:"bold", fontSize:"0.9rem" }
        }, sire&&dam?"\uD83E\uDD1D Confirm Breeding \u2014 Piglets due in 4 days":"No pairing selected")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG DNA PANEL (inline or modal)
// ══════════════════════════════════════════════════════════════════════════════

function PigDNAPanel(props) {
  var pig = props.pig;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!pig || !pig.genome) return null;
  var g = pig.genome;
  var ce = React.createElement;

  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];
  var healthQtls = typeof PIG_HEALTH_QTLS !== "undefined" ? PIG_HEALTH_QTLS : ["LegQ","RespiQ","GutQ","ReproQ","StressQ"];
  var perfInfo = typeof PIG_PERF_QTL_INFO !== "undefined" ? PIG_PERF_QTL_INFO : {};
  var healthInfo = typeof PIG_HEALTH_QTL_INFO !== "undefined" ? PIG_HEALTH_QTL_INFO : {};

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#1a0c12", border:"1px solid #4a2838", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (pig.name || pig.breed)),
        ce("div", { style:{ color:"#6b3858", fontSize:"0.72rem" } },
          pig.breed + " \u00B7 " + (pig.coatColor||"") + " \u00B7 " + (pig.type||"commercial") + " \u00B7 " + (pig.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a2838", color:"#8a5570",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:pig.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:pig.perfScore||0, color:"#d4942a" },
        { label:"Weight", value:(pig.weightLbs||400)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(pig.coi||0)+"%", color:(pig.coi||0)>=25?"#ef4444":"#22c55e" }
      ]
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#140810", border:"1px solid #2a1018", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#4a2838", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(perfQtls.length,6)+",1fr)", gap:6, marginBottom:14 } },
      perfQtls.map(function(q) {
        var info = perfInfo[q] || { icon:"\u2B50", full:q, desc:"" };
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#140810", border:"1px solid #2a3a18",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a0810", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(healthQtls.length,5)+",1fr)", gap:6 } },
      healthQtls.map(function(q) {
        var info = healthInfo[q] || { icon:"\u2764", full:q, desc:"" };
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#140810", border:"1px solid #1a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a0810", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#4a6a28", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG CARD
// ══════════════════════════════════════════════════════════════════════════════

function PigCard(props) {
  var pig = props.pig;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onLock = props.onLock;

  var isBoar = pig.sex === "M";
  var _e = React.useState(false), editing = _e[0], setEditing = _e[1];
  var _n = React.useState(""), nameVal = _n[0], setNameVal = _n[1];
  var _d = React.useState(false), showDNA = _d[0], setShowDNA = _d[1];

  var pigAgeStatus = (typeof isDeclining==="function"&&isDeclining(pig.ageMonths||0,"pig")) ? "declining" : ((typeof isPastPrime==="function"&&isPastPrime(pig.ageMonths||0,"pig")) ? "past_prime" : "ok");
  var typeColors = {heritage:"#f9a8d4",commercial:"#93c5fd",mini:"#c4b5fd"};
  var typeCol = typeColors[pig.type] || "#e8d0a8";

  var perfQtls = typeof PIG_PERF_QTLS !== "undefined" ? PIG_PERF_QTLS : ["GROWTH","MUSCLE","LITTER","TEMP","HARDY","FEED"];
  var icons = {GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",LITTER:"\uD83D\uDC37",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FEED:"\uD83C\uDF3D"};

  return React.createElement("div", {
    style:{ background: pigAgeStatus==="declining"?"#1a0808":"#140810", border:"1px solid "+(pigAgeStatus==="declining"?"#5a2a2a":"#2a1018"),
      borderRadius:10, overflow:"hidden" }
  },
    React.createElement("div", { style:{ padding:"10px 12px 8px", borderBottom:"1px solid #2a1018" } },
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
        React.createElement("div", { style:{ flex:1 } },
          editing
            ? React.createElement("div", { style:{ display:"flex", gap:4 } },
                React.createElement("input", { value:nameVal, onChange:function(e){setNameVal(e.target.value);},
                  style:{ background:"#0a0808", border:"1px solid #4a2838", color:"#f0e6d3", borderRadius:4, padding:"2px 6px", fontSize:"0.8rem", flex:1 } }),
                React.createElement("button", { onClick:function(){ if(nameVal.trim() && onRename) onRename(pig,nameVal.trim()); setEditing(false); },
                  style:{ background:"#1a3a0a", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2714"),
                React.createElement("button", { onClick:function(){ setEditing(false); },
                  style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2718")
              )
            : React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6 } },
                React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.88rem" } }, pig.name || pig.breed),
                React.createElement("span", { style:{ color:"#6b3858", fontSize:"0.65rem", cursor:"pointer" },
                  onClick:function(){ setNameVal(pig.name||""); setEditing(true); } }, "\u270F\uFE0F"),
                pig.locked && React.createElement("span", { style:{ background:"#1a0a2a", border:"1px solid #7c3aed", color:"#a78bfa",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83D\uDD12"),
                (pig.pigEarnedTitles||[]).length > 0 && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #fbbf24", color:"#fbbf24",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83C\uDFC6 "+(pig.pigEarnedTitles||[]).join(" ")),
                (pig.pigShowPoints||0) > 0 && React.createElement("span", { style:{ background:"#140810", border:"1px solid #6b3858", color:"#d4942a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u2B50 "+(pig.pigShowPoints||0)+"pts"),
                pigAgeStatus==="declining" && React.createElement("span", { style:{ background:"#2a0808", border:"1px solid #ef4444", color:"#fca5a5",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u26A0\uFE0F Declining"),
                pigAgeStatus==="past_prime" && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #eab308", color:"#fde68a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "Past Prime")
              ),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.65rem", marginTop:2 } },
            pig.breed + " \u00B7 " + (pig.coatColor||"") + " \u00B7 "),
          React.createElement("span", { style:{ color:typeCol, fontSize:"0.65rem" } }, pig.type||"commercial")
        ),
        React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
          React.createElement("div", { style:{ color:(pig.sex==="M")?"#60a5fa":"#f472b6", fontSize:"0.7rem", fontWeight:"bold" } },
            (pig.sex==="M"?"\u2642 Boar":"\u2640 Sow")),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.62rem" } },
            Math.floor((pig.ageMonths||0)/12)+"y "+((pig.ageMonths||0)%12)+"m"),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.62rem" } }, (pig.weightLbs||400)+" lb")
        )
      )
    ),
    React.createElement("div", { style:{ padding:"6px 12px 8px" } },
      React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6 } },
        React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+pig.healthScore),
        React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+pig.perfScore),
        React.createElement("span", { style:{ color:"#6b3858", fontSize:"0.65rem" } }, "COI "+(pig.coi||0)+"%")
      ),
      pig.genome && pig.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
        perfQtls.map(function(q) {
          var v = pig.genome.perf[q]||[3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
          return React.createElement("div", { key:q, style:{ flex:1 } },
            React.createElement("div", { style:{ fontSize:"0.5rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
            React.createElement("div", { style:{ background:"#2a1018", borderRadius:2, height:3, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            )
          );
        })
      ),
      pig.pregnantUntil && pig.pregnantUntil > Date.now() && React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", marginTop:4 } },
        "\uD83E\uDD30 Pregnant \u2014 " + Math.max(0,Math.ceil((pig.pregnantUntil-Date.now())/(24*60*60*1000))) + " day(s) left")
    ),
    React.createElement("div", { style:{ display:"flex", gap:4, padding:"0 12px 8px", flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(!showDNA); },
        style:{ background:showDNA?"#0a1a08":"#140810", border:"1px solid "+(showDNA?"#84cc16":"#2a3a18"),
          color:showDNA?"#84cc16":"#3a5a28", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, showDNA?"\u25B2 Hide DNA":"\uD83E\uDDEC DNA"),
      pig.sex==="M" && props.onListPigStud && React.createElement("button", {
        onClick:function(){
          if (pig.isPigStud) { props.onListPigStud(pig.id, false, 0); }
          else {
            var calc = typeof calcSuggestedBoarFee === "function" ? calcSuggestedBoarFee(pig) : { fee: 150 };
            props.onListPigStud(pig.id, true, calc.fee);
          }
        },
        style:{ background:pig.isPigStud?"#0a2a15":"#140810", border:"1px solid "+(pig.isPigStud?"#22c55e":"#4a2838"),
          color:pig.isPigStud?"#22c55e":"#6b3858", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, pig.isPigStud?"\u2714 Listed $"+(pig.pigStudFee||0):"\uD83D\uDCE2 List Stud"),
      React.createElement("button", {
        onClick:function(){ onSell(pig); },
        style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444",
          borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, "\uD83D\uDCB0 Sell"),
      onLock && React.createElement("button", {
        onClick:function(){ onLock(pig); },
        style:{ background:pig.locked?"#1a0a2a":"#140810", border:"1px solid "+(pig.locked?"#7c3aed":"#4a2838"),
          color:pig.locked?"#a78bfa":"#6b3858", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, pig.locked?"\uD83D\uDD13 Unlock":"\uD83D\uDD12 Lock")
    ),
    showDNA && React.createElement(PigDNAPanel, { pig:pig, onClose:function(){ setShowDNA(false); } })
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PIG VIEW (Management Tab)
// ══════════════════════════════════════════════════════════════════════════════

function PigView(props) {
  var pigs = props.pigs || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var pendingCalves = props.pendingCalves || [];
  var onShowsOpen = props.onShowsOpen;
  var onListPigStud = props.onListPigStud;
  var onBreedPig = props.onBreedPig;
  var user = props.user;
  var money = props.money || 0;
  var onHireBoar = props.onHireBoar;

  var _f = React.useState("all"), filterType = _f[0], setFilterType = _f[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];
  var _breed = React.useState(false), showBreeding = _breed[0], setShowBreeding = _breed[1];
  var _cbOpen = React.useState(false), communityBoarsOpen = _cbOpen[0], setCommunityBoarsOpen = _cbOpen[1];

  var boars = pigs.filter(function(s){ return s.sex==="M" && !s.retiredLivestock; });
  var sows = pigs.filter(function(s){ return s.sex==="F" && !s.retiredLivestock; });
  var pregnantSows = sows.filter(function(s){ return s.pregnantUntil && s.pregnantUntil > Date.now(); });
  var heritageCount = pigs.filter(function(s){ return s.type==="heritage"; }).length;
  var commercialCount = pigs.filter(function(s){ return s.type==="commercial"; }).length;
  var miniCount = pigs.filter(function(s){ return s.type==="mini"; }).length;

  var filtered = filterType==="all" ? pigs :
    pigs.filter(function(s){ return s.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var pigPending = pendingCalves.filter(function(pc){ return pc.species==="pig"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #2a1018", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83D\uDC37"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"1rem" } }, "Pig Management"),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.7rem" } },
            pigs.length+" pig"+(pigs.length!==1?"s":"")+" \u00B7 "+boars.length+" boar"+(boars.length!==1?"s":"")+" \u00B7 "+sows.length+" sow"+(sows.length!==1?"s":"")+
            (pregnantSows.length>0?" \u00B7 "+pregnantSows.length+" pregnant":""))
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        pigs.length >= 2 && React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setShowBreeding(true); },
          disabled: boars.length===0 || sows.length===0,
          style:{ background: (boars.length>0&&sows.length>0)?"#2a1e08":"#140810",
            border:"1px solid "+((boars.length>0&&sows.length>0)?"#d4942a":"#2a2a18"),
            color: (boars.length>0&&sows.length>0)?"#d4942a":"#3a3a28",
            borderRadius:8, padding:"6px 14px", cursor:(boars.length>0&&sows.length>0)?"pointer":"not-allowed",
            fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83E\uDD1D Breed"),
        pigs.length > 0 && onShowsOpen && React.createElement("button", {
          onClick:onShowsOpen,
          style:{ background:"#2a1e08", border:"1px solid #d4942a", color:"#d4942a",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83C\uDFC6 County Fair"),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #4a2838", color:"#b07090",
            borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
        }, "\u2190 Back to Farm")
      )
    ),

    pigs.length > 0 && React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #2a1018",
      background:"#1a0a12", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom: (boars.length>0||pigPending.length>0)?8:0 } },
        React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.65rem" } },
            "Pigs breed naturally \u2014 your boar"+(boars.length!==1?"s":"")+" will cover eligible sows automatically")
        ),
        React.createElement("div", { style:{ background:"#22c55e", borderRadius:10, padding:"2px 10px", flexShrink:0 } },
          React.createElement("span", { style:{ color:"#fff", fontSize:"0.65rem", fontWeight:"bold" } }, "ALWAYS ON"))
      ),

      React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        boars.length > 0 && React.createElement("div", { style:{ background:"#0e0810", border:"1px solid #3a5a28",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83D\uDC37 Herd Boar"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } },
            boars.sort(function(a,b){return (b.perfScore||0)-(a.perfScore||0);})[0].name || boars[0].breed),
          React.createElement("div", { style:{ color:"#8a5570", fontSize:"0.65rem" } },
            boars[0].breed + " \u00B7 \u2764\uFE0F" + (boars[0].healthScore||0) + " \u26A1" + (boars[0].perfScore||0) + " \u00B7 covers " + sows.length + " sow" + (sows.length!==1?"s":""))
        ),
        boars.length === 0 && sows.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Boar"),
          React.createElement("div", { style:{ color:"#8a5570", fontSize:"0.65rem" } },
            sows.length + " sow"+(sows.length!==1?"s":"")+" won\u2019t breed without a boar")
        ),
        React.createElement("div", { style:{ background:"#0e0810", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Herd Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + boars.length + " boar" + (boars.length!==1?"s":"")),
            React.createElement("div", null, "\u2640 " + sows.length + " sow" + (sows.length!==1?"s":"")),
            React.createElement("div", { style:{ color: pregnantSows.length>0 ? "#f472b6" : "#6b3858" } },
              "\uD83E\uDD30 " + pregnantSows.length + " pregnant")
          )
        ),
        pigPending.length > 0 && React.createElement("div", { style:{ background:"#0e0810", border:"1px solid #3a2810",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#6b3858", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Piglets"),
          pigPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83D\uDC37 " + pc.damName + " \u2014 " + pc.offspring.length + " piglet" +
              (pc.offspring.length!==1?"s":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    React.createElement("div", {
      style: { margin: "0 16px 8px", background: "#0a0e14", border: "1px solid #1a3a5a", borderRadius: 8, overflow: "hidden" }
    },
      React.createElement("button", {
        onClick: function() { setCommunityBoarsOpen(function(v){ return !v; }); },
        style: { width: "100%", background: "transparent", border: "none", color: "#38bdf8",
          padding: "8px 12px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "bold",
          display: "flex", alignItems: "center", gap: 6, textAlign: "left" }
      },
        React.createElement("span", { style: { transform: communityBoarsOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s", display: "inline-block" } }, "\u25B6"),
        "Browse Community Boars"
      ),
      communityBoarsOpen && React.createElement("div", { style: { padding: "0 12px 10px" } },
        React.createElement(CommunityBoarsPanel, { user: user, money: money, onHireBoar: onHireBoar })
      )
    ),

    React.createElement("div", { style:{ display:"flex", gap:8, padding:"8px 16px", borderBottom:"1px solid #2a1018",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      React.createElement("span", { style:{ color:"#f9a8d4", fontSize:"0.72rem" } }, "\uD83C\uDFAA Heritage: "+heritageCount),
      React.createElement("span", { style:{ color:"#93c5fd", fontSize:"0.72rem" } }, "\uD83C\uDFED Commercial: "+commercialCount),
      React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } }, "\uD83D\uDC37 Mini: "+miniCount)
    ),

    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #2a1018",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      ["all","heritage","commercial","mini"].map(function(t) {
        var active = filterType===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilterType(t); },
          style:{ background: active?"#2a1018":"transparent", border:"1px solid "+(active?"#d4942a":"#4a2838"),
            color: active?"#d4942a":"#6b3858", borderRadius:5, padding:"3px 10px",
            cursor:"pointer", fontSize:"0.72rem", textTransform:"capitalize" } }, t);
      }),
      React.createElement("span", { style:{ color:"#4a2838", margin:"0 4px" } }, "|"),
      React.createElement("span", { style:{ color:"#6b3858", fontSize:"0.68rem" } }, "Sort:"),
      ["name","breed","health","perf","type"].map(function(s) {
        var active = listSort===s;
        return React.createElement("button", { key:s, onClick:function(){ setListSort(s); },
          style:{ background: active?"#1a2a0a":"transparent", border:"1px solid "+(active?"#22c55e":"#3a2018"),
            color: active?"#22c55e":"#6b3858", borderRadius:4, padding:"2px 7px",
            cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" } }, s);
      })
    ),

    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12 } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#6b3858", padding:"40px 0" } },
            "No pigs yet \u2014 buy some from the Livestock Market!")
        : React.createElement("div", { style:{ display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:10 } },
            sorted.map(function(s) {
              return React.createElement(PigCard, { key:s.id, pig:s, onSell:onSell, onRename:onRename, onLock:props.onLock, onListPigStud:onListPigStud });
            })
          )
    ),

    showBreeding && React.createElement(PigBreedingModal, {
      pigs: pigs,
      onClose: function(){ setShowBreeding(false); },
      onConfirm: function(sireId, damId){
        if (onBreedPig) onBreedPig(sireId, damId);
        setShowBreeding(false);
      }
    })
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DUCK DNA PANEL (inline or modal)
// ══════════════════════════════════════════════════════════════════════════════

function DuckDNAPanel(props) {
  var duck = props.duck;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!duck || !duck.genome) return null;
  var g = duck.genome;
  var ce = React.createElement;

  var perfQtls = typeof DUCK_PERF_QTLS !== "undefined" ? DUCK_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var healthQtls = typeof DUCK_HEALTH_QTLS !== "undefined" ? DUCK_HEALTH_QTLS : ["LegQ","RespiQ","GutQ","WingQ","FertQ"];
  var perfInfo = typeof DUCK_PERF_QTL_INFO !== "undefined" ? DUCK_PERF_QTL_INFO : {};
  var healthInfo = typeof DUCK_HEALTH_QTL_INFO !== "undefined" ? DUCK_HEALTH_QTL_INFO : {};

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#0c1a1e", border:"1px solid #1a4a5a", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#7dd3fc", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (duck.name || duck.breed)),
        ce("div", { style:{ color:"#4a8a9a", fontSize:"0.72rem" } },
          duck.breed + " \u00B7 " + (duck.coatColor||"") + " \u00B7 " + (duck.type||"dual") + " \u00B7 " + (duck.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #1a4a5a", color:"#4a8a9a",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:duck.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:duck.perfScore||0, color:"#7dd3fc" },
        { label:"Weight", value:(duck.weightLbs||5)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(duck.coi||0)+"%", color:(duck.coi||0)>=25?"#ef4444":"#22c55e" }
      ]
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#0a1218", border:"1px solid #1a3a4a", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#1a4a5a", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    ce("div", { style:{ color:"#7dd3fc", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(perfQtls.length,6)+",1fr)", gap:6, marginBottom:14 } },
      perfQtls.map(function(q) {
        var info = perfInfo[q] || { icon:"\u2B50", full:q, desc:"" };
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#7dd3fc":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#0a1218", border:"1px solid #1a3a4a",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#081018", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#3a7a6a", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(healthQtls.length,5)+",1fr)", gap:6 } },
      healthQtls.map(function(q) {
        var info = healthInfo[q] || { icon:"\u2764", full:q, desc:"" };
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#0a1218", border:"1px solid #1a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#081018", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#3a7a6a", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ══════════════════════════════════════════════════════════════════════════════
// DUCK CARD
// ══════════════════════════════════════════════════════════════════════════════

function DuckCard(props) {
  var duck = props.duck;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onLock = props.onLock;

  var _e = React.useState(false), editing = _e[0], setEditing = _e[1];
  var _n = React.useState(""), nameVal = _n[0], setNameVal = _n[1];
  var _d = React.useState(false), showDNA = _d[0], setShowDNA = _d[1];

  var duckAgeStatus = (typeof isDeclining==="function"&&isDeclining(duck.ageMonths||0,"duck")) ? "declining" : ((typeof isPastPrime==="function"&&isPastPrime(duck.ageMonths||0,"duck")) ? "past_prime" : "ok");
  var typeColors = {egg:"#fbbf24",meat:"#fca5a5",dual:"#7dd3fc",ornamental:"#c4b5fd"};
  var typeCol = typeColors[duck.type] || "#e8d0a8";

  var perfQtls = typeof DUCK_PERF_QTLS !== "undefined" ? DUCK_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var icons = {EGG:"\uD83E\uDD5A",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FORAGE:"\uD83D\uDC1B"};

  return React.createElement("div", {
    style:{ background: duckAgeStatus==="declining"?"#1a0808":"#0c1a1e", border:"1px solid "+(duckAgeStatus==="declining"?"#5a2a2a":"#1a3a4a"),
      borderRadius:10, overflow:"hidden" }
  },
    React.createElement("div", { style:{ padding:"10px 12px 8px", borderBottom:"1px solid #1a3a4a" } },
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
        React.createElement("div", { style:{ flex:1 } },
          editing
            ? React.createElement("div", { style:{ display:"flex", gap:4 } },
                React.createElement("input", { value:nameVal, onChange:function(e){setNameVal(e.target.value);},
                  style:{ background:"#081218", border:"1px solid #1a4a5a", color:"#f0e6d3", borderRadius:4, padding:"2px 6px", fontSize:"0.8rem", flex:1 } }),
                React.createElement("button", { onClick:function(){ if(nameVal.trim() && onRename) onRename(duck,nameVal.trim()); setEditing(false); },
                  style:{ background:"#1a3a0a", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2714"),
                React.createElement("button", { onClick:function(){ setEditing(false); },
                  style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2718")
              )
            : React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6 } },
                React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.88rem" } }, duck.name || duck.breed),
                React.createElement("span", { style:{ color:"#4a8a9a", fontSize:"0.65rem", cursor:"pointer" },
                  onClick:function(){ setNameVal(duck.name||""); setEditing(true); } }, "\u270F\uFE0F"),
                duck.locked && React.createElement("span", { style:{ background:"#1a0a2a", border:"1px solid #7c3aed", color:"#a78bfa",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83D\uDD12"),
                duckAgeStatus==="declining" && React.createElement("span", { style:{ background:"#2a0808", border:"1px solid #ef4444", color:"#fca5a5",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u26A0\uFE0F Declining"),
                duckAgeStatus==="past_prime" && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #eab308", color:"#fde68a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "Past Prime")
              ),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.65rem", marginTop:2 } },
            duck.breed + " \u00B7 " + (duck.coatColor||"") + " \u00B7 "),
          React.createElement("span", { style:{ color:typeCol, fontSize:"0.65rem" } }, duck.type||"dual")
        ),
        React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
          React.createElement("div", { style:{ color:(duck.sex==="M")?"#60a5fa":"#f472b6", fontSize:"0.7rem", fontWeight:"bold" } },
            (duck.sex==="M"?"\u2642 Drake":"\u2640 Hen")),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.62rem" } },
            Math.floor((duck.ageMonths||0)/12)+"y "+((duck.ageMonths||0)%12)+"m"),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.62rem" } }, (duck.weightLbs||5)+" lb")
        )
      )
    ),
    React.createElement("div", { style:{ padding:"6px 12px 8px" } },
      React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6 } },
        React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+duck.healthScore),
        React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+duck.perfScore),
        React.createElement("span", { style:{ color:"#4a8a9a", fontSize:"0.65rem" } }, "COI "+(duck.coi||0)+"%")
      ),
      duck.genome && duck.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
        perfQtls.map(function(q) {
          var v = duck.genome.perf[q]||[3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#7dd3fc":avg>=3?"#22c55e":"#64748b";
          return React.createElement("div", { key:q, style:{ flex:1 } },
            React.createElement("div", { style:{ fontSize:"0.5rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
            React.createElement("div", { style:{ background:"#1a3a4a", borderRadius:2, height:3, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            )
          );
        })
      ),
      duck.pregnantUntil && duck.pregnantUntil > Date.now() && React.createElement("div", { style:{ color:"#fbbf24", fontSize:"0.68rem", marginTop:4 } },
        "\uD83E\uDD5A Nesting \u2014 " + Math.max(0,Math.ceil((duck.pregnantUntil-Date.now())/(24*60*60*1000))) + " day(s) left")
    ),
    React.createElement("div", { style:{ display:"flex", gap:4, padding:"0 12px 8px", flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(!showDNA); },
        style:{ background:showDNA?"#0a1a08":"#0c1a1e", border:"1px solid "+(showDNA?"#84cc16":"#1a4a3a"),
          color:showDNA?"#84cc16":"#3a6a5a", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, showDNA?"\u25B2 Hide DNA":"\uD83E\uDDEC DNA"),
      React.createElement("button", {
        onClick:function(){ onSell(duck); },
        style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444",
          borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, "\uD83D\uDCB0 Sell"),
      onLock && React.createElement("button", {
        onClick:function(){ onLock(duck); },
        style:{ background:duck.locked?"#1a0a2a":"#0c1a1e", border:"1px solid "+(duck.locked?"#7c3aed":"#1a4a5a"),
          color:duck.locked?"#a78bfa":"#4a8a9a", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, duck.locked?"\uD83D\uDD13 Unlock":"\uD83D\uDD12 Lock")
    ),
    showDNA && React.createElement(DuckDNAPanel, { duck:duck, onClose:function(){ setShowDNA(false); } })
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DUCK BREEDING MODAL
// ══════════════════════════════════════════════════════════════════════════════

function DuckBreedingModal(props) {
  var ducks = props.ducks || [];
  var onClose = props.onClose;
  var onConfirm = props.onConfirm;

  var allDrakes = ducks.filter(function(s){ return s.sex==="M" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"duck")); });
  var allHens = ducks.filter(function(s){ return s.sex==="F" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"duck")); });

  var _ss = React.useState(null), selectedSire = _ss[0], setSelectedSire = _ss[1];
  var _sd = React.useState(null), selectedDam  = _sd[0], setSelectedDam  = _sd[1];
  var _sf = React.useState(""),   sireFilter   = _sf[0], setSireFilter   = _sf[1];
  var _df = React.useState(""),   damFilter    = _df[0], setDamFilter    = _df[1];
  var _dna = React.useState(null), dnaDuck     = _dna[0], setDnaDuck     = _dna[1];
  var _sortS = React.useState("perf"), sortS   = _sortS[0], setSortS    = _sortS[1];
  var _sortD = React.useState("perf"), sortD   = _sortD[0], setSortD    = _sortD[1];

  var sire = selectedSire ? ducks.find(function(s){ return s.id===selectedSire; }) : null;
  var dam  = selectedDam  ? ducks.find(function(s){ return s.id===selectedDam;  }) : null;

  var perfQtls = typeof DUCK_PERF_QTLS !== "undefined" ? DUCK_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var icons = {EGG:"\uD83E\uDD5A",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FORAGE:"\uD83D\uDC1B"};
  var typeColors = {egg:"#fbbf24",meat:"#fca5a5",dual:"#7dd3fc",ornamental:"#c4b5fd"};

  function filterAndSort(list, filter, sort) {
    var f = filter.toLowerCase();
    var filtered = f ? list.filter(function(s){
      return (s.name||"").toLowerCase().includes(f) || (s.breed||"").toLowerCase().includes(f) || (s.coatColor||"").toLowerCase().includes(f) || (s.type||"").toLowerCase().includes(f);
    }) : list;
    return filtered.slice().sort(function(a,b){
      if (sort==="perf") return (b.perfScore||0)-(a.perfScore||0);
      if (sort==="health") return (b.healthScore||0)-(a.healthScore||0);
      if (sort==="name") return (a.name||"").localeCompare(b.name||"");
      return 0;
    });
  }

  function DuckOption(s, selected, onSelect, accentColor) {
    var perf = s.genome && s.genome.perf;
    var typeCol = typeColors[s.type] || "#e8d0a8";
    return React.createElement("div", { key:s.id, style:{ background:selected?"#0a1a18":"#0c1a1e", border:"1px solid "+(selected?accentColor:"#1a3a4a"), borderRadius:8, marginBottom:6, overflow:"hidden" } },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); onSelect(s.id); }, style:{ padding:"9px 10px", cursor:"pointer" } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 } },
          React.createElement("div", { style:{ flex:1 } },
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem" } }, s.name),
            React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.67rem" } }, s.breed+" \u00B7 "+(s.coatColor||"")+" \u00B7 "),
            React.createElement("span", { style:{ color:typeCol, fontSize:"0.67rem" } }, s.type||"dual")
          ),
          React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#22c55e", fontWeight:"bold" } }, "\u2764\uFE0F "+s.healthScore),
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#7dd3fc", fontWeight:"bold" } }, "\u26A1 "+s.perfScore)
          )
        ),
        perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
          perfQtls.map(function(q) {
            var v = perf[q]||[3,3]; var avg = (v[0]+v[1])/2; var pct = Math.round((avg/5)*100);
            var col = avg>=4?"#7dd3fc":avg>=3?"#22c55e":"#64748b";
            return React.createElement("div", { key:q, style:{ flex:1 } },
              React.createElement("div", { style:{ fontSize:"0.52rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
              React.createElement("div", { style:{ background:"#1a3a4a", borderRadius:2, height:3, overflow:"hidden" } },
                React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
              )
            );
          })
        )
      ),
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); setDnaDuck(dnaDuck&&dnaDuck.id===s.id?null:s); },
        style:{ borderTop:"1px solid #1a3a4a", padding:"4px 10px", cursor:"pointer", background:dnaDuck&&dnaDuck.id===s.id?"#0a1a08":"transparent",
          color:dnaDuck&&dnaDuck.id===s.id?"#84cc16":"#3a6a5a", fontSize:"0.62rem", textAlign:"center" }
      }, dnaDuck&&dnaDuck.id===s.id?"\u25B2 Hide DNA":"\uD83E\uDDEC View DNA")
    );
  }

  var filteredDrakes = filterAndSort(allDrakes, sireFilter, sortS);
  var filteredHens = filterAndSort(allHens, damFilter, sortD);
  var crossbred = sire && dam && sire.breed !== dam.breed;

  function SortBar(sort, setSort, color) {
    return React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:6 } },
      [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(o){
        return React.createElement("button", { key:o[0], onClick:function(e){ e.stopPropagation(); setSort(o[0]); },
          style:{ flex:1, background:sort===o[0]?"#0a1a18":"transparent", border:"1px solid "+(sort===o[0]?color:"#1a3a4a"),
            color:sort===o[0]?color:"#4a8a9a", borderRadius:4, padding:"2px 0", fontSize:"0.62rem", cursor:"pointer" }
        }, o[1]);
      })
    );
  }

  return React.createElement("div", { onClick:onClose, style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1300, display:"flex", alignItems:"center", justifyContent:"center", padding:12 } },
    React.createElement("div", { onClick:function(e){ e.stopPropagation(); }, style:{ background:"#0c1a1e", border:"1px solid #1a3a4a", borderRadius:12, width:"100%", maxWidth:860, maxHeight:"92vh", display:"flex", flexDirection:"column" } },
      React.createElement("div", { style:{ padding:"16px 20px 12px", borderBottom:"1px solid #1a3a4a", flexShrink:0 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
          React.createElement("div", {},
            React.createElement("div", { style:{ color:"#7dd3fc", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83E\uDD1D Breed Ducks"),
            React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.72rem", marginTop:2 } }, "Incubation: 4 days \u00B7 4\u201310 ducklings \u00B7 Cross-breeds produce Crossbred ducklings")
          ),
          React.createElement("button", { onClick:onClose, style:{ background:"none", border:"1px solid #1a3a4a", color:"#4a8a9a", borderRadius:5, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem" } }, "\u2715 Close")
        )
      ),
      React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #1a3a4a", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #1a3a4a", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#60a5fa", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2642 DRAKES ("+allDrakes.length+")"),
            React.createElement("input", { value:sireFilter, onChange:function(e){ setSireFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#0a1218", border:"1px solid #1a3a4a", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortS, setSortS, "#60a5fa")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredDrakes.length===0 ? React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allDrakes.length===0?"No available drakes":"No matches")
            : filteredDrakes.map(function(s){ return DuckOption(s, selectedSire===s.id, setSelectedSire, "#60a5fa"); })
          )
        ),
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:dnaDuck?"1px solid #1a3a4a":"none", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #1a3a4a", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2640 HENS ("+allHens.length+")"),
            React.createElement("input", { value:damFilter, onChange:function(e){ setDamFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#0a1218", border:"1px solid #1a3a4a", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortD, setSortD, "#f472b6")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredHens.length===0 ? React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allHens.length===0?"No available hens":"No matches")
            : filteredHens.map(function(s){ return DuckOption(s, selectedDam===s.id, setSelectedDam, "#f472b6"); })
          )
        ),
        dnaDuck && React.createElement("div", { style:{ width:280, flexShrink:0, overflowY:"auto" } },
          React.createElement(DuckDNAPanel, { duck:dnaDuck, inline:true, onClose:function(){ setDnaDuck(null); } })
        )
      ),
      React.createElement("div", { style:{ padding:"12px 20px", borderTop:"1px solid #1a3a4a", flexShrink:0 } },
        sire && dam
          ? React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, marginBottom:10, flexWrap:"wrap" } },
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#0a1218", border:"1px solid #1a3a4a", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2642 "+sire.name),
                React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.63rem" } }, sire.breed+" \u00B7 "+(sire.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+sire.healthScore+"  \u26A1 "+sire.perfScore)
              ),
              React.createElement("div", { style:{ color:"#7dd3fc", fontSize:"1.1rem", fontWeight:"bold" } }, "\u00D7"),
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#0a1218", border:"1px solid #1a3a4a", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2640 "+dam.name),
                React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.63rem" } }, dam.breed+" \u00B7 "+(dam.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+dam.healthScore+"  \u26A1 "+dam.perfScore)
              ),
              crossbred && React.createElement("div", { style:{ color:"#fde68a", fontSize:"0.65rem", background:"#2d1e00", border:"1px solid #ca8a04", borderRadius:4, padding:"3px 8px" } }, "\u26A0\uFE0F Crossbred ducklings")
            )
          : React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.75rem", textAlign:"center", marginBottom:10 } }, "Select a drake and a hen to continue"),
        React.createElement("button", {
          disabled:!sire||!dam,
          onClick:function(e){ e.stopPropagation(); if(sire&&dam) onConfirm(sire.id, dam.id); },
          style:{ width:"100%", padding:"11px 0", borderRadius:8, cursor:sire&&dam?"pointer":"not-allowed",
            background:sire&&dam?"#0a1a18":"#081218", border:"1px solid "+(sire&&dam?"#84cc16":"#1a3a4a"),
            color:sire&&dam?"#84cc16":"#2a5a4a", fontWeight:"bold", fontSize:"0.9rem" }
        }, sire&&dam?"\uD83E\uDD1D Confirm Breeding \u2014 Ducklings due in 4 days":"No pairing selected")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DUCK VIEW (Management Tab)
// ══════════════════════════════════════════════════════════════════════════════

function DuckView(props) {
  var ducks = props.ducks || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var pendingCalves = props.pendingCalves || [];
  var onBreedDuck = props.onBreedDuck;

  var _f = React.useState("all"), filterType = _f[0], setFilterType = _f[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];
  var _breed = React.useState(false), showBreeding = _breed[0], setShowBreeding = _breed[1];

  var drakes = ducks.filter(function(s){ return s.sex==="M" && !s.retiredLivestock; });
  var hens = ducks.filter(function(s){ return s.sex==="F" && !s.retiredLivestock; });
  var nestingHens = hens.filter(function(s){ return s.pregnantUntil && s.pregnantUntil > Date.now(); });
  var eggCount = ducks.filter(function(s){ return s.type==="egg"; }).length;
  var meatCount = ducks.filter(function(s){ return s.type==="meat"; }).length;
  var dualCount = ducks.filter(function(s){ return s.type==="dual"; }).length;
  var ornCount = ducks.filter(function(s){ return s.type==="ornamental"; }).length;

  var filtered = filterType==="all" ? ducks :
    ducks.filter(function(s){ return s.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var duckPending = pendingCalves.filter(function(pc){ return pc.species==="duck"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #1a3a4a", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83E\uDD86"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#7dd3fc", fontWeight:"bold", fontSize:"1rem" } }, "Duck Management"),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.7rem" } },
            ducks.length+" duck"+(ducks.length!==1?"s":"")+" \u00B7 "+drakes.length+" drake"+(drakes.length!==1?"s":"")+" \u00B7 "+hens.length+" hen"+(hens.length!==1?"s":"")+
            (nestingHens.length>0?" \u00B7 "+nestingHens.length+" nesting":""))
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        ducks.length >= 2 && React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setShowBreeding(true); },
          disabled: drakes.length===0 || hens.length===0,
          style:{ background: (drakes.length>0&&hens.length>0)?"#0a2a3a":"#0c1a1e",
            border:"1px solid "+((drakes.length>0&&hens.length>0)?"#7dd3fc":"#1a3a4a"),
            color: (drakes.length>0&&hens.length>0)?"#7dd3fc":"#3a5a6a",
            borderRadius:8, padding:"6px 14px", cursor:(drakes.length>0&&hens.length>0)?"pointer":"not-allowed",
            fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83E\uDD1D Breed"),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #1a4a5a", color:"#7dd3fc",
            borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
        }, "\u2190 Back to Farm")
      )
    ),

    ducks.length > 0 && React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #1a3a4a",
      background:"#0a1820", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom: (drakes.length>0||duckPending.length>0)?8:0 } },
        React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.65rem" } },
            "Ducks breed naturally \u2014 your drake"+(drakes.length!==1?"s":"")+" will cover eligible hens automatically")
        ),
        React.createElement("div", { style:{ background:"#22c55e", borderRadius:10, padding:"2px 10px", flexShrink:0 } },
          React.createElement("span", { style:{ color:"#fff", fontSize:"0.65rem", fontWeight:"bold" } }, "ALWAYS ON"))
      ),

      React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        drakes.length > 0 && React.createElement("div", { style:{ background:"#0c1a1e", border:"1px solid #1a5a6a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#7dd3fc", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83E\uDD86 Flock Drake"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } },
            drakes.sort(function(a,b){return (b.perfScore||0)-(a.perfScore||0);})[0].name || drakes[0].breed),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.65rem" } },
            drakes[0].breed + " \u00B7 \u2764\uFE0F" + (drakes[0].healthScore||0) + " \u26A1" + (drakes[0].perfScore||0) + " \u00B7 covers " + hens.length + " hen" + (hens.length!==1?"s":""))
        ),
        drakes.length === 0 && hens.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Drake"),
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.65rem" } },
            hens.length + " hen"+(hens.length!==1?"s":"")+" won\u2019t breed without a drake")
        ),
        React.createElement("div", { style:{ background:"#0c1a1e", border:"1px solid #1a3a4a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Flock Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + drakes.length + " drake" + (drakes.length!==1?"s":"")),
            React.createElement("div", null, "\u2640 " + hens.length + " hen" + (hens.length!==1?"s":"")),
            React.createElement("div", { style:{ color: nestingHens.length>0 ? "#fbbf24" : "#4a8a9a" } },
              "\uD83E\uDD5A " + nestingHens.length + " nesting")
          )
        ),
        duckPending.length > 0 && React.createElement("div", { style:{ background:"#0c1a1e", border:"1px solid #1a3a4a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#4a8a9a", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Ducklings"),
          duckPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83E\uDD86 " + pc.damName + " \u2014 " + pc.offspring.length + " duckling" +
              (pc.offspring.length!==1?"s":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    React.createElement("div", { style:{ display:"flex", gap:8, padding:"8px 16px", borderBottom:"1px solid #1a3a4a",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.72rem" } }, "\uD83E\uDD5A Egg: "+eggCount),
      React.createElement("span", { style:{ color:"#fca5a5", fontSize:"0.72rem" } }, "\uD83E\uDD69 Meat: "+meatCount),
      React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem" } }, "\u2696\uFE0F Dual: "+dualCount),
      React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } }, "\uD83C\uDFA8 Ornamental: "+ornCount)
    ),

    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #1a3a4a",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      ["all","egg","meat","dual","ornamental"].map(function(t) {
        var active = filterType===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilterType(t); },
          style:{ background: active?"#0a2a3a":"transparent", border:"1px solid "+(active?"#7dd3fc":"#1a4a5a"),
            color: active?"#7dd3fc":"#4a8a9a", borderRadius:5, padding:"3px 10px",
            cursor:"pointer", fontSize:"0.72rem", textTransform:"capitalize" } }, t);
      }),
      React.createElement("span", { style:{ color:"#1a4a5a", margin:"0 4px" } }, "|"),
      React.createElement("span", { style:{ color:"#4a8a9a", fontSize:"0.68rem" } }, "Sort:"),
      ["name","breed","health","perf","type"].map(function(s) {
        var active = listSort===s;
        return React.createElement("button", { key:s, onClick:function(){ setListSort(s); },
          style:{ background: active?"#0a1a18":"transparent", border:"1px solid "+(active?"#22c55e":"#1a3a3a"),
            color: active?"#22c55e":"#4a8a9a", borderRadius:4, padding:"2px 7px",
            cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" } }, s);
      })
    ),

    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12 } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#4a8a9a", padding:"40px 0" } },
            "No ducks yet \u2014 buy some from the Livestock Market!")
        : React.createElement("div", { style:{ display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:10 } },
            sorted.map(function(s) {
              return React.createElement(DuckCard, { key:s.id, duck:s, onSell:onSell, onRename:onRename, onLock:props.onLock });
            })
          )
    ),

    showBreeding && React.createElement(DuckBreedingModal, {
      ducks: ducks,
      onClose: function(){ setShowBreeding(false); },
      onConfirm: function(sireId, damId){
        if (onBreedDuck) onBreedDuck(sireId, damId);
        setShowBreeding(false);
      }
    })
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CHICKEN DNA PANEL
// ══════════════════════════════════════════════════════════════════════════════

function ChickenDNAPanel(props) {
  var chicken = props.chicken;
  var onClose = props.onClose;
  var inline = props.inline;
  if (!chicken || !chicken.genome) return null;
  var g = chicken.genome;
  var ce = React.createElement;

  var perfQtls = typeof CHICKEN_PERF_QTLS !== "undefined" ? CHICKEN_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var healthQtls = typeof CHICKEN_HEALTH_QTLS !== "undefined" ? CHICKEN_HEALTH_QTLS : ["LegQ","RespiQ","GutQ","ParQ","FertQ"];
  var perfInfo = typeof CHICKEN_PERF_QTL_INFO !== "undefined" ? CHICKEN_PERF_QTL_INFO : {};
  var healthInfo = typeof CHICKEN_HEALTH_QTL_INFO !== "undefined" ? CHICKEN_HEALTH_QTL_INFO : {};

  var innerContent = ce("div", {
    onClick: inline ? null : function(e){ e.stopPropagation(); },
    style: { background:"#1a1208", border:"1px solid #4a3a1a", borderRadius:12,
      padding:20, maxWidth:560, width:inline?"100%":"92%", maxHeight:inline?"none":"80vh",
      overflowY:"auto", boxShadow: inline?"none":"0 8px 40px rgba(0,0,0,0.7)" }
  },
    ce("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 } },
      ce("div", null,
        ce("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"1rem" } }, "\uD83E\uDDEC " + (chicken.name || chicken.breed)),
        ce("div", { style:{ color:"#8a6a3a", fontSize:"0.72rem" } },
          chicken.breed + " \u00B7 " + (chicken.coatColor||"") + " \u00B7 " + (chicken.type||"dual") + " \u00B7 " + (chicken.sex==="M"?"\u2642":"\u2640"))
      ),
      !inline && ce("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a1a", color:"#8a6a3a",
          borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715")
    ),
    ce("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 } },
      [
        { label:"Health", value:chicken.healthScore||0, color:"#22c55e" },
        { label:"Perf", value:chicken.perfScore||0, color:"#fbbf24" },
        { label:"Weight", value:(chicken.weightLbs||5)+" lb", color:"#e8d0a8" },
        { label:"COI", value:(chicken.coi||0)+"%", color:(chicken.coi||0)>=25?"#ef4444":"#22c55e" }
      ]
      .map(function(s,i) {
        return ce("div", { key:i, style:{ background:"#140e04", border:"1px solid #3a2a10", borderRadius:6,
          padding:"6px 10px", textAlign:"center", minWidth:60 } },
          ce("div", { style:{ color:"#5a4a2a", fontSize:"0.58rem", textTransform:"uppercase" } }, s.label),
          ce("div", { style:{ color:s.color, fontWeight:"bold", fontSize:"0.82rem" } }, s.value)
        );
      })
    ),
    ce("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Performance QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(perfQtls.length,6)+",1fr)", gap:6, marginBottom:14 } },
      perfQtls.map(function(q) {
        var info = perfInfo[q] || { icon:"\u2B50", full:q, desc:"" };
        var v = (g.perf||{})[q] || [3,3];
        var avg = (v[0]+v[1])/2;
        var pct = Math.round((avg/5)*100);
        var col = avg>=4?"#fbbf24":avg>=3?"#22c55e":"#64748b";
        return ce("div", { key:q, style:{ background:"#140e04", border:"1px solid #3a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a0804", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontFamily:"monospace", fontSize:"0.7rem", color:"#f0e6d3", marginBottom:2 } }, v[0]+"/"+v[1]),
          ce("div", { style:{ fontSize:"0.58rem", color:"#6a5a3a", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    ),
    ce("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.78rem", textTransform:"uppercase",
      letterSpacing:"0.05em", marginBottom:8 } }, "Health QTLs"),
    ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat("+Math.min(healthQtls.length,5)+",1fr)", gap:6 } },
      healthQtls.map(function(q) {
        var info = healthInfo[q] || { icon:"\u2764", full:q, desc:"" };
        var alleles = (g.health||{})[q] || ["G","G"];
        var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
        var pct = good===2?100:good===1?50:0;
        var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
        var lbl = good===2?"Good":good===1?"Carrier":"Poor";
        return ce("div", { key:q, style:{ background:"#140e04", border:"1px solid #2a2a10",
          borderRadius:6, padding:"8px 6px", textAlign:"center" } },
          ce("div", { style:{ fontSize:"1.1rem", marginBottom:3 } }, info.icon),
          ce("div", { style:{ fontSize:"0.62rem", color:col, fontWeight:"bold", marginBottom:4 } }, info.full),
          ce("div", { style:{ background:"#0a0804", borderRadius:3, height:6, overflow:"hidden", marginBottom:4 } },
            ce("div", { style:{ background:col, width:pct+"%", height:"100%" } })
          ),
          ce("div", { style:{ fontSize:"0.68rem", color:col, fontWeight:"bold" } }, lbl),
          ce("div", { style:{ fontSize:"0.58rem", color:"#6a5a3a", marginTop:3, lineHeight:1.3 } }, info.desc)
        );
      })
    )
  );

  if (inline) return innerContent;
  return ce("div", {
    onClick: onClose,
    style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }
  }, innerContent);
}

// ══════════════════════════════════════════════════════════════════════════════
// CHICKEN CARD
// ══════════════════════════════════════════════════════════════════════════════

function ChickenCard(props) {
  var chicken = props.chicken;
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onLock = props.onLock;

  var _e = React.useState(false), editing = _e[0], setEditing = _e[1];
  var _n = React.useState(""), nameVal = _n[0], setNameVal = _n[1];
  var _d = React.useState(false), showDNA = _d[0], setShowDNA = _d[1];

  var chickenAgeStatus = (typeof isDeclining==="function"&&isDeclining(chicken.ageMonths||0,"chicken")) ? "declining" : ((typeof isPastPrime==="function"&&isPastPrime(chicken.ageMonths||0,"chicken")) ? "past_prime" : "ok");
  var typeColors = {egg:"#fbbf24",meat:"#fca5a5",dual:"#7dd3fc",ornamental:"#c4b5fd"};
  var typeCol = typeColors[chicken.type] || "#e8d0a8";

  var perfQtls = typeof CHICKEN_PERF_QTLS !== "undefined" ? CHICKEN_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var icons = {EGG:"\uD83E\uDD5A",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FORAGE:"\uD83D\uDC1B"};

  return React.createElement("div", {
    style:{ background: chickenAgeStatus==="declining"?"#1a0808":"#1a1208", border:"1px solid "+(chickenAgeStatus==="declining"?"#5a2a2a":"#4a3a1a"),
      borderRadius:10, overflow:"hidden" }
  },
    React.createElement("div", { style:{ padding:"10px 12px 8px", borderBottom:"1px solid #3a2a10" } },
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" } },
        React.createElement("div", { style:{ flex:1 } },
          editing
            ? React.createElement("div", { style:{ display:"flex", gap:4 } },
                React.createElement("input", { value:nameVal, onChange:function(e){setNameVal(e.target.value);},
                  style:{ background:"#140e04", border:"1px solid #4a3a1a", color:"#f0e6d3", borderRadius:4, padding:"2px 6px", fontSize:"0.8rem", flex:1 } }),
                React.createElement("button", { onClick:function(){ if(nameVal.trim() && onRename) onRename(chicken,nameVal.trim()); setEditing(false); },
                  style:{ background:"#1a3a0a", border:"1px solid #22c55e", color:"#22c55e", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2714"),
                React.createElement("button", { onClick:function(){ setEditing(false); },
                  style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444", borderRadius:4, padding:"2px 6px", cursor:"pointer", fontSize:"0.7rem" } }, "\u2718")
              )
            : React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6 } },
                React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.88rem" } }, chicken.name || chicken.breed),
                React.createElement("span", { style:{ color:"#8a6a3a", fontSize:"0.65rem", cursor:"pointer" },
                  onClick:function(){ setNameVal(chicken.name||""); setEditing(true); } }, "\u270F\uFE0F"),
                chicken.locked && React.createElement("span", { style:{ background:"#1a0a2a", border:"1px solid #7c3aed", color:"#a78bfa",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem", fontWeight:"bold" } }, "\uD83D\uDD12"),
                chickenAgeStatus==="declining" && React.createElement("span", { style:{ background:"#2a0808", border:"1px solid #ef4444", color:"#fca5a5",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "\u26A0\uFE0F Declining"),
                chickenAgeStatus==="past_prime" && React.createElement("span", { style:{ background:"#1a1a08", border:"1px solid #eab308", color:"#fde68a",
                  borderRadius:3, padding:"0 4px", fontSize:"0.55rem" } }, "Past Prime")
              ),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.65rem", marginTop:2 } },
            chicken.breed + " \u00B7 " + (chicken.coatColor||"") + " \u00B7 "),
          React.createElement("span", { style:{ color:typeCol, fontSize:"0.65rem" } }, chicken.type||"dual")
        ),
        React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
          React.createElement("div", { style:{ color:(chicken.sex==="M")?"#60a5fa":"#f472b6", fontSize:"0.7rem", fontWeight:"bold" } },
            (chicken.sex==="M"?"\u2642 Rooster":"\u2640 Hen")),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.62rem" } },
            Math.floor((chicken.ageMonths||0)/12)+"y "+((chicken.ageMonths||0)%12)+"m"),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.62rem" } }, (chicken.weightLbs||5)+" lb")
        )
      )
    ),
    React.createElement("div", { style:{ padding:"6px 12px 8px" } },
      React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:6 } },
        React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.72rem", fontWeight:"bold" } }, "\u2764\uFE0F "+chicken.healthScore),
        React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.72rem", fontWeight:"bold" } }, "\u26A1 "+chicken.perfScore),
        React.createElement("span", { style:{ color:"#8a6a3a", fontSize:"0.65rem" } }, "COI "+(chicken.coi||0)+"%")
      ),
      chicken.genome && chicken.genome.perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
        perfQtls.map(function(q) {
          var v = chicken.genome.perf[q]||[3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#fbbf24":avg>=3?"#22c55e":"#64748b";
          return React.createElement("div", { key:q, style:{ flex:1 } },
            React.createElement("div", { style:{ fontSize:"0.5rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
            React.createElement("div", { style:{ background:"#3a2a10", borderRadius:2, height:3, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
            )
          );
        })
      ),
      chicken.pregnantUntil && chicken.pregnantUntil > Date.now() && React.createElement("div", { style:{ color:"#fbbf24", fontSize:"0.68rem", marginTop:4 } },
        "\uD83E\uDD5A Brooding \u2014 " + Math.max(0,Math.ceil((chicken.pregnantUntil-Date.now())/(24*60*60*1000))) + " day(s) left")
    ),
    React.createElement("div", { style:{ display:"flex", gap:4, padding:"0 12px 8px", flexWrap:"wrap" } },
      React.createElement("button", {
        onClick:function(){ setShowDNA(!showDNA); },
        style:{ background:showDNA?"#1a1a08":"#1a1208", border:"1px solid "+(showDNA?"#84cc16":"#4a3a1a"),
          color:showDNA?"#84cc16":"#6a5a3a", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, showDNA?"\u25B2 Hide DNA":"\uD83E\uDDEC DNA"),
      React.createElement("button", {
        onClick:function(){ onSell(chicken); },
        style:{ background:"#2a0a0a", border:"1px solid #5a2a2a", color:"#ef4444",
          borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, "\uD83D\uDCB0 Sell"),
      onLock && React.createElement("button", {
        onClick:function(){ onLock(chicken); },
        style:{ background:chicken.locked?"#1a0a2a":"#1a1208", border:"1px solid "+(chicken.locked?"#7c3aed":"#4a3a1a"),
          color:chicken.locked?"#a78bfa":"#8a6a3a", borderRadius:5, padding:"3px 8px", cursor:"pointer", fontSize:"0.65rem" }
      }, chicken.locked?"\uD83D\uDD13 Unlock":"\uD83D\uDD12 Lock")
    ),
    showDNA && React.createElement(ChickenDNAPanel, { chicken:chicken, onClose:function(){ setShowDNA(false); } })
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CHICKEN BREEDING MODAL
// ══════════════════════════════════════════════════════════════════════════════

function ChickenBreedingModal(props) {
  var chickens = props.chickens || [];
  var onClose = props.onClose;
  var onConfirm = props.onConfirm;

  var allRoosters = chickens.filter(function(s){ return s.sex==="M" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"chicken")); });
  var allHens = chickens.filter(function(s){ return s.sex==="F" && !s.pregnantUntil && !s.locked && !s.retiredLivestock && (typeof canBreedByAge!=="function"||canBreedByAge(s.ageMonths||0,"chicken")); });

  var _ss = React.useState(null), selectedSire = _ss[0], setSelectedSire = _ss[1];
  var _sd = React.useState(null), selectedDam  = _sd[0], setSelectedDam  = _sd[1];
  var _sf = React.useState(""),   sireFilter   = _sf[0], setSireFilter   = _sf[1];
  var _df = React.useState(""),   damFilter    = _df[0], setDamFilter    = _df[1];
  var _dna = React.useState(null), dnaChicken  = _dna[0], setDnaChicken  = _dna[1];
  var _sortS = React.useState("perf"), sortS   = _sortS[0], setSortS    = _sortS[1];
  var _sortD = React.useState("perf"), sortD   = _sortD[0], setSortD    = _sortD[1];

  var sire = selectedSire ? chickens.find(function(s){ return s.id===selectedSire; }) : null;
  var dam  = selectedDam  ? chickens.find(function(s){ return s.id===selectedDam;  }) : null;

  var perfQtls = typeof CHICKEN_PERF_QTLS !== "undefined" ? CHICKEN_PERF_QTLS : ["EGG","GROWTH","MUSCLE","TEMP","HARDY","FORAGE"];
  var icons = {EGG:"\uD83E\uDD5A",GROWTH:"\uD83D\uDCC8",MUSCLE:"\uD83E\uDD69",TEMP:"\uD83E\uDDD8",HARDY:"\uD83C\uDF3F",FORAGE:"\uD83D\uDC1B"};
  var typeColors = {egg:"#fbbf24",meat:"#fca5a5",dual:"#7dd3fc",ornamental:"#c4b5fd"};

  function filterAndSort(list, filter, sort) {
    var f = filter.toLowerCase();
    var filtered = f ? list.filter(function(s){
      return (s.name||"").toLowerCase().includes(f) || (s.breed||"").toLowerCase().includes(f) || (s.coatColor||"").toLowerCase().includes(f) || (s.type||"").toLowerCase().includes(f);
    }) : list;
    return filtered.slice().sort(function(a,b){
      if (sort==="perf") return (b.perfScore||0)-(a.perfScore||0);
      if (sort==="health") return (b.healthScore||0)-(a.healthScore||0);
      if (sort==="name") return (a.name||"").localeCompare(b.name||"");
      return 0;
    });
  }

  function ChickenOption(s, selected, onSelect, accentColor) {
    var perf = s.genome && s.genome.perf;
    var typeCol = typeColors[s.type] || "#e8d0a8";
    return React.createElement("div", { key:s.id, style:{ background:selected?"#1a1a08":"#1a1208", border:"1px solid "+(selected?accentColor:"#4a3a1a"), borderRadius:8, marginBottom:6, overflow:"hidden" } },
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); onSelect(s.id); }, style:{ padding:"9px 10px", cursor:"pointer" } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 } },
          React.createElement("div", { style:{ flex:1 } },
            React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.85rem" } }, s.name),
            React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.67rem" } }, s.breed+" \u00B7 "+(s.coatColor||"")+" \u00B7 "),
            React.createElement("span", { style:{ color:typeCol, fontSize:"0.67rem" } }, s.type||"dual")
          ),
          React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginLeft:8 } },
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#22c55e", fontWeight:"bold" } }, "\u2764\uFE0F "+s.healthScore),
            React.createElement("div", { style:{ fontSize:"0.68rem", color:"#fbbf24", fontWeight:"bold" } }, "\u26A1 "+s.perfScore)
          )
        ),
        perf && React.createElement("div", { style:{ display:"flex", gap:3 } },
          perfQtls.map(function(q) {
            var v = perf[q]||[3,3]; var avg = (v[0]+v[1])/2; var pct = Math.round((avg/5)*100);
            var col = avg>=4?"#fbbf24":avg>=3?"#22c55e":"#64748b";
            return React.createElement("div", { key:q, style:{ flex:1 } },
              React.createElement("div", { style:{ fontSize:"0.52rem", color:col, textAlign:"center", marginBottom:1 } }, icons[q]||"\u2B50"),
              React.createElement("div", { style:{ background:"#3a2a10", borderRadius:2, height:3, overflow:"hidden" } },
                React.createElement("div", { style:{ background:col, width:pct+"%", height:"100%" } })
              )
            );
          })
        )
      ),
      React.createElement("div", { onClick:function(e){ e.stopPropagation(); setDnaChicken(dnaChicken&&dnaChicken.id===s.id?null:s); },
        style:{ borderTop:"1px solid #3a2a10", padding:"4px 10px", cursor:"pointer", background:dnaChicken&&dnaChicken.id===s.id?"#1a1a08":"transparent",
          color:dnaChicken&&dnaChicken.id===s.id?"#84cc16":"#6a5a3a", fontSize:"0.62rem", textAlign:"center" }
      }, dnaChicken&&dnaChicken.id===s.id?"\u25B2 Hide DNA":"\uD83E\uDDEC View DNA")
    );
  }

  var filteredRoosters = filterAndSort(allRoosters, sireFilter, sortS);
  var filteredHens = filterAndSort(allHens, damFilter, sortD);
  var crossbred = sire && dam && sire.breed !== dam.breed;

  function SortBar(sort, setSort, color) {
    return React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:6 } },
      [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(o){
        return React.createElement("button", { key:o[0], onClick:function(e){ e.stopPropagation(); setSort(o[0]); },
          style:{ flex:1, background:sort===o[0]?"#1a1a08":"transparent", border:"1px solid "+(sort===o[0]?color:"#3a2a10"),
            color:sort===o[0]?color:"#8a6a3a", borderRadius:4, padding:"2px 0", fontSize:"0.62rem", cursor:"pointer" }
        }, o[1]);
      })
    );
  }

  return React.createElement("div", { onClick:onClose, style:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1300, display:"flex", alignItems:"center", justifyContent:"center", padding:12 } },
    React.createElement("div", { onClick:function(e){ e.stopPropagation(); }, style:{ background:"#1a1208", border:"1px solid #4a3a1a", borderRadius:12, width:"100%", maxWidth:860, maxHeight:"92vh", display:"flex", flexDirection:"column" } },
      React.createElement("div", { style:{ padding:"16px 20px 12px", borderBottom:"1px solid #4a3a1a", flexShrink:0 } },
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
          React.createElement("div", {},
            React.createElement("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"1.05rem" } }, "\uD83E\uDD1D Breed Chickens"),
            React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.72rem", marginTop:2 } }, "Incubation: 3 days \u00B7 4\u20138 chicks \u00B7 Cross-breeds produce Crossbred chicks")
          ),
          React.createElement("button", { onClick:onClose, style:{ background:"none", border:"1px solid #4a3a1a", color:"#8a6a3a", borderRadius:5, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem" } }, "\u2715 Close")
        )
      ),
      React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:"1px solid #4a3a1a", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #4a3a1a", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#60a5fa", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2642 ROOSTERS ("+allRoosters.length+")"),
            React.createElement("input", { value:sireFilter, onChange:function(e){ setSireFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#140e04", border:"1px solid #3a2a10", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortS, setSortS, "#60a5fa")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredRoosters.length===0 ? React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allRoosters.length===0?"No available roosters":"No matches")
            : filteredRoosters.map(function(s){ return ChickenOption(s, selectedSire===s.id, setSelectedSire, "#60a5fa"); })
          )
        ),
        React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", borderRight:dnaChicken?"1px solid #4a3a1a":"none", overflow:"hidden" } },
          React.createElement("div", { style:{ padding:"10px 12px 6px", borderBottom:"1px solid #4a3a1a", flexShrink:0 } },
            React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"0.75rem", marginBottom:6 } }, "\u2640 HENS ("+allHens.length+")"),
            React.createElement("input", { value:damFilter, onChange:function(e){ setDamFilter(e.target.value); }, onClick:function(e){ e.stopPropagation(); },
              placeholder:"Search name / breed / type...", style:{ width:"100%", background:"#140e04", border:"1px solid #3a2a10", color:"#f0e6d3", borderRadius:5, padding:"4px 8px", fontSize:"0.7rem", marginBottom:6, boxSizing:"border-box" } }),
            SortBar(sortD, setSortD, "#f472b6")
          ),
          React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 12px" } },
            filteredHens.length===0 ? React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.78rem", padding:"16px 0", textAlign:"center" } }, allHens.length===0?"No available hens":"No matches")
            : filteredHens.map(function(s){ return ChickenOption(s, selectedDam===s.id, setSelectedDam, "#f472b6"); })
          )
        ),
        dnaChicken && React.createElement("div", { style:{ width:280, flexShrink:0, overflowY:"auto" } },
          React.createElement(ChickenDNAPanel, { chicken:dnaChicken, inline:true, onClose:function(){ setDnaChicken(null); } })
        )
      ),
      React.createElement("div", { style:{ padding:"12px 20px", borderTop:"1px solid #4a3a1a", flexShrink:0 } },
        sire && dam
          ? React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, marginBottom:10, flexWrap:"wrap" } },
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#140e04", border:"1px solid #3a2a10", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2642 "+sire.name),
                React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.63rem" } }, sire.breed+" \u00B7 "+(sire.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+sire.healthScore+"  \u26A1 "+sire.perfScore)
              ),
              React.createElement("div", { style:{ color:"#fbbf24", fontSize:"1.1rem", fontWeight:"bold" } }, "\u00D7"),
              React.createElement("div", { style:{ flex:1, minWidth:140, background:"#140e04", border:"1px solid #3a2a10", borderRadius:6, padding:"6px 10px" } },
                React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.68rem", fontWeight:"bold" } }, "\u2640 "+dam.name),
                React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.63rem" } }, dam.breed+" \u00B7 "+(dam.coatColor||"")),
                React.createElement("div", { style:{ color:"#84cc16", fontSize:"0.63rem" } }, "\u2764\uFE0F "+dam.healthScore+"  \u26A1 "+dam.perfScore)
              ),
              crossbred && React.createElement("div", { style:{ color:"#fde68a", fontSize:"0.65rem", background:"#2d1e00", border:"1px solid #ca8a04", borderRadius:4, padding:"3px 8px" } }, "\u26A0\uFE0F Crossbred chicks")
            )
          : React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.75rem", textAlign:"center", marginBottom:10 } }, "Select a rooster and a hen to continue"),
        React.createElement("button", {
          disabled:!sire||!dam,
          onClick:function(e){ e.stopPropagation(); if(sire&&dam) onConfirm(sire.id, dam.id); },
          style:{ width:"100%", padding:"11px 0", borderRadius:8, cursor:sire&&dam?"pointer":"not-allowed",
            background:sire&&dam?"#1a1a08":"#140e04", border:"1px solid "+(sire&&dam?"#84cc16":"#3a2a10"),
            color:sire&&dam?"#84cc16":"#4a3a1a", fontWeight:"bold", fontSize:"0.9rem" }
        }, sire&&dam?"\uD83E\uDD1D Confirm Breeding \u2014 Chicks due in 3 days":"No pairing selected")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CHICKEN VIEW (Management Tab)
// ══════════════════════════════════════════════════════════════════════════════

function ChickenView(props) {
  var chickens = props.chickens || [];
  var onSell = props.onSell;
  var onRename = props.onRename;
  var onClose = props.onClose;
  var pendingCalves = props.pendingCalves || [];
  var onBreedChicken = props.onBreedChicken;

  var _f = React.useState("all"), filterType = _f[0], setFilterType = _f[1];
  var _s = React.useState("name"), listSort = _s[0], setListSort = _s[1];
  var _breed = React.useState(false), showBreeding = _breed[0], setShowBreeding = _breed[1];

  var roosters = chickens.filter(function(s){ return s.sex==="M" && !s.retiredLivestock; });
  var hens = chickens.filter(function(s){ return s.sex==="F" && !s.retiredLivestock; });
  var broodingHens = hens.filter(function(s){ return s.pregnantUntil && s.pregnantUntil > Date.now(); });
  var eggCount = chickens.filter(function(s){ return s.type==="egg"; }).length;
  var meatCount = chickens.filter(function(s){ return s.type==="meat"; }).length;
  var dualCount = chickens.filter(function(s){ return s.type==="dual"; }).length;
  var ornCount = chickens.filter(function(s){ return s.type==="ornamental"; }).length;

  var filtered = filterType==="all" ? chickens :
    chickens.filter(function(s){ return s.type===filterType; });

  var sorted = filtered.slice().sort(function(a,b) {
    if (listSort==="name") return (a.name||"").localeCompare(b.name||"");
    if (listSort==="breed") return (a.breed||"").localeCompare(b.breed||"");
    if (listSort==="health") return (b.healthScore||0)-(a.healthScore||0);
    if (listSort==="perf") return (b.perfScore||0)-(a.perfScore||0);
    if (listSort==="type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var chickenPending = pendingCalves.filter(function(pc){ return pc.species==="chicken"; });

  return React.createElement("div", {
    style:{ display:"flex", flexDirection:"column", height:"calc(100vh - 130px)", overflow:"hidden" }
  },
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"10px 16px", borderBottom:"1px solid #4a3a1a", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83D\uDC14"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#fbbf24", fontWeight:"bold", fontSize:"1rem" } }, "Chicken Management"),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.7rem" } },
            chickens.length+" chicken"+(chickens.length!==1?"s":"")+" \u00B7 "+roosters.length+" rooster"+(roosters.length!==1?"s":"")+" \u00B7 "+hens.length+" hen"+(hens.length!==1?"s":"")+
            (broodingHens.length>0?" \u00B7 "+broodingHens.length+" brooding":""))
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap:6, alignItems:"center" } },
        chickens.length >= 2 && React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setShowBreeding(true); },
          disabled: roosters.length===0 || hens.length===0,
          style:{ background: (roosters.length>0&&hens.length>0)?"#2a1a08":"#1a1208",
            border:"1px solid "+((roosters.length>0&&hens.length>0)?"#fbbf24":"#4a3a1a"),
            color: (roosters.length>0&&hens.length>0)?"#fbbf24":"#6a5a3a",
            borderRadius:8, padding:"6px 14px", cursor:(roosters.length>0&&hens.length>0)?"pointer":"not-allowed",
            fontSize:"0.78rem", fontWeight:"bold" }
        }, "\uD83E\uDD1D Breed"),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #4a3a1a", color:"#fbbf24",
            borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
        }, "\u2190 Back to Farm")
      )
    ),

    chickens.length > 0 && React.createElement("div", { style:{ padding:"10px 16px", borderBottom:"1px solid #4a3a1a",
      background:"#1a1408", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom: (roosters.length>0||chickenPending.length>0)?8:0 } },
        React.createElement("span", { style:{ fontSize:"1.1rem" } }, "\uD83E\uDD1D"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8d0a8", fontWeight:"bold", fontSize:"0.85rem" } }, "Natural Mating"),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.65rem" } },
            "Chickens breed naturally \u2014 your rooster"+(roosters.length!==1?"s":"")+" will cover eligible hens automatically")
        ),
        React.createElement("div", { style:{ background:"#22c55e", borderRadius:10, padding:"2px 10px", flexShrink:0 } },
          React.createElement("span", { style:{ color:"#fff", fontSize:"0.65rem", fontWeight:"bold" } }, "ALWAYS ON"))
      ),

      React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap" } },
        roosters.length > 0 && React.createElement("div", { style:{ background:"#1a1208", border:"1px solid #5a4a1a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#fbbf24", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } },
            "\uD83D\uDC14 Flock Rooster"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } },
            roosters.sort(function(a,b){return (b.perfScore||0)-(a.perfScore||0);})[0].name || roosters[0].breed),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.65rem" } },
            roosters[0].breed + " \u00B7 \u2764\uFE0F" + (roosters[0].healthScore||0) + " \u26A1" + (roosters[0].perfScore||0) + " \u00B7 covers " + hens.length + " hen" + (hens.length!==1?"s":""))
        ),
        roosters.length === 0 && hens.length > 0 && React.createElement("div", { style:{ background:"#1a0a0a", border:"1px solid #5a2a2a",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.75rem", fontWeight:"bold" } },
            "\u26A0\uFE0F No Rooster"),
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.65rem" } },
            hens.length + " hen"+(hens.length!==1?"s":"")+" won\u2019t breed without a rooster")
        ),
        React.createElement("div", { style:{ background:"#1a1208", border:"1px solid #3a2a10",
          borderRadius:8, padding:"8px 12px", flex:"1 1 140px", minWidth:120 } },
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Flock Status"),
          React.createElement("div", { style:{ fontSize:"0.75rem", color:"#e8d0a8", lineHeight:1.6 } },
            React.createElement("div", null, "\u2642 " + roosters.length + " rooster" + (roosters.length!==1?"s":"")),
            React.createElement("div", null, "\u2640 " + hens.length + " hen" + (hens.length!==1?"s":"")),
            React.createElement("div", { style:{ color: broodingHens.length>0 ? "#fbbf24" : "#8a6a3a" } },
              "\uD83E\uDD5A " + broodingHens.length + " brooding")
          )
        ),
        chickenPending.length > 0 && React.createElement("div", { style:{ background:"#1a1208", border:"1px solid #3a2a10",
          borderRadius:8, padding:"8px 12px", flex:"1 1 200px", minWidth:180 } },
          React.createElement("div", { style:{ color:"#8a6a3a", fontSize:"0.62rem", marginBottom:4, textTransform:"uppercase", letterSpacing:1 } }, "Expected Chicks"),
          chickenPending.map(function(pc, idx) {
            var daysLeft = Math.max(0, Math.ceil((pc.dueDate - Date.now()) / (24*60*60*1000)));
            return React.createElement("div", { key:idx, style:{ fontSize:"0.7rem", color:"#e8d0a8", marginBottom:2 } },
              "\uD83D\uDC23 " + pc.damName + " \u2014 " + pc.offspring.length + " chick" +
              (pc.offspring.length!==1?"s":"") + " in " + daysLeft + " day" + (daysLeft!==1?"s":""));
          })
        )
      )
    ),

    React.createElement("div", { style:{ display:"flex", gap:8, padding:"8px 16px", borderBottom:"1px solid #4a3a1a",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.72rem" } }, "\uD83E\uDD5A Egg: "+eggCount),
      React.createElement("span", { style:{ color:"#fca5a5", fontSize:"0.72rem" } }, "\uD83E\uDD69 Meat: "+meatCount),
      React.createElement("span", { style:{ color:"#7dd3fc", fontSize:"0.72rem" } }, "\u2696\uFE0F Dual: "+dualCount),
      React.createElement("span", { style:{ color:"#c4b5fd", fontSize:"0.72rem" } }, "\uD83C\uDFA8 Ornamental: "+ornCount)
    ),

    React.createElement("div", { style:{ display:"flex", gap:6, padding:"8px 16px", borderBottom:"1px solid #4a3a1a",
      flexShrink:0, flexWrap:"wrap", alignItems:"center" } },
      ["all","egg","meat","dual","ornamental"].map(function(t) {
        var active = filterType===t;
        return React.createElement("button", { key:t, onClick:function(){ setFilterType(t); },
          style:{ background: active?"#2a1a08":"transparent", border:"1px solid "+(active?"#fbbf24":"#4a3a1a"),
            color: active?"#fbbf24":"#8a6a3a", borderRadius:5, padding:"3px 10px",
            cursor:"pointer", fontSize:"0.72rem", textTransform:"capitalize" } }, t);
      }),
      React.createElement("span", { style:{ color:"#3a2a10", margin:"0 4px" } }, "|"),
      React.createElement("span", { style:{ color:"#8a6a3a", fontSize:"0.68rem" } }, "Sort:"),
      ["name","breed","health","perf","type"].map(function(s) {
        var active = listSort===s;
        return React.createElement("button", { key:s, onClick:function(){ setListSort(s); },
          style:{ background: active?"#1a1a08":"transparent", border:"1px solid "+(active?"#22c55e":"#3a2a10"),
            color: active?"#22c55e":"#8a6a3a", borderRadius:4, padding:"2px 7px",
            cursor:"pointer", fontSize:"0.65rem", textTransform:"capitalize" } }, s);
      })
    ),

    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:12 } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#8a6a3a", padding:"40px 0" } },
            "No chickens yet \u2014 buy some from the Livestock Market!")
        : React.createElement("div", { style:{ display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:10 } },
            sorted.map(function(s) {
              return React.createElement(ChickenCard, { key:s.id, chicken:s, onSell:onSell, onRename:onRename, onLock:props.onLock });
            })
          )
    ),

    showBreeding && React.createElement(ChickenBreedingModal, {
      chickens: chickens,
      onClose: function(){ setShowBreeding(false); },
      onConfirm: function(sireId, damId){
        if (onBreedChicken) onBreedChicken(sireId, damId);
        setShowBreeding(false);
      }
    })
  );
}
