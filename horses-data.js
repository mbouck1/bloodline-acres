// ═══════════════════════════════════════════════════════════════
// BLOODLINE ACRES — HORSES DATA
// horses-data.js  (loaded via <script> in index.html before game.js)
// ═══════════════════════════════════════════════════════════════

// ── HORSE BREEDS ──────────────────────────────────────────────
var HORSE_BREEDS = [
  // Light / Sport
  { name:"Thoroughbred",       group:"Racing",       size:"L",  heightAvg:16.1, weightAvg:1000, colors:["Bay","Dark Bay","Chestnut","Gray","Roan"], desc:"The gold standard of speed. Bred for flat racing." },
  { name:"Arabian",            group:"Light",        size:"M",  heightAvg:15.0, weightAvg:900,  colors:["Bay","Chestnut","Gray","Black","Roan"], desc:"Ancient desert breed. Incredible endurance and beauty." },
  { name:"Quarter Horse",      group:"Western",      size:"L",  heightAvg:15.2, weightAvg:1100, colors:["Sorrel","Bay","Black","Buckskin","Palomino","Dun","Gray","Roan","Paint"], desc:"The fastest horse over a quarter mile. Versatile ranch horse." },
  { name:"Warmblood",          group:"Sport",        size:"XL", heightAvg:16.2, weightAvg:1250, colors:["Bay","Chestnut","Black","Gray","Dun"], desc:"Purpose-bred for Olympic disciplines — dressage, jumping, eventing." },
  { name:"Hanoverian",         group:"Sport",        size:"XL", heightAvg:16.3, weightAvg:1300, colors:["Bay","Chestnut","Black","Gray"], desc:"Premier German warmblood. Dominates the dressage and jumping arenas." },
  { name:"Oldenburg",          group:"Sport",        size:"XL", heightAvg:17.0, weightAvg:1350, colors:["Bay","Black","Gray","Chestnut"], desc:"Tall and powerful German warmblood." },
  { name:"Dutch Warmblood",    group:"Sport",        size:"XL", heightAvg:16.2, weightAvg:1200, colors:["Bay","Chestnut","Black","Gray"], desc:"KWPN-registered sport horse. Excellent in all Olympic disciplines." },
  { name:"Trakehner",          group:"Sport",        size:"L",  heightAvg:16.1, weightAvg:1150, colors:["Bay","Chestnut","Black","Gray"], desc:"Elegant German warmblood known for spirit and athleticism." },
  { name:"Lusitano",           group:"Sport",        size:"M",  heightAvg:15.3, weightAvg:1050, colors:["Gray","Bay","Chestnut","Buckskin","Palomino"], desc:"Portuguese baroque horse. Exceptional in dressage and bullfighting." },
  { name:"Andalusian",         group:"Sport",        size:"M",  heightAvg:15.2, weightAvg:1050, colors:["Gray","Bay","Black","Chestnut","Dun"], desc:"The horse of kings. Flowing mane and noble bearing." },

  // Western / Ranch
  { name:"Paint Horse",        group:"Western",      size:"L",  heightAvg:15.2, weightAvg:1100, colors:["Tobiano","Overo","Tovero"], desc:"Colorful stock horse. The cowboy's favorite." },
  { name:"Appaloosa",          group:"Western",      size:"M",  heightAvg:14.3, weightAvg:1000, colors:["Leopard","Snowflake","Blanket","Bay Roan","Chestnut"], desc:"Spotted horse of the Nez Perce. Tough and sure-footed." },
  { name:"Mustang",            group:"Western",      size:"M",  heightAvg:14.2, weightAvg:900,  colors:["Bay","Sorrel","Black","Dun","Grulla","Roan","Buckskin"], desc:"Free-roaming feral horse of the American West. Hardy and intelligent." },
  { name:"Palomino",           group:"Western",      size:"L",  heightAvg:15.0, weightAvg:1050, colors:["Palomino","Light Palomino","Dark Palomino"], desc:"The golden horse. Often a color designation rather than breed." },
  { name:"Buckskin",           group:"Western",      size:"L",  heightAvg:15.1, weightAvg:1050, colors:["Buckskin","Dark Buckskin","Dun","Grulla"], desc:"Dun-factor coloring prized on the ranch." },

  // Draft
  { name:"Clydesdale",         group:"Draft",        size:"XXL",heightAvg:17.0, weightAvg:2000, colors:["Bay","Roan","Black","Chestnut"], desc:"Scottish draft with feathered feet. Gentle giant." },
  { name:"Percheron",          group:"Draft",        size:"XXL",heightAvg:16.3, weightAvg:1900, colors:["Gray","Black","Bay","Chestnut"], desc:"French draft horse. Elegant yet powerful." },
  { name:"Belgian Draft",      group:"Draft",        size:"XXL",heightAvg:17.0, weightAvg:2200, colors:["Sorrel","Roan","Bay","Chestnut"], desc:"The strongest draft breed. Gentle temperament." },
  { name:"Shire",              group:"Draft",        size:"XXL",heightAvg:17.2, weightAvg:2400, colors:["Black","Bay","Gray","Brown"], desc:"Tallest horse breed. English draft with feathered legs." },

  // Gaited
  { name:"Tennessee Walking Horse", group:"Gaited",  size:"L",  heightAvg:15.2, weightAvg:1100, colors:["Black","Bay","Sorrel","Gray","Roan","Palomino","Buckskin"], desc:"Smooth running walk. A plantation planter's horse." },
  { name:"Missouri Fox Trotter",    group:"Gaited",  size:"M",  heightAvg:14.3, weightAvg:1000, colors:["Bay","Chestnut","Gray","Black","Palomino","Roan"], desc:"Comfortable trail horse with a unique foxtrot gait." },
  { name:"Paso Fino",               group:"Gaited",  size:"S",  heightAvg:13.3, weightAvg:800,  colors:["Bay","Chestnut","Black","Gray","Palomino","Buckskin","Roan"], desc:"Caribbean gaited horse. Incredibly smooth natural gait." },

  // Pony
  { name:"Connemara Pony",     group:"Pony",         size:"S",  heightAvg:13.2, weightAvg:650,  colors:["Gray","Dun","Bay","Black","Chestnut","Roan"], desc:"Irish pony. Athletic, hardy, and a natural jumper." },
  { name:"Welsh Pony",         group:"Pony",         size:"S",  heightAvg:12.2, weightAvg:600,  colors:["Bay","Gray","Chestnut","Black","Palomino","Roan"], desc:"Four sections (A-D). Versatile and spirited." },
  { name:"Shetland Pony",      group:"Pony",         size:"XS", heightAvg:10.2, weightAvg:400,  colors:["Black","Bay","Chestnut","Gray","Roan","Palomino","Skewbald"], desc:"Tiny but mighty. Pound-for-pound the strongest equine." },
  { name:"Hackney Pony",       group:"Pony",         size:"S",  heightAvg:12.2, weightAvg:600,  colors:["Bay","Chestnut","Black","Brown"], desc:"High-stepping show pony. Flashy and eye-catching in harness." },
];

// ── HORSE COAT COLOR GENETICS ──────────────────────────────────
// Loci: E (Extension), A (Agouti), Cr (Cream), Dun (D), Grey (G),
//       Rn (Roan), TO (Tobiano), O (Overo), Z (Silver), Ch (Champagne)
// Health QTLs: HipQ, BoneQ, LungQ, HeartQ, HoofQ
// Perf QTLs:   SPEED, STAMINA, MUSCLE, TEMP (Temperament), AGILITY

var HORSE_COAT_LOCI = {
  E:  { name: "Extension (MC1R) — Base color switch" },
  A:  { name: "Agouti (ASIP) — Bay/Black restriction" },
  Cr: { name: "Cream (SLC45A2) — Dilution" },
  D:  { name: "Dun (TBX3) — Dun factor" },
  G:  { name: "Grey (STX17) — Greying gene" },
  Rn: { name: "Roan (KIT) — Classic roan" },
  TO: { name: "Tobiano (KIT) — Tobiano white" },
  Sv: { name: "Sabino/Splashed (SB1/SW) — Frame/Sabino" },
  Z:  { name: "Silver (PMEL17) — Silver dapple" },
  Ch: { name: "Champagne (SLC36A1) — Champagne dilution" }
};

var HORSE_HEALTH_LOCI = {
  HipQ:  { name: "Hip/Joint Quality" },
  BoneQ: { name: "Bone Density" },
  LungQ: { name: "Respiratory Health" },
  HeartQ:{ name: "Cardiac Health" },
  HoofQ: { name: "Hoof Quality" }
};

var HORSE_PERF_QTLS = ["SPEED","STAMINA","MUSCLE","TEMP","AGILITY"];

// ── GENOME GENERATION ─────────────────────────────────────────
function generateHorseGenome(breedName) {
  var breed = HORSE_BREEDS.find(function(b){ return b.name === breedName; }) || HORSE_BREEDS[0];
  var g = breed.group || "Light";

  // Base coat allele frequencies by group
  var freqs = {
    Racing:  { E:0.7, A:0.8, Cr:0.05, D:0.05, G:0.15, Rn:0.1,  TO:0.0, Sv:0.0, Z:0.0, Ch:0.0 },
    Light:   { E:0.65,A:0.75,Cr:0.1,  D:0.1,  G:0.2,  Rn:0.15, TO:0.0, Sv:0.0, Z:0.05,Ch:0.05 },
    Sport:   { E:0.7, A:0.8, Cr:0.05, D:0.05, G:0.2,  Rn:0.05, TO:0.0, Sv:0.0, Z:0.0, Ch:0.0 },
    Western: { E:0.6, A:0.65,Cr:0.2,  D:0.25, G:0.1,  Rn:0.2,  TO:0.3, Sv:0.15,Z:0.0, Ch:0.05 },
    Draft:   { E:0.7, A:0.75,Cr:0.05, D:0.05, G:0.2,  Rn:0.2,  TO:0.0, Sv:0.0, Z:0.1, Ch:0.0 },
    Gaited:  { E:0.6, A:0.65,Cr:0.2,  D:0.1,  G:0.15, Rn:0.2,  TO:0.1, Sv:0.1, Z:0.0, Ch:0.05 },
    Pony:    { E:0.55,A:0.6, Cr:0.15, D:0.2,  G:0.2,  Rn:0.25, TO:0.1, Sv:0.1, Z:0.05,Ch:0.05 }
  };
  var f = freqs[g] || freqs.Light;

  function diploid(freq) {
    var a0 = Math.random() < freq ? "1" : "0";
    var a1 = Math.random() < freq ? "1" : "0";
    return [a0, a1];
  }

  // Health alleles — Q/g (good/poor)
  function healthDiploid(goodFreq) {
    return [Math.random() < goodFreq ? "Q" : "g", Math.random() < goodFreq ? "Q" : "g"];
  }

  var groupHealthBase = {
    Racing: { HipQ:0.75, BoneQ:0.8, LungQ:0.85, HeartQ:0.8,  HoofQ:0.7 },
    Light:  { HipQ:0.8,  BoneQ:0.8, LungQ:0.8,  HeartQ:0.82, HoofQ:0.8 },
    Sport:  { HipQ:0.75, BoneQ:0.85,LungQ:0.8,  HeartQ:0.78, HoofQ:0.8 },
    Western:{ HipQ:0.85, BoneQ:0.85,LungQ:0.8,  HeartQ:0.82, HoofQ:0.85},
    Draft:  { HipQ:0.7,  BoneQ:0.9, LungQ:0.75, HeartQ:0.75, HoofQ:0.8 },
    Gaited: { HipQ:0.8,  BoneQ:0.8, LungQ:0.8,  HeartQ:0.82, HoofQ:0.82},
    Pony:   { HipQ:0.85, BoneQ:0.85,LungQ:0.82, HeartQ:0.85, HoofQ:0.85}
  };
  var hb = groupHealthBase[g] || groupHealthBase.Light;

  // Performance QTL frequencies by group
  var groupPerfBase = {
    Racing:  { SPEED:4.2, STAMINA:3.5, MUSCLE:3.0, TEMP:3.2, AGILITY:3.5 },
    Light:   { SPEED:3.2, STAMINA:3.8, MUSCLE:3.0, TEMP:3.5, AGILITY:3.5 },
    Sport:   { SPEED:3.3, STAMINA:3.5, MUSCLE:3.5, TEMP:3.8, AGILITY:4.0 },
    Western: { SPEED:3.8, STAMINA:3.5, MUSCLE:3.5, TEMP:4.0, AGILITY:3.8 },
    Draft:   { SPEED:2.0, STAMINA:4.0, MUSCLE:5.0, TEMP:4.5, AGILITY:2.0 },
    Gaited:  { SPEED:3.0, STAMINA:3.8, MUSCLE:3.0, TEMP:4.2, AGILITY:3.2 },
    Pony:    { SPEED:3.0, STAMINA:3.8, MUSCLE:3.2, TEMP:4.0, AGILITY:3.8 }
  };
  var pb = groupPerfBase[g] || groupPerfBase.Light;

  function perfPair(base) {
    var lo = Math.max(1, Math.min(5, Math.round(base - 1 + Math.random()*2)));
    var hi = Math.max(1, Math.min(5, Math.round(base - 1 + Math.random()*2)));
    return [lo, hi];
  }

  var coat = {};
  Object.keys(f).forEach(function(loc){ coat[loc] = diploid(f[loc]); });

  var health = {};
  Object.keys(hb).forEach(function(loc){ health[loc] = healthDiploid(hb[loc]); });

  var perf = {};
  HORSE_PERF_QTLS.forEach(function(q){ perf[q] = perfPair(pb[q] || 3); });

  return { coat: coat, health: health, perf: perf };
}

// ── COAT COLOR INTERPRETATION ──────────────────────────────────
function interpretHorseColor(genome) {
  if (!genome || !genome.coat) return "Bay";
  var c = genome.coat;
  var E  = c.E  || ["0","0"];
  var A  = c.A  || ["0","0"];
  var Cr = c.Cr || ["0","0"];
  var D  = c.D  || ["0","0"];
  var G  = c.G  || ["0","0"];
  var Rn = c.Rn || ["0","0"];
  var TO = c.TO || ["0","0"];
  var Sv = c.Sv || ["0","0"];
  var Z  = c.Z  || ["0","0"];
  var Ch = c.Ch || ["0","0"];

  var hasE  = E[0]==="1"  || E[1]==="1";
  var hasA  = A[0]==="1"  || A[1]==="1";
  var crCopies = (Cr[0]==="1"?1:0)+(Cr[1]==="1"?1:0);
  var hasDun = D[0]==="1" || D[1]==="1";
  var hasGrey= G[0]==="1" || G[1]==="1";
  var hasRn  = Rn[0]==="1"|| Rn[1]==="1";
  var hasTO  = TO[0]==="1"|| TO[1]==="1";
  var hasSv  = Sv[0]==="1"|| Sv[1]==="1";
  var hasZ   = Z[0]==="1" || Z[1]==="1";
  var hasCh  = Ch[0]==="1"|| Ch[1]==="1";

  // Base color
  var base;
  if (!hasE) {
    base = "Chestnut"; // ee = red/chestnut
  } else if (hasA) {
    base = "Bay";
  } else {
    base = "Black";
  }

  // Modifiers applied in order
  // Champagne
  if (hasCh) {
    if (base === "Bay")      base = "Amber Champagne";
    else if (base === "Chestnut") base = "Gold Champagne";
    else if (base === "Black")    base = "Classic Champagne";
  }

  // Cream dilutions
  if (crCopies === 2) {
    if (base === "Bay" || base === "Amber Champagne") base = "Perlino";
    else if (base === "Chestnut" || base === "Gold Champagne") base = "Cremello";
    else if (base === "Black" || base === "Classic Champagne") base = "Smoky Cream";
  } else if (crCopies === 1) {
    if (base === "Bay")      base = "Buckskin";
    else if (base === "Chestnut") base = "Palomino";
    else if (base === "Black")    base = "Smoky Black";
  }

  // Dun
  if (hasDun && !base.includes("Cream") && base !== "Cremello" && base !== "Perlino") {
    if (base === "Bay" || base === "Buckskin") base = "Dun";
    else if (base === "Black" || base === "Smoky Black") base = "Grulla";
    else if (base === "Chestnut" || base === "Palomino") base = "Red Dun";
  }

  // Silver (affects black-based only)
  if (hasZ && (base === "Black" || base === "Bay")) {
    base = base === "Bay" ? "Silver Bay" : "Silver Black";
  }

  // White patterns
  var pattern = "";
  if (hasTO && hasSv) pattern = "Tovero";
  else if (hasTO)     pattern = "Tobiano";
  else if (hasSv)     pattern = "Overo";

  // Roan overlay
  var overlay = hasRn ? "Roan" : "";

  // Grey (turns horse grey over time — shown as "Grey (base)")
  if (hasGrey) return "Grey (" + base + ")";

  var result = base;
  if (pattern) result = pattern + " " + result;
  if (overlay && !pattern) result = result + " Roan";

  return result;
}

// ── HEALTH SCORE ──────────────────────────────────────────────
function calcHorseHealthScore(genome) {
  if (!genome || !genome.health) return 50;
  var h = genome.health;
  var score = 0, count = 0;
  Object.keys(h).forEach(function(loc) {
    var al = h[loc];
    if (!al) return;
    var good = (al[0]==="Q"?1:0)+(al[1]==="Q"?1:0);
    score += (good/2)*100;
    count++;
  });
  return count ? Math.round(score/count) : 50;
}

// ── PERFORMANCE SCORE ─────────────────────────────────────────
function calcHorsePerfScore(genome) {
  if (!genome || !genome.perf) return 50;
  var p = genome.perf;
  var total = 0;
  HORSE_PERF_QTLS.forEach(function(q){
    var v = p[q];
    if (v) total += (v[0]+v[1])/2;
  });
  return Math.round((total/(HORSE_PERF_QTLS.length*5))*100);
}

// ── HORSE CREATION ────────────────────────────────────────────
function createHorse(breedName, sex, ageMonths) {
  var breed = HORSE_BREEDS.find(function(b){ return b.name === breedName; }) || HORSE_BREEDS[0];
  var genome = generateHorseGenome(breedName);
  var coatColor = interpretHorseColor(genome);
  var healthScore = calcHorseHealthScore(genome);
  var perfScore = calcHorsePerfScore(genome);

  // Size in hands
  var hands = breed.heightAvg + (Math.random()-0.5)*0.8;
  hands = Math.round(hands*10)/10;
  var weightLbs = Math.round(breed.weightAvg + (Math.random()-0.5)*100);

  // Price based on breed group + quality
  var basePrices = {
    Racing:2000, Light:1200, Sport:2500, Western:900,
    Draft:1500, Gaited:1100, Pony:600
  };
  var base = basePrices[breed.group] || 1000;
  var qualityMult = 0.7 + (healthScore/100)*0.6;
  var price = Math.round(base * qualityMult / 50) * 50;

  return {
    id: "horse_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    species: "horse",
    name: generateHorseName(sex),
    breed: breedName,
    group: breed.group,
    sex: sex,
    ageMonths: ageMonths || (Math.floor(Math.random()*48)+18),
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    heightHands: hands,
    weightLbs: weightLbs,
    price: price,
    showPoints: 0,
    showHistory: [],
    coi: 0,
    sireId: null,
    damId: null,
    purchaseDate: Date.now()
  };
}

var HORSE_NAMES_M = [
  "Thunder","Blaze","Shadow","Midnight","Storm","Ranger","Duke","Maverick",
  "Apache","Cheyenne","Dakota","Comanche","Bandit","Rebel","Outlaw","Scout",
  "Ace","Atlas","Titan","Zeus","Orion","Comet","Eclipse","Solstice",
  "Copper","Rusty","Dusty","Smoky","Ash","Coal","Ember","Flint"
];
var HORSE_NAMES_F = [
  "Luna","Stella","Willow","Daisy","Rosie","Pearl","Misty","Crystal",
  "Aurora","Celeste","Ivory","Sierra","Sahara","Savannah","Prairie","Mesa",
  "Maple","Amber","Honey","Cinnamon","Ginger","Clover","Heather","Sage",
  "Duchess","Countess","Lady","Grace","Belle","Ivy","Violet","Hazel"
];
function generateHorseName(sex) {
  var pool = sex === "M" ? HORSE_NAMES_M : HORSE_NAMES_F;
  return pool[Math.floor(Math.random()*pool.length)];
}

// ── HORSE SHOW CLASSES ────────────────────────────────────────
var HORSE_SHOW_CLASSES = [
  { key:"hunter",     label:"Hunter",      emoji:"🟢", entryFee:{ local:40, regional:120, national:300 },  purse:{ local:[200,100,40], regional:[800,400,150], national:[3000,1500,600] } },
  { key:"jumper",     label:"Jumper",      emoji:"🔵", entryFee:{ local:50, regional:150, national:400 },  purse:{ local:[250,125,50], regional:[1000,500,200],national:[4000,2000,800] } },
  { key:"dressage",   label:"Dressage",    emoji:"🎀", entryFee:{ local:45, regional:130, national:350 },  purse:{ local:[225,110,45], regional:[900,450,180], national:[3500,1750,700] } },
  { key:"western",    label:"Western",     emoji:"🤠", entryFee:{ local:30, regional:90,  national:250 },  purse:{ local:[160,80,30],  regional:[640,320,125], national:[2400,1200,480] } },
  { key:"halter",     label:"Halter",      emoji:"🏆", entryFee:{ local:25, regional:75,  national:200 },  purse:{ local:[130,65,25],  regional:[520,260,100], national:[2000,1000,400] } },
  { key:"reining",    label:"Reining",     emoji:"⭐", entryFee:{ local:35, regional:100, national:275 },  purse:{ local:[175,87,35],  regional:[700,350,140], national:[2600,1300,520] } }
];

// QTL weights per horse show class
var HORSE_SHOW_QTL_WEIGHTS = {
  hunter:  { SPEED:0.2, STAMINA:0.3, MUSCLE:0.2, TEMP:0.2,  AGILITY:0.1 },
  jumper:  { SPEED:0.15,STAMINA:0.2, MUSCLE:0.25,TEMP:0.15, AGILITY:0.25 },
  dressage:{ SPEED:0.05,STAMINA:0.2, MUSCLE:0.25,TEMP:0.35, AGILITY:0.15 },
  western: { SPEED:0.25,STAMINA:0.2, MUSCLE:0.25,TEMP:0.25, AGILITY:0.05 },
  halter:  { SPEED:0.05,STAMINA:0.1, MUSCLE:0.4, TEMP:0.35, AGILITY:0.1  },
  reining: { SPEED:0.2, STAMINA:0.15,MUSCLE:0.2, TEMP:0.2,  AGILITY:0.25 }
};

// Best groups per class
var HORSE_CLASS_GROUPS = {
  hunter:  ["Sport","Racing","Light"],
  jumper:  ["Sport","Racing","Light"],
  dressage:["Sport","Light"],
  western: ["Western","Gaited"],
  halter:  ["Draft","Western","Sport"],
  reining: ["Western"]
};

function calcHorseShowScore(horse, classKey) {
  if (!horse || !horse.genome) return 0;
  var hs = horse.healthScore || 50;
  var perf = horse.genome.perf || {};
  var weights = HORSE_SHOW_QTL_WEIGHTS[classKey] || { SPEED:0.2,STAMINA:0.2,MUSCLE:0.2,TEMP:0.2,AGILITY:0.2 };

  var qtlScore = 0;
  HORSE_PERF_QTLS.forEach(function(q){
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg/5)*100*(weights[q]||0.2);
  });

  // Group bonus
  var preferredGroups = HORSE_CLASS_GROUPS[classKey] || [];
  var groupBonus = preferredGroups.indexOf(horse.group) > -1 ? 8 : 0;
  if (preferredGroups[0] === horse.group) groupBonus = 12; // top pick

  // Age modifier — horses peak 4-12 years
  var age = (horse.ageMonths||0);
  var ageMod = 1.0;
  if (age < 24)  ageMod = 0.5;
  else if (age < 36)  ageMod = 0.75;
  else if (age < 48)  ageMod = 0.9;
  else if (age <= 144) ageMod = 1.0;
  else if (age <= 180) ageMod = 0.9;
  else ageMod = 0.7;

  var healthWeight = classKey === "halter" ? 0.5 : 0.35;
  var perfWeight = 1 - healthWeight;
  var coi = horse.coi || 0;
  var coiPenalty = coi > 10 ? Math.min(12, (coi-10)*0.5) : 0;
  var raw = (hs*healthWeight + qtlScore*perfWeight)*ageMod - coiPenalty + groupBonus;
  var variance = (Math.random()-0.5)*0.14;
  return Math.max(0, Math.min(100, raw*(1+variance)));
}

function runHorseShow(horse, classKey, level) {
  var cls = HORSE_SHOW_CLASSES.find(function(c){ return c.key===classKey; });
  var fieldSizes = { local:8, regional:16, national:24 };
  if (!cls) return null;
  if ((horse.ageMonths||0) < 24) return { error:"Horse must be at least 2 years old to show." };

  var playerScore = calcHorseShowScore(horse, classKey);
  var fieldSize = (fieldSizes[level]||8) - 1;
  var aiNames = ["Bold Venture","Native Dancer","Man o' War","Secretariat","Citation",
                 "Northern Dancer","Affirmed","Sunday Silence","Seattle Slew","Seabiscuit",
                 "War Admiral","Whirlaway","Count Fleet","Assault","Swaps"];
  var competitors = [];
  var baseMean = { local:50, regional:62, national:72 }[level] || 55;
  var spread = { local:20, regional:15, national:10 }[level] || 18;
  for (var i=0; i<fieldSize; i++) {
    var score = baseMean + (Math.random()-0.5)*spread*2;
    competitors.push({ name: aiNames[i % aiNames.length]+" "+String.fromCharCode(65+Math.floor(Math.random()*26)), isAI:true, score:Math.max(20,Math.min(98,score)) });
  }
  competitors.push({ name:horse.name, isAI:false, score:playerScore });
  competitors.sort(function(a,b){ return b.score-a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; })+1;
  var entryFee = cls.entryFee[level]||40;
  var purse = cls.purse[level]||[0,0,0];
  var prize = placement===1?purse[0]:placement===2?purse[1]:placement===3?purse[2]:0;
  var pts = placement===1?{local:3,regional:6,national:12}[level]:
            placement===2?{local:2,regional:4,national:8}[level]:
            placement===3?{local:1,regional:2,national:4}[level]:0;

  return {
    placement:placement, totalEntries:fieldSizes[level]||8,
    prize:prize, entryFee:entryFee, net:prize-entryFee,
    pointsEarned:pts||0, playerScore:Math.round(playerScore*10)/10,
    competitors:competitors, classKey:classKey, level:level,
    date:new Date().toLocaleString()
  };
}

function getHorseShowTitle(showPoints) {
  var pts = showPoints || 0;
  if (pts >= 80)  return "Grand Champion";
  if (pts >= 50)  return "Champion";
  if (pts >= 30)  return "High Score";
  if (pts >= 15)  return "Reserve";
  if (pts >= 5)   return "Ribbon";
  return null;
}

// ── HORSE SHOW COOLDOWNS ──────────────────────────────────────
function isHorseShowAvailable(lastShowDates, classKey, level) {
  if (!lastShowDates) return true;
  var key = classKey+"_"+level;
  var last = lastShowDates[key];
  if (!last) return true;
  var required = { local:24*60*60*1000, regional:7*24*60*60*1000, national:30*24*60*60*1000 }[level];
  return (Date.now()-last) >= required;
}

function getHorseShowCooldownText(lastShowDates, classKey, level) {
  if (!lastShowDates) return null;
  var key = classKey+"_"+level;
  var last = lastShowDates[key];
  if (!last) return null;
  var required = { local:24*60*60*1000, regional:7*24*60*60*1000, national:30*24*60*60*1000 }[level];
  var remaining = required-(Date.now()-last);
  if (remaining <= 0) return null;
  var h = Math.floor(remaining/(60*60*1000));
  var d = Math.floor(remaining/(24*60*60*1000));
  return d >= 1 ? d+"d" : h+"h";
}

// ── HORSE SHOWS VIEW COMPONENT ────────────────────────────────
function HorseShowsView(props) {
  var horses = props.horses || [];
  var money = props.money || 0;
  var onMoneyChange = props.onMoneyChange;
  var onHorseUpdate = props.onHorseUpdate;
  var onLog = props.onLog;
  var lastShowDates = props.lastShowDates || {};
  var onShowDatesUpdate = props.onShowDatesUpdate;
  var onClose = props.onClose;

  var _s0 = React.useState(horses[0]||null), selectedHorse = _s0[0], setSelectedHorse = _s0[1];
  var _s1 = React.useState("hunter"), selectedClass = _s1[0], setSelectedClass = _s1[1];
  var _s2 = React.useState("local"), selectedLevel = _s2[0], setSelectedLevel = _s2[1];
  var _s3 = React.useState(null), lastResult = _s3[0], setLastResult = _s3[1];

  var horseShowDates = lastShowDates[selectedHorse && selectedHorse.id] || {};
  var cooldown = selectedHorse ? getHorseShowCooldownText(horseShowDates, selectedClass, selectedLevel) : null;
  var available = selectedHorse ? isHorseShowAvailable(horseShowDates, selectedClass, selectedLevel) : false;

  function runShow() {
    if (!selectedHorse || !available) return;
    var cls = HORSE_SHOW_CLASSES.find(function(c){ return c.key===selectedClass; });
    if (!cls) return;
    if (money < cls.entryFee[selectedLevel]) { alert("Not enough money for entry fee!"); return; }

    var result = runHorseShow(selectedHorse, selectedClass, selectedLevel);
    if (result.error) { alert(result.error); return; }

    onMoneyChange(function(m){ return m - result.entryFee + result.prize; });
    var newPts = (selectedHorse.showPoints||0)+result.pointsEarned;
    var updatedHorse = Object.assign({},selectedHorse,{
      showPoints:newPts,
      showHistory:([{
        placement:result.placement, total:result.totalEntries,
        classKey:selectedClass, level:selectedLevel,
        pts:result.pointsEarned, prize:result.prize, date:result.date
      }]).concat(selectedHorse.showHistory||[]).slice(0,20)
    });
    onHorseUpdate(updatedHorse);
    setSelectedHorse(updatedHorse);

    var newDates = Object.assign({},lastShowDates);
    if (!newDates[selectedHorse.id]) newDates[selectedHorse.id]={};
    newDates[selectedHorse.id][selectedClass+"_"+selectedLevel] = Date.now();
    onShowDatesUpdate(newDates);

    var emoji = result.placement===1?"🥇":result.placement===2?"🥈":result.placement===3?"🥉":"";
    var levelLabel={local:"Local",regional:"Regional",national:"National"}[selectedLevel];
    var clsLabel = HORSE_SHOW_CLASSES.find(function(c){return c.key===selectedClass;});
    onLog({
      id:Date.now(),type:"show",
      name:emoji+" "+selectedHorse.name+" placed "+result.placement+"/"+result.totalEntries+" at "+levelLabel+" "+(clsLabel?clsLabel.label:"")+(result.prize>0?" · +$"+result.prize:"")+(result.net<0?" · net -$"+Math.abs(result.net):""),
      amount:result.net,date:result.date
    });
    setLastResult(result);
  }

  var lvls = ["local","regional","national"];
  var levelLabels = {local:"Local",regional:"Regional",national:"National"};
  var tabBtnS = function(k,sel){ return {
    background:sel===k?"#1a3a1a":"transparent",
    border:"1px solid "+(sel===k?"#22c55e":"#2e2218"),
    color:sel===k?"#22c55e":"#6b5038",
    borderRadius:6,padding:"4px 12px",cursor:"pointer",fontSize:"0.78rem",fontWeight:sel===k?"bold":"normal"
  };};

  return React.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:12}},
    // Header
    React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}},
      React.createElement("div",{style:{color:"#22c55e",fontWeight:"bold",fontSize:"1rem"}}, "🏇 Horse Shows"),
      React.createElement("button",{onClick:onClose,style:{background:"transparent",border:"1px solid #4a3a28",color:"#8a7055",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.8rem"}},"✕ Close")
    ),

    React.createElement("div",{style:{display:"flex",gap:12,flex:1,overflow:"hidden"}},

      // Left — Horse selector
      React.createElement("div",{style:{width:220,display:"flex",flexDirection:"column",gap:6,overflowY:"auto",flexShrink:0}},
        React.createElement("div",{style:{color:"#6b5038",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}},"Select Horse"),
        horses.length===0
          ? React.createElement("div",{style:{color:"#4a3a28",fontSize:"0.8rem",padding:"20px 0",textAlign:"center"}},"No horses in stable.\nBuy horses at the Livestock Market.")
          : horses.map(function(h){
              var sel = selectedHorse && selectedHorse.id===h.id;
              var title = getHorseShowTitle(h.showPoints);
              return React.createElement("div",{
                key:h.id,
                onClick:function(){ setSelectedHorse(h); setLastResult(null); },
                style:{background:sel?"#0a2a15":"#1a1410",border:"1px solid "+(sel?"#22c55e":"#2e2218"),
                  borderRadius:8,padding:"8px 10px",cursor:"pointer"}
              },
                React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},
                  React.createElement("span",{style:{color:"#f0e6d3",fontWeight:"bold",fontSize:"0.82rem"}},h.name),
                  React.createElement("span",{style:{color:h.sex==="M"?"#60a5fa":"#f472b6",fontSize:"0.75rem"}},h.sex==="M"?"♂":"♀")
                ),
                React.createElement("div",{style:{color:"#8a7055",fontSize:"0.7rem",marginTop:2}},h.breed+" · "+h.coatColor),
                React.createElement("div",{style:{display:"flex",gap:6,marginTop:3}},
                  React.createElement("span",{style:{color:"#22c55e",fontSize:"0.68rem"}},"❤️ "+h.healthScore),
                  React.createElement("span",{style:{color:"#d4942a",fontSize:"0.68rem"}},"⚡ "+h.perfScore),
                  title && React.createElement("span",{style:{color:"#fbbf24",fontSize:"0.65rem"}},"🎀 "+title)
                )
              );
            })
      ),

      // Right — Show panel
      React.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:10,overflow:"hidden"}},
        // Class selector
        React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:6}},
          HORSE_SHOW_CLASSES.map(function(cls){
            return React.createElement("button",{
              key:cls.key,
              onClick:function(){ setSelectedClass(cls.key); setLastResult(null); },
              style:tabBtnS(cls.key,selectedClass)
            }, cls.emoji+" "+cls.label);
          })
        ),
        // Level selector
        React.createElement("div",{style:{display:"flex",gap:6}},
          lvls.map(function(lvl){
            var cd = selectedHorse ? getHorseShowCooldownText(lastShowDates[selectedHorse&&selectedHorse.id]||{},selectedClass,lvl) : null;
            return React.createElement("button",{
              key:lvl,onClick:function(){ setSelectedLevel(lvl); setLastResult(null); },
              style:tabBtnS(lvl,selectedLevel)
            }, levelLabels[lvl]+(cd?" ("+cd+")":""));
          })
        ),

        // Entry fee / purse info
        (function(){
          var cls = HORSE_SHOW_CLASSES.find(function(c){return c.key===selectedClass;});
          if (!cls) return null;
          return React.createElement("div",{style:{background:"#1a1410",border:"1px solid #2e2218",borderRadius:8,padding:"8px 12px",fontSize:"0.78rem",display:"flex",gap:16}},
            React.createElement("span",{style:{color:"#6b5038"}},"Entry: "),
            React.createElement("span",{style:{color:"#ef4444",fontWeight:"bold"}},"$"+(cls.entryFee[selectedLevel]||0)),
            React.createElement("span",{style:{color:"#6b5038",marginLeft:8}},"Purse: "),
            React.createElement("span",{style:{color:"#22c55e",fontWeight:"bold"}},"$"+(cls.purse[selectedLevel]||[0])[0]),
            React.createElement("span",{style:{color:"#4a3a28"}}," / $"+(cls.purse[selectedLevel]||[0,0])[1]),
            React.createElement("span",{style:{color:"#4a3a28"}}," / $"+(cls.purse[selectedLevel]||[0,0,0])[2])
          );
        })(),

        // Enter button
        React.createElement("button",{
          onClick:runShow,
          disabled:!selectedHorse||!available,
          style:{
            background:selectedHorse&&available?"linear-gradient(135deg,#0a2a15,#0e3820)":"#1a1410",
            border:"2px solid "+(selectedHorse&&available?"#22c55e":"#2e2218"),
            color:selectedHorse&&available?"#22c55e":"#4a3a28",
            borderRadius:8,padding:"10px",cursor:selectedHorse&&available?"pointer":"not-allowed",
            fontSize:"0.88rem",fontWeight:"bold"
          }
        }, !selectedHorse?"Select a horse to enter":
           !available?("⏳ Cooldown: "+cooldown):
           "🏇 Enter Show"),

        // Last result
        lastResult && React.createElement("div",{
          style:{background:lastResult.net>=0?"#0a2a15":"#2a1008",
            border:"1px solid "+(lastResult.net>=0?"#22c55e":"#ef4444"),
            borderRadius:8,padding:"10px 14px",fontSize:"0.82rem"}
        },
          React.createElement("div",{style:{fontWeight:"bold",fontSize:"0.95rem",marginBottom:4,
            color:lastResult.placement===1?"#fbbf24":lastResult.placement<=3?"#22c55e":"#c4956a"}},
            (lastResult.placement===1?"🥇":lastResult.placement===2?"🥈":lastResult.placement===3?"🥉":"")+" Placed "+lastResult.placement+"/"+lastResult.totalEntries
          ),
          React.createElement("div",{style:{color:"#8a7055",fontSize:"0.75rem"}},
            "Score: "+lastResult.playerScore+" · "+(lastResult.net>=0?"Net: +$"+lastResult.net:"Net: -$"+Math.abs(lastResult.net))+(lastResult.pointsEarned?" · +"+lastResult.pointsEarned+"pts":"")
          ),
          // Top 5 competitors
          React.createElement("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:2}},
            lastResult.competitors.slice(0,5).map(function(c,i){
              return React.createElement("div",{key:i,style:{display:"flex",gap:8,fontSize:"0.72rem",
                color:!c.isAI?"#22c55e":"#4a3a28"}},
                React.createElement("span",{style:{width:18,flexShrink:0,color:"#6b5038"}},"#"+(i+1)),
                React.createElement("span",{style:{flex:1}},(c.isAI?"":"> ")+c.name),
                React.createElement("span",{style:{color:"#8a7055"}},(c.score||0).toFixed(1))
              );
            })
          )
        ),

        // Show history
        selectedHorse && selectedHorse.showHistory && selectedHorse.showHistory.length>0 &&
        React.createElement("div",{style:{flex:1,overflowY:"auto",marginTop:4}},
          React.createElement("div",{style:{color:"#6b5038",fontSize:"0.7rem",textTransform:"uppercase",marginBottom:6}},"Show History"),
          selectedHorse.showHistory.map(function(h,i){
            var cls = HORSE_SHOW_CLASSES.find(function(c){return c.key===h.classKey;});
            return React.createElement("div",{key:i,
              style:{display:"flex",gap:8,fontSize:"0.72rem",padding:"3px 0",borderBottom:"1px solid #1a1410",color:"#8a7055"}},
              React.createElement("span",{},h.placement===1?"🥇":h.placement===2?"🥈":h.placement===3?"🥉":"  "),
              React.createElement("span",{style:{flex:1}},(cls?cls.label:h.classKey)+" · "+h.level),
              React.createElement("span",{},h.pts>0?"+"+h.pts+"pts":""),
              React.createElement("span",{},h.prize>0?"$"+h.prize:"")
            );
          })
        )
      )
    )
  );
}

// ── HORSE VIEW COMPONENT ──────────────────────────────────────
function HorseCard(props) {
  var horse = props.horse;
  var onSelect = props.onSelect;
  var isSelected = props.isSelected;
  var onSell = props.onSell;
  if (!horse) return null;

  var sexColor = horse.sex==="M" ? "#60a5fa" : "#f472b6";
  var title = getHorseShowTitle(horse.showPoints);
  var ageYrs = Math.round((horse.ageMonths||0)/12*10)/10;

  return React.createElement("div",{
    onClick:onSelect ? function(){ onSelect(horse); } : null,
    style:{
      background: isSelected?"#1a3a1a":"#1a1410",
      border:"1px solid "+(isSelected?"#22c55e":"#2e2218"),
      borderRadius:10, padding:14, cursor:onSelect?"pointer":"default",
      transition:"border-color 0.15s"
    }
  },
    // Header
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}},
      React.createElement("div",{},
        React.createElement("div",{style:{fontSize:"1.8rem",lineHeight:1}}, horse.sex==="M"?"🐴":"🐎"),
      ),
      React.createElement("div",{style:{textAlign:"right"}},
        title && React.createElement("span",{style:{background:"#2a1e08",border:"1px solid #d4942a",color:"#d4942a",borderRadius:4,padding:"2px 6px",fontSize:"0.65rem",fontWeight:"bold"}}, "🎀 "+title)
      )
    ),

    // Name + sex + age
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}},
      React.createElement("div",{style:{color:"#f0e6d3",fontWeight:"bold",fontSize:"0.95rem"}}, horse.name),
      React.createElement("span",{style:{color:sexColor,fontSize:"0.8rem"}}, horse.sex==="M"?"♂":"♀")
    ),

    // Breed + color
    React.createElement("div",{style:{background:"#1a1408",border:"1px solid #2e2218",borderRadius:4,padding:"3px 8px",fontSize:"0.72rem",color:"#b09070",marginBottom:6}},
      horse.breed," · ",React.createElement("span",{style:{color:"#c4956a"}},horse.coatColor)
    ),

    // Stats row
    React.createElement("div",{style:{display:"flex",gap:8,marginBottom:6,flexWrap:"wrap"}},
      React.createElement("span",{style:{color:"#22c55e",fontSize:"0.72rem",fontWeight:"bold"}},"❤️ "+horse.healthScore),
      React.createElement("span",{style:{color:"#d4942a",fontSize:"0.72rem",fontWeight:"bold"}},"⚡ "+horse.perfScore),
      React.createElement("span",{style:{color:"#8a7055",fontSize:"0.72rem"}},ageYrs+" yrs"),
      React.createElement("span",{style:{color:"#8a7055",fontSize:"0.72rem"}},(horse.heightHands||15.0)+" hh"),
      horse.showPoints > 0 && React.createElement("span",{style:{color:"#fbbf24",fontSize:"0.72rem"}},"🎀 "+horse.showPoints+"pts")
    ),

    // Performance bars
    horse.genome && horse.genome.perf && React.createElement("div",{style:{background:"#141008",border:"1px solid #2e2218",borderRadius:5,padding:"6px 8px",marginBottom:6}},
      React.createElement("div",{style:{color:"#4a3a28",fontSize:"0.6rem",textTransform:"uppercase",marginBottom:4}},"Performance"),
      React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2}},
        HORSE_PERF_QTLS.map(function(q){
          var icons={SPEED:"💨",STAMINA:"🫁",MUSCLE:"💪",TEMP:"🧠",AGILITY:"🌀"};
          var v = horse.genome.perf[q]||[3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg>=4?"#d4942a":avg>=3?"#22c55e":"#4a5568";
          return React.createElement("div",{key:q,style:{display:"flex",alignItems:"center",gap:5}},
            React.createElement("span",{style:{fontSize:"0.6rem",width:55,color:col,flexShrink:0}},icons[q]+" "+q),
            React.createElement("div",{style:{flex:1,background:"#2e2218",borderRadius:2,height:4,overflow:"hidden"}},
              React.createElement("div",{style:{background:col,width:pct+"%",height:"100%"}})
            ),
            React.createElement("span",{style:{fontSize:"0.6rem",color:col,width:18,textAlign:"right",flexShrink:0}},avg.toFixed(1))
          );
        })
      )
    ),

    // Sell button
    onSell && React.createElement("button",{
      onClick:function(e){e.stopPropagation();onSell(horse);},
      style:{width:"100%",background:"#1a0a00",border:"1px solid #d4860a",color:"#d4860a",
        borderRadius:6,padding:"5px 0",cursor:"pointer",fontSize:"0.78rem",marginTop:4}
    }, "💰 Sell")
  );
}

function HorsesView(props) {
  var horses = props.horses || [];
  var money = props.money || 0;
  var onSell = props.onSell;
  var onShowsOpen = props.onShowsOpen;
  var onClose = props.onClose;
  var lastShowDates = props.lastShowDates || {};

  var _s0 = React.useState(null), selectedHorse = _s0[0], setSelectedHorse = _s0[1];
  var _s1 = React.useState("all"), filterGroup = _s1[0], setFilterGroup = _s1[1];

  var groups = ["all"].concat(Array.from(new Set(horses.map(function(h){return h.group;}))).sort());
  var filtered = filterGroup==="all" ? horses : horses.filter(function(h){return h.group===filterGroup;});

  return React.createElement("div",{
    style:{position:"fixed",inset:0,background:"#0e1208",zIndex:50,display:"flex",flexDirection:"column",overflow:"hidden"}
  },
    // Header
    React.createElement("div",{style:{background:"#141008",borderBottom:"2px solid #2e4218",padding:"12px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}},
      React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},
        React.createElement("span",{style:{fontSize:"1.4rem"}},"🐴"),
        React.createElement("div",{},
          React.createElement("div",{style:{color:"#84cc16",fontWeight:"bold",fontSize:"1.05rem"}},"Stables"),
          React.createElement("div",{style:{color:"#4a6a18",fontSize:"0.72rem"}},horses.length+" horse"+(horses.length!==1?"s":"")+" · Balance: ",
            React.createElement("span",{style:{color:money>=0?"#22c55e":"#ef4444",fontWeight:"bold"}},"$"+money.toLocaleString())
          )
        )
      ),
      React.createElement("div",{style:{display:"flex",gap:8}},
        horses.length>0 && React.createElement("button",{
          onClick:onShowsOpen,
          style:{background:"#0a2a15",border:"1px solid #22c55e",color:"#22c55e",borderRadius:6,padding:"5px 14px",cursor:"pointer",fontSize:"0.8rem",fontWeight:"bold"}
        },"🏇 Horse Shows"),
        React.createElement("button",{onClick:onClose,
          style:{background:"transparent",border:"1px solid #4a3a28",color:"#8a7055",borderRadius:6,padding:"5px 12px",cursor:"pointer",fontSize:"0.8rem"}
        },"✕ Close")
      )
    ),

    // Filter tabs
    horses.length > 0 && React.createElement("div",{style:{display:"flex",gap:6,padding:"8px 18px",borderBottom:"1px solid #1a2a0a",background:"#0e1208",flexWrap:"wrap",flexShrink:0}},
      groups.map(function(g){
        return React.createElement("button",{key:g,onClick:function(){setFilterGroup(g);},
          style:{background:filterGroup===g?"#1a3a0a":"transparent",border:"1px solid "+(filterGroup===g?"#84cc16":"#2e4218"),
            color:filterGroup===g?"#84cc16":"#4a6a18",borderRadius:6,padding:"3px 10px",cursor:"pointer",fontSize:"0.72rem"}
        }, g==="all"?"All ("+horses.length+")":g);
      })
    ),

    // Content
    React.createElement("div",{style:{flex:1,overflow:"hidden",display:"flex",gap:0}},

      // Horse list
      React.createElement("div",{style:{flex:1,overflowY:"auto",padding:"14px 18px",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12,alignContent:"start"}},
        filtered.length===0
          ? React.createElement("div",{style:{gridColumn:"1/-1",textAlign:"center",color:"#2e4218",padding:"60px 0"}},
              React.createElement("div",{style:{fontSize:"2rem",marginBottom:8}},"🐴"),
              React.createElement("div",{style:{fontSize:"0.85rem",color:"#4a6a18"}},"No horses yet — visit the 🛒 Livestock Market to buy some!")
            )
          : filtered.map(function(h){
              return React.createElement(HorseCard,{
                key:h.id, horse:h,
                isSelected:selectedHorse&&selectedHorse.id===h.id,
                onSelect:setSelectedHorse,
                onSell:onSell
              });
            })
      ),

      // Selected detail panel (if selected)
      selectedHorse && React.createElement("div",{
        style:{width:300,borderLeft:"1px solid #1a2a0a",background:"#0a1008",overflowY:"auto",padding:14,flexShrink:0}
      },
        React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10}},
          React.createElement("div",{style:{color:"#84cc16",fontWeight:"bold",fontSize:"0.85rem"}},"Horse Detail"),
          React.createElement("button",{onClick:function(){setSelectedHorse(null);},
            style:{background:"transparent",border:"none",color:"#4a6a18",cursor:"pointer",fontSize:"1.1rem"}},"×")
        ),
        React.createElement(HorseCard,{horse:selectedHorse,onSell:onSell})
      )
    )
  );
}
