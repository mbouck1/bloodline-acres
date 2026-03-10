// ═══════════════════════════════════════════════════════════════
// BLOODLINE ACRES — HORSES DATA
// horses-data.js  (loaded via <script> in index.html before game.js)
// ═══════════════════════════════════════════════════════════════

// ── HORSE BREEDS ──────────────────────────────────────────────
var HORSE_BREED_DEFS = [
  { name:"Quarter Horse", group:"Western", heightAvg:15.2, weightAvg:1100 },
  { name:"Paint Horse", group:"Western", heightAvg:15.2, weightAvg:1100 },
  { name:"Appaloosa", group:"Western", heightAvg:14.3, weightAvg:1000 },
  { name:"Palomino", group:"Western", heightAvg:15.0, weightAvg:1050 },
  { name:"Buckskin", group:"Western", heightAvg:15.1, weightAvg:1050 },
  { name:"Mustang", group:"Western", heightAvg:14.2, weightAvg:900 },
  { name:"American Saddlebred", group:"Gaited", heightAvg:15.2, weightAvg:1000 },
  { name:"Standardbred", group:"Racing", heightAvg:15.2, weightAvg:1000 },
  { name:"Morgan", group:"Western", heightAvg:14.2, weightAvg:950 },
  { name:"National Show Horse", group:"Light", heightAvg:15.3, weightAvg:1000 },
  { name:"Thoroughbred", group:"Racing", heightAvg:16.1, weightAvg:1000 },
  { name:"Anglo-Arabian", group:"Light", heightAvg:15.3, weightAvg:1000 },
  { name:"Arabian", group:"Light", heightAvg:15.0, weightAvg:900 },
  { name:"Half-Arabian", group:"Light", heightAvg:15.1, weightAvg:950 },
  { name:"Shagya Arabian", group:"Light", heightAvg:15.1, weightAvg:950 },
  { name:"Andalusian", group:"Sport", heightAvg:15.2, weightAvg:1050 },
  { name:"Lusitano", group:"Sport", heightAvg:15.3, weightAvg:1050 },
  { name:"Lipizzaner", group:"Sport", heightAvg:15.1, weightAvg:1000 },
  { name:"Friesian", group:"Sport", heightAvg:15.3, weightAvg:1300 },
  { name:"Friesian Sport Horse", group:"Sport", heightAvg:15.3, weightAvg:1200 },
  { name:"Irish Sport Horse", group:"Western", heightAvg:14.9, weightAvg:906 },
  { name:"Irish Draught", group:"Western", heightAvg:16.2, weightAvg:1500 },
  { name:"Akhal-Teke", group:"Western", heightAvg:14.4, weightAvg:1088 },
  { name:"Marwari", group:"Light", heightAvg:15.0, weightAvg:950 },
  { name:"Kathiawari", group:"Light", heightAvg:14.3, weightAvg:900 },
  { name:"Criollo", group:"Western", heightAvg:14.2, weightAvg:900 },
  { name:"Camargue", group:"Western", heightAvg:13.2, weightAvg:770 },
  { name:"Barb", group:"Light", heightAvg:14.2, weightAvg:950 },
  { name:"Turkoman", group:"Racing", heightAvg:15.3, weightAvg:1000 },
  { name:"Kiger Mustang", group:"Western", heightAvg:14.0, weightAvg:850 },
  { name:"Hanoverian", group:"Sport", heightAvg:16.3, weightAvg:1300 },
  { name:"Oldenburg", group:"Sport", heightAvg:17.0, weightAvg:1350 },
  { name:"Trakehner", group:"Sport", heightAvg:16.1, weightAvg:1150 },
  { name:"Westphalian", group:"Sport", heightAvg:16.1, weightAvg:1339 },
  { name:"Holsteiner", group:"Sport", heightAvg:16.9, weightAvg:1172 },
  { name:"Rhinelander", group:"Sport", heightAvg:16.6, weightAvg:1158 },
  { name:"Baden-Württemberg", group:"Sport", heightAvg:16.0, weightAvg:1205 },
  { name:"Dutch Warmblood", group:"Sport", heightAvg:16.2, weightAvg:1304 },
  { name:"Belgian Warmblood", group:"Sport", heightAvg:16.0, weightAvg:1200 },
  { name:"KWPN", group:"Sport", heightAvg:16.7, weightAvg:1329 },
  { name:"Swedish Warmblood", group:"Sport", heightAvg:16.5, weightAvg:1206 },
  { name:"Danish Warmblood", group:"Sport", heightAvg:16.4, weightAvg:1221 },
  { name:"Selle Français", group:"Sport", heightAvg:16.8, weightAvg:1151 },
  { name:"Zangersheide", group:"Sport", heightAvg:16.8, weightAvg:1190 },
  { name:"Latvian Warmblood", group:"Sport", heightAvg:16.7, weightAvg:1237 },
  { name:"Czech Warmblood", group:"Sport", heightAvg:16.3, weightAvg:1205 },
  { name:"Australian Warmblood", group:"Sport", heightAvg:17.0, weightAvg:1236 },
  { name:"Tennessee Walking Horse", group:"Gaited", heightAvg:15.2, weightAvg:1050 },
  { name:"Missouri Fox Trotter", group:"Gaited", heightAvg:14.3, weightAvg:1000 },
  { name:"American Standardbred", group:"Racing", heightAvg:15.2, weightAvg:1000 },
  { name:"Racking Horse", group:"Gaited", heightAvg:15.0, weightAvg:1000 },
  { name:"Spotted Saddle Horse", group:"Gaited", heightAvg:15.0, weightAvg:1000 },
  { name:"Rocky Mountain Horse", group:"Gaited", heightAvg:14.3, weightAvg:1000 },
  { name:"Kentucky Mountain Horse", group:"Gaited", heightAvg:14.3, weightAvg:1000 },
  { name:"Single-Footing Horse", group:"Gaited", heightAvg:14.5, weightAvg:997 },
  { name:"Paso Fino", group:"Gaited", heightAvg:13.3, weightAvg:850 },
  { name:"Peruvian Paso", group:"Gaited", heightAvg:14.3, weightAvg:950 },
  { name:"Mangalarga Marchador", group:"Gaited", heightAvg:15.0, weightAvg:1000 },
  { name:"Campolina", group:"Gaited", heightAvg:15.3, weightAvg:1150 },
  { name:"Icelandic Horse", group:"Gaited", heightAvg:13.2, weightAvg:730 },
  { name:"Standardbred (Trotter)", group:"Gaited", heightAvg:14.5, weightAvg:988 },
  { name:"Frederiksborg", group:"Gaited", heightAvg:16.0, weightAvg:1600 },
  { name:"Shire", group:"Draft", heightAvg:18.0, weightAvg:2400 },
  { name:"Clydesdale", group:"Draft", heightAvg:17.3, weightAvg:2200 },
  { name:"Percheron", group:"Draft", heightAvg:17.2, weightAvg:2100 },
  { name:"Belgian Draft", group:"Draft", heightAvg:17.2, weightAvg:2200 },
  { name:"Brabant", group:"Draft", heightAvg:17.5, weightAvg:1949 },
  { name:"Suffolk Punch", group:"Draft", heightAvg:16.3, weightAvg:1900 },
  { name:"Jutland", group:"Draft", heightAvg:16.0, weightAvg:1800 },
  { name:"Boulonnais", group:"Draft", heightAvg:16.2, weightAvg:1900 },
  { name:"Breton", group:"Draft", heightAvg:16.0, weightAvg:1800 },
  { name:"Comtois", group:"Draft", heightAvg:15.3, weightAvg:1700 },
  { name:"Haflinger", group:"Draft", heightAvg:14.0, weightAvg:1200 },
  { name:"Norwegian Fjord", group:"Draft", heightAvg:14.2, weightAvg:1100 },
  { name:"American Cream Draft", group:"Draft", heightAvg:16.2, weightAvg:1900 },
  { name:"Black Forest Horse", group:"Draft", heightAvg:15.2, weightAvg:1400 },
  { name:"Noriker", group:"Draft", heightAvg:16.0, weightAvg:1700 },
  { name:"Auxois", group:"Draft", heightAvg:16.1, weightAvg:1900 },
  { name:"Ardennais", group:"Draft", heightAvg:16.2, weightAvg:2000 },
  { name:"Rhenish German", group:"Draft", heightAvg:16.2, weightAvg:1900 },
  { name:"Connemara", group:"Pony", heightAvg:12.1, weightAvg:507 },
  { name:"Welsh Section A", group:"Pony", heightAvg:13.1, weightAvg:759 },
  { name:"Welsh Section B", group:"Pony", heightAvg:13.9, weightAvg:731 },
  { name:"Welsh Section C", group:"Pony", heightAvg:11.2, weightAvg:725 },
  { name:"Welsh Section D", group:"Pony", heightAvg:11.5, weightAvg:773 },
  { name:"Shetland Pony", group:"Pony", heightAvg:11.8, weightAvg:636 },
  { name:"Dartmoor Pony", group:"Pony", heightAvg:12.2, weightAvg:727 },
  { name:"Exmoor Pony", group:"Pony", heightAvg:13.1, weightAvg:512 },
  { name:"New Forest Pony", group:"Pony", heightAvg:13.1, weightAvg:793 },
  { name:"Fell Pony", group:"Pony", heightAvg:13.4, weightAvg:517 },
  { name:"Dales Pony", group:"Pony", heightAvg:13.5, weightAvg:561 },
  { name:"Highland Pony", group:"Pony", heightAvg:12.2, weightAvg:433 },
  { name:"Hackney Pony", group:"Pony", heightAvg:11.7, weightAvg:690 },
  { name:"Fjord Pony", group:"Pony", heightAvg:13.2, weightAvg:900 },
  { name:"Haflinger Pony", group:"Pony", heightAvg:13.2, weightAvg:850 },
  { name:"Landais Pony", group:"Pony", heightAvg:13.7, weightAvg:561 },
  { name:"Gotland Pony", group:"Pony", heightAvg:11.7, weightAvg:655 },
  { name:"Miniature Horse", group:"Pony", heightAvg:9.0, weightAvg:250 },
  { name:"American Miniature", group:"Pony", heightAvg:8.2, weightAvg:200 },
  { name:"Pony of the Americas", group:"Pony", heightAvg:12.2, weightAvg:729 },
  { name:"Chincoteague Pony", group:"Pony", heightAvg:12.4, weightAvg:535 },
  { name:"Assateague Pony", group:"Pony", heightAvg:11.4, weightAvg:781 },
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
  var breed = HORSE_BREED_DEFS.find(function(b){ return b.name === breedName; }) || HORSE_BREED_DEFS[0];
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
  var breed = HORSE_BREED_DEFS.find(function(b){ return b.name === breedName; }) || HORSE_BREED_DEFS[0];
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
  var horses = (props.horses || []).map(normalizeHorse);
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


// ── NORMALIZE MARKET-BOUGHT HORSES ───────────────────────────
// Horses bought from Livestock Market have minimal fields.
// This fills in genetics + display fields so HorsesView never crashes.
function normalizeHorse(horse) {
  if (!horse) return horse;
  var breed = horse.breed || "Quarter Horse";
  var breedDef = HORSE_BREED_DEFS.find(function(b){ return b.name===breed; }) || HORSE_BREED_DEFS[0];
  var genome = horse.genome || generateHorseGenome(breed);
  var coatColor = horse.coatColor || interpretHorseColor(genome);
  var healthScore = horse.healthScore != null ? horse.healthScore : calcHorseHealthScore(genome);
  var perfScore = horse.perfScore != null ? horse.perfScore : calcHorsePerfScore(genome);
  return Object.assign({
    id: horse.id || ("horse_"+Date.now()),
    name: horse.name || generateHorseName(horse.sex||"F"),
    breed: breed,
    group: breedDef.group || "Western",
    sex: horse.sex || "F",
    ageMonths: horse.ageMonths || 36,
    price: horse.price || 1000,
    heightHands: horse.heightHands || breedDef.heightAvg || 15.0,
    weightLbs: horse.weightLbs || breedDef.weightAvg || 1000,
    showPoints: horse.showPoints || 0,
    showHistory: horse.showHistory || [],
    coi: horse.coi || 0,
    sireId: horse.sireId || null,
    damId: horse.damId || null
  }, horse, {
    genome: genome,
    coatColor: coatColor,
    healthScore: healthScore,
    perfScore: perfScore,
    group: horse.group || breedDef.group || "Western"
  });
}


// ════════════════════════════════════════════════════════════════
// HORSE DNA PANEL
// ════════════════════════════════════════════════════════════════

function buildHorseVIN(genome) {
  if (!genome) return "NO-GENOME";
  var c = genome.coat||{}, h = genome.health||{}, p = genome.perf||{};
  function cd(l){ var a=c[l]||["0","0"]; return a[0]+a[1]; }
  function hd(l){ var a=h[l]||["g","g"]; return a[0]+a[1]; }
  function pd(l){ var a=p[l]||[3,3]; return a[0]+""+a[1]; }
  return "E"+cd("E")+"A"+cd("A")+"Cr"+cd("Cr")+"D"+cd("D")+"G"+cd("G")+"Rn"+cd("Rn")+"TO"+cd("TO")+"Sv"+cd("Sv")+"Z"+cd("Z")+"Ch"+cd("Ch")+
    "|Hip"+hd("HipQ")+"Bn"+hd("BoneQ")+"Lg"+hd("LungQ")+"Ht"+hd("HeartQ")+"Hf"+hd("HoofQ")+
    "|SP"+pd("SPEED")+"ST"+pd("STAMINA")+"MU"+pd("MUSCLE")+"TE"+pd("TEMP")+"AG"+pd("AGILITY");
}

var HORSE_COAT_LOCUS_INFO = {
  E:{name:"Extension (MC1R)", desc:function(a){
    if(a[0]==="1"&&a[1]==="1") return "EE — Homozygous black-based. All offspring carry E.";
    if(a[0]==="1"||a[1]==="1") return "Ee — Black-based, red carrier. 50% chance red offspring.";
    return "ee — Recessive red/chestnut. No black pigment possible.";
  }},
  A:{name:"Agouti (ASIP)", desc:function(a){
    if(a[0]==="0"&&a[1]==="0") return "aa — Non-agouti. Unrestricted black pigment.";
    if(a[0]==="1"&&a[1]==="1") return "AA — Homozygous agouti. Black restricted to points = bay.";
    return "Aa — Agouti carrier. Bay expression, but can throw black foals.";
  }},
  Cr:{name:"Cream (SLC45A2)", desc:function(a){
    var n=(a[0]==="1"?1:0)+(a[1]==="1"?1:0);
    if(n===2) return "⚠️ CrCr — Double cream. Cremello/Perlino/Smoky Cream. Blue eyes, UV sensitivity.";
    if(n===1) return "Ccr — Single cream. Palomino (chestnut), Buckskin (bay), Smoky Black (black).";
    return "cc — No cream. Base color unaffected.";
  }},
  D:{name:"Dun (TBX3)", desc:function(a){
    if(a[0]==="1"||a[1]==="1") return "D+ — Dun factor. Body diluted, primitive markings preserved (dorsal stripe, leg barring).";
    return "dd — No dun factor.";
  }},
  G:{name:"Grey (STX17)", desc:function(a){
    if(a[0]==="1"&&a[1]==="1") return "GG — Homozygous grey. Will grey completely. All offspring grey.";
    if(a[0]==="1"||a[1]==="1") return "Gg — Heterozygous grey. Progressively greys out. 50% offspring grey.";
    return "gg — No grey gene. Color stable for life.";
  }},
  Rn:{name:"Roan (KIT)", desc:function(a){
    if(a[0]==="1"||a[1]==="1") return "Rn+ — Classic roan. White hairs mixed into body; head and legs stay base color.";
    return "rn/rn — No roan.";
  }},
  TO:{name:"Tobiano (KIT)", desc:function(a){
    if(a[0]==="1"&&a[1]==="1") return "TOTO — Homozygous tobiano. Bold white crossing topline. All offspring tobiano.";
    if(a[0]==="1"||a[1]==="1") return "TOto — Heterozygous tobiano. White patches cross the back. 50% tobiano offspring.";
    return "toto — No tobiano patterning.";
  }},
  Sv:{name:"Sabino/Splashed (SB1/SW)", desc:function(a){
    if(a[0]==="1"&&a[1]==="1") return "⚠️ Homozygous Sabino/Splashed — Risk of deafness or lethal white foal syndrome.";
    if(a[0]==="1"||a[1]==="1") return "Sv+ — Sabino/splashed white. Irregular white markings, bold face, high stockings.";
    return "sv/sv — No sabino/splashed white.";
  }},
  Z:{name:"Silver (PMEL17)", desc:function(a){
    if(a[0]==="1"||a[1]==="1") return "⚠️ Z+ — Silver dilution. Lightens mane/tail on black-based horses. Linked to MCOA eye anomaly.";
    return "zz — No silver gene.";
  }},
  Ch:{name:"Champagne (SLC36A1)", desc:function(a){
    if(a[0]==="1"&&a[1]==="1") return "ChCh — Homozygous champagne. Strong dilution, amber/hazel eyes.";
    if(a[0]==="1"||a[1]==="1") return "Chch — Champagne carrier. Classic, Amber, or Gold Champagne depending on base.";
    return "chch — No champagne gene.";
  }}
};

var HORSE_HEALTH_LOCUS_INFO = {
  HipQ: {name:"Hip & Joint Quality",   risk:"g/g — Arthritis, lameness, shortened career risk."},
  BoneQ:{name:"Bone Density",          risk:"g/g — Fracture and stress injury risk."},
  LungQ:{name:"Respiratory Health",    risk:"g/g — Exercise intolerance, heaves (COPD) risk."},
  HeartQ:{name:"Cardiac Health",       risk:"g/g — Fatigue and arrhythmia risk."},
  HoofQ:{name:"Hoof Quality",          risk:"g/g — Chronic lameness and thrush susceptibility."}
};

var HORSE_PERF_QTL_INFO = {
  SPEED:  {icon:"💨",full:"Speed",    desc:"Acceleration & top velocity. Key for Racing, Jumping."},
  STAMINA:{icon:"🫁",full:"Stamina",  desc:"Sustained effort & recovery. Key for Endurance, Cross Country."},
  MUSCLE: {icon:"💪",full:"Muscle",   desc:"Raw power & mass. Dominates Halter, Draft, Pulling."},
  TEMP:   {icon:"🧠",full:"Temperament",desc:"Trainability & focus. Highest weight in Dressage, Western."},
  AGILITY:{icon:"🌀",full:"Agility", desc:"Balance & collection. Key for Reining, Jumping, Dressage."}
};

function HorseDNAModal(props) {
  var horse = props.horse, onClose = props.onClose;
  if (!horse || !horse.genome) return null;
  var g = horse.genome;
  var vin = buildHorseVIN(g);
  var coatColor = horse.coatColor || interpretHorseColor(g);

  // Count warnings
  var healthWarn = 0, coatWarn = 0;
  ["HipQ","BoneQ","LungQ","HeartQ","HoofQ"].forEach(function(l){
    var al=(g.health||{})[l]||["g","g"];
    if(al[0]==="g"&&al[1]==="g") healthWarn++;
  });
  var sv=(g.coat||{}).Sv||["0","0"]; if(sv[0]==="1"&&sv[1]==="1") coatWarn++;
  var z=(g.coat||{}).Z||["0","0"];   if(z[0]==="1"||z[1]==="1")   coatWarn++;
  var cr=(g.coat||{}).Cr||["0","0"]; if(cr[0]==="1"&&cr[1]==="1") coatWarn++;

  function CoatCard(loc) {
    var ld=HORSE_COAT_LOCUS_INFO[loc];
    var al=(g.coat||{})[loc]||["0","0"];
    var desc=ld.desc(al);
    var warn=desc.indexOf("⚠️")!==-1;
    return React.createElement("div",{key:loc,style:{
      background:warn?"#2d1e00":"#141008",
      border:"1px solid "+(warn?"#ca8a04":"#2a3a18"),
      borderRadius:6,padding:"8px 10px"}},
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}},
        React.createElement("span",{style:{color:warn?"#fde68a":"#84cc16",fontWeight:"bold",fontSize:"0.78rem"}},loc),
        React.createElement("span",{style:{fontFamily:"monospace",color:"#f0e6d3",fontSize:"0.8rem"}},al[0]+"/"+al[1])
      ),
      React.createElement("div",{style:{color:"#4a6a28",fontSize:"0.65rem",marginBottom:2}},ld.name),
      React.createElement("div",{style:{color:warn?"#fde68a":"#6a8a58",fontSize:"0.67rem",lineHeight:1.3}},desc)
    );
  }

  function HealthCard(loc) {
    var ld=HORSE_HEALTH_LOCUS_INFO[loc];
    var al=(g.health||{})[loc]||["g","g"];
    var both=al[0]==="Q"&&al[1]==="Q", one=al[0]!==al[1], bad=al[0]==="g"&&al[1]==="g";
    var label=both?"Excellent":one?"Carrier":"Poor";
    var col=both?"#86efac":one?"#fde68a":"#fca5a5";
    var bg=both?"#0f2010":one?"#2d1e00":"#481808";
    var bdr=both?"#166534":one?"#ca8a04":"#ef4444";
    return React.createElement("div",{key:loc,style:{background:bg,border:"1px solid "+bdr,borderRadius:6,padding:"8px 10px"}},
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}},
        React.createElement("span",{style:{color:col,fontWeight:"bold",fontSize:"0.78rem"}},loc),
        React.createElement("span",{style:{fontFamily:"monospace",color:"#f0e6d3",fontSize:"0.8rem"}},al[0]+"/"+al[1])
      ),
      React.createElement("div",{style:{display:"inline-block",background:"rgba(0,0,0,0.3)",
        border:"1px solid "+bdr,borderRadius:3,padding:"1px 6px",
        fontSize:"0.68rem",color:col,fontWeight:"bold",marginBottom:3}},label),
      React.createElement("div",{style:{color:"#8a9a78",fontSize:"0.65rem",marginBottom:bad?3:0}},ld.name),
      bad&&React.createElement("div",{style:{color:"#fca5a5",fontSize:"0.65rem"}},"⚠️ "+ld.risk)
    );
  }

  return React.createElement("div",{
    onClick:onClose,
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:1200,
      display:"flex",alignItems:"center",justifyContent:"center",padding:16}
  },
    React.createElement("div",{
      onClick:function(e){e.stopPropagation();},
      style:{background:"#0e1208",border:"1px solid #2a3a18",borderRadius:12,
        width:"100%",maxWidth:740,maxHeight:"90vh",overflowY:"auto",padding:22}
    },
      // ── Header ──
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}},
        React.createElement("div",{},
          React.createElement("div",{style:{color:"#84cc16",fontWeight:"bold",fontSize:"1.05rem"}},"🧬 Horse DNA Panel"),
          React.createElement("div",{style:{color:"#4a6a28",fontSize:"0.72rem",marginTop:2}},
            (horse.name||"Market Horse")+" · "+(horse.breed||"Unknown")+" · "+(horse.sex==="M"?"♂ Stallion":"♀ Mare")),
          React.createElement("div",{style:{color:"#c4956a",fontSize:"0.78rem",marginTop:2}},
            "🎨 Expressed Color: ",React.createElement("span",{style:{fontWeight:"bold",color:"#f0e6d3"}},coatColor)),
          (healthWarn>0||coatWarn>0)&&React.createElement("div",{style:{marginTop:5,display:"flex",gap:6,flexWrap:"wrap"}},
            healthWarn>0&&React.createElement("span",{style:{background:"#481808",border:"1px solid #ef4444",color:"#fca5a5",
              borderRadius:4,padding:"2px 7px",fontSize:"0.65rem",fontWeight:"bold"}},
              "⚠️ "+healthWarn+" health concern"+(healthWarn>1?"s":"")),
            coatWarn>0&&React.createElement("span",{style:{background:"#2d1e00",border:"1px solid #ca8a04",color:"#fde68a",
              borderRadius:4,padding:"2px 7px",fontSize:"0.65rem",fontWeight:"bold"}},
              "⚠️ "+coatWarn+" coat warning"+(coatWarn>1?"s":""))
          )
        ),
        React.createElement("button",{onClick:onClose,
          style:{background:"none",border:"1px solid #2a3a18",color:"#4a6a28",
            borderRadius:5,padding:"4px 12px",cursor:"pointer",fontSize:"0.85rem"}},"✕ Close")
      ),

      // ── VIN ──
      React.createElement("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:16}},
        React.createElement("div",{style:{flex:1,fontFamily:"monospace",fontSize:"0.55rem",
          background:"#141008",border:"1px solid #2a3a18",borderRadius:6,
          padding:"7px 10px",color:"#4a6a28",wordBreak:"break-all"}},"🧬 "+vin),
        React.createElement("button",{
          onClick:function(){navigator.clipboard&&navigator.clipboard.writeText(vin);},
          style:{background:"#1a2a0a",border:"1px solid #2a3a18",color:"#84cc16",
            borderRadius:5,padding:"6px 10px",cursor:"pointer",fontSize:"0.72rem",flexShrink:0}},
          "📋 Copy VIN")
      ),

      // ── Coat loci ──
      React.createElement("div",{style:{color:"#c4956a",fontWeight:"bold",fontSize:"0.78rem",
        textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}},"Coat Color Loci"),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:16}},
        Object.keys(HORSE_COAT_LOCUS_INFO).map(function(loc){return CoatCard(loc);})
      ),

      // ── Health panel ──
      React.createElement("div",{style:{color:"#22c55e",fontWeight:"bold",fontSize:"0.78rem",
        textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}},"Health Panel"),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:16}},
        Object.keys(HORSE_HEALTH_LOCUS_INFO).map(function(loc){return HealthCard(loc);})
      ),

      // ── Performance QTLs ──
      React.createElement("div",{style:{color:"#d4942a",fontWeight:"bold",fontSize:"0.78rem",
        textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}},"Performance QTLs"),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}},
        HORSE_PERF_QTLS.map(function(q){
          var info=HORSE_PERF_QTL_INFO[q];
          var v=(g.perf||{})[q]||[3,3];
          var avg=(v[0]+v[1])/2;
          var pct=Math.round((avg/5)*100);
          var col=avg>=4?"#d4942a":avg>=3?"#22c55e":"#64748b";
          return React.createElement("div",{key:q,style:{background:"#141008",border:"1px solid #2a3a18",
            borderRadius:6,padding:"8px 6px",textAlign:"center"}},
            React.createElement("div",{style:{fontSize:"1.1rem",marginBottom:3}},info.icon),
            React.createElement("div",{style:{fontSize:"0.62rem",color:col,fontWeight:"bold",marginBottom:4}},info.full),
            React.createElement("div",{style:{background:"#0a1008",borderRadius:3,height:6,overflow:"hidden",marginBottom:4}},
              React.createElement("div",{style:{background:col,width:pct+"%",height:"100%"}})
            ),
            React.createElement("div",{style:{fontFamily:"monospace",fontSize:"0.7rem",color:"#f0e6d3",marginBottom:2}},v[0]+"/"+v[1]),
            React.createElement("div",{style:{fontSize:"0.6rem",color:"#4a6a28"}},"avg "+avg.toFixed(1)),
            React.createElement("div",{style:{fontSize:"0.58rem",color:"#364a24",marginTop:3,lineHeight:1.3}},info.desc)
          );
        })
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
  var onRename = props.onRename;
  if (!horse) return null;

  var _en = React.useState(false), editing = _en[0], setEditing = _en[1];
  var _nv = React.useState(horse.name||""), nameVal = _nv[0], setNameVal = _nv[1];
  var _dn = React.useState(false), showDNA = _dn[0], setShowDNA = _dn[1];

  var sexColor = horse.sex==="M" ? "#60a5fa" : "#f472b6";
  var title = getHorseShowTitle(horse.showPoints);
  var ageYrs = Math.round((horse.ageMonths||0)/12*10)/10;

  function saveName() {
    var trimmed = nameVal.trim();
    if (trimmed && onRename) onRename(horse, trimmed);
    setEditing(false);
  }

  return React.createElement("div",{
    onClick:onSelect && !editing ? function(){ onSelect(horse); } : null,
    style:{
      background: isSelected?"#1a3a1a":"#1a1410",
      border:"1px solid "+(isSelected?"#22c55e":"#2e2218"),
      borderRadius:10, padding:14, cursor:onSelect&&!editing?"pointer":"default",
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

    // Name + sex + edit
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4,gap:6}},
      editing
        ? React.createElement("div",{style:{display:"flex",gap:4,flex:1},onClick:function(e){e.stopPropagation();}},
            React.createElement("input",{
              autoFocus:true, value:nameVal,
              onChange:function(e){setNameVal(e.target.value);},
              onKeyDown:function(e){if(e.key==="Enter")saveName();if(e.key==="Escape")setEditing(false);},
              style:{flex:1,background:"#0a1a0a",border:"1px solid #22c55e",color:"#f0e6d3",
                borderRadius:4,padding:"2px 6px",fontSize:"0.88rem",fontWeight:"bold"}
            }),
            React.createElement("button",{onClick:saveName,
              style:{background:"#0a2a15",border:"1px solid #22c55e",color:"#22c55e",borderRadius:4,padding:"2px 7px",cursor:"pointer",fontSize:"0.75rem"}
            },"✓"),
            React.createElement("button",{onClick:function(e){e.stopPropagation();setEditing(false);},
              style:{background:"transparent",border:"1px solid #4a3a28",color:"#6b5038",borderRadius:4,padding:"2px 7px",cursor:"pointer",fontSize:"0.75rem"}
            },"✕")
          )
        : React.createElement(React.Fragment,null,
            React.createElement("div",{style:{color:"#f0e6d3",fontWeight:"bold",fontSize:"0.95rem",flex:1}},
              horse.name || React.createElement("span",{style:{color:"#4a3a28",fontStyle:"italic"}},"(unnamed)")
            ),
            React.createElement("button",{
              onClick:function(e){e.stopPropagation();setNameVal(horse.name||"");setEditing(true);},
              style:{background:"transparent",border:"none",color:"#4a3a28",cursor:"pointer",fontSize:"0.8rem",padding:"0 2px",lineHeight:1}
            },"✏️")
          ),
      !editing && React.createElement("span",{style:{color:sexColor,fontSize:"0.8rem",flexShrink:0}}, horse.sex==="M"?"♂":"♀")
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

    // Action buttons row
    React.createElement("div",{style:{display:"flex",gap:5,marginTop:4}},
      React.createElement("button",{
        onClick:function(e){e.stopPropagation();setShowDNA(true);},
        style:{flex:1,background:"#0a1a08",border:"1px solid #2a4a18",color:"#84cc16",
          borderRadius:6,padding:"5px 0",cursor:"pointer",fontSize:"0.75rem",fontWeight:"bold"}
      },"🧬 DNA"),
      onSell && React.createElement("button",{
        onClick:function(e){e.stopPropagation();onSell(horse);},
        style:{flex:1,background:"#1a0a00",border:"1px solid #d4860a",color:"#d4860a",
          borderRadius:6,padding:"5px 0",cursor:"pointer",fontSize:"0.78rem"}
      },"💰 Sell")
    ),
    showDNA && React.createElement(HorseDNAModal,{horse:horse, onClose:function(){setShowDNA(false);}})
  );
}

function HorsesView(props) {
  var horses = (props.horses || []).map(normalizeHorse);
  var money = props.money || 0;
  var onSell = props.onSell;
  var onRename = props.onRename;
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
                onRename:onRename,
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
        React.createElement(HorseCard,{horse:selectedHorse,onRename:onRename,onSell:onSell})
      )
    )
  );
}
