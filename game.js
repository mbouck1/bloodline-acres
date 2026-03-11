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
  useRef = _React.useRef,
  createContext = _React.createContext,
  useContext = _React.useContext;

var AnimalsContext = createContext([]);

// ── DRAGGABLE HOOK ────────────────────────────────────────────
// Returns { pos, dragHandleProps, panelStyle }
// pos = { x, y } offset from center. null = centered (default).
// dragHandleProps: spread onto the drag handle element (title bar).
// panelStyle: spread onto the panel wrapper — overrides position when dragged.
function useDrag() {
  var _useState_drag = _slicedToArray(useState(null), 2),
    pos = _useState_drag[0], setPos = _useState_drag[1];
  var dragging = useRef(false);
  var startMouse = useRef({ x:0, y:0 });
  var startPos = useRef({ x:0, y:0 });

  function onMouseDown(e) {
    if (e.button !== 0) return;
    e.preventDefault();
    dragging.current = true;
    var cur = pos || { x:0, y:0 };
    startMouse.current = { x: e.clientX, y: e.clientY };
    startPos.current = { x: cur.x, y: cur.y };
    function onMove(ev) {
      if (!dragging.current) return;
      setPos({
        x: startPos.current.x + (ev.clientX - startMouse.current.x),
        y: startPos.current.y + (ev.clientY - startMouse.current.y)
      });
    }
    function onUp() {
      dragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }

  function onTouchStart(e) {
    var t = e.touches[0];
    dragging.current = true;
    var cur = pos || { x:0, y:0 };
    startMouse.current = { x: t.clientX, y: t.clientY };
    startPos.current = { x: cur.x, y: cur.y };
    function onMove(ev) {
      if (!dragging.current) return;
      var tc = ev.touches[0];
      setPos({
        x: startPos.current.x + (tc.clientX - startMouse.current.x),
        y: startPos.current.y + (tc.clientY - startMouse.current.y)
      });
    }
    function onUp() {
      dragging.current = false;
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    }
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  }

  var dragHandleProps = {
    onMouseDown: onMouseDown,
    onTouchStart: onTouchStart,
    style: { cursor: "grab" }
  };

  var panelStyle = pos ? {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(calc(-50% + " + pos.x + "px), calc(-50% + " + pos.y + "px))",
    margin: 0
  } : {};

  return { pos: pos, dragHandleProps: dragHandleProps, panelStyle: panelStyle };
}

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
  // Spontaneous coat color mutation (2%)
  if (Math.random() < 0.02) {
    mutations.push({ loc:"E", type:"spontaneous", desc:"Spontaneous pigment mutation — unexpected coat color expression" });
  }
  // Merle throwback (1.5% if either parent carries M locus alleles)
  var g1M = g1 && g1.coat && g1.coat.M;
  var g2M = g2 && g2.coat && g2.coat.M;
  if ((g1M || g2M) && Math.random() < 0.015) {
    mutations.push({ loc:"M", type:"throwback", desc:"Merle throwback — ancestral merle pattern re-expressed" });
  }
  // White/extreme piebald throwback (1%)
  if (Math.random() < 0.01) {
    mutations.push({ loc:"S", type:"throwback", desc:"Extreme white throwback — higher-than-expected white coverage" });
  }
  // Recessive black throwback (1%)
  if (Math.random() < 0.01) {
    mutations.push({ loc:"K", type:"throwback", desc:"Recessive black throwback — ancestral solid black expression" });
  }
  // Dilute throwback (0.8%)
  if (Math.random() < 0.008) {
    mutations.push({ loc:"D", type:"throwback", desc:"Dilute throwback — coat appears lighter than expected (blue/fawn)" });
  }
  // Health-flagged recessive surprise (1.5%)
  if (Math.random() < 0.015) {
    var healthFlags = ["MDR1","PRA","DM","vWD","JLPP","EIC","CEA"];
    var flag = healthFlags[Math.floor(Math.random() * healthFlags.length)];
    mutations.push({ loc:flag, type:"recessive_expression", desc: flag + " recessive — carrier parents produced an affected pup" });
  }
  return { coat:coat, health:health, perf:perf, mutations:mutations };
}

// ── PHENOTYPE — E→K→A→B→D ────────────────────────────────────
// ── BREED COLOR RESOLVER ──────────────────────────────────────
// Snaps a raw genetics color label to the closest entry in breed.colors.
// Used so pups say "Sable & White" instead of "Sable/Fawn · Piebald".
function resolveBreedColor(rawColor, breedColors) {
  if (!breedColors || !breedColors.length || !rawColor || rawColor === "Unknown") return rawColor;

  var raw = rawColor.toLowerCase();
  var parts = raw.split(" \xB7 ").map(function(s){ return s.trim(); });

  // Build a score: count keyword overlaps between raw parts and each breed color string
  var scored = breedColors.map(function(bc) {
    var bcl = bc.toLowerCase();
    var score = 0;
    parts.forEach(function(p) {
      // Direct substring match
      if (bcl.includes(p)) score += 3;
      // Word-level match
      p.split(/\s+/).forEach(function(w) {
        if (w.length > 2 && bcl.includes(w)) score += 1;
      });
    });
    // Penalize if breed color mentions a color keyword completely absent from raw
    var colorWords = ["black","chocolate","liver","blue","red","fawn","sable","cream","white","tan","silver","gold","brindle","merle","tricolor","piebald","roan","ticked","harlequin","Isabella","wolf"];
    colorWords.forEach(function(cw) {
      if (bcl.includes(cw) && !raw.includes(cw)) score -= 0.5;
    });
    return { label: bc, score: score };
  });

  scored.sort(function(a,b){ return b.score - a.score; });

  // If top score is 0 or negative, fall back to raw label
  if (scored[0].score <= 0) return rawColor;

  // Preserve any lethal/warning suffix (e.g. "Double Merle ⚠️")
  var warningPart = parts.find(function(p){ return p.includes("\u26A0"); });
  var resolved = scored[0].label;
  if (warningPart) resolved += " \xB7 " + warningPart;
  return resolved;
}

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
  // Harlequin only valid with merle, and simplifies to just "Harlequin" (not "Black · Merle · Harlequin")
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
    if (merle && !harl) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
    if (harl) parts.push("Harlequin");
    if (dblM && harl) parts.push("Double Merle \u26A0\uFE0F");
    return parts.join(" \xB7 ");
  }

  // STEP 2: K — dominant black skips A
  if (hasKB) {
    if (harl) {
      // Harlequin supersedes — just call it Harlequin
      parts.push("Harlequin");
      if (dblM) parts.push("Double Merle \u26A0\uFE0F");
    } else {
      var base = eumelanin();
      // Brindle with base color prefix: "Black Brindle", "Blue Brindle", etc.
      parts.push(kbrHet ? base + " Brindle" : base);
      if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
    }
    return parts.join(" \xB7 ");
  }

  // STEP 3: A — pattern
  var a1 = c.A ? c.A[0] : "at";
  var saddle = c.As && (c.As[0]==="N" || c.As[1]==="N") && a1==="at";
  var base   = eumelanin();

  if (harl) {
    parts.push("Harlequin");
    if (dblM) parts.push("Double Merle \u26A0\uFE0F");
  } else if (kbrHet) {
    // Brindle on tan/fawn areas — prefix with base color
    if (a1==="Ay") {
      parts.push(dilute ? "Fawn Brindle" : "Sable Brindle");
    } else if (a1==="at") {
      parts.push(base + " Brindle & Tan");
    } else {
      parts.push(base + " Brindle");
    }
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  } else if (a1==="Ay") {
    parts.push(dilute ? "Fawn" : "Sable/Fawn");
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  } else if (a1==="aw") {
    parts.push("Wolf Sable");
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  } else if (a1==="at") {
    parts.push(saddle ? base+" & Tan (Saddle)" : base+" & Tan");
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  } else {
    // aa = recessive black — label it explicitly
    parts.push("Recessive Black");
    if (merle) parts.push(dblM ? "Double Merle \u26A0\uFE0F" : "Merle");
  }

  // Phantom/ghost tan — very faint tan expression on at dogs with low intensity (ii)
  // Shows as a subtle trait note, not a full color override
  var isAt = a1 === "at";
  var lowIntensity = c.I && c.I[0] === "i" && c.I[1] === "i";
  if (isAt && lowIntensity && !harl) {
    // Replace "& Tan" with "& Ghost Tan" to signal pale/faint points
    for (var pi = 0; pi < parts.length; pi++) {
      if (parts[pi].indexOf("& Tan") !== -1) {
        parts[pi] = parts[pi].replace("& Tan", "& Ghost Tan");
      }
    }
  }

  // White spotting — ticking only on non-solid dogs
  if (c.S) {
    var s0=c.S[0],s1=c.S[1];
    if (s0==="sw"||s1==="sw") parts.push("Mostly White");
    else if (s0==="sp"||s1==="sp") parts.push("Piebald");
  }
  var hasWhite = parts.some(function(p){ return p==="Mostly White"||p==="Piebald"; });
  if (c.T && hasWhite) {
    var t0=c.T[0],t1=c.T[1];
    if (t0==="TR"||t1==="TR") parts.push("Roan");
    else if (t0==="T"||t1==="T") parts.push("Ticked");
  }

  return parts.join(" \xB7 ") || "Unknown";
}

// Returns coat structure traits (length, texture, curl) as an array of label strings
// Used by Card to render trait pills — separate from color so resolveBreedColor isn't polluted
function getCoatTraits(genome) {
  var c = genome.coat;
  if (!c) return [];
  var traits = [];
  // Length — ll = long coat
  if (c.L && c.L[0]==="l" && c.L[1]==="l") traits.push({ label: "Long Coat", icon: "\uD83E\uDDF6" });
  // Wire/Furnishings — W_ = wire or furnishings (beard, eyebrows)
  if (c.W && (c.W[0]==="W" || c.W[1]==="W")) traits.push({ label: "Wire/Furnishings", icon: "\uD83E\uDDA1" });
  // Curl — CuCu = tight curl, Cucu = wavy
  if (c.Cu) {
    if (c.Cu[0]==="Cu" && c.Cu[1]==="Cu") traits.push({ label: "Curly", icon: "\uD83C\uDF00" });
    else if (c.Cu[0]==="Cu" || c.Cu[1]==="Cu") traits.push({ label: "Wavy", icon: "\uD83C\uDF00" });
  }
  // Intensity — ii = cream/pale modifier worth noting as a trait
  if (c.I && c.I[0]==="i" && c.I[1]==="i") traits.push({ label: "Pale Pigment", icon: "\u2728" });
  return traits;
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

// ── COI HEALTH PENALTY ────────────────────────────────────────
// Applied at display time — reduces effective health score based on inbreeding
function applyCoiPenalty(baseScore, coi) {
  if (!coi || coi <= 0) return baseScore;
  // Gentle curve: <6% no penalty, 6-12% small, 12-25% moderate, 25%+ severe
  var penalty = 0;
  if (coi >= 6  && coi < 12.5) penalty = Math.round((coi - 6) * 0.8);
  if (coi >= 12.5 && coi < 25)  penalty = Math.round(5 + (coi - 12.5) * 1.5);
  if (coi >= 25 && coi < 50)   penalty = Math.round(24 + (coi - 25) * 2);
  if (coi >= 50)                penalty = Math.round(74 + (coi - 50) * 0.4);
  return Math.max(0, baseScore - penalty);
}
// ─────────────────────────────────────────────────────────────

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
  var s = genome.coat.S;
  var h = genome.coat.H;
  var e = genome.coat.E;

  // Double merle
  if (m && m[0]==="M" && m[1]==="M")
    w.push({ msg:"Double Merle: High risk of deafness/blindness", sev:"high" });

  // Harlequin + double merle = embryonic lethal risk
  if (h && (h[0]==="H"||h[1]==="H") && m && m[0]==="M" && m[1]==="M")
    w.push({ msg:"Harlequin + Double Merle: Embryonic lethal risk", sev:"critical" });

  // Extreme white (sw/sw) = deafness risk in pigmented breeds
  if (s && s[0]==="sw" && s[1]==="sw")
    w.push({ msg:"Extreme White: Deafness risk — lack of pigment in inner ear", sev:"high" });

  // Cryptic merle: ee + M locus = recessive red that silently passes merle
  var isEE = e && e[0]==="e" && e[1]==="e";
  var hasMerle = m && (m[0]==="M" || m[1]==="M") && !(m[0]==="M" && m[1]==="M");
  if (isEE && hasMerle)
    w.push({ msg:"Cryptic Merle: Dog appears red/cream but carries merle — passes silently to offspring", sev:"warn" });

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

// ── DOG NAME GENERATOR ────────────────────────────────────────
var DOG_NAME_POOLS = {
  M: ["Ace","Atlas","Axel","Bandit","Bear","Blaze","Bo","Boone","Bowie","Bruno",
      "Buck","Buddy","Cash","Chester","Chief","Cody","Cole","Cooper","Crew","Cruz",
      "Dash","Denver","Diesel","Drake","Duke","Finn","Flint","Ford","Ghost","Gunner",
      "Harley","Hawk","Heath","Hudson","Hunter","Jasper","Jax","Jesse","Jet","Knox",
      "Leo","Loki","Lone","Maverick","Max","Miles","Milo","Moose","Murphy","Nash",
      "Odin","Outlaw","Penn","Pete","Ranger","Rex","Ridge","Rio","Rocco","Rocky",
      "Roscoe","Roux","Rowdy","Ruger","Rusty","Ryder","Sam","Scout","Silas","Slate",
      "Smoke","Stone","Tanner","Thor","Timber","Titan","Tobias","Tucker","Wade",
      "Walker","Weston","Wolf","Wyatt","York","Zeus","Zorro"],
  F: ["Ada","Amber","Annie","Aspen","Autumn","Ava","Bea","Belle","Blair","Blondie",
      "Blossom","Bonnie","Bree","Briar","Callie","Camille","Cedar","Chloe","Clea",
      "Clover","Cora","Daisy","Dakota","Darcy","Dawn","Della","Delta","Demi","Dixie",
      "Dolly","Dot","Dove","Eden","Ellie","Ember","Eve","Fawn","Fern","Flo","Flora",
      "Gem","Georgia","Ginger","Gracie","Harper","Hazel","Holly","Honey","Iris","Ivy",
      "Jade","Josie","June","Kay","Kit","Lacey","Layla","Lea","Lexi","Lily","Lola",
      "Luna","Mabel","Maggie","Maple","Marigold","Marley","Meadow","Midge","Millie",
      "Minnie","Molly","Nala","Nova","Opal","Pebbles","Penny","Piper","Poppy","Priya",
      "Quinn","Raven","Reese","Riley","River","Rosa","Rose","Ruby","Rue","Sadie",
      "Sage","Sandy","Scout","Sienna","Sierra","Sky","Stella","Sugar","Sunny","Tess",
      "Violet","Willow","Winnie","Wren","Xena","Zara","Zelda","Zoe"]
};
function generateDogName(sex) {
  var pool = DOG_NAME_POOLS[sex] || DOG_NAME_POOLS.M;
  return pool[Math.floor(Math.random() * pool.length)];
}
function generateDogNameSuggestions(sex, count) {
  var pool = (DOG_NAME_POOLS[sex] || DOG_NAME_POOLS.M).slice();
  var out = [];
  for (var i = 0; i < count && pool.length > 0; i++) {
    var idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
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
    coatColor: resolveBreedColor(interpretColor(genome), breed.colors),
    healthScore: hs,
    healthIssues: issues,
    perfScore: calcPerfScore(genome),
    coi: (function(){ var base = breed.founderCOI || 4.0; var variance = (Math.random() - 0.5) * 2; return Math.round(Math.max(0, Math.min(8, base + variance)) * 10) / 10; })(),
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
// Returns a deduplicated list of breed names from a dog's full ancestry
function getUniqueBreeds(animal, allAnimals, depth) {
  if (!animal) return [];
  if (depth === undefined) depth = 0;
  if (depth > 4) return [animal.breed]; // cap recursion
  var breeds = [];
  // Split the breed string on × to get component breeds
  var parts = (animal.breed || "").split(" \xD7 ").map(function(s){ return s.trim(); });
  parts.forEach(function(b){ if (b) breeds.push(b); });
  // Walk sire and dam if we have access to allAnimals
  if (allAnimals) {
    var sire = animal.sireId ? allAnimals.find(function(a){ return a.id === animal.sireId; }) : null;
    var dam  = animal.damId  ? allAnimals.find(function(a){ return a.id === animal.damId;  }) : null;
    if (sire) getUniqueBreeds(sire, allAnimals, depth + 1).forEach(function(b){ breeds.push(b); });
    if (dam)  getUniqueBreeds(dam,  allAnimals, depth + 1).forEach(function(b){ breeds.push(b); });
  }
  // Deduplicate preserving order
  var seen = {};
  return breeds.filter(function(b){
    var key = b.toLowerCase();
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });
}
// Returns breed percentages summing to 100, walking ancestry up to 4 generations
function getBreedPercentages(animal, allAnimals, weight) {
  if (!animal) return {};
  if (weight === undefined) weight = 1.0;
  if (weight < 0.005) return {}; // ignore contributions below 0.5%
  var result = {};
  var sire = animal.sireId && allAnimals ? allAnimals.find(function(a){ return a.id === animal.sireId; }) : null;
  var dam  = animal.damId  && allAnimals ? allAnimals.find(function(a){ return a.id === animal.damId;  }) : null;
  if (sire || dam) {
    // Has known parents — split weight 50/50
    var sireResult = sire ? getBreedPercentages(sire, allAnimals, weight * 0.5) : {};
    var damResult  = dam  ? getBreedPercentages(dam,  allAnimals, weight * 0.5) : {};
    // If one parent unknown, attribute their half to the breed string
    if (!sire) { var sireBreedKey = (animal.sireBreed||animal.breed||"Unknown").trim(); sireResult[sireBreedKey] = (sireResult[sireBreedKey]||0) + weight * 0.5; }
    if (!dam)  { var damBreedKey  = (animal.damBreed||animal.breed||"Unknown").trim(); damResult[damBreedKey]   = (damResult[damBreedKey]||0)   + weight * 0.5; }
    [sireResult, damResult].forEach(function(r){
      Object.keys(r).forEach(function(b){ result[b] = (result[b]||0) + r[b]; });
    });
  } else {
    // No known parents — pure breed
    var parts = (animal.breed||"").split(" \xD7 ").map(function(s){ return s.trim(); }).filter(Boolean);
    var share = weight / (parts.length || 1);
    parts.forEach(function(b){ result[b] = (result[b]||0) + share; });
  }
  return result;
}
// Returns sorted array of {breed, pct} summing to 100
function getBreedPctList(animal, allAnimals) {
  var raw = getBreedPercentages(animal, allAnimals);
  var total = Object.keys(raw).reduce(function(s,k){ return s + raw[k]; }, 0);
  if (total === 0) return [];
  var list = Object.keys(raw).map(function(b){ return { breed: b, pct: Math.round(raw[b] / total * 1000) / 10 }; });
  list.sort(function(a,b){ return b.pct - a.pct; });
  // Fix rounding so it sums to exactly 100
  var sum = list.reduce(function(s,x){ return s + x.pct; }, 0);
  if (list.length > 0) list[0].pct = Math.round((list[0].pct + (100 - sum)) * 10) / 10;
  return list;
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

  // COI litter size penalty (Priority 3c)
  var estCOI = (function() {
    var avg = ((sire.coi || 0) + (dam.coi || 0)) / 2;
    if (sire.sireId && (sire.sireId === dam.sireId || sire.sireId === dam.damId)) avg += 12.5;
    if (sire.damId  && (sire.damId  === dam.sireId || sire.damId  === dam.damId))  avg += 12.5;
    return Math.min(avg, 62.5);
  })();
  var stillbornRisk = false;
  if (estCOI >= 50)        { minN = Math.max(1, minN - 2); maxN = Math.max(1, maxN - 3); stillbornRisk = true; }
  else if (estCOI >= 25)   { minN = Math.max(1, minN - 1); maxN = Math.max(1, maxN - 2); }
  else if (estCOI >= 12.5) { maxN = Math.max(minN, maxN - 1); }

  var n = minN + Math.floor(Math.random() * (maxN - minN + 1));
  var hadStillborn = false;
  if (stillbornRisk && Math.random() < 0.35 && n > 1) { n = n - 1; hadStillborn = true; }

  var pupArray = Array.from({
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
      name: "Puppy " + (i + 1),
      sex: sex,
      breed: sire.breed === dam.breed ? sire.breed : "".concat(sire.breed, " \xD7 ").concat(dam.breed),
      sireBreed: sire.breed,
      damBreed: dam.breed,
      group: sire.group || "",
      size: sire.size || "M",
      sizeAvg: Math.round((sire.sizeAvg + dam.sizeAvg) / 2),
      isMixed: sire.breed !== dam.breed,
      genome: g,
      coatColor: resolveBreedColor(interpretColor(g), sire.isMixed ? null : (typeof DEMO_BREEDS !== "undefined" ? DEMO_BREEDS : []).find(function(b){ return b.name === sire.breed; }) && (typeof DEMO_BREEDS !== "undefined" ? DEMO_BREEDS : []).find(function(b){ return b.name === sire.breed; }).colors),
      healthScore: hs,
      healthIssues: issues,
      perfScore: calcPerfScore(g),
      sireId: sire.id,
      damId: dam.id,
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
  return { pups: pupArray, hadStillborn: hadStillborn };
}


// ── COI CALCULATION (Wright's Path Coefficient, 4-gen) ────────────
function calcCOI(sireId, damId, allAnimals) {
  if (!sireId || !damId) return 0;

  // Build a lookup map
  var lookup = {};
  allAnimals.forEach(function(a){ lookup[a.id] = a; });

  // Get ancestors up to N generations as a map of { id -> [paths] }
  // Each path is an array of ancestor IDs from the individual back to the ancestor
  function getAncestors(id, maxGen) {
    var result = {}; // id -> list of path lengths from this individual
    function walk(currentId, depth, path) {
      if (!currentId || depth > maxGen) return;
      var animal = lookup[currentId];
      if (!animal) return;
      if (!result[currentId]) result[currentId] = [];
      result[currentId].push(path.slice());
      if (animal.sireId) walk(animal.sireId, depth + 1, path.concat([animal.sireId]));
      if (animal.damId) walk(animal.damId, depth + 1, path.concat([animal.damId]));
    }
    walk(id, 0, [id]);
    return result;
  }

  var sireAncestors = getAncestors(sireId, 4);
  var damAncestors  = getAncestors(damId,  4);

  // Find common ancestors
  var commonIds = Object.keys(sireAncestors).filter(function(id){ return damAncestors[id]; });
  if (commonIds.length === 0) return 0;

  var F = 0;
  commonIds.forEach(function(aId) {
    var sirePathsToA = sireAncestors[aId];
    var damPathsToA  = damAncestors[aId];
    var ancestor = lookup[aId];
    var Fa = ancestor ? (ancestor.coi || 0) / 100 : 0; // ancestor's own inbreeding

    sirePathsToA.forEach(function(sp) {
      damPathsToA.forEach(function(dp) {
        // n = number of links in the chain through this common ancestor
        // Wright's formula: (0.5)^(n+1) * (1 + Fa)
        var n = sp.length + dp.length - 1; // -1 because ancestor counted once
        F += Math.pow(0.5, n + 1) * (1 + Fa);
      });
    });
  });

  return Math.round(Math.min(F * 100, 99.9) * 10) / 10; // round to 1 decimal, cap at 99.9%
}
// ─────────────────────────────────────────────────────────────────

// ── BREED GENETIC PROFILE ASSIGNMENT ─────────────────────────
// Assigns realistic coat/health freq profiles based on breed name & group
// ── HEALTH FLAGS → HEALTH LOCI ────────────────────────────────
// Maps breed.healthFlags string array to adjusted healthFreqs allele frequencies.
// Called inside assignGeneticProfile before the return.
function buildHealthFreqsFromFlags(flags, base) {
  var h = Object.assign({}, base);
  if (!flags || !flags.length) return h;
  var f = flags.map(function(s){ return s.toLowerCase(); });

  // Helper — clamp freq to [0.01, 0.99]
  function worsify(loc, affKey, carrierBoost) {
    var cur = h[loc];
    if (!cur) return;
    // cur is [[good, p], [bad, q]] — raise bad allele freq
    var badIdx = cur.findIndex(function(a){ return a[0] === affKey; });
    if (badIdx === -1) return;
    var newBad = Math.min(0.60, cur[badIdx][1] + (carrierBoost || 0.10));
    var goodIdx = 1 - badIdx;
    h[loc] = cur.map(function(a, i){ return i === badIdx ? [a[0], newBad] : [a[0], Math.max(0.01, 1 - newBad)]; });
  }

  // HipQ — hips, dysplasia, joints
  if (f.some(function(x){ return x.includes("hip") || x === "dysplasia"; })) worsify("HipQ","g",0.12);
  // JointQ — joints, spine, ivdd, elbow, patellas, luxating
  if (f.some(function(x){ return x.includes("joint") || x.includes("spine") || x.includes("elbow") || x.includes("patella") || x.includes("legg") || x.includes("luxat"); })) worsify("JointQ","g",0.12);
  // HeartQ — heart, cardiac, mvd, dcm
  if (f.some(function(x){ return x.includes("heart") || x.includes("cardiac") || x.includes("mvd") || x.includes("dcm"); })) worsify("HeartQ","g",0.10);
  // EyeQ — eyes, cataracts, pra, retinal, glaucoma
  if (f.some(function(x){ return x.includes("eye") || x.includes("cataract") || x.includes("retinal") || x.includes("glaucom") || x.includes("pra"); })) worsify("EyeQ","g",0.10);
  // MDR1 — MDR1, drug sensitivity, herding drug
  if (f.some(function(x){ return x.includes("mdr1") || x.includes("drug sens"); })) {
    h["MDR1"] = [["N", 0.65], ["m", 0.35]];
  }
  // PRA — pra, progressive retinal
  if (f.some(function(x){ return x.includes("pra") || x.includes("progressive retinal"); })) {
    h["PRA"] = [["N", 0.80], ["n", 0.20]];
  }
  // DM — degenerative myelopathy, dm
  if (f.some(function(x){ return x === "dm" || x.includes("myelop"); })) {
    h["DM"] = [["N", 0.82], ["n", 0.18]];
  }
  // vWD — bleeding, von willebrand
  if (f.some(function(x){ return x.includes("bleed") || x.includes("vwd") || x.includes("willebrand"); })) {
    h["vWD"] = [["N", 0.82], ["n", 0.18]];
  }
  // Bloat risk stored as a flag on the breed profile for aging events (not a locus)
  // Epilepsy — raise JointQ slightly as proxy for neurological fragility
  if (f.some(function(x){ return x.includes("epilep"); })) {
    worsify("EyeQ","g",0.05); // slight overall fragility signal
  }
  // Thyroid — HeartQ secondary
  if (f.some(function(x){ return x.includes("thyroid") || x.includes("addison") || x.includes("immune"); })) {
    worsify("HeartQ","g",0.06);
  }
  // Cancer flag — worsify HeartQ & JointQ as proxy for systemic risk
  if (f.some(function(x){ return x === "cancer"; })) {
    worsify("HeartQ","g",0.06);
    worsify("HipQ","g",0.05);
  }
  // Deafness — raise EyeQ slightly (sensorineural correlation)
  if (f.some(function(x){ return x.includes("deaf"); })) {
    worsify("EyeQ","g",0.07);
  }
  // Kidney/renal — JointQ as proxy
  if (f.some(function(x){ return x.includes("kidney") || x.includes("renal") || x.includes("fanconi"); })) {
    worsify("JointQ","g",0.07);
  }
  // Breathing/brachycephalic — HeartQ and JointQ
  if (f.some(function(x){ return x.includes("breath") || x.includes("brachy") || x.includes("heat"); })) {
    worsify("HeartQ","g",0.12);
    worsify("JointQ","g",0.08);
  }
  return h;
}

function assignGeneticProfile(breed) {
  // If coatFreqs already exists (all breeds after data pass), still build healthFreqs/perfAvg
  if (breed.coatFreqs) {
    if (breed.healthFreqs) return breed; // fully built already, nothing to do
    var group2 = (breed.group || "").toLowerCase();
    // Base health defaults by group
    var h2 = {
      HipQ:  [["G", group2.includes("working")||group2.includes("herding") ? 0.80 : group2.includes("toy") ? 0.75 : 0.85], ["g", group2.includes("working")||group2.includes("herding") ? 0.20 : group2.includes("toy") ? 0.25 : 0.15]],
      EyeQ:  [["G", group2.includes("sporting") ? 0.80 : 0.88], ["g", group2.includes("sporting") ? 0.20 : 0.12]],
      HeartQ:[["G", group2.includes("toy") ? 0.80 : 0.92], ["g", group2.includes("toy") ? 0.20 : 0.08]],
      JointQ:[["G", group2.includes("toy") ? 0.75 : 0.85], ["g", group2.includes("toy") ? 0.25 : 0.15]],
      MDR1:  [["N", group2.includes("herding") ? 0.70 : 0.95], ["m", group2.includes("herding") ? 0.30 : 0.05]],
      PRA:   [["N", 0.90], ["n", 0.10]],
      DM:    [["N", 0.90], ["n", 0.10]],
      vWD:   [["N", 0.95], ["n", 0.05]]
    };
    // Perf defaults by group
    var p2 = { DRIVE:3, INTEL:3, NERVE:3, SPEED:3, MUSCLE:3 };
    if (group2.includes("herding"))     { p2 = { DRIVE:5, INTEL:5, NERVE:3, SPEED:4, MUSCLE:2 }; }
    else if (group2.includes("working")){ p2 = { DRIVE:4, INTEL:4, NERVE:4, SPEED:3, MUSCLE:5 }; }
    else if (group2.includes("hound"))  { p2 = { DRIVE:4, INTEL:2, NERVE:2, SPEED:5, MUSCLE:2 }; }
    else if (group2.includes("sporting")){ p2 = { DRIVE:4, INTEL:4, NERVE:3, SPEED:4, MUSCLE:3 }; }
    else if (group2.includes("terrier")){ p2 = { DRIVE:5, INTEL:3, NERVE:5, SPEED:3, MUSCLE:3 }; }
    else if (group2.includes("toy"))    { p2 = { DRIVE:2, INTEL:3, NERVE:3, SPEED:2, MUSCLE:1 }; }
    // Apply healthFlags overrides
    h2 = buildHealthFreqsFromFlags(breed.healthFlags || [], h2);
    return Object.assign({}, breed, { healthFreqs: h2, perfAvg: p2 });
  }

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

  // Apply breed-specific health loci overrides from healthFlags
  health = buildHealthFreqsFromFlags(breed.healthFlags || [], health);

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
  // Game time: 1 game month = 1 real day = 86400000ms
  var GAME_MONTH_MS = 24 * 60 * 60 * 1000;
  var ageMs = (animal.ageMonths || 0) * GAME_MONTH_MS;
  var bornMs = nowMs - ageMs;
  var maturityMs = 18 * GAME_MONTH_MS; // females mature at 18 game months = 18 real days
  if (ageMs < maturityMs) {
    var daysToMature = Math.ceil((maturityMs - ageMs) / GAME_MONTH_MS);
    return { status: "too_young", daysUntilHeat: daysToMature };
  }
  var interval = getHeatCycleInterval(animal.size || "M");
  var heatWindowDays = 2;
  var intervalMs = interval * GAME_MONTH_MS; // interval is in game months, convert to real ms
  var heatWindowMs = heatWindowDays * GAME_MONTH_MS;
  // Use lastWhelped if set, otherwise heatCycleStart, otherwise maturity date
  var cycleStartMs = animal.lastWhelped || animal.heatCycleStart || (bornMs + maturityMs);
  var timeSinceCycleStart = nowMs - cycleStartMs;
  var positionInCycle = timeSinceCycleStart % intervalMs;
  if (positionInCycle < heatWindowMs) {
    var hoursLeft = Math.ceil((heatWindowMs - positionInCycle) / (60 * 60 * 1000));
    return { status: "in_heat", hoursLeft: hoursLeft };
  }
  var msUntilNextHeat = intervalMs - positionInCycle;
  var daysUntil = Math.ceil(msUntilNextHeat / GAME_MONTH_MS);
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
var GAME_VERSION = "2026.03.08.2";

// ── COAT COLOR SWATCH MAP ─────────────────────────────────────
function getCoatSwatch(coatColor) {
  if (!coatColor || coatColor === "Unknown") return null;
  var parts = coatColor.split(" \xB7 ");
  var primary = parts[0].trim().toLowerCase();
  // If a white spotting modifier is present, that dominates visually
  var hasWhite = parts.some(function(p){ var pl = p.trim().toLowerCase(); return pl === "mostly white" || pl === "piebald"; });
  if (hasWhite) return "#f0ede8";
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
  return null;
}

// ── DEMO BREEDS ───────────────────────────────────────────────
// DEMO_BREEDS is loaded from breeds-data.js (see index.html script tag)

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
  var _drag = useDrag(), dragHandleProps = _drag.dragHandleProps, panelStyle = _drag.panelStyle;
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
    onClick: function onClick(e) { return e.stopPropagation(); },
    style: Object.assign({
      background: "#1a1410",
      border: "1px solid #4a3a28",
      borderRadius: 12,
      width: "100%",
      maxWidth: 720,
      maxHeight: "88vh",
      overflowY: "auto",
      padding: 24
    }, panelStyle)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", Object.assign({}, dragHandleProps, { style: Object.assign({ flex:1 }, dragHandleProps.style) }),
    /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, animal.name, " \xB7 ", animal.breed, " \xB7 ID: ", animal.id))), /*#__PURE__*/React.createElement("button", {
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
    style: { display:"flex", gap:6, alignItems:"center", marginBottom:16 }
  },
    React.createElement("div", {
      style: { flex:1, fontFamily:"monospace", fontSize:"0.62rem", background:"#443828",
        borderRadius:6, padding:"8px 12px", color:"#6b5038", wordBreak:"break-all" }
    }, "\uD83E\uDDEC ", animal.vinStr),
    React.createElement("button", {
      onClick: function(){
        navigator.clipboard && navigator.clipboard.writeText(animal.vinStr || "");
      },
      title: "Copy VIN",
      style: { background:"#2e2218", border:"1px solid #4a3a28", color:"#b09070",
        borderRadius:5, padding:"6px 10px", cursor:"pointer", fontSize:"0.78rem",
        flexShrink:0 }
    }, "\uD83D\uDCCB Copy VIN")
  ),
  /*#__PURE__*/React.createElement("div", {
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
    var isQual = ["HipQ","EyeQ","HeartQ","JointQ"].indexOf(loc) !== -1;
    var statusLabel, statusColor, statusBg, borderCol;
    if (isQual) {
      if (al[0]==="g"&&al[1]==="g")      { statusLabel="Poor";      statusColor="#fca5a5"; statusBg="#481808"; borderCol="#ef4444"; }
      else if (al[0]==="g"||al[1]==="g") { statusLabel="Good";      statusColor="#d9f99d"; statusBg="#1a1e0a"; borderCol="#65a30d"; }
      else                                { statusLabel="Excellent"; statusColor="#86efac"; statusBg="#0f2010"; borderCol="#166534"; }
    } else {
      if (al[0]==="n"&&al[1]==="n")      { statusLabel="Affected";  statusColor="#fca5a5"; statusBg="#481808"; borderCol="#ef4444"; }
      else if (al[0]==="n"||al[1]==="n") { statusLabel="Carrier";   statusColor="#fde68a"; statusBg="#2d1e00"; borderCol="#ca8a04"; }
      else                                { statusLabel="Clear";     statusColor="#86efac"; statusBg="#0f2010"; borderCol="#166534"; }
    }
    return /*#__PURE__*/React.createElement("div", {
      key: loc,
      style: { background: statusBg, border: "1px solid " + borderCol, borderRadius: 6, padding: 8 }
    },
      React.createElement("div", { style: { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:2 } },
        React.createElement("span", { style: { color: statusColor, fontWeight:"bold", fontSize:"0.78rem" } }, loc),
        React.createElement("span", { style: { fontFamily:"monospace", color:"#f0e6d3", fontSize:"0.82rem" } }, al[0], "/", al[1])
      ),
      React.createElement("div", { style: { display:"inline-block", background:"rgba(0,0,0,0.3)",
        border:"1px solid "+borderCol, borderRadius:3, padding:"1px 6px",
        fontSize:"0.68rem", color:statusColor, fontWeight:"bold", marginBottom:3 }
      }, statusLabel),
      React.createElement("div", { style: { color:"#8a7055", fontSize:"0.65rem", marginBottom:2 } }, ld.name),
      React.createElement("div", { style: { color:"#b09070", fontSize:"0.68rem" } }, d)
    );
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
  }, animal.coi, "% \u2014 ", coiLabel(animal.coi))),
  (function(){ var pen = animal.healthScore - applyCoiPenalty(animal.healthScore, animal.coi); return pen > 0 ? /*#__PURE__*/React.createElement("div", { style: { marginTop: 6, fontSize: "0.75rem", color: "#f97316" } }, "\u26A0\uFE0F Inbreeding load: \u2212", pen, " health points") : null; })(),
  /*#__PURE__*/React.createElement("div", {
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

// ── PUP NAME EDITOR ───────────────────────────────────────────
// Inline name editor for litter pup rows. Shows a text input + 4 suggested names.
function PupNameEditor(props) {
  var pup = props.pup, onSave = props.onSave, onClose = props.onClose;
  var _ns = _slicedToArray(useState(pup.name), 2), nameVal = _ns[0], setNameVal = _ns[1];
  var _sg = _slicedToArray(useState(function(){ return generateDogNameSuggestions(pup.sex, 6); }), 2),
    suggestions = _sg[0], setSuggestions = _sg[1];

  function save() {
    var n = nameVal.trim();
    if (n) onSave(n);
    onClose();
  }

  return React.createElement("div", {
    style: { background:"#1e1408", border:"1px solid #6d28d9", borderRadius:8, padding:"10px 12px", marginTop:4 },
    onClick: function(e){ e.stopPropagation(); }
  },
    React.createElement("div", { style:{ fontSize:"0.72rem", color:"#a78bfa", marginBottom:6, fontWeight:"bold" } }, "✏️ Name this pup"),
    React.createElement("div", { style:{ display:"flex", gap:6, marginBottom:8 } },
      React.createElement("input", {
        value: nameVal,
        onChange: function(e){ setNameVal(e.target.value); },
        onKeyDown: function(e){ if (e.key==="Enter") save(); if (e.key==="Escape") onClose(); },
        autoFocus: true,
        placeholder: "Enter a name...",
        style: { flex:1, background:"#2a1e14", border:"1px solid #4a3a28", color:"#f0e6d3",
          borderRadius:5, padding:"4px 8px", fontSize:"0.82rem", outline:"none" }
      }),
      React.createElement("button", {
        onClick: save,
        style: { background:"#22c55e", border:"none", color:"#000", borderRadius:5, padding:"4px 10px",
          cursor:"pointer", fontSize:"0.8rem", fontWeight:"bold" }
      }, "Save")
    ),
    React.createElement("div", { style:{ fontSize:"0.68rem", color:"#6b5038", marginBottom:4 } }, "Suggestions:"),
    React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:6 } },
      suggestions.map(function(n){
        return React.createElement("button", {
          key: n,
          onClick: function(){ setNameVal(n); },
          style: { background:"#2a1e14", border:"1px solid #4a3a28", color:"#c4956a",
            borderRadius:4, padding:"2px 8px", fontSize:"0.72rem", cursor:"pointer" }
        }, n);
      })
    ),
    React.createElement("button", {
      onClick: function(){ setSuggestions(generateDogNameSuggestions(pup.sex, 6)); },
      style: { background:"transparent", border:"none", color:"#4a3a28", fontSize:"0.68rem",
        cursor:"pointer", padding:0, textDecoration:"underline" }
    }, "↻ More names"),
    React.createElement("button", {
      onClick: onClose,
      style: { background:"transparent", border:"none", color:"#4a3a28", fontSize:"0.68rem",
        cursor:"pointer", padding:"0 0 0 12px", textDecoration:"underline" }
    }, "Cancel")
  );
}

function BreedPhoto(_ref_bp) {
  var animal    = _ref_bp.animal;
  var speciesKey = _ref_bp.species || "dog";
  var _useState_bp  = _slicedToArray(useState(false), 2), imgErr     = _useState_bp[0],  setImgErr     = _useState_bp[1];
  var _useState_bp2 = _slicedToArray(useState(false), 2), showModal  = _useState_bp2[0], setShowModal  = _useState_bp2[1];
  var _useState_bp3 = _slicedToArray(useState(null),  2), fetchedUrl = _useState_bp3[0], setFetchedUrl = _useState_bp3[1];
  var _useState_bp4 = _slicedToArray(useState(null),  2), supaUrl    = _useState_bp4[0], setSupaUrl    = _useState_bp4[1];
  var _useState_bp5 = _slicedToArray(useState(false), 2), showUpload = _useState_bp5[0], setShowUpload = _useState_bp5[1];
  var breedName  = animal.breed || "";
  var staticUrl  = BREED_PHOTOS[breedName] || null;

  // Check Supabase for approved community image
  useEffect(function() {
    if (typeof baGetApprovedImage === "function") {
      // If images already loaded, check immediately
      if (typeof BA_IMAGES_LOADED !== "undefined" && BA_IMAGES_LOADED) {
        setSupaUrl(baGetApprovedImage(speciesKey, breedName));
      }
    }
  }, [breedName, speciesKey]);

  // For mixed breeds fallback
  var photoBreed = breedName;
  if (!staticUrl && !supaUrl && breedName.includes("×")) {
    var parts = breedName.split(" × ").map(function(s){ return s.trim(); });
    var freq = {};
    parts.forEach(function(b){ freq[b] = (freq[b] || 0) + 1; });
    var dominant = parts.reduce(function(a, b){ return (freq[a]||0) >= (freq[b]||0) ? a : b; });
    if (dominant.includes("×")) dominant = dominant.split(" × ")[0].trim();
    photoBreed = dominant;
  }

  useEffect(function() {
    if (!staticUrl && !supaUrl) {
      if (speciesKey === "dog") {
        if (DOG_CEO_MAP[photoBreed]) {
          fetchDogPhoto(photoBreed, function(url) { setFetchedUrl(url); }, function() {});
        } else if (photoBreed !== breedName && DOG_CEO_MAP[breedName]) {
          fetchDogPhoto(breedName, function(url) { setFetchedUrl(url); }, function() {});
        }
      }
    }
  }, [breedName, photoBreed, supaUrl]);

  var photoUrl = supaUrl || staticUrl || fetchedUrl;
  var isCommunityPhoto = !!supaUrl;

  // Upload panel shown inline
  if (showUpload) {
    return /*#__PURE__*/React.createElement("div", { style:{ marginBottom:6 } },
      typeof BaImageUploader !== "undefined"
        ? /*#__PURE__*/React.createElement(BaImageUploader, {
            species: speciesKey,
            breed: breedName,
            onCancel: function(){ setShowUpload(false); }
          })
        : /*#__PURE__*/React.createElement("div",{style:{color:"#ef4444",fontSize:"0.72rem"}},"Uploader not loaded.")
    );
  }

  if (!photoUrl || imgErr) {
    return /*#__PURE__*/React.createElement("div", {
      style: { display:"flex", justifyContent:"flex-end", alignItems:"center", gap:6, marginBottom:6 }
    },
      /*#__PURE__*/React.createElement("button", {
        onClick: function(e){ e.stopPropagation(); setShowUpload(true); },
        title: "Submit a photo for " + breedName,
        style: { background:"#071828", border:"1px solid #1e3a5f", borderRadius:6,
          padding:"3px 8px", cursor:"pointer", color:"#38bdf8", fontSize:"0.72rem",
          display:"flex", alignItems:"center", gap:3 }
      }, "📸 Add Photo"),
      /*#__PURE__*/React.createElement("span", { style:{ fontSize:"1.4rem", opacity:0.2 } }, speciesKey==="horse"?"🐴":"🐕")
    );
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null,
    showModal && /*#__PURE__*/React.createElement(BreedPhotoModal, {
      photoUrl: photoUrl, breedName: breedName,
      onClose: function(){ setShowModal(false); }
    }),
    /*#__PURE__*/React.createElement("div", {
      style: { display:"flex", justifyContent:"flex-end", alignItems:"center", gap:6, marginBottom:6 }
    },
      isCommunityPhoto && /*#__PURE__*/React.createElement("span", {
        title:"Community submitted photo",
        style:{ fontSize:"0.62rem", color:"#38bdf8", background:"#071828",
          border:"1px solid #1e3a5f", borderRadius:3, padding:"1px 5px" }
      }, "👥 Community"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(e){ e.stopPropagation(); setShowModal(true); },
        title: "View " + breedName + " photo",
        style: { background:"#1a1410", border:"1px solid #4a3a28",
          borderRadius:6, padding:"3px 8px", cursor:"pointer",
          color:"#b09070", fontSize:"0.75rem", display:"flex",
          alignItems:"center", gap:4 }
      }, "📷 Photo"),
      !isCommunityPhoto && /*#__PURE__*/React.createElement("button", {
        onClick: function(e){ e.stopPropagation(); setShowUpload(true); },
        title: "Submit a better photo for " + breedName,
        style: { background:"#071828", border:"1px solid #1e3a5f", borderRadius:6,
          padding:"3px 8px", cursor:"pointer", color:"#38bdf8", fontSize:"0.72rem" }
      }, "📸")
    )
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// ── ANIMAL CARD ───────────────────────────────────────────────
// ── PEDIGREE MODAL ────────────────────────────────────────────
function PedigreeModal(_ref_ped) {
  var animal = _ref_ped.animal, onClose = _ref_ped.onClose;
  var allAnimals = useContext(AnimalsContext);

  // Build a lookup map by id
  var lookup = {};
  allAnimals.forEach(function(a){ lookup[a.id] = a; });

  // Walk up to 3 generations: returns { self, sire, dam, ss, sd, ds, dd, sss, ssd, sds, sdd, dss, dsd, dds, ddd }
  function getAnc(id, depth) {
    if (!id || depth > 3) return null;
    var a = lookup[id];
    if (!a) return { id: id, name: "Unknown", breed: "–", sex: "M", unknown: true };
    return a;
  }

  var self = animal;
  var sire = getAnc(self.sireId, 1);
  var dam  = getAnc(self.damId,  1);
  var ss   = sire && !sire.unknown ? getAnc(sire.sireId, 2) : null;
  var sd   = sire && !sire.unknown ? getAnc(sire.damId,  2) : null;
  var ds   = dam  && !dam.unknown  ? getAnc(dam.sireId,  2) : null;
  var dd   = dam  && !dam.unknown  ? getAnc(dam.damId,   2) : null;
  var sss  = ss   && !ss.unknown   ? getAnc(ss.sireId,   3) : null;
  var ssd  = ss   && !ss.unknown   ? getAnc(ss.damId,    3) : null;
  var sds  = sd   && !sd.unknown   ? getAnc(sd.sireId,   3) : null;
  var sdd  = sd   && !sd.unknown   ? getAnc(sd.damId,    3) : null;
  var dss  = ds   && !ds.unknown   ? getAnc(ds.sireId,   3) : null;
  var dsd  = ds   && !ds.unknown   ? getAnc(ds.damId,    3) : null;
  var dds  = dd   && !dd.unknown   ? getAnc(dd.sireId,   3) : null;
  var ddd  = dd   && !dd.unknown   ? getAnc(dd.damId,    3) : null;

  var hasAnyLineage = sire || dam;

  // Mini ancestor card — compact but shows key stats
  function AncCard(props) {
    var a = props.a, gen = props.gen;
    var emptyStyle = { background:"#1a1208", border:"1px dashed #2e2218", borderRadius:8,
      padding:"8px 10px", minHeight:72, display:"flex", alignItems:"center",
      justifyContent:"center", flexDirection:"column", gap:4 };

    if (!a) return React.createElement("div", { style: emptyStyle },
      React.createElement("span", { style:{ color:"#2e2218", fontSize:"1rem" } }, "🐾"),
      React.createElement("span", { style:{ color:"#3a2810", fontSize:"0.65rem" } }, "No record")
    );

    if (a.unknown) return React.createElement("div", { style: emptyStyle },
      React.createElement("span", { style:{ color:"#3a2810", fontSize:"1rem" } }, "🐾"),
      React.createElement("span", { style:{ color:"#4a3a28", fontSize:"0.7rem", fontWeight:"bold" } }, "Purchased"),
      React.createElement("span", { style:{ color:"#3a2810", fontSize:"0.62rem" } }, "No lineage on file")
    );

    var sexColor = a.sex === "M" ? "#60a5fa" : "#f472b6";
    var sexIcon  = a.sex === "M" ? "♂" : "♀";
    var effH = applyCoiPenalty(a.healthScore || 0, a.coi || 0);
    var sz = getCurrentSize(a);

    return React.createElement("div", {
      style: { background:"#2a1e14", border:"1px solid #4a3a28", borderRadius:8,
        padding:"8px 10px", fontSize:"0.75rem" }
    },
      // Name + sex
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 } },
        React.createElement("span", { style:{ color:"#f1f5f9", fontWeight:"bold", fontSize:"0.8rem",
          overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"80%" } }, a.name),
        React.createElement("span", { style:{ color:sexColor, fontSize:"0.8rem", flexShrink:0 } }, sexIcon)
      ),
      // Breed
      React.createElement("div", { style:{ color:"#b09070", fontSize:"0.7rem", marginBottom:4,
        overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" } }, a.breed),
      // Stats row
      React.createElement("div", { style:{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:3 } },
        React.createElement("span", { style:{ color: healthColor(effH), fontSize:"0.7rem", fontWeight:"bold" } }, "❤️ " + effH),
        React.createElement("span", { style:{ color:"#c4956a", fontSize:"0.7rem", fontWeight:"bold" } }, "⚡ " + (a.perfScore || 0)),
        React.createElement("span", { style:{ color: coiColor(a.coi || 0), fontSize:"0.7rem", fontWeight:"bold" } }, "COI " + (a.coi || 0) + "%")
      ),
      // Weight + height
      React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:3 } },
        React.createElement("span", { style:{ color:"#c4956a", fontSize:"0.68rem" } }, "⚖️ " + sz.currentW + " lbs"),
        React.createElement("span", { style:{ color:"#c4956a", fontSize:"0.68rem" } }, "📏 " + sz.currentH + "\"")
      ),
      // Coat color
      a.coatColor && React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.65rem", marginBottom:2,
        overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" } }, a.coatColor),
      // Age
      React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } },
        a.ageMonths ? (Math.round(a.ageMonths / 12 * 10) / 10) + " yrs" : "–"
      )
    );
  }

  // Generation label header
  function GenLabel(props) {
    return React.createElement("div", {
      style:{ color:"#8a7055", fontSize:"0.72rem", textTransform:"uppercase",
        letterSpacing:"0.08em", marginBottom:6, paddingBottom:4, borderBottom:"1px solid #2e2218" }
    }, props.label);
  }

  var _dragP = useDrag(), dragHandlePropsP = _dragP.dragHandleProps, panelStyleP = _dragP.panelStyle;

  return React.createElement("div", {
    style:{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.88)",
      zIndex:500, display:"flex", alignItems:"center", justifyContent:"center" },
    onClick: onClose
  },
    React.createElement("div", {
      style: Object.assign({ background:"#1a1208", border:"1px solid #6a5238", borderRadius:14,
        width:"min(700px,96vw)", height:"90vh", display:"flex", flexDirection:"column",
        overflow:"hidden", boxShadow:"0 8px 40px rgba(0,0,0,0.7)" }, panelStyleP),
      onClick: function(e){ e.stopPropagation(); }
    },
      // Header — drag handle
      React.createElement("div", Object.assign({}, dragHandlePropsP, {
        style: Object.assign({ display:"flex", alignItems:"center", padding:"12px 16px",
          borderBottom:"1px solid #2e2218", background:"#241810", flexShrink:0,
          userSelect:"none" }, dragHandlePropsP.style)
      }),
        React.createElement("span", { style:{ fontSize:"1rem" } }, "🐾"),
        React.createElement("div", { style:{ flex:1, marginLeft:10 } },
          React.createElement("div", { style:{ color:"#f1f5f9", fontWeight:"bold", fontSize:"0.95rem" } },
            animal.name + " — Pedigree"),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem" } },
            animal.breed + " · " + (animal.sex==="M"?"♂ Male":"♀ Female") +
            (animal.coi ? " · COI " + animal.coi + "%" : ""))
        ),
        React.createElement("button", {
          onClick: onClose,
          onMouseDown: function(e){ e.stopPropagation(); },
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#b09070",
            borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" }
        }, "✕ Close")
      ),

      // Scrollable body
      React.createElement("div", {
        style:{ flex:1, overflowY:"auto", padding:"14px 16px" }
      },
        !hasAnyLineage
          ? React.createElement("div", {
              style:{ textAlign:"center", color:"#4a3a28", padding:"60px 0", fontSize:"0.85rem" }
            }, "No lineage on record — this dog was purchased, not bred here.\nBreed your own dogs to build a pedigree.")

          : React.createElement(React.Fragment, null,

            // Generation 1 — Parents
            React.createElement("div", { style:{ marginBottom:18 } },
              React.createElement(GenLabel, { label:"Generation 1 — Parents" }),
              React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 } },
                React.createElement("div", null,
                  React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.7rem", marginBottom:4, fontWeight:"bold" } }, "♂ Sire"),
                  React.createElement(AncCard, { a: sire, gen:1 })
                ),
                React.createElement("div", null,
                  React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.7rem", marginBottom:4, fontWeight:"bold" } }, "♀ Dam"),
                  React.createElement(AncCard, { a: dam, gen:1 })
                )
              )
            ),

            // Generation 2 — Grandparents
            (ss||sd||ds||dd) && React.createElement("div", { style:{ marginBottom:18 } },
              React.createElement(GenLabel, { label:"Generation 2 — Grandparents" }),
              React.createElement("div", { style:{ display:"flex", gap:8, overflowX:"auto", paddingBottom:6 } },
                React.createElement("div", { style:{ minWidth:160, flex:"0 0 160px" } },
                  React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.65rem", marginBottom:4 } }, "♂ Sire's Sire"),
                  React.createElement(AncCard, { a: ss, gen:2 })
                ),
                React.createElement("div", { style:{ minWidth:160, flex:"0 0 160px" } },
                  React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.65rem", marginBottom:4 } }, "♀ Sire's Dam"),
                  React.createElement(AncCard, { a: sd, gen:2 })
                ),
                React.createElement("div", { style:{ minWidth:160, flex:"0 0 160px" } },
                  React.createElement("div", { style:{ color:"#60a5fa", fontSize:"0.65rem", marginBottom:4 } }, "♂ Dam's Sire"),
                  React.createElement(AncCard, { a: ds, gen:2 })
                ),
                React.createElement("div", { style:{ minWidth:160, flex:"0 0 160px" } },
                  React.createElement("div", { style:{ color:"#f472b6", fontSize:"0.65rem", marginBottom:4 } }, "♀ Dam's Dam"),
                  React.createElement(AncCard, { a: dd, gen:2 })
                )
              )
            ),

            // Generation 3 — Great-Grandparents
            (sss||ssd||sds||sdd||dss||dsd||dds||ddd) && React.createElement("div", { style:{ marginBottom:18 } },
              React.createElement(GenLabel, { label:"Generation 3 — Great-Grandparents" }),
              React.createElement("div", { style:{ display:"flex", gap:8, overflowX:"auto", paddingBottom:6 } },
                [
                  { a:sss, label:"♂ SS·Sire" }, { a:ssd, label:"♀ SS·Dam" },
                  { a:sds, label:"♂ SD·Sire" }, { a:sdd, label:"♀ SD·Dam" },
                  { a:dss, label:"♂ DS·Sire" }, { a:dsd, label:"♀ DS·Dam" },
                  { a:dds, label:"♂ DD·Sire" }, { a:ddd, label:"♀ DD·Dam" }
                ].map(function(item, i){
                  var col = (i % 2 === 0) ? "#60a5fa" : "#f472b6";
                  return React.createElement("div", { key:i, style:{ minWidth:150, flex:"0 0 150px" } },
                    React.createElement("div", { style:{ color:col, fontSize:"0.62rem", marginBottom:3 } }, item.label),
                    React.createElement(AncCard, { a: item.a, gen:3 })
                  );
                })
              )
            )
          )
      )
    )
  );
}


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
  var _useState_ped = useState(false),
    _useState_ped2 = _slicedToArray(_useState_ped, 2),
    showPedigree = _useState_ped2[0],
    setShowPedigree = _useState_ped2[1];
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
  return /*#__PURE__*/React.createElement(React.Fragment, null,
    showDNA && /*#__PURE__*/React.createElement(DNAModal, {
      animal: animal,
      onClose: function onClose() { return setShowDNA(false); }
    }),
    showPedigree && /*#__PURE__*/React.createElement(PedigreeModal, {
      animal: animal,
      onClose: function(){ setShowPedigree(false); }
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
      boxShadow: isSelected ? "0 0 14px rgba(212,148,42,0.25)" : "0 2px 6px rgba(0,0,0,0.4)",
      resize: "both",
      minWidth: 220,
      minHeight: 120
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
  !animal.retired && (onStud || onSell || onRetire) && /*#__PURE__*/React.createElement("div", {
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
    }, animal.coatColor ? animal.coatColor.split(" \xB7 ").join(" \u00B7 ") : "Unknown")
  ),
  // Coat structure trait pills (Long Coat, Wire, Curly, Wavy, Pale Pigment)
  (function() {
    if (!animal.genome) return null;
    var traits = getCoatTraits(animal.genome);
    if (!traits.length) return null;
    return React.createElement("div", { style: { display:"flex", flexWrap:"wrap", gap:4, marginBottom:6 } },
      traits.map(function(t, i) {
        return React.createElement("span", {
          key: i,
          style: { display:"inline-block", background:"#1a1e2a", border:"1px solid #3a4a6a",
            borderRadius:3, padding:"2px 7px", fontSize:"0.65rem", color:"#93c5fd",
            fontWeight:"bold" }
        }, t.icon + " " + t.label);
      })
    );
  })(),
  (function() {
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
    (function(){ var effH = applyCoiPenalty(animal.healthScore, animal.coi); var penalized = effH < animal.healthScore; return /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement("span", { style: { color: healthColor(effH), fontWeight: "bold", fontSize: "0.95rem" }, title: penalized ? "Base: " + animal.healthScore + " − COI penalty: " + (animal.healthScore - effH) : "" }, "\u2764\uFE0F ", effH, penalized ? /*#__PURE__*/React.createElement("span", { style: { color:"#f97316", fontSize:"0.7rem", marginLeft:2 } }, "\u2193") : null),
      /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28" } }, "|"),
      /*#__PURE__*/React.createElement("span", { style: { color: "#c4956a", fontWeight: "bold", fontSize: "0.95rem" } }, "\u26A1 ", animal.perfScore),
      /*#__PURE__*/React.createElement("span", { style: { color: "#4a3a28" } }, "|"),
      /*#__PURE__*/React.createElement("span", { style: { color: coiColor(animal.coi), fontWeight: "bold", fontSize: "0.95rem" } }, "COI ", animal.coi, "%")
    ); })()
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
    style: { display:"flex", gap:4, marginBottom:4, alignItems:"stretch" }
  },
    React.createElement("div", {
      onClick: function(e){ e.stopPropagation(); setShowDNA(true); },
      title: "VIN: E=Extension K=Dominant R=Red/Recessive | Br=Brindle A=Agouti: Fy=Fawn Wf=Wolf Tp=TanPts Bk=RecBlack | B=Brown D=Dilute M=Merle\nClick to open full DNA panel",
      style: { flex:1, fontFamily:"monospace", fontSize:"0.78rem", color:"#d4942a",
        background:"#1a1410", borderRadius:4, padding:"5px 10px", overflow:"hidden",
        textOverflow:"ellipsis", whiteSpace:"nowrap", fontWeight:"bold",
        letterSpacing:"0.04em", border:"1px solid #3a2810", cursor:"pointer" }
    }, "\uD83E\uDDEC ", animal.vinStr),
    React.createElement("button", {
      onClick: function(e){
        e.stopPropagation();
        navigator.clipboard && navigator.clipboard.writeText(animal.vinStr || "");
      },
      title: "Copy VIN to clipboard",
      style: { background:"#1a1410", border:"1px solid #3a2810", color:"#6b5038",
        borderRadius:4, padding:"0 8px", cursor:"pointer", fontSize:"0.75rem",
        flexShrink:0 }
    }, "\uD83D\uDCCB")
  ),
  /*#__PURE__*/React.createElement("button", {
    onClick: function(e){ e.stopPropagation(); setShowPedigree(true); },
    style: { width:"100%", background:"#1a1208", border:"1px solid #4a3820", color:"#b09070",
      borderRadius:4, padding:"5px 0", marginBottom:7, cursor:"pointer",
      fontSize:"0.78rem", fontWeight:"bold", letterSpacing:"0.03em" }
  }, "\uD83D\uDC3E Pedigree"),
  // QTL mini bars on card
  (function() {
    if (!animal.genome || !animal.genome.perf) return null;
    var QTL_META = [
      { key:"DRIVE",  icon:"\uD83C\uDFAF", label:"Drive"  },
      { key:"INTEL",  icon:"\uD83E\uDDE0", label:"Intel"  },
      { key:"NERVE",  icon:"\u26A1",        label:"Nerve"  },
      { key:"SPEED",  icon:"\uD83D\uDCA8", label:"Speed"  },
      { key:"MUSCLE", icon:"\uD83D\uDCAA", label:"Muscle" }
    ];
    var perf = animal.genome.perf;
    return React.createElement("div", {
      style: { background:"#1a1410", border:"1px solid #2e2218", borderRadius:5,
        padding:"6px 8px", marginBottom:6 }
    },
      React.createElement("div", { style:{ display:"flex", justifyContent:"space-between",
        alignItems:"center", marginBottom:4 } },
        React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.62rem",
          textTransform:"uppercase", letterSpacing:"0.06em" } }, "Performance"),
        React.createElement("span", { style:{ color:"#c4956a", fontSize:"0.68rem", fontWeight:"bold" } },
          "\u26A1 " + (animal.perfScore || 0))
      ),
      React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:3 } },
        QTL_META.map(function(q) {
          var v = perf[q.key] || [3,3];
          var avg = (v[0]+v[1])/2;
          var pct = Math.round((avg/5)*100);
          var col = avg >= 4.0 ? "#d4942a" : avg >= 3.0 ? "#6b9a5e" : "#4a5568";
          var isTop = avg >= 4.5;
          return React.createElement("div", { key:q.key,
            style:{ display:"flex", alignItems:"center", gap:5 } },
            React.createElement("span", { style:{ fontSize:"0.6rem", width:38,
              color: col, fontWeight: isTop ? "bold" : "normal", flexShrink:0 } },
              q.icon + " " + q.label),
            React.createElement("div", { style:{ flex:1, background:"#2e2218",
              borderRadius:2, height:4, overflow:"hidden" } },
              React.createElement("div", { style:{ background:col,
                width: pct + "%", height:"100%", borderRadius:2 } })
            ),
            React.createElement("span", { style:{ fontSize:"0.6rem", color:col,
              fontWeight:"bold", width:18, textAlign:"right", flexShrink:0 } },
              avg.toFixed(1))
          );
        })
      ),
      // Standout badges
      (function(){
        var tops = QTL_META.filter(function(q){
          var v = perf[q.key]; return v && (v[0]+v[1])/2 >= 4.5;
        });
        if (!tops.length) return null;
        return React.createElement("div", { style:{ display:"flex", flexWrap:"wrap",
          gap:3, marginTop:5 } },
          tops.map(function(q){
            return React.createElement("span", { key:q.key,
              style:{ background:"#2a1e08", border:"1px solid #d4942a",
                color:"#d4942a", borderRadius:3, padding:"1px 5px",
                fontSize:"0.6rem", fontWeight:"bold" } },
              q.icon + " High " + q.label);
          })
        );
      })()
    );
  })(),
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
    var wMsg = typeof w === "string" ? w : w.msg;
    var wSev = typeof w === "string" ? "high" : (w.sev || "high");
    var wCol = wSev === "critical" ? "#ff6b6b" : wSev === "warn" ? "#fde68a" : "#fca5a5";
    var wBg  = wSev === "warn" ? "#2d1e00" : "#481808";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: wBg,
        color: wCol,
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginRight: 3,
        marginBottom: 3
      }
    }, wSev === "critical" ? "\u2620\uFE0F " : wSev === "warn" ? "\u26A0\uFE0F " : "\u2620\uFE0F ", wMsg);
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

  (function() {
    if (!animal.genome || !animal.genome.health) return null;
    var h = animal.genome.health;

    // Build status for each locus
    function recStatus(loc) {
      var al = h[loc]; if (!al) return null;
      if (al[0]==="n" && al[1]==="n") return "affected";
      if (al[0]==="n" || al[1]==="n") return "carrier";
      return "clear";
    }
    function qualStatus(loc) {
      var al = h[loc]; if (!al) return null;
      if (al[0]==="g" && al[1]==="g") return "poor";
      if (al[0]==="g" || al[1]==="g") return "good";
      return "excellent";
    }

    var REC_LOCI = ["MDR1","PRA","DM","vWD"];
    var QUAL_LOCI = ["HipQ","EyeQ","HeartQ","JointQ"];
    var QUAL_LABELS = { HipQ:"Hips", EyeQ:"Eyes", HeartQ:"Heart", JointQ:"Joints" };

    var STATUS_STYLE = {
      affected: { bg:"#481808", border:"#ef4444", color:"#fca5a5", label:"Affected" },
      carrier:  { bg:"#2d1e00", border:"#ca8a04", color:"#fde68a", label:"Carrier"  },
      clear:    { bg:"#0f2010", border:"#166534", color:"#86efac", label:"Clear"    },
      excellent:{ bg:"#0f2010", border:"#166534", color:"#86efac", label:"Excellent"},
      good:     { bg:"#1a1e0a", border:"#65a30d", color:"#d9f99d", label:"Good"     },
      poor:     { bg:"#481808", border:"#ef4444", color:"#fca5a5", label:"Poor"     }
    };

    var recBadges = REC_LOCI.map(function(loc) {
      var st = recStatus(loc); if (!st) return null;
      var s = STATUS_STYLE[st];
      return React.createElement("span", {
        key: loc,
        title: loc + ": " + s.label,
        style: { display:"inline-block", background:s.bg, border:"1px solid "+s.border,
          color:s.color, borderRadius:3, padding:"1px 5px", fontSize:"0.62rem",
          fontWeight:"bold", marginRight:3, marginBottom:3, cursor:"help" }
      }, loc + " · " + s.label);
    }).filter(Boolean);

    var qualBadges = QUAL_LOCI.map(function(loc) {
      var st = qualStatus(loc); if (!st) return null;
      if (st === "excellent") return null; // only show if not perfect
      var s = STATUS_STYLE[st];
      return React.createElement("span", {
        key: loc,
        title: QUAL_LABELS[loc] + ": " + s.label,
        style: { display:"inline-block", background:s.bg, border:"1px solid "+s.border,
          color:s.color, borderRadius:3, padding:"1px 5px", fontSize:"0.62rem",
          fontWeight:"bold", marginRight:3, marginBottom:3, cursor:"help" }
      }, QUAL_LABELS[loc] + " · " + s.label);
    }).filter(Boolean);

    // Carrier warning strip — only show if any carriers or affected
    var carriers = REC_LOCI.filter(function(loc){ return recStatus(loc)==="carrier"; });
    var affected = REC_LOCI.filter(function(loc){ return recStatus(loc)==="affected"; });

    var hasIssues = recBadges.some(function(b){ return b; }) || qualBadges.length > 0;
    if (!hasIssues && carriers.length === 0 && affected.length === 0) return null;

    return React.createElement(React.Fragment, null,
      // Health genetics badge row
      (recBadges.length > 0 || qualBadges.length > 0) && React.createElement("div", {
        style: { display:"flex", flexWrap:"wrap", marginBottom:3 }
      }, recBadges, qualBadges),

      // Carrier/Affected strip at bottom of card
      (carriers.length > 0 || affected.length > 0) && React.createElement("div", {
        style: {
          background: affected.length > 0 ? "#481808" : "#2d1e00",
          border: "1px solid " + (affected.length > 0 ? "#ef4444" : "#ca8a04"),
          borderRadius: 4, padding: "3px 8px", marginBottom: 4,
          fontSize: "0.65rem", color: affected.length > 0 ? "#fca5a5" : "#fde68a"
        }
      },
        affected.length > 0
          ? "🔴 Affected: " + affected.join(", ") + (carriers.length > 0 ? " · 🟡 Carrier: " + carriers.join(", ") : "")
          : "🟡 Carrier: " + carriers.join(", ")
      )
    );
  })(),

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

  var _dragS = useDrag(), dragHandlePropsS = _dragS.dragHandleProps, panelStyleS = _dragS.panelStyle;
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
      style: Object.assign({background:"#0a0f1e",border:"1px solid #4a3a28",borderRadius:14,
        width:"min(600px,95vw)",maxHeight:"85vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.8)"}, panelStyleS)},

      // Header — drag handle
      React.createElement("div", Object.assign({}, dragHandlePropsS, {style:Object.assign({display:"flex",alignItems:"center",padding:"14px 18px",
        borderBottom:"1px solid #2e2218",gap:12,userSelect:"none"}, dragHandlePropsS.style)}),
        React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#f0e6d3",flex:1}},
          "\uD83D\uDC11 Shearing Shed"),
        React.createElement("button",{onClick:onClose, onMouseDown:function(e){e.stopPropagation();},
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
  },
  whelping_kennel: {
    label:"Whelping Kennel", icon:"\uD83C\uDFE5", desc:"Unlocks the Whelping tab. Keep up to 2 litters at once and select up to 2 pups per litter.",
    tiers:[
      { name:"Standard", capacity:2, cost:1500, upkeep:30 }
    ]
  }
};



// ═══════════════════════════════════════════════════════════════
// RETIRED / LEGACY VIEW
// ═══════════════════════════════════════════════════════════════
function RetiredView(_ref_rv) {
  if (!_ref_rv) return null;
  var animals = _ref_rv.animals || [],
      onClose = _ref_rv.onClose || function(){};

  var _useState_rv1 = _slicedToArray(useState(null), 2),
    selectedDog = _useState_rv1[0], setSelectedDog = _useState_rv1[1];
  var _useState_rv2 = _slicedToArray(useState(""), 2),
    search = _useState_rv2[0], setSearch = _useState_rv2[1];

  // Sort: titled dogs first, then by retire date desc
  var sorted = animals.slice().sort(function(a, b) {
    var aTitle = a.showPoints || 0;
    var bTitle = b.showPoints || 0;
    if (bTitle !== aTitle) return bTitle - aTitle;
    return (b.retiredAt || 0) - (a.retiredAt || 0);
  });

  var filtered2 = search
    ? sorted.filter(function(a){ return (a.name||"").toLowerCase().includes(search.toLowerCase()) || a.breed.toLowerCase().includes(search.toLowerCase()); })
    : sorted;

  var retireReasonColor = { "End of natural life":"#4ade80", "Injury":"#fbbf24", "Illness":"#f97316" };

  return React.createElement("div", { style:{ display:"flex", flexDirection:"column", height:"100vh" } },

    // Header bar
    React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12, padding:"10px 16px",
      background:"#1a1008", borderBottom:"1px solid #3a2810", flexShrink:0 } },
      React.createElement("span", { style:{ fontSize:"1.3rem" } }, "🏛️"),
      React.createElement("h2", { style:{ margin:0, color:"#f5d870", fontSize:"1.05rem" } }, "Legacy — Retired Dogs"),
      React.createElement("span", { style:{ color:"#6b5038", fontSize:"0.8rem", marginLeft:4 } },
        animals.length + " dog" + (animals.length !== 1 ? "s" : "")),
      React.createElement("input", {
        placeholder: "Search name or breed...",
        value: search,
        onChange: function(e){ setSearch(e.target.value); },
        style:{ marginLeft:"auto", background:"#241a10", border:"1px solid #3a2810",
          color:"#d4c4a8", borderRadius:6, padding:"4px 10px", fontSize:"0.8rem", width:180 }
      }),
      React.createElement("button", {
        onClick: onClose,
        style:{ background:"#2a1a10", border:"1px solid #4a3a28", color:"#b09070",
          borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:"0.85rem", marginLeft:8 }
      }, "✕ Close")
    ),

    // Body — split list + card
    React.createElement("div", { style:{ display:"flex", flex:1, overflow:"hidden" } },

      // Left — dog list
      React.createElement("div", { style:{ width:280, flexShrink:0, borderRight:"1px solid #2a1e10",
        overflow:"auto", background:"#141008" } },
        filtered2.length === 0
          ? React.createElement("div", { style:{ padding:20, color:"#4a3a28", fontStyle:"italic", fontSize:"0.82rem" } },
              animals.length === 0 ? "No retired dogs yet." : "No matches.")
          : filtered2.map(function(a) {
              var title = getAnimalTitle(a.showPoints);
              var isSelected = selectedDog && selectedDog.id === a.id;
              var ageYrs = ((a.ageMonths || 0) / 12).toFixed(1);
              return React.createElement("div", { key: a.id,
                onClick: function(){ setSelectedDog(a); },
                style:{ padding:"8px 12px", cursor:"pointer",
                  background: isSelected ? "#2a1e14" : "transparent",
                  borderBottom:"1px solid #1e1408",
                  borderLeft: isSelected ? "3px solid #d4942a" : "3px solid transparent" }
              },
                // Name + title
                React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6, marginBottom:2 } },
                  title && React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.72rem",
                    background:"#2a1e08", border:"1px solid #6a4a10", borderRadius:3, padding:"0 4px" } },
                    title.prefix.trim()),
                  React.createElement("span", { style:{ color: isSelected?"#f5d870":"#c4956a",
                    fontWeight:"bold", fontSize:"0.85rem" } }, a.name || a.breed)
                ),
                // Breed
                React.createElement("div", { style:{ color:"#8a6a48", fontSize:"0.72rem",
                  whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:240 } },
                  a.breed),
                // Stats row
                React.createElement("div", { style:{ display:"flex", gap:8, marginTop:3, fontSize:"0.7rem" } },
                  React.createElement("span", { style:{ color:"#6b8a6b" } }, ageYrs + " yrs"),
                  React.createElement("span", { style:{ color:"#6b7a8a" } },
                    a.sex === "M" ? "♂" : "♀"),
                  a.showPoints > 0 && React.createElement("span", { style:{ color:"#fbbf24" } },
                    "🎀 " + a.showPoints + "pts"),
                  React.createElement("span", { style:{ color: retireReasonColor[a.retireReason] || "#6b5038",
                    fontSize:"0.68rem" } }, a.retireReason || "Retired")
                )
              );
            })
      ),

      // Right — dog card or empty state
      React.createElement("div", { style:{ flex:1, overflow:"auto", padding:16, background:"#1a1208" } },
        !selectedDog
          ? React.createElement("div", { style:{ display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", height:"100%", color:"#4a3a28", gap:8 } },
              React.createElement("span", { style:{ fontSize:"2.5rem", opacity:0.3 } }, "🏛️"),
              React.createElement("span", { style:{ fontSize:"0.85rem", fontStyle:"italic" } },
                "Select a dog to view their record")
            )
          : React.createElement("div", { style:{ maxWidth:700 } },
              // Retired banner
              React.createElement("div", { style:{ background:"#1a1008", border:"1px solid #3a2810",
                borderRadius:6, padding:"6px 12px", marginBottom:12, display:"flex",
                alignItems:"center", gap:8, fontSize:"0.8rem" } },
                React.createElement("span", { style:{ color:"#6b5038" } }, "🏛️ RETIRED"),
                React.createElement("span", { style:{ color: retireReasonColor[selectedDog.retireReason] || "#6b5038" } },
                  selectedDog.retireReason || "Retired"),
                selectedDog.showPoints > 0 && React.createElement("span", { style:{ marginLeft:"auto",
                  color:"#fbbf24", fontWeight:"bold" } },
                  "🎀 " + selectedDog.showPoints + " career show points")
              ),
              // Show the card — read only (no onStud/onSell/onRetire)
              React.createElement(Card, {
                animal: selectedDog,
                isSelected: false,
                fullHeight: false
              }),
              // Show history
              selectedDog.showHistory && selectedDog.showHistory.length > 0 &&
                React.createElement("div", { style:{ marginTop:12, background:"#141008",
                  border:"1px solid #2a1e10", borderRadius:6, padding:"10px 12px" } },
                  React.createElement("div", { style:{ color:"#b09070", fontSize:"0.75rem",
                    marginBottom:8, fontWeight:"bold" } }, "🎀 SHOW RECORD"),
                  selectedDog.showHistory.map(function(h, i) {
                    var cls = SHOW_CLASSES.find(function(c){ return c.key === h.classKey; });
                    return React.createElement("div", { key:i,
                      style:{ display:"flex", gap:8, fontSize:"0.78rem", color:"#8a7060",
                        padding:"3px 0", borderBottom:"1px solid #1a1410" } },
                      React.createElement("span", null,
                        h.placement===1?"🥇":h.placement===2?"🥈":h.placement===3?"🥉":"📋",
                        " "+h.placement+"/"+h.total),
                      React.createElement("span", { style:{flex:1} }, cls ? cls.label : h.classKey,
                        " · ", h.level),
                      h.prize > 0 && React.createElement("span", { style:{color:"#4ade80"} }, "+$"+h.prize),
                      React.createElement("span", { style:{color:"#fbbf24"} }, "+"+h.points+"pts"),
                      React.createElement("span", { style:{color:"#4a3a28", fontSize:"0.7rem"} }, h.date)
                    );
                  })
                )
            )
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════════
// SHOWS VIEW COMPONENT
// ═══════════════════════════════════════════════════════════════

// ── DOG CEO PHOTO API ────────────────────────────────────────
// Static breed photo overrides — add URLs here as we source them.
// Falls back to Dog CEO API for anything not listed.
var BREED_PHOTOS = {};

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


// ═══════════════════════════════════════════════════════════════
// DOG SHOW SYSTEM
// ═══════════════════════════════════════════════════════════════

var SHOW_TYPES = [
  { key:"conformation", label:"Conformation",   emoji:"\uD83C\uDF80", purebredOnly:true,  minAge:18, minPerf:0,
    desc:"Breed standard judging. Purebreds only.",
    qtlWeights:{ DRIVE:0.05, INTEL:0.15, NERVE:0.35, SPEED:0.05, MUSCLE:0.4 },
    entryFee:{ novice:25,  advanced:60,  master:150 },
    purse:    { novice:[150,75,25], advanced:[500,250,100], master:[2000,1000,400] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"obedience",    label:"Obedience",       emoji:"\uD83E\uDDB4", purebredOnly:false, minAge:12, minPerf:0,
    desc:"Heeling, recall, stays, retrieves.",
    qtlWeights:{ DRIVE:0.2, INTEL:0.45, NERVE:0.2, SPEED:0.05, MUSCLE:0.1 },
    entryFee:{ novice:20,  advanced:50,  master:120 },
    purse:    { novice:[120,60,20], advanced:[400,200,80], master:[1500,750,300] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"schutzhund",   label:"Schutzhund/IPO",  emoji:"\uD83D\uDEE1\uFE0F", purebredOnly:false, minAge:24, minPerf:55,
    desc:"Tracking, obedience, and protection combined.",
    qtlWeights:{ DRIVE:0.35, INTEL:0.25, NERVE:0.25, SPEED:0.05, MUSCLE:0.1 },
    entryFee:{ novice:30,  advanced:75,  master:200 },
    purse:    { novice:[200,100,40], advanced:[700,350,140], master:[3000,1500,600] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"herding",      label:"Herding Trial",   emoji:"\uD83D\uDC11", purebredOnly:false, minAge:18, minPerf:45,
    desc:"Working livestock on course.",
    qtlWeights:{ DRIVE:0.3, INTEL:0.3, NERVE:0.2, SPEED:0.15, MUSCLE:0.05 },
    entryFee:{ novice:25,  advanced:60,  master:150 },
    purse:    { novice:[150,75,30], advanced:[500,250,100], master:[2000,1000,400] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"protection",   label:"Protection/Bite", emoji:"\uD83E\uDDB7", purebredOnly:false, minAge:24, minPerf:60,
    desc:"Courage tests and bite work on a sleeve.",
    qtlWeights:{ DRIVE:0.4, INTEL:0.15, NERVE:0.3, SPEED:0.05, MUSCLE:0.1 },
    entryFee:{ novice:30,  advanced:75,  master:200 },
    purse:    { novice:[200,100,40], advanced:[700,350,140], master:[3000,1500,600] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"agility",      label:"Agility",         emoji:"\uD83C\uDFCB\uFE0F", purebredOnly:false, minAge:15, minPerf:40,
    desc:"Timed obstacle course — jumps, tunnels, weave poles.",
    qtlWeights:{ DRIVE:0.2, INTEL:0.2, NERVE:0.15, SPEED:0.35, MUSCLE:0.1 },
    entryFee:{ novice:20,  advanced:50,  master:120 },
    purse:    { novice:[120,60,20], advanced:[400,200,80], master:[1500,750,300] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  },
  { key:"scentwork",    label:"Scent Work",      emoji:"\uD83D\uDC43", purebredOnly:false, minAge:12, minPerf:35,
    desc:"Scent trailing — search, detection, tracking.",
    qtlWeights:{ DRIVE:0.25, INTEL:0.35, NERVE:0.2, SPEED:0.1, MUSCLE:0.1 },
    entryFee:{ novice:20,  advanced:50,  master:120 },
    purse:    { novice:[120,60,20], advanced:[400,200,80], master:[1500,750,300] },
    fieldSize:{ novice:8, advanced:12, master:18 }
  }
];

// Levels in order — top 3 at any level auto-promotes to next
var SHOW_LEVELS = ["novice","advanced","master"];
var SHOW_LEVEL_LABELS = { novice:"Novice", advanced:"Advanced", master:"Master" };

// Per-type titles earned by 1st place wins at each level
var SHOW_LEVEL_TITLES = {
  conformation: {
    novice:   { key:"BNK", label:"Best in Novice",        prefix:"BNK " },
    advanced: { key:"BIB", label:"Best in Breed",         prefix:"Ch. " },
    master:   { key:"BIG", label:"Best in Group/Show",    prefix:"GCh. " }
  },
  obedience: {
    novice:   { key:"CD",  label:"Companion Dog",         prefix:"CD " },
    advanced: { key:"CDX", label:"Companion Dog Excellent",prefix:"CDX " },
    master:   { key:"UD",  label:"Utility Dog",           prefix:"UD " }
  },
  schutzhund: {
    novice:   { key:"BH",  label:"BH (Traffic Sure)",     prefix:"BH " },
    advanced: { key:"IPO2",label:"IPO II",                prefix:"IPO2 " },
    master:   { key:"IPO3",label:"IPO III",               prefix:"IPO3 " }
  },
  herding: {
    novice:   { key:"HT",  label:"Herding Tested",        prefix:"HT " },
    advanced: { key:"HS",  label:"Herding Started",       prefix:"HS " },
    master:   { key:"HX",  label:"Herding Excellent",     prefix:"HX " }
  },
  protection: {
    novice:   { key:"PD1", label:"Protection Dog I",      prefix:"PD1 " },
    advanced: { key:"PD2", label:"Protection Dog II",     prefix:"PD2 " },
    master:   { key:"PDC", label:"Protection Champion",   prefix:"PDCh. " }
  },
  agility: {
    novice:   { key:"NA",  label:"Novice Agility",        prefix:"NA " },
    advanced: { key:"OA",  label:"Open Agility",          prefix:"OA " },
    master:   { key:"MX",  label:"Master Agility Excellent",prefix:"MX " }
  },
  scentwork: {
    novice:   { key:"SWN", label:"Scent Work Novice",     prefix:"SWN " },
    advanced: { key:"SWA", label:"Scent Work Advanced",   prefix:"SWA " },
    master:   { key:"SWM", label:"Scent Work Master",     prefix:"SWM " }
  }
};

// Get the level a dog is locked into for a given show type
// showLevels[typeKey] = "novice"|"advanced"|"master"
function getDogShowLevel(animal, typeKey) {
  return (animal.showLevels && animal.showLevels[typeKey]) || "novice";
}

function calcShowScore(animal, typeKey) {
  if (!animal || !animal.genome) return 0;
  var showType = SHOW_TYPES.find(function(t){ return t.key === typeKey; });
  if (!showType) return 0;
  var hs = animal.healthScore || 50;
  var perf = animal.genome.perf || {};
  var weights = showType.qtlWeights;

  var qtlScore = 0;
  PERF_QTLS.forEach(function(q) {
    var v = perf[q];
    var avg = v ? (v[0]+v[1])/2 : 2.5;
    qtlScore += (avg / 5) * 100 * (weights[q] || 0.2);
  });

  var age = animal.ageMonths || 0;
  var ageMod = age < 12 ? 0.5 : age < 18 ? 0.75 : age < 24 ? 0.9 : age <= 72 ? 1.0 : age <= 96 ? 0.9 : 0.75;

  var isConformation = (typeKey === "conformation");
  var healthWeight = isConformation ? 0.45 : 0.3;
  var perfWeight = 1 - healthWeight;

  var coi = animal.coi || 0;
  var coiPenalty = coi > 12.5 ? Math.min(15, (coi - 12.5) * 0.6) : 0;

  var lineageBonus = 0;
  if (animal.sireTitle) lineageBonus += 2;
  if (animal.damTitle) lineageBonus += 2;

  var raw = (hs * healthWeight + qtlScore * perfWeight) * ageMod - coiPenalty + lineageBonus;
  var variance = (Math.random() - 0.5) * 0.16;
  return Math.max(0, Math.min(100, raw * (1 + variance)));
}

function generateAICompetitor(breedName, level) {
  var baseMean = { novice:48, advanced:62, master:75 }[level] || 55;
  var spread   = { novice:20, advanced:14, master:10 }[level] || 16;
  var score = baseMean + (Math.random() - 0.5) * spread * 2;
  var aiNames = ["Bella","Max","Luna","Duke","Daisy","Bear","Molly","Rocky","Lola","Buddy",
                 "Cleo","Thor","Zoe","Rex","Nala","Diesel","Ruby","Zeus","Stella","Atlas"];
  var aiSuffixes = ["von Hausen","of Ridgecrest","du Bois","of Irongate","von Schiller","of Blackwood"];
  var name = aiNames[Math.floor(Math.random()*aiNames.length)] + " " + aiSuffixes[Math.floor(Math.random()*aiSuffixes.length)];
  return { name: name, breed: breedName, isAI: true, score: Math.max(20, Math.min(98, score)) };
}

function runShow(animal, typeKey, allAnimals) {
  var showType = SHOW_TYPES.find(function(t){ return t.key === typeKey; });
  if (!showType) return null;

  var level = getDogShowLevel(animal, typeKey);

  if (showType.purebredOnly && animal.isMixed) return { error: "Conformation is purebreds only." };
  if (animal.retired) return { error: "Retired dogs cannot compete." };
  if ((animal.ageMonths||0) < showType.minAge) return { error: "Must be at least " + Math.round(showType.minAge/12*10)/10 + " years old for this event." };
  if ((animal.performanceScore||0) < showType.minPerf) return { error: "Performance score too low (" + showType.minPerf + " minimum for this event)." };

  var playerScore = calcShowScore(animal, typeKey);
  var fieldSize = showType.fieldSize[level] - 1;
  var breedForAI = animal.isMixed ? "Mixed Breed" : animal.breed;
  var competitors = [];
  for (var i = 0; i < fieldSize; i++) {
    competitors.push(generateAICompetitor(breedForAI, level));
  }
  competitors.push({ name: animal.name || animal.breed, breed: animal.breed, isAI: false, score: playerScore });
  competitors.sort(function(a,b){ return b.score - a.score; });

  var placement = competitors.findIndex(function(c){ return !c.isAI; }) + 1;
  var entryFee = showType.entryFee[level];
  var prize = 0;
  if (placement === 1) prize = showType.purse[level][0];
  else if (placement === 2) prize = showType.purse[level][1];
  else if (placement === 3) prize = showType.purse[level][2];

  // Top 3 = promote to next level
  var promoted = false;
  var nextLevel = null;
  if (placement <= 3) {
    var levelIdx = SHOW_LEVELS.indexOf(level);
    if (levelIdx < SHOW_LEVELS.length - 1) {
      nextLevel = SHOW_LEVELS[levelIdx + 1];
      promoted = true;
    }
  }

  // 1st place = earn title for this level
  var titleEarned = null;
  if (placement === 1) {
    var typeTitles = SHOW_LEVEL_TITLES[typeKey];
    if (typeTitles && typeTitles[level]) {
      titleEarned = typeTitles[level];
    }
  }

  return {
    placement: placement,
    totalEntries: showType.fieldSize[level],
    prize: prize,
    entryFee: entryFee,
    net: prize - entryFee,
    playerScore: Math.round(playerScore * 10) / 10,
    competitors: competitors,
    typeKey: typeKey,
    level: level,
    promoted: promoted,
    nextLevel: nextLevel,
    titleEarned: titleEarned,
    date: new Date().toLocaleString()
  };
}

function isShowAvailable(lastShowDates, typeKey, animalId) {
  if (!lastShowDates || !animalId) return true;
  var dogDates = lastShowDates[animalId];
  if (!dogDates) return true;
  var last = dogDates[typeKey];
  if (!last) return true;
  var elapsed = Date.now() - last;
  return elapsed >= 24*60*60*1000;
}

function getShowCooldownText(lastShowDates, typeKey, animalId) {
  if (!lastShowDates || !animalId) return null;
  var dogDates = lastShowDates[animalId];
  if (!dogDates) return null;
  var last = dogDates[typeKey];
  if (!last) return null;
  var remaining = (24*60*60*1000) - (Date.now() - last);
  if (remaining <= 0) return null;
  var hours = Math.floor(remaining / (60*60*1000));
  var mins = Math.floor((remaining % (60*60*1000)) / 60000);
  return hours > 0 ? hours+"h "+mins+"m" : mins+"m";
}

function getDogTitlesDisplay(animal) {
  if (!animal.earnedTitles || animal.earnedTitles.length === 0) return "";
  return animal.earnedTitles.map(function(t){ return t.key; }).join(" ");
}

function ShowsView(_ref_sv) {
  // ALL hooks must come before any conditional return (React Rules of Hooks)
  var _s1 = _slicedToArray(useState(null), 2),   selectedDog = _s1[0],   setSelectedDog = _s1[1];
  var _s2 = _slicedToArray(useState("obedience"),2), selectedType = _s2[0], setSelectedType = _s2[1];
  var _s3 = _slicedToArray(useState(null), 2),   lastResult = _s3[0],   setLastResult = _s3[1];
  var _s4 = _slicedToArray(useState(""), 2),     dogSearch = _s4[0],    setDogSearch = _s4[1];

  if (!_ref_sv) return null;
  var animals = _ref_sv.animals || [],
      money = _ref_sv.money || 0,
      onMoneyChange = _ref_sv.onMoneyChange || function(){},
      onAnimalUpdate = _ref_sv.onAnimalUpdate || function(){},
      onLog = _ref_sv.onLog || function(){},
      gameStartDate = _ref_sv.gameStartDate || Date.now(),
      lastShowDates = _ref_sv.lastShowDates || {},
      onShowDatesUpdate = _ref_sv.onShowDatesUpdate || function(){},
      onClose = _ref_sv.onClose || function(){};

  var showType = SHOW_TYPES.find(function(t){ return t.key === selectedType; });

  var eligibleDogs = animals.filter(function(a){
    if (a.retired) return false;
    if ((a.ageMonths||0) < (showType ? showType.minAge : 12)) return false;
    if (showType && showType.purebredOnly && a.isMixed) return false;
    if (showType && showType.minPerf > 0 && (a.performanceScore||0) < showType.minPerf) return false;
    return true;
  });

  var allDogs = animals.filter(function(a){ return !a.retired; });
  var searchLower = dogSearch.toLowerCase();
  var filteredDogs = (searchLower
    ? allDogs.filter(function(a){ return (a.name||"").toLowerCase().includes(searchLower) || (a.breed||"").toLowerCase().includes(searchLower); })
    : allDogs
  );

  function handleEnter() {
    if (!selectedDog || !showType) return;
    var dogLevel = getDogShowLevel(selectedDog, selectedType);
    var entryFee = showType.entryFee[dogLevel];
    if (money < entryFee) { alert("Not enough money. Entry fee: $"+entryFee); return; }
    if (!isShowAvailable(lastShowDates, selectedType, selectedDog.id)) { alert("This dog already competed today. Come back tomorrow!"); return; }

    var result = runShow(selectedDog, selectedType, animals);
    if (!result) return;
    if (result.error) { alert(result.error); return; }

    onMoneyChange(function(m){ return m - result.entryFee + result.prize; });

    // Update dog: level promotion + title earned
    var newLevels = Object.assign({}, selectedDog.showLevels || {});
    if (result.promoted && result.nextLevel) newLevels[selectedType] = result.nextLevel;

    var newTitles = (selectedDog.earnedTitles || []).slice();
    if (result.titleEarned && !newTitles.some(function(t){ return t.key === result.titleEarned.key; })) {
      newTitles.push(result.titleEarned);
    }

    var newHistory = ([{
      placement: result.placement, total: result.totalEntries,
      typeKey: selectedType, level: result.level,
      prize: result.prize, net: result.net,
      promoted: result.promoted, titleEarned: result.titleEarned ? result.titleEarned.key : null,
      date: result.date
    }]).concat(selectedDog.showHistory||[]).slice(0,30);

    var updatedDog = Object.assign({}, selectedDog, {
      showLevels: newLevels,
      earnedTitles: newTitles,
      showHistory: newHistory,
      studFee: newTitles.length > 0 && selectedDog.sex === "M"
        ? Math.max(selectedDog.studFee||0, newTitles.length * 150)
        : selectedDog.studFee
    });
    onAnimalUpdate(updatedDog);
    setSelectedDog(updatedDog);

    // Cooldown
    var newDates = Object.assign({}, lastShowDates);
    var dogDates = Object.assign({}, newDates[selectedDog.id] || {});
    dogDates[selectedType] = Date.now();
    newDates[selectedDog.id] = dogDates;
    onShowDatesUpdate(newDates);

    // Journal
    var plc = result.placement;
    var sfx = ["st","nd","rd"][plc-1]||"th";
    var msg = "\uD83C\uDF80 " + (selectedDog.name||selectedDog.breed) +
      " placed " + plc + sfx + "/" + result.totalEntries +
      " in " + showType.label + " " + SHOW_LEVEL_LABELS[result.level] +
      (result.prize > 0 ? " \u2014 +$"+result.prize : "") +
      (result.titleEarned ? " \uD83C\uDFC6 TITLE: "+result.titleEarned.label+"!" : "") +
      (result.promoted ? " \u2B06\uFE0F Promoted to "+SHOW_LEVEL_LABELS[result.nextLevel]+"!" : "");
    onLog({ id:Date.now()+Math.random(), type:"show", name: msg, date: result.date });
    setLastResult(result);
  }

  var btnBase = { background:"#1a1410", border:"1px solid #3a2e20", color:"#b09070",
    borderRadius:6, padding:"6px 12px", cursor:"pointer", fontSize:"0.78rem" };
  var btnActive = Object.assign({}, btnBase, { background:"#3a2410", border:"1px solid #d4942a",
    color:"#f5d870", fontWeight:"bold" });

  try {
  return React.createElement("div", { style:{ padding:12, maxWidth:960, margin:"0 auto", background:"#1a140e", minHeight:"100%" } },

    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom:14, borderBottom:"1px solid #2a2018", paddingBottom:10 } },
      React.createElement("span", { style:{ fontSize:"1.4rem" } }, "\uD83C\uDF80"),
      React.createElement("div", null,
        React.createElement("div", { style:{ color:"#f5d870", fontWeight:"bold", fontSize:"1.05rem" } }, "Dog Shows"),
        React.createElement("div", { style:{ color:"#6b5a48", fontSize:"0.72rem" } }, "1 entry per dog per event per day \u00B7 Top 3 promotes to next level \u00B7 1st place earns title")
      ),
      React.createElement("div", { style:{ marginLeft:"auto", display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ color:"#4ade80", fontWeight:"bold", fontSize:"0.88rem" } }, "$"+money.toLocaleString()),
        React.createElement("button", { onClick:onClose,
          style:{ background:"transparent", border:"1px solid #3a2e20", color:"#8a7055", borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" } }, "\u2715 Close")
      )
    ),

    // Two-column layout: left = event picker + dog picker, right = details + results
    React.createElement("div", { style:{ display:"flex", gap:12, alignItems:"flex-start" } },

      // LEFT COLUMN
      React.createElement("div", { style:{ flex:"0 0 280px", display:"flex", flexDirection:"column", gap:10 } },

        // Event type selector
        React.createElement("div", { style:{ background:"#141008", border:"1px solid #2a2018", borderRadius:8, padding:10 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.68rem", fontWeight:"bold", marginBottom:8, letterSpacing:"0.05em" } }, "SELECT EVENT"),
          SHOW_TYPES.map(function(t){
            var active = selectedType === t.key;
            return React.createElement("button", { key:t.key,
              onClick:function(){ setSelectedType(t.key); setLastResult(null); setSelectedDog(null); },
              style:{ display:"block", width:"100%", textAlign:"left", marginBottom:4,
                background: active ? "#2a1e08" : "transparent",
                border: "1px solid " + (active ? "#d4942a" : "#2a2018"),
                color: active ? "#f5d870" : "#8a7055",
                borderRadius:6, padding:"7px 10px", cursor:"pointer", fontSize:"0.8rem" } },
              React.createElement("span", { style:{ marginRight:6 } }, t.emoji),
              t.label,
              t.purebredOnly && React.createElement("span", { style:{ marginLeft:6, fontSize:"0.62rem", color:"#ef4444" } }, "Purebred"),
              t.minPerf > 0 && React.createElement("span", { style:{ marginLeft:6, fontSize:"0.62rem", color:"#60a5fa" } }, "Perf "+t.minPerf+"+")
            );
          })
        ),

        // Dog selector
        React.createElement("div", { style:{ background:"#141008", border:"1px solid #2a2018", borderRadius:8, padding:10 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.68rem", fontWeight:"bold", marginBottom:6, letterSpacing:"0.05em" } }, "SELECT DOG"),
          React.createElement("input", {
            placeholder:"Search name or breed...",
            value: dogSearch,
            onChange: function(e){ setDogSearch(e.target.value); },
            style:{ width:"100%", boxSizing:"border-box", background:"#1a1410", border:"1px solid #3a2e20",
              color:"#e8d0a8", borderRadius:4, padding:"4px 8px", fontSize:"0.75rem", marginBottom:6,
              outline:"none" }
          }),
          React.createElement("div", { style:{ maxHeight:260, overflowY:"auto" } },
            filteredDogs.length === 0
              ? React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.75rem", padding:"8px 0" } }, "No dogs found")
              : filteredDogs.map(function(a){
                  var isSelected = selectedDog && selectedDog.id === a.id;
                  var dogLevel = getDogShowLevel(a, selectedType);
                  var cd = getShowCooldownText(lastShowDates, selectedType, a.id);
                  var isEligible = eligibleDogs.some(function(e){ return e.id === a.id; });
                  var titles = getDogTitlesDisplay(a);

                  return React.createElement("div", { key:a.id,
                    onClick:function(){ if(isEligible) { setSelectedDog(a); setLastResult(null); } },
                    style:{
                      padding:"6px 8px", borderRadius:6, marginBottom:3, cursor: isEligible ? "pointer" : "default",
                      background: isSelected ? "#2a1e08" : "transparent",
                      border: "1px solid " + (isSelected ? "#d4942a" : "transparent"),
                      opacity: isEligible ? 1 : 0.45
                    } },
                    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center" } },
                      React.createElement("span", { style:{ color: isSelected?"#f5d870":"#c4956a", fontWeight:"bold", fontSize:"0.8rem" } },
                        (titles ? titles+" " : "") + (a.name||a.breed)),
                      React.createElement("span", { style:{ fontSize:"0.65rem", color: dogLevel==="master"?"#fbbf24":dogLevel==="advanced"?"#60a5fa":"#6b5a48" } },
                        SHOW_LEVEL_LABELS[dogLevel])
                    ),
                    React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:1 } },
                      React.createElement("span", { style:{ color:"#6b5a48", fontSize:"0.68rem" } },
                        (a.ageMonths||0) < (showType?showType.minAge:12) ? "\u26A0\uFE0F Too young" :
                        (showType&&showType.purebredOnly&&a.isMixed) ? "\u26A0\uFE0F Purebred only" :
                        (showType&&showType.minPerf>0&&(a.performanceScore||0)<showType.minPerf) ? "\u26A0\uFE0F Perf too low" :
                        a.breed.split(" \xD7 ")[0]),
                      cd && React.createElement("span", { style:{ fontSize:"0.62rem", color:"#ef4444" } }, "\u23F3"+cd)
                    )
                  );
                })
          )
        )
      ),

      // RIGHT COLUMN
      React.createElement("div", { style:{ flex:1, display:"flex", flexDirection:"column", gap:10 } },

        // Event info card
        showType && React.createElement("div", { style:{ background:"#141008", border:"1px solid #2a2018", borderRadius:8, padding:12 } },
          React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:8, marginBottom:8 } },
            React.createElement("span", { style:{ fontSize:"1.5rem" } }, showType.emoji),
            React.createElement("div", null,
              React.createElement("div", { style:{ color:"#f5d870", fontWeight:"bold", fontSize:"0.95rem" } }, showType.label),
              React.createElement("div", { style:{ color:"#6b5a48", fontSize:"0.72rem" } }, showType.desc)
            )
          ),
          // Show current dog's level and prizes
          selectedDog && (function(){
            var dogLevel = getDogShowLevel(selectedDog, selectedType);
            var entryFee = showType.entryFee[dogLevel];
            var purse = showType.purse[dogLevel];
            var cd = getShowCooldownText(lastShowDates, selectedType, selectedDog.id);
            var avail = isShowAvailable(lastShowDates, selectedType, selectedDog.id);
            var canAfford = money >= entryFee;
            var isElig = eligibleDogs.some(function(e){ return e.id === selectedDog.id; });
            return React.createElement("div", null,
              React.createElement("div", { style:{ display:"flex", gap:12, flexWrap:"wrap", fontSize:"0.78rem", marginBottom:10, color:"#8a7055" } },
                React.createElement("span", null, "Level: ", React.createElement("strong", { style:{ color: dogLevel==="master"?"#fbbf24":dogLevel==="advanced"?"#60a5fa":"#84cc16" } }, SHOW_LEVEL_LABELS[dogLevel])),
                React.createElement("span", null, "Entry: ", React.createElement("strong", { style:{color:"#f5d870"} }, "$"+entryFee)),
                React.createElement("span", null, "\uD83E\uDD47 $"+purse[0]),
                React.createElement("span", null, "\uD83E\uDD48 $"+purse[1]),
                React.createElement("span", null, "\uD83E\uDD49 $"+purse[2]),
                React.createElement("span", null, "Field: "+showType.fieldSize[dogLevel]+" dogs")
              ),
              React.createElement("button", {
                onClick: handleEnter,
                disabled: !isElig || !canAfford || !avail,
                style:{
                  width:"100%", padding:"10px 0", borderRadius:8, fontSize:"0.9rem", fontWeight:"bold",
                  cursor: (isElig&&canAfford&&avail) ? "pointer" : "not-allowed",
                  background: (isElig&&canAfford&&avail) ? "linear-gradient(135deg,#3a2810,#2a1e08)" : "#1a1410",
                  border: "2px solid " + ((isElig&&canAfford&&avail) ? "#d4942a" : "#3a2e20"),
                  color: (isElig&&canAfford&&avail) ? "#f5d870" : "#4a3a28"
                }
              },
                !isElig ? "\u26A0\uFE0F Not eligible for this event" :
                !canAfford ? "\u26A0\uFE0F Insufficient funds ($"+entryFee+" needed)" :
                !avail ? "\u23F3 Next entry in "+cd :
                showType.emoji+" Enter "+showType.label+" \u2014 "+SHOW_LEVEL_LABELS[dogLevel]+" ($"+entryFee+")"
              )
            );
          })(),
          !selectedDog && React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.8rem", fontStyle:"italic", marginTop:6 } },
            "Select a dog on the left to enter")
        ),

        // Result panel
        lastResult && React.createElement("div", {
          style:{
            background:"#141008",
            border:"2px solid "+(lastResult.placement===1?"#fbbf24":lastResult.placement===2?"#94a3b8":lastResult.placement===3?"#b45309":"#2a2018"),
            borderRadius:8, padding:12
          }
        },
          React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom:10 } },
            React.createElement("span", { style:{ fontSize:"2rem" } },
              lastResult.placement===1?"\uD83E\uDD47":lastResult.placement===2?"\uD83E\uDD48":lastResult.placement===3?"\uD83E\uDD49":"\uD83D\uDCCB"),
            React.createElement("div", null,
              React.createElement("div", { style:{ color:"#f5d870", fontWeight:"bold", fontSize:"1rem" } },
                lastResult.placement+(["\u02E2\u1D57","\u207F\u1D48","\u02B3\u1D48"][lastResult.placement-1]||"\u1D57\u02B0")+" Place of "+lastResult.totalEntries),
              React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.8rem" } },
                (SHOW_TYPES.find(function(t){return t.key===lastResult.typeKey;})||{label:""}).label +
                " \u00B7 " + SHOW_LEVEL_LABELS[lastResult.level] +
                " \u00B7 Score: " + lastResult.playerScore)
            ),
            React.createElement("div", { style:{ marginLeft:"auto", textAlign:"right" } },
              lastResult.prize > 0 && React.createElement("div", { style:{ color:"#4ade80", fontWeight:"bold" } }, "+$"+lastResult.prize),
              React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.78rem" } }, "-$"+lastResult.entryFee+" entry"),
              React.createElement("div", { style:{ color:lastResult.net>=0?"#4ade80":"#ef4444", fontWeight:"bold", fontSize:"0.85rem" } },
                "Net: "+(lastResult.net>=0?"+":"")+"$"+lastResult.net)
            )
          ),
          // Promotion / title banners
          (lastResult.titleEarned || lastResult.promoted) && React.createElement("div", { style:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 } },
            lastResult.titleEarned && React.createElement("div", { style:{ background:"#2a1e08", border:"1px solid #fbbf24", borderRadius:6, padding:"4px 10px", fontSize:"0.8rem", color:"#fbbf24" } },
              "\uD83C\uDFC6 Title earned: "+lastResult.titleEarned.label),
            lastResult.promoted && React.createElement("div", { style:{ background:"#081a28", border:"1px solid #60a5fa", borderRadius:6, padding:"4px 10px", fontSize:"0.8rem", color:"#60a5fa" } },
              "\u2B06\uFE0F Promoted to "+SHOW_LEVEL_LABELS[lastResult.nextLevel]+"!")
          ),
          // Top 8 competitor list
          React.createElement("div", { style:{ fontSize:"0.72rem", color:"#6b5a48", marginBottom:4 } }, "RESULTS"),
          React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:2 } },
            lastResult.competitors.slice(0,8).map(function(c, i){
              return React.createElement("div", { key:i,
                style:{ display:"flex", gap:8, padding:"3px 6px", borderRadius:3,
                  background: !c.isAI ? "rgba(212,148,42,0.12)" : "transparent",
                  color: !c.isAI ? "#f5d870" : "#6b5a48", fontSize:"0.78rem" } },
                React.createElement("span", { style:{ width:20, textAlign:"right", color:"#4a3a28" } }, (i+1)+"."),
                React.createElement("span", { style:{ flex:1 } }, c.name),
                React.createElement("span", { style:{ color:"#4a3a28" } }, c.breed.split(" \xD7 ")[0]),
                React.createElement("span", { style:{ minWidth:38, textAlign:"right", color:!c.isAI?"#f5d870":"#4a3a28" } },
                  Math.round(c.score*10)/10)
              );
            })
          )
        ),

        // Selected dog's show record
        selectedDog && React.createElement("div", { style:{ background:"#141008", border:"1px solid #2a2018", borderRadius:8, padding:12 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.68rem", fontWeight:"bold", marginBottom:8, letterSpacing:"0.05em" } },
            (selectedDog.name||selectedDog.breed).toUpperCase()+" \u2014 SHOW RECORD"),

          // Titles earned
          selectedDog.earnedTitles && selectedDog.earnedTitles.length > 0 && React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:8 } },
            selectedDog.earnedTitles.map(function(t){
              return React.createElement("span", { key:t.key,
                style:{ background:"#2a1e08", border:"1px solid #fbbf24", borderRadius:4,
                  padding:"2px 8px", fontSize:"0.7rem", color:"#fbbf24" } }, t.label);
            })
          ),

          // Level progress per event
          React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:10 } },
            SHOW_TYPES.map(function(t){
              var lvl = getDogShowLevel(selectedDog, t.key);
              var color = lvl==="master"?"#fbbf24":lvl==="advanced"?"#60a5fa":"#4a3a28";
              return React.createElement("span", { key:t.key,
                style:{ background:"#1a1410", border:"1px solid "+color, borderRadius:4,
                  padding:"2px 7px", fontSize:"0.65rem", color:color } },
                t.emoji+" "+t.label.split("/")[0]+": "+SHOW_LEVEL_LABELS[lvl]);
            })
          ),

          // History
          (!selectedDog.showHistory || selectedDog.showHistory.length === 0)
            ? React.createElement("div", { style:{ color:"#3a2e20", fontStyle:"italic", fontSize:"0.78rem" } }, "No show history yet")
            : React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:2 } },
                (selectedDog.showHistory||[]).slice(0,12).map(function(h, i){
                  var ht = SHOW_TYPES.find(function(t){ return t.key===h.typeKey; });
                  return React.createElement("div", { key:i,
                    style:{ display:"flex", gap:8, fontSize:"0.72rem", color:"#6b5a48",
                      padding:"3px 0", borderBottom:"1px solid #1a1410" } },
                    React.createElement("span", null,
                      h.placement===1?"\uD83E\uDD47":h.placement===2?"\uD83E\uDD48":h.placement===3?"\uD83E\uDD49":"\uD83D\uDCCB",
                      " "+h.placement+"/"+h.total),
                    React.createElement("span", { style:{ flex:1 } },
                      (ht?ht.emoji+" "+ht.label:"?")+" \u00B7 "+SHOW_LEVEL_LABELS[h.level||"novice"]),
                    h.prize > 0 && React.createElement("span", { style:{ color:"#4ade80" } }, "+$"+h.prize),
                    h.titleEarned && React.createElement("span", { style:{ color:"#fbbf24" } }, "\uD83C\uDFC6"+h.titleEarned),
                    h.promoted && React.createElement("span", { style:{ color:"#60a5fa" } }, "\u2B06\uFE0F"),
                    React.createElement("span", { style:{ color:"#3a2e20", fontSize:"0.65rem" } }, h.date)
                  );
                })
              )
        )
      )
    )
  );
  } catch(e) {
    return React.createElement("div", { style:{ padding:20, color:"#ef4444" } }, "Shows error: "+String(e&&e.message?e.message:e));
  }
}

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
  var _useState9 = useState((function(){
    var raw = _savedState ? _savedState.animals || [] : [];
    // Dedup by id — strip any duplicates baked into saved state
    var seen = new Set();
    return raw.filter(function(a){ if (seen.has(a.id)) return false; seen.add(a.id); return true; });
  })()),
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
  var _useState13 = useState(_savedState && _savedState.litter ? _savedState.litter : []),
    _useState14 = _slicedToArray(_useState13, 2),
    litter = _useState14[0],
    setLitter = _useState14[1];
  var _useState15 = useState(_savedState ? _savedState.log || [] : []),
    _useState16 = _slicedToArray(_useState15, 2),
    log = _useState16[0],
    setLog = _useState16[1];
  var _useState17 = useState(_savedState && _savedState.tab ? _savedState.tab : "kennel"),
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
  var _useStateKC = useState([]),
    _useStateKC2 = _slicedToArray(_useStateKC, 2),
    kennelChecked = _useStateKC2[0],
    setKennelChecked = _useStateKC2[1];
  var _useStateKMT = useState(""),
    _useStateKMT2 = _slicedToArray(_useStateKMT, 2),
    kennelMoveTarget = _useStateKMT2[0],
    setKennelMoveTarget = _useStateKMT2[1];
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
  var _useStateEditOL = _slicedToArray(useState(null), 2),
    editingPupId = _useStateEditOL[0], setEditingPupId = _useStateEditOL[1];
  var _useStateEditWH = _slicedToArray(useState(null), 2),
    editingWHKey = _useStateEditWH[0], setEditingWHKey = _useStateEditWH[1];
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
  var _useStateLS = useState(_savedState && _savedState.litterSelected ? _savedState.litterSelected : []),
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
  var _useStateLSD = useState(_savedState ? _savedState.lastShowDates || {} : {}),
    _useStateLSD2 = _slicedToArray(_useStateLSD, 2),
    lastShowDates = _useStateLSD2[0],
    setLastShowDates = _useStateLSD2[1];
  var _useStateHSD = useState(_savedState ? _savedState.horseShowDates || {} : {}),
    _useStateHSD2 = _slicedToArray(_useStateHSD, 2),
    horseShowDates = _useStateHSD2[0],
    setHorseShowDates = _useStateHSD2[1];
  var _useStatePF = useState(_savedState ? _savedState.pendingFoals || [] : []),
    _useStatePF2 = _slicedToArray(_useStatePF, 2),
    pendingFoals = _useStatePF2[0],
    setPendingFoals = _useStatePF2[1];
  var _useStateFC = useState(_savedState ? _savedState.foalCount || 0 : 0),
    _useStateFC2 = _slicedToArray(_useStateFC, 2),
    foalCount = _useStateFC2[0],
    setFoalCount = _useStateFC2[1];
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
  // ── Breed tab picker state ─────────────────────────────────────────────
  var _useStateBTS = useState(""),
    _useStateBTS2 = _slicedToArray(_useStateBTS, 2),
    breedSireSearch = _useStateBTS2[0],
    setBreedSireSearch = _useStateBTS2[1];
  var _useStateBTD = useState(""),
    _useStateBTD2 = _slicedToArray(_useStateBTD, 2),
    breedDamSearch = _useStateBTD2[0],
    setBreedDamSearch = _useStateBTD2[1];
  var _useStateBTSS = useState("perf"),
    _useStateBTSS2 = _slicedToArray(_useStateBTSS, 2),
    breedSireSort = _useStateBTSS2[0],
    setBreedSireSort = _useStateBTSS2[1];
  var _useStateBTDS = useState("perf"),
    _useStateBTDS2 = _slicedToArray(_useStateBTDS, 2),
    breedDamSort = _useStateBTDS2[0],
    setBreedDamSort = _useStateBTDS2[1];
  var _useStateBTSDNA = useState(null),
    _useStateBTSDNA2 = _slicedToArray(_useStateBTSDNA, 2),
    breedSireDna = _useStateBTSDNA2[0],
    setBreedSireDna = _useStateBTSDNA2[1];
  var _useStateBTDDNA = useState(null),
    _useStateBTDDNA2 = _slicedToArray(_useStateBTDDNA, 2),
    breedDamDna = _useStateBTDDNA2[0],
    setBreedDamDna = _useStateBTDDNA2[1];
  // ── Kennel list/grid view ──────────────────────────────────────────────
  var _useStateKLV = useState("grid"),
    _useStateKLV2 = _slicedToArray(_useStateKLV, 2),
    kennelViewMode = _useStateKLV2[0],
    setKennelViewMode = _useStateKLV2[1];
  var _useStateKLS = useState("name"),
    _useStateKLS2 = _slicedToArray(_useStateKLS, 2),
    kennelListSort = _useStateKLS2[0],
    setKennelListSort = _useStateKLS2[1];
  var _useStateKLD = useState("asc"),
    _useStateKLD2 = _slicedToArray(_useStateKLD, 2),
    kennelListDir = _useStateKLD2[0],
    setKennelListDir = _useStateKLD2[1];
  var _useStateKLSR = useState(null),
    _useStateKLSR2 = _slicedToArray(_useStateKLSR, 2),
    kennelListSelected = _useStateKLSR2[0],
    setKennelListSelected = _useStateKLSR2[1];
  var _useStateSHED = useState(false),
    _useStateSHED2 = _slicedToArray(_useStateSHED, 2),
    showShearing = _useStateSHED2[0],
    setShowShearing = _useStateSHED2[1];
  var _useStateOL = useState(_savedState ? _savedState.ownedLivestock || [] : []),
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
  }, []);

  // Daily farm income tick
  useEffect(function() {
    // Load community-submitted approved images from Supabase
    if (typeof baLoadApprovedImages === "function") {
      baLoadApprovedImages(function(){});
    }
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
      // Honey production from Apiary — no production in winter (Dec/Jan/Feb)
      if (facilitiesOwned.apiary) {
        var _apiaryMonthIdx = (2 + Math.floor((now - gameStartDate) / (24*60*60*1000))) % 12;
        var _isWinter = _apiaryMonthIdx === 0 || _apiaryMonthIdx === 1 || _apiaryMonthIdx === 11;
        if (!_isWinter) {
          var hiveCount = FACILITIES.apiary.tiers[facilitiesOwned.apiary.tier].capacity;
          var honeyPerDay = Math.round(hiveCount * 5 * 10) / 10;
          if (honeyPerDay > 0) {
            setCommodities(function(c){ return Object.assign({}, c, { honey: Math.round((c.honey + honeyPerDay) * 10) / 10 }); });
            setLog(function(lg){ return [{ id: Date.now()+Math.random(), type: "income",
              name: "\uD83D\uDC1D Apiary (" + hiveCount + " hives) — honey: +" + honeyPerDay + " lbs",
              date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
          }
        } else {
          setLog(function(lg){ return [{ id: Date.now()+Math.random(), type: "income",
            name: "\u2744\uFE0F Apiary — bees dormant (winter, no honey production)",
            date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
        }
      }
      // Facility upkeep — deduct daily upkeep for all owned facilities
      var _totalUpkeep = 0;
      Object.keys(facilitiesOwned).forEach(function(fKey) {
        var fOwned = facilitiesOwned[fKey];
        var fDef = FACILITIES[fKey];
        if (fOwned && fDef && fDef.tiers && fDef.tiers[fOwned.tier]) {
          _totalUpkeep += fDef.tiers[fOwned.tier].upkeep || 0;
        }
      });
      if (_totalUpkeep > 0) {
        setMoney(function(m){ return Math.max(0, m - _totalUpkeep); });
        setLog(function(lg){ return [{ id: Date.now()+Math.random(), type: "expense",
          name: "\uD83C\uDFD7\uFE0F Facility upkeep — -$" + _totalUpkeep.toLocaleString(),
          date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      }
      setLastIncomeTick(now);
      localStorage.setItem("ba_lastIncomeTick", String(now));
    }
    // Check for foals ready to be born
    if (pendingFoals && pendingFoals.length > 0) {
      var readyFoals = pendingFoals.filter(function(pf){ return pf.dueDate <= Date.now(); });
      if (readyFoals.length > 0) {
        var remainingFoals = pendingFoals.filter(function(pf){ return pf.dueDate > Date.now(); });
        setPendingFoals(remainingFoals);
        // Clear pregnantUntil from mares that just gave birth
        var bornDamIds = readyFoals.map(function(pf){ return pf.damId; });
        setOwnedLivestock(function(prev){
          var updated = prev.map(function(a){
            if (bornDamIds.indexOf(a.id) !== -1) return Object.assign({},a,{pregnantUntil:null});
            return a;
          });
          readyFoals.forEach(function(pf){
            updated = updated.concat([pf.foal]);
          });
          return updated;
        });
        readyFoals.forEach(function(pf){
          setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"breeding",
            name:"🐴 "+pf.foal.name+" born! ("+pf.foal.breed+" · "+pf.foal.coatColor+" · "+(pf.foal.sex==="M"?"♂":"♀")+")",
            date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
        });
      }
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
            return Object.assign({}, a, studReset, {ageMonths: newAge, retired: true, retireReason: "End of natural life", retiredAt: now});
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
          // ── HEALTH FLAG EVENTS ────────────────────────────────
          var healthEvents = {};
          var breedData = (typeof DEMO_BREEDS !== "undefined" ? DEMO_BREEDS : []).find(function(b){ return b.name === a.breed; });
          var flags = (breedData && breedData.healthFlags) ? breedData.healthFlags.map(function(s){ return s.toLowerCase(); }) : [];

          // BLOAT — acute emergency, retired with "bloat episode" (large/giant breeds, 6+ yrs)
          if (!a.retired && flags.some(function(x){ return x === "bloat"; }) && newAge >= 72) {
            var bloatChancePerDay = 0.0003 * daysPassed; // ~0.03%/day = ~10%/yr in high-risk
            if (Math.random() < bloatChancePerDay) {
              (function(){
                var entry = { id: now+Math.random(), type:"incident", name: (a.name||a.breed)+" suffered a bloat episode", breed: a.breed, date: new Date().toLocaleString() };
                setTimeout(function(){ setLog(function(p){ return [entry].concat(_toConsumableArray(p)); }); }, 0);
              })();
              return Object.assign({}, a, studReset, sizeLockUpdate, { ageMonths: newAge, retired: true, retireReason: "Bloat episode", retiredAt: now, lastUpdated: now });
            }
          }

          // CANCER — senior mortality risk (7+ yrs), higher for flagged breeds
          if (!a.retired && flags.some(function(x){ return x === "cancer"; }) && newAge >= 84) {
            var cancerChance = 0.0004 * daysPassed; // ~0.04%/day = ~14%/yr in seniors
            if (Math.random() < cancerChance) {
              (function(){
                var entry = { id: now+Math.random(), type:"incident", name: (a.name||a.breed)+" lost to cancer", breed: a.breed, date: new Date().toLocaleString() };
                setTimeout(function(){ setLog(function(p){ return [entry].concat(_toConsumableArray(p)); }); }, 0);
              })();
              return Object.assign({}, a, studReset, sizeLockUpdate, { ageMonths: newAge, retired: true, retireReason: "Cancer", retiredAt: now, lastUpdated: now });
            }
          }

          // JOINT DEGRADATION — once daily, senior dogs with joint/hip flags lose health pts
          if (!a.retired && flags.some(function(x){ return x.includes("hip") || x.includes("joint") || x.includes("spine"); }) && newAge >= 96) {
            var jDeg = Math.random() < 0.15 * daysPassed ? 1 : 0; // ~15%/day to tick down
            if (jDeg && (a.healthScore || 100) > 20) {
              healthEvents.healthScore = Math.max(20, (a.healthScore || 100) - jDeg);
            }
          }
          // ─────────────────────────────────────────────────────

          return Object.assign({}, a, studReset, sizeLockUpdate, healthEvents, {ageMonths: newAge, lastUpdated: now});
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
          var destKennelId = lit.dam.kennelId || null;
          if (kept.length > 0) {
            setAnimals(function(prev) {
              var existingIds = new Set(prev.map(function(a){ return a.id; }));
              var newPups = kept.filter(function(p){ return !existingIds.has(p.id); });
              return prev
                .map(function(animal){ return animal.id===lit.dam.id ? Object.assign({},animal,{inWhelping:false}) : animal; })
                .concat(newPups.map(function(p){ return Object.assign({}, p, { kennelId: destKennelId }); }));
            });
          } else {
            setAnimals(function(prev){ return prev.map(function(animal){ return animal.id===lit.dam.id ? Object.assign({},animal,{inWhelping:false}) : animal; }); });
          }
          var logEntries = [];
          if (kept.length > 0) logEntries.push({ id: now+Math.random(), type:"pups_kept", count: kept.length, date: new Date().toLocaleString() });
          if (rehomed.length > 0) logEntries.push({ id: now+Math.random(), type:"rehome", name: rehomed.length+" pup(s) rehomed (day 4)", breed: lit.dam.breed, date: new Date().toLocaleString(), auto: true });
          logEntries.push({ id: now+Math.random(), type:"whelp", name: lit.dam.name, breed: lit.dam.breed, note:"Dam returned home from Whelping Kennel", date: new Date().toLocaleString() });
          if (logEntries.length > 0) { setLog(function(lg) { return logEntries.concat(_toConsumableArray(lg)); }); }
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
      // ── STUD FEE INCOME ──────────────────────────────────────
      // Each listed stud earns their fee once per day (simulates AI clients)
      (function(){
        var studs = animals.filter(function(a){ return !a.retired && a.isStud && a.sex==="M" && a.studFee > 0; });
        if (studs.length === 0) return;
        var income = studs.reduce(function(s,a){ return s + (a.studFee||0) * daysPassed; }, 0);
        setMoney(function(m){ return m + income; });
        setLog(function(lg){ return [{ id: now+Math.random(), type:"financial",
          name: "Stud fees \u2014 " + studs.length + " male" + (studs.length!==1?"s":"") + " listed",
          amount: income, date: new Date().toLocaleString() }].concat(lg); });
      })();
      // ── HORSE STUD FEE INCOME ────────────────────────────────
      (function(){
        var horseStuds = (ownedLivestock||[]).filter(function(a){ return a.species==="horse" && a.sex==="M" && a.isStud && a.studFee > 0; });
        if (horseStuds.length === 0) return;
        var income = horseStuds.reduce(function(s,a){ return s + (a.studFee||0) * daysPassed; }, 0);
        setMoney(function(m){ return m + income; });
        setLog(function(lg){ return [{ id: now+Math.random(), type:"financial",
          name: "\uD83D\uDC0E Horse stud fees \u2014 " + horseStuds.length + " stallion" + (horseStuds.length!==1?"s":"") + " listed",
          amount: income, date: new Date().toLocaleString() }].concat(lg); });
      })();
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
          litter: litter,
          litterSelected: litterSelected,
          tab: tab,
          hasWhelpingKennel: hasWhelpingKennel,
          whelpingLitters: whelpingLitters,
          holdingPups: holdingPups,
          facilitiesOwned: facilitiesOwned,
          ownedLivestock: ownedLivestock,
          commodities: commodities,
          sheepSheared: sheepSheared,
          lastShowDates: lastShowDates,
          horseShowDates: horseShowDates,
          pendingFoals: pendingFoals,
          foalCount: foalCount,
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
  }, [animals, kennels, log, money, litter, litterSelected, tab, hasWhelpingKennel, whelpingLitters, holdingPups, facilitiesOwned, ownedLivestock, commodities, sheepSheared, lastShowDates, horseShowDates, pendingFoals, foalCount]);
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
    // COI warning confirm
    var pupCOICheck = calcCOI(sire.id, dam.id, animals);
    if (pupCOICheck >= 12.5) {
      var coiLabel = pupCOICheck >= 50 ? "EXTREME (" + pupCOICheck.toFixed(1) + "%)" : pupCOICheck >= 25 ? "HIGH (" + pupCOICheck.toFixed(1) + "%)" : "ELEVATED (" + pupCOICheck.toFixed(1) + "%)";
      var coiMsg = pupCOICheck >= 50 ? "Expect 2-3 fewer pups, severe health penalties." : pupCOICheck >= 25 ? "Expect 1-2 fewer pups, health penalties likely." : "May reduce litter size by 1.";
      if (!confirm("\u26A0\uFE0F Inbreeding Warning\n\nCOI is " + coiLabel + "\n" + coiMsg + "\n\nProceed with this breeding?")) return;
    }
    // Generate the litter
    var breedResult = breedPair(sire, dam);
    var pups = breedResult.pups;
    var hadStillborn = breedResult.hadStillborn;
    // Calculate COI for each pup now that we know sireId/damId
    var pupCOI = calcCOI(sire.id, dam.id, animals);
    pups = pups.map(function(p){ return Object.assign({}, p, { coi: pupCOI }); });
    var now = Date.now();
    var useWhelping = hasWhelpingKennel && whelpingLitters.length < 2;
    if (hasWhelpingKennel && !useWhelping) {
      alert("\u26A0\uFE0F Whelping Kennel is full (2/2)! You may only keep 1 pup from this litter.");
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
      setTab("openlitter");
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
        critFlags: pups.filter(function(x){ var _w; return ((_w=x.lethalWarnings)===null||_w===void 0?void 0:_w.some(function(w){ return (typeof w==="string"?w:w.sev)!=="warn"; })); }).length,
        stillborn: hadStillborn ? 1 : 0
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
        var kennelId = activeKennel ? activeKennel.id : (lit.dam.kennelId || null);
        setAnimals(function(prev) {
          var existingIds = new Set(prev.map(function(a){ return a.id; }));
          var newPups = kept.filter(function(p){ return !existingIds.has(p.id); });
          return prev.concat(newPups.map(function(p){
            return Object.assign({}, p, { kennelId: kennelId, heldSince: null });
          }));
        });
        setLog(function(lg) { return [{ id: now, type: "pups_kept", count: kept.length, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      }
      if (rehomed.length > 0) {
        setLog(function(lg) { return [{ id: now+1, type: "rehome", name: rehomed.length+" pup(s) rehomed", breed: lit.dam.breed, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
      }
      setAnimals(function(a) { return a.map(function(animal){ return animal.id===lit.dam.id ? Object.assign({},animal,{inWhelping:false}) : animal; }); });
      return prev.filter(function(l){ return l.litterId !== litterId; });
    });
  };
  var finalizeLitter = function finalizeLitter() {
    var now = Date.now();
    var kept = litter.filter(function(p){ return litterSelected.includes(p.id); });
    var rehomed = litter.filter(function(p){ return !litterSelected.includes(p.id); });
    if (kept.length > 0) {
      var kennelId = activeKennel ? activeKennel.id : null;
      setAnimals(function(prev) {
        var existingIds = new Set(prev.map(function(a){ return a.id; }));
        var newPups = kept.filter(function(p){ return !existingIds.has(p.id); });
        return prev.concat(newPups.map(function(p){ return Object.assign({}, p, { kennelId: kennelId }); }));
      });
      setLog(function(lg) { return [{ id: now, type: "pups_kept", count: kept.length, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
    }
    if (rehomed.length > 0) {
      setLog(function(lg) { return [{ id: now+1, type: "rehome", name: rehomed.length+" pup(s) rehomed", breed: litter[0]?litter[0].damBreed:"", date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
    }
    setLitter([]); setLitterSelected([]); setLitterIdx(0); setTab("kennel");
  };
  // Rename a pup in the open litter
  var renameLitterPup = function renameLitterPup(pupId, newName) {
    setLitter(function(prev){ return prev.map(function(p){ return p.id===pupId ? Object.assign({},p,{name:newName}) : p; }); });
  };
  // Rename a pup in a whelping litter
  var renameWhelpingPup = function renameWhelpingPup(litterId, pupId, newName) {
    setWhelpingLitters(function(prev){ return prev.map(function(lit){
      if (lit.litterId !== litterId) return lit;
      return Object.assign({}, lit, { pups: lit.pups.map(function(p){ return p.id===pupId ? Object.assign({},p,{name:newName}) : p; }) });
    }); });
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
    if (!animal || animal.retired) return;
    if (animal.isStud) {
      if (confirm('Remove "' + animal.name + '" from stud listings?')) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{isStud:false,studFee:null,lockedToPlayer:null}) : a; }); });
      }
    } else {
      // Suggested fee based on health + perf scores
      var effH = applyCoiPenalty(animal.healthScore || 80, animal.coi || 0);
      var perf = animal.perfScore || 60;
      var gen = animal.generation || 1;
      var suggested = Math.round((effH * 0.6 + perf * 0.4) * 1.8 + (gen - 1) * 25);
      suggested = Math.max(50, Math.min(2500, Math.round(suggested / 25) * 25));
      var fee = prompt(
        'List "' + animal.name + '" as stud\n'
        + 'Health: ' + effH + ' | Perf: ' + perf + ' | Gen ' + gen + '\n'
        + 'Suggested fee: $' + suggested + '\n'
        + 'Enter stud fee ($):', suggested);
      if (fee && !isNaN(fee) && Number(fee) > 0) {
        setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{isStud:true,studFee:Number(fee),lockedToPlayer:null}) : a; }); });
        setTab("stud");
      }
    }
  };
  var handleSellListing = function handleSellListing(id) {
    var animal = animals.find(function(a){ return a.id===id; });
    if (!animal) return;
    if (animal.retired) { alert("Retired dogs cannot be listed for sale."); return; }
    var stage = getAgeStage(animal.ageMonths || 0);
    if (stage && stage.label === "Puppy") { alert("Puppies cannot be sold at the livestock market. Use the Holding tab to sell pups."); return; }
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
    if (!animal || animal.retired) return;
    if (confirm('Retire "' + animal.name + '"?\nThey will move to retirement and free up a kennel slot.')) {
      setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{retired:true,retireReason:"Player retired",retiredAt:Date.now()}) : a; }); });
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
    if (a.retired) return false;
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
  return /*#__PURE__*/React.createElement(AnimalsContext.Provider, { value: animals },
  /*#__PURE__*/React.createElement("div", {
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
    style: tabS("openlitter"),
    onClick: function onClick() {
      return setTab("openlitter");
    }
  }, "\uD83D\uDC3E Open Litters", litter.length > 0 ? " (".concat(litter.length, ")") : ""), /*#__PURE__*/React.createElement("button", {
    style: _objectSpread(_objectSpread({}, tabS("whelping")), {}, { opacity: hasWhelpingKennel ? 1 : 0.4 }),
    onClick: function(){ setTab("whelping"); },
    title: hasWhelpingKennel ? "Whelping Kennel" : "Purchase a Whelping Kennel to unlock"
  }, "\uD83C\uDFE5 Whelping", whelpingLitters.length > 0 ? " ("+whelpingLitters.length+"/2)" : " (0/2)"), /*#__PURE__*/React.createElement("button", {
    style: tabS("stud"),
    onClick: function(){ setTab("stud"); }
  }, "\uD83D\uDC3E Stud (", animals.filter(function(a){ return !a.retired && a.isStud && a.sex==="M"; }).length, ")"),
  /*#__PURE__*/React.createElement("button", {
    style: tabS("log"),
    onClick: function onClick() {
      return setTab("log");
    }
  }, "\uD83D\uDCD3 Journal (", log.length, ")"),
    holdingPups.length > 0 && /*#__PURE__*/React.createElement("button", {
      style: { background: tab==="holding"?"#2a1e14":"transparent", border:"1px solid #22c55e", color:"#22c55e",
        borderRadius:6, padding:"5px 14px", cursor:"pointer", fontSize:"0.82rem" },
      onClick: function(){ setTab("holding"); }
    }, "\uD83D\uDC3E Holding (", holdingPups.length, ")")
  , /*#__PURE__*/React.createElement("button", {
      style: tabS("farm"),
      onClick: function(){ setTab("farm"); }
    }, "\uD83C\uDFD8 Farm"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("horses"),
      onClick: function(e){ e.stopPropagation(); setTab("horses"); }
    }, "\uD83D\uDC0E Horses ("+(ownedLivestock||[]).filter(function(a){return a.species==="horse";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("shows"),
      onClick: function(){ setTab("shows"); }
    }, "\uD83C\uDF80 Shows"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("retired"),
      onClick: function(){ setTab("retired"); }
    }, "\uD83C\uDFDB\uFE0F Legacy (", animals.filter(function(a){ return a.retired; }).length, ")")
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
      }, "\uD83C\uDFD7 Facilities")
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
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 } },
        /*#__PURE__*/React.createElement("div", { style: { color: "#8a7055", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em" } },
          "\uD83D\uDC15 " + (activeKennel ? activeKennel.name : "Kennel") + " \u00B7 Dogs"
        ),
        /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: 4 } },
          [["grid","\u229E"],["list","\u2630"]].map(function(pair){
            var v = pair[0], ico = pair[1];
            return /*#__PURE__*/React.createElement("button", {
              key: v, onClick: function(){ setKennelViewMode(v); setKennelListSelected(null); },
              style: { background: kennelViewMode===v?"#3a2810":"transparent", border: "1px solid "+(kennelViewMode===v?"#d4942a":"#4a3a28"),
                color: kennelViewMode===v?"#d4942a":"#8a7055", borderRadius: 4, padding: "2px 7px", cursor: "pointer", fontSize: "0.85rem" }
            }, ico);
          })
        )
      ),
      // Genetic diversity score (3d)
      (function(){
        var kDogs = animals.filter(function(a){ return !a.retired && a.kennelId === (activeKennel ? activeKennel.id : null); });
        if (kDogs.length < 2) return null;
        var avgCOI = kDogs.reduce(function(s,a){ return s + (a.coi||0); }, 0) / kDogs.length;
        avgCOI = Math.round(avgCOI * 10) / 10;
        // Check if all dogs share same sire or dam (warning sign)
        var sireIds = kDogs.map(function(a){ return a.sireId; }).filter(Boolean);
        var uniqueSires = new Set(sireIds).size;
        var tooRelated = sireIds.length >= 3 && uniqueSires === 1;
        var label, col, bg, border;
        if (avgCOI < 6)       { label="High Diversity";     col="#22c55e"; bg="#0f2010"; border="#166534"; }
        else if (avgCOI < 15) { label="Moderate Diversity"; col="#d4942a"; bg="#1a1408"; border="#92400e"; }
        else if (avgCOI < 25) { label="Low Diversity";      col="#f97316"; bg="#2a1008"; border="#c2410c"; }
        else                  { label="Critical Inbreeding"; col="#ef4444"; bg="#2d0808"; border="#991b1b"; }
        return React.createElement("div", {
          style: { display:"flex", alignItems:"center", justifyContent:"space-between",
            background:bg, border:"1px solid "+border, borderRadius:6,
            padding:"6px 10px", marginBottom:10, fontSize:"0.75rem" }
        },
          React.createElement("span", { style:{ color:col, fontWeight:"bold" } },
            "\uD83E\uDDEC Genetic Diversity: " + label),
          React.createElement("div", { style:{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:2 } },
            React.createElement("span", { style:{ color:col, fontWeight:"bold", fontSize:"0.8rem" } },
              "Avg COI: " + avgCOI + "%"),
            tooRelated && React.createElement("span", {
              style:{ color:"#fca5a5", fontSize:"0.65rem" }
            }, "\u26A0\uFE0F All from same sire")
          )
        );
      })(),
      (function(){
        var kennelDogs = animals.filter(function(a){ return !a.retired && a.kennelId === (activeKennel ? activeKennel.id : null); });
        if (kennelDogs.length === 0) {
          return /*#__PURE__*/React.createElement("div", { style: { color: "#4a3a28", fontSize: "0.82rem", padding: "20px 0" } }, "No dogs yet \u2014 use Buy Dogs to add some.");
        }
        var allChecked = kennelDogs.length > 0 && kennelDogs.every(function(a){ return kennelChecked.includes(a.id); });
        var otherKennels = kennels.filter(function(k){ return k.id !== (activeKennel ? activeKennel.id : null); });
        // ── List view ───────────────────────────────────────────────────
        if (kennelViewMode === "list") {
          var sortedListDogs = kennelDogs.slice().sort(function(a,b){
            var dir = kennelListDir === "asc" ? 1 : -1;
            if (kennelListSort === "name") return dir * (a.name||"").localeCompare(b.name||"");
            if (kennelListSort === "breed") return dir * a.breed.localeCompare(b.breed);
            if (kennelListSort === "health") return dir * ((a.healthScore||0) - (b.healthScore||0));
            if (kennelListSort === "perf") return dir * ((a.performanceScore||0) - (b.performanceScore||0));
            if (kennelListSort === "sex") return dir * a.sex.localeCompare(b.sex);
            return 0;
          });
          var selDog = kennelListSelected ? kennelDogs.find(function(a){ return a.id === kennelListSelected; }) : null;
          var colHdr = function(key, label) {
            var active = kennelListSort === key;
            return /*#__PURE__*/React.createElement("th", {
              key: key,
              onClick: function(){ if(active){ setKennelListDir(function(d){ return d==="asc"?"desc":"asc"; }); } else { setKennelListSort(key); setKennelListDir("asc"); } },
              style: { padding: "4px 8px", textAlign: "left", cursor: "pointer", userSelect: "none", whiteSpace: "nowrap",
                color: active?"#d4942a":"#e8d0a8", fontWeight: active?"bold":"normal", fontSize: "0.72rem",
                borderBottom: "1px solid #4a3a28", background: "#3a2e20" }
            }, label + (active ? (kennelListDir==="asc"?" ▲":" ▼") : ""));
          };
          return /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } },
            /*#__PURE__*/React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.78rem" } },
              /*#__PURE__*/React.createElement("thead", null,
                /*#__PURE__*/React.createElement("tr", null,
                  colHdr("name","Name"),
                  colHdr("breed","Breed"),
                  colHdr("sex","Sex"),
                  colHdr("health","\u2764\uFE0F Hlth"),
                  colHdr("perf","\u26A1 Perf"),
                  /*#__PURE__*/React.createElement("th", { style: { padding:"4px 8px", color:"#b09060", fontSize:"0.72rem", borderBottom:"1px solid #4a3a28", background:"#3a2e20" } }, "Age")
                )
              ),
              /*#__PURE__*/React.createElement("tbody", null,
                sortedListDogs.map(function(a){
                  var isSel = kennelListSelected === a.id;
                  var isPreg = !!(a.pregnantUntil && a.pregnantUntil > Date.now());
                  var hs = a.healthScore||0; var ps = a.performanceScore||0;
                  return /*#__PURE__*/React.createElement("tr", { key: a.id,
                    onClick: function(){ setKennelListSelected(isSel ? null : a.id); },
                    style: { background: isSel?"#4a3820":"#352818", cursor: "pointer",
                      borderBottom: "1px solid #2e2218" }
                  },
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px", color:"#f0c878", fontWeight:"bold" } },
                      (a.name||a.breed) + (isPreg?" \uD83E\uDD30":"")
                    ),
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px", color:"#e8d0a8", fontSize:"0.68rem", maxWidth: 200 },
                      title: getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(", ") },
                      a.isMixed
                        ? getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(" · ")
                        : a.breed
                    ),
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px", color: a.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.75rem" } }, a.sex==="M"?"\u2642":"\u2640"),
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px" } },
                      /*#__PURE__*/React.createElement("div", { style: { display:"flex", alignItems:"center", gap:4 } },
                        /*#__PURE__*/React.createElement("div", { style: { width:40, height:5, background:"#3a2e20", borderRadius:2 } },
                          /*#__PURE__*/React.createElement("div", { style: { height:"100%", width:Math.min(100,hs)+"%", background:"#22c55e", borderRadius:2 } })
                        ),
                        /*#__PURE__*/React.createElement("span", { style: { color:"#4ade80", fontSize:"0.68rem" } }, hs)
                      )
                    ),
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px" } },
                      /*#__PURE__*/React.createElement("div", { style: { display:"flex", alignItems:"center", gap:4 } },
                        /*#__PURE__*/React.createElement("div", { style: { width:40, height:5, background:"#3a2e20", borderRadius:2 } },
                          /*#__PURE__*/React.createElement("div", { style: { height:"100%", width:Math.min(100,ps)+"%", background:"#3b82f6", borderRadius:2 } })
                        ),
                        /*#__PURE__*/React.createElement("span", { style: { color:"#60a5fa", fontSize:"0.68rem" } }, ps)
                      )
                    ),
                    /*#__PURE__*/React.createElement("td", { style: { padding:"5px 8px", color:"#b09060", fontSize:"0.72rem" } }, Math.round((a.ageMonths||0)/12*10)/10+"y")
                  );
                })
              )
            ),
            selDog && /*#__PURE__*/React.createElement("div", {
              style: { marginTop: 8, background:"#2e2418", border:"1px solid #c4956a", borderRadius:10, padding:"12px", position:"relative" },
              onClick: function(e){ e.stopPropagation(); }
            },
              /*#__PURE__*/React.createElement("button", {
                onClick: function(){ setKennelListSelected(null); },
                style: { position:"absolute", top:8, right:10, background:"transparent", border:"none",
                  color:"#e8d0a8", fontSize:"1.1rem", cursor:"pointer" }
              }, "\u2715"),
              /*#__PURE__*/React.createElement(Card, { animal: selDog, onSelect: selectAnimal,
                isSelected: (sire&&sire.id===selDog.id)||(dam&&dam.id===selDog.id),
                ineligibleReason: breedingIneligibleReason(selDog),
                onRemove: function(id){ setActionModalId(id); },
                onRename: renameAnimal, fullHeight: false,
                onStud: function(a){ toggleStud(a.id); },
                onSell: function(a){ handleSellListing(a.id); },
                onRetire: function(a){ retireAnimal(a.id); }
              })
            )
          );
        }
        return /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } },
          // ── Bulk action toolbar ──────────────────────────────────────
          /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
            padding: "5px 8px", background: "#1a1410", borderRadius: 6, border: "1px solid #2e2218" } },
            /*#__PURE__*/React.createElement("input", { type: "checkbox", checked: allChecked,
              onChange: function(e){ setKennelChecked(e.target.checked ? kennelDogs.map(function(a){ return a.id; }) : []); },
              style: { accentColor: "#c4956a", width: 14, height: 14, cursor: "pointer" }
            }),
            /*#__PURE__*/React.createElement("span", { style: { color: "#8a7055", fontSize: "0.72rem" } },
              kennelChecked.length > 0 ? kennelChecked.length + " selected" : "Select all"
            ),
            kennelChecked.length > 0 && otherKennels.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null,
              /*#__PURE__*/React.createElement("select", {
                value: kennelMoveTarget,
                onChange: function(e){ setKennelMoveTarget(e.target.value); },
                style: { marginLeft: "auto", background: "#241a10", border: "1px solid #4a3a28",
                  color: "#c4956a", borderRadius: 4, padding: "2px 6px", fontSize: "0.72rem", cursor: "pointer" }
              },
                /*#__PURE__*/React.createElement("option", { value: "" }, "Move to..."),
                otherKennels.map(function(k){
                  var cnt = animals.filter(function(x){ return !x.retired && x.kennelId===k.id; }).length;
                  var cap = (KENNEL_TYPES[k.type]||{capacity:10}).capacity;
                  return /*#__PURE__*/React.createElement("option", { key: k.id, value: String(k.id), disabled: cnt >= cap },
                    k.name + " (" + cnt + "/" + cap + ")" + (cnt >= cap ? " FULL" : "")
                  );
                })
              ),
              /*#__PURE__*/React.createElement("button", {
                onClick: function() {
                  if (!kennelMoveTarget) { alert("Pick a destination kennel first!"); return; }
                  var dest = kennels.find(function(k){ return String(k.id) === String(kennelMoveTarget); });
                  if (!dest) return;
                  var destCap = (KENNEL_TYPES[dest.type]||{capacity:10}).capacity;
                  var destCount = animals.filter(function(x){ return !x.retired && x.kennelId===dest.id; }).length;
                  var toMove = kennelChecked.slice(0, destCap - destCount);
                  if (toMove.length === 0) { alert(dest.name + " is full!"); return; }
                  var skipped = kennelChecked.length - toMove.length;
                  setAnimals(function(prev){ return prev.map(function(x){ return toMove.includes(x.id) ? Object.assign({},x,{kennelId:dest.id}) : x; }); });
                  setKennelChecked([]);
                  setKennelMoveTarget("");
                  if (skipped > 0) alert(toMove.length + " dogs moved. " + skipped + " skipped — " + dest.name + " is now full.");
                },
                style: { background: "#1a3a1a", border: "1px solid #22c55e", color: "#4ade80",
                  borderRadius: 4, padding: "2px 10px", cursor: "pointer", fontSize: "0.72rem" }
              }, "Move")
            )
          ),
          // ── Dog rows ─────────────────────────────────────────────────
          kennelDogs.map(function(a){
            var sz = getCurrentSize(a);
            var checked = kennelChecked.includes(a.id);
            return /*#__PURE__*/React.createElement("div", { key: a.id,
              style: { display: "flex", gap: 10, alignItems: "center", padding: "5px 8px",
                background: checked ? "#2a2010" : "#241a10",
                border: "1px solid " + (checked ? "#c4956a" : "transparent"),
                borderRadius: 6, fontSize: "0.8rem", color: "#c4956a", cursor: "pointer" },
              onClick: function(){ setLitterViewPup(a); }
            },
              /*#__PURE__*/React.createElement("input", { type: "checkbox", checked: checked,
                onChange: function(e){ e.stopPropagation(); setKennelChecked(function(prev){ return e.target.checked ? prev.concat([a.id]) : prev.filter(function(id){ return id !== a.id; }); }); },
                onClick: function(e){ e.stopPropagation(); },
                style: { accentColor: "#c4956a", width: 14, height: 14, cursor: "pointer", flexShrink: 0 }
              }),
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
    style: { display: "flex", flexDirection: "column", height: "calc(100vh - 130px)", overflow: "hidden", maxWidth: 1100 }
  },
  // ── 3-column picker layout ───────────────────────────────────────────
  /*#__PURE__*/React.createElement("div", {
    style: { display: "grid", gridTemplateColumns: "1fr 220px 1fr", gap: 10, flex: 1, overflow: "hidden", minHeight: 0 }
  },

  // ── LEFT: Sire picker ─────────────────────────────────────────────────
  /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flexDirection: "column", background: "#3a2e20", border: "1px solid #4a3a28", borderRadius: 10, overflow: "hidden" }
  },
    // header
    /*#__PURE__*/React.createElement("div", {
      style: { background: "#2e2418", borderBottom: "1px solid #4a3a28", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }
    },
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
        /*#__PURE__*/React.createElement("span", { style: { color: "#d4942a", fontWeight: "bold", fontSize: "0.82rem" } }, "\u2642 Sire"),
        sire && /*#__PURE__*/React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setSire(null); setBreedSireDna(null); },
          style: { background: "transparent", border: "none", color: "#e8d0a8", cursor: "pointer", fontSize: "0.75rem" }
        }, "\u2715 Clear")
      ),
      /*#__PURE__*/React.createElement("input", {
        type: "text", placeholder: "Search name or breed\u2026", value: breedSireSearch,
        onChange: function(e){ setBreedSireSearch(e.target.value); },
        style: { background: "#352818", border: "1px solid #4a3a28", color: "#f0c878", borderRadius: 5,
          padding: "4px 8px", fontSize: "0.78rem", width: "100%", boxSizing: "border-box" }
      }),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: 4 } },
        [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(pair){
          var k = pair[0], lbl = pair[1];
          return /*#__PURE__*/React.createElement("button", {
            key: k, onClick: function(){ setBreedSireSort(k); },
            style: { flex: 1, background: breedSireSort===k?"#4a3820":"transparent", border: "1px solid "+(breedSireSort===k?"#d4942a":"#5a4a30"),
              color: breedSireSort===k?"#d4942a":"#e8d0a8", borderRadius: 4, padding: "2px 0", cursor: "pointer", fontSize: "0.7rem" }
          }, lbl);
        })
      )
    ),
    // list
    /*#__PURE__*/React.createElement("div", { style: { overflowY: "auto", flex: 1, padding: "6px 6px" } },
      (function(){
        var males = animals.filter(function(a){ return !a.retired && a.sex === "M"; });
        var filtered = males.filter(function(a){
          var q = breedSireSearch.toLowerCase();
          return !q || (a.name||"").toLowerCase().includes(q) || a.breed.toLowerCase().includes(q);
        });
        var sorted = filtered.slice().sort(function(a,b){
          if (breedSireSort === "perf") return (b.performanceScore||0) - (a.performanceScore||0);
          if (breedSireSort === "health") return (b.healthScore||0) - (a.healthScore||0);
          return (a.name||"").localeCompare(b.name||"");
        });
        if (sorted.length === 0) return /*#__PURE__*/React.createElement("div", { style: { color: "#5a4a30", fontSize: "0.8rem", textAlign: "center", padding: "20px 0" } }, "No males available");
        return sorted.map(function(a){
          var reason = breedingIneligibleReason(a);
          var isSel = sire && sire.id === a.id;
          var isDna = breedSireDna === a.id;
          var hs = a.healthScore || 0;
          var ps = a.performanceScore || 0;
          return /*#__PURE__*/React.createElement("div", { key: a.id,
            title: reason || "",
            style: { background: isSel ? "#5a3e10" : "#352818", border: "2px solid "+(isSel?"#f0a030":reason?"#6a3a28":"#3a2e20"),
              borderRadius: 6, padding: "6px 8px", marginBottom: 4, cursor: reason?"not-allowed":"pointer",
              opacity: reason ? 0.55 : 1, boxShadow: isSel?"0 0 8px rgba(240,160,48,0.4)":"none" }
          },
            /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 },
              onClick: function(e){ e.stopPropagation(); selectAnimal(a); setBreedSireDna(null); }
            },
              /*#__PURE__*/React.createElement("span", { style: { fontSize: "1.1rem" } }, "\uD83D\uDC15"),
              /*#__PURE__*/React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } },
                  /*#__PURE__*/React.createElement("span", { style: { color: "#f0c878", fontWeight: "bold", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, a.name||a.breed),
                  reason && /*#__PURE__*/React.createElement("span", { title: reason, style: { fontSize: "0.7rem" } }, "\u26A0\uFE0F")
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", fontSize: "0.68rem", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }, title: a.isMixed ? getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(", ") : a.breed }, (a.isMixed ? getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(" · ") : a.breed) + " \u00B7 " + Math.round((a.ageMonths||0)/12*10)/10 + "y"),
                /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 3 } },
                  /*#__PURE__*/React.createElement("div", { style: { flex: 1 } },
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.6rem", color: "#60a5fa", marginBottom: 1 } }, "\u26A1 "+ps),
                    /*#__PURE__*/React.createElement("div", { style: { height: 4, background: "#3a2e20", borderRadius: 2 } },
                      /*#__PURE__*/React.createElement("div", { style: { height: "100%", width: Math.min(100,ps)+"%", background: "#3b82f6", borderRadius: 2 } })
                    )
                  ),
                  /*#__PURE__*/React.createElement("div", { style: { flex: 1 } },
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.6rem", color: "#4ade80", marginBottom: 1 } }, "\u2764\uFE0F "+hs),
                    /*#__PURE__*/React.createElement("div", { style: { height: 4, background: "#3a2e20", borderRadius: 2 } },
                      /*#__PURE__*/React.createElement("div", { style: { height: "100%", width: Math.min(100,hs)+"%", background: "#22c55e", borderRadius: 2 } })
                    )
                  )
                )
              ),
              /*#__PURE__*/React.createElement("button", {
                onClick: function(e){ e.stopPropagation(); setBreedSireDna(isDna ? null : a.id); setBreedDamDna(null); },
                style: { background: isDna?"#2a1e3a":"transparent", border: "1px solid "+(isDna?"#7c3aed":"#5a4a30"),
                  color: isDna?"#a78bfa":"#b09060", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: "0.65rem", flexShrink: 0 }
              }, "\uD83E\uDDEC")
            ),
            // inline DNA panel
            isDna && /*#__PURE__*/React.createElement("div", {
              style: { marginTop: 6, background: "#3a2e20", border: "1px solid #3a2a4a", borderRadius: 6, padding: "8px 10px", fontSize: "0.72rem" }
            },
              /*#__PURE__*/React.createElement("div", { style: { color: "#a78bfa", fontWeight: "bold", marginBottom: 6 } }, "\uD83E\uDDEC DNA \u2014 " + (a.name||a.breed)),
              a.genome && /*#__PURE__*/React.createElement(React.Fragment, null,
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", marginBottom: 4 } }, "Coat: ",
                  Object.entries(a.genome.coat||{}).map(function(e){ return e[0]+"("+e[1].join("")+")"; }).join(" ")
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", marginBottom: 4 } }, "Health: ",
                  Object.entries(a.genome.health||{}).filter(function(e){ return ["MDR1","PRA","DM","vWD"].includes(e[0]); }).map(function(e){
                    var alleles = e[1]; var aff = alleles[0]==="n"&&alleles[1]==="n"; var car = !aff&&(alleles[0]==="n"||alleles[1]==="n");
                    return /*#__PURE__*/React.createElement("span", { key: e[0], style: { color: aff?"#ef4444":car?"#f97316":"#4ade80", marginRight: 4 } }, e[0]+(aff?" AFFECTED":car?" Carrier":" Clear"));
                  })
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8" } }, "COI: ",
                  /*#__PURE__*/React.createElement("span", { style: { color: (a.coi||0)>=25?"#ef4444":(a.coi||0)>=12?"#f97316":"#4ade80" } }, (a.coi||0)+"%")
                )
              )
            )
          );
        });
      })()
    )
  ),

  // ── CENTER: COI + breed controls ──────────────────────────────────────
  /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flexDirection: "column", gap: 8, padding: "8px 4px", overflowY: "auto" }
  },
    // Selected pair summary
    /*#__PURE__*/React.createElement("div", {
      style: { background: "#2e2418", border: "1px solid #4a3a28", borderRadius: 8, padding: "10px 8px", textAlign: "center" }
    },
      /*#__PURE__*/React.createElement("div", { style: { color: "#d4942a", fontSize: "0.75rem", fontWeight: "bold", marginBottom: 4 } }, "\u2642 Sire"),
      /*#__PURE__*/React.createElement("div", { style: { color: sire?"#f0c878":"#8a7a60", fontSize: "0.78rem", marginBottom: 8, fontStyle: sire?"normal":"italic" } }, sire ? (sire.name||sire.breed) : "— none —"),
      /*#__PURE__*/React.createElement("div", { style: { color: "#c4956a", fontSize: "0.75rem", fontWeight: "bold", marginBottom: 4 } }, "\u2640 Dam"),
      /*#__PURE__*/React.createElement("div", { style: { color: dam?"#f0c878":"#8a7a60", fontSize: "0.78rem", fontStyle: dam?"normal":"italic" } }, dam ? (dam.name||dam.breed) : "— none —")
    ),
    // COI readout
    sire && dam && sire.sex !== dam.sex && sire.id !== dam.id && /*#__PURE__*/React.createElement("div", {
      style: { background: (function(){ var coi=calcCOI(sire.id,dam.id,animals); return coi>=25?"#2a0a0a":coi>=12.5?"#2a1a08":coi>=6?"#1a1a08":"#0a1a10"; })(),
        border: "1px solid "+(function(){ var coi=calcCOI(sire.id,dam.id,animals); return coi>=25?"#ef4444":coi>=12.5?"#f97316":coi>=6?"#eab308":"#22c55e"; })(),
        borderRadius: 8, padding: "8px", textAlign: "center", fontSize: "0.75rem" }
    },
      /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", marginBottom: 2 } }, "Projected COI"),
      /*#__PURE__*/React.createElement("div", { style: { fontWeight: "bold", fontSize: "1rem",
        color: (function(){ var coi=calcCOI(sire.id,dam.id,animals); return coi>=25?"#ef4444":coi>=12.5?"#f97316":coi>=6?"#eab308":"#22c55e"; })()
      } }, (function(){ var coi=calcCOI(sire.id,dam.id,animals); return coi+"%"; })()),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.7rem", color: "#e8d0a8", marginTop: 2 } },
        (function(){ var coi=calcCOI(sire.id,dam.id,animals); return coi>=25?"\u26A0\uFE0F Extreme":coi>=12.5?"\u26A0\uFE0F High":coi>=6?"\u26A1 Elevated":"\u2705 Safe"; })()
      )
    ),
    // Merle warning
    sire && dam && ((sire.genome&&sire.genome.coat&&sire.genome.coat.M&&(sire.genome.coat.M[0]==="M"||sire.genome.coat.M[1]==="M")) &&
      (dam.genome&&dam.genome.coat&&dam.genome.coat.M&&(dam.genome.coat.M[0]==="M"||dam.genome.coat.M[1]==="M"))) &&
      /*#__PURE__*/React.createElement("div", { style: { background: "#481808", border: "1px solid #ef4444", borderRadius: 6, padding: "6px 8px", fontSize: "0.7rem", color: "#fca5a5", textAlign: "center" } },
        "\u26A0\uFE0F MERLE \xD7 MERLE\n25% double merle risk!"
      ),
    // Health warnings block
    (function(){
      if (!sire || !dam) return null;
      var sireReason = breedingIneligibleReason(sire);
      var damReason = breedingIneligibleReason(dam);
      var sameSex = sire.sex === dam.sex;
      var sameAnimal = sire.id === dam.id;
      var warnings = [];
      if (sameAnimal) warnings.push("\u26A0\uFE0F Same animal");
      else if (sameSex) warnings.push("\u26A0\uFE0F Same sex");
      if (sireReason) warnings.push("\u26A0\uFE0F Sire: "+sireReason);
      if (damReason) warnings.push("\u26A0\uFE0F Dam: "+damReason);
      if (sire.genome && dam.genome) {
        var REC = ["MDR1","PRA","DM","vWD"];
        var RN = { MDR1:"MDR1",PRA:"PRA",DM:"DM",vWD:"vWD" };
        REC.forEach(function(loc){
          var sh=sire.genome.health[loc]; var dh=dam.genome.health[loc];
          if (!sh||!dh) return;
          var sA=sh[0]==="n"&&sh[1]==="n"; var dA=dh[0]==="n"&&dh[1]==="n";
          var sC=!sA&&(sh[0]==="n"||sh[1]==="n"); var dC=!dA&&(dh[0]==="n"||dh[1]==="n");
          if (sA&&dA) warnings.push("\uD83D\uDD34 Both AFFECTED "+RN[loc]);
          else if ((sA&&dC)||(sC&&dA)) warnings.push("\uD83D\uDD34 50% affected "+RN[loc]);
          else if (sC&&dC) warnings.push("\uD83D\uDFE1 25% affected "+RN[loc]);
        });
        ["HipQ","EyeQ","HeartQ","JointQ"].forEach(function(loc){
          var sh=sire.genome.health[loc]; var dh=dam.genome.health[loc];
          if (!sh||!dh) return;
          if (sh[0]==="g"&&sh[1]==="g"&&dh[0]==="g"&&dh[1]==="g") warnings.push("\uD83D\uDD34 Both poor "+loc);
        });
      }
      if (warnings.length===0) return null;
      var crit = warnings.some(function(w){ return w.startsWith("\uD83D\uDD34"); });
      return /*#__PURE__*/React.createElement("div", {
        style: { background: crit?"#2d0a00":"#2d1a00", border: "1px solid "+(crit?"#ef4444":"#d4860a"),
          borderRadius: 6, padding: "6px 8px", fontSize: "0.7rem", color: crit?"#fca5a5":"#f0c040" }
      }, warnings.map(function(w,i){ return /*#__PURE__*/React.createElement("div", {key:i}, w); }));
    })(),
    // BREED button
    /*#__PURE__*/React.createElement("button", {
      onClick: doBreed,
      disabled: !sire || !dam || !!(sire && breedingIneligibleReason(sire)) || !!(dam && breedingIneligibleReason(dam)) || (sire && dam && sire.id === dam.id) || (sire && dam && sire.sex === dam.sex),
      style: { background: sire&&dam?"linear-gradient(135deg,#3a2810,#362210)":"#443828",
        border: "2px solid "+(sire&&dam?"#d4942a":"#5a4a30"), color: sire&&dam?"#f0e6d3":"#b09060",
        borderRadius: 8, padding: "10px 6px", cursor: (sire&&dam)?"pointer":"not-allowed",
        fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "0.03em", width: "100%", textAlign: "center" }
    }, sire&&dam ? "\uD83E\uDDEC BREED" : "Pick\n\u2642 & \u2640"),
    // COI warning
    (function(){
      if (!sire||!dam) return null;
      var coi = calcCOI(sire.id,dam.id,animals);
      if (coi < 12.5) return null;
      var msg = coi>=50?"\uD83D\uDCA7 Extreme \u2014 litter \u22122\u20133":coi>=25?"\uD83D\uDCA7 High \u2014 litter \u22121\u20132":"\uD83D\uDCA7 Elevated \u2014 may \u22121 pup";
      return /*#__PURE__*/React.createElement("div", { style: { background:"#2a1008",border:"1px solid #f97316",borderRadius:6,padding:"5px 8px",fontSize:"0.7rem",color:"#fdba74",textAlign:"center" } }, msg);
    })(),
    // DEV force breed
    sire&&dam&&sire.sex!==dam.sex&&sire.id!==dam.id && /*#__PURE__*/React.createElement("button", {
      onClick: doBreed, title: "DEV MODE: Bypasses heat cycle",
      style: { width:"100%", background:"#1a0a2e", border:"2px dashed #7c3aed", color:"#a78bfa",
        borderRadius:8, padding:"6px", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, "\uD83E\uDDEA DEV\nForce Breed"),
    // DEV +1 day
    /*#__PURE__*/React.createElement("button", {
      onClick: function() {
        var oneDayMs = 24 * 60 * 60 * 1000;
        setAnimals(function(prev) {
          return prev.map(function(a) {
            if (a.retired) return a;
            var newAge = (a.ageMonths||0) + 1;
            var maxAge = a.lifespan || 144;
            if (newAge >= maxAge) return Object.assign({}, a, { ageMonths: newAge, retired: true, retireReason: "End of natural life", retiredAt: Date.now() });
            var sizeLockUpdate = {};
            if (!a.sizeLocked) {
              var mt = ({ XS:10, S:12, M:15, L:18, XL:24 }[a.size||"M"] || 15);
              if ((a.ageMonths||0) < mt && newAge >= mt) {
                var fs = getCurrentSize(Object.assign({}, a, { ageMonths: newAge }));
                sizeLockUpdate = { adultWeight: fs.adultW, adultHeight: fs.adultH, sizeLocked: true };
              }
            }
            return Object.assign({}, a, sizeLockUpdate, { ageMonths: newAge });
          });
        });
        setWhelpingLitters(function(prev) {
          return prev.map(function(lit) {
            return Object.assign({}, lit, { bornDate: lit.bornDate - oneDayMs });
          });
        });
        var key = "breedingSim_lastTick";
        var current = parseInt(localStorage.getItem(key) || "0");
        localStorage.setItem(key, (current > 0 ? current - oneDayMs : Date.now() - oneDayMs).toString());
      },
      title: "DEV MODE: Forces one game day to pass",
      style: { width:"100%", background:"#0a1a0a", border:"2px dashed #22c55e", color:"#4ade80",
        borderRadius:8, padding:"6px", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, "\uD83D\uDCC5 DEV\n+1 Day")
  ),

  // ── RIGHT: Dam picker ─────────────────────────────────────────────────
  /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flexDirection: "column", background: "#3a2e20", border: "1px solid #4a3a28", borderRadius: 10, overflow: "hidden" }
  },
    // header
    /*#__PURE__*/React.createElement("div", {
      style: { background: "#2e2418", borderBottom: "1px solid #4a3a28", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }
    },
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
        /*#__PURE__*/React.createElement("span", { style: { color: "#f0c878", fontWeight: "bold", fontSize: "0.82rem" } }, "\u2640 Dam"),
        dam && /*#__PURE__*/React.createElement("button", {
          onClick: function(e){ e.stopPropagation(); setDam(null); setBreedDamDna(null); },
          style: { background: "transparent", border: "none", color: "#e8d0a8", cursor: "pointer", fontSize: "0.75rem" }
        }, "\u2715 Clear")
      ),
      /*#__PURE__*/React.createElement("input", {
        type: "text", placeholder: "Search name or breed\u2026", value: breedDamSearch,
        onChange: function(e){ setBreedDamSearch(e.target.value); },
        style: { background: "#352818", border: "1px solid #4a3a28", color: "#f0c878", borderRadius: 5,
          padding: "4px 8px", fontSize: "0.78rem", width: "100%", boxSizing: "border-box" }
      }),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: 4 } },
        [["perf","\u26A1 Perf"],["health","\u2764\uFE0F Health"],["name","A-Z"]].map(function(pair){
          var k = pair[0], lbl = pair[1];
          return /*#__PURE__*/React.createElement("button", {
            key: k, onClick: function(){ setBreedDamSort(k); },
            style: { flex: 1, background: breedDamSort===k?"#4a3820":"transparent", border: "1px solid "+(breedDamSort===k?"#d4942a":"#5a4a30"),
              color: breedDamSort===k?"#d4942a":"#e8d0a8", borderRadius: 4, padding: "2px 0", cursor: "pointer", fontSize: "0.7rem" }
          }, lbl);
        })
      )
    ),
    // list
    /*#__PURE__*/React.createElement("div", { style: { overflowY: "auto", flex: 1, padding: "6px 6px" } },
      (function(){
        var females = animals.filter(function(a){ return !a.retired && a.sex === "F"; });
        var filtered = females.filter(function(a){
          var q = breedDamSearch.toLowerCase();
          return !q || (a.name||"").toLowerCase().includes(q) || a.breed.toLowerCase().includes(q);
        });
        var sorted = filtered.slice().sort(function(a,b){
          if (breedDamSort === "perf") return (b.performanceScore||0) - (a.performanceScore||0);
          if (breedDamSort === "health") return (b.healthScore||0) - (a.healthScore||0);
          return (a.name||"").localeCompare(b.name||"");
        });
        if (sorted.length === 0) return /*#__PURE__*/React.createElement("div", { style: { color: "#5a4a30", fontSize: "0.8rem", textAlign: "center", padding: "20px 0" } }, "No females available");
        return sorted.map(function(a){
          var reason = breedingIneligibleReason(a);
          var isSel = dam && dam.id === a.id;
          var isDna = breedDamDna === a.id;
          var hs = a.healthScore || 0;
          var ps = a.performanceScore || 0;
          var isPreg = !!(a.pregnantUntil && a.pregnantUntil > Date.now());
          return /*#__PURE__*/React.createElement("div", { key: a.id,
            title: reason || "",
            style: { background: isSel ? "#5a3e10" : "#352818", border: "2px solid "+(isSel?"#f0a030":reason?"#6a3a28":"#3a2e20"),
              borderRadius: 6, padding: "6px 8px", marginBottom: 4, cursor: reason?"not-allowed":"pointer",
              opacity: reason ? 0.55 : 1, boxShadow: isSel?"0 0 8px rgba(240,160,48,0.4)":"none" }
          },
            /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 },
              onClick: function(e){ e.stopPropagation(); selectAnimal(a); setBreedDamDna(null); }
            },
              /*#__PURE__*/React.createElement("span", { style: { fontSize: "1.1rem" } }, "\uD83D\uDC29"),
              /*#__PURE__*/React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                /*#__PURE__*/React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } },
                  /*#__PURE__*/React.createElement("span", { style: { color: "#f0c878", fontWeight: "bold", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, a.name||a.breed),
                  reason && /*#__PURE__*/React.createElement("span", { title: reason, style: { fontSize: "0.7rem" } }, "\u26A0\uFE0F"),
                  isPreg && /*#__PURE__*/React.createElement("span", { title: "Pregnant", style: { fontSize: "0.7rem" } }, "\uD83E\uDD30")
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", fontSize: "0.68rem", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }, title: a.isMixed ? getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(", ") : a.breed }, (a.isMixed ? getBreedPctList(a, animals).map(function(x){ return x.breed+" "+x.pct+"%"; }).join(" · ") : a.breed) + " \u00B7 " + Math.round((a.ageMonths||0)/12*10)/10 + "y"),
                /*#__PURE__*/React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 3 } },
                  /*#__PURE__*/React.createElement("div", { style: { flex: 1 } },
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.6rem", color: "#60a5fa", marginBottom: 1 } }, "\u26A1 "+ps),
                    /*#__PURE__*/React.createElement("div", { style: { height: 4, background: "#3a2e20", borderRadius: 2 } },
                      /*#__PURE__*/React.createElement("div", { style: { height: "100%", width: Math.min(100,ps)+"%", background: "#3b82f6", borderRadius: 2 } })
                    )
                  ),
                  /*#__PURE__*/React.createElement("div", { style: { flex: 1 } },
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.6rem", color: "#4ade80", marginBottom: 1 } }, "\u2764\uFE0F "+hs),
                    /*#__PURE__*/React.createElement("div", { style: { height: 4, background: "#3a2e20", borderRadius: 2 } },
                      /*#__PURE__*/React.createElement("div", { style: { height: "100%", width: Math.min(100,hs)+"%", background: "#22c55e", borderRadius: 2 } })
                    )
                  )
                )
              ),
              /*#__PURE__*/React.createElement("button", {
                onClick: function(e){ e.stopPropagation(); setBreedDamDna(isDna ? null : a.id); setBreedSireDna(null); },
                style: { background: isDna?"#2a1e3a":"transparent", border: "1px solid "+(isDna?"#7c3aed":"#5a4a30"),
                  color: isDna?"#a78bfa":"#b09060", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: "0.65rem", flexShrink: 0 }
              }, "\uD83E\uDDEC")
            ),
            // inline DNA panel
            isDna && /*#__PURE__*/React.createElement("div", {
              style: { marginTop: 6, background: "#3a2e20", border: "1px solid #3a2a4a", borderRadius: 6, padding: "8px 10px", fontSize: "0.72rem" }
            },
              /*#__PURE__*/React.createElement("div", { style: { color: "#a78bfa", fontWeight: "bold", marginBottom: 6 } }, "\uD83E\uDDEC DNA \u2014 " + (a.name||a.breed)),
              a.genome && /*#__PURE__*/React.createElement(React.Fragment, null,
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", marginBottom: 4 } }, "Coat: ",
                  Object.entries(a.genome.coat||{}).map(function(e){ return e[0]+"("+e[1].join("")+")"; }).join(" ")
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8", marginBottom: 4 } }, "Health: ",
                  Object.entries(a.genome.health||{}).filter(function(e){ return ["MDR1","PRA","DM","vWD"].includes(e[0]); }).map(function(e){
                    var alleles = e[1]; var aff = alleles[0]==="n"&&alleles[1]==="n"; var car = !aff&&(alleles[0]==="n"||alleles[1]==="n");
                    return /*#__PURE__*/React.createElement("span", { key: e[0], style: { color: aff?"#ef4444":car?"#f97316":"#4ade80", marginRight: 4 } }, e[0]+(aff?" AFFECTED":car?" Carrier":" Clear"));
                  })
                ),
                /*#__PURE__*/React.createElement("div", { style: { color: "#e8d0a8" } }, "COI: ",
                  /*#__PURE__*/React.createElement("span", { style: { color: (a.coi||0)>=25?"#ef4444":(a.coi||0)>=12?"#f97316":"#4ade80" } }, (a.coi||0)+"%")
                )
              )
            )
          );
        });
      })()
    )
  )
  )), tab === "openlitter" && /*#__PURE__*/React.createElement("div", { style: { position: "relative", overflowY: "auto", maxHeight: "calc(100vh - 130px)" } },
    litter.length === 0
      ? /*#__PURE__*/React.createElement("div", { style: { textAlign:"center", color:"#6b5038", padding:"60px 0" } },
          /*#__PURE__*/React.createElement("div", { style:{ fontSize:"2rem", marginBottom:10 } }, "\uD83D\uDC3E"),
          /*#__PURE__*/React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.85rem" } }, "No open litters \u2014 go breed some dogs!"),
          /*#__PURE__*/React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.75rem", marginTop:6 } }, "Open litters allow you to keep 1 pup. Build a Whelping Kennel for up to 2.")
        )
      : /*#__PURE__*/React.createElement(React.Fragment, null,
          /*#__PURE__*/React.createElement("div", { style:{ color:"#c4956a", fontSize:"0.78rem", padding:"6px 2px 10px", fontStyle:"italic" } },
            "Open litters \u2014 select 1 pup to keep, the rest will be rehomed."
          ),
          litter.length > 0 && /*#__PURE__*/React.createElement("div", {
            style: { background:"#1a1410", border:"1px solid #d4860a", borderRadius:8, padding:"10px 14px", marginBottom:10 }
          },
            /*#__PURE__*/React.createElement("div", { style:{ color:"#f0c040", fontWeight:"bold", fontSize:"0.82rem", marginBottom:6 } },
              "\uD83D\uDC3E ", litter[0].sireBreed, " \xD7 ", litter[0].damBreed, " \u00B7 ", litter.length, " pups \u00B7 pick 1 to keep"
            ),
            litter.map(function(pup){
              var sel = litterSelected.includes(pup.id);
              var isEditing = editingPupId === pup.id;
              return /*#__PURE__*/React.createElement("div", { key: pup.id, style:{ marginBottom:3 } },
                /*#__PURE__*/React.createElement("div", {
                  style: { display:"flex", alignItems:"center", gap:8, padding:"5px 8px",
                    background: sel ? "#0a2a15" : "#241a10", borderRadius:6,
                    border: "1px solid " + (sel ? "#22c55e" : "#2e2218"), cursor:"pointer" },
                  onClick: function(){ toggleLitterSelect(pup.id); }
                },
                  /*#__PURE__*/React.createElement("span", { style:{ color: sel?"#22c55e":"#c4956a", fontWeight:"bold", fontSize:"0.8rem", minWidth:100 } }, pup.name),
                  /*#__PURE__*/React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, pup.breed),
                  /*#__PURE__*/React.createElement("span", { style:{ color: pup.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.72rem" } }, pup.sex==="M"?"\u2642":"\u2640"),
                  /*#__PURE__*/React.createElement("button", {
                    onClick: function(e){ e.stopPropagation(); setEditingPupId(isEditing ? null : pup.id); },
                    style:{ background:"transparent", border:"none", color:"#6b5038", fontSize:"0.7rem",
                      cursor:"pointer", padding:"0 4px", marginLeft:"auto" }
                  }, "\u270F\uFE0F"),
                  /*#__PURE__*/React.createElement("button", {
                    onClick: function(e){ e.stopPropagation(); setLitterViewPup(pup); },
                    style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:3,
                      fontSize:"0.62rem", cursor:"pointer", padding:"1px 5px" }
                  }, "Card"),
                  /*#__PURE__*/React.createElement("div", {
                    style: { background: sel?"#22c55e":"#4a3a28", color: sel?"#000":"#8a7055", borderRadius:4, padding:"2px 8px", fontSize:"0.7rem", fontWeight:"bold", flexShrink:0 }
                  }, sel ? "\u2713 Keep" : "Select")
                ),
                isEditing && /*#__PURE__*/React.createElement(PupNameEditor, {
                  pup: pup,
                  onSave: function(n){ renameLitterPup(pup.id, n); },
                  onClose: function(){ setEditingPupId(null); }
                })
              );
            }),
            /*#__PURE__*/React.createElement("button", {
              onClick: finalizeLitter,
              style: { marginTop:8, width:"100%", background:"#0a2a15", border:"2px solid #22c55e", color:"#22c55e", borderRadius:8, padding:"8px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
            }, "\u2705 Keep ", litterSelected.length, " \u2014 Rehome rest (", litter.length-litterSelected.length, ")")
          ),
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
  tab === "whelping" && /*#__PURE__*/React.createElement("div", { style:{ overflowY:"auto", maxHeight:"calc(100vh - 130px)" } },
    !hasWhelpingKennel
      ? /*#__PURE__*/React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"40px 20px" } },
          /*#__PURE__*/React.createElement("div", { style:{ fontSize:"2rem", marginBottom:12 } }, "\uD83C\uDFE5"),
          /*#__PURE__*/React.createElement("div", { style:{ color:"#b09070", fontWeight:"bold", fontSize:"0.95rem", marginBottom:8 } }, "Whelping Kennel not built"),
          /*#__PURE__*/React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.8rem" } }, "Purchase it from the \uD83C\uDFD7 Facilities menu.")
        )
      : whelpingLitters.length === 0
        ? /*#__PURE__*/React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"60px 0" } },
            /*#__PURE__*/React.createElement("div", { style:{ fontSize:"2rem", marginBottom:10 } }, "\uD83C\uDFE5"),
            /*#__PURE__*/React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.85rem" } }, "No litters in the Whelping Kennel."),
            /*#__PURE__*/React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.75rem", marginTop:6 } }, "Breed a pair \u2014 if slots are open they\u2019ll auto-route here.")
          )
        : /*#__PURE__*/React.createElement(React.Fragment, null,
            /*#__PURE__*/React.createElement("div", { style:{ color:"#a78bfa", fontSize:"0.78rem", padding:"6px 2px 10px", fontStyle:"italic" } },
              "Whelping Kennel \u2014 select up to 2 pups per litter. Wean after 3 days."
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
                  var whKey = lit.litterId + "_" + pup.id;
                  var isEditingWH = editingWHKey === whKey;
                  return /*#__PURE__*/React.createElement("div", { key: pup.id, style:{ marginBottom:3 } },
                    /*#__PURE__*/React.createElement("div", {
                      style: { display:"flex", alignItems:"center", gap:8, padding:"5px 8px",
                        background: sel ? "#1a0a2e" : "#241a10", borderRadius:6,
                        border: "1px solid " + (sel ? "#7c3aed" : "#2e2218"), cursor:"pointer" },
                      onClick: function(){ toggleWhelpSelect(lit.litterId, pup.id); }
                    },
                      /*#__PURE__*/React.createElement("span", { style:{ color: sel?"#a78bfa":"#c4956a", fontWeight:"bold", fontSize:"0.8rem", minWidth:100 } }, pup.name),
                      /*#__PURE__*/React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem" } }, pup.breed),
                      /*#__PURE__*/React.createElement("span", { style:{ color: pup.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.72rem" } }, pup.sex==="M"?"\u2642":"\u2640"),
                      /*#__PURE__*/React.createElement("button", {
                        onClick: function(e){ e.stopPropagation(); setEditingWHKey(isEditingWH ? null : whKey); },
                        style:{ background:"transparent", border:"none", color:"#6b5038", fontSize:"0.7rem",
                          cursor:"pointer", padding:"0 4px", marginLeft:"auto" }
                      }, "\u270F\uFE0F"),
                      /*#__PURE__*/React.createElement("button", {
                        onClick: function(e){ e.stopPropagation(); setLitterViewPup(pup); },
                        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:3,
                          fontSize:"0.62rem", cursor:"pointer", padding:"1px 5px" }
                      }, "Card"),
                      /*#__PURE__*/React.createElement("div", {
                        style: { background: sel?"#7c3aed":"#4a3a28", color: sel?"#fff":"#8a7055", borderRadius:4, padding:"2px 8px", fontSize:"0.7rem", fontWeight:"bold", flexShrink:0 }
                      }, sel ? "\u2713 Keep" : "Select")
                    ),
                    isEditingWH && /*#__PURE__*/React.createElement(PupNameEditor, {
                      pup: pup,
                      onSave: function(n){ renameWhelpingPup(lit.litterId, pup.id, n); },
                      onClose: function(){ setEditingWHKey(null); }
                    })
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
                  e.critFlags > 0 && /*#__PURE__*/React.createElement("span", { style: { color:"#ef4444", fontSize:"0.8rem" } }, "\uD83D\uDEA8 " + e.critFlags + " critical health flag" + (e.critFlags!==1?"s":"")),
                  e.stillborn > 0 && /*#__PURE__*/React.createElement("span", { style: { color:"#94a3b8", fontSize:"0.8rem" } }, "\uD83D\uDCA7 1 stillborn (high COI)")
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
  tab === "retired" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"auto" }
  }, /*#__PURE__*/React.createElement(RetiredView, {
    animals: animals.filter(function(a){ return a.retired; }),
    onClose: function(){ setTab("kennel"); }
  })),
  tab === "shows" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#1a140e", zIndex:50, overflow:"auto", padding:12 }
  }, /*#__PURE__*/React.createElement(ShowsView, {
    animals: animals.filter(function(a){ return !a.retired; }),
    money: money,
    onMoneyChange: setMoney,
    onAnimalUpdate: function(updated) {
      setAnimals(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry){ setLog(function(lg){ return [entry].concat(_toConsumableArray(lg)); }); },
    gameStartDate: gameStartDate,
    lastShowDates: lastShowDates || {},
    onShowDatesUpdate: setLastShowDates,
    onClose: function(){ setTab("kennel"); }
  })),
  tab === "horses" && /*#__PURE__*/React.createElement(HorsesView, {
    horses: (ownedLivestock||[]).filter(function(a){ return a.species==="horse"; }),
    money: money,
    lastShowDates: horseShowDates,
    onRename: function(horse, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===horse.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(horse){
      var sellPrice = Math.round((horse.price||500)*0.6);
      if (confirm("Sell "+horse.name+" ("+horse.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==horse.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC0E Sold "+horse.name+" ("+horse.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    onShowsOpen: function(){ setTab("horseShows"); },
    onBreed: function(sireId, damId){
      var horses = (ownedLivestock||[]).filter(function(a){ return a.species==="horse"; });
      var sire = horses.find(function(h){ return h.id===sireId; });
      var dam  = horses.find(function(h){ return h.id===damId;  });
      if (!sire || !dam) return;
      var newFoalCount = foalCount + 1;
      setFoalCount(newFoalCount);
      var foal = createFoal(sire, dam, newFoalCount);
      var dueDate = Date.now() + (11 * 24 * 60 * 60 * 1000);
      setPendingFoals(function(prev){ return prev.concat([{ foal:foal, dueDate:dueDate, sireId:sireId, damId:damId }]); });
      // Mark mare as pregnant
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"🤝 Bred "+sire.name+" × "+dam.name+" — foal due in 11 days",
        date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
    },
    onClose: function(){ setTab("kennel"); },
    onToggleStud: function(horse, forceOn) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== horse.id) return a;
        var nowStud = forceOn !== undefined ? forceOn : !a.isStud;
        return Object.assign({}, a, { isStud: nowStud, studFee: nowStud ? (a.studFee||500) : null });
      }); });
    },
    onUpdateStudFee: function(horse, fee) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id === horse.id ? Object.assign({}, a, { studFee: fee }) : a;
      }); });
    } 
  }),
  tab === "horseShows" && /*#__PURE__*/React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#0a1008", zIndex:50, overflow:"auto", padding:14 }
  }, /*#__PURE__*/React.createElement(HorseShowsView, {
    horses: (ownedLivestock||[]).filter(function(a){ return a.species==="horse"; }),
    money: money,
    onMoneyChange: setMoney,
    onHorseUpdate: function(updated){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry){ setLog(function(lg){ return [entry].concat(_toConsumableArray(lg)); }); },
    lastShowDates: horseShowDates,
    onShowDatesUpdate: setHorseShowDates,
    onClose: function(){ setTab("horses"); }
  })),
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
            setAnimals(function(p){ 
  if (p.some(function(a){ return a.id===pendingBoughtDog.id; })) return p;
  return [].concat(_toConsumableArray(p), [pendingBoughtDog]); 
});
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
    facilities: Object.assign({}, facilitiesOwned, hasWhelpingKennel ? { whelping_kennel: { tier: 0 } } : {}),
    onBuy: function(key, cost){
      if (key === "whelping_kennel") {
        setMoney(function(m){ return m-cost; });
        setHasWhelpingKennel(true);
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"Built: Whelping Kennel", amount:-cost, date:new Date().toLocaleString() }].concat(lg); });
        return;
      }
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
        var finalAnimal = Object.assign({},animalWithIncome,{purchasePrice:animal.price||0});
        if (species==="horse" && typeof normalizeHorse === "function") {
          var existingHorseNames = (ownedLivestock||[]).filter(function(a){ return a.species==="horse"; }).map(function(a){ return a.name; }).filter(Boolean);
          finalAnimal = normalizeHorse(finalAnimal, existingHorseNames);
        }
        setOwnedLivestock(function(prev){ return prev.concat([finalAnimal]); });
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
  ))); // close LivestockMarket children + outer div + AnimalsContext.Provider
}

// ── LIVESTOCK MARKET ─────────────────────────────────────────


function Facilities(_ref) {
  var onClose=_ref.onClose, money=_ref.money, facilities=_ref.facilities,
      onBuy=_ref.onBuy, onUpgrade=_ref.onUpgrade;

  var _fa=_slicedToArray(useState(null),2),selected=_fa[0],setSelected=_fa[1];
  var _dragF = useDrag(), dragHandlePropsF = _dragF.dragHandleProps, panelStyleF = _dragF.panelStyle;

  var keys = Object.keys(FACILITIES);

  return /*#__PURE__*/React.createElement("div",{
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.88)",
      zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}},
    /*#__PURE__*/React.createElement("div",{
      style:Object.assign({background:"#0a0f1e",border:"1px solid #4a3a28",borderRadius:14,
        width:"min(860px,95vw)",maxHeight:"88vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}, panelStyleF)},

      // Header — drag handle
      /*#__PURE__*/React.createElement("div", Object.assign({}, dragHandlePropsF, {
        style:Object.assign({display:"flex",alignItems:"center",padding:"14px 18px",
          borderBottom:"1px solid #2e2218",gap:12,userSelect:"none"}, dragHandlePropsF.style)}),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#f0e6d3",flex:1}},
          "\uD83C\uDFD7 Facilities"),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.78rem",color:"#6b5038"}},
          "Balance: "),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.88rem",fontWeight:"bold",
          color:money>=500?"#22c55e":money>=0?"#d4860a":"#ef4444"}},
          "$"+money.toLocaleString()),
        /*#__PURE__*/React.createElement("button",{onClick:onClose, onMouseDown:function(e){e.stopPropagation();},
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

