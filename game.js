// game.js — Bloodline Acres core game logic


function _typeof2(o) {
  "@babel/helpers - typeof";

  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof2(o);
}
function _ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? _ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty2(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

// ── GENETICS ENGINE ───────────────────────────────────────────
// E→K→A→B→D hierarchy — Mira's spec, built by Claude

// ── LOCUS METADATA (used by DNA panel UI) ────────────────────
var COAT_LOCI = {
  E:  { name: "Extension (MC1R) — Dark pigment switch" },
  K:  { name: "Dominant Black (CBD103) — Coverage" },
  A:  { name: "Agouti (ASIP) — Pattern generator" },
  B:  { name: "Brown (TYRP1) — Black vs brown" },
  D:  { name: "Dilute (MLPH) — Color intensity" },
  M:  { name: "Merle (PMEL) — Merle patterning" },
  S:  { name: "Spotting (MITF) — White pattern" },
  T:  { name: "Ticking — Roan/ticked overlay" },
  H:  { name: "Harlequin (PSMB7) — Harlequin" },
  I:  { name: "Intensity — Red/tan depth" },
  As: { name: "Saddle Tan (RALY) — Saddle modifier" },
  L:  { name: "Length (FGF5) — Coat length" },
  W:  { name: "Wire (RSPO2) — Wire/furnishings" },
  Cu: { name: "Curl (KRT71) — Coat curl" }
};

var HEALTH_LOCI = {
  HipQ:  { name: "Hip Quality" },
  EyeQ:  { name: "Eye Health" },
  HeartQ:{ name: "Cardiac Health" },
  JointQ:{ name: "Joint/Orthopedic" },
  MDR1:  { name: "MDR1 Drug Sensitivity" },
  PRA:   { name: "Progressive Retinal Atrophy" },
  DM:    { name: "Degenerative Myelopathy" },
  vWD:   { name: "von Willebrand Disease" }
};

var PERF_QTLS = ["DRIVE","INTEL","NERVE","SPEED","MUSCLE"];

// Pick one allele from a parent's diploid pair (50/50)
function punnett(a0, a1) {
  return Math.random() < 0.5 ? a0 : a1;
}

// Pick a weighted-random allele from a frequency table [["B",0.8],["b",0.2]]
function pickWeighted(freqArr) {
  var r = Math.random(), sum = 0;
  for (var i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];
    if (r <= sum) return freqArr[i][0];
  }
  return freqArr[freqArr.length - 1][0];
}

// Sample a diploid pair [allele1, allele2] from a frequency table
function sampleDiploid(freqArr) {
  return [pickWeighted(freqArr), pickWeighted(freqArr)];
}

// Generate a fresh genome for a new animal from breed profile frequencies
function generateGenome(breed) {
  var b = assignGeneticProfile(breed);
  var coat = {};
  Object.keys(b.coatFreqs).forEach(function(loc) {
    coat[loc] = sampleDiploid(b.coatFreqs[loc]);
  });
  var health = {};
  Object.keys(b.healthFreqs).forEach(function(loc) {
    health[loc] = sampleDiploid(b.healthFreqs[loc]);
  });
  var perf = {};
  PERF_QTLS.forEach(function(q) {
    var avg = b.perfAvg[q] || 3;
    var v1 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    var v2 = Math.max(1, Math.min(5, avg + Math.round((Math.random()-0.5)*2)));
    perf[q] = [v1, v2];
  });
  return { coat: coat, health: health, perf: perf, mutations: [] };
}

// Breed two genomes — real Punnett inheritance, one allele per parent per locus
function breedGenomes(g1, g2) {
  var coat = {};
  var coatLoci = Object.keys(Object.assign({}, g1.coat, g2.coat));
  coatLoci.forEach(function(loc) {
    var a = g1.coat[loc] || ["m","m"];
    var b = g2.coat[loc] || ["m","m"];
    coat[loc] = [punnett(a[0], a[1]), punnett(b[0], b[1])];
  });
  var health = {};
  var healthLoci = Object.keys(Object.assign({}, g1.health, g2.health));
  healthLoci.forEach(function(loc) {
    var a = g1.health[loc] || ["N","N"];
    var b = g2.health[loc] || ["N","N"];
    health[loc] = [punnett(a[0], a[1]), punnett(b[0], b[1])];
  });
  var perf = {};
  PERF_QTLS.forEach(function(q) {
    var a = g1.perf[q] || [3,3];
    var b = g2.perf[q] || [3,3];
    var v1 = punnett(a[0], a[1]);
    var v2 = punnett(b[0], b[1]);
    // 10% chance of ±1 random mutation per allele
    perf[q] = [
      Math.max(1, Math.min(5, v1 + (Math.random()<0.1 ? (Math.random()<0.5?1:-1) : 0))),
      Math.max(1, Math.min(5, v2 + (Math.random()<0.1 ? (Math.random()<0.5?1:-1) : 0)))
    ];
  });
  var mutations = [];
  if (Math.random() < 0.02) {
    mutations.push({ loc:"E", type:"spontaneous", desc:"Spontaneous pigment mutation" });
  }
  return { coat:coat, health:health, perf:perf, mutations:mutations };
}

// ── PHENOTYPE — E→K→A→B→D ────────────────────────────────────
function interpretColor(genome) {
  var c = genome.coat;
  if (!c || !c.E) return "Unknown";

  var ee     = c.E[0]==="e" && c.E[1]==="e";
  var hasKB  = c.K && (c.K[0]==="KB" || c.K[1]==="KB");
  var kbrHet = c.K && (c.K[0]==="kbr" || c.K[1]==="kbr") && !hasKB;
  var brown  = c.B && c.B[0]==="b" && c.B[1]==="b";
  var dilute = c.D && c.D[0]==="d" && c.D[1]==="d";
  var merle  = c.M && (c.M[0]==="M" || c.M[1]==="M");
  var dblM   = c.M && c.M[0]==="M" && c.M[1]==="M";
  var harl   = c.H && (c.H[0]==="H" || c.H[1]==="H") && merle;

  function eumelanin() {
    if (brown && dilute) return "Isabella";
    if (brown) return "Chocolate";
    if (dilute) return "Blue";
    return "Black";
  }

  var parts = [];

  // STEP 1: E — recessive red overrides all
  if (ee) {
    var intensity = c.I && c.I[0]==="i" && c.I[1]==="i";
    parts.push(intensity ? "Cream" : dilute ? "Yellow" : "Red/Yellow");
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
    return parts.join(" \xB7 ");
  }

  // STEP 2: K — dominant black skips A
  if (hasKB) {
    parts.push(kbrHet ? "Brindle" : eumelanin());
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
    if (harl) parts.push("Harlequin");
    return parts.join(" \xB7 ");
  }

  // STEP 3: A — pattern
  var a1 = c.A ? c.A[0] : "at";
  var saddle = c.As && (c.As[0]==="N" || c.As[1]==="N") && a1==="at";
  var base   = eumelanin();

  if (kbrHet) {
    parts.push("Brindle");
  } else if (a1==="Ay") {
    parts.push(dilute ? "Fawn" : "Sable/Fawn");
  } else if (a1==="aw") {
    parts.push("Wolf Sable");
  } else if (a1==="at") {
    parts.push(saddle ? base+" & Tan (Saddle)" : base+" & Tan");
  } else {
    parts.push(base); // aa recessive black
  }

  // Merle/harl overlay
  if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  if (harl) parts.push("Harlequin");

  // White spotting
  if (c.S) {
    var s0=c.S[0],s1=c.S[1];
    if (s0==="sw"||s1==="sw") parts.push("Mostly White");
    else if (s0==="sp"||s1==="sp") parts.push("Piebald");
  }
  if (c.T) {
    var t0=c.T[0],t1=c.T[1];
    if (t0==="TR"||t1==="TR") parts.push("Roan");
    else if (t0==="T"||t1==="T") parts.push("Ticked");
  }

  return parts.join(" \xB7 ") || "Unknown";
}

// ── HEALTH SCORE ──────────────────────────────────────────────
function calcHealthScore(genome) {
  var h = genome.health;
  var score = 100;
  var issues = [];
  ["HipQ","EyeQ","HeartQ","JointQ"].forEach(function(loc) {
    var al = h[loc];
    if (!al) return;
    if (al[0]==="g"&&al[1]==="g") { score-=20; issues.push(loc+" Affected"); }
    else if (al[0]==="g"||al[1]==="g") score-=5;
  });
  ["MDR1","PRA","DM","vWD"].forEach(function(loc) {
    var al = h[loc];
    if (!al) return;
    if (al[0]==="n"&&al[1]==="n") { score-=15; issues.push(loc+" Affected"); }
    else if (al[0]==="n"||al[1]==="n") score-=3;
  });
  var m = genome.coat.M;
  if (m && m[0]==="M" && m[1]==="M") { score-=25; issues.push("Double Merle"); }
  return { score: Math.max(0, score), issues: issues };
}

// ── PERFORMANCE SCORE ─────────────────────────────────────────
function calcPerfScore(genome) {
  var p = genome.perf;
  var total = 0, count = 0;
  PERF_QTLS.forEach(function(q) {
    var v = p[q];
    if (v) { total += (v[0]+v[1])/2; count++; }
  });
  return count ? Math.round((total/count)*20) : 60;
}

// ── LETHAL COMBO CHECK ────────────────────────────────────────
function checkLethals(genome) {
  var w = [];
  var m = genome.coat.M;
  if (m && m[0]==="M" && m[1]==="M") w.push("Double Merle: High risk of deafness/blindness");
  var h = genome.coat.H;
  if (h && (h[0]==="H"||h[1]==="H") && m && m[0]==="M" && m[1]==="M")
    w.push("Harlequin + Double Merle: Embryonic lethal risk");
  return w;
}

// ── VIN STRING BUILDER ────────────────────────────────────────
function buildVIN(genome) {
  var c = genome.coat;
  if (!c || !c.E) return "BA-??????";
  var eC = (c.E[0]==="e"&&c.E[1]==="e")?"R":(c.E[0]==="Em"||c.E[1]==="Em")?"M":"E";
  var kC = !c.K?"A":(c.K[0]==="KB"||c.K[1]==="KB")?"K":(c.K[0]==="kbr"||c.K[1]==="kbr")?"Br":"A";
  var aC = !c.A?"?":c.A[0]==="Ay"?"Fy":c.A[0]==="aw"?"Wf":c.A[0]==="at"?"Tp":"Bk";
  var bC = !c.B?"B":(c.B[0]==="b"&&c.B[1]==="b")?"bb":(c.B[0]==="b"||c.B[1]==="b")?"Bb":"BB";
  var dC = !c.D?"D":(c.D[0]==="d"&&c.D[1]==="d")?"dd":(c.D[0]==="d"||c.D[1]==="d")?"Dd":"DD";
  var mC = !c.M||!(c.M[0]==="M"||c.M[1]==="M")?"":c.M[0]==="M"&&c.M[1]==="M"?"\xB7MM":"\xB7Mm";
  return "BA-"+eC+kC+aC+bC+dC+mC;
}

// ── LOCUS DESCRIPTIONS (DNA panel tooltips) ──────────────────
function getLocusDesc(loci, loc, al) {
  if (!al) return "\u2014";
  var a0=al[0], a1=al[1];
  if (loc==="E") {
    if (a0==="e"&&a1==="e") return "\u26A0\uFE0F Recessive Red \u2014 no dark pigment";
    if (a0==="Em"||a1==="Em") return "Black mask expressed";
    if (a0==="e"||a1==="e") return "Carrier of recessive red";
    return "Normal dark pigment";
  }
  if (loc==="K") {
    if (a0==="KB"||a1==="KB") return "Dominant Black \u2014 A locus suppressed";
    if (a0==="kbr"||a1==="kbr") return "Brindle \u2014 stripes on tan areas";
    return "Wild type \u2014 A locus expressed";
  }
  if (loc==="A") {
    if (a0==="Ay") return "Fawn/Sable \u2014 tan with black-tipped hairs";
    if (a0==="aw") return "Wolf Sable \u2014 banded agouti hairs";
    if (a0==="at") return "Tan Points \u2014 black with tan markings";
    if (a0==="a"&&a1==="a") return "Recessive Black \u2014 solid black (rare)";
    return "Mixed A-locus";
  }
  if (loc==="B") {
    if (a0==="b"&&a1==="b") return "Chocolate/Liver \u2014 brown pigment";
    if (a0==="b"||a1==="b") return "Carrier of brown";
    return "Black pigment";
  }
  if (loc==="D") {
    if (a0==="d"&&a1==="d") return "\u26A0\uFE0F Dilute \u2014 blue or isabella";
    if (a0==="d"||a1==="d") return "Carrier of dilute";
    return "Normal color intensity";
  }
  if (loc==="M") {
    if (a0==="M"&&a1==="M") return "\u26A0\uFE0F Double Merle \u2014 deafness/blindness risk";
    if (a0==="M"||a1==="M") return "Merle \u2014 mottled pattern";
    return "Non-merle";
  }
  if (loc==="S") {
    if (a0==="sw"||a1==="sw") return "Extreme white spotting";
    if (a0==="sp"||a1==="sp") return "Piebald spotting";
    if (a0==="S"&&a1==="S") return "Solid \u2014 no white spotting";
    return "Irish spotting";
  }
  if (loc==="MDR1"||loc==="PRA"||loc==="DM"||loc==="vWD") {
    if (a0==="n"&&a1==="n") return "\u26A0\uFE0F Affected \u2014 two copies of mutation";
    if (a0==="n"||a1==="n") return "Carrier \u2014 one copy, not affected";
    return "Clear \u2014 no mutation";
  }
  if (loc==="HipQ"||loc==="EyeQ"||loc==="HeartQ"||loc==="JointQ") {
    if (a0==="g"&&a1==="g") return "\u26A0\uFE0F Poor \u2014 high risk";
    if (a0==="g"||a1==="g") return "Moderate genetic risk";
    return "Good \u2014 low genetic risk";
  }
  return a0+"/"+a1;
}

var getDesc = function(loci, loc, al) { return getLocusDesc(loci, loc, al); };

// ── END GENETICS ENGINE ───────────────────────────────────────

// ── SIZE & GROWTH ENGINE ──────────────────────────────────────
// Height in inches (shoulder height), weight in lbs
// XL bumped to reflect giant working breeds (Bully Kutta, CAS, Kangal ~30-32" shoulder)
var SIZE_STANDARDS = {
  XS: { weightAvg: 8,   weightRange: [4,   12],  heightAvg: 9,  heightRange: [6,  11] },
  S:  { weightAvg: 18,  weightRange: [10,  25],  heightAvg: 13, heightRange: [10, 16] },
  M:  { weightAvg: 40,  weightRange: [26,  55],  heightAvg: 19, heightRange: [16, 22] },
  L:  { weightAvg: 70,  weightRange: [56,  90],  heightAvg: 24, heightRange: [22, 27] },
  XL: { weightAvg: 130, weightRange: [91,  220], heightAvg: 30, heightRange: [27, 36] }
};

// Growth curve: returns 0.0-1.0 fraction of adult size at a given age in months
// Dogs reach height faster than weight — height ~90% done before weight
function growthFraction(ageMonths, sizeCategory, type) {
  var matureAge = { XS:10, S:12, M:15, L:18, XL:24 }[sizeCategory] || 15;
  if (type === "height") matureAge = Math.round(matureAge * 0.75);
  if (ageMonths <= 0) return 0.08;
  if (ageMonths >= matureAge) return 1.0;
  var t = ageMonths / matureAge;
  return Math.min(1.0, 0.08 + 0.92 * (3*t*t - 2*t*t*t));
}

// Calculate a pup's adult size potential from parents — called ONCE, returns all three values
function calcAdultSizePotential(sire, dam) {
  var std_s = getBreedHeightStd(sire.breed) || SIZE_STANDARDS[sire.size||"M"];
  var std_d = getBreedHeightStd(dam.breed)  || SIZE_STANDARDS[dam.size||"M"];
  var szStd_s = SIZE_STANDARDS[sire.size||"M"];
  var szStd_d = SIZE_STANDARDS[dam.size||"M"];
  // Clamp stored heights to sane range to guard against bad save data (>40" = impossible for dog)
  var sireW = sire.adultWeight || sire.sizeAvg || szStd_s.weightAvg;
  var damW  = dam.adultWeight  || dam.sizeAvg  || szStd_d.weightAvg;
  var sireH = (sire.adultHeight && sire.adultHeight <= 40) ? sire.adultHeight : std_s.heightAvg;
  var damH  = (dam.adultHeight  && dam.adultHeight  <= 40) ? dam.adultHeight  : std_d.heightAvg;

  var baseW = (sireW + damW) / 2;
  var baseH = (sireH + damH) / 2;
  var variance = (Math.random() - 0.5) * 0.2;
  var potentialW = Math.round(baseW * (1 + variance));
  var potentialH = Math.round(baseH * (1 + variance * 0.5));

  var sizeVariant = null;
  var roll = Math.random();
  if (roll < 0.01) {
    var direction = Math.random() < 0.5 ? 1 : -1;
    potentialW = Math.round(potentialW * (1 + direction * 0.35));
    potentialH = Math.round(potentialH * (1 + direction * 0.20));
    sizeVariant = direction > 0 ? "giant_variant" : "dwarf_variant";
  } else if (roll < 0.04) {
    var dir = Math.random() < 0.5 ? 1 : -1;
    potentialW = Math.round(potentialW * (1 + dir * 0.18));
    potentialH = Math.round(potentialH * (1 + dir * 0.10));
    sizeVariant = dir > 0 ? "large_throwback" : "small_throwback";
  }
  return { potentialW: potentialW, potentialH: potentialH, sizeVariant: sizeVariant };
}

// Get current weight/height for display based on age
// Guards against bad saved height data (>40" is impossible for a dog)
// If sizeLocked is true, skip growth math — return stored final values directly
function getCurrentSize(animal) {
  var size = animal.size || "M";
  var std = SIZE_STANDARDS[size];
  var adultW = animal.adultWeight || animal.sizeAvg || std.weightAvg;
  var adultH = (animal.adultHeight && animal.adultHeight <= 40) ? animal.adultHeight : std.heightAvg;
  if (animal.sizeLocked) {
    return { currentW: adultW, currentH: adultH, adultW: adultW, adultH: adultH, mature: true };
  }
  var age = animal.ageMonths || 0;
  var matureAgeW = ({ XS:10, S:12, M:15, L:18, XL:24 }[size] || 15);
  var wFrac = growthFraction(age, size, "weight");
  var hFrac = growthFraction(age, size, "height");
  var currentW = Math.max(1, Math.round(adultW * wFrac));
  var currentH = Math.max(1, Math.round(adultH * hFrac));
  var mature = age >= matureAgeW;
  return { currentW: currentW, currentH: currentH, adultW: adultW, adultH: adultH, mature: mature };
}

// Size variant label + health note for DNA panel
function getSizeVariantInfo(variant) {
  if (!variant) return null;
  var map = {
    giant_variant:   { label: "\u26A1 Giant Variant",      color: "#f97316", health: "Joint/cardiac stress risk at maturity" },
    dwarf_variant:   { label: "\u26A1 Dwarf Variant",       color: "#a78bfa", health: "Potential cardiac and joint issues" },
    large_throwback: { label: "\u26A1 Large Throwback",     color: "#e8a020", health: "Monitor joints as adult" },
    small_throwback: { label: "\u26A1 Small Throwback",     color: "#c4956a", health: "Monitor heart as adult" }
  };
  return map[variant] || null;
}

// Per-breed height overrides (shoulder height inches) for breeds that fall outside
// their size category average. All others use SIZE_STANDARDS defaults.
// Sources: AKC, FCI, UKC breed standards.
var BREED_HEIGHT_STANDARDS = {
  // True giants — tall & heavy
  "Bully Kutta":              { heightAvg: 32, heightRange: [30, 36] },
  "Central Asian Shepherd":   { heightAvg: 30, heightRange: [27, 34] },
  "Kangal":                   { heightAvg: 30, heightRange: [28, 33] },
  "Kangal Shepherd Dog":      { heightAvg: 30, heightRange: [28, 33] },
  "Anatolian Shepherd":       { heightAvg: 29, heightRange: [27, 32] },
  "Caucasian Shepherd":       { heightAvg: 29, heightRange: [27, 34] },
  "Tibetan Mastiff":          { heightAvg: 27, heightRange: [24, 30] },
  "Great Dane":               { heightAvg: 32, heightRange: [30, 36] }, // tallest breed
  "Irish Wolfhound":          { heightAvg: 33, heightRange: [30, 36] }, // tallest by AKC
  "Saint Bernard":            { heightAvg: 27, heightRange: [24, 30] },
  "Leonberger":               { heightAvg: 28, heightRange: [25, 31] },
  "Boerboel":                 { heightAvg: 25, heightRange: [22, 28] }, // stocky, not as tall
  "Neapolitan Mastiff":       { heightAvg: 26, heightRange: [24, 31] },
  "English Mastiff":          { heightAvg: 30, heightRange: [27, 36] },
  "Mastiff":                  { heightAvg: 30, heightRange: [27, 36] },
  "Dogue de Bordeaux":        { heightAvg: 25, heightRange: [23, 27] },
  "Great Pyrenees":           { heightAvg: 28, heightRange: [25, 32] },
  // Large but not extreme
  "Dogo Argentino":           { heightAvg: 25, heightRange: [23, 27] },
  "Rottweiler":               { heightAvg: 24, heightRange: [22, 27] },
  "German Shepherd":          { heightAvg: 24, heightRange: [22, 26] },
  "Doberman Pinscher":        { heightAvg: 27, heightRange: [24, 28] },
  "Dobermann":                { heightAvg: 27, heightRange: [24, 28] },
};

// Get the correct height standard for a breed by name
function getBreedHeightStd(breedName) {
  if (!breedName) return null;
  return BREED_HEIGHT_STANDARDS[breedName] || null;
}
// ── END SIZE ENGINE ───────────────────────────────────────────

// ── LOCI DEFINITIONS ─────────────────────────────────────────
var idCtr = 1;
function mkId() {
  return "AN-".concat(String(idCtr++).padStart(4, "0"));
}
function makeAnimal(breed, name, sex) {
  var genome = generateGenome(breed);
  var _calcHealthScore = calcHealthScore(genome),
    hs = _calcHealthScore.score,
    issues = _calcHealthScore.issues;
  var lifespan = getLifespan(breed); // breed-specific, falls back to size group
  return {
    id: mkId(),
    name: name || "".concat(breed.name, " ").concat(sex === "M" ? "♂" : "♀"),
    sex: sex,
    breed: breed.name,
    group: breed.group || "",
    size: breed.size || "M",
    sizeAvg: breed.sizeAvg || 40,
    sizeRange: breed.sizeRange || [30, 55],
    isMixed: false,
    genome: genome,
    coatColor: interpretColor(genome),
    healthScore: hs,
    healthIssues: issues,
    perfScore: calcPerfScore(genome),
    coi: 0,
    vinStr: buildVIN(genome),
    mutations: [],
    generation: 1,
    litterSize: breed.litterSize || "M",
    ageMonths: 0,
    lifespan: lifespan,
    born: new Date().toLocaleDateString(),
    traits: breed.traits || null,
    aptitudes: breed.aptitudes || [],
    adultWeight: breed.sizeAvg || SIZE_STANDARDS[breed.size||"M"].weightAvg,
    adultHeight: (getBreedHeightStd(breed.name) || SIZE_STANDARDS[breed.size||"M"]).heightAvg,
    sizeVariant: null,
    photoUrl: null,
    photoLoading: false
  };
}
function breedPair(sire, dam) {
  // Litter size based on breed S/M/L marker
  var LITTER_RANGES = {
    S: [1, 4],
    M: [3, 7],
    L: [6, 12]
  };
  var sireRange = LITTER_RANGES[sire.litterSize || "M"];
  var damRange = LITTER_RANGES[dam.litterSize || "M"];
  var minN = Math.round((sireRange[0] + damRange[0]) / 2);
  var maxN = Math.round((sireRange[1] + damRange[1]) / 2);
  var n = minN + Math.floor(Math.random() * (maxN - minN + 1));
  return Array.from({
    length: n
  }, function (_, i) {
    var sex = Math.random() < 0.5 ? "M" : "F";
    var g = breedGenomes(sire.genome, dam.genome);
    var lw = checkLethals(g);
    var _calcHealthScore2 = calcHealthScore(g),
      hs = _calcHealthScore2.score,
      issues = _calcHealthScore2.issues;
    var _szPotential = calcAdultSizePotential(sire, dam);
    return {
      id: mkId(),
      name: "Pup ".concat(i + 1),
      sex: sex,
      breed: sire.breed === dam.breed ? sire.breed : "".concat(sire.breed, " \xD7 ").concat(dam.breed),
      sireBreed: sire.breed,
      damBreed: dam.breed,
      group: sire.group || "",
      size: sire.size || "M",
      sizeAvg: Math.round((sire.sizeAvg + dam.sizeAvg) / 2),
      isMixed: sire.breed !== dam.breed,
      genome: g,
      coatColor: interpretColor(g),
      healthScore: hs,
      healthIssues: issues,
      perfScore: calcPerfScore(g),
      coi: 0,
      vinStr: buildVIN(g),
      mutations: g.mutations.map(function (m) {
        var _COAT_LOCI$m$loc, _HEALTH_LOCI$m$loc;
        return _objectSpread(_objectSpread({}, m), {}, {
          desc: ((_COAT_LOCI$m$loc = COAT_LOCI[m.loc]) === null || _COAT_LOCI$m$loc === void 0 ? void 0 : _COAT_LOCI$m$loc.name) || ((_HEALTH_LOCI$m$loc = HEALTH_LOCI[m.loc]) === null || _HEALTH_LOCI$m$loc === void 0 ? void 0 : _HEALTH_LOCI$m$loc.name) || m.loc
        });
      }),
      lethalWarnings: lw,
      generation: Math.max(sire.generation, dam.generation) + 1,
      ageMonths: 0,
      lifespan: (sire.lifespan && dam.lifespan
        ? Math.round((sire.lifespan + dam.lifespan) / 2)
        : (sire.lifespan || dam.lifespan || 144))
        + (mixedLifespanBonus(sire, dam) * 12),
      born: new Date().toLocaleDateString(),
      adultWeight: _szPotential.potentialW,
      adultHeight: _szPotential.potentialH,
      sizeVariant: _szPotential.sizeVariant
    };
  });
}

// ── BREED GENETIC PROFILE ASSIGNMENT ─────────────────────────
// Assigns realistic coat/health freq profiles based on breed name & group
function assignGeneticProfile(breed) {
  if (breed.coatFreqs) return breed; // already has profiles, skip

  var name = (breed.name || "").toLowerCase();
  var group = (breed.group || "").toLowerCase();

  // ── COAT FREQ DEFAULTS BY GROUP ──
  var coat = {
    B: [["B", 0.80], ["b", 0.20]],
    E: [["E", 0.85], ["e", 0.15]],
    A: [["Ay", 0.30], ["aw", 0.20], ["at", 0.30], ["a", 0.20]],
    K: [["KB", 0.10], ["kbr", 0.05], ["ky", 0.85]],
    D: [["D", 0.90], ["d", 0.10]],
    M: [["M", 0.00], ["m", 1.00]],
    H: [["H", 0.00], ["h", 1.00]],
    S: [["S", 0.60], ["sp", 0.30], ["sw", 0.10]],
    T: [["TR", 0.00], ["T", 0.00], ["t", 1.00]],
    I: [["I", 0.70], ["i", 0.30]],
    As: [["N", 0.50], ["n", 0.50]],
    L: [["L", 0.90], ["l", 0.10]],
    W: [["W", 0.00], ["w", 1.00]],
    Cu: [["Cu", 0.00], ["cu", 1.00]]
  };

  // ── HEALTH FREQ DEFAULTS BY GROUP ──
  var health = {
    HipQ: [["G", 0.85], ["g", 0.15]],
    EyeQ: [["G", 0.88], ["g", 0.12]],
    HeartQ: [["G", 0.92], ["g", 0.08]],
    JointQ: [["G", 0.85], ["g", 0.15]],
    MDR1: [["N", 0.95], ["m", 0.05]],
    PRA: [["N", 0.90], ["n", 0.10]],
    DM: [["N", 0.90], ["n", 0.10]],
    vWD: [["N", 0.95], ["n", 0.05]]
  };

  // ── PERF DEFAULTS BY GROUP ──
  var perf = {
    DRIVE: 3,
    INTEL: 3,
    NERVE: 3,
    SPEED: 3,
    MUSCLE: 3
  };

  // ── GROUP-LEVEL OVERRIDES ──
  if (group.includes("herding")) {
    coat.A = [["Ay", 0.35], ["aw", 0.15], ["at", 0.40], ["a", 0.10]];
    perf = {
      DRIVE: 5,
      INTEL: 5,
      NERVE: 3,
      SPEED: 4,
      MUSCLE: 2
    };
    health.MDR1 = [["N", 0.70], ["m", 0.30]]; // herding breeds have MDR1 issues
  }
  if (group.includes("working")) {
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 4,
      SPEED: 3,
      MUSCLE: 5
    };
    health.HipQ = [["G", 0.80], ["g", 0.20]];
  }
  if (group.includes("hound")) {
    coat.A = [["Ay", 0.40], ["aw", 0.10], ["at", 0.30], ["a", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 2,
      NERVE: 2,
      SPEED: 5,
      MUSCLE: 2
    };
    health.HipQ = [["G", 0.90], ["g", 0.10]];
  }
  if (group.includes("sporting")) {
    coat.B = [["B", 0.70], ["b", 0.30]];
    coat.E = [["E", 0.75], ["e", 0.25]]; // goldens/yellows common
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 3,
      SPEED: 4,
      MUSCLE: 3
    };
    health.HipQ = [["G", 0.82], ["g", 0.18]];
    health.EyeQ = [["G", 0.80], ["g", 0.20]];
  }
  if (group.includes("terrier")) {
    coat.K = [["KB", 0.20], ["kbr", 0.20], ["ky", 0.60]];
    perf = {
      DRIVE: 5,
      INTEL: 3,
      NERVE: 5,
      SPEED: 3,
      MUSCLE: 3
    };
    health.JointQ = [["G", 0.90], ["g", 0.10]];
  }
  if (group.includes("toy")) {
    perf = {
      DRIVE: 2,
      INTEL: 3,
      NERVE: 3,
      SPEED: 2,
      MUSCLE: 1
    };
    health.HipQ = [["G", 0.75], ["g", 0.25]]; // toy breeds often have luxating patellas
    health.HeartQ = [["G", 0.80], ["g", 0.20]];
  }
  if (group.includes("non-sporting") || group.includes("non sporting")) {
    perf = {
      DRIVE: 2,
      INTEL: 3,
      NERVE: 2,
      SPEED: 2,
      MUSCLE: 2
    };
  }

  // ── GROUP-LEVEL COAT TYPE DEFAULTS ──
  // Herding: mostly medium/long, some short
  if (group.includes("herding")) {
    coat.L = [["L", 0.50], ["l", 0.50]]; // many herding breeds have long coats
    coat.As = [["N", 0.60], ["n", 0.40]]; // saddle tan common (GSD, Corgi)
  }
  // Sporting: mostly short-medium, some long (setters/spaniels)
  if (group.includes("sporting")) {
    coat.L = [["L", 0.60], ["l", 0.40]];
    coat.T = [["TR", 0.10], ["T", 0.10], ["t", 0.80]]; // spaniels/pointers often ticked/roan
  }
  // Hound: mostly short, some long (Afghan, Bloodhound)
  if (group.includes("hound")) {
    coat.L = [["L", 0.80], ["l", 0.20]];
    coat.T = [["TR", 0.05], ["T", 0.15], ["t", 0.80]]; // coonhounds, beagles often ticked
  }
  // Working: mostly short-medium, dense double coats
  if (group.includes("working")) {
    coat.L = [["L", 0.65], ["l", 0.35]];
  }
  // Terrier: wire coat very common
  if (group.includes("terrier")) {
    coat.W = [["W", 0.55], ["w", 0.45]]; // many terriers are wire
    coat.L = [["L", 0.85], ["l", 0.15]]; // terriers mostly short
  }
  // Toy: varied, many long coats
  if (group.includes("toy")) {
    coat.L = [["L", 0.40], ["l", 0.60]]; // toys often long-coated
  }
  // Non-sporting: very diverse
  if (group.includes("non-sporting") || group.includes("non sporting")) {
    coat.L = [["L", 0.55], ["l", 0.45]];
  }

  // ── BREED-SPECIFIC OVERRIDES (most common/notable breeds) ──

  // BLACK breeds
  if (name.includes("black lab") || name === "labrador retriever") {
    coat.B = [["B", 0.65], ["b", 0.35]];
    coat.E = [["E", 0.70], ["e", 0.30]];
    coat.K = [["KB", 0], ["kbr", 0], ["ky", 1]];
    coat.A = [["Ay", 0], ["aw", 0], ["at", 0], ["a", 1]];
    health.HipQ = [["G", 0.78], ["g", 0.22]];
    health.EyeQ = [["G", 0.82], ["g", 0.18]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 2,
      SPEED: 4,
      MUSCLE: 4
    };
  }
  if (name.includes("labrador")) {
    coat.B = [["B", 0.65], ["b", 0.35]];
    coat.E = [["E", 0.70], ["e", 0.30]];
    coat.K = [["KB", 0], ["kbr", 0], ["ky", 1]];
    health.HipQ = [["G", 0.78], ["g", 0.22]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 2,
      SPEED: 4,
      MUSCLE: 4
    };
  }
  if (name.includes("golden retriever")) {
    coat.B = [["B", 0.90], ["b", 0.10]];
    coat.E = [["E", 0.40], ["e", 0.60]]; // most are ee (yellow)
    coat.K = [["KB", 0], ["kbr", 0], ["ky", 1]];
    health.HipQ = [["G", 0.75], ["g", 0.25]];
    health.HeartQ = [["G", 0.70], ["g", 0.30]];
    health.EyeQ = [["G", 0.75], ["g", 0.25]];
    perf = {
      DRIVE: 3,
      INTEL: 5,
      NERVE: 1,
      SPEED: 3,
      MUSCLE: 3
    };
  }
  if (name.includes("poodle")) {
    coat.B = [["B", 0.60], ["b", 0.40]];
    coat.D = [["D", 0.70], ["d", 0.30]];
    health.HipQ = [["G", 0.88], ["g", 0.12]];
    health.EyeQ = [["G", 0.80], ["g", 0.20]];
    perf = {
      DRIVE: 3,
      INTEL: 5,
      NERVE: 2,
      SPEED: 3,
      MUSCLE: 2
    };
  }
  if (name.includes("beagle")) {
    coat.A = [["Ay", 0.60], ["aw", 0], ["at", 0.30], ["a", 0.10]];
    coat.S = [["S", 0.20], ["sp", 0.70], ["sw", 0.10]];
    health.HipQ = [["G", 0.92], ["g", 0.08]];
    perf = {
      DRIVE: 5,
      INTEL: 2,
      NERVE: 2,
      SPEED: 3,
      MUSCLE: 2
    };
  }
  if (name.includes("dachshund")) {
    coat.B = [["B", 0.65], ["b", 0.35]];
    coat.A = [["Ay", 0.40], ["aw", 0], ["at", 0.40], ["a", 0.20]];
    coat.M = [["M", 0.15], ["m", 0.85]];
    health.JointQ = [["G", 0.60], ["g", 0.40]]; // IVDD risk
    perf = {
      DRIVE: 4,
      INTEL: 3,
      NERVE: 3,
      SPEED: 2,
      MUSCLE: 1
    };
  }
  if (name.includes("boxer")) {
    coat.A = [["Ay", 0.80], ["aw", 0], ["at", 0.10], ["a", 0.10]];
    coat.K = [["KB", 0.40], ["kbr", 0.40], ["ky", 0.20]];
    health.HeartQ = [["G", 0.70], ["g", 0.30]];
    health.HipQ = [["G", 0.80], ["g", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 3,
      NERVE: 4,
      SPEED: 3,
      MUSCLE: 5
    };
  }
  if (name.includes("rottweiler")) {
    coat.K = [["KB", 0.90], ["kbr", 0], ["ky", 0.10]];
    coat.A = [["Ay", 0], ["aw", 0], ["at", 0.95], ["a", 0.05]];
    health.HipQ = [["G", 0.75], ["g", 0.25]];
    health.HeartQ = [["G", 0.80], ["g", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 4,
      SPEED: 3,
      MUSCLE: 5
    };
  }
  if (name.includes("great dane")) {
    coat.M = [["M", 0.20], ["m", 0.80]];
    coat.S = [["S", 0.30], ["sp", 0.50], ["sw", 0.20]];
    health.HipQ = [["G", 0.70], ["g", 0.30]];
    health.HeartQ = [["G", 0.65], ["g", 0.35]];
    perf = {
      DRIVE: 3,
      INTEL: 3,
      NERVE: 2,
      SPEED: 3,
      MUSCLE: 5
    };
  }
  if (name.includes("chihuahua")) {
    coat.M = [["M", 0.20], ["m", 0.80]];
    health.HeartQ = [["G", 0.75], ["g", 0.25]];
    health.JointQ = [["G", 0.70], ["g", 0.30]];
    perf = {
      DRIVE: 3,
      INTEL: 3,
      NERVE: 4,
      SPEED: 2,
      MUSCLE: 1
    };
  }
  if (name.includes("french bulldog") || name.includes("frenchie")) {
    health.JointQ = [["G", 0.60], ["g", 0.40]];
    health.HeartQ = [["G", 0.78], ["g", 0.22]];
    coat.A = [["Ay", 0.50], ["aw", 0], ["at", 0.20], ["a", 0.30]];
    coat.K = [["KB", 0.30], ["kbr", 0.30], ["ky", 0.40]];
    perf = {
      DRIVE: 2,
      INTEL: 3,
      NERVE: 2,
      SPEED: 1,
      MUSCLE: 2
    };
  }
  if (name.includes("bulldog") || name.includes("english bulldog")) {
    health.JointQ = [["G", 0.55], ["g", 0.45]];
    health.HeartQ = [["G", 0.72], ["g", 0.28]];
    perf = {
      DRIVE: 2,
      INTEL: 2,
      NERVE: 1,
      SPEED: 1,
      MUSCLE: 3
    };
  }
  if (name.includes("corgi")) {
    coat.A = [["Ay", 0.60], ["aw", 0.10], ["at", 0.20], ["a", 0.10]];
    coat.M = [["M", 0.10], ["m", 0.90]];
    health.HipQ = [["G", 0.82], ["g", 0.18]];
    health.EyeQ = [["G", 0.80], ["g", 0.20]];
    health.MDR1 = [["N", 0.80], ["m", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 3,
      SPEED: 3,
      MUSCLE: 2
    };
  }
  if (name.includes("collie") && !name.includes("border")) {
    coat.A = [["Ay", 0.60], ["aw", 0.10], ["at", 0.20], ["a", 0.10]];
    coat.M = [["M", 0.20], ["m", 0.80]];
    health.MDR1 = [["N", 0.65], ["m", 0.35]];
    health.EyeQ = [["G", 0.75], ["g", 0.25]];
    perf = {
      DRIVE: 3,
      INTEL: 5,
      NERVE: 2,
      SPEED: 3,
      MUSCLE: 2
    };
  }
  if (name.includes("shih tzu")) {
    health.EyeQ = [["G", 0.75], ["g", 0.25]];
    health.JointQ = [["G", 0.78], ["g", 0.22]];
    perf = {
      DRIVE: 1,
      INTEL: 2,
      NERVE: 2,
      SPEED: 1,
      MUSCLE: 1
    };
  }
  if (name.includes("husky") || name.includes("malamute")) {
    coat.A = [["Ay", 0.15], ["aw", 0.55], ["at", 0.20], ["a", 0.10]];
    coat.K = [["KB", 0], ["kbr", 0], ["ky", 1]];
    health.EyeQ = [["G", 0.75], ["g", 0.25]];
    perf = {
      DRIVE: 4,
      INTEL: 3,
      NERVE: 3,
      SPEED: 5,
      MUSCLE: 4
    };
  }
  if (name.includes("dalmatian")) {
    coat.B = [["B", 0.60], ["b", 0.40]];
    coat.S = [["S", 0], ["sp", 0], ["sw", 1]]; // all dalmatians are extreme white pattern
    coat.E = [["E", 1], ["e", 0]];
    health.EyeQ = [["G", 0.85], ["g", 0.15]];
    health.HeartQ = [["G", 0.88], ["g", 0.12]];
    perf = {
      DRIVE: 3,
      INTEL: 3,
      NERVE: 3,
      SPEED: 4,
      MUSCLE: 3
    };
  }
  if (name.includes("irish setter") || name.includes("gordon setter")) {
    coat.E = [["E", 0.30], ["e", 0.70]]; // setters are often red/ee
    coat.B = [["B", 0.85], ["b", 0.15]];
    health.HipQ = [["G", 0.80], ["g", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 3,
      NERVE: 2,
      SPEED: 5,
      MUSCLE: 3
    };
  }
  if (name.includes("weimaraner")) {
    coat.B = [["B", 0.40], ["b", 0.60]];
    coat.D = [["D", 0.30], ["d", 0.70]]; // blue/grey from dilution
    health.HipQ = [["G", 0.80], ["g", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 3,
      SPEED: 4,
      MUSCLE: 4
    };
  }
  if (name.includes("merle") || name.includes("catahoula")) {
    coat.M = [["M", 0.50], ["m", 0.50]];
  }
  if (name.includes("vizsla") || name.includes("rhodesian")) {
    coat.E = [["E", 0.50], ["e", 0.50]];
    coat.B = [["B", 0.80], ["b", 0.20]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 3,
      SPEED: 5,
      MUSCLE: 4
    };
  }
  if (name.includes("irish wolfhound") || name.includes("great pyrenees") || name.includes("saint bernard")) {
    health.HipQ = [["G", 0.70], ["g", 0.30]];
    health.HeartQ = [["G", 0.72], ["g", 0.28]];
    perf = {
      DRIVE: 2,
      INTEL: 3,
      NERVE: 2,
      SPEED: 2,
      MUSCLE: 5
    };
  }
  if (name.includes("cocker spaniel")) {
    coat.B = [["B", 0.65], ["b", 0.35]];
    coat.E = [["E", 0.60], ["e", 0.40]];
    health.EyeQ = [["G", 0.72], ["g", 0.28]];
    health.HeartQ = [["G", 0.75], ["g", 0.25]];
    perf = {
      DRIVE: 3,
      INTEL: 3,
      NERVE: 2,
      SPEED: 3,
      MUSCLE: 2
    };
  }
  if (name.includes("springer spaniel")) {
    coat.B = [["B", 0.70], ["b", 0.30]];
    coat.S = [["S", 0.20], ["sp", 0.70], ["sw", 0.10]];
    health.HipQ = [["G", 0.82], ["g", 0.18]];
    perf = {
      DRIVE: 4,
      INTEL: 4,
      NERVE: 2,
      SPEED: 4,
      MUSCLE: 3
    };
  }

  // ── BREED-SPECIFIC COAT TYPE OVERRIDES ──
  // SHORT/SMOOTH breeds (always L/L, no furnishings, no curl)
  var shortSmooth = ["labrador retriever","beagle","greyhound","whippet","basset hound",
    "bloodhound","boxer","dalmatian","great dane","rottweiler","doberman pinscher",
    "weimaraner","vizsla","rhodesian ridgeback","basenji","pharaoh hound","ibizan hound",
    "american staffordshire terrier","bull terrier","staffordshire bull terrier",
    "miniature pinscher","italian greyhound","chihuahua","boston terrier","french bulldog",
    "bulldog","pug","cane corso","mastiff","neapolitan mastiff","dogue de bordeaux",
    "boerboel","dogo argentino","great pyrenees","anatolian shepherd","kangal shepherd",
    "bavarian mountain hound","plott hound","redbone coonhound","treeing walker coonhound",
    "american foxhound","english foxhound","harrier","sloughi","azawakh","cirneco dell etna",
    "german shorthaired pointer","pointer","german pinscher","black russian terrier",
    "rat terrier","american hairless terrier","toy manchester terrier","toy fox terrier"];
  if (shortSmooth.some(function(b){ return name.includes(b); })) {
    coat.L = [["L", 1.00], ["l", 0.00]];
    coat.W = [["W", 0.00], ["w", 1.00]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }

  // WIRE coat breeds
  var wireBreeds = ["airedale terrier","welsh terrier","lakeland terrier","irish terrier",
    "fox terrier","wire fox","norfolk terrier","norwich terrier","border terrier",
    "cairn terrier","scottish terrier","west highland","sealyham terrier","dandie dinmont",
    "cesky terrier","german wirehaired pointer","wirehaired pointing griffon",
    "spinone italiano","lagotto romagnolo","portuguese water dog wire",
    "belgian laekenois","berger picard","dutch shepherd wire","affenpinscher",
    "brussels griffon","miniature schnauzer","standard schnauzer","giant schnauzer",
    "irish wolfhound","otterhound","wirehaired vizsla","pudelpointer"];
  if (wireBreeds.some(function(b){ return name.includes(b); })) {
    coat.W = [["W", 0.95], ["w", 0.05]];
    coat.L = [["L", 0.90], ["l", 0.10]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }

  // LONG/SMOOTH breeds (L/l common, no furnishings, no curl)
  var longSmooth = ["golden retriever","irish setter","gordon setter","english setter",
    "flat-coated retriever","nova scotia duck tolling retriever","saluki","afghan hound",
    "borzoi","bernese mountain dog","great pyrenees","saint bernard","newfoundland",
    "leonberger","greater swiss mountain dog","entlebucher","norwegian elkhound",
    "samoyed","chow chow","alaskan malamute","siberian husky","akita",
    "shiba inu","finnish spitz","keeshond","american eskimo","german shepherd",
    "collie","rough collie","shetland sheepdog","old english sheepdog","bearded collie",
    "briard","bouvier des flandres","australian shepherd","border collie","pembroke welsh corgi",
    "cardigan welsh corgi","belgian tervuren","belgian sheepdog","irish water spaniel smooth",
    "cocker spaniel","english cocker spaniel","springer spaniel","field spaniel",
    "sussex spaniel","clumber spaniel","cavalier king charles","king charles spaniel",
    "pekingese","lhasa apso","shih tzu","maltese","yorkshire terrier","silky terrier",
    "tibetan spaniel","tibetan terrier","havanese","papillon","japanese chin",
    "chinese crested powder","dachshund long","long haired","longhaired",
    "australian silky","skye terrier","bedlington terrier"];
  if (longSmooth.some(function(b){ return name.includes(b); })) {
    coat.L = [["L", 0.20], ["l", 0.80]];
    coat.W = [["W", 0.00], ["w", 1.00]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }

  // LONG FURNISHED breeds (furnishings + long)
  var longFurnished = ["havanese","maltese","shih tzu","lhasa apso","tibetan terrier",
    "coton de tulear","bolognese","lowchen","yorkshire terrier","silky terrier",
    "bearded collie","bergamasco","briard","komondor","puli","pumi",
    "portuguese water dog","spanish water dog","lagotto","barbet",
    "dutch shepherd long","belgian tervuren","belgian laekenois"];
  if (longFurnished.some(function(b){ return name.includes(b); })) {
    coat.L = [["L", 0.10], ["l", 0.90]];
    coat.W = [["W", 0.85], ["w", 0.15]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }

  // CURLY breeds (long + curl, with or without furnishings)
  var curlyBreeds = ["poodle","bichon frise","irish water spaniel","curly-coated retriever",
    "portuguese water dog","lagotto romagnolo","barbet","spanish water dog",
    "american water spaniel","chesapeake bay retriever","bedlington terrier",
    "komondor curly","puli","pumi"];
  if (curlyBreeds.some(function(b){ return name.includes(b); })) {
    coat.L = [["L", 0.05], ["l", 0.95]];
    coat.Cu = [["Cu", 0.90], ["cu", 0.10]];
    // Poodle and bichon get furnishings too
    if (name.includes("poodle") || name.includes("bichon") || name.includes("lagotto") || name.includes("barbet")) {
      coat.W = [["W", 0.90], ["w", 0.10]];
    }
  }

  // Chesapeake Bay Retriever — short curly (curl but short)
  if (name.includes("chesapeake")) {
    coat.L = [["L", 0.90], ["l", 0.10]];
    coat.Cu = [["Cu", 0.80], ["cu", 0.20]];
    coat.W = [["W", 0.00], ["w", 1.00]];
  }

  // BREEDS WITH BOTH COAT LENGTHS (short and long both occur)
  if (name.includes("border collie")) {
    coat.L = [["L", 0.50], ["l", 0.50]];
    coat.W = [["W", 0.00], ["w", 1.00]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }
  if (name.includes("dachshund")) {
    // smooth, long, wire all exist
    coat.L = [["L", 0.45], ["l", 0.55]];
    coat.W = [["W", 0.25], ["w", 0.75]];
  }
  if (name === "german shepherd dog" || name === "german shepherd") {
    coat.L = [["L", 0.70], ["l", 0.30]]; // long coat GSD is ~10-15% recessive
    coat.As = [["N", 0.75], ["n", 0.25]]; // saddle tan very common
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("chihuahua")) {
    coat.L = [["L", 0.55], ["l", 0.45]]; // long coat chihuahua recessive
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("anatolian shepherd")) {
    coat.L = [["L", 0.78], ["l", 0.22]]; // rough coat (long) is in breed standard ~5%, recessive carriers more common
    coat.W = [["W", 0.00], ["w", 1.00]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }
  if (name.includes("kangal")) {
    coat.L = [["L", 0.90], ["l", 0.10]];
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("saint bernard")) {
    coat.L = [["L", 0.35], ["l", 0.65]]; // long and short both common
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("akita")) {
    coat.L = [["L", 0.80], ["l", 0.20]]; // long coat (Moku) exists but rare
  }
  if (name.includes("australian shepherd")) {
    coat.L = [["L", 0.30], ["l", 0.70]];
    coat.M = [["M", 0.30], ["m", 0.70]]; // merle very common
    coat.T = [["TR", 0.05], ["T", 0.20], ["t", 0.75]]; // ticking/roaning present
  }
  if (name.includes("australian cattle dog")) {
    coat.L = [["L", 1.00], ["l", 0.00]]; // always short
    coat.T = [["TR", 0.70], ["T", 0.20], ["t", 0.10]]; // heavy roan/ticking is the breed
    coat.S = [["S", 0.20], ["sp", 0.60], ["sw", 0.20]]; // lots of white for roan to work on
  }
  if (name.includes("bluetick coonhound")) {
    coat.L = [["L", 1.00], ["l", 0.00]];
    coat.T = [["TR", 0.80], ["T", 0.15], ["t", 0.05]]; // heavy blue roan = ticking on black
    coat.S = [["S", 0.10], ["sp", 0.80], ["sw", 0.10]];
  }
  if (name.includes("english setter")) {
    coat.L = [["L", 0.20], ["l", 0.80]];
    coat.T = [["TR", 0.60], ["T", 0.30], ["t", 0.10]]; // belton pattern = roan
    coat.S = [["S", 0.05], ["sp", 0.75], ["sw", 0.20]];
  }
  if (name.includes("english cocker spaniel") || name.includes("cocker spaniel")) {
    coat.L = [["L", 0.15], ["l", 0.85]];
    coat.T = [["TR", 0.30], ["T", 0.20], ["t", 0.50]]; // roan common in cockers
  }
  if (name.includes("german shorthaired pointer")) {
    coat.L = [["L", 1.00], ["l", 0.00]];
    coat.T = [["TR", 0.20], ["T", 0.40], ["t", 0.40]]; // liver roan/ticked common
    coat.S = [["S", 0.10], ["sp", 0.70], ["sw", 0.20]];
  }
  if (name.includes("dalmatian")) {
    coat.L = [["L", 1.00], ["l", 0.00]];
    coat.T = [["TR", 0.95], ["T", 0.05], ["t", 0.00]]; // dalmatian spots are extreme roan/ticking
  }
  if (name.includes("great dane")) {
    coat.H = [["H", 0.15], ["h", 0.85]]; // harlequin exists in breed
    coat.M = [["M", 0.25], ["m", 0.75]]; // merle common in harlequin lines
    coat.L = [["L", 1.00], ["l", 0.00]];
  }
  if (name.includes("pomeranian")) {
    coat.L = [["L", 0.05], ["l", 0.95]]; // always long double coat
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("samoyed")) {
    coat.L = [["L", 0.05], ["l", 0.95]];
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("siberian husky") || name.includes("alaskan malamute")) {
    coat.L = [["L", 0.65], ["l", 0.35]]; // medium length, some long
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("chow chow")) {
    coat.L = [["L", 0.20], ["l", 0.80]]; // both smooth and rough coats
    coat.W = [["W", 0.00], ["w", 1.00]];
  }
  if (name.includes("komondor") || name.includes("puli")) {
    coat.L = [["L", 0.05], ["l", 0.95]];
    coat.W = [["W", 0.80], ["w", 0.20]];
    coat.Cu = [["Cu", 0.80], ["cu", 0.20]]; // corded = long + wire + curl
  }
  if (name.includes("bedlington")) {
    coat.L = [["L", 0.10], ["l", 0.90]];
    coat.Cu = [["Cu", 0.90], ["cu", 0.10]];
    coat.W = [["W", 0.85], ["w", 0.15]];
  }
  if (name.includes("kerry blue terrier")) {
    coat.L = [["L", 0.15], ["l", 0.85]];
    coat.Cu = [["Cu", 0.90], ["cu", 0.10]];
    coat.W = [["W", 0.80], ["w", 0.20]];
  }
  if (name.includes("soft coated wheaten")) {
    coat.L = [["L", 0.10], ["l", 0.90]];
    coat.Cu = [["Cu", 0.40], ["cu", 0.60]]; // wavy to curly
    coat.W = [["W", 0.70], ["w", 0.30]];
  }
  if (name.includes("xoloitzcuintli") || name.includes("chinese crested") || name.includes("peruvian inca orchid")) {
    coat.L = [["L", 1.00], ["l", 0.00]]; // hairless dominant — powder puff is ll
    // Note: hairlessness modeled as extreme sparse coat via L homozygous ancestral
  }
  if (name.includes("afghan hound")) {
    coat.L = [["L", 0.05], ["l", 0.95]];
    coat.W = [["W", 0.00], ["w", 1.00]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }
  if (name.includes("irish wolfhound") || name.includes("scottish deerhound")) {
    coat.W = [["W", 0.80], ["w", 0.20]];
    coat.L = [["L", 0.60], ["l", 0.40]];
  }
  if (name.includes("airedale") || name.includes("welsh terrier") || name.includes("lakeland")) {
    coat.W = [["W", 1.00], ["w", 0.00]];
    coat.L = [["L", 0.95], ["l", 0.05]];
    coat.Cu = [["Cu", 0.00], ["cu", 1.00]];
  }
  if (name.includes("miniature schnauzer") || name.includes("standard schnauzer") || name.includes("giant schnauzer")) {
    coat.W = [["W", 1.00], ["w", 0.00]];
    coat.L = [["L", 0.90], ["l", 0.10]];
    coat.As = [["N", 0.80], ["n", 0.20]]; // saddle tan pattern common in schnauzers
  }
  // Saddle tan breeds specifically
  if (name.includes("beagle") || name.includes("basset hound") || name.includes("pembroke welsh corgi")) {
    coat.As = [["N", 0.85], ["n", 0.15]]; // saddle tan very common
  }
  // Ticking breeds
  if (name.includes("brittany") || name.includes("bracco italiano") || name.includes("epagneul")) {
    coat.T = [["TR", 0.10], ["T", 0.50], ["t", 0.40]];
    coat.L = [["L", 0.20], ["l", 0.80]];
  }

  return _objectSpread2(_objectSpread2({}, breed), {}, {
    coatFreqs: coat,
    healthFreqs: health,
    perfAvg: perf
  });
}
var BREED_LIFESPANS = {
  "Australian Cattle Dog": 14,
  "Australian Shepherd": 14,
  "Australian Stumpy Tail Cattle Dog": 14,
  "Bearded Collie": 13,
  "Belgian Malinois": 13,
  "Belgian Sheepdog": 13,
  "Belgian Tervuren": 13,
  "Bergamasco Sheepdog": 14,
  "Berger Picard": 12,
  "Border Collie": 14,
  "Bouvier des Flandres": 11,
  "Briard": 11,
  "Canaan Dog": 14,
  "Cardigan Welsh Corgi": 14,
  "Collie": 13,
  "Entlebucher Mountain Dog": 12,
  "Finnish Lapphund": 13,
  "German Shepherd Dog": 11,
  "Icelandic Sheepdog": 13,
  "Miniature American Shepherd": 12,
  "Norwegian Buhund": 14,
  "Old English Sheepdog": 11,
  "Pembroke Welsh Corgi": 12,
  "Polish Lowland Sheepdog": 12,
  "Puli": 12,
  "Pumi": 12,
  "Pyrenean Shepherd": 16,
  "Shetland Sheepdog": 13,
  "Spanish Water Dog": 13,
  "Swedish Vallhund": 14,
  "Akita": 12,
  "Alaskan Malamute": 12,
  "Anatolian Shepherd Dog": 12,
  "Bernese Mountain Dog": 8,
  "Black Russian Terrier": 11,
  "Boerboel": 10,
  "Boxer": 11,
  "Bullmastiff": 8,
  "Cane Corso": 10,
  "Chinook": 14,
  "Doberman Pinscher": 12,
  "Dogo Argentino": 12,
  "Dogue de Bordeaux": 6,
  "German Pinscher": 13,
  "Giant Schnauzer": 14,
  "Great Dane": 8,
  "Great Pyrenees": 11,
  "Greater Swiss Mountain Dog": 10,
  "Komondor": 11,
  "Kuvasz": 11,
  "Leonberger": 8,
  "Mastiff": 8,
  "Neapolitan Mastiff": 8,
  "Newfoundland": 9,
  "Portuguese Water Dog": 12,
  "Rottweiler": 10,
  "Saint Bernard": 9,
  "Samoyed": 13,
  "Siberian Husky": 13,
  "Standard Schnauzer": 14,
  "Tibetan Mastiff": 11,
  "Kangal Shepherd Dog": 14,
  "Brittany": 13,
  "Chesapeake Bay Retriever": 12,
  "Clumber Spaniel": 11,
  "Cocker Spaniel": 12,
  "Curly-Coated Retriever": 11,
  "English Cocker Spaniel": 13,
  "English Setter": 13,
  "English Springer Spaniel": 13,
  "Field Spaniel": 12,
  "Flat-Coated Retriever": 9,
  "German Shorthaired Pointer": 13,
  "German Wirehaired Pointer": 13,
  "Golden Retriever": 11,
  "Gordon Setter": 11,
  "Irish Red and White Setter": 13,
  "Irish Setter": 13,
  "Irish Water Spaniel": 11,
  "Labrador Retriever": 11,
  "Nova Scotia Duck Tolling Retriever": 13,
  "Pointer": 14,
  "Spinone Italiano": 11,
  "Sussex Spaniel": 12,
  "Vizsla": 13,
  "Weimaraner": 12,
  "Welsh Springer Spaniel": 14,
  "Wirehaired Pointing Griffon": 13,
  "Afghan Hound": 13,
  "American English Coonhound": 12,
  "American Foxhound": 12,
  "Basenji": 14,
  "Basset Hound": 11,
  "Beagle": 12,
  "Black and Tan Coonhound": 11,
  "Bloodhound": 8,
  "Bluetick Coonhound": 12,
  "Borzoi": 12,
  "Cirneco dell Etna": 13,
  "Dachshund": 14,
  "English Foxhound": 12,
  "Greyhound": 12,
  "Harrier": 14,
  "Ibizan Hound": 12,
  "Irish Wolfhound": 7,
  "Norwegian Elkhound": 14,
  "Otterhound": 12,
  "Petit Basset Griffon Vendeen": 15,
  "Pharaoh Hound": 12,
  "Plott Hound": 13,
  "Portuguese Podengo": 14,
  "Redbone Coonhound": 12,
  "Rhodesian Ridgeback": 11,
  "Saluki": 13,
  "Scottish Deerhound": 10,
  "Sloughi": 14,
  "Treeing Walker Coonhound": 12,
  "Whippet": 14,
  "Airedale Terrier": 12,
  "American Hairless Terrier": 15,
  "American Staffordshire Terrier": 14,
  "Australian Terrier": 13,
  "Bedlington Terrier": 14,
  "Border Terrier": 14,
  "Bull Terrier": 12,
  "Cairn Terrier": 14,
  "Cesky Terrier": 14,
  "Dandie Dinmont Terrier": 14,
  "Glen of Imaal Terrier": 12,
  "Irish Terrier": 14,
  "Jack Russell Terrier": 14,
  "Kerry Blue Terrier": 14,
  "Lakeland Terrier": 14,
  "Manchester Terrier": 15,
  "Miniature Bull Terrier": 12,
  "Miniature Schnauzer": 14,
  "Norfolk Terrier": 14,
  "Norwich Terrier": 14,
  "Parson Russell Terrier": 14,
  "Rat Terrier": 15,
  "Russell Terrier": 13,
  "Scottish Terrier": 12,
  "Sealyham Terrier": 13,
  "Skye Terrier": 13,
  "Smooth Fox Terrier": 14,
  "Soft Coated Wheaten Terrier": 13,
  "Staffordshire Bull Terrier": 13,
  "Welsh Terrier": 14,
  "West Highland White Terrier": 14,
  "Wire Fox Terrier": 14,
  "Affenpinscher": 14,
  "Biewer Terrier": 16,
  "Brussels Griffon": 14,
  "Cavalier King Charles Spaniel": 12,
  "Chihuahua": 15,
  "Chinese Crested": 16,
  "English Toy Spaniel": 11,
  "Havanese": 15,
  "Italian Greyhound": 14,
  "Japanese Chin": 11,
  "Maltese": 14,
  "Miniature Pinscher": 14,
  "Papillon": 15,
  "Pekingese": 14,
  "Pomeranian": 14,
  "Pug": 14,
  "Shih Tzu": 14,
  "Silky Terrier": 14,
  "Toy Fox Terrier": 14,
  "Toy Manchester Terrier": 15,
  "Yorkshire Terrier": 13,
  "American Eskimo Dog": 14,
  "Bichon Frise": 14,
  "Boston Terrier": 12,
  "Bulldog": 9,
  "Chinese Shar-Pei": 10,
  "Chow Chow": 10,
  "Coton de Tulear": 17,
  "Dalmatian": 12,
  "Finnish Spitz": 14,
  "French Bulldog": 11,
  "Keeshond": 14,
  "Lhasa Apso": 14,
  "L\xF6wchen": 14,
  "Norwegian Lundehund": 13,
  "Poodle": 14,
  "Schipperke": 14,
  "Shiba Inu": 14,
  "Tibetan Spaniel": 14,
  "Tibetan Terrier": 16,
  "Xoloitzcuintli": 16,
  "Azawakh": 14,
  "Barbet": 13,
  "Belgian Laekenois": 11,
  "Bergamasco": 14,
  "Bracco Italiano": 12,
  "Catahoula Leopard Dog": 12,
  "Czechoslovakian Vlcak": 14,
  "Lagotto Romagnolo": 16,
  "Mudi": 13,
  "Nederlandse Kooikerhondje": 14,
  "Perro de Presa Canario": 10,
  "Peruvian Inca Orchid": 13,
  "Porcelaine": 12,
  "Slovensky Cuvac": 12,
  "Slovensky Kopov": 12,
  "Thai Ridgeback": 12,
  "Transylvanian Hound": 11
};
var SIZE_LIFESPAN = {
  XS: 15,
  S: 13,
  M: 12,
  L: 10,
  XL: 8
};

// Get lifespan in game months for a breed
function getLifespan(breed) {
  var years = BREED_LIFESPANS[breed.name] || SIZE_LIFESPAN[breed.size || "M"] || 12;
  return years * 12; // convert to game months
}

// Get age stage label
function getAgeStage(ageMonths) {
  if (ageMonths < 3) return {
    label: "Newborn",
    color: "#b09070",
    canWork: false,
    canBreed: false
  };
  if (ageMonths < 18) return {
    label: "Puppy",
    color: "#d4942a",
    canWork: false,
    canBreed: false
  };
  if (ageMonths < 36) return {
    label: "Young Adult",
    color: "#22c55e",
    canWork: true,
    canBreed: true
  };
  if (ageMonths < 96) return {
    label: "Prime",
    color: "#c4956a",
    canWork: true,
    canBreed: true
  };
  if (ageMonths < 110) return {
    label: "Senior",
    color: "#d4960a",
    canWork: true,
    canBreed: false
  };
  return {
    label: "Elder",
    color: "#f97316",
    canWork: false,
    canBreed: false
  };
}

// Heat cycle intervals in real days by size
function getHeatCycleInterval(size) {
  if (size === "XL") return 7;
  if (size === "L") return 6;
  if (size === "M") return 5;
  return 4; // S, XS, Toy
}

// Returns heat status for a female dog
// { status: "too_young" | "in_heat" | "waiting", daysUntilHeat: N }
function getHeatStatus(animal, nowMs) {
  if (animal.sex !== "F") return null;
  var ageMs = (animal.ageMonths || 0) * (30.44 * 24 * 60 * 60 * 1000);
  var bornMs = nowMs - ageMs;
  var maturityMs = 12 * 30.44 * 24 * 60 * 60 * 1000; // 12 real days
  if (ageMs < maturityMs) {
    var daysToMature = Math.ceil((maturityMs - ageMs) / (24 * 60 * 60 * 1000));
    return { status: "too_young", daysUntilHeat: daysToMature };
  }
  var interval = getHeatCycleInterval(animal.size || "M");
  var heatWindowDays = 2;
  var intervalMs = interval * 24 * 60 * 60 * 1000;
  var heatWindowMs = heatWindowDays * 24 * 60 * 60 * 1000;
  // Use lastWhelped if set, otherwise use heatStarted, otherwise use maturity date
  var cycleStartMs = animal.lastWhelped || animal.heatCycleStart || (bornMs + maturityMs);
  var timeSinceCycleStart = nowMs - cycleStartMs;
  var positionInCycle = timeSinceCycleStart % intervalMs;
  if (positionInCycle < heatWindowMs) {
    var hoursLeft = Math.ceil((heatWindowMs - positionInCycle) / (60 * 60 * 1000));
    return { status: "in_heat", hoursLeft: hoursLeft };
  }
  var msUntilNextHeat = intervalMs - positionInCycle;
  var daysUntil = Math.ceil(msUntilNextHeat / (24 * 60 * 60 * 1000));
  return { status: "waiting", daysUntilHeat: daysUntil };
}

// Mixed breed hybrid vigor bonus: +1 to +3 years based on diversity
function mixedLifespanBonus(sire, dam) {
  if (!sire || !dam || sire.breed === dam.breed) return 0;
  // More different = bigger bonus
  var sireGroup = sire.group || "";
  var damGroup = dam.group || "";
  return sireGroup !== damGroup ? 3 : 1; // cross-group gets full bonus
}

// ── VERSION STAMP ─────────────────────────────────────────────
var GAME_VERSION = "2026.03.08.1";

// ── COAT COLOR SWATCH MAP ─────────────────────────────────────
function getCoatSwatch(coatColor) {
  if (!coatColor) return null;
  var primary = coatColor.split(" \xB7 ")[0].trim().toLowerCase();
  var map = {
    "black":"#1a1a1a","blue":"#6b8ca8","chocolate":"#5c3317","isabella":"#b5967a",
    "red/yellow":"#c8622a","red":"#b84a1a","yellow":"#d4a843","cream":"#f0ddb0",
    "fawn":"#d4a060","sable/fawn":"#a07838","sable":"#a07838","wolf sable":"#7a7a5a",
    "brindle":"#6b4a28","black & tan":"#1a1a1a","black & tan (saddle)":"#1a1a1a",
    "blue & tan":"#4a6878","blue & tan (saddle)":"#4a6878",
    "chocolate & tan":"#5c3317","chocolate & tan (saddle)":"#5c3317",
    "isabella & tan":"#b5967a","isabella & tan (saddle)":"#b5967a"
  };
  var found = map[primary];
  if (found) return found;
  if (primary.includes("black")) return "#1a1a1a";
  if (primary.includes("blue")) return "#6b8ca8";
  if (primary.includes("chocolate")) return "#5c3317";
  if (primary.includes("isabella")) return "#b5967a";
  if (primary.includes("cream")) return "#f0ddb0";
  if (primary.includes("fawn")) return "#d4a060";
  if (primary.includes("sable")) return "#a07838";
  if (primary.includes("brindle")) return "#6b4a28";
  if (primary.includes("red")) return "#c8622a";
  if (primary.includes("yellow")) return "#d4a843";
  return "#8a7055";
}

// ── DEMO BREEDS ───────────────────────────────────────────────
var DEMO_BREEDS = [{
  "name": "Border Collie",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "red & white", "blue merle", "sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 10,
    "energy": 10,
    "trainability": 10,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 92,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Flyball", "Obedience"]
}, {
  "name": "Rough Collie",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["sable", "tricolor", "blue merle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation", "Obedience"]
}, {
  "name": "Smooth Collie",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["sable", "tricolor", "blue merle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Obedience", "Agility"]
}, {
  "name": "Shetland Sheepdog",
  "group": "Herding",
  "size": "S",
  "coat": "long",
  "colors": ["sable", "tricolor", "blue merle", "black & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Pembroke Welsh Corgi",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["red", "sable", "tricolor", "black & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Cardigan Welsh Corgi",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["red", "sable", "brindle", "blue merle"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 88,
    "joints": 78
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Bearded Collie",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "blue", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Old English Sheepdog",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["gray & white", "blue & white", "grizzle & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "Agility"]
}, {
  "name": "German Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["sable", "black", "black & tan", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 70,
    "eyes": 88,
    "heart": 85,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Dutch Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["gold brindle", "silver brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 85,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "Agility", "Obedience"]
}, {
  "name": "Schapendoes",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "gray", "brown", "fawn", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Belgian Malinois",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "mahogany", "red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Agility", "Tracking"]
}, {
  "name": "Belgian Tervuren",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["fawn & black", "mahogany & black", "gray & black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Agility", "Obedience"]
}, {
  "name": "Belgian Groenendael",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Belgian Laekenois",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["fawn", "red", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Berger Picard",
  "group": "Herding",
  "size": "M",
  "coat": "wire",
  "colors": ["fawn", "brindle", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Pyrenean Shepherd",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["fawn", "brindle", "gray", "merle"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "Beauceron",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "harlequin"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Schutzhund", "Herding", "Obedience"]
}, {
  "name": "Briard",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["black", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Herding", "Schutzhund", "Conformation"]
}, {
  "name": "Bouvier des Flandres",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["fawn", "black", "gray brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Herding", "Obedience"]
}, {
  "name": "Australian Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["merle", "black", "red", "blue merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 85,
    "heart": 90,
    "joints": 80
  },
  "aptitudes": ["Agility", "Herding", "Obedience"]
}, {
  "name": "Miniature American Shepherd",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["blue merle", "black", "red merle", "red"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Rally-O"]
}, {
  "name": "Australian Cattle Dog",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue", "red speckle", "blue speckle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 92,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "Australian Kelpie",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["black", "red", "fawn", "chocolate", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 9,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Australian Stumpy Tail Cattle Dog",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue speckle", "red speckle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Puli",
  "group": "Herding",
  "size": "M",
  "coat": "corded",
  "colors": ["black", "white", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Pumi",
  "group": "Herding",
  "size": "S",
  "coat": "curly",
  "colors": ["black", "white", "gray", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Mudi",
  "group": "Herding",
  "size": "M",
  "coat": "wavy",
  "colors": ["black", "white", "fawn", "gray", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Flyball"]
}, {
  "name": "Komondor",
  "group": "Herding",
  "size": "XL",
  "coat": "corded",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Bergamasco Sheepdog",
  "group": "Herding",
  "size": "L",
  "coat": "corded",
  "colors": ["black", "gray", "silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Catalan Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "sable", "gray", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Portuguese Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["yellow", "cinnamon", "gray", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Croatian Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "curly",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Swedish Vallhund",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["gray", "red", "gray-brown"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Norwegian Buhund",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["wheaten", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Icelandic Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["tan", "red", "chocolate", "black", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Finnish Lapphund",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "white", "sable", "wolf sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Swedish Lapphund",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "bear brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Lapponian Herder",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "brown", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Polish Lowland Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["white & black", "white & gray", "white & brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation", "Agility"]
}, {
  "name": "Polish Tatra Sheepdog",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Karst Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["iron gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "black", "blue", "red", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 10,
    "barkTendency": 2,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Whippet",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "brindle", "blue", "black", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 88,
    "eyes": 90,
    "heart": 92,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Italian Greyhound",
  "group": "Hound",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "blue", "black", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Afghan Hound",
  "group": "Hound",
  "size": "L",
  "coat": "long",
  "colors": ["cream", "black", "red", "brindle", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 5,
    "energy": 7,
    "trainability": 3,
    "loyalty": 7,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 3,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Borzoi",
  "group": "Hound",
  "size": "L",
  "coat": "long",
  "colors": ["white", "white & tan", "white & brindle", "golden"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Irish Wolfhound",
  "group": "Hound",
  "size": "XL",
  "coat": "wire",
  "colors": ["gray", "brindle", "red", "black", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 75,
    "heart": 58,
    "joints": 65
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Scottish Deerhound",
  "group": "Hound",
  "size": "XL",
  "coat": "wire",
  "colors": ["dark blue gray", "gray", "brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 2,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Saluki",
  "group": "Hound",
  "size": "L",
  "coat": "silky",
  "colors": ["white", "cream", "fawn", "golden", "red", "grizzle", "tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Sloughi",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["sandy", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Azawakh",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "sand", "red", "brindle", "particolored"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Tazy",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "cream", "white", "gray", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Taigan",
  "group": "Hound",
  "size": "L",
  "coat": "silky",
  "colors": ["black", "gray", "red", "cream", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Hungarian Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "white", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Spanish Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["cinnamon", "brindle", "white", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Basenji",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red & white", "black & white", "tricolor", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 1,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 88,
    "eyes": 85,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Pharaoh Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tan", "rich tan", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Ibizan Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white", "red", "white & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Cirneco dell'Etna",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tan", "tan & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Podengo Portugu\xEAs",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "fawn", "black", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Podenco Canario",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "fawn", "white & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Thai Ridgeback",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue", "black", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Rhodesian Ridgeback",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["wheaten", "light wheaten", "red wheaten"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Lure Coursing", "Conformation"]
}, {
  "name": "Peruvian Inca Orchid",
  "group": "Hound",
  "size": "M",
  "coat": "hairless",
  "colors": ["pink", "brown", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Bloodhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "red & tan", "liver & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 65,
    "heart": 72,
    "joints": 65
  },
  "aptitudes": ["Tracking", "Field Trials", "Conformation"]
}, {
  "name": "Beagle",
  "group": "Hound",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "red & white", "lemon & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 9,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Coonhound (Black & Tan)",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Redbone Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "red & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Treeing Walker Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "bicolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Plott Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "black brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "American Foxhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "white & tan", "bicolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Harrier",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Foxhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "white & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Otterhound",
  "group": "Hound",
  "size": "L",
  "coat": "wire",
  "colors": ["grizzle", "black & tan", "blue & cream"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Basset Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "lemon & white", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 5,
    "energy": 3,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 8,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 65,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Dachshund",
  "group": "Hound",
  "size": "XS",
  "coat": "short",
  "colors": ["red", "black & tan", "dapple", "chocolate & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 50
  },
  "aptitudes": ["Earthdog", "Conformation", "Field Trials"]
}, {
  "name": "Bavarian Mountain Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "tan", "fawn brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Field Trials"]
}, {
  "name": "Hanover Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "tan", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Field Trials"]
}, {
  "name": "Hamiltonst\xF6vare",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hygenhund",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "red & white", "black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Dunker",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & white", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Segugio Italiano",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "black & tan", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Posavac Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["reddish wheaten & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hellenic Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 84,
    "heart": 86,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Airedale Terrier",
  "group": "Terrier",
  "size": "L",
  "coat": "wire",
  "colors": ["tan & black", "tan & grizzle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Obedience"]
}, {
  "name": "Border Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["grizzle & tan", "blue & tan", "red", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["white", "brindle", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 75,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Miniature Bull Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white", "brindle", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 72,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Cairn Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "brindle", "black", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Scottish Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "wheaten", "brindle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "West Highland White Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Skye Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "long",
  "colors": ["black", "gray", "cream", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Dandie Dinmont Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["pepper", "mustard"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Norfolk Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "wheaten", "black & tan", "grizzle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Norwich Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "wheaten", "black & tan", "grizzle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Sealyham Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white", "white & lemon", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "Lakeland Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["black & tan", "blue & tan", "red", "grizzle", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Manchester Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Bedlington Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "curly",
  "colors": ["blue", "liver", "sandy"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Welsh Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "wire",
  "colors": ["tan & black", "tan & grizzle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Kerry Blue Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "curly",
  "colors": ["blue", "blue gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Agility", "Herding"]
}, {
  "name": "Irish Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "wire",
  "colors": ["red", "golden red", "wheaten"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Glen of Imaal Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["blue", "brindle", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Soft Coated Wheaten Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "silky",
  "colors": ["wheaten"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Jack Russell Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["white & tan", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 10,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 10,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 88,
    "eyes": 88,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Earthdog", "Agility", "Flyball"]
}, {
  "name": "Parson Russell Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white & tan", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 88,
    "eyes": 88,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Patterdale Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["black", "red", "chocolate", "grizzle", "black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Miniature Schnauzer",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["salt & pepper", "black", "black & silver"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Obedience", "Agility"]
}, {
  "name": "Staffordshire Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "red", "fawn", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "American Pit Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["red", "brindle", "fawn", "black", "blue", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "American Staffordshire Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "fawn", "red", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Rat Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "black & tan", "white & black", "blue & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Agility", "Flyball"]
}, {
  "name": "Fox Terrier (Smooth)",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Fox Terrier (Wire)",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Cesky Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["gray-blue", "light coffee brown"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "Jagdterrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["black & tan", "dark brown & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 84,
    "eyes": 85,
    "heart": 88,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Field Trials", "Tracking"]
}, {
  "name": "Australian Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["blue & tan", "sandy", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Boxer",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 72,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Agility", "Conformation"]
}, {
  "name": "Doberman Pinscher",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black", "red", "blue", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 82,
    "heart": 72,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Rottweiler",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "black & mahogany"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Giant Schnauzer",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black", "salt & pepper"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Standard Schnauzer",
  "group": "Working",
  "size": "M",
  "coat": "wire",
  "colors": ["black", "salt & pepper"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Akita Inu",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["fawn", "red", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "American Akita",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white", "pinto"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Siberian Husky",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["gray & white", "black & white", "red & white", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"]
}, {
  "name": "Alaskan Malamute",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray & white", "sable & white", "black & white", "red & white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"]
}, {
  "name": "Greenland Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "black", "gray", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 4
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"]
}, {
  "name": "Canadian Eskimo Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "gray", "black", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"]
}, {
  "name": "Bernese Mountain Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 62,
    "eyes": 75,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Greater Swiss Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 78,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Appenzeller Sennenhund",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"]
}, {
  "name": "Entlebucher Mountain Dog",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"]
}, {
  "name": "Saint Bernard",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "mahogany & white", "brindle & white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 5
  },
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Newfoundland",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "brown", "gray", "landseer"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Draft", "Dock Diving", "Conformation"]
}, {
  "name": "Leonberger",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["lion-yellow", "red", "sandy"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Hovawart",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["black", "blond", "black & gold"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "English Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "apricot", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Bullmastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "red", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Neapolitan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["black", "gray", "mahogany", "tawny", "blue"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 4
  },
  "health": {
    "hips": 62,
    "eyes": 68,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Dogue de Bordeaux",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "mahogany", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 65,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Cane Corso",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["black", "gray", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Broholmer",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["yellow", "brown", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Boerboel",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "red", "brindle", "brown"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Rhodesian Ridgeback",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wheaten", "light wheaten", "red wheaten"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Lure Coursing", "Conformation"]
}, {
  "name": "Cimarron Uruguayo",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Spanish Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "red", "black", "brindle", "wolf sable"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Pyrenean Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & gray", "white & beige", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Great Pyrenees",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white & badger", "white & gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Dogo Argentino",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 6,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 72,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "Fila Brasileiro",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 10,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Tracking", "Conformation"]
}, {
  "name": "Perro de Presa Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Caucasian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"]
}, {
  "name": "Central Asian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "gray", "fawn", "black", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"]
}, {
  "name": "South Russian Ovcharka",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "gray", "white & gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Black Russian Terrier",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Moscow Watchdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Kangal",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "tan", "sable"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Anatolian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Akbash",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Bully Kutta",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "black", "brindle", "harlequin"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Rajapalayam",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Tosa Inu",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["red", "brindle", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 3,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Tibetan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "brown", "blue gray", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Great Dane",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "blue", "black", "harlequin"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 58,
    "eyes": 78,
    "heart": 62,
    "joints": 58
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Labrador Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["black", "yellow", "chocolate"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 82,
    "heart": 85,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Obedience"]
}, {
  "name": "Golden Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["light golden", "golden", "dark golden"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 70,
    "eyes": 80,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Obedience"]
}, {
  "name": "Flat-Coated Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black", "liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Curly-Coated Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["black", "liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Chesapeake Bay Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "wavy",
  "colors": ["brown", "sedge", "deadgrass"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Nova Scotia Duck Tolling Retriever",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "orange", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Dock Diving"]
}, {
  "name": "German Shorthaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["liver", "liver & white", "black", "black & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Dock Diving"]
}, {
  "name": "German Wirehaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["liver", "liver & white", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "German Longhaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["brown", "brown & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Weimaraner",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["silver gray", "mouse gray", "silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Tracking", "Agility"]
}, {
  "name": "Vizsla",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["golden rust", "dark sandy gold"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Wirehaired Vizsla",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["golden rust"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Pudelpointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["liver", "brown", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Bracco Italiano",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & orange", "white & chestnut", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Spinone Italiano",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["white", "white & orange", "white & brown roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Lagotto Romagnolo",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["white", "brown", "orange", "roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Tracking"]
}, {
  "name": "Brittany Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["orange & white", "liver & white", "black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Wirehaired Pointing Griffon",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["steel gray & brown", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Barbet",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["black", "brown", "gray", "fawn", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Agility"]
}, {
  "name": "Drentsche Patrijshond",
  "group": "Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["white & brown", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Kooikerhondje",
  "group": "Sporting",
  "size": "S",
  "coat": "long",
  "colors": ["orange & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "English Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["blue belton", "orange belton", "lemon belton", "liver belton"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Irish Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["mahogany", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Irish Red & White Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["red & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Gordon Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "English Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["liver", "black", "orange", "lemon"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "English Springer Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["liver & white", "black & white", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "English Cocker Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["black", "liver", "golden", "blue roan", "orange roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 75,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "American Cocker Spaniel",
  "group": "Sporting",
  "size": "S",
  "coat": "long",
  "colors": ["black", "buff", "parti-color", "ASCOB"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 70,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Welsh Springer Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Sussex Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["golden liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Clumber Spaniel",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["white & lemon", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Boykin Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["liver", "brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 75,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "American Water Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["brown", "chocolate", "liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Chihuahua",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "black", "white", "chocolate"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 9,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 80,
    "joints": 84
  },
  "aptitudes": ["Conformation", "Agility", "Rally-O"]
}, {
  "name": "Pomeranian",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["orange", "black", "white", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Shih Tzu",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["gold", "red", "black", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Yorkshire Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["tan & blue", "tan & black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility", "Earthdog"]
}, {
  "name": "Pug",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 5,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 68,
    "heart": 72,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Cavalier King Charles Spaniel",
  "group": "Toy",
  "size": "S",
  "coat": "long",
  "colors": ["chestnut & white", "tricolor", "black & tan", "ruby"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Agility", "Rally-O"]
}, {
  "name": "Papillon",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white & sable", "white & black", "white & red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 86,
    "eyes": 85,
    "heart": 88,
    "joints": 86
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Phal\xE8ne",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white & sable", "white & black", "white & red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 6,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 86,
    "eyes": 85,
    "heart": 88,
    "joints": 86
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Havanese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["cream", "gold", "black", "blue", "chocolate"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Chinese Crested",
  "group": "Toy",
  "size": "XS",
  "coat": "hairless",
  "colors": ["pink", "blue", "chocolate", "black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Maltese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Japanese Chin",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["black & white", "red & white", "sable & white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 78,
    "heart": 78,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Pekingese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["red", "sable", "black & tan", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 72,
    "heart": 75,
    "joints": 78
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Brussels Griffon",
  "group": "Toy",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 75,
    "heart": 78,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Miniature Pinscher",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["red", "black & tan", "chocolate & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Affenpinscher",
  "group": "Toy",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "gray", "silver", "red", "belge"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Italian Greyhound",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "blue", "black", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "L\xF6wchen",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["black", "white", "cream", "brown", "blue"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Bolognese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Coton de Tulear",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Russkiy Toy",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["black & tan", "brown & tan", "blue & tan", "lilac & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Biewer Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["tricolor (gold/white/black)", "tricolor (gold/white/blue)"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Silky Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["blue & tan", "gray & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Earthdog"]
}, {
  "name": "Toy Fox Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["tricolor", "white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Earthdog"]
}, {
  "name": "King Charles Spaniel",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["blenheim", "tricolor", "black & tan", "ruby"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 72,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Tibetan Spaniel",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["gold", "cream", "white", "black", "parti-color"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Lhasa Apso",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["honey", "black", "white", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Bulldog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "white", "fawn", "piebald"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 5,
    "energy": 3,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 65,
    "eyes": 68,
    "heart": 65,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "French Bulldog",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["brindle", "fawn", "white", "pied"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 10
  },
  "health": {
    "hips": 68,
    "eyes": 70,
    "heart": 68,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "American Bulldog",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white", "brindle & white", "fawn & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Agility"]
}, {
  "name": "Standard Poodle",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["black", "white", "apricot", "red", "silver", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 10,
    "energy": 7,
    "trainability": 10,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O", "Dock Diving"]
}, {
  "name": "Miniature Poodle",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "curly",
  "colors": ["black", "white", "apricot", "red", "silver"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 10,
    "energy": 6,
    "trainability": 10,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Dalmatian",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & black spots", "white & liver spots"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Chow Chow",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["red", "black", "cinnamon", "cream", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Boston Terrier",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["black & white", "brindle & white", "seal & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 78,
    "eyes": 75,
    "heart": 78,
    "joints": 78
  },
  "aptitudes": ["Agility", "Flyball", "Conformation"]
}, {
  "name": "Shiba Inu",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "black & tan", "sesame", "cream"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Bichon Fris\xE9",
  "group": "Non-Sporting",
  "size": "XS",
  "coat": "curly",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Xoloitzcuintli",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "hairless",
  "colors": ["black", "gray", "bronze", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Finnish Spitz",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "gold"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 10,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Norwegian Elkhound",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["gray", "silver", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Keeshond",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["wolf gray", "silver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "American Eskimo Dog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white", "biscuit"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Schipperke",
  "group": "Non-Sporting",
  "size": "XS",
  "coat": "medium",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Tibetan Terrier",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white", "black", "cream", "gold", "piebald"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Chow Chow (Smooth)",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["red", "black", "cinnamon", "cream", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Eurasier",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "red", "wolf sable", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Basenji",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["red & white", "black & white", "tricolor", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 1,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 88,
    "eyes": 85,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Canaan Dog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["white & brown", "white & black", "sandy", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility", "Obedience"]
}, {
  "name": "Akita Inu (American)",
  "group": "Non-Sporting",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white", "pinto"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Central Asian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "brindle", "piebald", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 10,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Kazakh Tobet",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Sage Koochee Mountain",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "gray", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 4
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sage Koochee Steppe",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "gray", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sage Koochee Desert",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "sand", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 3,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Afghan Tiger Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["brindle", "fawn", "black & tan", "gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 8,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 2,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Uzbek Sarkangik",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "white", "gray", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Tajik Dahmarda",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "white", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 4
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Kyrgyz Volkodav",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "gray", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 3,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sarmatian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "GSD West German Working",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["sable", "black & tan", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 88,
    "heart": 85,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "IPO", "Tracking", "Obedience", "Search & Rescue"]
}, {
  "name": "GSD DDR East German",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["dark sable", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 90,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "IPO", "Tracking", "Police Work"]
}, {
  "name": "GSD Czech Working",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["dark sable", "black", "black & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 90,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "IPO", "Police Work", "Military", "Tracking"]
}, {
  "name": "GSD West German Show",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & tan", "sable", "black & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 68,
    "eyes": 88,
    "heart": 85,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience", "Therapy"]
}, {
  "name": "GSD American Show",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & tan", "sable", "black & silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 62,
    "eyes": 85,
    "heart": 82,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience", "Therapy"]
}, {
  "name": "East European Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "medium",
  "colors": ["sable", "black & tan", "gray", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 9
  },
  "health": {
    "hips": 75,
    "eyes": 88,
    "heart": 85,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Police Work", "Military", "Obedience"]
}, {
  "name": "White Swiss Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 75,
    "eyes": 88,
    "heart": 86,
    "joints": 75
  },
  "aptitudes": ["Obedience", "Agility", "Therapy", "Conformation"]
}, {
  "name": "King Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["sable", "black & tan", "black & silver", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 88,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Obedience", "Therapy", "Conformation", "Search & Rescue"]
}, {
  "name": "Shiloh Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "sable", "golden", "charcoal", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 6,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 88,
    "heart": 86,
    "joints": 78
  },
  "aptitudes": ["Obedience", "Therapy", "Search & Rescue", "Conformation"]
}, {
  "name": "Panda Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & white & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 70,
    "eyes": 88,
    "heart": 85,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Bohemian Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 88,
    "heart": 86,
    "joints": 80
  },
  "aptitudes": ["Herding", "Obedience", "Agility", "Conformation"]
}, {
  "name": "Kunming Dog",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["sable", "black & tan", "tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 85,
    "heart": 84,
    "joints": 72
  },
  "aptitudes": ["Police Work", "Military", "Tracking", "Obedience"]
}, {
  "name": "Kuvasz",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Maremma Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Sarplaninac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["iron gray", "fawn", "white", "tan", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Tornjak",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "white & brown", "tricolor", "multicolor"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Estrela Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "brindle", "wolf gray", "yellow"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Rafeiro do Alentejo",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["black", "fawn", "yellow", "brindle", "white marked"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Cao de Gado Transmontano",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white & yellow", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Slovak Cuvac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Carpathian Shepherd Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["wolf sable", "fawn", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Romanian Mioritic Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "gray", "white & gray", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Romanian Raven Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Karakachan",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "tricolor", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Greek Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Himalayan Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "tawny"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Armenian Gampr",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "gray", "white", "piebald", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Georgian Shepherd Nagazi",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Gurdbasar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sarabi Persian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Kurdish Mastiff Pshdar",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "black & tan", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Kars Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Saarloos Wolfdog",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["wolf gray", "tawny", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Czechoslovakian Wolfdog",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["yellow gray", "silver gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "McNab",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["black & white", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "English Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "sable & white", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Blue Lacy",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue", "red", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Tracking", "Field Trials"]
}, {
  "name": "Louisiana Catahoula Leopard",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["merle", "brindle", "solid", "tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Tracking", "Field Trials"]
}, {
  "name": "C\xE3o da Serra de Aires",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "gray", "yellow", "brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Basque Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["fawn", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Majorca Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Carea Leon\xE9s",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "black & tan", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Romanian Corb",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Lupino del Gigante",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["gray", "wolf sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Pastore della Lessinia",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["white", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "South African Boerboel Herder",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "brown"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Herding", "Obedience"]
}, {
  "name": "Maremma-Abruzzese mix",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Karelian Bear Dog",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (West Siberian)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "gray", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (East Siberian)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "gray", "black", "sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (Russo-European)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "gray & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Finnish Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Estonian Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Polish Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Serbian Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red & black saddle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Porcelaine",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white with orange spots"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Billy",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Petit Basset Griffon Vend\xE9en",
  "group": "Hound",
  "size": "S",
  "coat": "wire",
  "colors": ["white & lemon", "white & orange", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Grand Basset Griffon Vend\xE9en",
  "group": "Hound",
  "size": "M",
  "coat": "wire",
  "colors": ["white & lemon", "white & orange", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Briquet Griffon Vend\xE9en",
  "group": "Hound",
  "size": "M",
  "coat": "wire",
  "colors": ["white & orange", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Anglo-Fran\xE7ais de Petite V\xE9nerie",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "bicolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials"]
}, {
  "name": "Mountain Cur",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "brindle", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Treeing Tennessee Brindle",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Black Mouth Cur",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "yellow", "brindle", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking", "Herding"]
}, {
  "name": "American English Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "blue tick", "red tick"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Bluetick Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue tick"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Chien Fran\xE7ais Blanc et Noir",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white & black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials"]
}, {
  "name": "Dungker",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue merle", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Drever",
  "group": "Hound",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "red & white", "black & tan & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "H\xE4lleforshund",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Schillerst\xF6vare",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Smalandsst\xF6vare",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hygen Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "yellow", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hellenikos Ichnilatis",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Fell Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "black & tan", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Plummer Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Lucas Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["grizzle & tan", "sandy & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Ratonero Bodeguero Andaluz",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Teddy Roosevelt Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 84,
    "eyes": 85,
    "heart": 88,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "American Hairless Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "hairless",
  "colors": ["pink", "pink & gray", "pink & red"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Tenterfield Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Brazilian Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Irish Water Spaniel",
  "group": "Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Field Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "liver", "golden liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Stabyhoun",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "brown & white", "orange & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Small M\xFCnsterl\xE4nder",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["brown & white", "brown roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Large M\xFCnsterl\xE4nder",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black & white", "black roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Cesky Fousek",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["brown", "brown & white", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Slovakian Wirehaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["gray", "gray & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Perdigueiro Portugu\xEAs",
  "group": "Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "yellow & white", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Perdiguero de Burgos",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & liver", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "\xC9pagneul Pont-Audemer",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["brown", "brown & gray roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "\xC9pagneul Bleu de Picardie",
  "group": "Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["blue roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Volpino Italiano",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "German Spitz (Klein)",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "black", "brown", "orange", "gray"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "German Spitz (Mittel)",
  "group": "Toy",
  "size": "S",
  "coat": "long",
  "colors": ["white", "black", "brown", "orange", "gray"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Mi-Ki",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "black", "cream", "gold", "parti"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "English Toy Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Thai Bangkaew",
  "group": "Toy",
  "size": "M",
  "coat": "long",
  "colors": ["white & fawn", "white & red", "white & gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Samoyed",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "cream", "biscuit"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Sled Racing", "Conformation", "Agility"]
}, {
  "name": "Chinook",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["tawny", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"]
}, {
  "name": "Tamaskan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["wolf gray", "red gray", "black gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"]
}, {
  "name": "Northern Inuit",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["white", "black", "gray", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Utonagan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["gray", "white", "black", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Bucovina Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "tricolor", "white & sand"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "brown"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Mongolian Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Assyrian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "gray", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Dogo Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Ca de Bou",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 70,
    "heart": 68,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Alano Espa\xF1ol",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Cao de Fila de Sao Miguel",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "gray brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 75,
    "joints": 72
  },
  "aptitudes": ["Herding", "Schutzhund", "Conformation"]
}, {
  "name": "C\xE3o de Castro Laboreiro",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wolf gray", "dark", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Perro Cimarron",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Alaunt",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Jindo",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "black & tan", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Kishu Ken",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "red", "sesame"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Kai Ken",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black brindle", "red brindle", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Hokkaido",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "white", "black", "sesame", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Shikoku",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["sesame", "red sesame", "black sesame"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Nihon Supittsu",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Olde English Bulldogge",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn", "red", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Teddy Roosevelt (Non-Sp)",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Czechoslovakian Vlcak",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["yellow gray", "silver gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Tracking"]
}];

// ── COLOR HELPERS ─────────────────────────────────────────────
var coiColor = function coiColor(c) {
  return c < 3 ? "#22c55e" : c < 10 ? "#d4960a" : c < 25 ? "#f97316" : "#ef4444";
};
var coiLabel = function coiLabel(c) {
  return c < 3 ? "Outcross" : c < 10 ? "Moderate" : c < 25 ? "High" : "Very High";
};
var healthColor = function healthColor(s) {
  return s >= 85 ? "#22c55e" : s >= 65 ? "#d4960a" : s >= 40 ? "#f97316" : "#ef4444";
};

// ── DNA MODAL ─────────────────────────────────────────────────
function DNAModal(_ref5) {
  var _animal$mutations;
  var animal = _ref5.animal,
    onClose = _ref5.onClose;
  // Use global genetics engine getDesc (defined above App)
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: "#1a1410",
      border: "1px solid #4a3a28",
      borderRadius: 12,
      width: "100%",
      maxWidth: 720,
      maxHeight: "88vh",
      overflowY: "auto",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#d4942a",
      fontFamily: "monospace",
      fontSize: "1.1rem",
      fontWeight: "bold"
    }
  }, "\uD83E\uDDEC Full DNA Panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#8a7055",
      fontSize: "0.75rem"
    }
  }, animal.name, " \xB7 ", animal.breed, " \xB7 ID: ", animal.id)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "1px solid #6b5038",
      color: "#b09070",
      borderRadius: 5,
      padding: "4px 12px",
      cursor: "pointer",
      fontSize: "0.85rem"
    }
  }, "\u2715 Close")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: "0.62rem",
      background: "#443828",
      borderRadius: 6,
      padding: "8px 12px",
      marginBottom: 16,
      color: "#6b5038",
      wordBreak: "break-all"
    }
  }, "\uD83E\uDDEC ", animal.vinStr), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#d4860a",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Coat Color Loci"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 18
    }
  }, Object.entries(COAT_LOCI).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      loc = _ref7[0],
      ld = _ref7[1];
    var al = animal.genome.coat[loc];
    if (!al) return null;
    var d = getDesc(COAT_LOCI, loc, al);
    var warn = d.includes("⚠️");
    return /*#__PURE__*/React.createElement("div", {
      key: loc,
      style: {
        background: warn ? "#481808" : "#443828",
        border: "1px solid ".concat(warn ? "#ef4444" : "#4a3a28"),
        borderRadius: 6,
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#d4860a",
        fontWeight: "bold",
        fontSize: "0.78rem"
      }
    }, loc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        color: "#f0e6d3",
        fontSize: "0.82rem"
      }
    }, al[0], "/", al[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#8a7055",
        fontSize: "0.68rem",
        marginTop: 2
      }
    }, ld.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: warn ? "#fca5a5" : "#cbd5e1",
        fontSize: "0.7rem",
        marginTop: 2
      }
    }, d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#22c55e",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Health Panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 18
    }
  }, Object.entries(HEALTH_LOCI).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      loc = _ref9[0],
      ld = _ref9[1];
    var al = animal.genome.health[loc];
    if (!al) return null;
    var d = getDesc(HEALTH_LOCI, loc, al);
    var aff = d.includes("⚠️");
    var car = d.includes("Carrier");
    return /*#__PURE__*/React.createElement("div", {
      key: loc,
      style: {
        background: aff ? "#481808" : "#443828",
        border: "1px solid ".concat(aff ? "#ef4444" : car ? "#ca8a04" : "#4a3a28"),
        borderRadius: 6,
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#22c55e",
        fontWeight: "bold",
        fontSize: "0.78rem"
      }
    }, loc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        color: "#f0e6d3",
        fontSize: "0.82rem"
      }
    }, al[0], "/", al[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#8a7055",
        fontSize: "0.68rem",
        marginTop: 2
      }
    }, ld.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: aff ? "#fca5a5" : car ? "#f5d870" : "#cbd5e1",
        fontSize: "0.7rem",
        marginTop: 2
      }
    }, d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4956a",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Performance QTLs"), /*#__PURE__*/React.createElement("div", {
    style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginBottom: 18 }
  }, (function() {
    var QTL_INFO = {
      DRIVE:  { full: "Prey Drive",    line2: "",           desc: "Intensity of hunting/working motivation. High = tireless worker who needs a job. Low = relaxed and easy to settle.", hi: "Intense, tireless, needs a job", lo: "Calm, low-key, easy to settle" },
      INTEL:  { full: "Intelligence",  line2: "",           desc: "Problem-solving ability and trainability. High = learns fast, may get bored easily. Low = independent thinker, slower to train.", hi: "Fast learner, highly trainable", lo: "Stubborn, slower to train" },
      NERVE:  { full: "Nerve /",       line2: "Temperament", desc: "Confidence and stability under pressure. High = steady, bomb-proof, handles stress well. Low = nervous, reactive, spooks easily.", hi: "Steady, confident, bomb-proof", lo: "Sensitive, reactive, easily stressed" },
      SPEED:  { full: "Speed /",       line2: "Athleticism", desc: "Raw athletic ability — acceleration, agility, endurance. High = fast and agile. Low = slower, built for power.", hi: "Fast, agile, high-endurance", lo: "Slower, built for strength over speed" },
      MUSCLE: { full: "Muscle /",      line2: "Power",       desc: "Physical strength and body mass potential. High = powerful, heavy-boned. Low = lean and lightweight.", hi: "Powerful, heavy-boned, strong pull", lo: "Lean, lightweight, built for speed" }
    };
    return PERF_QTLS.map(function(q) {
      var v = animal.genome.perf[q] || [3, 3];
      var avg = ((v[0] + v[1]) / 2).toFixed(1);
      var info = QTL_INFO[q] || { full: q, line2: "", desc: "", hi: "", lo: "" };
      var tipText = info.full.replace(" /","") + " " + info.line2 + "\n" + info.desc + "\n\u25b2 High: " + info.hi + "\n\u25bc Low: " + info.lo;
      return /*#__PURE__*/React.createElement("div", {
        key: q,
        title: tipText,
        style: { background: "#443828", border: "1px solid #4a3a28", borderRadius: 6, padding: 8, textAlign: "center", cursor: "help" }
      },
      /*#__PURE__*/React.createElement("div", { style: { color: "#c4956a", fontSize: "0.68rem", fontWeight: "bold", lineHeight: 1.15 } }, info.full),
      /*#__PURE__*/React.createElement("div", { style: { color: "#7c6fa8", fontSize: "0.58rem", marginBottom: 4, lineHeight: 1.1 } }, info.line2 || "\u00a0"),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#8a7055", marginBottom: 1 } },
        /*#__PURE__*/React.createElement("span", null, "Sire"),
        /*#__PURE__*/React.createElement("span", null, "Dam")
      ),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: "monospace", color: "#f0e6d3", fontSize: "0.95rem", marginBottom: 5 } },
        /*#__PURE__*/React.createElement("span", null, v[0]),
        /*#__PURE__*/React.createElement("span", null, v[1])
      ),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.58rem", color: "#8a7055", marginBottom: 2 } }, "Avg (1\u20135)"),
      /*#__PURE__*/React.createElement("div", { style: { background: "#1a1410", borderRadius: 3, height: 4, overflow: "hidden", marginBottom: 3 } },
        /*#__PURE__*/React.createElement("div", { style: { background: "#c4956a", width: Math.min(100, (avg / 5 * 100)) + "%", height: "100%" } })
      ),
      /*#__PURE__*/React.createElement("div", { style: { color: "#c4956a", fontSize: "0.72rem", fontWeight: "bold" } }, Math.min(5, parseFloat(avg)).toFixed(1), "/5"));
    });
  })()), ((_animal$mutations = animal.mutations) === null || _animal$mutations === void 0 ? void 0 : _animal$mutations.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#f97316",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "\u26A1 Spontaneous Variants"), animal.mutations.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "#2d1e0f",
        border: "1px solid #f97316",
        borderRadius: 5,
        padding: "6px 10px",
        marginBottom: 4,
        fontSize: "0.75rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fb923c"
      }
    }, "\u26A1 Mutation at ", m.loc), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#b09070"
      }
    }, "(from ", m.src, ")"));
  })),
  animal.sizeVariant && (function(){
    var sv = getSizeVariantInfo(animal.sizeVariant);
    if (!sv) return null;
    var sz = getCurrentSize(animal);
    return /*#__PURE__*/React.createElement("div", { style: { marginBottom: 18 } },
      /*#__PURE__*/React.createElement("div", {
        style: { color: sv.color, fontWeight: "bold", fontSize: "0.8rem",
          textTransform: "uppercase", marginBottom: 8 }
      }, sv.label),
      /*#__PURE__*/React.createElement("div", {
        style: { background: "#1a1410", border: "1px solid "+sv.color,
          borderRadius: 6, padding: "8px 12px", fontSize: "0.78rem" }
      },
        /*#__PURE__*/React.createElement("div", { style: { color: sv.color, fontWeight: "bold", marginBottom: 4 } },
          "Est. Adult: ~", sz.adultW, " lbs \xB7 ~", sz.adultH, "\u2033"
        ),
        /*#__PURE__*/React.createElement("div", { style: { color: "#b09070" } }, "\u26A0\uFE0F ", sv.health)
      )
    );
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#443828",
      border: "1px solid #4a3a28",
      borderRadius: 6,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b09070",
      fontSize: "0.85rem"
    }
  }, "Coefficient of Inbreeding (COI)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: coiColor(animal.coi),
      fontWeight: "bold"
    }
  }, animal.coi, "% \u2014 ", coiLabel(animal.coi))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a1410",
      borderRadius: 4,
      height: 6,
      overflow: "hidden",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: coiColor(animal.coi),
      width: "".concat(Math.min(100, animal.coi * 4), "%"),
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap" }
  },
    /*#__PURE__*/React.createElement("span", { key: 0, title: "Outcross (0-3%): Minimal shared ancestry. Maximum genetic diversity. Ideal for hybrid vigor, reducing hereditary disease risk, and introducing new traits. Best for health-first breeding programs.", style: { fontSize: "0.62rem", color: "#22c55e", cursor: "help", background: "#1a1410", border: "1px solid #22c55e", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "0-3% Outcross \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 1, title: "Moderate (3-10%): Some shared ancestors, common in established purebred lines. Acceptable for maintaining breed type. Watch for slight increases in recessive disease expression. Most kennel clubs consider this normal range.", style: { fontSize: "0.62rem", color: "#d4960a", cursor: "help", background: "#1a1410", border: "1px solid #d4960a", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "3-10% Moderate \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 2, title: "High (10-25%): Significant inbreeding - equivalent to breeding half-siblings or double first cousins. Noticeably reduced immune function, smaller litters, higher puppy mortality. Recessive disorders become much more likely. Use only with strong justification.", style: { fontSize: "0.62rem", color: "#f97316", cursor: "help", background: "#1a1410", border: "1px solid #f97316", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "10-25% High \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 3, title: "Very High (25%+): Equivalent to parent-offspring or full sibling breeding. Severe inbreeding depression - reduced fertility, immune collapse, elevated cancer risk, shorter lifespan, and high probability of expressing multiple recessive disorders. Avoid.", style: { fontSize: "0.62rem", color: "#ef4444", cursor: "help", background: "#1a1410", border: "1px solid #ef4444", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "25%+ Very High \u2139\uFE0F")
  ))));
}

// ── DOG CEO PHOTO API ────────────────────────────────────────
var DOG_CEO_MAP = {
  // Retrievers
  "Golden Retriever":"retriever/golden","Labrador Retriever":"labrador",
  "Flat-Coated Retriever":"retriever/flatcoated","Chesapeake Bay Retriever":"retriever/chesapeake",
  "Curly-Coated Retriever":"retriever/curly",
  // Shepherds & herding
  "German Shepherd":"german/shepherd","Australian Shepherd":"australian/shepherd",
  "Border Collie":"collie/border","Rough Collie":"rough/collie",
  "Shetland Sheepdog":"sheepdog/shetland","Old English Sheepdog":"sheepdog/english",
  "Belgian Malinois":"malinois","Belgian Tervuren":"tervuren","Belgian Groenendael":"groenendael",
  "Pembroke Welsh Corgi":"pembroke","Cardigan Welsh Corgi":"corgi/cardigan",
  "Australian Cattle Dog":"cattledog/australian","Australian Kelpie":"australian/kelpie",
  // Setters & spaniels
  "English Setter":"setter/english","Gordon Setter":"setter/gordon","Irish Setter":"setter/irish",
  "Cocker Spaniel":"spaniel/cocker","English Springer Spaniel":"springer/english",
  "Brittany":"spaniel/brittany","Welsh Springer Spaniel":"spaniel/welsh",
  "Irish Water Spaniel":"spaniel/irish","Japanese Chin":"spaniel/japanese",
  "Sussex Spaniel":"spaniel/sussex",
  // Terriers
  "Airedale Terrier":"airedale","Border Terrier":"terrier/border",
  "Boston Terrier":"terrier/boston","Cairn Terrier":"terrier/cairn",
  "Fox Terrier":"terrier/fox","Irish Terrier":"terrier/irish",
  "Kerry Blue Terrier":"terrier/kerryblue","Lakeland Terrier":"terrier/lakeland",
  "Norfolk Terrier":"terrier/norfolk","Norwich Terrier":"terrier/norwich",
  "Scottish Terrier":"terrier/scottish","Sealyham Terrier":"terrier/sealyham",
  "Silky Terrier":"terrier/silky","Tibetan Terrier":"terrier/tibetan",
  "Welsh Terrier":"terrier/welsh","West Highland White Terrier":"terrier/westhighland",
  "Soft Coated Wheaten Terrier":"terrier/wheaten","Yorkshire Terrier":"terrier/yorkshire",
  "Bedlington Terrier":"terrier/bedlington","Staffordshire Bull Terrier":"bullterrier/staffordshire",
  "American Pit Bull Terrier":"pitbull","Russell Terrier":"terrier/russell",
  "Dandie Dinmont Terrier":"terrier/dandie","Patterdale Terrier":"terrier/patterdale",
  "American Terrier":"terrier/american",
  // Hounds
  "Afghan Hound":"hound/afghan","Basset Hound":"hound/basset","Bloodhound":"hound/blood",
  "English Foxhound":"hound/english","Ibizan Hound":"hound/ibizan",
  "Plott Hound":"hound/plott","Treeing Walker Coonhound":"hound/walker",
  "Coonhound":"coonhound","Bluetick Coonhound":"bluetick","Redbone Coonhound":"redbone",
  "Greyhound":"greyhound","Italian Greyhound":"greyhound/italian","Saluki":"saluki",
  "Whippet":"whippet","Borzoi":"borzoi","Irish Wolfhound":"wolfhound/irish",
  "Scottish Deerhound":"deerhound/scottish","Otterhound":"otterhound",
  "Norwegian Elkhound":"elkhound/norwegian","Basenji":"basenji","Rhodesian Ridgeback":"ridgeback/rhodesian",
  // Working & LGD
  "Great Pyrenees":"pyrenees","Tibetan Mastiff":"mastiff/tibetan",
  "English Mastiff":"mastiff/english","Bull Mastiff":"mastiff/bull",
  "Caucasian Ovcharka":"ovcharka/caucasian","Komondor":"komondor","Kuvasz":"kuvasz",
  "Leonberger":"leonberg","Newfoundland":"newfoundland","Saint Bernard":"stbernard",
  "Bernese Mountain Dog":"mountain/bernese","Greater Swiss Mountain Dog":"mountain/swiss",
  "Doberman Pinscher":"doberman","Rottweiler":"rottweiler","Boxer":"boxer",
  "Akita":"akita","Alaskan Malamute":"malamute","Siberian Husky":"husky",
  "Samoyed":"samoyed","Appenzeller":"appenzeller","Entlebucher":"entlebucher",
  "Bouvier des Flandres":"bouvier","Briard":"briard","Havanese":"havanese",
  // Sporting
  "Weimaraner":"weimaraner","Vizsla":"vizsla","German Shorthaired Pointer":"pointer/german",
  "German Longhaired Pointer":"pointer/germanlonghair","Dachshund":"dachshund",
  "Dalmatian":"dalmatian","Poodle":"poodle/standard","Miniature Poodle":"poodle/miniature",
  "Toy Poodle":"poodle/toy","Standard Poodle":"poodle/standard",
  "Bichon Frise":"frise/bichon","Coton de Tulear":"cotondetulear","Schipperke":"schipperke",
  "Keeshond":"keeshond","Chow Chow":"chow","Shar Pei":"sharpei",
  // Toy & small
  "Chihuahua":"chihuahua","Pomeranian":"pomeranian","Pug":"pug","Maltese":"maltese",
  "Shih Tzu":"shihtzu","Lhasa Apso":"lhasa","Pekinese":"pekinese","Papillon":"papillon",
  "Affenpinscher":"affenpinscher","Miniature Pinscher":"pinscher/miniature",
  "Miniature Schnauzer":"schnauzer/miniature","Giant Schnauzer":"schnauzer/giant",
  // Misc
  "Clumber Spaniel":"clumber","Beagle":"beagle","Pekingese":"pekinese",
  "Labradoodle":"labradoodle","Cockapoo":"cockapoo","Cavapoo":"cavapoo","Puggle":"puggle",
  "American Eskimo Dog":"eskimo","Shiba Inu":"shiba","Spanish Water Dog":"waterdog/spanish",
  "Dingo":"dingo","Mexican Hairless":"mexicanhairless"
};

function getDogCeoUrl(breedName) {
  var mapped = DOG_CEO_MAP[breedName];
  if (!mapped) {
    // Try fuzzy: first word lowercase
    var first = breedName.split(" ")[0].toLowerCase();
    mapped = first;
  }
  return "https://dog.ceo/api/breed/" + mapped + "/images/random";
}

function fetchDogPhoto(breedName, onSuccess, onError) {
  var url = getDogCeoUrl(breedName);
  fetch(url)
    .then(function(r) { return r.json(); })
    .then(function(d) {
      if (d.status === "success") onSuccess(d.message);
      else onError();
    })
    .catch(onError);
}


// ── COAT COLOR PAINTER ────────────────────────────────────────────────────
function getCoatPalette(genome) {
  var c = genome.coat;
  if (!c || !c.E) return { base:"#c8a97a", points:null, white:0, merle:false, brindle:false, roan:false, ticked:false };

  var brown    = c.B  && c.B[0]==="b"  && c.B[1]==="b";
  var dilute   = c.D  && c.D[0]==="d"  && c.D[1]==="d";
  var merle    = c.M  && (c.M[0]==="M" || c.M[1]==="M");
  var dblMerle = c.M  && c.M[0]==="M"  && c.M[1]==="M";
  var harl     = merle && c.H && (c.H[0]==="H" || c.H[1]==="H");
  var brindle  = c.K  && (c.K[0]==="kbr"||c.K[1]==="kbr") && !(c.K[0]==="KB"||c.K[1]==="KB");
  var intensity= c.I  && c.I[0]==="i"  && c.I[1]==="i";

  // White spotting level 0-1
  var white = 0;
  if (c.S) {
    var s0=c.S[0], s1=c.S[1];
    if (s0==="sw"||s1==="sw") white=0.85;
    else if (s0==="sp"||s1==="sp") white=0.45;
    else if (s0==="si"||s1==="si") white=0.25;
    else if (s0!=="S"||s1!=="S") white=0.12;
  }
  var roan   = !!(c.T && (c.T[0]==="TR"||c.T[1]==="TR") && white>0);
  var ticked = !!(c.T && (c.T[0]==="T"||c.T[1]==="T") && white>0);

  // Base colors by genetics
  var BLACK  = brown&&dilute?"#a89080":brown?"#7b4f3a":dilute?"#8a96a8":"#2a2018";
  var TAN    = brown&&dilute?"#d4b89a":dilute?"#c8b89a":"#c8833a";
  var RED    = intensity?"#f0d090":dilute?"#d4b87a":"#d4783a";
  var CREAM  = "#f0e8c8";
  var WOLF   = "#9a9a7a";

  var base, points=null;

  // Recessive red (ee)
  if (c.E[0]==="e"&&c.E[1]==="e") {
    base = intensity ? CREAM : RED;
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  // Dominant black (KB)
  if (c.K&&(c.K[0]==="KB"||c.K[1]==="KB")) {
    base = BLACK;
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  // A-locus patterns
  var a1 = c.A&&c.A[0];
  var saddle = c.As&&(c.As[0]==="N"||c.As[1]==="N") && a1==="at";
  if (a1==="Ay") { base=RED; return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked}; }
  if (a1==="aw") { base=WOLF; return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked}; }
  if (a1==="at") {
    base   = BLACK;
    points = { color:TAN, saddle:saddle };
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  base = BLACK;
  return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
}

// ── SVG SILHOUETTES ───────────────────────────────────────────────────────
// Each returns an SVG path string for a 200x160 viewBox dog silhouette

var SILHOUETTES = {
  // HERDING — athletic, medium, upright ears (shepherd shape)
  herding: "M30,130 C25,130 20,125 22,115 L24,95 C20,90 18,82 22,75 L28,65 C26,55 30,45 38,42 L48,38 C52,30 60,25 68,27 L78,25 C82,18 90,15 96,18 L104,16 C110,12 118,14 120,20 L122,28 C128,26 133,30 132,38 L130,48 C136,50 140,56 138,64 L134,72 C138,78 138,88 134,94 L136,108 C138,118 134,128 128,130 L120,132 C116,138 108,140 104,134 L100,130 L98,134 C94,140 86,140 82,134 L78,130 C72,134 62,134 58,128 L56,118 C50,120 44,122 42,128 L38,132 Z M68,27 C65,22 68,16 74,15 L80,14 C84,10 90,10 92,15 M88,18 C90,12 96,10 100,14 L104,16",
  
  // HOUND SCENT — long ears, deep chest, sturdy legs (beagle/basset shape)
  hound_scent: "M28,132 C24,132 20,127 22,118 L24,100 C20,94 20,85 24,78 L30,68 C28,58 32,48 40,44 L50,40 C52,32 58,26 66,27 L72,24 C74,16 82,12 90,15 L100,14 C106,10 114,14 116,22 L118,32 C124,32 128,38 126,46 L124,56 C130,60 132,68 130,76 L128,88 C132,96 132,108 128,118 L130,128 C130,135 124,138 118,132 L112,126 L110,132 C108,138 100,140 96,132 L92,126 L78,128 C72,132 64,132 60,126 L56,114 C50,118 44,120 40,126 L36,132 Z M66,27 C60,30 56,38 60,44 M72,24 C66,28 65,36 68,42 M68,42 L60,70 M74,40 L66,68",
  
  // HOUND SIGHT — deep chest, tucked waist, long legs (greyhound shape)
  hound_sight: "M35,128 C32,128 28,123 30,114 L32,100 L30,88 C26,82 26,72 30,65 L36,55 C34,44 40,35 48,33 L56,30 C60,22 68,18 76,20 L86,18 C92,14 100,16 102,24 L104,32 C110,30 114,36 112,44 L110,52 C116,56 118,66 115,74 L112,84 L114,100 C116,112 112,125 106,128 L98,130 C94,136 86,138 82,130 L78,124 L76,130 C72,136 64,136 60,128 L58,116 C52,120 46,120 44,126 L40,130 Z",

  // SPORTING — athletic, medium, floppy ears (retriever/spaniel)
  sporting: "M32,130 C28,130 24,125 26,115 L28,98 C24,92 24,83 28,76 L34,66 C32,55 36,46 44,42 L54,38 C56,30 63,25 71,27 L78,24 C80,16 88,13 95,17 L103,15 C109,11 117,14 118,22 L120,30 C126,29 130,35 129,43 L127,53 C133,57 136,65 133,73 L130,83 L132,98 C134,110 130,126 124,130 L116,132 C112,138 104,140 100,132 L96,126 L94,132 C90,138 82,138 78,130 L74,124 C68,128 60,128 56,122 L54,110 C48,114 42,116 40,124 L36,130 Z M71,27 C65,32 63,42 67,48 M78,24 C72,30 71,40 75,46",

  // TERRIER — compact, alert, upright posture (scottish/fox terrier)
  terrier: "M36,128 C32,128 28,123 30,114 L32,100 C28,94 28,85 32,78 L38,68 C36,58 40,50 48,46 L56,42 C58,34 65,29 73,31 L80,28 C84,20 91,17 97,21 L104,20 C110,16 117,19 118,27 L120,35 C126,34 130,40 128,48 L126,56 C130,60 132,68 129,76 L128,86 L130,100 C132,112 128,124 122,128 L114,130 C110,136 102,138 98,130 L94,124 L92,130 C88,136 80,136 76,128 L72,122 C66,126 58,126 55,120 L52,108 C46,112 40,114 38,122 L36,128 Z M73,31 C70,26 73,19 79,18 L84,17 C87,14 93,14 95,19 M91,22 C93,16 99,14 103,19",

  // TOY — small, rounded, large head proportion (chihuahua/pomeranian)
  toy: "M40,128 C36,128 33,123 35,114 L37,100 C33,94 33,86 37,80 L43,70 C41,60 46,52 54,49 L62,45 C63,37 70,32 78,34 L85,32 C88,24 95,21 101,25 L109,24 C114,20 121,23 122,30 L124,38 C129,37 133,43 131,50 L129,58 C133,63 134,71 131,78 L129,88 L131,102 C132,113 128,124 122,128 L114,130 C110,136 103,137 99,130 L95,124 L93,130 C89,136 82,136 78,128 L74,122 C68,126 61,126 58,120 L56,110 C50,113 44,115 43,122 L40,128 Z M78,34 C73,39 72,47 76,52 M85,32 C80,37 80,46 84,51",

  // WORKING LARGE — broad, powerful, large head (mastiff/rottweiler)
  working: "M25,132 C20,132 16,126 18,116 L20,98 C15,91 15,81 20,74 L27,63 C24,52 30,42 39,38 L51,34 C53,25 62,20 71,22 L80,20 C83,12 92,9 99,14 L108,12 C115,8 124,11 125,20 L127,30 C134,29 139,36 137,45 L134,56 C141,61 144,70 141,79 L138,90 L140,106 C142,119 137,130 130,133 L121,135 C117,142 108,144 103,135 L99,128 L96,136 C92,143 83,142 79,134 L74,127 C67,132 58,132 53,125 L50,112 C43,117 36,119 34,127 L28,133 Z",

  // NON-SPORTING — medium, stocky (bulldog/poodle catchall)
  non_sporting: "M33,130 C28,130 24,124 26,114 L28,97 C23,90 23,80 28,73 L35,62 C32,51 38,41 47,37 L58,33 C60,24 68,19 77,22 L85,19 C89,11 97,9 104,14 L113,12 C119,8 128,12 129,21 L131,31 C138,30 143,37 141,46 L138,57 C144,62 146,72 142,81 L139,92 L141,108 C143,121 138,132 131,135 L122,137 C117,144 108,146 103,136 L99,129 L96,137 C91,144 82,143 78,135 L73,127 C66,132 57,132 52,124 L49,111 C42,116 34,118 32,127 L33,130 Z",
};

function getGroupSilhouette(group, breedName) {
  var n = (breedName||"").toLowerCase();
  var g = (group||"").toLowerCase();
  if (g==="hound") {
    // sight hounds
    if (/greyhound|whippet|saluki|afghan|borzoi|azawakh|sloughi|galgo|pharaoh|ibizan|cirneco|chart|deerhound|irish wolfhound/.test(n))
      return SILHOUETTES.hound_sight;
    return SILHOUETTES.hound_scent;
  }
  if (g==="herding")     return SILHOUETTES.herding;
  if (g==="sporting")    return SILHOUETTES.sporting;
  if (g==="terrier")     return SILHOUETTES.terrier;
  if (g==="toy")         return SILHOUETTES.toy;
  if (g==="working")     return SILHOUETTES.working;
  if (g==="non-sporting")return SILHOUETTES.non_sporting;
  return SILHOUETTES.working;
}

// Generate merle patches as SVG elements
function renderMerlePatches(palette, w, h) {
  if (!palette.merle) return "";
  var patches = [];
  var seed = 42;
  function rng() { seed=(seed*1664525+1013904223)&0xffffffff; return Math.abs(seed)/0xffffffff; }
  var merleColor = palette.dblMerle ? "#e8e8f0" : palette.harl ? "#f0f0f0" : lightenColor(palette.base, 0.55);
  for (var i=0; i<(palette.dblMerle?18:10); i++) {
    var cx=30+rng()*140, cy=30+rng()*100;
    var rx=8+rng()*20, ry=5+rng()*14;
    var rot=rng()*180;
    patches.push('<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" transform="rotate('+rot+','+cx+','+cy+')" fill="'+merleColor+'" opacity="0.55"/>');
  }
  return patches.join("");
}

function lightenColor(hex, amt) {
  hex=hex.replace("#","");
  var r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
  r=Math.min(255,Math.round(r+(255-r)*amt));
  g=Math.min(255,Math.round(g+(255-g)*amt));
  b=Math.min(255,Math.round(b+(255-b)*amt));
  return "#"+[r,g,b].map(function(x){return x.toString(16).padStart(2,"0");}).join("");
}

function darkenColor(hex, amt) {
  hex=hex.replace("#","");
  var r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
  r=Math.max(0,Math.round(r*(1-amt)));
  g=Math.max(0,Math.round(g*(1-amt)));
  b=Math.max(0,Math.round(b*(1-amt)));
  return "#"+[r,g,b].map(function(x){return x.toString(16).padStart(2,"0");}).join("");
}

// Main SVG renderer
function DogSilhouette(_ref_sil) {
  var animal = _ref_sil.animal;
  var genome = animal.genome;
  var group  = animal.group||"Working";
  var breed  = animal.breed||"";
  var W=200, H=160;

  var palette = getCoatPalette(genome);
  var path    = getGroupSilhouette(group, breed);
  var silId   = "sil_"+animal.id;
  var clipId  = "clip_"+animal.id;

  // Background card color
  var bgColor = lightenColor(palette.base, 0.82);

  // Brindle stripes as a pattern
  var brindlePattern = palette.brindle ? (
    '<defs>'+
    '<pattern id="brindle_'+animal.id+'" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">'+
    '<rect width="10" height="10" fill="'+palette.base+'"/>'+
    '<rect y="0" width="4" height="10" fill="'+darkenColor(palette.base,0.35)+'" opacity="0.6"/>'+
    '</pattern>'+
    '</defs>'
  ) : '';

  var fillColor = palette.brindle ? 'url(#brindle_'+animal.id+')' : palette.base;

  // Tan points overlay — saddle or & tan
  var tanPointsEl = "";
  if (palette.points) {
    var tc = palette.points.color;
    if (palette.points.saddle) {
      // Saddle pattern: tan on legs, face, under belly — black saddle on back
      tanPointsEl =
        '<ellipse cx="50" cy="105" rx="10" ry="20" fill="'+tc+'" opacity="0.85"/>'+  // front left leg
        '<ellipse cx="68" cy="108" rx="10" ry="18" fill="'+tc+'" opacity="0.85"/>'+  // front right leg
        '<ellipse cx="128" cy="108" rx="10" ry="20" fill="'+tc+'" opacity="0.85"/>'+// rear left leg
        '<ellipse cx="146" cy="105" rx="10" ry="18" fill="'+tc+'" opacity="0.85"/>'+// rear right leg
        '<ellipse cx="95" cy="58" rx="12" ry="9" fill="'+tc+'" opacity="0.7"/>'+    // face
        '<ellipse cx="100" cy="90" rx="18" ry="8" fill="'+tc+'" opacity="0.5"/>';   // belly
    } else {
      // Black & Tan: tan eyebrows, cheeks, legs, chest
      tanPointsEl =
        '<ellipse cx="88" cy="50" rx="5" ry="3" fill="'+tc+'" opacity="0.9"/>'+     // L eyebrow
        '<ellipse cx="104" cy="50" rx="5" ry="3" fill="'+tc+'" opacity="0.9"/>'+    // R eyebrow
        '<ellipse cx="92" cy="60" rx="7" ry="5" fill="'+tc+'" opacity="0.75"/>'+    // L cheek
        '<ellipse cx="108" cy="60" rx="7" ry="5" fill="'+tc+'" opacity="0.75"/>'+   // R cheek
        '<ellipse cx="50" cy="105" rx="9" ry="18" fill="'+tc+'" opacity="0.85"/>'+  // front left
        '<ellipse cx="68" cy="108" rx="9" ry="16" fill="'+tc+'" opacity="0.85"/>'+  // front right
        '<ellipse cx="130" cy="108" rx="9" ry="18" fill="'+tc+'" opacity="0.85"/>'+// rear left
        '<ellipse cx="147" cy="105" rx="9" ry="16" fill="'+tc+'" opacity="0.85"/>'+// rear right
        '<ellipse cx="100" cy="82" rx="14" ry="7" fill="'+tc+'" opacity="0.55"/>';  // chest
    }
  }

  // White spotting overlay
  var whiteEl = "";
  if (palette.white > 0) {
    var w = palette.white;
    var wc = palette.roan ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.88)";
    if (w >= 0.8) {
      // Extreme white — almost all white with color on head/tail only
      whiteEl = '<ellipse cx="100" cy="95" rx="68" ry="45" fill="'+wc+'"/>'+
                '<ellipse cx="100" cy="115" rx="58" ry="22" fill="'+wc+'"/>';
    } else if (w >= 0.4) {
      // Piebald — large white patches on body
      whiteEl = '<ellipse cx="100" cy="105" rx="50" ry="28" fill="'+wc+'"/>'+
                '<ellipse cx="80" cy="85" rx="20" ry="15" fill="'+wc+'"/>'+
                '<ellipse cx="50" cy="110" rx="12" ry="22" fill="'+wc+'"/>'+
                '<ellipse cx="148" cy="110" rx="12" ry="22" fill="'+wc+'"/>';
    } else if (w >= 0.2) {
      // Irish white — chest, paws, collar
      whiteEl = '<ellipse cx="100" cy="100" rx="22" ry="12" fill="'+wc+'"/>'+  // chest
                '<ellipse cx="50" cy="122" rx="9" ry="8" fill="'+wc+'"/>'+     // front paws
                '<ellipse cx="68" cy="124" rx="9" ry="8" fill="'+wc+'"/>'+
                '<ellipse cx="130" cy="122" rx="9" ry="8" fill="'+wc+'"/>'+    // rear paws
                '<ellipse cx="148" cy="124" rx="9" ry="8" fill="'+wc+'"/>';
    } else {
      // Minimal white — just a blaze and small chest spot
      whiteEl = '<ellipse cx="96" cy="48" rx="5" ry="8" fill="'+wc+'"/>'+      // blaze
                '<ellipse cx="100" cy="95" rx="10" ry="7" fill="'+wc+'"/>';    // chest spot
    }
  }

  // Ticking dots on white areas
  var tickEl = "";
  if (palette.ticked && palette.white > 0) {
    var dots = [];
    var tseed = 77;
    function trng() { tseed=(tseed*1664525+1013904223)&0xffffffff; return Math.abs(tseed)/0xffffffff; }
    for (var ti=0; ti<20; ti++) {
      var tx=30+trng()*140, ty=60+trng()*80;
      dots.push('<circle cx="'+tx+'" cy="'+ty+'" r="2" fill="'+palette.base+'" opacity="0.6"/>');
    }
    tickEl = dots.join("");
  }

  // Eyes
  var eyeColor = "#3a2010";
  var eyesEl =
    '<ellipse cx="90" cy="54" rx="4" ry="4" fill="'+eyeColor+'"/>'+
    '<ellipse cx="106" cy="54" rx="4" ry="4" fill="'+eyeColor+'"/>'+
    '<ellipse cx="91" cy="53" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.6"/>'+
    '<ellipse cx="107" cy="53" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.6"/>';

  // Nose
  var noseEl = '<ellipse cx="98" cy="66" rx="5" ry="3.5" fill="'+darkenColor(palette.base,0.6)+'"/>';

  var merleEl = renderMerlePatches(palette, W, H);

  var svgStr =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" style="display:block">'+
      brindlePattern+
      '<defs>'+
        '<clipPath id="'+clipId+'">'+
          '<path d="'+path+'"/>'+
        '</clipPath>'+
      '</defs>'+
      '<rect width="'+W+'" height="'+H+'" fill="#3a2a18"/>'+
      // Base coat fill
      '<path d="'+path+'" fill="'+fillColor+'" stroke="'+darkenColor(palette.base,0.25)+'" stroke-width="1.5"/>'+
      // Clip group for all overlays
      '<g clip-path="url(#'+clipId+')">'+
        tanPointsEl+
        whiteEl+
        merleEl+
        tickEl+
        eyesEl+
        noseEl+
      '</g>'+
      // Outline on top for crispness
      '<path d="'+path+'" fill="none" stroke="'+darkenColor(palette.base,0.4)+'" stroke-width="1.5"/>'+
    '</svg>';

  return React.createElement("div", {
    dangerouslySetInnerHTML: { __html: svgStr },
    style: { display:"inline-block", borderRadius:7, overflow:"hidden" }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// ── BREED PHOTOS ─────────────────────────────────────────────────────────────

function BreedPhotoModal(_ref_bpm) {
  var photoUrl = _ref_bpm.photoUrl, breedName = _ref_bpm.breedName, onClose = _ref_bpm.onClose;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: { position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:9999,
      background:"rgba(0,0,0,0.92)", display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center" }
  },
    /*#__PURE__*/React.createElement("div", {
      onClick: function(e){ e.stopPropagation(); },
      style: { position:"relative", maxWidth:"90vw", maxHeight:"85vh" }
    },
      /*#__PURE__*/React.createElement("img", {
        src: photoUrl, alt: breedName,
        style: { maxWidth:"90vw", maxHeight:"80vh", objectFit:"contain",
          borderRadius:12, display:"block", boxShadow:"0 0 60px rgba(0,0,0,0.8)" }
      }),
      /*#__PURE__*/React.createElement("div", {
        style: { textAlign:"center", color:"#b09070", marginTop:10, fontSize:"0.9rem",
          fontStyle:"italic" }
      }, breedName)
    ),
    /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: { position:"fixed", top:16, right:16, background:"#443828",
        border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:"50%",
        width:36, height:36, fontSize:"1.1rem", cursor:"pointer",
        display:"flex", alignItems:"center", justifyContent:"center" }
    }, "✕")
  );
}

function BreedPhoto(_ref_bp) {
  var animal = _ref_bp.animal;
  var _useState_bp = _slicedToArray(useState(false), 2),
    imgErr = _useState_bp[0], setImgErr = _useState_bp[1];
  var _useState_bp2 = _slicedToArray(useState(false), 2),
    showModal = _useState_bp2[0], setShowModal = _useState_bp2[1];
  var _useState_bp3 = _slicedToArray(useState(null), 2),
    fetchedUrl = _useState_bp3[0], setFetchedUrl = _useState_bp3[1];
  var breedName = animal.breed || "";
  var staticUrl = BREED_PHOTOS[breedName] || null;
  useEffect(function() {
    if (!staticUrl && DOG_CEO_MAP[breedName]) {
      fetchDogPhoto(breedName, function(url) { setFetchedUrl(url); }, function() {});
    }
  }, [breedName]);
  var photoUrl = staticUrl || fetchedUrl;
  if (!photoUrl || imgErr) {
    return /*#__PURE__*/React.createElement("div", {
      style: { display:"flex", justifyContent:"flex-end", marginBottom:6 }
    }, /*#__PURE__*/React.createElement("span", {
      style: { fontSize:"1.4rem", opacity:0.25 }
    }, "🐕"));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null,
    showModal && /*#__PURE__*/React.createElement(BreedPhotoModal, {
      photoUrl: photoUrl, breedName: breedName,
      onClose: function(){ setShowModal(false); }
    }),
    /*#__PURE__*/React.createElement("div", {
      style: { display:"flex", justifyContent:"flex-end", marginBottom:6 }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); setShowModal(true); },
      title: "View " + breedName + " photo",
      style: { background:"#1a1410", border:"1px solid #4a3a28",
        borderRadius:6, padding:"3px 8px", cursor:"pointer",
        color:"#b09070", fontSize:"0.75rem", display:"flex",
        alignItems:"center", gap:4 }
    }, "📷 Photo"))
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// ── ANIMAL CARD ───────────────────────────────────────────────
function Card(_ref0) {
  var _animal$healthIssues, _animal$lethalWarning, _animal$mutations2;
  var animal = _ref0.animal,
    onSelect = _ref0.onSelect,
    isSelected = _ref0.isSelected,
    onRemove = _ref0.onRemove,
    onRename = _ref0.onRename,
    ineligibleReason = _ref0.ineligibleReason,
    fullHeight = _ref0.fullHeight,
    onStud = _ref0.onStud,
    onSell = _ref0.onSell,
    onRetire = _ref0.onRetire;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDNA = _useState2[0],
    setShowDNA = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    editing = _useState4[0],
    setEditing = _useState4[1];
  var _useState5 = useState(animal.name),
    _useState6 = _slicedToArray(_useState5, 2),
    nameVal = _useState6[0],
    setNameVal = _useState6[1];
  var submitRename = function submitRename(e) {
    e.stopPropagation();
    if (nameVal.trim()) onRename && onRename(animal.id, nameVal.trim());
    setEditing(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showDNA && /*#__PURE__*/React.createElement(DNAModal, {
    animal: animal,
    onClose: function onClose() {
      return setShowDNA(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onSelect && onSelect(animal);
    },
    style: {
      background: isSelected ? "#6a4a28" : "#4a3820",
      border: "1px solid " + (isSelected ? "#d4942a" : ineligibleReason && onSelect ? "#4a3a28" : "#6a5238"),
      borderRadius: 10,
      padding: 16,
      cursor: onSelect ? (ineligibleReason ? "not-allowed" : "pointer") : "default",
      transition: "border-color 0.15s, background 0.15s",
      opacity: ineligibleReason && onSelect ? 0.65 : 1,
      display: "flex",
      flexDirection: "column",
      height: fullHeight ? "100%" : "auto",
      boxSizing: "border-box",
      overflow: "auto",
      boxShadow: isSelected ? "0 0 14px rgba(212,148,42,0.25)" : "0 2px 6px rgba(0,0,0,0.4)"
    }
  },
  /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }
  },
    /*#__PURE__*/React.createElement("div", { style: { display:"flex", alignItems:"center", gap:8 } },
      /*#__PURE__*/React.createElement("div", {
        style: { fontSize:"2rem", lineHeight:1 }
      }, animal.sex === "M" ? "🐕" : "🐩"),
      /*#__PURE__*/React.createElement(BreedPhoto, { animal: animal })
    ),
    onSelect && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onSelect && onSelect(animal); },
      style: {
        background: isSelected ? "#d4942a" : "#2e1e08",
        border: "2px solid " + (isSelected ? "#d4942a" : "#6a5238"),
        color: isSelected ? "#100d08" : "#8a7055",
        borderRadius: 6, padding: "4px 12px", cursor: "pointer",
        fontSize: "0.78rem", fontWeight: "bold"
      }
    }, isSelected ? "✓ Selected" : "Select")
  )),
  (onStud || onSell || onRetire) && /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", gap:4, marginBottom:8 },
    onClick: function(e){ e.stopPropagation(); }
  },
    animal.sex === "M" && onStud && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onStud(animal); },
      style: { flex:1, background: animal.isStud?"#2a1e14":"#141008", border:"1px solid "+(animal.isStud?"#22c55e":"#4a3a28"),
        color: animal.isStud?"#22c55e":"#8a7055", borderRadius:5, padding:"5px 0", cursor:"pointer", fontSize:"0.8rem", fontWeight:"bold" }
    }, animal.isStud ? "\uD83D\uDC3E Stud \u2713" : "\uD83D\uDC3E Stud"),
    onSell && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onSell(animal); },
      style: { flex:1, background: animal.forSale?"#2a1e14":"#141008", border:"1px solid "+(animal.forSale?"#d4860a":"#4a3a28"),
        color: animal.forSale?"#d4860a":"#8a7055", borderRadius:5, padding:"5px 0", cursor:"pointer", fontSize:"0.8rem", fontWeight:"bold" }
    }, animal.forSale ? "\uD83D\uDCB0 Listed" : "\uD83D\uDCB0 Sell"),
    onRetire && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onRetire(animal); },
      style: { flex:1, background:"#141008", border:"1px solid #4a3a28", color:"#8a7055",
        borderRadius:5, padding:"3px 0", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, "\uD83C\uDFE1 Retire")
  ),
  /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, editing ? /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: nameVal,
    onChange: function onChange(e) {
      return setNameVal(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") submitRename(e);
      if (e.key === "Escape") {
        setEditing(false);
        setNameVal(animal.name);
      }
    },
    autoFocus: true,
    style: {
      background: "#1a1410",
      border: "1px solid #d4942a",
      color: "#f1f5f9",
      borderRadius: 4,
      padding: "2px 6px",
      fontSize: "0.95rem",
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: submitRename,
    style: {
      background: "#3a2810",
      border: "1px solid #d4942a",
      color: "#d4942a",
      borderRadius: 4,
      padding: "2px 6px",
      cursor: "pointer",
      fontSize: "0.72rem"
    }
  }, "\u2713")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#f1f5f9",
      fontWeight: "bold",
      fontSize: "1.1rem"
    }
  }, animal.name), onRename && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setEditing(true);
      setNameVal(animal.name);
    },
    style: {
      background: "none",
      border: "none",
      color: "#6b5038",
      cursor: "pointer",
      fontSize: "0.78rem",
      padding: "1px 3px",
      lineHeight: 1
    },
    title: "Rename"
  }, "\u270F\uFE0F")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b09070",
      fontSize: "0.85rem"
    }
  }, animal.breed, " \xB7 ", animal.sex === "M" ? "♂ Male" : "♀ Female", " \xB7 Gen ", animal.generation)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      alignItems: "flex-start"
    }
  }, isSelected && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#d4942a",
      fontSize: "0.72rem",
      fontWeight: "bold"
    }
  }, "\u2713 SEL"), onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      if (window.confirm("Remove " + animal.name + " from your kennel? This cannot be undone.")) {
        onRemove(animal.id);
      }
    },
    style: {
      background: "none",
      border: "1px solid #6b5038",
      color: "#8a7055",
      borderRadius: 4,
      width: 20,
      height: 20,
      cursor: "pointer",
      fontSize: "0.78rem",
      padding: 0,
      lineHeight: 1
    },
    title: "Remove dog"
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      background: "#1a1410",
      border: "1px solid #3a2810",
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: "0.72rem",
      color: "#b09070",
      marginBottom: 8
    }
  },
    /*#__PURE__*/React.createElement("span", {
      style: { display:"inline-block", background:"#1a1410", border:"1px solid #3a2810",
        borderRadius:4, padding:"3px 10px", fontSize:"0.82rem", color:"#b09070", marginRight:4 }
    },
      (function(){
        var swatchColor = getCoatSwatch(animal.coatColor);
        return swatchColor ? /*#__PURE__*/React.createElement(React.Fragment, null,
          /*#__PURE__*/React.createElement("span", {
            style: { display:"inline-block", width:10, height:10, borderRadius:"50%",
              background: swatchColor, border:"1px solid rgba(255,255,255,0.2)",
              marginRight:5, verticalAlign:"middle" }
          }),
          animal.coatColor ? animal.coatColor.split(" \xB7 ")[0] : "Unknown"
        ) : (animal.coatColor ? animal.coatColor.split(" \xB7 ")[0] : "Unknown");
      })()
    ),
    animal.coatColor && animal.coatColor.includes(" \xB7 ") && /*#__PURE__*/React.createElement("span", {
      style: { display:"inline-block", background:"#1a1410", border:"1px solid #4a3a28",
        borderRadius:4, padding:"3px 10px", fontSize:"0.82rem", color:"#f0e6d3" }
    }, animal.coatColor.split(" \xB7 ").slice(1).join(" \xB7 "))
  ), (function() {
    var stage = getAgeStage(animal.ageMonths || 0);
    var lifespanYrs = animal.lifespan ? Math.round(animal.lifespan / 12 * 10) / 10 : "?";
    var ageYrs = animal.ageMonths ? Math.round(animal.ageMonths / 12 * 10) / 10 : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: { display: "flex", gap: 6, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }
    },
      /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#1a1410", border: "1px solid " + stage.color,
          borderRadius: 4, padding: "3px 10px", fontSize: "0.82rem", color: stage.color, fontWeight: "bold"
        }
      }, stage.label),
      /*#__PURE__*/React.createElement("span", {
        style: { color: "#b09070", fontSize: "0.82rem" }
      }, ageYrs + " / " + lifespanYrs + " yrs"),
      animal.retired && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#481808", border: "1px solid #ef4444",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.8rem", color: "#fca5a5"
        }
      }, "\uD83C\uDFF4 Retired"),
      animal.sick && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#2d1a00", border: "1px solid #d4860a",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.8rem", color: "#f0c040"
        }
      }, "\uD83E\uDD22 Sick"),
      animal.injured && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#2d1a00", border: "1px solid #f97316",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.8rem", color: "#fdba74"
        }
      }, "\uD83E\uDE79 Injured")
    );
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 8
    }
},
  // Condensed stats row
  /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6,
      background: "#1a1410", borderRadius: 5, padding: "5px 8px" }
  },
    /*#__PURE__*/React.createElement("span", { style: { color: healthColor(animal.healthScore), fontWeight: "bold", fontSize: "0.95rem" } }, "\u2764\uFE0F ", animal.healthScore),
    /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28" } }, "|"),
    /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontWeight: "bold", fontSize: "0.95rem" } }, "\u26A1 ", animal.perfScore),
    /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28" } }, "|"),
    /*#__PURE__*/React.createElement("span", { style: { color: coiColor(animal.coi), fontWeight: "bold", fontSize: "0.95rem" } }, "COI ", animal.coi, "%")
  ),
  (function() {
    var sz = getCurrentSize(animal);
    var variant = animal.sizeVariant ? getSizeVariantInfo(animal.sizeVariant) : null;
    return /*#__PURE__*/React.createElement("div", {
      style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
        background: "#1a1410", borderRadius: 5, padding: "5px 8px", flexWrap: "wrap" }
    },
      /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.82rem" } }, "\u2696\uFE0F"),
      sz.mature
        ? /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontSize: "0.82rem", fontWeight: "bold" } }, sz.currentW, " lbs")
        : /*#__PURE__*/React.createElement("span", { style: { color: "#8a7055", fontSize: "0.78rem" } },
            /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontWeight: "bold" } }, sz.currentW, " lbs"),
            " \u2192 ~", sz.adultW, " lbs"
          ),
      /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28" } }, "|"),
      /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.82rem" } }, "\uD83D\uDCCF"),
      sz.mature
        ? /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontSize: "0.82rem", fontWeight: "bold" } }, sz.currentH, "\u2033")
        : /*#__PURE__*/React.createElement("span", { style: { color: "#8a7055", fontSize: "0.78rem" } },
            /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontWeight: "bold" } }, sz.currentH, "\u2033"),
            " \u2192 ~", sz.adultH, "\u2033"
          ),
      variant && /*#__PURE__*/React.createElement("span", {
        style: { color: variant.color, fontSize: "0.72rem", fontWeight: "bold",
          marginLeft: 4, border: "1px solid "+variant.color, borderRadius: 3, padding: "1px 5px" },
        title: variant.health
      }, variant.label)
    );
  })(),
  /*#__PURE__*/React.createElement("div", {
    onClick: function(e){ e.stopPropagation(); setShowDNA(true); },
    style: { fontFamily: "monospace", fontSize: "0.78rem", color: "#d4942a", background: "#1a1410",
      borderRadius: 4, padding: "5px 10px", marginBottom: 7, overflow: "hidden",
      textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: "bold", letterSpacing: "0.04em",
      border: "1px solid #3a2810", cursor: "pointer" },
    title: "Click to view Full DNA Panel"
  }, "\uD83E\uDDEC ", animal.vinStr),
  (function() {
    if (animal.sex !== "F" || animal.retired) return null;
    var hs = getHeatStatus(animal, Date.now());
    if (!hs) return null;
    if (hs.status === "in_heat") {
      return /*#__PURE__*/React.createElement("div", {
        style: { display: "inline-block", background: "#3a2008", border: "1px solid #f97316",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.82rem", color: "#fb923c",
          fontWeight: "bold", marginBottom: 6 }
      }, "\uD83D\uDD25 In Heat \u2014 ", hs.hoursLeft, "h remaining");
    }
    if (hs.status === "too_young") {
      var monthsOld = Math.floor(animal.ageMonths || 0);
      return /*#__PURE__*/React.createElement("div", {
        style: { display: "inline-block", background: "#1a1410", border: "1px solid #4a3a28",
          borderRadius: 4, padding: "3px 10px", fontSize: "0.82rem", color: "#6b5038", marginBottom: 6 }
      }, "\uD83D\uDCC5 Matures at 18 months", monthsOld > 0 ? " (" + monthsOld + " now)" : "");
    }
    return /*#__PURE__*/React.createElement("div", {
      style: { display: "inline-block", background: "#1a1410", border: "1px solid #3a2810",
        borderRadius: 4, padding: "3px 10px", fontSize: "0.82rem", color: "#8a7055", marginBottom: 6 }
    }, "\uD83D\uDCC5 Next heat in ", hs.daysUntilHeat, hs.daysUntilHeat === 1 ? " day" : " days");
  })()),
  (_animal$healthIssues = animal.healthIssues) === null || _animal$healthIssues === void 0 ? void 0 : _animal$healthIssues.filter(function (i) {
    return i.sev === "high";
  }).map(function (iss, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#481808",
        color: "#fca5a5",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginRight: 3,
        marginBottom: 3
      }
    }, "\u26A0\uFE0F ", iss.name);
  }), (_animal$lethalWarning = animal.lethalWarnings) === null || _animal$lethalWarning === void 0 ? void 0 : _animal$lethalWarning.map(function (w, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#481808",
        color: "#fca5a5",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginRight: 3,
        marginBottom: 3
      }
    }, "\u2620\uFE0F ", w.msg);
  }), ((_animal$mutations2 = animal.mutations) === null || _animal$mutations2 === void 0 ? void 0 : _animal$mutations2.length) > 0 && animal.mutations.map(function (m, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#2d1e0f",
        color: "#fb923c",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginBottom: 3,
        marginRight: 3
      }
    }, "\u26A1 ", m.desc || m.loc, " (from ", m.src, ")");
  }),

  animal.aptitudes && animal.aptitudes.length > 0 && /*#__PURE__*/React.createElement("div", { style: { marginBottom: 10 } },
    /*#__PURE__*/React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 } }, "Aptitudes"),
    /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } },
      animal.aptitudes.map(function(apt, i) {
        var APT_COLORS = {
          "LGD":["#7c3aed","#4c1d95"],"Schutzhund":["#cc2a1a","#7a2010"],"IPO":["#cc2a1a","#7a2010"],
          "PoliceWork":["#1d4ed8","#1e3a8a"],"Military":["#1d4ed8","#1e3a8a"],"Search&Rescue":["#c07010","#78350f"],
          "Herding":["#1a9a40","#1a3a1a"],"Tracking":["#0891b2","#164e63"],"FieldTrials":["#ca8a04","#713f12"],
          "Agility":["#7c3aed","#3b0764"],"Obedience":["#0284c7","#0c4a6e"],"Rally-O":["#0284c7","#0c4a6e"],
          "Flyball":["#ea580c","#7c2d12"],"DockDiving":["#0891b2","#164e63"],"LureCoursing":["#a83060","#500724"],
          "Racing":["#a83060","#500724"],"Draft":["#78716c","#443828"],"SledRacing":["#6b7280","#443828"],
          "Earthdog":["#92400e","#451a03"],"Therapy":["#a83060","#500724"],"Conformation":["#6b5038","#443828"]
        };
        var APT_LABELS = {
          "LGD":"\uD83D\uDC11 LGD","Schutzhund":"\uD83D\uDEE1\uFE0F Schutzhund","IPO":"\uD83D\uDEE1\uFE0F IPO",
          "PoliceWork":"\uD83D\uDC6E Police","Military":"\u2694\uFE0F Military","Search&Rescue":"\uD83D\uDD0D SAR",
          "Herding":"\uD83D\uDC04 Herding","Tracking":"\uD83D\uDC43 Tracking","FieldTrials":"\uD83E\uDD86 Field",
          "Agility":"\u26A1 Agility","Obedience":"\uD83C\uDF93 Obedience","Rally-O":"\uD83C\uDF93 Rally-O",
          "Flyball":"\uD83C\uDFBE Flyball","DockDiving":"\uD83D\uDCA7 Dock","LureCoursing":"\uD83D\uDC07 Lure",
          "Racing":"\uD83C\uDFC1 Racing","Draft":"\uD83D\uDC02 Draft","SledRacing":"\uD83D\uDEF7 Sled",
          "Earthdog":"\uD83D\uDD73\uFE0F Earthdog","Therapy":"\u2764\uFE0F Therapy","Conformation":"\uD83C\uDFC6 Show"
        };
        var cols = APT_COLORS[apt] || ["#6b5038","#443828"];
        return /*#__PURE__*/React.createElement("span", {
          key: i,
          style: { background: cols[1], border: "1px solid " + cols[0], color: cols[0], borderRadius: 4, padding: "2px 7px", fontSize: "0.78rem", fontWeight: "bold", whiteSpace: "nowrap" }
        }, APT_LABELS[apt] || apt);
      })
    )
  ),

  animal.traits && /*#__PURE__*/React.createElement("div", { style: { marginBottom: 10 } },
    /*#__PURE__*/React.createElement("div", { style: { color: "#8a7055", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 } }, "Breed Traits"),
    /*#__PURE__*/React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 14px" } },
      [["intelligence","\uD83E\uDDE0 Intelligence","#d4942a"],["trainability","\uD83C\uDF93 Trainability","#34d399"],
       ["energy","\u26A1 Energy","#e8a020"],["loyalty","\u2764\uFE0F Loyalty","#e870a0"],
       ["sociability","\uD83E\uDD1D Sociability","#34d399"],["preyDrive","\uD83C\uDFAF Prey Drive","#f97316"],
       ["aggression","\u26A0\uFE0F Aggression","#ef4444"],["barkTendency","\uD83D\uDD0A Barking","#e8a020"],
       ["adaptability","\uD83D\uDD04 Adaptability","#d4942a"],["playfulness","\uD83E\uDDF8 Playfulness","#c4956a"]
      ].map(function(row) {
        var key = row[0], label = row[1], color = row[2];
        var val = animal.traits[key];
        if (val === undefined || val === null) return null;
        return /*#__PURE__*/React.createElement("div", { key: key, title: label + ": " + val + "/10" },
          /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1 } },
            /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.75rem", color: "#b09070" } }, label),
            /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.75rem", color: color, fontWeight: "bold" } }, val, "/10")
          ),
          /*#__PURE__*/React.createElement("div", { style: { background: "#1a1410", borderRadius: 2, height: 3 } },
            /*#__PURE__*/React.createElement("div", { style: { background: color, width: (val/10*100) + "%", height: "100%", borderRadius: 2 } })
          )
        );
      })
    )
  ),

);
}

// ── MAIN APP ──────────────────────────────────────────────────

// ── CLOCK COMPONENT ──────────────────────────────────────────
// Shearing window: open for 3 real days starting March 1 and Sept 1 (game months)
// 1 real day = 1 game month, game starts in March (monthIndex 2)
// ── SHEARING MODAL ───────────────────────────────────────────
function ShearingModal(_ref) {
  var onClose=_ref.onClose, ownedLivestock=_ref.ownedLivestock||[],
      sheepSheared=_ref.sheepSheared||{}, onShear=_ref.onShear,
      onShearAll=_ref.onShearAll, gameStartDate=_ref.gameStartDate,
      hasShed=_ref.hasShed;

  var win = getShearingWindow(gameStartDate);
  var sheep = ownedLivestock.filter(function(a){ return a.species==="sheep" && a.sex==="F" && !a.retiredLivestock; });

  function isSheared(a) {
    return win.seasonKey && sheepSheared[a.id] === win.seasonKey;
  }

  var unshearedCount = sheep.filter(function(a){ return !isSheared(a); }).length;

  return React.createElement("div", {
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",
      zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}},
    React.createElement("div", {
      style:{background:"#0a0f1e",border:"1px solid #4a3a28",borderRadius:14,
        width:"min(600px,95vw)",maxHeight:"85vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.8)"}},

      // Header
      React.createElement("div",{style:{display:"flex",alignItems:"center",padding:"14px 18px",
        borderBottom:"1px solid #2e2218",gap:12}},
        React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#f0e6d3",flex:1}},
          "\uD83D\uDC11 Shearing Shed"),
        React.createElement("button",{onClick:onClose,
          style:{background:"transparent",border:"1px solid #4a3a28",color:"#b09070",
            borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.8rem"}},"\u2715 Close")
      ),

      // Status bar
      React.createElement("div",{style:{padding:"10px 18px",borderBottom:"1px solid #2e2218",
        background: win.isOpen ? "#0a1f0a" : "#381808"}},
        win.isOpen
          ? React.createElement("div",{style:{color:"#5aaa30",fontSize:"0.82rem",fontWeight:"bold"}},
              "\uD83D\uDFE2 Shearing window OPEN \u2014 " + win.season + " \u2014 " + win.daysLeft + " day" + (win.daysLeft!==1?"s":"") + " remaining")
          : React.createElement("div",{style:{color:"#f87171",fontSize:"0.82rem",fontWeight:"bold"}},
              "\uD83D\uDD34 Shearing window CLOSED \u2014 Opens in Spring (March) and Fall (September)")
      ),

      // Shear All button
      win.isOpen && unshearedCount > 0 && React.createElement("div",{
        style:{padding:"10px 18px",borderBottom:"1px solid #2e2218",display:"flex",
          alignItems:"center",justifyContent:"space-between"}},
        React.createElement("span",{style:{color:"#b09070",fontSize:"0.78rem"}},
          unshearedCount + " sheep ready to shear"),
        React.createElement("button",{
          onClick:function(){ onShearAll && onShearAll(sheep.filter(function(a){return !isSheared(a);}), win.seasonKey); },
          style:{background:"#1e2a12",border:"1px solid #5aaa30",color:"#5aaa30",
            borderRadius:6,padding:"6px 16px",cursor:"pointer",fontSize:"0.82rem",fontWeight:"bold"}},
          "\u2702\uFE0F Shear All (" + unshearedCount + ")")
      ),

      // Sheep list
      React.createElement("div",{style:{overflowY:"auto",flex:1,padding:"12px 18px"}},
        sheep.length === 0
          ? React.createElement("div",{style:{textAlign:"center",color:"#6b5038",padding:"40px 0"}},
              "No female sheep owned.")
          : sheep.map(function(a) {
              var sheared = isSheared(a);
              var yieldLbs = a.shearYield || (Math.floor(Math.random()*4)+7);
              return React.createElement("div",{key:a.id,
                style:{display:"flex",alignItems:"center",gap:10,padding:"8px 10px",
                  background: sheared ? "#0a1a0a" : "#1a1410",
                  borderRadius:6,border:"1px solid "+(sheared?"#1a7a2a":"#443828"),marginBottom:5}},
                React.createElement("div",{style:{flex:1,fontSize:"0.8rem",color: sheared?"#5aaa30":"#f0e6d3"}},
                  (a.breed||"Sheep") + " \u2014 \u2640 Female"),
                React.createElement("div",{style:{fontSize:"0.72rem",color:"#8a7055",minWidth:80,textAlign:"right"}},
                  sheared ? "\u2714 Sheared this season" : yieldLbs + " lbs est."),
                win.isOpen && !sheared && React.createElement("button",{
                  onClick:function(){ onShear && onShear(a, win.seasonKey); },
                  style:{background:"#0a1a0a",border:"1px solid #22c55e",color:"#5aaa30",
                    borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.72rem"}},
                  "Shear")
              );
            })
      )
    )
  );
}

function getShearingWindow(gameStartDate) {
  var now = Date.now();
  var msPerDay = 24 * 60 * 60 * 1000;
  var daysPassed = Math.floor((now - gameStartDate) / msPerDay);
  var monthIndex = (2 + daysPassed) % 12; // 0=Jan...11=Dec
  // Spring window: months 2,3,4 (March/April/May)
  // Fall window: months 8,9,10 (Sept/Oct/Nov)
  var inSpring = monthIndex >= 2 && monthIndex <= 4;
  var inFall   = monthIndex >= 8 && monthIndex <= 10;
  // Which 3-month window are we in?
  var windowStart = null;
  if (inSpring) windowStart = gameStartDate + (daysPassed - (monthIndex - 2)) * msPerDay;
  if (inFall)   windowStart = gameStartDate + (daysPassed - (monthIndex - 8)) * msPerDay;
  // Window is open for 3 real days from window start
  var isOpen = windowStart && (now - windowStart) < 3 * msPerDay;
  var season = inSpring ? "Spring" : inFall ? "Fall" : null;
  // Days remaining in window
  var daysLeft = windowStart ? Math.max(0, 3 - Math.floor((now - windowStart) / msPerDay)) : 0;
  // Season key for tracking sheared sheep (spring_YYYY or fall_YYYY — we use cycle count)
  var cycle = Math.floor(daysPassed / 6); // new cycle every 6 months
  var seasonKey = season ? season.toLowerCase() + "_" + cycle : null;
  return { isOpen: !!isOpen, season: season, daysLeft: daysLeft, seasonKey: seasonKey };
}

function getGameDate(gameStartDate) {
  var now = Date.now();
  var msPerDay = 24 * 60 * 60 * 1000;
  var daysPassed = Math.floor((now - gameStartDate) / msPerDay);
  var monthIndex = (2 + daysPassed) % 12; // start in March
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var SEASONS = [
    { name:"Winter", emoji:"\u2744\uFE0F", months:[0,1,11] },
    { name:"Spring", emoji:"\uD83C\uDF31", months:[2,3,4] },
    { name:"Summer", emoji:"\u2600\uFE0F",  months:[5,6,7] },
    { name:"Fall",   emoji:"\uD83C\uDF42", months:[8,9,10] }
  ];
  var season = SEASONS.find(function(s){ return s.months.indexOf(monthIndex) > -1; });
  return { month: MONTHS[monthIndex], season: season, monthIndex: monthIndex };
}

function Clock(_ref) {
  var gameStartDate = _ref ? _ref.gameStartDate : null;
  var _n = _slicedToArray(useState(new Date()), 2), now = _n[0], setNow = _n[1];

  useEffect(function() {
    var interval = setInterval(function() { setNow(new Date()); }, 1000);
    return function() { clearInterval(interval); };
  }, []);

  function getNextReset() {
    var n = new Date(now);
    var reset = new Date(now);
    reset.setUTCHours(10, 0, 0, 0);
    if (n >= reset) reset.setUTCDate(reset.getUTCDate() + 1);
    return reset;
  }

  var next = getNextReset();
  var diff = next - now;
  var hh = Math.floor(diff / 3600000);
  var mm = Math.floor((diff % 3600000) / 60000);
  var ss = Math.floor((diff % 60000) / 1000);
  var pad = function(n) { return String(n).padStart(2,'0'); };

  var estTime = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  });

  var gd = getGameDate(gameStartDate || Date.now());
  var seasonColors = { Spring:"#5aaa30", Summer:"#e8a020", Fall:"#f97316", Winter:"#93c5fd" };
  var seasonColor = seasonColors[gd.season.name] || "#f0e6d3";

  return React.createElement('div', {
    style: {
      display: 'flex', alignItems: 'center', gap: 10,
      background: '#2a1e14', border: '1px solid #4a3a28',
      borderRadius: 6, padding: '4px 12px', fontSize: '0.72rem',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)'
    }
  },
    React.createElement('span', {style: {color: seasonColor, fontWeight:'bold'}},
      gd.season.emoji + ' ' + gd.season.name + ' \u2014 ' + gd.month),
    React.createElement('span', {style: {color: '#4a3a28'}},'|'),
    React.createElement('span', {style: {color: '#d4942a'}}, '\uD83D\uDD50 ' + estTime + ' EST'),
    React.createElement('span', {style: {color: '#4a3a28'}},'|'),
    React.createElement('span', {style: {color: '#d4960a'}}, '\u23F1 Reset: ' + pad(hh) + ':' + pad(mm) + ':' + pad(ss))
  );
}

// ── GLOBAL CONSTANTS ──────────────────────────────────────────────────────────
var KENNEL_TYPES = {
  basic:      { label: "Basic Kennel",      capacity: 10,  color: "#8a7055", icon: "🏚️", cost: 500 },
  standard:   { label: "Standard Kennel",   capacity: 25,  color: "#d4942a", icon: "🏠", cost: 1200 },
  commercial: { label: "Commercial Kennel", capacity: 50,  color: "#c4956a", icon: "🏢", cost: 3000 },
  elite:      { label: "Elite Kennel",      capacity: 100, color: "#e8a020", icon: "🏆", cost: 8000 }
};

// ── FACILITIES ────────────────────────────────────────────────

var FACILITIES = {
  barn: {
    label:"Basic Barn", icon:"\uD83C\uDFE0", desc:"General housing for beef cattle.",
    tiers:[
      { name:"Small",      capacity:10,  cost:1500,  upkeep:50  },
      { name:"Standard",   capacity:25,  cost:3500,  upkeep:100 },
      { name:"Large",      capacity:50,  cost:7000,  upkeep:200 },
      { name:"Commercial", capacity:100, cost:15000, upkeep:350 }
    ]
  },
  milking_barn: {
    label:"Milking Barn", icon:"\uD83E\uDD5B", desc:"Required for dairy cow milk production.",
    tiers:[
      { name:"Small",      capacity:8,   cost:3000,  upkeep:80  },
      { name:"Standard",   capacity:20,  cost:7000,  upkeep:160 },
      { name:"Large",      capacity:40,  cost:14000, upkeep:300 },
      { name:"Commercial", capacity:80,  cost:28000, upkeep:550 }
    ]
  },
  stable: {
    label:"Stable", icon:"\uD83D\uDC0E", desc:"1 stall per horse. Horses do not need grazing land.",
    tiers:[
      { name:"4 Stalls",  capacity:4,  cost:5000,  upkeep:120 },
      { name:"8 Stalls",  capacity:8,  cost:9000,  upkeep:220 },
      { name:"16 Stalls", capacity:16, cost:16000, upkeep:400 },
      { name:"32 Stalls", capacity:32, cost:28000, upkeep:700 }
    ]
  },
  chicken_coop: {
    label:"Chicken Coop", icon:"\uD83D\uDC14", desc:"Required for chickens.",
    tiers:[
      { name:"Small",  capacity:20,  cost:500,  upkeep:15 },
      { name:"Medium", capacity:50,  cost:1200, upkeep:30 },
      { name:"Large",  capacity:100, cost:2500, upkeep:55 }
    ]
  },
  pig_pen: {
    label:"Pig Pen", icon:"\uD83D\uDC16", desc:"Required for pigs.",
    tiers:[
      { name:"Small",  capacity:10, cost:800,  upkeep:25 },
      { name:"Medium", capacity:25, cost:2000, upkeep:55 },
      { name:"Large",  capacity:50, cost:4000, upkeep:100 }
    ]
  },
  pond: {
    label:"Pond", icon:"\uD83E\uDD86", desc:"Required for ducks. Caps at Medium.",
    tiers:[
      { name:"Small",  capacity:20, cost:600,  upkeep:15 },
      { name:"Medium", capacity:50, cost:1500, upkeep:35 }
    ]
  },
  shearing_shed: {
    label:"Shearing Shed", icon:"\uD83D\uDC11", desc:"Unlocks wool production. Sheep live on Grazing Land.",
    tiers:[
      { name:"Small",      capacity:15,  cost:1200, upkeep:30  },
      { name:"Standard",   capacity:35,  cost:2800, upkeep:65  },
      { name:"Large",      capacity:70,  cost:5500, upkeep:120 },
      { name:"Commercial", capacity:150, cost:11000,upkeep:220 }
    ]
  },
  grazing_land: {
    label:"Grazing Land", icon:"\uD83C\uDF3E", desc:"Cows (1 acre/2), horses, sheep & goats.",
    tiers:[
      { name:"5 Acres",   capacity:5,   cost:2500,  upkeep:40  },
      { name:"10 Acres",  capacity:10,  cost:4500,  upkeep:75  },
      { name:"25 Acres",  capacity:25,  cost:10000, upkeep:160 },
      { name:"50 Acres",  capacity:50,  cost:18000, upkeep:280 }
    ]
  },
  slaughterhouse: {
    label:"Slaughterhouse", icon:"\uD83E\uDE78", desc:"Unlocks meat processing. Sell pork, beef, lamb and more at market price rather than selling live animals.",
    tiers:[
      { name:"Small",      capacity:10,  cost:4000,  upkeep:120 },
      { name:"Standard",   capacity:25,  cost:9000,  upkeep:250 },
      { name:"Commercial", capacity:50,  cost:18000, upkeep:450 }
    ]
  },
  apiary: {
    label:"Apiary", icon:"\uD83D\uDC1D", desc:"Produces honey for sale. More hives means more honey.",
    tiers:[
      { name:"Small",  capacity:3,  cost:1200, upkeep:30 },
      { name:"Medium", capacity:8,  cost:3000, upkeep:65 },
      { name:"Large",  capacity:16, cost:6000, upkeep:120 }
    ]
  },
  goat_pen: {
    label:"Goat Pen", icon:"\uD83D\uDC10", desc:"Housing for dairy, meat, and dual-purpose goats. Grazing Land determines total herd size.",
    tiers:[
      { name:"Small",      capacity:15,  cost:800,   upkeep:25  },
      { name:"Medium",     capacity:35,  cost:2000,  upkeep:55  },
      { name:"Large",      capacity:75,  cost:4500,  upkeep:110 },
      { name:"Commercial", capacity:150, cost:10000, upkeep:220 }
    ]
  },
  storage_barn: {
    label:"Storage Barn", icon:"\uD83D\uDDC4", desc:"Stores commodities and equipment. Higher tiers hold more.",
    tiers:[
      { name:"Small",      capacity:20,  cost:2000,  upkeep:40  },
      { name:"Standard",   capacity:50,  cost:5000,  upkeep:90  },
      { name:"Large",      capacity:100, cost:10000, upkeep:175 },
      { name:"Commercial", capacity:200, cost:20000, upkeep:320 }
    ]
  }
};

// ── FARM VIEW ─────────────────────────────────────────────────────────────────
function FarmView(_ref) {
  var facilitiesOwned = _ref.facilitiesOwned, kennels = _ref.kennels, animals = _ref.animals,
      ownedLivestock = _ref.ownedLivestock, money = _ref.money, hasWhelpingKennel = _ref.hasWhelpingKennel,
      commodities = _ref.commodities || {}, onClose = _ref.onClose;

  var _tip = _slicedToArray(React.useState(null), 2), tipText = _tip[0], setTipText = _tip[1];
  var _tipPos = _slicedToArray(React.useState({x:0,y:0}), 2), tipPos = _tipPos[0], setTipPos = _tipPos[1];

  var hasFac = function(key) { return !!facilitiesOwned[key]; };
  var facTier = function(key) { return facilitiesOwned[key] ? facilitiesOwned[key].tier : 0; };
  var kennelCount = kennels.length;
  var dogCount = animals.filter(function(a){ return !a.retired; }).length;
  var dogCap = kennels.reduce(function(s,k){ return s + (KENNEL_TYPES[k.type] ? KENNEL_TYPES[k.type].capacity : 10); }, 0);

  var GAP = 14;
  var TILE_W = Math.floor((window.innerWidth - GAP*5) / 4);
  var TILE_H = Math.floor((window.innerHeight - 80 - GAP*5) / 4); // 80 = title+close bar
  var COLS = [GAP, GAP*2+TILE_W, GAP*3+TILE_W*2, GAP*4+TILE_W*3];
  var ROWS = [GAP, GAP*2+TILE_H, GAP*3+TILE_H*2, GAP*4+TILE_H*3];
  var GRID_W = GAP*5 + TILE_W*4, GRID_H = GAP*5 + TILE_H*4;

  function tileStyle(col, row, bg, border) {
    return {
      position:"absolute", left:COLS[col], top:ROWS[row],
      width:TILE_W, height:TILE_H, borderRadius:6, overflow:"hidden",
      background: bg || "#0c1a0d", border:"1.5px solid "+(border||"#1e2a12"),
      cursor:"pointer", transition:"transform 0.12s, filter 0.12s", zIndex:2
    };
  }

  function EmptyPlot(props) {
    return /*#__PURE__*/React.createElement("div", {
      style: tileStyle(props.col, props.row),
      onMouseEnter: function(e){ setTipText(props.tip||"Empty Plot"); },
      onMouseMove: function(e){ setTipPos({x:e.clientX,y:e.clientY}); },
      onMouseLeave: function(){ setTipText(null); }
    },
      /*#__PURE__*/React.createElement("svg", { width:TILE_W, height:TILE_H, viewBox:"0 0 110 110" },
        React.createElement("rect",{x:0,y:0,width:110,height:110,fill:"#0c1a0d",rx:4}),
        React.createElement("line",{x1:0,y1:37,x2:110,y2:37,stroke:"#1e2a12",strokeWidth:0.5}),
        React.createElement("line",{x1:0,y1:73,x2:110,y2:73,stroke:"#1e2a12",strokeWidth:0.5}),
        React.createElement("line",{x1:37,y1:0,x2:37,y2:110,stroke:"#1e2a12",strokeWidth:0.5}),
        React.createElement("line",{x1:73,y1:0,x2:73,y2:110,stroke:"#1e2a12",strokeWidth:0.5}),
        React.createElement("line",{x1:45,y1:55,x2:65,y2:55,stroke:"#1e2a12",strokeWidth:3,strokeLinecap:"round"}),
        React.createElement("line",{x1:55,y1:45,x2:55,y2:65,stroke:"#1e2a12",strokeWidth:3,strokeLinecap:"round"})
      ),
      /*#__PURE__*/React.createElement("span", { style:{position:"absolute",bottom:5,left:0,right:0,textAlign:"center",fontSize:"0.55rem",color:"#1e2a12",letterSpacing:"0.05em",textTransform:"uppercase",fontWeight:"bold"} }, "Build Here")
    );
  }

  function Tile(props) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({}, tileStyle(props.col, props.row, props.bg, props.border),
        props.onClick ? {cursor:"pointer"} : {}),
      onClick: props.onClick || null,
      onMouseEnter: function(){ setTipText(props.tip); },
      onMouseMove: function(e){ setTipPos({x:e.clientX,y:e.clientY}); },
      onMouseLeave: function(){ setTipText(null); }
    },
      /*#__PURE__*/React.createElement("svg", { width:TILE_W, height:TILE_H, viewBox:"0 0 110 110", dangerouslySetInnerHTML:{__html: props.svgInner} }),
      props.badge && /*#__PURE__*/React.createElement("span", { style:{position:"absolute",top:5,left:6,fontSize:"0.52rem",fontWeight:"bold",background:"rgba(0,0,0,0.65)",borderRadius:3,padding:"1px 4px",color:props.color} }, props.badge),
      props.count && /*#__PURE__*/React.createElement("span", { style:{position:"absolute",top:5,right:6,fontSize:"0.52rem",fontWeight:"bold",background:"rgba(0,0,0,0.65)",borderRadius:3,padding:"1px 4px",color:props.color} }, props.count),
      /*#__PURE__*/React.createElement("span", { style:{position:"absolute",bottom:5,left:0,right:0,textAlign:"center",fontSize:"0.55rem",color:props.color||"#f0e6d3",letterSpacing:"0.05em",textTransform:"uppercase",fontWeight:"bold",textShadow:"0 1px 4px rgba(0,0,0,1)"} }, props.label)
    );
  }

  // SVG inner strings for each building
  var SVG = {
    pigPen: '<rect x="0" y="0" width="110" height="110" fill="#221218" rx="4"/><rect x="4" y="4" width="102" height="102" fill="#381808" rx="4"/><line x1="55" y1="4" x2="55" y2="106" stroke="#a83060" stroke-width="2"/><line x1="4" y1="55" x2="106" y2="55" stroke="#a83060" stroke-width="2"/><rect x="4" y="4" width="102" height="102" fill="none" stroke="#a83060" stroke-width="3" rx="4"/><rect x="7" y="7" width="30" height="22" fill="#501828" rx="2"/><rect x="58" y="7" width="30" height="22" fill="#501828" rx="2"/><rect x="7" y="58" width="30" height="22" fill="#501828" rx="2"/><rect x="58" y="58" width="44" height="44" fill="#3e1422" rx="2" stroke="#a83060" stroke-width="1"/>',
    slaughter: '<rect x="0" y="0" width="110" height="110" fill="#120808" rx="4"/><rect x="10" y="28" width="78" height="66" fill="#381808" rx="2"/><polygon points="49,10 88,30 10,30" fill="#3d1414"/><polygon points="49,10 72,22 26,22" fill="#5a1a1a" opacity="0.9"/><rect x="36" y="60" width="26" height="34" fill="#241408" rx="1"/><rect x="12" y="40" width="16" height="12" fill="#381808" rx="1" stroke="#cc2a1a" stroke-width="0.8"/><rect x="70" y="40" width="16" height="12" fill="#381808" rx="1" stroke="#cc2a1a" stroke-width="0.8"/><rect x="82" y="14" width="10" height="44" fill="#241408" rx="3"/><ellipse cx="87" cy="14" rx="5" ry="3" fill="#381808"/><line x1="20" y1="38" x2="80" y2="38" stroke="#7a2010" stroke-width="1.5" opacity="0.6"/><line x1="35" y1="34" x2="35" y2="42" stroke="#cc2a1a" stroke-width="1" opacity="0.5"/><line x1="55" y1="34" x2="55" y2="42" stroke="#cc2a1a" stroke-width="1" opacity="0.5"/>',
    chickCoop: '<rect x="0" y="0" width="110" height="110" fill="#101d0a" rx="4"/><rect x="8" y="24" width="62" height="42" fill="#303e14" rx="3"/><polygon points="39,8 74,26 4,26" fill="#4a7a22"/><rect x="70" y="28" width="30" height="38" fill="#303e14" rx="2"/><line x1="70" y1="47" x2="100" y2="47" stroke="#1a2e0a" stroke-width="1.5"/><rect x="72" y="30" width="12" height="16" fill="#1a2e0a" rx="1"/><rect x="86" y="30" width="12" height="16" fill="#1a2e0a" rx="1"/><rect x="8" y="66" width="92" height="36" fill="#2a1e14" rx="2"/><line x1="28" y1="66" x2="28" y2="102" stroke="#4a6a18" stroke-width="2"/><line x1="48" y1="66" x2="48" y2="102" stroke="#4a6a18" stroke-width="2"/><line x1="68" y1="66" x2="68" y2="102" stroke="#4a6a18" stroke-width="2"/><line x1="88" y1="66" x2="88" y2="102" stroke="#4a6a18" stroke-width="2"/>',
    grazing: '<rect x="0" y="0" width="110" height="110" fill="#091e0a" rx="4"/><rect x="4" y="4" width="102" height="102" fill="#2a1e14" rx="3"/><line x1="4" y1="22" x2="106" y2="22" stroke="#1e2a12" stroke-width="0.8"/><line x1="4" y1="40" x2="106" y2="40" stroke="#1e2a12" stroke-width="0.8"/><line x1="4" y1="58" x2="106" y2="58" stroke="#1e2a12" stroke-width="0.8"/><line x1="4" y1="76" x2="106" y2="76" stroke="#1e2a12" stroke-width="0.8"/><line x1="4" y1="94" x2="106" y2="94" stroke="#1e2a12" stroke-width="0.8"/><line x1="22" y1="4" x2="22" y2="106" stroke="#1e2a12" stroke-width="0.8"/><line x1="40" y1="4" x2="40" y2="106" stroke="#1e2a12" stroke-width="0.8"/><line x1="58" y1="4" x2="58" y2="106" stroke="#1e2a12" stroke-width="0.8"/><line x1="76" y1="4" x2="76" y2="106" stroke="#1e2a12" stroke-width="0.8"/><line x1="94" y1="4" x2="94" y2="106" stroke="#1e2a12" stroke-width="0.8"/><rect x="4" y="4" width="102" height="102" fill="none" stroke="#1a7a2a" stroke-width="2" rx="3"/><rect x="6" y="6" width="28" height="20" fill="#2a1e14" rx="2"/><rect x="40" y="46" width="20" height="8" fill="#3a2810" rx="3" stroke="#d4942a" stroke-width="0.5"/><rect x="42" y="2" width="26" height="4" fill="#1a7a2a" rx="1"/>',
    barn: '<rect x="0" y="0" width="110" height="110" fill="#1c0808" rx="4"/><rect x="8" y="30" width="80" height="66" fill="#561414" rx="2"/><polygon points="48,10 88,32 8,32" fill="#7a1919"/><polygon points="48,10 74,24 22,24" fill="#b91c1c" opacity="0.9"/><rect x="36" y="60" width="24" height="36" fill="#241408" rx="1"/><rect x="10" y="42" width="16" height="12" fill="#443828" rx="1" stroke="#ef4444" stroke-width="0.5"/><rect x="62" y="42" width="16" height="12" fill="#443828" rx="1" stroke="#ef4444" stroke-width="0.5"/><rect x="90" y="18" width="12" height="60" fill="#2d0a0a" rx="4"/><ellipse cx="96" cy="18" rx="6" ry="3.5" fill="#3d0f0f"/>',
    milkBarn: '<rect x="0" y="0" width="110" height="110" fill="#0e1828" rx="4"/><rect x="8" y="28" width="84" height="66" fill="#443828" rx="2"/><polygon points="50,8 92,30 8,30" fill="#3a2810"/><polygon points="50,8 76,22 24,22" fill="#c4801a" opacity="0.8"/><rect x="36" y="58" width="30" height="36" fill="#1a1410" rx="1"/><rect x="10" y="40" width="18" height="14" fill="#0d1f35" rx="1" stroke="#60a5fa" stroke-width="0.5"/><rect x="72" y="40" width="18" height="14" fill="#0d1f35" rx="1" stroke="#60a5fa" stroke-width="0.5"/><rect x="10" y="58" width="22" height="12" fill="#162840" rx="2" stroke="#c4801a" stroke-width="0.5"/><rect x="78" y="58" width="22" height="12" fill="#162840" rx="2" stroke="#c4801a" stroke-width="0.5"/><rect x="86" y="44" width="20" height="40" fill="#443828" rx="2" stroke="#c4801a" stroke-width="0.5"/>',
    apiary: '<rect x="0" y="0" width="110" height="110" fill="#2a1e14" rx="4"/><ellipse cx="28" cy="72" rx="14" ry="18" fill="#8b6914"/><ellipse cx="28" cy="68" rx="12" ry="14" fill="#a07820"/><line x1="16" y1="66" x2="40" y2="66" stroke="#8a6a20" stroke-width="1.5"/><line x1="18" y1="60" x2="38" y2="60" stroke="#8a6a20" stroke-width="1.5"/><ellipse cx="28" cy="90" rx="16" ry="4" fill="#8a6a20"/><ellipse cx="55" cy="68" rx="14" ry="18" fill="#8b6914"/><ellipse cx="55" cy="64" rx="12" ry="14" fill="#a07820"/><line x1="43" y1="62" x2="67" y2="62" stroke="#8a6a20" stroke-width="1.5"/><line x1="45" y1="56" x2="65" y2="56" stroke="#8a6a20" stroke-width="1.5"/><ellipse cx="55" cy="86" rx="16" ry="4" fill="#8a6a20"/><ellipse cx="82" cy="72" rx="14" ry="18" fill="#8b6914"/><ellipse cx="82" cy="68" rx="12" ry="14" fill="#a07820"/><line x1="70" y1="66" x2="94" y2="66" stroke="#8a6a20" stroke-width="1.5"/><line x1="72" y1="60" x2="92" y2="60" stroke="#8a6a20" stroke-width="1.5"/><ellipse cx="82" cy="90" rx="16" ry="4" fill="#8a6a20"/><ellipse cx="20" cy="38" rx="4" ry="2.5" fill="#e8a020" opacity="0.9"/><ellipse cx="68" cy="28" rx="4" ry="2.5" fill="#e8a020" opacity="0.9"/><ellipse cx="90" cy="40" rx="4" ry="2.5" fill="#e8a020" opacity="0.9"/><circle cx="40" cy="22" r="2.5" fill="#e870a0" opacity="0.6"/><circle cx="62" cy="14" r="3" fill="#e8a020" opacity="0.5"/>',
    pond: '<rect x="0" y="0" width="110" height="110" fill="#141008" rx="4"/><ellipse cx="55" cy="60" rx="50" ry="42" fill="#3a2810"/><ellipse cx="55" cy="60" rx="46" ry="38" fill="#3a2810"/><ellipse cx="55" cy="60" rx="38" ry="30" fill="none" stroke="#8a5a1a" stroke-width="1" opacity="0.6"/><ellipse cx="55" cy="60" rx="50" ry="42" fill="none" stroke="#0369a1" stroke-width="3"/><line x1="12" y1="72" x2="12" y2="44" stroke="#365314" stroke-width="2"/><ellipse cx="12" cy="43" rx="4" ry="7" fill="#4a7c1a" opacity="0.8"/><line x1="96" y1="68" x2="96" y2="46" stroke="#365314" stroke-width="2"/><rect x="48" y="16" width="6" height="22" fill="#4a3010" rx="1"/><rect x="38" y="16" width="26" height="6" fill="#5a3c14" rx="1"/><ellipse cx="42" cy="52" rx="6" ry="4" fill="#f0e6d3" opacity="0.9"/><circle cx="46" cy="50" r="4" fill="#f0e6d3" opacity="0.9"/><polygon points="49,49 53,50 49,51" fill="#e8a020"/><ellipse cx="64" cy="66" rx="5" ry="3.5" fill="#f0e6d3" opacity="0.8"/><circle cx="68" cy="64" r="3.5" fill="#f0e6d3" opacity="0.8"/>',
    storageBarn: '<rect x="0" y="0" width="110" height="110" fill="#0e1008" rx="4"/><rect x="8" y="28" width="80" height="68" fill="#242a10" rx="2"/><polygon points="48,10 88,30 8,30" fill="#303e14"/><polygon points="48,10 72,22 24,22" fill="#4a6a18" opacity="0.9"/><rect x="32" y="58" width="32" height="38" fill="#0e1008" rx="1"/><line x1="48" y1="58" x2="48" y2="96" stroke="#242a10" stroke-width="1.5"/><rect x="10" y="40" width="16" height="12" fill="#1a2a0a" rx="1" stroke="#84cc16" stroke-width="0.5"/><rect x="62" y="40" width="16" height="12" fill="#1a2a0a" rx="1" stroke="#84cc16" stroke-width="0.5"/><rect x="10" y="60" width="18" height="14" fill="#1e2a0c" rx="1" stroke="#4a6a18" stroke-width="0.5"/><rect x="70" y="60" width="18" height="14" fill="#1e2a0c" rx="1" stroke="#4a6a18" stroke-width="0.5"/><rect x="90" y="20" width="14" height="62" fill="#1e2a0c" rx="4"/><ellipse cx="97" cy="20" rx="7" ry="4" fill="#303e14"/>',
    whelping: '<rect x="0" y="0" width="110" height="110" fill="#442e18" rx="4"/><rect x="14" y="26" width="82" height="68" fill="#442e18" rx="3"/><polygon points="55,10 96,28 14,28" fill="#442e18"/><polygon points="55,10 78,22 32,22" fill="#3d2270"/><rect x="20" y="38" width="20" height="16" fill="#2d1a4a" rx="2" stroke="#c4956a" stroke-width="0.8"/><rect x="70" y="38" width="20" height="16" fill="#2d1a4a" rx="2" stroke="#c4956a" stroke-width="0.8"/><rect x="21" y="39" width="18" height="14" fill="#4c1d95" opacity="0.4" rx="1"/><rect x="71" y="39" width="18" height="14" fill="#4c1d95" opacity="0.4" rx="1"/><rect x="44" y="64" width="22" height="30" fill="#442e18" rx="2"/>',
    shearing: '<rect x="0" y="0" width="110" height="110" fill="#1a1408" rx="4"/><rect x="6" y="24" width="88" height="68" fill="#362a18" rx="2"/><polygon points="50,8 94,26 6,26" fill="#4e3214"/><rect x="34" y="60" width="32" height="32" fill="#241408" rx="1"/><rect x="8" y="36" width="20" height="16" fill="#1a1808" rx="1" stroke="#c07010" stroke-width="0.5"/><rect x="74" y="36" width="20" height="16" fill="#1a1808" rx="1" stroke="#c07010" stroke-width="0.5"/><line x1="6" y1="60" x2="94" y2="60" stroke="#4e3214" stroke-width="1.5"/><rect x="8" y="72" width="22" height="18" fill="#241a08" rx="2" stroke="#c07010" stroke-width="0.5"/><rect x="72" y="72" width="22" height="18" fill="#241a08" rx="2" stroke="#c07010" stroke-width="0.5"/>',
    kennel: '<rect x="0" y="0" width="110" height="110" fill="#241408" rx="4"/><rect x="16" y="32" width="72" height="62" fill="#4a1212" rx="2"/><polygon points="52,14 88,34 16,34" fill="#6b1717"/><polygon points="52,14 76,26 28,26" fill="#991b1b" opacity="0.9"/><rect x="40" y="62" width="24" height="32" fill="#241408" rx="1"/><rect x="18" y="44" width="14" height="10" fill="#443828" rx="1" stroke="#ef4444" stroke-width="0.5"/><rect x="72" y="44" width="14" height="10" fill="#443828" rx="1" stroke="#ef4444" stroke-width="0.5"/><rect x="90" y="22" width="14" height="58" fill="#2d0a0a" rx="4"/><ellipse cx="97" cy="22" rx="7" ry="4" fill="#3d0f0f"/>',
    stable: '<rect x="0" y="0" width="110" height="110" fill="#180f06" rx="4"/><rect x="4" y="14" width="102" height="42" fill="#381e08" rx="2"/><rect x="4" y="60" width="102" height="42" fill="#381e08" rx="2"/><rect x="42" y="14" width="26" height="88" fill="#241408" rx="1"/><polygon points="55,4 106,16 4,16" fill="#4a2a0a"/><line x1="20" y1="14" x2="20" y2="56" stroke="#241408" stroke-width="1.5"/><line x1="30" y1="14" x2="30" y2="56" stroke="#241408" stroke-width="1.5"/><line x1="70" y1="14" x2="70" y2="56" stroke="#241408" stroke-width="1.5"/><line x1="80" y1="14" x2="80" y2="56" stroke="#241408" stroke-width="1.5"/><line x1="20" y1="60" x2="20" y2="102" stroke="#241408" stroke-width="1.5"/><line x1="30" y1="60" x2="30" y2="102" stroke="#241408" stroke-width="1.5"/><line x1="70" y1="60" x2="70" y2="102" stroke="#241408" stroke-width="1.5"/><line x1="80" y1="60" x2="80" y2="102" stroke="#241408" stroke-width="1.5"/>'
  };

  var lsCount = function(type) { return (ownedLivestock||[]).filter(function(a){ return a.type===type||a.species===type; }).length; };

  return /*#__PURE__*/React.createElement("div", {
    style: { position:"relative", width:"100vw", height:"100vh", background:"#141008", overflow:"hidden", display:"flex", flexDirection:"column" }
  },
    // Close button
    /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: { position:"absolute", top:12, right:16, zIndex:100, background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:6, padding:"5px 14px", cursor:"pointer", fontSize:"0.8rem" }
    }, "\u2715 Close"),

    // Title
    /*#__PURE__*/React.createElement("div", {
      style: { textAlign:"center", color:"#d4942a", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", padding:"10px 0 6px", fontFamily:"'Courier New',monospace" }
    }, "\uD83C\uDFD8 Bloodline Acres \u2014 Farm View"),

    // Farm grid — scales to fill remaining space
    /*#__PURE__*/React.createElement("div", {
      style: { flex:1, display:"flex", alignItems:"center", justifyContent:"center" }
    }, /*#__PURE__*/React.createElement("div", {
      style: { position:"relative", width:GRID_W, height:GRID_H, background:"#2a1e14", borderRadius:12, border:"2px solid #2a1e14",
        backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(255,255,255,0.012) 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(255,255,255,0.012) 20px)" }
    },
      // PATH LAYER
      /*#__PURE__*/React.createElement("svg", {
        style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1}, width:GRID_W, height:GRID_H
      },
        React.createElement("defs", null,
          React.createElement("pattern", {id:"fv-gravel",x:0,y:0,width:6,height:6,patternUnits:"userSpaceOnUse"},
            React.createElement("rect",{width:6,height:6,fill:"#362a18"}),
            React.createElement("circle",{cx:1.5,cy:1.5,r:0.6,fill:"#3d3020",opacity:0.5}),
            React.createElement("circle",{cx:3.5,cy:3.5,r:0.5,fill:"#362a18",opacity:0.6})
          ),
          React.createElement("pattern", {id:"fv-dirt",x:0,y:0,width:6,height:6,patternUnits:"userSpaceOnUse"},
            React.createElement("rect",{width:6,height:6,fill:"#362a18"}),
            React.createElement("circle",{cx:1,cy:1,r:0.5,fill:"#362a18",opacity:0.6}),
            React.createElement("circle",{cx:4,cy:4,r:0.4,fill:"#2e2418",opacity:0.5})
          )
        ),
        // Vertical spine
        React.createElement("rect",{x:COLS[1]+TILE_W,y:0,width:GAP,height:GRID_H,fill:"url(#fv-gravel)",opacity:0.9}),
        React.createElement("line",{x1:COLS[1]+TILE_W,y1:0,x2:COLS[1]+TILE_W,y2:GRID_H,stroke:"#3a2a12",strokeWidth:1.5,opacity:0.6}),
        React.createElement("line",{x1:COLS[2],y1:0,x2:COLS[2],y2:GRID_H,stroke:"#3a2a12",strokeWidth:1.5,opacity:0.6}),
        // Horizontal cross
        React.createElement("rect",{x:0,y:ROWS[2]+TILE_H,width:GRID_W,height:GAP,fill:"url(#fv-gravel)",opacity:0.9}),
        React.createElement("line",{x1:0,y1:ROWS[2]+TILE_H,x2:GRID_W,y2:ROWS[2]+TILE_H,stroke:"#3a2a12",strokeWidth:1.5,opacity:0.6}),
        React.createElement("line",{x1:0,y1:ROWS[3],x2:GRID_W,y2:ROWS[3],stroke:"#3a2a12",strokeWidth:1.5,opacity:0.6}),
        // Branch paths top
        React.createElement("rect",{x:0,y:ROWS[0]+TILE_H,width:COLS[2],height:GAP,fill:"url(#fv-dirt)",opacity:0.7}),
        React.createElement("rect",{x:COLS[2],y:ROWS[0]+TILE_H,width:GRID_W-COLS[2],height:GAP,fill:"url(#fv-dirt)",opacity:0.7}),
        // Entrance path
        React.createElement("rect",{x:COLS[1]+TILE_W,y:ROWS[3]+TILE_H,width:GAP,height:GAP,fill:"url(#fv-gravel)",opacity:0.95})
      ),

      // ── ROW A ──
      // A1 Pig Pen
      React.createElement(Tile, { col:0, row:0, bg:"#221218", border:"#a83060", svgInner:SVG.pigPen, label:"Pig Pen", color:"#f9a8d4",
        badge:"A1", count: hasFac("pig_pen") ? lsCount("pig")+"/"+FACILITIES.pig_pen.tiers[facTier("pig_pen")].capacity : null,
        tip:"Pig Pen · "+(hasFac("pig_pen") ? FACILITIES.pig_pen.tiers[facTier("pig_pen")].name : "Not built") }),
      // A2 Slaughterhouse
      React.createElement(Tile, { col:1, row:0, bg:"#120808", border:"#7a2010", svgInner:SVG.slaughter, label:"Slaughterhouse", color:"#fca5a5",
        badge:"A2", tip:"Slaughterhouse · Unlocks meat sales" }),
      // A3 Chicken Coop
      React.createElement(Tile, { col:2, row:0, bg:"#2a1e14", border:"#ca8a04", svgInner:SVG.apiary, label:"Apiary", color:"#f5d870",
        badge:"A3", count: hasFac("apiary") ? (commodities.honey||0).toFixed(1)+"lb \uD83C\uDF6F" : null, tip:"Apiary · "+(hasFac("apiary") ? FACILITIES.apiary.tiers[facTier("apiary")].name : "Not built") }),
      // A4 Duck Pond
      React.createElement(Tile, { col:3, row:0, bg:"#141008", border:"#0369a1", svgInner:SVG.pond, label:"Duck Pond", color:"#7dd3fc",
        badge:"A4", count: hasFac("pond") ? lsCount("duck")+"/"+FACILITIES.pond.tiers[facTier("pond")].capacity : null,
        tip:"Duck Pond · "+(hasFac("pond") ? FACILITIES.pond.tiers[facTier("pond")].name : "Not built") }),

      // ── ROW B ──
      // B1 Barn
      React.createElement(Tile, { col:0, row:1, bg:"#1c0808", border:"#b91c1c", svgInner:SVG.barn, label:"Barn", color:"#fca5a5",
        badge:"B1", count: hasFac("barn") ? lsCount("beef")+"/"+FACILITIES.barn.tiers[facTier("barn")].capacity : null,
        tip:"Barn · "+(hasFac("barn") ? FACILITIES.barn.tiers[facTier("barn")].name : "Not built") }),
      // B2 Milking Barn
      React.createElement(Tile, { col:1, row:1, bg:"#0e1828", border:"#c4801a", svgInner:SVG.milkBarn, label:"Milking Barn", color:"#93c5fd",
        badge:"B2", count: hasFac("milking_barn") ? lsCount("dairy")+"/"+FACILITIES.milking_barn.tiers[facTier("milking_barn")].capacity+" · "+(commodities.milk||0).toFixed(0)+"gal" : null,
        tip:"Milking Barn · "+(hasFac("milking_barn") ? FACILITIES.milking_barn.tiers[facTier("milking_barn")].name : "Not built") }),
      // B3 Chicken Coop
      React.createElement(Tile, { col:2, row:1, bg:"#101d0a", border:"#4a6a18", svgInner:SVG.chickCoop, label:"Chicken Coop", color:"#86efac",
        badge:"B3", count: hasFac("chicken_coop") ? lsCount("chicken")+"/"+FACILITIES.chicken_coop.tiers[facTier("chicken_coop")].capacity+" · "+(commodities.eggs||0).toFixed(0)+"egg" : null,
        tip:"Chicken Coop · "+(hasFac("chicken_coop") ? FACILITIES.chicken_coop.tiers[facTier("chicken_coop")].name : "Not built") }),
      // B4 Grazing Land
      hasFac("grazing_land")
        ? React.createElement(Tile, { col:3, row:1, bg:"#091e0a", border:"#1a7a2a", svgInner:SVG.grazing, label:"Grazing Land", color:"#5aaa30",
            badge:"B4", tip:"Grazing Land · "+FACILITIES.grazing_land.tiers[facTier("grazing_land")].name })
        : React.createElement(EmptyPlot, { col:3, row:1, tip:"B4 · Grazing Land · Available" }),

      // ── ROW C ──
      // C1 Storage Barn
      React.createElement(Tile, { col:0, row:2, bg:"#091e0a", border:"#1a7a2a", svgInner:SVG.grazing, label:"Grazing Land", color:"#5aaa30",
        badge:"C1", tip:"Grazing Land · "+(hasFac("grazing_land") ? FACILITIES.grazing_land.tiers[facTier("grazing_land")].name : "Not built") }),
      // C2 Whelping
      React.createElement(Tile, { col:1, row:2, bg:"#442e18", border:"#581c87", svgInner:SVG.whelping, label:"Whelping", color:"#d8b4fe",
        badge:"C2", tip:"Whelping Kennel · "+(hasWhelpingKennel ? "Active" : "Not built") }),
      // C3 Shearing Shed
      React.createElement(Tile, { col:2, row:2, bg:"#1a1408", border:"#b45309", svgInner:SVG.shearing, label:"Shearing Shed", color:"#f5d870",
        badge:"C3", count: hasFac("shearing_shed") ? lsCount("sheep")+"/"+FACILITIES.shearing_shed.tiers[facTier("shearing_shed")].capacity+" · "+(commodities.wool||0).toFixed(1)+"lb" : null,
        tip:"Shearing Shed · "+(hasFac("shearing_shed") ? FACILITIES.shearing_shed.tiers[facTier("shearing_shed")].name : "Not built"),
        onClick: function(){ setShowShearing(true); } }),
      // C4 Goat Pen
      hasFac("goat_pen")
        ? React.createElement(Tile, { col:3, row:2, bg:"#1a1808", border:"#78350f", svgInner:SVG.pigPen, label:"Goat Pen", color:"#fdba74",
            badge:"C4", count: lsCount("goat")+"/"+FACILITIES.goat_pen.tiers[facTier("goat_pen")].capacity+" · "+(commodities.goat_milk||0).toFixed(0)+"gal", tip:"Goat Pen · "+FACILITIES.goat_pen.tiers[facTier("goat_pen")].name })
        : React.createElement(EmptyPlot, { col:3, row:2, tip:"C4 · Goat Pen · Not built" }),

      // ── ROW D ──
      // D1 — second kennel slot
      kennels.length > 1
        ? React.createElement(Tile, { col:0, row:3, bg:"#180808", border:"#991b1b", svgInner:SVG.kennel, label:"Kennel", color:"#fca5a5",
            badge:"D1", tip:"Kennel · "+kennels[1].name+" ("+kennels[1].type+")" })
        : React.createElement(EmptyPlot, { col:0, row:3, tip:"D1 · Second Kennel · Available" }),
      // D2 — first kennel slot
      React.createElement(Tile, { col:1, row:3, bg:"#180808", border:"#991b1b", svgInner:SVG.kennel, label:"Kennel", color:"#fca5a5",
        badge:"D2", count: kennels.length > 0 ? dogCount+"/"+dogCap : null,
        tip:"Kennel · "+(kennels.length > 0 ? kennels[0].name+" ("+kennels[0].type+")" : "Not built") }),
      // D3 Stable
      React.createElement(Tile, { col:2, row:3, bg:"#180f06", border:"#c07010", svgInner:SVG.stable, label:"Stable", color:"#f0c040",
        badge:"D3", count: hasFac("stable") ? lsCount("horse")+"/"+FACILITIES.stable.tiers[facTier("stable")].capacity : null,
        tip:"Stable · "+(hasFac("stable") ? FACILITIES.stable.tiers[facTier("stable")].name : "Not built") }),
      // D4 Storage Barn
      React.createElement(Tile, { col:3, row:3, bg:"#0e1008", border:"#4a6a18", svgInner:SVG.storageBarn, label:"Storage Barn", color:"#bef264",
            badge:"D4", tip:"Storage Barn · "+(hasFac("storage_barn") ? FACILITIES.storage_barn.tiers[facTier("storage_barn")].name : "Not built") }),

      // Entrance
      /*#__PURE__*/React.createElement("div", {
        style: { position:"absolute", bottom:0, left:COLS[1]+TILE_W, width:GAP, height:12, background:"#3d2508", borderRadius:"4px 4px 0 0", border:"1px solid #78420d", borderBottom:"none", zIndex:3, display:"flex", alignItems:"center", justifyContent:"center" }
      })
    )),

    // Tooltip
    tipText && /*#__PURE__*/React.createElement("div", {
      style: { position:"fixed", left:tipPos.x+14, top:tipPos.y-32, background:"#1a1410", border:"1px solid #4a3a28", borderRadius:6, padding:"6px 12px", fontSize:"0.72rem", color:"#f0e6d3", pointerEvents:"none", zIndex:9999, whiteSpace:"nowrap" }
    }, tipText)
  );
}

function App() {
  var _sire$genome$coat$M, _sire$genome$coat$M2, _dam$genome$coat$M, _dam$genome$coat$M2, _litter$, _litter$2;
  // Load saved game state
  var _savedState = (function() {
    try {
      var s = localStorage.getItem("ba_gameState");
      if (!s) return null;
      var parsed = JSON.parse(s);
      if (parsed.gameVersion !== GAME_VERSION) {
        parsed.log = [{ id: Date.now(), type: "system", name: "Journal cleared on version update (" + GAME_VERSION + ")", date: new Date().toLocaleString() }];
        parsed.gameVersion = GAME_VERSION;
      }
      return parsed;
    } catch(e) { return null; }
  })();
  var _useState7 = useState(DEMO_BREEDS),
    _useState8 = _slicedToArray(_useState7, 2),
    breeds = _useState8[0],
    setBreeds = _useState8[1];
  var _useState9 = useState(_savedState ? _savedState.animals || [] : []),
    _useState0 = _slicedToArray(_useState9, 2),
    animals = _useState0[0],
    setAnimals = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    sire = _useState10[0],
    setSire = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    dam = _useState12[0],
    setDam = _useState12[1];
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    litter = _useState14[0],
    setLitter = _useState14[1];
  var _useState15 = useState(_savedState ? _savedState.log || [] : []),
    _useState16 = _slicedToArray(_useState15, 2),
    log = _useState16[0],
    setLog = _useState16[1];
  var _useState17 = useState("kennel"),
    _useState18 = _slicedToArray(_useState17, 2),
    tab = _useState18[0],
    setTab = _useState18[1];
  var _useState19 = useState("All"),
    _useState20 = _slicedToArray(_useState19, 2),
    filterSex = _useState20[0],
    setFilterSex = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    fileError = _useState22[0],
    setFileError = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    confirmDeleteId = _useState24[0],
    setConfirmDeleteId = _useState24[1];
  // ── Kennel System ──────────────────────────────────────────────────────
  // KENNEL_TYPES is defined globally above App
  var WHELPING_COST = 1500;
  var DOG_COST_PUPPY = 200;
  var DOG_COST_ADULT = 350;
  var BOARDING_COSTS = { XS: 15, S: 20, M: 30, L: 40, XL: 50 };
  var getBoardingCost = function(a) { return BOARDING_COSTS[a.size] || BOARDING_COSTS["M"]; };
  var formatMoney = function(n) { return "$" + n.toLocaleString(); };
  var makeKennel = function(type, name) {
    return { id: Date.now() + Math.random(), type: type, name: name || KENNEL_TYPES[type].label };
  };
  var _useStateKL = useState(_savedState ? _savedState.kennels || [{id:1,name:"Main Kennel",type:"basic"}] : [{id:1,name:"Main Kennel",type:"basic"}]),
    _useStateKL2 = _slicedToArray(_useStateKL, 2),
    kennels = _useStateKL2[0],
    setKennels = _useStateKL2[1];
  var _useStateKA = useState(null),
    _useStateKA2 = _slicedToArray(_useStateKA, 2),
    _activeKennelIdRaw = _useStateKA2[0],
    setActiveKennelId = _useStateKA2[1];
  var activeKennelId = _activeKennelIdRaw || (kennels[0] ? kennels[0].id : null);
  var activeKennel = kennels.find(function(k){ return k.id === activeKennelId; }) || kennels[0];
  var getKennelCapacity = function(k) { return k ? KENNEL_TYPES[k.type].capacity : 10; };
  var getKennelCount = function(kId) { return animals.filter(function(a){ return !a.retired && a.kennelId === kId; }).length; };
  var isKennelFull = function(kId) {
    var k = kennels.find(function(x){ return x.id === kId; });
    return getKennelCount(kId) >= getKennelCapacity(k);
  };
  var _useStateKS = useState(false),
    _useStateKS2 = _slicedToArray(_useStateKS, 2),
    showKennelMgr = _useStateKS2[0],
    setShowKennelMgr = _useStateKS2[1];
  var _useStateRH = useState(null),
    _useStateRH2 = _slicedToArray(_useStateRH, 2),
    actionModalId = _useStateRH2[0],
    setActionModalId = _useStateRH2[1];
  // ─────────────────────────────────────────────────────────────────────────

  var _useState25 = useState(12),
    _useState26 = _slicedToArray(_useState25, 2),
    addAge = _useState26[0],
    setAddAge = _useState26[1];
  var _useStateBG = useState(""),
    _useStateBG2 = _slicedToArray(_useStateBG, 2),
    buyGroup = _useStateBG2[0],
    setBuyGroup = _useStateBG2[1];
  var _useStateBB = useState(""),
    _useStateBB2 = _slicedToArray(_useStateBB, 2),
    buyBreed = _useStateBB2[0],
    setBuyBreed = _useStateBB2[1];
  var _useState27 = useState(0),
    _useState28 = _slicedToArray(_useState27, 2),
    kennelIdx = _useState28[0],
    setKennelIdx = _useState28[1];
  var _useStateKO = useState(false),
    _useStateKO2 = _slicedToArray(_useStateKO, 2),
    kennelOpen = _useStateKO2[0],
    setKennelOpen = _useStateKO2[1];
  var _useState29 = useState(0),
    _useState30 = _slicedToArray(_useState29, 2),
    litterIdx = _useState30[0],
    setLitterIdx = _useState30[1];
  var _useStateWK = useState(_savedState ? !!_savedState.hasWhelpingKennel : false),
    _useStateWK2 = _slicedToArray(_useStateWK, 2),
    hasWhelpingKennel = _useStateWK2[0],
    setHasWhelpingKennel = _useStateWK2[1];
  var _useStateWL = useState(_savedState ? _savedState.whelpingLitters || [] : []),
    _useStateWL2 = _slicedToArray(_useStateWL, 2),
    whelpingLitters = _useStateWL2[0],
    setWhelpingLitters = _useStateWL2[1];
  var _useStateTH = useState(_savedState ? _savedState.holdingPups || [] : []),
    _useStateTH2 = _slicedToArray(_useStateTH, 2),
    holdingPups = _useStateTH2[0],
    setHoldingPups = _useStateTH2[1];
  var _useStateLS = useState([]),
    _useStateLS2 = _slicedToArray(_useStateLS, 2),
    litterSelected = _useStateLS2[0],
    setLitterSelected = _useStateLS2[1];
  var _useStateMON = useState(_savedState && _savedState.money !== undefined ? _savedState.money : 5000),
    _useStateMON2 = _slicedToArray(_useStateMON, 2),
    money = _useStateMON2[0],
    setMoney = _useStateMON2[1];
  var _useStateGSD = useState(_savedState && _savedState.gameStartDate ? _savedState.gameStartDate : Date.now()),
    _useStateGSD2 = _slicedToArray(_useStateGSD, 2),
    gameStartDate = _useStateGSD2[0];
  var _useStateMKT = useState(false),
    _useStateMKT2 = _slicedToArray(_useStateMKT, 2),
    showMarket = _useStateMKT2[0],
    setShowMarket = _useStateMKT2[1];
  var _useStateMKTS = useState([]),
    _useStateMKTS2 = _slicedToArray(_useStateMKTS, 2),
    marketSession = _useStateMKTS2[0],
    setMarketSession = _useStateMKTS2[1];
  var _useStateFAC = useState(false),
    _useStateFAC2 = _slicedToArray(_useStateFAC, 2),
    showFacilities = _useStateFAC2[0],
    setShowFacilities = _useStateFAC2[1];
  var _useStateFACD = useState(_savedState ? _savedState.facilitiesOwned || {} : {}),
    _useStateFACD2 = _slicedToArray(_useStateFACD, 2),
    facilitiesOwned = _useStateFACD2[0],
    setFacilitiesOwned = _useStateFACD2[1];
  var _useStateCOM = useState(_savedState ? _savedState.commodities || { milk:0, eggs:0, wool:0, honey:0, pork:0, beef:0, lamb:0, chevon:0, goat_milk:0, chicken_meat:0, duck_meat:0 } : { milk:0, eggs:0, wool:0, honey:0, pork:0, beef:0, lamb:0, chevon:0, goat_milk:0, chicken_meat:0, duck_meat:0 }),
    _useStateCOM2 = _slicedToArray(_useStateCOM, 2),
    commodities = _useStateCOM2[0],
    setCommodities = _useStateCOM2[1];
  var _useStateSHR = useState(_savedState ? _savedState.sheepSheared || {} : {}),
    _useStateSHR2 = _slicedToArray(_useStateSHR, 2),
    sheepSheared = _useStateSHR2[0],
    setSheepSheared = _useStateSHR2[1];
  var _useStateCL = useState(false),
    _useStateCL2 = _slicedToArray(_useStateCL, 2),
    showCatLady = _useStateCL2[0],
    setShowCatLady = _useStateCL2[1];
  var _useStateBD = useState(false),
    _useStateBD2 = _slicedToArray(_useStateBD, 2),
    showBuyDogs = _useStateBD2[0],
    setShowBuyDogs = _useStateBD2[1];
  var _useStatePBD = useState(null),
    _useStatePBD2 = _slicedToArray(_useStatePBD, 2),
    pendingBoughtDog = _useStatePBD2[0],
    setPendingBoughtDog = _useStatePBD2[1];
  var _useStateLVP = useState(null),
    _useStateLVP2 = _slicedToArray(_useStateLVP, 2),
    litterViewPup = _useStateLVP2[0],
    setLitterViewPup = _useStateLVP2[1];
  var _useStateSHED = useState(false),
    _useStateSHED2 = _slicedToArray(_useStateSHED, 2),
    showShearing = _useStateSHED2[0],
    setShowShearing = _useStateSHED2[1];
  var _useStateOL = useState([]),
    _useStateOL2 = _slicedToArray(_useStateOL, 2),
    ownedLivestock = _useStateOL2[0],
    setOwnedLivestock = _useStateOL2[1];
  var _useStateCLV = useState(0),
    _useStateCLV2 = _slicedToArray(_useStateCLV, 2),
    catLadyLastVisit = _useStateCLV2[0],
    setCatLadyLastVisit = _useStateCLV2[1];
  var _useStateCLF = useState(0),
    _useStateCLF2 = _slicedToArray(_useStateCLF, 2),
    catLadyLastFeed = _useStateCLF2[0],
    setCatLadyLastFeed = _useStateCLF2[1];
  var _useStateITK = useState(function(){ var s = localStorage.getItem("ba_lastIncomeTick"); return s ? parseInt(s) : null; }),
    _useStateITK2 = _slicedToArray(_useStateITK, 2),
    lastIncomeTick = _useStateITK2[0],
    setLastIncomeTick = _useStateITK2[1];
  var fileRef = useRef();
  useEffect(function () {
    var profiled = breeds.map(function(b){return assignGeneticProfile(b);});
    setBreeds(profiled);
    setAnimals([]);
  }, []);

  // Daily farm income tick
  useEffect(function() {
    var now = Date.now();
    var oneDayMs = 24 * 60 * 60 * 1000;
    if (!lastIncomeTick || (now - lastIncomeTick) >= oneDayMs) {
      var result = runDailyIncomeTick(ownedLivestock, lastIncomeTick ? new Date(lastIncomeTick) : null, facilitiesOwned);
      if (result.totalEarned > 0) {
        setMoney(function(m){ return m + result.totalEarned; });
      }
      setOwnedLivestock(result.updatedAnimals);
      // Apply commodity gains
      if (result.commodityGains && Object.keys(result.commodityGains).length > 0) {
        setCommodities(function(c){
          var updated = Object.assign({}, c);
          Object.keys(result.commodityGains).forEach(function(key){
            updated[key] = Math.round(((updated[key]||0) + result.commodityGains[key]) * 10) / 10;
          });
          return updated;
        });
      }
      result.journalEntries.forEach(function(line) {
        setLog(function(lg){ return [{ id: Date.now()+Math.random(), type: "income",
          name: line, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      });
      // Honey production from Apiary
      if (facilitiesOwned.apiary) {
        var hiveCount = FACILITIES.apiary.tiers[facilitiesOwned.apiary.tier].capacity;
        var honeyPerDay = Math.round(hiveCount * 5 * 10) / 10;
        if (honeyPerDay > 0) {
          setCommodities(function(c){ return Object.assign({}, c, { honey: Math.round((c.honey + honeyPerDay) * 10) / 10 }); });
          setLog(function(lg){ return [{ id: Date.now()+Math.random(), type: "income",
            name: "\uD83D\uDC1D Apiary (" + hiveCount + " hives) — honey: +" + honeyPerDay + " lbs",
            date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
        }
      }
      setLastIncomeTick(now);
      localStorage.setItem("ba_lastIncomeTick", String(now));
    }
  }, []);

  // Daily aging tick - 5am EST reset
  useEffect(function() {
    var LAST_TICK_KEY = 'breedingSim_lastTick';
    function tickDay() {
      var lastTick = parseInt(localStorage.getItem(LAST_TICK_KEY)||'0');
      var now = Date.now();
      var dayMs = 24 * 60 * 60 * 1000;
      var daysPassed = lastTick === 0 ? 0 : Math.floor((now - lastTick) / dayMs);
      if (daysPassed < 1) return;
      localStorage.setItem(LAST_TICK_KEY, now.toString());
      setAnimals(function(prev) {
        return prev.map(function(a) {
          var newAge = (a.ageMonths||0) + daysPassed;
          var maxAge = a.lifespan || 144;
          // Reset stud daily count on new day
          var studReset = { breedingsToday: 0, lastStudDate: "" };
          if (newAge >= maxAge) {
            (function(){
              var logEntry = {id:Date.now()+Math.random(), type:"retire_age", name:a.name, breed:a.breed, ageMonths:newAge, date:new Date().toLocaleString()};
              setTimeout(function(){ setLog(function(p){ return [logEntry].concat(_toConsumableArray(p)); }); }, 0);
            })();
            return Object.assign({}, a, studReset, {ageMonths: newAge, retired: true, retireReason: "End of natural life"});
          }
          // Size locking: when a dog first reaches mature age, lock their final size permanently
          var sizeLockUpdate = {};
          if (!a.sizeLocked) {
            var matureThreshold = ({ XS:10, S:12, M:15, L:18, XL:24 }[a.size||"M"] || 15);
            var wasImmature = (a.ageMonths||0) < matureThreshold;
            var isNowMature = newAge >= matureThreshold;
            if (wasImmature && isNowMature) {
              var tempAnimal = Object.assign({}, a, { ageMonths: newAge });
              var finalSize = getCurrentSize(tempAnimal);
              sizeLockUpdate = { adultWeight: finalSize.adultW, adultHeight: finalSize.adultH, sizeLocked: true };
            }
          }
          return Object.assign({}, a, studReset, sizeLockUpdate, {ageMonths: newAge, lastUpdated: now});
        });
      });

      // Auto-finalize whelping litters on day 4+
      setWhelpingLitters(function(prevLitters) {
        var toFinalize = prevLitters.filter(function(lit) {
          return Math.floor((now - lit.bornDate) / (1000*60*60*24)) >= 4;
        });
        if (toFinalize.length === 0) return prevLitters;
        toFinalize.forEach(function(lit) {
          var kept = lit.pups.filter(function(p){ return lit.selectedIds.includes(p.id); });
          var rehomed = lit.pups.filter(function(p){ return !lit.selectedIds.includes(p.id); });
          if (kept.length > 0) {
            setHoldingPups(function(h) {
              return h.concat(kept.map(function(p){
                return _objectSpread(_objectSpread({}, p), {}, { heldSince: now, name: p.sireBreed.split(" ")[0]+"×"+p.damBreed.split(" ")[0]+" Pup" });
              }));
            });
          }
          var logEntries = [];
          if (kept.length > 0) logEntries.push({ id: now+Math.random(), type:"pups_holding", count: kept.length, date: new Date().toLocaleString() });
          if (rehomed.length > 0) logEntries.push({ id: now+Math.random(), type:"rehome", name: rehomed.length+" pup(s) auto-rehomed (day 4)", breed: lit.dam.breed, date: new Date().toLocaleString(), auto: true });
          logEntries.push({ id: now+Math.random(), type:"whelp", name: lit.dam.name, breed: lit.dam.breed, note:"Dam returned home from Whelping Kennel", date: new Date().toLocaleString() });
          if (logEntries.length > 0) {
            setLog(function(lg) { return logEntries.concat(_toConsumableArray(lg)); });
          }
          setAnimals(function(a) { return a.map(function(animal){ return animal.id===lit.dam.id ? _objectSpread(_objectSpread({},animal),{},{inWhelping:false}) : animal; }); });
        });
        return prevLitters.filter(function(lit) {
          return Math.floor((now - lit.bornDate) / (1000*60*60*24)) < 4;
        });
      });

      // Animal rights: remove holding pups older than 7 days, fine $250/pup
      setHoldingPups(function(prevHolding) {
        var overdue = prevHolding.filter(function(p){ return (now - (p.heldSince||now)) >= 7*24*60*60*1000; });
        if (overdue.length === 0) return prevHolding;
        var fine = overdue.length * 250;
        setMoney(function(m){ return m - fine; });
        setLog(function(lg) {
          return [{ id: now+Math.random(), type:"incident", name: overdue.length+" pup(s) seized by animal rights", fine: fine, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg));
        });
        return prevHolding.filter(function(p){ return (now - (p.heldSince||now)) < 7*24*60*60*1000; });
      });
      // Boarding deduction - only if 11+ dogs OR more than one kennel or a non-basic kennel
      if (daysPassed >= 1) {
        setAnimals(function(cur) {
          var active = cur.filter(function(a){ return !a.retired; });
          if (active.length === 0) return cur;
          var hasUpgrade = kennels.length > 1 || kennels.some(function(k){ return k.type !== "basic"; });
          var boardingApplies = active.length > 10 || hasUpgrade;
          if (!boardingApplies) return cur;
          var total = active.reduce(function(s,a){ return s + getBoardingCost(a) * daysPassed; }, 0);
          setMoney(function(m){ return m - total; });
          setLog(function(lg){ return [{ id: now+Math.random(), type:"financial",
            name: "Daily upkeep \u2014 " + active.length + " dog" + (active.length!==1?"s":""),
            amount: -total, date: new Date().toLocaleString() }].concat(lg); });
          return cur;
        });
      }
    }
    tickDay();
    var interval = setInterval(tickDay, 60000);
    return function() { clearInterval(interval); };
  }, []);

  // Autosave every 60 seconds
  useEffect(function() {
    var SAVE_KEY = "ba_gameState";
    function doSave() {
      try {
        var state = {
          animals: animals,
          kennels: kennels,
          log: log.slice(0, 50),
          money: money,
          hasWhelpingKennel: hasWhelpingKennel,
          whelpingLitters: whelpingLitters,
          holdingPups: holdingPups,
          facilitiesOwned: facilitiesOwned,
          ownedLivestock: ownedLivestock,
          commodities: commodities,
          sheepSheared: sheepSheared,
          gameStartDate: gameStartDate,
          gameVersion: GAME_VERSION,
          savedAt: Date.now()
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      } catch(e) { console.warn("Autosave failed", e); }
    }
    doSave();
    var interval = setInterval(doSave, 60000);
    return function() { clearInterval(interval); };
  }, [animals, kennels, log, money, hasWhelpingKennel, whelpingLitters, holdingPups, facilitiesOwned, ownedLivestock, commodities, sheepSheared]);
  var loadFile = function loadFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    setFileError(null);
    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        var text = ev.target.result;
        text = text.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
        var start = text.indexOf("[");
        if (start === -1) {
          setFileError("No array found in file.");
          return;
        }
        var d = 0,
          i = start;
        for (; i < text.length; i++) {
          if (text[i] === "[") d++;else if (text[i] === "]") {
            d--;
            if (d === 0) break;
          }
        }
        var jsonStr = text.slice(start, i + 1).replace(/,\s*([}\]])/g, "$1");
        var raw = JSON.parse(jsonStr);
        var data;
        if (Array.isArray(raw) && Array.isArray(raw[0])) {
          var TK = ["intelligence", "energy", "trainability", "loyalty", "playfulness", "aggression", "preyDrive", "barkTendency", "sociability", "adaptability"];
          var HK = ["hips", "eyes", "heart", "joints"];
          var SA = {
              XS: 8,
              S: 20,
              M: 40,
              L: 65,
              XL: 100
            },
            SR = {
              XS: [4, 12],
              S: [12, 28],
              M: [28, 55],
              L: [55, 85],
              XL: [80, 130]
            };
          data = raw.map(function (b) {
            return {
              name: b[0],
              group: b[1],
              size: b[2],
              coat: b[3],
              colors: b[4] || [],
              species: "dog",
              sizeAvg: SA[b[2]] || 40,
              sizeRange: SR[b[2]] || [30, 60],
              litterSize: b[2] === "XS" ? "S" : b[2] === "XL" ? "L" : "M",
              traits: b[5] ? Object.fromEntries(TK.map(function (k, i) {
                return [k, b[5][i]];
              })) : {},
              health: b[6] ? Object.fromEntries(HK.map(function (k, i) {
                return [k, b[6][i]];
              })) : {},
              aptitudes: b[7] || []
            };
          });
        } else {
          data = raw;
        }
        if (Array.isArray(data) && data.length > 0 && data[0].name) {
          setBreeds(data);
          setAnimals([]);
          setSire(null);
          setDam(null);
          setLitter([]);
          alert("\u2705 Loaded ".concat(data.length, " breeds from ").concat(file.name, "!"));
        } else {
          setFileError("Could not find valid breed data in that file.");
        }
      } catch (err) {
        setFileError("Parse error: " + err.message);
      }
    };
    reader.readAsText(file);
  };
  var saveBreeds = function saveBreeds() {
    var TK = ["intelligence", "energy", "trainability", "loyalty", "playfulness", "aggression", "preyDrive", "barkTendency", "sociability", "adaptability"];
    var HK = ["hips", "eyes", "heart", "joints"];
    var bd = breeds.map(function (b) {
      return [b.name, b.group, b.size || "M", b.coat || "short", b.colors || [], TK.map(function (k) {
        var _b$traits$k, _b$traits;
        return (_b$traits$k = (_b$traits = b.traits) === null || _b$traits === void 0 ? void 0 : _b$traits[k]) !== null && _b$traits$k !== void 0 ? _b$traits$k : 5;
      }), HK.map(function (k) {
        var _b$health$k, _b$health;
        return (_b$health$k = (_b$health = b.health) === null || _b$health === void 0 ? void 0 : _b$health[k]) !== null && _b$health$k !== void 0 ? _b$health$k : 80;
      }), b.aptitudes || []];
    });
    var js = "// BREED DATABASE \u2014 ".concat(bd.length, " breeds\nconst BD=[\n").concat(bd.map(function (b) {
      return JSON.stringify(b);
    }).join(",\n"), "\n];\nconst TRAIT_KEYS=['intelligence','energy','trainability','loyalty','playfulness','aggression','preyDrive','barkTendency','sociability','adaptability'];\nconst HEALTH_KEYS=['hips','eyes','heart','joints'];\nconst BREEDS=BD.map(b=>({name:b[0],group:b[1],size:b[2],coat:b[3],colors:b[4],traits:Object.fromEntries(TRAIT_KEYS.map((k,i)=>[k,b[5][i]])),health:Object.fromEntries(HEALTH_KEYS.map((k,i)=>[k,b[6][i]])),aptitudes:b[7]}));\n");
    var blob = new Blob([js], {
      type: "text/javascript"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "breeds-data.js";
    a.click();
    URL.revokeObjectURL(url);
  };
  var addAnimal = function addAnimal(breedName, sex, arrivalAge) {
    if (!activeKennel) { alert("No kennel selected!"); return; }
    if (isKennelFull(activeKennel.id)) {
      var kt = KENNEL_TYPES[activeKennel.type];
      alert('"' + activeKennel.name + '" is full! (' + kt.capacity + '/' + kt.capacity + ' dogs)\nRehome a dog or add a new kennel to continue.');
      return;
    }
    var b = breeds.find(function (x) { return x.name === breedName; });
    if (b) {
      var dogCost = (arrivalAge && arrivalAge <= 12) ? DOG_COST_PUPPY : DOG_COST_ADULT;
      if (money < dogCost) { alert("Not enough funds!\nThis dog costs " + formatMoney(dogCost) + ", you have " + formatMoney(money) + "."); return; }
      setMoney(function(m){ return m - dogCost; });
      setLog(function(lg){ return [{ id:Date.now(), type:"financial", name:"Purchased dog: " + b.name, amount: -dogCost, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      var newAnimal = makeAnimal(b, b.name + " " + (Math.floor(Math.random()*900)+100), sex);
      newAnimal.ageMonths = arrivalAge || 12;
      newAnimal.kennelId = activeKennel.id;
      setPendingBoughtDog(newAnimal);
    }
  };
  var breedingIneligibleReason = function breedingIneligibleReason(a) {
    if (!a) return null;
    if (a.retired) return "Retired";
    if (a.sick) return "Currently sick";
    if (a.injured) return "Currently injured";
    var stage = getAgeStage(a.ageMonths || 0);
    if (!stage.canBreed) return stage.label + " — not breeding age";
    if (a.inWhelping) return "In Whelping Kennel";
    // Stud daily limit check
    if (a.sex === "M") {
      var todayStr = new Date().toDateString();
      var studsToday = a.breedingsToday || 0;
      var lastStudDate = a.lastStudDate || "";
      if (lastStudDate === todayStr && studsToday >= 2) return "Stud limit reached (2/day)";
    }
    // Heat cycle check for females
    if (a.sex === "F") {
      var heatStatus = getHeatStatus(a, Date.now());
      if (heatStatus) {
        if (heatStatus.status === "too_young") return "Not yet mature — females breed at 18 months";
        if (heatStatus.status === "waiting") return "Not in heat — " + heatStatus.daysUntilHeat + (heatStatus.daysUntilHeat === 1 ? " day" : " days") + " until next heat";
      }
    }
    return null;
  };
  var selectAnimal = function selectAnimal(a, forceSelect) {
    var reason = breedingIneligibleReason(a);
    var alreadySelected = (a.sex === "M" ? (sire && sire.id === a.id) : (dam && dam.id === a.id));
    if (reason && !forceSelect && !alreadySelected) return; // silently block — card will show why
    if (a.sex === "M") setSire(function (p) {
      return (p === null || p === void 0 ? void 0 : p.id) === a.id ? null : a;
    });else setDam(function (p) {
      return (p === null || p === void 0 ? void 0 : p.id) === a.id ? null : a;
    });
  };
  var doBreed = function doBreed() {
    if (!sire || !dam) return;
    var pups = breedPair(sire, dam);
    var now = Date.now();
    var useWhelping = hasWhelpingKennel && whelpingLitters.length < 4;
    if (hasWhelpingKennel && !useWhelping) {
      alert("\u26A0\uFE0F Whelping Kennel is full (4/4)! You may only keep 1 pup from this litter.");
    }
    if (useWhelping) {
      setWhelpingLitters(function(prev) {
        return prev.concat([{ litterId: now, pups: pups, dam: dam, bornDate: now, selectedIds: [] }]);
      });
      setAnimals(function(prev) {
        return prev.map(function(a) {
          return a.id === dam.id ? _objectSpread(_objectSpread({}, a), {}, { inWhelping: true }) : a;
        });
      });
      setTab("whelping");
    } else {
      setLitter(pups);
      setLitterSelected([]);
      setLitterIdx(0);
      setTab("litter");
    }
    // Track stud daily breeding count
    var todayStr = new Date().toDateString();
    setAnimals(function(prev) {
      return prev.map(function(a) {
        if (a.id === sire.id) {
          var prevCount = (a.lastStudDate === todayStr) ? (a.breedingsToday || 0) : 0;
          return _objectSpread(_objectSpread({}, a), {}, { breedingsToday: prevCount + 1, lastStudDate: todayStr });
        }
        // Stamp dam with lastWhelped so heat cycle restarts from now
        if (a.id === dam.id) {
          return _objectSpread(_objectSpread({}, a), {}, { lastWhelped: now, heatCycleStart: now });
        }
        return a;
      });
    });
    setLog(function(p) {
      return [{ id: now, type: "breed", sire: sire.name, dam: dam.name, count: pups.length,
        date: new Date().toLocaleString(),
        muts: pups.flatMap(function(x){ return x.mutations; }).length,
        critFlags: pups.filter(function(x){ var _w; return ((_w=x.lethalWarnings)===null||_w===void 0?void 0:_w.length)>0; }).length
      }].concat(_toConsumableArray(p));
    });
  };
  var keepPup = function keepPup(pup) {
    if (!activeKennel) { alert("No kennel selected!"); return; }
    if (isKennelFull(activeKennel.id)) {
      var kt = KENNEL_TYPES[activeKennel.type];
      alert('"' + activeKennel.name + '" is full! (' + kt.capacity + '/' + kt.capacity + ' dogs)\nRehome a dog or add/switch to another kennel first.');
      return;
    }
    return setAnimals(function (p) {
      return [].concat(_toConsumableArray(p), [_objectSpread(_objectSpread({}, pup), {}, {
        name: "".concat(pup.sireBreed.split(" ")[0], "\xD7").concat(pup.damBreed.split(" ")[0], " #").concat(p.length + 1),
        kennelId: activeKennel.id
      })]);
    });
  };
  var removeAnimal = function removeAnimal(id) {
    setAnimals(function (p) {
      return p.filter(function (a) {
        return a.id !== id;
      });
    });
    if ((sire === null || sire === void 0 ? void 0 : sire.id) === id) setSire(null);
    if ((dam === null || dam === void 0 ? void 0 : dam.id) === id) setDam(null);
    setKennelIdx(function(i){ return Math.max(0, i - 1); });
  };
  var rehomeAnimal = function rehomeAnimal(id) {
    var a = animals.find(function(x){ return x.id === id; });
    if (a) {
      setLog(function(p){ return [{id:Date.now(), type:"rehome", name:a.name, breed:a.breed, date:new Date().toLocaleString()}].concat(_toConsumableArray(p)); });
    }
    removeAnimal(id);
  };
  var retireAnimal = function retireAnimal(id) {
    var a = animals.find(function(x){ return x.id===id; });
    if (a) {
      setLog(function(p){ return [{id:Date.now(), type:"retire_player", name:a.name, breed:a.breed, ageMonths:a.ageMonths||0, date:new Date().toLocaleString()}].concat(_toConsumableArray(p)); });
    }
    setAnimals(function(p){ return p.map(function(a){ return a.id===id ? _objectSpread(_objectSpread({},a),{},{retired:true,retireReason:"Voluntarily retired"}) : a; }); });
    if ((sire===null||sire===void 0?void 0:sire.id)===id) setSire(null);
    if ((dam===null||dam===void 0?void 0:dam.id)===id) setDam(null);
  };
  var toggleWhelpSelect = function toggleWhelpSelect(litterId, pupId) {
    setWhelpingLitters(function(prev) {
      return prev.map(function(lit) {
        if (lit.litterId !== litterId) return lit;
        var already = lit.selectedIds.includes(pupId);
        if (already) return _objectSpread(_objectSpread({}, lit), {}, { selectedIds: lit.selectedIds.filter(function(id){ return id !== pupId; }) });
        if (lit.selectedIds.length >= 2) { alert("Max 2 pups per litter in Whelping Kennel."); return lit; }
        return _objectSpread(_objectSpread({}, lit), {}, { selectedIds: lit.selectedIds.concat([pupId]) });
      });
    });
  };
  var toggleLitterSelect = function toggleLitterSelect(pupId) {
    setLitterSelected(function(prev) {
      if (prev.includes(pupId)) return prev.filter(function(id){ return id !== pupId; });
      if (prev.length >= 1) { alert("Without a Whelping Kennel you can only keep 1 pup per litter."); return prev; }
      return prev.concat([pupId]);
    });
  };
  var finalizeWhelpingLitter = function finalizeWhelpingLitter(litterId) {
    setWhelpingLitters(function(prev) {
      var lit = prev.find(function(l){ return l.litterId === litterId; });
      if (!lit) return prev;
      var now = Date.now();
      var kept = lit.pups.filter(function(p){ return lit.selectedIds.includes(p.id); });
      var rehomed = lit.pups.filter(function(p){ return !lit.selectedIds.includes(p.id); });
      if (kept.length > 0) {
        setHoldingPups(function(h) {
          return h.concat(kept.map(function(p){ return _objectSpread(_objectSpread({}, p), {}, { heldSince: now, name: p.sireBreed.split(" ")[0]+"\xD7"+p.damBreed.split(" ")[0]+" Pup" }); }));
        });
        setLog(function(lg) { return [{ id: now, type: "pups_holding", count: kept.length, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      }
      if (rehomed.length > 0) {
        setLog(function(lg) { return [{ id: now+1, type: "rehome", name: rehomed.length+" pup(s) auto-rehomed", breed: lit.dam.breed, date: new Date().toLocaleString(), auto: true }].concat(_toConsumableArray(lg)); });
      }
      setAnimals(function(a) { return a.map(function(animal){ return animal.id===lit.dam.id ? _objectSpread(_objectSpread({},animal),{},{inWhelping:false}) : animal; }); });
      return prev.filter(function(l){ return l.litterId !== litterId; });
    });
  };
  var finalizeLitter = function finalizeLitter() {
    var now = Date.now();
    var kept = litter.filter(function(p){ return litterSelected.includes(p.id); });
    var rehomed = litter.filter(function(p){ return !litterSelected.includes(p.id); });
    if (kept.length > 0) {
      setHoldingPups(function(h) { return h.concat(kept.map(function(p){ return _objectSpread(_objectSpread({},p),{},{heldSince:now,name:p.sireBreed.split(" ")[0]+"\xD7"+p.damBreed.split(" ")[0]+" Pup"}); })); });
      setLog(function(lg) { return [{ id: now, type: "pups_holding", count: kept.length, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
    }
    if (rehomed.length > 0) {
      setLog(function(lg) { return [{ id: now+1, type: "rehome", name: rehomed.length+" pup(s) auto-rehomed", breed: litter[0]?litter[0].damBreed:"", date: new Date().toLocaleString(), auto: true }].concat(_toConsumableArray(lg)); });
    }
    setLitter([]); setLitterSelected([]); setLitterIdx(0); setTab("kennel");
  };
  var placeHoldingPup = function placeHoldingPup(pupId) {
    if (!activeKennel) { alert("Select a kennel first!"); return; }
    if (isKennelFull(activeKennel.id)) { alert(activeKennel.name+" is full!"); return; }
    var pup = holdingPups.find(function(p){ return p.id===pupId; });
    if (!pup) return;
    setAnimals(function(prev){ return prev.concat([_objectSpread(_objectSpread({},pup),{},{kennelId:activeKennel.id})]); });
    setHoldingPups(function(prev){ return prev.filter(function(p){ return p.id!==pupId; }); });
  };
  var rehomeHoldingPup = function rehomeHoldingPup(pupId) {
    var pup = holdingPups.find(function(p){ return p.id===pupId; });
    if (pup) setLog(function(lg){ return [{ id:Date.now(), type:"rehome", name:pup.name, breed:pup.breed||pup.damBreed, date:new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
    setHoldingPups(function(prev){ return prev.filter(function(p){ return p.id!==pupId; }); });
  };
    var toggleStud = function toggleStud(id) {
    var animal = animals.find(function(a){ return a.id===id; });
    if (!animal) return;
    if (animal.isStud) {
      if (confirm('Remove "' + animal.name + '" from stud listings?')) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{isStud:false,studFee:null,lockedToPlayer:null}) : a; }); });
      }
    } else {
      var fee = prompt('List "' + animal.name + '" as stud\nEnter stud fee ($):', '150');
      if (fee && !isNaN(fee) && Number(fee) > 0) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{isStud:true,studFee:Number(fee),lockedToPlayer:null}) : a; }); });
        setTab("stud");
      }
    }
  };
  var handleSellListing = function handleSellListing(id) {
    var animal = animals.find(function(a){ return a.id===id; });
    if (!animal) return;
    if (animal.forSale) {
      if (confirm('Remove "' + animal.name + '" from sale listings?')) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{forSale:false,salePrice:null,listedDate:null}) : a; }); });
      }
    } else {
      var price = prompt('List "' + animal.name + '" for sale\nEnter asking price ($):', '500');
      if (price && !isNaN(price) && Number(price) > 0) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{forSale:true,salePrice:Number(price),listedDate:Date.now()}) : a; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial", name:'Listed for sale: ' + animal.name + ' @ $' + Number(price).toLocaleString(), date: new Date().toLocaleString() }].concat(lg); });
      }
    }
  };
  var retireAnimal = function retireAnimal(id) {
    var animal = animals.find(function(a){ return a.id===id; });
    if (!animal) return;
    if (confirm('Retire "' + animal.name + '"?\nThey will move to retirement and free up a kennel slot.')) {
      setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{retired:true,retireReason:"Player retired"}) : a; }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"retire_player", name:animal.name, breed:animal.breed, date: new Date().toLocaleString() }].concat(lg); });
    }
  };
  var renameAnimal = function renameAnimal(id, name) {
    setAnimals(function (p) {
      return p.map(function (a) {
        return a.id === id ? _objectSpread(_objectSpread({}, a), {}, {
          name: name
        }) : a;
      });
    });
    if ((sire === null || sire === void 0 ? void 0 : sire.id) === id) setSire(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        name: name
      });
    });
    if ((dam === null || dam === void 0 ? void 0 : dam.id) === id) setDam(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        name: name
      });
    });
  };
  var filtered = animals.filter(function (a) {
    return filterSex === "All" || a.sex === filterSex;
  });
  // clamp index if list shrinks
  var safeKennelIdx = Math.min(kennelIdx, Math.max(0, filtered.length - 1));
  var safeLitterIdx = Math.min(litterIdx, Math.max(0, litter.length - 1));
  var tabS = function tabS(t) {
    return {
      padding: "9px 18px",
      background: tab === t ? "#3a2810" : "transparent",
      border: "1px solid " + (tab === t ? "#d4942a" : "transparent"),
      borderBottom: tab === t ? "2px solid #d4942a" : "2px solid transparent",
      borderRadius: "6px 6px 0 0",
      color: tab === t ? "#e8a020" : "#b09070",
      cursor: "pointer",
      fontSize: "0.83rem",
      fontWeight: tab === t ? "bold" : "normal",
      letterSpacing: "0.02em",
      transition: "all 0.15s"
    };
  };
  var actionModalAnimal = animals.find(function(a){ return a.id === actionModalId; });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#1a1410",
      fontFamily: "system-ui,sans-serif",
      color: "#f0e6d3",
      overflow: "hidden"
    }
  }, actionModalId && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.82)",
      zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center"
    },
    onClick: function(){ setActionModalId(null); }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#443828", border: "2px solid #6b5038", borderRadius: 14,
      padding: "26px 28px", maxWidth: 380, width: "92%", textAlign: "center"
    },
    onClick: function(e){ e.stopPropagation(); }
  }, /*#__PURE__*/React.createElement("div", { style: { fontSize: "2rem", marginBottom: 8 } }, "🐾"),
  /*#__PURE__*/React.createElement("div", {
    style: { color: "#f1f5f9", fontWeight: "bold", fontSize: "1.1rem", marginBottom: 4 }
  }, actionModalAnimal ? actionModalAnimal.name : "Dog"),
  /*#__PURE__*/React.createElement("div", {
    style: { color: "#8a7055", fontSize: "0.8rem", marginBottom: 18 }
  }, "What would you like to do with this dog?"),
  /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 } },
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        retireAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#1e2a12", border: "2px solid #5aaa30", color: "#5aaa30",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🏡 Retire  —  stays in kennel, no longer breeding, doesn't count toward capacity"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        rehomeAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#443828", border: "2px solid #c4956a", color: "#c4956a",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🚐 Rehome  —  placed in a new home, logged, frees up a kennel slot"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        removeAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#481808", border: "2px solid #ef4444", color: "#fca5a5",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🗑️ Remove  —  permanently delete this dog")
  ),
  /*#__PURE__*/React.createElement("button", {
    onClick: function(){ setActionModalId(null); },
    style: {
      background: "#1a1410", border: "1px solid #4a3a28", color: "#8a7055",
      borderRadius: 6, padding: "7px 24px", cursor: "pointer", fontSize: "0.85rem"
    }
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#141008 0%,#1e1208 50%,#362210 100%)",
      borderBottom: "2px solid #4a3a28",
      padding: "14px 22px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8a020",
      fontSize: "1.45rem",
      fontWeight: "bold",
      letterSpacing: "0.02em",
      textShadow: "0 1px 8px rgba(212,148,42,0.4)"
    }
  }, "\uD83D\uDC3E Bloodline Acres"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6b5038",
      fontSize: "0.75rem",
      marginTop: 2
    }
  }, "Genetics Engine v1.0 \xB7 ", breeds.length, " breeds loaded \xB7 ", kennels.length, " kennel", kennels.length!==1?"s":"", " \xB7 ", animals.filter(function(a){return !a.retired;}).length, " active dogs  · ", /*#__PURE__*/React.createElement("span", { style:{ color: money < 500 ? "#ef4444" : money < 1500 ? "#d4860a" : "#22c55e", fontWeight:"bold" } }, formatMoney(money)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: ".js,.json",
    onChange: loadFile,
    style: {
      display: "none"
    }
  }), ))), fileError && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#481808",
      borderBottom: "1px solid #ef4444",
      color: "#fca5a5",
      padding: "8px 22px",
      fontSize: "0.8rem"
    }
  }, "\u26A0\uFE0F ", fileError), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      maxWidth: 1200,
      width: "100%",
      margin: "0 auto",
      padding: "18px 22px",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 18,
      flexWrap: "wrap",
      borderBottom: "2px solid #4a3a28",
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: tabS("kennel"),
    onClick: function onClick() {
      setShowBuyDogs(function(v){ return !v; });
    }
  }, "\uD83D\uDED2 Buy Dogs"), tab !== "kennel" && /*#__PURE__*/React.createElement("button", {
    style: { background: tab === "kennel" && kennelOpen ? "#3a2810" : "transparent",
      border: "1px solid " + (tab === "kennel" && kennelOpen ? "#d4942a" : "transparent"),
      borderBottom: tab === "kennel" && kennelOpen ? "2px solid #d4942a" : "2px solid transparent",
      borderRadius: "6px 6px 0 0", padding: "5px 14px", cursor: "pointer", fontSize: "0.82rem",
      color: tab === "kennel" && kennelOpen ? "#e8a020" : "#b09070",
      fontWeight: tab === "kennel" && kennelOpen ? "bold" : "normal" },
    onClick: function onClick() {
      if (tab === "kennel") { setKennelOpen(function(v){ return !v; }); }
      else { setTab("kennel"); setKennelOpen(true); }
    }
  }, "\uD83C\uDFE0 " + (activeKennel ? activeKennel.name : "Kennel") + " (" + (activeKennel ? getKennelCount(activeKennel.id) + "/" + getKennelCapacity(activeKennel) : "0") + ")"), /*#__PURE__*/React.createElement("button", {
    style: tabS("breed"),
    onClick: function onClick() {
      return setTab("breed");
    }
  }, "\u26A1 Breed"), /*#__PURE__*/React.createElement("button", {
    style: tabS("litter"),
    onClick: function onClick() {
      return setTab("litter");
    }
  }, "\uD83D\uDC3E Litter", litter.length > 0 ? " (".concat(litter.length, ")") : ""), /*#__PURE__*/React.createElement("button", {
    style: tabS("stud"),
    onClick: function(){ setTab("stud"); }
  }, "\uD83D\uDC3E Stud (", animals.filter(function(a){ return !a.retired && a.isStud && a.sex==="M"; }).length, ")"),
  /*#__PURE__*/React.createElement("button", {
    style: tabS("log"),
    onClick: function onClick() {
      return setTab("log");
    }
  }, "\uD83D\uDCD3 Journal (", log.length, ")"),
    /*#__PURE__*/React.createElement("button", {
      style: _objectSpread(_objectSpread({}, tabS("whelping")), {}, { opacity: hasWhelpingKennel ? 1 : 0.4 }),
      onClick: function(){ setTab("whelping"); },
      title: hasWhelpingKennel ? "Whelping Kennel" : "Purchase a Whelping Kennel to unlock"
    }, "\uD83C\uDFE5 Whelping", whelpingLitters.length > 0 ? " ("+whelpingLitters.length+"/4)" : " (0/4)"),
    holdingPups.length > 0 && /*#__PURE__*/React.createElement("button", {
      style: { background: tab==="holding"?"#2a1e14":"transparent", border:"1px solid #22c55e", color:"#22c55e",
        borderRadius:6, padding:"5px 14px", cursor:"pointer", fontSize:"0.82rem" },
      onClick: function(){ setTab("holding"); }
    }, "\uD83D\uDC3E Holding (", holdingPups.length, ")")
  , /*#__PURE__*/React.createElement("button", {
      style: tabS("farm"),
      onClick: function(){ setTab("farm"); }
    }, "\uD83C\uDFD8 Farm")
  ), tab === "kennel" && /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }
  },

  /*#__PURE__*/React.createElement("div", {
    style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", padding: "10px 0" }
  },
    /*#__PURE__*/React.createElement("div", {
      style: { display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8, padding: "0 4px" }
    },
      kennels.map(function(k) {
        var kt = KENNEL_TYPES[k.type];
        var cnt = getKennelCount(k.id);
        var cap = getKennelCapacity(k);
        var isFull = cnt >= cap;
        var isActive = k.id === (activeKennelId || (kennels[0] && kennels[0].id));
        return /*#__PURE__*/React.createElement("button", {
          key: k.id,
          onClick: function(){ setActiveKennelId(k.id); },
          style: {
            background: isActive ? "#443828" : "transparent",
            border: "2px solid " + (isActive ? kt.color : "#4a3a28"),
            color: isActive ? kt.color : "#8a7055",
            borderRadius: 8, padding: "4px 10px", cursor: "pointer", fontSize: "0.75rem",
            display: "flex", alignItems: "center", gap: 4
          }
        },
          kt.icon + " " + k.name + " ",
          /*#__PURE__*/React.createElement("span", {
            style: {
              background: isFull ? "#481808" : "#2a1e14",
              color: isFull ? "#ef4444" : "#22c55e",
              borderRadius: 4, padding: "1px 5px", fontSize: "0.7rem", fontWeight: "bold"
            }
          }, cnt + "/" + cap)
        );
      }),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowKennelMgr(function(v){ return !v; }); },
        style: {
          background: showKennelMgr ? "#3a2810" : "transparent",
          border: "1px solid " + (showKennelMgr ? "#d4942a" : "#4a3a28"),
          color: showKennelMgr ? "#d4942a" : "#8a7055",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem"
        }
      }, showKennelMgr ? "\u2715 Close" : "+ Manage Kennels"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowMarket(true); },
        style: {
          background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: 16
        }
      }, "\uD83D\uDC04 Livestock Market"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowCatLady(true); },
        style: {
          background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: 8
        }
      }, "\uD83D\uDC08 Old Cat Lady"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowFacilities(true); },
        style: {
          background: "transparent", border: "1px solid #4a3a28", color: "#8a7055",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: "auto"
        }
      }, "\uD83C\uDFD7 Facilities"),
      /*#__PURE__*/React.createElement("span", {
        style: { color: "#6b5038", fontSize: "0.68rem" }
      }, "Aerial View \u00B7 Click \uD83C\uDFE0 Kennel to see cards")
    ),
    showKennelMgr && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#1a1410", border: "1px solid #4a3a28", borderRadius: 10,
        padding: "12px 14px", marginBottom: 8, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center"
      }
    },
      /*#__PURE__*/React.createElement("span", { style: { color: "#8a7055", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" } }, "Add Kennel:"),
      Object.entries(KENNEL_TYPES).map(function(entry) {
        var typeKey = entry[0], kt = entry[1];
        return /*#__PURE__*/React.createElement("button", {
          key: typeKey,
          onClick: function(){
            if (money < kt.cost) { alert("Not enough funds!\nNeed " + formatMoney(kt.cost) + ", you have " + formatMoney(money) + "."); return; }
            var name = prompt("Purchase " + kt.label + " for " + formatMoney(kt.cost) + "?\nEnter a name:", kt.label + " " + (kennels.filter(function(k){ return k.type===typeKey; }).length + 1));
            if (name) {
              var nk = makeKennel(typeKey, name);
              setKennels(function(p){ return [].concat(_toConsumableArray(p),[nk]); });
              setActiveKennelId(nk.id);
              setMoney(function(m){ return m - kt.cost; });
              setLog(function(lg){ return [{ id:Date.now(), type:"financial", name:"Purchased " + kt.label + ": " + name, amount: -kt.cost, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
            }
          },
          style: {
            background: "#443828", border: "1px solid " + kt.color, color: kt.color,
            borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: "0.75rem"
          }
        }, kt.icon + " " + kt.label + " (" + kt.capacity + " dogs · " + formatMoney(kt.cost) + ")");
      }),
      kennels.length > 1 && /*#__PURE__*/React.createElement("button", {
        onClick: function(){
          var actK = kennels.find(function(k){ return k.id === (activeKennelId || (kennels[0] && kennels[0].id)); });
          if (actK && animals.filter(function(a){ return !a.retired && a.kennelId===actK.id; }).length === 0) {
            if (confirm("Delete \"" + actK.name + "\"? It is empty.")) {
              setKennels(function(p){ return p.filter(function(k){ return k.id !== actK.id; }); });
              setActiveKennelId(null);
            }
          } else {
            alert("Move or rehome all active dogs first before deleting a kennel.");
          }
        },
        style: {
          background: "#481808", border: "1px solid #ef4444", color: "#fca5a5",
          borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: "0.72rem", marginLeft: "auto"
        }
      }, "\uD83D\uDDD1\uFE0F Delete Active Kennel")
    ),
    /*#__PURE__*/React.createElement("div", {
      style: { flex: 1, background: "#1a1410", borderRadius: 12, border: "1px solid #2e2218", padding: "14px 18px", overflowY: "auto" }
    },
      /*#__PURE__*/React.createElement("div", { style: { color: "#8a7055", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 } },
        "\uD83D\uDC15 " + (activeKennel ? activeKennel.name : "Kennel") + " \u00B7 Dogs"
      ),
      (function(){
        var kennelDogs = animals.filter(function(a){ return !a.retired && a.kennelId === (activeKennel ? activeKennel.id : null); });
        if (kennelDogs.length === 0) {
          return /*#__PURE__*/React.createElement("div", { style: { color: "#4a3a28", fontSize: "0.82rem", padding: "20px 0" } }, "No dogs yet \u2014 use Buy Dogs to add some.");
        }
        return /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } },
          kennelDogs.map(function(a){
            var sz = getCurrentSize(a);
            return /*#__PURE__*/React.createElement("div", { key: a.id,
              style: { display: "flex", gap: 10, alignItems: "center", padding: "5px 8px", background: "#241a10",
                borderRadius: 6, fontSize: "0.8rem", color: "#c4956a", cursor: "pointer" },
              onClick: function(){ setLitterViewPup(a); }
            },
              /*#__PURE__*/React.createElement("span", { style: { fontWeight: "bold", minWidth: 110 } }, a.name),
              /*#__PURE__*/React.createElement("span", { style: { color: "#8a7055", fontSize: "0.72rem" } }, a.breed),
              /*#__PURE__*/React.createElement("span", { style: { color: a.sex === "M" ? "#60a5fa" : "#f472b6", fontSize: "0.72rem", marginLeft: "auto" } }, a.sex === "M" ? "\u2642" : "\u2640"),
              /*#__PURE__*/React.createElement("span", { style: { color: "#6b5038", fontSize: "0.72rem" } }, Math.round((a.ageMonths||0)/12*10)/10 + " yrs"),
              /*#__PURE__*/React.createElement("span", { style: { color: "#6b5038", fontSize: "0.72rem" } }, sz.currentW + " lbs"),
              /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28", fontSize: "0.68rem" } }, "view \u25BA")
            );
          }),
          litterViewPup && /*#__PURE__*/React.createElement("div", {
            style: { position:"absolute", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.82)",
              zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:12 },
            onClick: function(){ setLitterViewPup(null); }
          },
            /*#__PURE__*/React.createElement("div", {
              style: { background:"#2a1e14", border:"1px solid #c4956a", borderRadius:10,
                padding:"12px", width:"92%", position:"relative" },
              onClick: function(e){ e.stopPropagation(); }
            },
              /*#__PURE__*/React.createElement("button", {
                onClick: function(){ setLitterViewPup(null); },
                style: { position:"absolute", top:8, right:10, background:"transparent", border:"none",
                  color:"#8a7055", fontSize:"1.2rem", cursor:"pointer", lineHeight:1 }
              }, "\u2715"),
              /*#__PURE__*/React.createElement(Card, { animal: litterViewPup })
            )
          )
        );
      })()
    )
  ),

  kennelOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.6)", zIndex: 50,
      display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 48
    },
    onClick: function(){ setKennelOpen(false); }
  },
    /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#3d2f1e", border: "1px solid #4a3a28", borderRadius: 10,
        width: 710, maxHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column",
        overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.6)"
      },
      onClick: function(e){ e.stopPropagation(); }
    },
    /*#__PURE__*/React.createElement("div", {
      style: { background: "#443828", borderBottom: "1px solid #4a3a28", padding: "10px 14px",
        display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", flexShrink: 0 }
    },
      /*#__PURE__*/React.createElement("div", { style: { color: "#c4956a", fontSize: "0.82rem", fontWeight: "bold" } },
        "\uD83D\uDC15 " + (activeKennel ? activeKennel.name : "Kennel")
      ),
      /*#__PURE__*/React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" } },
        ["All","M","F"].map(function(s){
          return /*#__PURE__*/React.createElement("button", {
            key:s, onClick:function(){ setFilterSex(s); },
            style: { background:filterSex===s?"#3a2810":"transparent", border:"1px solid "+(filterSex===s?"#d4942a":"#4a3a28"),
              color:filterSex===s?"#d4942a":"#8a7055", borderRadius:5,padding:"3px 10px",cursor:"pointer",fontSize:"0.75rem" }
          }, s==="All"?"All":s==="M"?"Males \u2642":"Females \u2640");
        }),
        /*#__PURE__*/React.createElement("button", {
          onClick: function(){ setKennelOpen(false); },
          style: { background:"#481808",border:"1px solid #ef4444",color:"#fca5a5", borderRadius:6,padding:"4px 12px",cursor:"pointer",fontSize:"0.75rem" }
        }, "\u2715 Close")
      )
    ),
    filtered.length === 0
      ? /*#__PURE__*/React.createElement("div", {
          style: { flex:1,textAlign:"center",color:"#6b5038",padding:"50px 0",fontSize:"0.85rem" }
        }, "No animals yet \u2014 use Buy Dogs to add some!")
      : (function(){
          var a = filtered[safeKennelIdx];
          var arrowBtn = function(dir,disabled){
            return /*#__PURE__*/React.createElement("button", {
              onClick: function(e){ e.stopPropagation(); setKennelIdx(safeKennelIdx+dir); },
              disabled: disabled,
              style: { position:"absolute",top:8,left:dir<0?6:"auto",right:dir>0?6:"auto",
                background:disabled?"rgba(30,18,8,0.4)":"rgba(30,18,8,0.85)",
                border:"1px solid "+(disabled?"#443828":"#4a3a28"),
                color:disabled?"#3a2810":"#b09070",
                borderRadius:8,width:38,height:38,cursor:disabled?"default":"pointer",
                fontSize:"1.1rem",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center" }
            }, dir<0?"\u25C4":"\u25BA");
          };
          return /*#__PURE__*/React.createElement("div", { style: { display:"flex", flexDirection:"column", overflow:"auto" } },
            /*#__PURE__*/React.createElement("div", {
              style: { color:"#6b5038",fontSize:"0.72rem",padding:"6px 0",textAlign:"center",flexShrink:0 }
            }, safeKennelIdx+1, " of ", filtered.length),
            /*#__PURE__*/React.createElement("div", { style: { position:"relative", display:"flex", flexDirection:"column" } },
              arrowBtn(-1, safeKennelIdx===0),
              /*#__PURE__*/React.createElement("div", { style: { display:"flex", flexDirection:"column", padding:"0 44px" } },
                /*#__PURE__*/React.createElement(Card, {
                  animal:a, onSelect:selectAnimal,
                  isSelected:(sire&&sire.id===a.id)||(dam&&dam.id===a.id),
                  ineligibleReason:breedingIneligibleReason(a),
                  onRemove:function(id){ setActionModalId(id); },
                  onRename:renameAnimal, fullHeight:false,
                  onStud:function(a){ toggleStud(a.id); },
                  onSell:function(a){ handleSellListing(a.id); },
                  onRetire:function(a){ retireAnimal(a.id); }
                }),
                (function(){
                  var r = breedingIneligibleReason(a);
                  if (!r || !r.includes("heat")) return null;
                  return /*#__PURE__*/React.createElement("button", {
                    onClick: function(e){ e.stopPropagation(); selectAnimal(a, true); },
                    style: { width:"100%", marginTop:4, background:"#1a0a2e", border:"1px dashed #7c3aed",
                      color:"#a78bfa", borderRadius:6, padding:"4px 0", cursor:"pointer", fontSize:"0.72rem" }
                  }, "\uD83E\uDDEA DEV: Select anyway");
                })()
              ),
              arrowBtn(1, safeKennelIdx>=filtered.length-1)
            )
          );
        })()
  )
    )
  ), tab === "breed" && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#443828",
      border: "1px solid #4a3a28",
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#d4942a",
      fontSize: "0.82rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "\u2642 Sire"), sire ? /*#__PURE__*/React.createElement(Card, {
    animal: sire,
    isSelected: true
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6b5038",
      textAlign: "center",
      padding: "30px 0",
      fontSize: "0.85rem"
    }
  }, "Go to Kennel \u2192 click a male")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#443828",
      border: "1px solid #4a3a28",
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4956a",
      fontSize: "0.82rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "\u2640 Dam"), dam ? /*#__PURE__*/React.createElement(Card, {
    animal: dam,
    isSelected: true
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6b5038",
      textAlign: "center",
      padding: "30px 0",
      fontSize: "0.85rem"
    }
  }, "Go to Kennel \u2192 click a female"))), sire && dam && (((_sire$genome$coat$M = sire.genome.coat.M) === null || _sire$genome$coat$M === void 0 ? void 0 : _sire$genome$coat$M[0]) === "M" || ((_sire$genome$coat$M2 = sire.genome.coat.M) === null || _sire$genome$coat$M2 === void 0 ? void 0 : _sire$genome$coat$M2[1]) === "M") && (((_dam$genome$coat$M = dam.genome.coat.M) === null || _dam$genome$coat$M === void 0 ? void 0 : _dam$genome$coat$M[0]) === "M" || ((_dam$genome$coat$M2 = dam.genome.coat.M) === null || _dam$genome$coat$M2 === void 0 ? void 0 : _dam$genome$coat$M2[1]) === "M") && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#481808",
      border: "1px solid #ef4444",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 12,
      color: "#fca5a5",
      fontSize: "0.82rem"
    }
  }, "\u26A0\uFE0F MERLE \xD7 MERLE \u2014 25% chance of double merle (deaf/blind) pups!"), (function() {
    var sireReason = sire ? breedingIneligibleReason(sire) : null;
    var damReason = dam ? breedingIneligibleReason(dam) : null;
    var sameSex = sire && dam && sire.sex === dam.sex;
    var sameAnimal = sire && dam && sire.id === dam.id;
    var warnings = [];
    if (sameAnimal) warnings.push("⚠️ Same animal selected as both sire and dam");
    else if (sameSex) warnings.push("⚠️ Both selected animals are the same sex");
    if (sireReason) warnings.push("⚠️ Sire ineligible: " + sireReason);
    if (damReason) warnings.push("⚠️ Dam ineligible: " + damReason);
    if (warnings.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#2d1a00", border: "1px solid #d4860a", borderRadius: 8,
        padding: "10px 14px", marginBottom: 12, fontSize: "0.82rem", color: "#f0c040"
      }
    }, warnings.map(function(w, i) {
      return /*#__PURE__*/React.createElement("div", { key: i }, w);
    }));
  })(), /*#__PURE__*/React.createElement("button", {
    onClick: doBreed,
    disabled: !sire || !dam || !!(sire && breedingIneligibleReason(sire)) || !!(dam && breedingIneligibleReason(dam)) || (sire && dam && sire.id === dam.id) || (sire && dam && sire.sex === dam.sex),
    style: {
      width: "100%",
      background: sire && dam ? "linear-gradient(135deg,#3a2810,#362210)" : "#443828",
      border: "2px solid ".concat(sire && dam ? "#d4942a" : "#4a3a28"),
      color: sire && dam ? "#f0e6d3" : "#6b5038",
      borderRadius: 8,
      padding: 12,
      cursor: (sire && dam) ? "pointer" : "not-allowed",
      fontSize: "0.95rem",
      fontWeight: "bold",
      letterSpacing: "0.03em"
    }
  }, sire && dam ? "🧬 BREED SELECTED PAIR" : "Select a sire ♂ and dam ♀ to breed"),
  sire && dam && sire.sex !== dam.sex && sire.id !== dam.id && /*#__PURE__*/React.createElement("button", {
    onClick: doBreed,
    title: "DEV MODE: Bypasses heat cycle and eligibility checks",
    style: {
      width: "100%", marginTop: 6,
      background: "#1a0a2e", border: "2px dashed #7c3aed",
      color: "#a78bfa", borderRadius: 8, padding: "8px 12px",
      cursor: "pointer", fontSize: "0.78rem", fontWeight: "bold", letterSpacing: "0.03em"
    }
  }, "\uD83E\uDDEA DEV: Force Breed (bypasses heat check)")), tab === "litter" && /*#__PURE__*/React.createElement("div", { style: { position: "relative" } },
    litter.length === 0 && whelpingLitters.length === 0
      ? /*#__PURE__*/React.createElement("div", { style: { textAlign:"center", color:"#6b5038", padding:"60px 0" } }, "No litter yet \u2014 go to the Breed tab!")
      : /*#__PURE__*/React.createElement(React.Fragment, null,
          litter.length > 0 && /*#__PURE__*/React.createElement("div", {
            style: { background:"#1a1410", border:"1px solid #d4860a", borderRadius:8, padding:"10px 14px", marginBottom:10 }
          },
            /*#__PURE__*/React.createElement("div", { style:{ color:"#f0c040", fontWeight:"bold", fontSize:"0.82rem", marginBottom:6 } },
              "\uD83D\uDC3E Litter \u00B7 ", litter[0].sireBreed, " \xD7 ", litter[0].damBreed, " \u00B7 ", litter.length, " pups \u00B7 No Whelping Kennel \u2014 select 1 to keep"
            ),
            litter.map(function(pup){
              var sel = litterSelected.includes(pup.id);
              return /*#__PURE__*/React.createElement("div", { key: pup.id,
                style: { display:"flex", alignItems:"center", gap:8, padding:"5px 8px", marginBottom:3,
                  background: sel ? "#0a2a15" : "#241a10", borderRadius:6,
                  border: "1px solid " + (sel ? "#22c55e" : "#2e2218"), cursor:"pointer" },
                onClick: function(){ setLitterViewPup(pup); }
              },
                /*#__PURE__*/React.createElement("span", { style:{ color: sel?"#22c55e":"#c4956a", fontWeight:"bold", fontSize:"0.8rem", minWidth:120 } }, pup.name || (pup.breed + " Pup")),
                /*#__PURE__*/React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, pup.breed),
                /*#__PURE__*/React.createElement("span", { style:{ color: pup.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.72rem" } }, pup.sex==="M"?"\u2642":"\u2640"),
                /*#__PURE__*/React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.72rem", marginLeft:"auto" } }, "tap to view"),
                /*#__PURE__*/React.createElement("div", {
                  style: { background: sel?"#22c55e":"#4a3a28", color: sel?"#000":"#8a7055", borderRadius:4, padding:"2px 8px", fontSize:"0.7rem", fontWeight:"bold" },
                  onClick: function(e){ e.stopPropagation(); toggleLitterSelect(pup.id); }
                }, sel ? "\u2713 Keep" : "Select")
              );
            }),
            /*#__PURE__*/React.createElement("button", {
              onClick: finalizeLitter,
              style: { marginTop:8, width:"100%", background:"#0a2a15", border:"2px solid #22c55e", color:"#22c55e", borderRadius:8, padding:"8px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
            }, "\u2705 Keep ", litterSelected.length, " \u2014 Rehome rest (", litter.length-litterSelected.length, ")")
          ),
          whelpingLitters.map(function(lit){
            var ageDays = Math.floor((Date.now()-lit.bornDate)/(1000*60*60*24));
            var canWean = ageDays >= 3;
            return /*#__PURE__*/React.createElement("div", { key: lit.litterId,
              style: { background:"#1a1410", border:"1px solid #6d28d9", borderRadius:8, padding:"10px 14px", marginBottom:10 }
            },
              /*#__PURE__*/React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 } },
                /*#__PURE__*/React.createElement("div", { style:{ color:"#c4956a", fontWeight:"bold", fontSize:"0.82rem" } },
                  "\uD83C\uDFE5 ", lit.dam.name, " \u00B7 ", lit.pups.length, " pups \u00B7 Day ", ageDays, "/3 \u00B7 ", lit.selectedIds.length, "/2 selected"
                ),
                /*#__PURE__*/React.createElement("span", { style:{ fontSize:"0.72rem", color: canWean?"#22c55e":"#d4860a" } },
                  canWean ? "\u2705 Ready to wean" : "\u23F3 "+(3-ageDays)+" day(s) left")
              ),
              lit.pups.map(function(pup){
                var sel = lit.selectedIds.includes(pup.id);
                return /*#__PURE__*/React.createElement("div", { key: pup.id,
                  style: { display:"flex", alignItems:"center", gap:8, padding:"5px 8px", marginBottom:3,
                    background: sel ? "#1a0a2e" : "#241a10", borderRadius:6,
                    border: "1px solid " + (sel ? "#7c3aed" : "#2e2218"), cursor:"pointer" },
                  onClick: function(){ setLitterViewPup(pup); }
                },
                  /*#__PURE__*/React.createElement("span", { style:{ color: sel?"#a78bfa":"#c4956a", fontWeight:"bold", fontSize:"0.8rem", minWidth:120 } }, pup.name || (pup.breed + " Pup")),
                  /*#__PURE__*/React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, pup.breed),
                  /*#__PURE__*/React.createElement("span", { style:{ color: pup.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.72rem" } }, pup.sex==="M"?"\u2642":"\u2640"),
                  /*#__PURE__*/React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.72rem", marginLeft:"auto" } }, "tap to view"),
                  /*#__PURE__*/React.createElement("div", {
                    style: { background: sel?"#7c3aed":"#4a3a28", color: sel?"#fff":"#8a7055", borderRadius:4, padding:"2px 8px", fontSize:"0.7rem", fontWeight:"bold" },
                    onClick: function(e){ e.stopPropagation(); toggleWhelpSelect(lit.litterId, pup.id); }
                  }, sel ? "\u2713 Keep" : "Select")
                );
              }),
              canWean && /*#__PURE__*/React.createElement("button", {
                onClick: function(){ finalizeWhelpingLitter(lit.litterId); },
                style: { marginTop:8, width:"100%", background:"#1a0a2e", border:"2px solid #d4942a", color:"#d4942a", borderRadius:8, padding:"8px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
              }, "\uD83C\uDFE0 Wean Litter \u2014 Keep ", lit.selectedIds.length, ", Rehome ", lit.pups.length-lit.selectedIds.length)
            );
          }),
          litterViewPup && /*#__PURE__*/React.createElement("div", {
            style: { position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.82)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center" },
            onClick: function(){ setLitterViewPup(null); }
          },
            /*#__PURE__*/React.createElement("div", {
              style: { background:"#2a1e14", border:"1px solid #c4956a", borderRadius:10, padding:"12px", maxWidth:360, width:"92%", position:"relative" },
              onClick: function(e){ e.stopPropagation(); }
            },
              /*#__PURE__*/React.createElement("button", {
                onClick: function(){ setLitterViewPup(null); },
                style: { position:"absolute", top:8, right:10, background:"transparent", border:"none", color:"#8a7055", fontSize:"1.2rem", cursor:"pointer", lineHeight:1 }
              }, "\u2715"),
              /*#__PURE__*/React.createElement(Card, { animal: litterViewPup })
            )
          )
      )
  ),
  tab === "whelping" && /*#__PURE__*/React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 0", fontSize:"0.85rem" } },
    "Whelping litters have moved to the ", /*#__PURE__*/React.createElement("span", { style:{color:"#d4942a", cursor:"pointer", textDecoration:"underline"}, onClick:function(){ setTab("litter"); } }, "\uD83D\uDC3E Litter"), " tab."
  ),
  tab === "holding" && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style:{color:"#22c55e",fontWeight:"bold",fontSize:"1rem",marginBottom:10} }, "\uD83D\uDC3E Temporary Holding"),
    /*#__PURE__*/React.createElement("div", { style:{fontSize:"0.78rem",color:"#8a7055",marginBottom:12} }, "Pups here are aging. Move them to a kennel before they grow up unused!"),
    holdingPups.length === 0
      ? /*#__PURE__*/React.createElement("div", { style:{textAlign:"center",color:"#6b5038",padding:"40px 0"} }, "No pups in holding.")
      : /*#__PURE__*/React.createElement("div", { style:{display:"flex",flexWrap:"wrap",gap:12} },
          holdingPups.map(function(pup) {
            var days = Math.floor((Date.now()-(pup.heldSince||Date.now()))/(1000*60*60*24));
            return /*#__PURE__*/React.createElement("div", { key:pup.id },
              /*#__PURE__*/React.createElement(Card, { animal:pup }),
              /*#__PURE__*/React.createElement("div", { style:{fontSize:"0.7rem",color:"#8a7055",textAlign:"center",margin:"2px 0 4px"} }, "In holding: ", days, " day", days!==1?"s":""),
              /*#__PURE__*/React.createElement("div", { style:{display:"flex",gap:4} },
                /*#__PURE__*/React.createElement("button", {
                  onClick: function(){ placeHoldingPup(pup.id); },
                  style:{flex:1,background:"#0a2a15",border:"1px solid #22c55e",color:"#22c55e",borderRadius:6,padding:"5px 0",cursor:"pointer",fontSize:"0.75rem"}
                }, "\u2192 Move to Kennel"),
                /*#__PURE__*/React.createElement("button", {
                  onClick: function(){ rehomeHoldingPup(pup.id); },
                  style:{background:"#442e18",border:"1px solid #6d28d9",color:"#c4956a",borderRadius:6,padding:"5px 8px",cursor:"pointer",fontSize:"0.75rem"}
                }, "\uD83D\uDE90")
              )
            );
          })
        )
  ),

  tab === "stud" && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style:{ color:"#5aaa30", fontWeight:"bold", fontSize:"1.05rem", marginBottom:16, paddingBottom:10, borderBottom:"1px solid #4a3a28", letterSpacing:"0.03em" } }, "\uD83D\uDC3E Stud Roster"),
    (function(){
      var studs = animals.filter(function(a){ return !a.retired && a.sex==="M"; });
      if (studs.length === 0) return /*#__PURE__*/React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "No males in your kennel yet.");
      return /*#__PURE__*/React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:10 } },
        studs.map(function(a){
          return /*#__PURE__*/React.createElement("div", { key:a.id, style:{
            background: a.isStud ? "#0a1f0a" : "#1a1410",
            border: "1px solid " + (a.isStud ? "#22c55e" : "#443828"),
            borderRadius:10, padding:"12px 16px", display:"flex", alignItems:"center", gap:12
          }},
            /*#__PURE__*/React.createElement("div", { style:{ flex:1 } },
              /*#__PURE__*/React.createElement("div", { style:{ fontWeight:"bold", fontSize:"0.95rem", color:"#f0e6d3" } }, a.name),
              /*#__PURE__*/React.createElement("div", { style:{ fontSize:"0.78rem", color:"#8a7055", marginTop:2 } },
                a.breed, " \u00B7 ", a.size, " \u00B7 ",
                Math.round((a.ageMonths||0)/12*10)/10, " yrs"
              ),
              a.isStud && /*#__PURE__*/React.createElement("div", { style:{ fontSize:"0.8rem", color:"#22c55e", marginTop:4 } },
                "Stud Fee: $", (a.studFee||0).toLocaleString(),
                " \u00B7 ",
                /*#__PURE__*/React.createElement("span", { style:{ color:"#b09070", fontSize:"0.75rem" } }, "One breeding per payment \u00B7 Auto-delists after use")
              )
            ),
            /*#__PURE__*/React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:6, alignItems:"flex-end" } },
              a.isStud && /*#__PURE__*/React.createElement("button", {
                onClick: function(){
                  var fee = prompt('Update stud fee for "' + a.name + '":', a.studFee||150);
                  if (fee && !isNaN(fee) && Number(fee) > 0) {
                    setAnimals(function(prev){ return prev.map(function(x){ return x.id===a.id ? Object.assign({},x,{studFee:Number(fee)}) : x; }); });
                  }
                },
                style:{ background:"#2a1e14", border:"1px solid #22c55e", color:"#22c55e",
                  borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:"0.75rem" }
              }, "Edit Fee"),
              /*#__PURE__*/React.createElement("button", {
                onClick: function(){ toggleStud(a.id); },
                style:{ background: a.isStud?"#481808":"#2a1e14",
                  border:"1px solid "+(a.isStud?"#ef4444":"#22c55e"),
                  color: a.isStud?"#fca5a5":"#22c55e",
                  borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
              }, a.isStud ? "Remove from Stud" : "\uD83D\uDC3E List as Stud")
            )
          );
        })
      );
    })()
  ),
  tab === "log" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8a020",
      fontWeight: "bold",
      fontSize: "1.05rem",
      marginBottom: 16,
      paddingBottom: 10,
      borderBottom: "1px solid #4a3a28",
      letterSpacing: "0.03em"
    }
  }, "\uD83D\uDCD3 Activity Journal"),
  log.length === 0
    ? /*#__PURE__*/React.createElement("div", {
        style: { textAlign: "center", color: "#6b5038", padding: "60px 0", fontSize: "0.85rem" }
      }, "No activity yet \u2014 your kennel journal will appear here.")
    : /*#__PURE__*/React.createElement("div", { style: { maxHeight: "calc(100vh - 220px)", overflowY: "auto", paddingRight: 4 } },
        log.slice(0, 50).map(function(e) {
          // ── Entry config by type ──────────────────────────────────────
          var cfg = {
            breed:         { icon:"\uD83E\uDEC2", border:"#3a2810", bg:"#443828", label:"Breeding" },
            rehome:        { icon:"\uD83D\uDE90", border:"#6d28d9", bg:"#443828", label:"Rehomed" },
            retire_player: { icon:"\uD83C\uDFE1", border:"#5aaa30", bg:"#2a1e14", label:"Retired" },
            retire_age:    { icon:"\uD83D\uDC74", border:"#d4960a", bg:"#2a1e14", label:"Retired (Age)" },
            whelping:      { icon:"\uD83D\uDC23", border:"#e870a0", bg:"#381808", label:"Whelping" },
            pups_holding:  { icon:"\uD83D\uDC36", border:"#22c55e", bg:"#0a2a15", label:"Pups to Holding" },
            financial:     { icon:"\uD83D\uDCB0", border:"#e8a020", bg:"#2a1e14", label:"Financial" },
            incident:      { icon:"\u26A0\uFE0F",  border:"#ef4444", bg:"#381808", label:"Incident" }
          }[e.type] || { icon:"\uD83D\uDCCB", border:"#4a3a28", bg:"#443828", label:"Event" };

          return /*#__PURE__*/React.createElement("div", {
            key: e.id,
            style: {
              background: cfg.bg, border: "1px solid " + cfg.border, borderRadius: 8,
              padding: "10px 14px", marginBottom: 8, display: "flex", gap: 12,
              flexWrap: "wrap", alignItems: "flex-start"
            }
          },
            // Icon + type badge
            /*#__PURE__*/React.createElement("div", { style: { display:"flex", flexDirection:"column", alignItems:"center", minWidth:38, gap:2 } },
              /*#__PURE__*/React.createElement("div", { style: { fontSize:"1.3rem", lineHeight:1 } }, cfg.icon),
              /*#__PURE__*/React.createElement("div", { style: { color: cfg.border, fontSize:"0.58rem", fontWeight:"bold", textTransform:"uppercase", textAlign:"center" } }, cfg.label)
            ),
            // Content
            /*#__PURE__*/React.createElement("div", { style: { flex:1 } },
              // BREED entry
              e.type === "breed" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem", marginBottom:2 } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#d4942a", fontWeight:"bold" } }, e.sire),
                  " \xD7 ",
                  /*#__PURE__*/React.createElement("span", { style: { color:"#c4956a", fontWeight:"bold" } }, e.dam)
                ),
                /*#__PURE__*/React.createElement("div", { style: { display:"flex", gap:12, flexWrap:"wrap", marginTop:4 } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#22c55e", fontSize:"0.8rem" } }, "\uD83D\uDC36 " + e.count + " pups"),
                  e.muts > 0 && /*#__PURE__*/React.createElement("span", { style: { color:"#fb923c", fontSize:"0.8rem" } }, "\u26A1 " + e.muts + " mutation" + (e.muts!==1?"s":"")),
                  e.critFlags > 0 && /*#__PURE__*/React.createElement("span", { style: { color:"#ef4444", fontSize:"0.8rem" } }, "\uD83D\uDEA8 " + e.critFlags + " critical health flag" + (e.critFlags!==1?"s":""))
                )
              ),
              // REHOME entry
              e.type === "rehome" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem" } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#c4956a", fontWeight:"bold" } }, e.name),
                  " placed in a new home"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#8a7055", fontSize:"0.75rem", marginTop:2 } }, e.breed)
              ),
              // RETIRE PLAYER entry
              e.type === "retire_player" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem" } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#5aaa30", fontWeight:"bold" } }, e.name),
                  " retired by owner"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#8a7055", fontSize:"0.75rem", marginTop:2 } }, e.breed + " \u00B7 " + Math.floor((e.ageMonths||0)/12) + " yrs old")
              ),
              // RETIRE AGE entry
              e.type === "retire_age" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem" } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#d4960a", fontWeight:"bold" } }, e.name),
                  " retired \u2014 end of working life"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#8a7055", fontSize:"0.75rem", marginTop:2 } }, e.breed + " \u00B7 " + Math.floor((e.ageMonths||0)/12) + " yrs old")
              ),
              // STUB entries
              (e.type === "whelping" || e.type === "pups_holding" || e.type === "financial" || e.type === "incident" || e.type === "whelp") && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.85rem", color: e.type==="incident" ? "#fca5a5" : e.type==="financial" ? "#f0c040" : "#b09070" } },
                  e.type==="financial" ? (e.name + (e.amount ? "  " + (e.amount > 0 ? "+" : "") + formatMoney(e.amount) : "")) :
                  e.type==="incident" ? ("\u26A0\uFE0F " + e.name + (e.fine ? "  Fine: " + formatMoney(e.fine) : "")) :
                  e.type==="pups_holding" ? (e.count + " pup" + (e.count!==1?"s":"") + " moved to temporary holding") :
                  e.type==="whelp" ? (e.name + " \u2014 " + (e.note||"Whelping event")) :
                  (e.note || cfg.label + " event")
                ),
                e.detail && /*#__PURE__*/React.createElement("div", { style: { color:"#8a7055", fontSize:"0.75rem", marginTop:2 } }, e.detail)
              ),
              // Timestamp
              /*#__PURE__*/React.createElement("div", { style: { color:"#4a3a28", fontSize:"0.65rem", marginTop:4 } }, e.date)
            )
          );
        })
      )
  )), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(90deg,#141008,#1a1008)",
      borderTop: "1px solid #4a3a28",
      padding: "6px 22px",
      display: "flex",
      gap: 16,
      alignItems: "center",
      fontSize: "0.74rem",
      zIndex: 100,
      boxShadow: "0 -2px 12px rgba(0,0,0,0.4)"
    }
  }, sire && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#d4942a", background: "#3a2810", border: "1px solid #4a3a28",
      borderRadius: 4, padding: "2px 8px"
    }
  }, "\u2642 Sire: ", sire.name), dam && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#c4956a", background: "#443828", border: "1px solid #4a3a28",
      borderRadius: 4, padding: "2px 8px"
    }
  }, "\u2640 Dam: ", dam.name), sire && dam && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab("breed");
    },
    style: {
      background: "#3a2810",
      border: "1px solid #d4942a",
      color: "#e8a020",
      borderRadius: 4,
      padding: "2px 8px",
      cursor: "pointer",
      fontSize: "0.72rem",
      fontWeight: "bold"
    }
  }, "\u2192 Go Breed"), /*#__PURE__*/React.createElement("div", {
    style: {
      width:"100%", textAlign:"center", color:"#6b5038",
      fontSize:"0.65rem", padding:"4px 0", letterSpacing:"0.03em"
    }
  }, "\uD83E\uDDEC 8 coat loci \xB7 8 health loci \xB7 5 perf QTLs \xB7 0.5% mutation rate \xB7 COI tracking"),
  /*#__PURE__*/React.createElement(Clock, { gameStartDate: gameStartDate }),
  tab === "farm" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }
  }, /*#__PURE__*/React.createElement(FarmView, {
    facilitiesOwned: facilitiesOwned,
    kennels: kennels,
    animals: animals,
    ownedLivestock: ownedLivestock,
    money: money,
    hasWhelpingKennel: hasWhelpingKennel,
    commodities: commodities,
    onClose: function(){ setTab("kennel"); }
  })),
  showBuyDogs && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.6)", zIndex:150, display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:8 },
    onClick: function(){ setShowBuyDogs(false); }
  },
    /*#__PURE__*/React.createElement("div", {
      style: { background:"#2a1e14", borderTop:"4px solid #d4942a", borderLeft:"2px solid #4a3a28", borderRight:"2px solid #4a3a28", borderBottom:"2px solid #4a3a28",
        borderRadius:"0 0 10px 10px", padding:"10px 14px", width:"calc(100% - 32px)", maxWidth:680, display:"flex", flexDirection:"column", gap:8 },
      onClick: function(e){ e.stopPropagation(); }
    },
      /*#__PURE__*/React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:2 } },
        /*#__PURE__*/React.createElement("span", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.85rem" } }, "\uD83D\uDED2 Buy Dogs"),
        /*#__PURE__*/React.createElement("button", {
          onClick: function(){ setShowBuyDogs(false); },
          style:{ background:"transparent", border:"none", color:"#8a7055", fontSize:"1.1rem", cursor:"pointer" }
        }, "\u2715")
      ),
      /*#__PURE__*/React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" } },
        (function(){
          var groupMap = breeds.slice().sort(function(a,b){ return (a.group||"Other").localeCompare(b.group||"Other") || a.name.localeCompare(b.name); }).reduce(function(acc,b){ var g=b.group||"Other"; if(!acc[g])acc[g]=[]; acc[g].push(b); return acc; }, {});
          var groupNames = Object.keys(groupMap).sort();
          var breedsInGroup = buyGroup ? (groupMap[buyGroup]||[]) : [];
          var selDropStyle = { background:"#1a1410", border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:6, padding:"5px 8px", fontSize:"0.8rem" };
          return /*#__PURE__*/React.createElement(React.Fragment, null,
            /*#__PURE__*/React.createElement("select", { value: buyGroup, onChange: function(e){ setBuyGroup(e.target.value); setBuyBreed(""); }, style: Object.assign({}, selDropStyle, { minWidth:130 }) },
              /*#__PURE__*/React.createElement("option", { value:"" }, "\u2014 Group \u2014"),
              groupNames.map(function(g){ return /*#__PURE__*/React.createElement("option", { key:g, value:g }, g); })
            ),
            /*#__PURE__*/React.createElement("select", { value: buyBreed, onChange: function(e){ setBuyBreed(e.target.value); }, disabled: !buyGroup, style: Object.assign({}, selDropStyle, { minWidth:170, opacity: buyGroup?1:0.4 }) },
              /*#__PURE__*/React.createElement("option", { value:"" }, buyGroup ? "\u2014 Breed \u2014" : "\u2014 Pick group first \u2014"),
              breedsInGroup.map(function(b){ return /*#__PURE__*/React.createElement("option", { key:b.name, value:b.name }, b.name); })
            ),
            [{ label:"\uD83D\uDC3E Puppy", age:12 }, { label:"\uD83D\uDC15 Adult", age:20 }].map(function(opt){
              return /*#__PURE__*/React.createElement("button", { key: opt.age, onClick: function(){ setAddAge(opt.age); },
                style: { background: addAge===opt.age?"#3a2810":"transparent", border:"1px solid "+(addAge===opt.age?"#d4942a":"#4a3a28"), color:addAge===opt.age?"#d4942a":"#8a7055", borderRadius:6, padding:"4px 9px", cursor:"pointer", fontSize:"0.75rem" }
              }, opt.label);
            }),
            /*#__PURE__*/React.createElement("button", {
              onClick: function(){ if(buyBreed) addAnimal(buyBreed,"M",addAge); }, disabled: !buyBreed,
              style: { background:buyBreed?"#3a2810":"#2e2418", border:"1px solid "+(buyBreed?"#d4942a":"#4a3a28"), color:buyBreed?"#e8a020":"#6b5038", borderRadius:6, padding:"5px 10px", cursor:buyBreed?"pointer":"not-allowed", fontSize:"0.8rem" }
            }, "+ Male \u2642 (" + formatMoney(addAge<=12?DOG_COST_PUPPY:DOG_COST_ADULT) + ")"),
            /*#__PURE__*/React.createElement("button", {
              onClick: function(){ if(buyBreed) addAnimal(buyBreed,"F",addAge); }, disabled: !buyBreed,
              style: { background:buyBreed?"#442e18":"#2e2418", border:"1px solid "+(buyBreed?"#c4956a":"#4a3a28"), color:buyBreed?"#c4956a":"#6b5038", borderRadius:6, padding:"5px 10px", cursor:buyBreed?"pointer":"not-allowed", fontSize:"0.8rem" }
            }, "+ Female \u2640 (" + formatMoney(addAge<=12?DOG_COST_PUPPY:DOG_COST_ADULT) + ")")
          );
        })()
      )
    )
  ),
  pendingBoughtDog && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.8)", zIndex:160, display:"flex", alignItems:"center", justifyContent:"center" }
  },
    /*#__PURE__*/React.createElement("div", {
      style: { background:"#2a1e14", border:"1px solid #d4942a", borderRadius:12, padding:"14px", maxWidth:400, width:"92%", display:"flex", flexDirection:"column", gap:10 }
    },
      /*#__PURE__*/React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.85rem", marginBottom:2 } }, "\uD83D\uDED2 Dog Acquired \u2014 Keep or Release?"),
      /*#__PURE__*/React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.72rem", marginBottom:4 } }, "Money already spent. Releasing means this dog goes free \u2014 no refund."),
      /*#__PURE__*/React.createElement(Card, { animal: pendingBoughtDog }),
      /*#__PURE__*/React.createElement("div", { style:{ display:"flex", gap:10, marginTop:4 } },
        /*#__PURE__*/React.createElement("button", {
          onClick: function(){
            setAnimals(function(p){ return [].concat(_toConsumableArray(p), [pendingBoughtDog]); });
            setPendingBoughtDog(null);
            setShowBuyDogs(false);
          },
          style: { flex:1, background:"#0a2a15", border:"2px solid #22c55e", color:"#22c55e", borderRadius:8, padding:"9px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
        }, "\u2705 Keep"),
        /*#__PURE__*/React.createElement("button", {
          onClick: function(){ setPendingBoughtDog(null); },
          style: { flex:1, background:"#2a0a0a", border:"2px solid #ef4444", color:"#ef4444", borderRadius:8, padding:"9px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
        }, "\uD83D\uDEAA Release (no refund)")
      )
    )
  ),
showShearing && /*#__PURE__*/React.createElement(ShearingModal, {
    onClose: function(){ setShowShearing(false); },
    ownedLivestock: ownedLivestock,
    sheepSheared: sheepSheared,
    gameStartDate: gameStartDate,
    hasShed: !!facilitiesOwned.shearing_shed,
    onShear: function(animal, seasonKey) {
      var yieldLbs = animal.shearYield || (Math.floor(Math.random()*4)+7);
      var storageMult = getStorageMult(facilitiesOwned);
      var finalYield = Math.round(yieldLbs * storageMult * 10) / 10;
      setSheepSheared(function(s){ return Object.assign({}, s, { [animal.id]: seasonKey }); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===animal.id ? Object.assign({},a,{shearYield: Math.floor(Math.random()*4)+7}) : a; }); });
      setCommodities(function(c){ return Object.assign({}, c, { wool: Math.round((c.wool + finalYield)*10)/10 }); });
      setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"income",
        name:"\uD83D\uDC11 Sheared: "+(animal.breed||"Sheep")+" \u2014 +"+finalYield+" lbs wool",
        date:new Date().toLocaleString() }].concat(lg); });
    },
    onShearAll: function(animals, seasonKey) {
      var storageMult = getStorageMult(facilitiesOwned);
      var totalWool = 0;
      var newSheared = Object.assign({}, sheepSheared);
      var updatedAnimals = ownedLivestock.slice();
      animals.forEach(function(a) {
        var yieldLbs = a.shearYield || (Math.floor(Math.random()*4)+7);
        var finalYield = Math.round(yieldLbs * storageMult * 10) / 10;
        totalWool += finalYield;
        newSheared[a.id] = seasonKey;
        updatedAnimals = updatedAnimals.map(function(u){ return u.id===a.id ? Object.assign({},u,{shearYield: Math.floor(Math.random()*4)+7}) : u; });
      });
      totalWool = Math.round(totalWool * 10) / 10;
      setSheepSheared(newSheared);
      setOwnedLivestock(updatedAnimals);
      setCommodities(function(c){ return Object.assign({}, c, { wool: Math.round((c.wool + totalWool)*10)/10 }); });
      setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"income",
        name:"\uD83D\uDC11 Sheared "+animals.length+" sheep \u2014 +"+totalWool+" lbs wool total",
        date:new Date().toLocaleString() }].concat(lg); });
    }
  }),
  showCatLady && /*#__PURE__*/React.createElement(OldCatLady, {
    onClose: function(){ setShowCatLady(false); },
    money: money,
    lastVisit: catLadyLastVisit,
    lastFeedPaid: catLadyLastFeed,
    onPayFeed: function(){
      setMoney(function(m){ return m-150; });
      setCatLadyLastFeed(Date.now());
      setLog(function(lg){ return [{ id:Date.now(), type:"financial",
        name:"Old Cat Lady feed bill", amount:-150, date:new Date().toLocaleString() }].concat(lg); });
    },
    onSetLastVisit: function(t){ setCatLadyLastVisit(t); },
    onReceiveCat: function(cat, msg){
      alert("🐈 \"" + msg + "\"\n\n" + cat.breed + " (" + (cat.sex==="M"?"Male":"Female") + ")\n" + cat.desc);
      setLog(function(lg){ return [{ id:Date.now(), type:"pups_holding",
        name:cat.breed, note:"Received from Old Cat Lady \u2014 " + (cat.sex==="M"?"Male":"Female"),
        count:1, date:new Date().toLocaleString() }].concat(lg); });
    }
  }),
  showFacilities && /*#__PURE__*/React.createElement(Facilities, {
    onClose: function(){ setShowFacilities(false); },
    money: money,
    facilities: facilitiesOwned,
    onBuy: function(key, cost){
      setMoney(function(m){ return m-cost; });
      setFacilitiesOwned(function(f){ var n=Object.assign({},f); n[key]={tier:0}; return n; });
      setLog(function(lg){ return [{ id:Date.now(), type:"financial",
        name:"Built: "+FACILITIES[key].label+" ("+FACILITIES[key].tiers[0].name+")",
        amount:-cost, date:new Date().toLocaleString() }].concat(lg); });
    },
    onUpgrade: function(key, cost){
      setMoney(function(m){ return m-cost; });
      setFacilitiesOwned(function(f){ var n=Object.assign({},f); n[key]={tier:(f[key].tier||0)+1}; return n; });
      setLog(function(lg){ var t=(facilitiesOwned[key]?facilitiesOwned[key].tier:0)+1;
        return [{ id:Date.now(), type:"financial",
          name:"Upgraded: "+FACILITIES[key].label+" to "+FACILITIES[key].tiers[t].name,
          amount:-cost, date:new Date().toLocaleString() }].concat(lg); });
    }
  }),
  showMarket && /*#__PURE__*/React.createElement(LivestockMarket, {
    onClose: function(){
      setShowMarket(false);
      if (marketSession.length > 0) {
        // Group by species
        var grouped = {};
        var totalSpent = 0;
        marketSession.forEach(function(p) {
          if (!grouped[p.species]) grouped[p.species] = { count: 0, spent: 0, males: 0, females: 0 };
          grouped[p.species].count++;
          grouped[p.species].spent += p.price;
          if (p.sex === "M") grouped[p.species].males++;
          else grouped[p.species].females++;
          totalSpent += p.price;
        });
        var speciesIcons = { chicken:"\uD83D\uDC14", duck:"\uD83E\uDD86", pig:"\uD83D\uDC16", goat:"\uD83D\uDC10", sheep:"\uD83D\uDC11", cow:"\uD83D\uDC04", horse:"\uD83D\uDC0E" };
        var lines = Object.keys(grouped).map(function(sp) {
          var g = grouped[sp];
          var icon = speciesIcons[sp] || "\uD83D\uDC3E";
          var sexStr = (g.males > 0 && g.females > 0) ? (g.males+"M / "+g.females+"F") : (g.males > 0 ? g.males+" Male"+(g.males>1?"s":"") : g.females+" Female"+(g.females>1?"s":""));
          return icon+" "+g.count+" "+sp.charAt(0).toUpperCase()+sp.slice(1)+(g.count>1?"s":"")+" ("+sexStr+") \u2014 $"+g.spent.toLocaleString();
        });
        var summary = "\uD83D\uDED2 Market Session\n" + lines.join("\n") + "\nTotal spent: $" + totalSpent.toLocaleString();
        setLog(function(lg){ return [{ id:Date.now(), type:"financial", name:summary, amount:-totalSpent, date:new Date().toLocaleString() }].concat(lg); });
        setMarketSession([]);
      }
    },
    money: money,
    ownedAnimals: animals,
    ownedLivestock: ownedLivestock,
    facilitiesOwned: facilitiesOwned,
    onBuy: function(species, animal){
      if (money < (animal.price||0)) { alert("Not enough funds!\nNeed $"+(animal.price||0).toLocaleString()+", you have $"+money.toLocaleString()); return false; }
      // Check facility capacity
      var facKey = {horse:"stable",cow:"barn",sheep:null,goat:"goat_pen",pig:"pig_pen",duck:"pond",chicken:"chicken_coop"}[species];
      if (species==="cow" && animal.type==="dairy") facKey="milking_barn";
      var grazingSpecies = ["cow","sheep","goat"];
      // Stable check for horses
      if (species==="horse") {
        var stableFac = facilitiesOwned.stable;
        if (!stableFac) { alert("You need a Stable before buying horses."); return false; }
        var stableCap = FACILITIES.stable.tiers[stableFac.tier].capacity;
        var stableUsed = ownedLivestock.filter(function(a){ return a.species==="horse"; }).length;
        if (stableUsed >= stableCap) { alert("Stable is full! Upgrade your stable to fit more horses."); return false; }
      }
      // Facility check for coop/pen/pond/barn
      if (facKey && species!=="horse") {
        var fac = facilitiesOwned[facKey];
        if (!fac) { alert("You need a "+FACILITIES[facKey].label+" before buying "+species+"s."); return false; }
        var cap = FACILITIES[facKey].tiers[fac.tier].capacity;
        var used = ownedLivestock.filter(function(a){ return a.species===species; }).length;
        if (used >= cap) { alert(FACILITIES[facKey].label+" is full! Upgrade to fit more."); return false; }
      }
      // Grazing land check for cows/sheep/goats
      if (grazingSpecies.indexOf(species) > -1) {
        var gFac = facilitiesOwned.grazing_land;
        if (!gFac && species==="cow") { alert("You need Grazing Land for cows."); return false; }
        if (gFac) {
          var acres = FACILITIES.grazing_land.tiers[gFac.tier].capacity;
          var cowsOwned = ownedLivestock.filter(function(a){ return a.species==="cow"; }).length;
          var sgOwned = ownedLivestock.filter(function(a){ return a.species==="sheep"||a.species==="goat"; }).length;
          if (species==="cow" && cowsOwned >= acres*2) { alert("Not enough grazing land! Need 1 acre per 2 cows."); return false; }
          if ((species==="sheep"||species==="goat") && sgOwned >= acres*20) { alert("Grazing land is full! Sheep and goats share 20 per acre."); return false; }
        }
      }
      var spLabel = LIVESTOCK_SPECIES.find(function(s){ return s.key===species; });
      var name = (animal.breed||(spLabel?spLabel.label:species))+" ("+(animal.sex==="F"?"\u2640 Female":"\u2642 Male")+")";
      if (confirm("Purchase "+name+" for $"+(animal.price||0).toLocaleString()+"?")) {
        setMoney(function(m){ return m-(animal.price||0); });
        var animalWithIncome = attachIncomeData(animal, species);
        setOwnedLivestock(function(prev){ return prev.concat([Object.assign({},animalWithIncome,{purchasePrice:animal.price||0})]); });
        setMarketSession(function(sess){ return sess.concat([{ species:species, price:animal.price||0, sex:animal.sex||"F" }]); });
        return true;
      }
      return false;
    },
    onSellBack: function(total, label, itemId, itemSpecies){
      if (!total) return;
      setMoney(function(m){ return m+total; });
      if (itemId && itemSpecies) {
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==itemId; }); });
      }
      // sale logged in grouped session summary on market close
    },
    commodities: commodities,
    onSlaughter: function(animal) {
      if (!facilitiesOwned.slaughterhouse) { alert("You need a Slaughterhouse to process meat."); return; }
      var species = animal.species;
      var meatDef = MEAT_PRICES[species];
      if (!meatDef) { alert("This animal cannot be slaughtered."); return; }
      var info;
      if (species === "cow") {
        info = animal.type === "dairy" ? meatDef.dairy : meatDef;
      } else if (species === "goat") {
        info = meatDef[animal.type] || meatDef;
      } else {
        info = meatDef;
      }
      if (confirm("Send " + (animal.breed||species) + " (" + (animal.type||"") + ") to slaughter?\n\nYields: " + info.label + " worth $" + info.price)) {
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id !== animal.id; }); });
        setCommodities(function(c){ return Object.assign({}, c, { [info.commodity]: (c[info.commodity]||0) + 1 }); });
        setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"financial",
          name:"\uD83E\uDE78 Slaughtered: "+(animal.breed||species)+" \u2014 "+info.label+" added to inventory",
          date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    onSellCommodities: function(key, qty) {
      var info = COMMODITY_PRICES[key];
      if (!info || !qty || qty <= 0) return;
      var total = Math.round(info.price * qty * 100) / 100;
      setCommodities(function(c){ return Object.assign({}, c, { [key]: Math.max(0, (c[key]||0) - qty) }); });
      setMoney(function(m){ return m + total; });
      setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"financial",
        name:"\uD83D\uDCB0 Sold " + qty + " " + info.unit + " " + info.label + " \u2014 +$" + total.toLocaleString(),
        amount: total, date:new Date().toLocaleString() }].concat(lg); });
    }
  })
));
}

// ── LIVESTOCK MARKET ─────────────────────────────────────────


function Facilities(_ref) {
  var onClose=_ref.onClose, money=_ref.money, facilities=_ref.facilities,
      onBuy=_ref.onBuy, onUpgrade=_ref.onUpgrade;

  var _fa=_slicedToArray(useState(null),2),selected=_fa[0],setSelected=_fa[1];

  var keys = Object.keys(FACILITIES);

  return /*#__PURE__*/React.createElement("div",{
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.88)",
      zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}},
    /*#__PURE__*/React.createElement("div",{
      style:{background:"#0a0f1e",border:"1px solid #4a3a28",borderRadius:14,
        width:"min(860px,95vw)",maxHeight:"88vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}},

      // Header
      /*#__PURE__*/React.createElement("div",{
        style:{display:"flex",alignItems:"center",padding:"14px 18px",
          borderBottom:"1px solid #2e2218",gap:12}},
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#f0e6d3",flex:1}},
          "\uD83C\uDFD7 Facilities"),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.78rem",color:"#6b5038"}},
          "Balance: "),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.88rem",fontWeight:"bold",
          color:money>=500?"#22c55e":money>=0?"#d4860a":"#ef4444"}},
          "$"+money.toLocaleString()),
        /*#__PURE__*/React.createElement("button",{onClick:onClose,
          style:{background:"transparent",border:"1px solid #4a3a28",color:"#b09070",
            borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.8rem",marginLeft:8}},
          "\u2715 Close")
      ),

      // Grid of facilities
      /*#__PURE__*/React.createElement("div",{style:{flex:1,overflowY:"auto",padding:"16px 18px"}},
        /*#__PURE__*/React.createElement("div",{style:{display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:10}},
          keys.map(function(key){
            var fac=FACILITIES[key];
            var owned=facilities[key];
            var currentTier=owned?fac.tiers[owned.tier]:null;
            var nextTier=owned&&(owned.tier+1)<fac.tiers.length?fac.tiers[owned.tier+1]:null;
            var firstTier=fac.tiers[0];
            var isMaxed=owned&&(owned.tier+1)>=fac.tiers.length;

            return /*#__PURE__*/React.createElement("div",{key:key,
              style:{background: owned?"#0a1a0a":"#1a1410",
                border:"1px solid "+(owned?"#22c55e":"#443828"),
                borderRadius:10,padding:"14px",display:"flex",flexDirection:"column",gap:8}},

              // Title row
              /*#__PURE__*/React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},
                /*#__PURE__*/React.createElement("span",{style:{fontSize:"1.4rem"}},fac.icon),
                /*#__PURE__*/React.createElement("div",{style:{flex:1}},
                  /*#__PURE__*/React.createElement("div",{style:{fontWeight:"bold",color:"#f0e6d3",fontSize:"0.88rem"}},
                    fac.label),
                  owned
                    ?/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#22c55e"}},
                        currentTier.name+" \u00B7 Capacity: "+currentTier.capacity+
                        (isMaxed?" \u00B7 \u2605 Maxed":""))
                    :/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#6b5038"}},
                        "Not built")
                )
              ),

              // Description
              /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#8a7055",lineHeight:1.4}},
                fac.desc),

              // Upkeep if owned
              owned&&/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#b09070"}},
                "Monthly upkeep: $"+currentTier.upkeep.toLocaleString()),

              // Action button
              !owned
                ?/*#__PURE__*/React.createElement("button",{
                    onClick:function(){
                      if(money<firstTier.cost){
                        alert("Not enough funds.\nNeed $"+firstTier.cost.toLocaleString()+", you have $"+money.toLocaleString());
                        return;
                      }
                      if(confirm("Build "+fac.label+" ("+firstTier.name+") for $"+firstTier.cost.toLocaleString()+"?\nCapacity: "+firstTier.capacity+" \u00B7 Monthly upkeep: $"+firstTier.upkeep)){
                        onBuy(key,firstTier.cost);
                      }
                    },
                    style:{background:money>=firstTier.cost?"#2a1e14":"#381808",
                      border:"1px solid "+(money>=firstTier.cost?"#22c55e":"#ef4444"),
                      color:money>=firstTier.cost?"#22c55e":"#ef4444",
                      borderRadius:6,padding:"6px 0",cursor:"pointer",fontSize:"0.78rem",fontWeight:"bold"}},
                    money>=firstTier.cost
                      ?"Build \u2014 $"+firstTier.cost.toLocaleString()
                      :"Need $"+firstTier.cost.toLocaleString())
                :isMaxed
                  ?/*#__PURE__*/React.createElement("div",{style:{textAlign:"center",fontSize:"0.75rem",
                      color:"#22c55e",padding:"4px 0",fontWeight:"bold"}},
                      "\u2605 Fully Upgraded")
                  :/*#__PURE__*/React.createElement("button",{
                      onClick:function(){
                        if(money<nextTier.cost){
                          alert("Not enough funds.\nUpgrade costs $"+nextTier.cost.toLocaleString()+", you have $"+money.toLocaleString());
                          return;
                        }
                        if(confirm("Upgrade to "+nextTier.name+" for $"+nextTier.cost.toLocaleString()+"?\nNew capacity: "+nextTier.capacity+" \u00B7 New upkeep: $"+nextTier.upkeep+"/mo")){
                          onUpgrade(key,nextTier.cost);
                        }
                      },
                      style:{background:money>=nextTier.cost?"#3a2810":"#381808",
                        border:"1px solid "+(money>=nextTier.cost?"#d4942a":"#ef4444"),
                        color:money>=nextTier.cost?"#d4942a":"#ef4444",
                        borderRadius:6,padding:"6px 0",cursor:"pointer",fontSize:"0.78rem",fontWeight:"bold"}},
                      money>=nextTier.cost
                        ?"\u2191 Upgrade to "+nextTier.name+" \u2014 $"+nextTier.cost.toLocaleString()
                        :"Need $"+nextTier.cost.toLocaleString()+" to upgrade")
            );
          })
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

