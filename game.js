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
      group: sire.group || dam.group || "",
      size: (function(){ var szOrder=["XS","S","M","L","XL"]; var si=szOrder.indexOf(sire.size||"M"); var di=szOrder.indexOf(dam.size||"M"); return szOrder[Math.round((si+di)/2)] || "M"; })(),
      sizeAvg: Math.round((sire.sizeAvg + dam.sizeAvg) / 2),
      litterSize: (function(){ var ls={"S":1,"M":2,"L":3}; var avg=(ls[sire.litterSize||"M"]+ls[dam.litterSize||"M"])/2; return avg<=1.5?"S":avg>=2.5?"L":"M"; })(),
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
      sizeVariant: _szPotential.sizeVariant,
      traits: (function() {
        var sT = sire.traits, dT = dam.traits;
        if (!sT && !dT) return null;
        var TRAIT_KEYS = ["intelligence","energy","trainability","loyalty","playfulness","aggression","preyDrive","barkTendency","sociability","adaptability"];
        var result = {};
        TRAIT_KEYS.forEach(function(k) {
          var sVal = sT && sT[k] !== undefined ? sT[k] : 5;
          var dVal = dT && dT[k] !== undefined ? dT[k] : 5;
          var avg = (sVal + dVal) / 2;
          var variance = (Math.random() - 0.5) * 2; // -1 to +1
          result[k] = Math.round(Math.max(1, Math.min(10, avg + variance)));
        });
        return result;
      })(),
      aptitudes: (function() {
        var sA = sire.aptitudes || [], dA = dam.aptitudes || [];
        var all = {}; sA.forEach(function(a){ all[a]=true; }); dA.forEach(function(a){ all[a]=true; });
        return Object.keys(all).filter(function(a) { return Math.random() < 0.7; }); // 70% chance to inherit each aptitude
      })()
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
  var dogPrime = (typeof PRIME_AGE!=="undefined")?PRIME_AGE.dog:96;
  var declineAt = dogPrime + ((typeof DECLINE_WINDOW!=="undefined")?DECLINE_WINDOW:24);
  if (ageMonths<3) return {label:"Newborn",color:"#b09070",canWork:false,canBreed:false,canShow:false};
  if (ageMonths<18) return {label:"Puppy",color:"#d4942a",canWork:false,canBreed:false,canShow:false};
  if (ageMonths<36) return {label:"Young Adult",color:"#22c55e",canWork:true,canBreed:true,canShow:true};
  if (ageMonths<dogPrime) return {label:"Prime",color:"#c4956a",canWork:true,canBreed:true,canShow:true};
  if (ageMonths<declineAt) return {label:"Past Prime",color:"#d4960a",canWork:true,canBreed:true,canShow:false};
  return {label:"Declining",color:"#f97316",canWork:false,canBreed:false,canShow:false};
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
var GAME_VERSION = "2026.03.23.1";

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
    onRetire = _ref0.onRetire,
    onRehome = _ref0.onRehome,
    onLock = _ref0.onLock;
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
  !animal.retired && (onStud || onSell || onRetire || onRehome) && /*#__PURE__*/React.createElement("div", {
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
    }, "\uD83C\uDFE1 Retire"),
    onRehome && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onRehome(animal); },
      style: { flex:1, background:"#141008", border:"1px solid #6d28d9", color:"#a78bfa",
        borderRadius:5, padding:"3px 0", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, "\uD83D\uDE90 Rehome")
  ),
  // Lock/Unlock button row
  !animal.retired && onLock && /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", gap:4, marginBottom:8 },
    onClick: function(e){ e.stopPropagation(); }
  },
    /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onLock(animal); },
      style: { flex:1, background: animal.locked?"#1a1408":"#141008",
        border:"1px solid "+(animal.locked?"#f59e0b":"#4a3a28"),
        color: animal.locked?"#f59e0b":"#8a7055",
        borderRadius:5, padding:"4px 0", cursor:"pointer", fontSize:"0.75rem", fontWeight:"bold" }
    }, animal.locked ? "\uD83D\uDD13 Unlock" : "\uD83D\uDD12 Lock")
  ),
  // Locked / Declining / Past Prime badges
  (animal.locked || (typeof isDeclining==="function"&&isDeclining(animal.ageMonths||0,"dog")) || (typeof isPastPrime==="function"&&isPastPrime(animal.ageMonths||0,"dog"))) && /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", gap:4, marginBottom:6, flexWrap:"wrap" }
  },
    animal.locked && /*#__PURE__*/React.createElement("span", {
      style: { fontSize:"0.65rem", background:"#92400e", color:"#fef3c7", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
    }, "\uD83D\uDD12 LOCKED"),
    !animal.locked && typeof isDeclining==="function" && isDeclining(animal.ageMonths||0,"dog") && /*#__PURE__*/React.createElement("span", {
      style: { fontSize:"0.65rem", background:"#7f1d1d", color:"#fecaca", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
    }, "\u26A0\uFE0F DECLINING"),
    !animal.locked && typeof isPastPrime==="function" && isPastPrime(animal.ageMonths||0,"dog") && !(typeof isDeclining==="function"&&isDeclining(animal.ageMonths||0,"dog")) && /*#__PURE__*/React.createElement("span", {
      style: { fontSize:"0.65rem", background:"#78350f", color:"#fde68a", padding:"2px 8px", borderRadius:4, fontWeight:"bold" }
    }, "\u23F3 PAST PRIME")
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
  var fiberGoats = ownedLivestock.filter(function(a){ return a.species==="goat" && a.type==="fiber" && !a.retiredLivestock; });
  var allShearable = sheep.concat(fiberGoats);

  function isSheared(a) {
    return win.seasonKey && sheepSheared[a.id] === win.seasonKey;
  }

  var unshearedCount = allShearable.filter(function(a){ return !isSheared(a); }).length;

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
          unshearedCount + " animals ready to shear"),
        React.createElement("button",{
          onClick:function(){ onShearAll && onShearAll(allShearable.filter(function(a){return !isSheared(a);}), win.seasonKey); },
          style:{background:"#1e2a12",border:"1px solid #5aaa30",color:"#5aaa30",
            borderRadius:6,padding:"6px 16px",cursor:"pointer",fontSize:"0.82rem",fontWeight:"bold"}},
          "\u2702\uFE0F Shear All (" + unshearedCount + ")")
      ),

      // Shearable animals list
      React.createElement("div",{style:{overflowY:"auto",flex:1,padding:"12px 18px"}},
        allShearable.length === 0
          ? React.createElement("div",{style:{textAlign:"center",color:"#6b5038",padding:"40px 0"}},
              "No shearable animals owned. (Female sheep or fiber goats)")
          : allShearable.map(function(a) {
              var sheared = isSheared(a);
              var isFiberGoat = a.species === "goat" && a.type === "fiber";
              var yieldLbs = isFiberGoat ? (a.fiberYield || (Math.round((Math.random()*2+1.5)*10)/10)) : (a.shearYield || (Math.floor(Math.random()*4)+7));
              var speciesIcon = isFiberGoat ? "\uD83D\uDC10" : "\uD83D\uDC11";
              var yieldLabel = isFiberGoat ? "mohair" : "wool";
              return React.createElement("div",{key:a.id,
                style:{display:"flex",alignItems:"center",gap:10,padding:"8px 10px",
                  background: sheared ? "#0a1a0a" : "#1a1410",
                  borderRadius:6,border:"1px solid "+(sheared?"#1a7a2a":"#443828"),marginBottom:5}},
                React.createElement("div",{style:{flex:1,fontSize:"0.8rem",color: sheared?"#5aaa30":"#f0e6d3"}},
                  speciesIcon + " " + (a.breed||(isFiberGoat?"Goat":"Sheep")) + " \u2014 " + (a.sex==="M"?"\u2642 Male":"\u2640 Female")),
                React.createElement("div",{style:{fontSize:"0.72rem",color:"#8a7055",minWidth:100,textAlign:"right"}},
                  sheared ? "\u2714 Sheared this season" : yieldLbs + " lbs " + yieldLabel + " est."),
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
    label:"Shearing Shed", icon:"\uD83D\uDC11", desc:"Houses sheep and handles shearing for sheep wool and goat mohair.",
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
              var title = getAnimalHighestTitle(a);
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
  if (animal.locked) return { error: "Locked animals cannot compete. Unlock first." };
  if (typeof canShowByAge==="function"&&!canShowByAge(animal.ageMonths||0,"dog")) return { error: "This dog is past prime and can no longer compete in shows." };
  if ((animal.ageMonths||0) < showType.minAge) return { error: "Must be at least " + Math.round(showType.minAge/12*10)/10 + " years old for this event." };
  if ((animal.perfScore||0) < showType.minPerf) return { error: "Performance score too low (" + showType.minPerf + " minimum for this event)." };

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

// Returns the highest-prestige earned title object (for prefix display in RetiredView)
// Title prestige order: master > advanced > novice, prioritize master-level titles
function getAnimalTitle(showPoints) {
  // showPoints is passed but earnedTitles is the real source of truth.
  // This overload accepts an animal object OR a showPoints number.
  // Called as getAnimalTitle(a.showPoints) in RetiredView — but we need the animal.
  // Since RetiredView passes a.showPoints (a number), we return null safely.
  // RetiredView only uses title.prefix — if no earnedTitles available, return null.
  return null;
}

// Returns the highest-prestige earned title object from an animal's earnedTitles array
function getAnimalHighestTitle(animal) {
  if (!animal || !animal.earnedTitles || animal.earnedTitles.length === 0) return null;
  // Prestige: master titles are highest, then advanced, then novice
  // We rank by which level they belong to in SHOW_LEVEL_TITLES
  var masterKeys = [];
  var advancedKeys = [];
  Object.keys(SHOW_LEVEL_TITLES).forEach(function(typeKey) {
    var levels = SHOW_LEVEL_TITLES[typeKey];
    if (levels.master)   masterKeys.push(levels.master.key);
    if (levels.advanced) advancedKeys.push(levels.advanced.key);
  });
  var masterTitle = animal.earnedTitles.find(function(t){ return masterKeys.indexOf(t.key) !== -1; });
  if (masterTitle) return masterTitle;
  var advTitle = animal.earnedTitles.find(function(t){ return advancedKeys.indexOf(t.key) !== -1; });
  if (advTitle) return advTitle;
  return animal.earnedTitles[0];
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
    if (showType && showType.minPerf > 0 && (a.perfScore||0) < showType.minPerf) return false;
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
                        (showType&&showType.minPerf>0&&(a.perfScore||0)<showType.minPerf) ? "\u26A0\uFE0F Perf too low" :
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
var BUILDING_IMAGES = {
  slaughterhouse: "farm-icons/abbatoir.png",
  pig_pen: "farm-icons/pig_pen.png",
  chicken_coop: "farm-icons/chicken_coop.png",
  apiary: "farm-icons/apiary.png",
  pond: "farm-icons/duck_pond.png",
  storage_barn: "farm-icons/storage_barn.png",
  kennel: "farm-icons/kennel.png",
  whelping: "farm-icons/whelping_kennel.png",
  barn: "farm-icons/barn.png",
  milking_barn: "farm-icons/milking_barn.png",
  shearing_shed: "farm-icons/shearing_shed.png",
  goat_pen: "farm-icons/goat_pen.png",
  grazing1: "farm-icons/north_pasture.png",
  grazing2: "farm-icons/east_pasture.png",
  grazing3: "farm-icons/south_pasture.png",
  grazing4: "farm-icons/west_pasture.png",
  stable: "farm-icons/stable.png",
  livestock_market: "farm-icons/livestock_market.png",
  breeders_market: "farm-icons/breeders_market.png",
  mailbox: "farm-icons/mailbox.png"
};
function FarmView(_ref) {
  var facilitiesOwned = _ref.facilitiesOwned, kennels = _ref.kennels, animals = _ref.animals,
      ownedLivestock = _ref.ownedLivestock, money = _ref.money, hasWhelpingKennel = _ref.hasWhelpingKennel,
      commodities = _ref.commodities || {}, onClose = _ref.onClose,
      isMobile = _ref.isMobile || false,
      onNavigate = _ref.onNavigate || function(){}, onOpenFacilities = _ref.onOpenFacilities || function(){},
      onOpenMarket = _ref.onOpenMarket || function(){}, onOpenShearing = _ref.onOpenShearing || function(){},
      farmLayout = _ref.farmLayout || {}, onUpdateLayout = _ref.onUpdateLayout || function(){};

  var _tip = _slicedToArray(React.useState(null), 2), tipText = _tip[0], setTipText = _tip[1];
  var _tipPos = _slicedToArray(React.useState({x:0,y:0}), 2), tipPos = _tipPos[0], setTipPos = _tipPos[1];
  var _hover = _slicedToArray(React.useState(null), 2), hoverKey = _hover[0], setHoverKey = _hover[1];
  var _kennelMap = _slicedToArray(React.useState(false), 2), showKennelMap = _kennelMap[0], setShowKennelMap = _kennelMap[1];
  var _editMode = _slicedToArray(React.useState(false), 2), editMode = _editMode[0], setEditMode = _editMode[1];
  var _roadEdit = _slicedToArray(React.useState(false), 2), roadEditMode = _roadEdit[0], setRoadEditMode = _roadEdit[1];
  var _roadStart = _slicedToArray(React.useState(null), 2), roadStart = _roadStart[0], setRoadStart = _roadStart[1];
  var _dragging = _slicedToArray(React.useState(null), 2), dragging = _dragging[0], setDragging = _dragging[1];
  var _dragOffset = _slicedToArray(React.useState({x:0,y:0}), 2), dragOffset = _dragOffset[0], setDragOffset = _dragOffset[1];
  var _longPress = React.useRef(null);
  var _mapRef = React.useRef(null);

  var hasFac = function(key) { return !!facilitiesOwned[key]; };
  var facTier = function(key) { return facilitiesOwned[key] ? facilitiesOwned[key].tier : 0; };
  var dogCount = animals.filter(function(a){ return !a.retired; }).length;
  var dogCap = kennels.reduce(function(s,k){ return s + (KENNEL_TYPES[k.type] ? KENNEL_TYPES[k.type].capacity : 10); }, 0);
  var lsCount = function(sp) { return (ownedLivestock||[]).filter(function(a){ return a.species===sp || a.type===sp; }).length; };
  var facCap = function(key) { return hasFac(key) ? FACILITIES[key].tiers[facTier(key)].capacity : 0; };

  // Snap to 2% grid
  var GRID = 2;
  function snap(v) { return Math.round(v / GRID) * GRID; }

  // Get building position (custom or default)
  function getPos(b) {
    var custom = farmLayout[b.key];
    if (custom) return { x: custom.x, y: custom.y };
    return { x: b.x, y: b.y };
  }

  // Drag handlers
  function getMapXY(e) {
    var el = _mapRef.current;
    if (!el) return {x:0,y:0};
    var rect = el.getBoundingClientRect();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100
    };
  }

  function startDrag(key, e) {
    if (!editMode) return;
    e.preventDefault();
    e.stopPropagation();
    var b = BUILDINGS.find(function(bb){ return bb.key===key; });
    if (!b) return;
    var pos = getPos(b);
    var mapXY = getMapXY(e);
    setDragOffset({ x: mapXY.x - pos.x, y: mapXY.y - pos.y });
    setDragging(key);
  }

  function onDragMove(e) {
    if (!dragging) return;
    e.preventDefault();
    var b = BUILDINGS.find(function(bb){ return bb.key===dragging; });
    if (!b) return;
    var mapXY = getMapXY(e);
    var newX = snap(Math.max(0, Math.min(96 - (b.w||10), mapXY.x - dragOffset.x)));
    var newY = snap(Math.max(0, Math.min(96 - (b.h||10), mapXY.y - dragOffset.y)));
    var updated = Object.assign({}, farmLayout);
    updated[dragging] = { x: newX, y: newY };
    onUpdateLayout(updated);
  }

  function onDragEnd(e) {
    if (dragging) {
      e && e.preventDefault();
      setDragging(null);
    }
    if (_longPress.current) { clearTimeout(_longPress.current); _longPress.current = null; }
  }

  // Touch: long press to start drag (500ms)
  function onTouchStart(key, e) {
    if (!editMode) return;
    _longPress.current = setTimeout(function(){ startDrag(key, e); }, 500);
  }
  function onTouchMove(e) {
    if (_longPress.current) { clearTimeout(_longPress.current); _longPress.current = null; }
    if (dragging) onDragMove(e);
  }
  function onTouchEnd(e) {
    if (_longPress.current) { clearTimeout(_longPress.current); _longPress.current = null; }
    onDragEnd(e);
  }

  function resetLayout() {
    if (confirm("Reset all buildings to default positions?")) {
      onUpdateLayout({});
    }
  }

  var BUILDINGS = [
    // === UPPER-LEFT: Smelly corner ===
    { key:"slaughterhouse", x:0,  y:1,   w:18, h:18, rot:0,  label:"Slaughterhouse", icon:"\uD83E\uDE78", facKey:"slaughterhouse",
      color:"#fca5a5", bg:"#120808", border:"#7a2010", owned: hasFac("slaughterhouse"),
      stat: hasFac("slaughterhouse") ? FACILITIES.slaughterhouse.tiers[facTier("slaughterhouse")].name : "Not built",
      onClick: function(){ if(hasFac("slaughterhouse")){ onClose(); onNavigate("slaughterhouse"); } else { onOpenFacilities(); } } },
    { key:"pig_pen",        x:17, y:3,   w:17, h:17, rot:0,   label:"Pig Pen",        icon:"\uD83D\uDC16", facKey:"pig_pen",
      color:"#f9a8d4", bg:"#1a0a12", border:"#a83060", owned: hasFac("pig_pen"),
      stat: hasFac("pig_pen") ? lsCount("pig")+"/"+facCap("pig_pen") : "Not built",
      onClick: function(){ if(hasFac("pig_pen")){ onClose(); onNavigate("pigs"); } else { onOpenFacilities(); } } },

    // === LEFT SIDE: Small animals + Apiary ===
    { key:"chicken_coop",   x:1,  y:22,  w:17, h:17, rot:0,   label:"Chicken Coop",   icon:"\uD83D\uDC14", facKey:"chicken_coop",
      color:"#86efac", bg:"#0a1a0a", border:"#166534", owned: hasFac("chicken_coop"),
      stat: hasFac("chicken_coop") ? lsCount("chicken")+"/"+facCap("chicken_coop")+" \u00B7 "+(commodities.eggs||0).toFixed(0)+" eggs" : "Not built",
      onClick: function(){ if(hasFac("chicken_coop")){ onClose(); onNavigate("chickens"); } else { onOpenFacilities(); } } },
    { key:"apiary",         x:0,  y:44,  w:16, h:16, rot:0,  label:"Apiary",         icon:"\uD83D\uDC1D", facKey:"apiary",
      color:"#f5d870", bg:"#1a1408", border:"#92400e", owned: hasFac("apiary"),
      stat: hasFac("apiary") ? FACILITIES.apiary.tiers[facTier("apiary")].capacity+" hives \u00B7 "+(commodities.honey||0).toFixed(1)+"lb" : "Not built",
      onClick: function(){ onOpenFacilities(); } },

    // === CENTER: Pond (hub of road circle) + Storage ===
    { key:"pond",           x:24, y:28,  w:20, h:20, rot:0,   label:"Duck Pond",      icon:"\uD83E\uDD86", facKey:"pond",
      color:"#7dd3fc", bg:"#0a1820", border:"#0369a1", owned: hasFac("pond"),
      stat: hasFac("pond") ? lsCount("duck")+"/"+facCap("pond") : "Not built",
      onClick: function(){ if(hasFac("pond")){ onClose(); onNavigate("ducks"); } else { onOpenFacilities(); } } },
    { key:"storage_barn",   x:18, y:50,  w:18, h:18, rot:0,   label:"Storage Barn",   icon:"\uD83D\uDDC4", facKey:"storage_barn",
      color:"#bef264", bg:"#0e1008", border:"#4a6a18", owned: hasFac("storage_barn"),
      stat: hasFac("storage_barn") ? FACILITIES.storage_barn.tiers[facTier("storage_barn")].name : "Not built",
      onClick: function(){ onOpenFacilities(); } },

    // === BOTTOM-CENTER: Homebase cluster ===
    { key:"kennel",         x:26, y:70,  w:20, h:20, rot:0,   label:"Kennel",         icon:"\uD83C\uDFE0", facKey:null,
      color:"#ef4444", bg:"#2a0a0a", border:"#991b1b", owned:true,
      stat: dogCount+"/"+dogCap+" dogs",
      onClick: function(){ setShowKennelMap(true); } },
    { key:"whelping",       x:10, y:72,  w:17, h:17, rot:0,  label:"Whelping",       icon:"\uD83C\uDFE5", facKey:null,
      color:"#a78bfa", bg: hasWhelpingKennel?"#1a0a2e":"#141008", border: hasWhelpingKennel?"#7c3aed":"#3a2e20",
      owned: hasWhelpingKennel, stat: hasWhelpingKennel ? "Active" : "Not built",
      onClick: function(){ if(hasWhelpingKennel){ onClose(); onNavigate("whelping"); } else { onOpenFacilities(); } } },

    // === RIGHT SIDE: Livestock row near grazing ===
    { key:"barn",           x:52, y:2,   w:20, h:20, rot:0,  label:"Barn",           icon:"\uD83D\uDC04", facKey:"barn",
      color:"#fca5a5", bg:"#1c0808", border:"#b91c1c", owned: hasFac("barn"),
      stat: hasFac("barn") ? lsCount("beef")+"/"+facCap("barn") : "Not built",
      onClick: function(){ if(hasFac("barn")){ onClose(); onNavigate("cattle","beef"); } else { onOpenFacilities(); } } },
    { key:"milking_barn",   x:50, y:22,  w:19, h:19, rot:0,   label:"Milking Barn",   icon:"\uD83E\uDD5B", facKey:"milking_barn",
      color:"#93c5fd", bg:"#0a1020", border:"#1d4ed8", owned: hasFac("milking_barn"),
      stat: hasFac("milking_barn") ? lsCount("dairy")+"/"+facCap("milking_barn")+" \u00B7 "+(commodities.milk||0).toFixed(0)+"gal" : "Not built",
      onClick: function(){ if(hasFac("milking_barn")){ onClose(); onNavigate("cattle","dairy"); } else { onOpenFacilities(); } } },
    { key:"shearing_shed",  x:50, y:44,  w:18, h:18, rot:0,  label:"Shearing Shed",  icon:"\uD83D\uDC11", facKey:"shearing_shed",
      color:"#f5d870", bg:"#1a1408", border:"#b45309", owned: hasFac("shearing_shed"),
      stat: hasFac("shearing_shed") ? (function(){ var sc=lsCount("sheep"); var fg=(ownedLivestock||[]).filter(function(a){return a.species==="goat"&&a.type==="fiber"&&!a.retiredLivestock;}).length; var w=(commodities.wool||0).toFixed(1); var m=(commodities.mohair||0).toFixed(1); return sc+"sh+"+fg+"gt \u00B7 "+w+"lb wool"+(parseFloat(m)>0?" \u00B7 "+m+"lb mohair":""); })() : "Not built",
      onClick: function(){ if(hasFac("shearing_shed")){ onOpenShearing(); } else { onOpenFacilities(); } } },
    { key:"goat_pen",       x:52, y:62,  w:17, h:17, rot:0,   label:"Goat Pen",       icon:"\uD83D\uDC10", facKey:"goat_pen",
      color:"#fdba74", bg:"#1a1208", border:"#92400e", owned: hasFac("goat_pen"),
      stat: hasFac("goat_pen") ? lsCount("goat")+"/"+facCap("goat_pen")+" \u00B7 "+(commodities.goat_milk||0).toFixed(0)+"gal" : "Not built",
      onClick: function(){ if(hasFac("goat_pen")){ onClose(); onNavigate("goats"); } else { onOpenFacilities(); } } },

    // === FAR RIGHT: 4 Grazing Land plots (2x2 grid) ===
    { key:"grazing1",       x:74, y:2,   w:14, h:24, rot:0,   label:"North Pasture",  icon:"\uD83C\uDF3E", facKey:"grazing_land",
      color:"#5aaa30", bg:"#091a0a", border:"#1a7a2a", owned: hasFac("grazing_land"),
      stat: hasFac("grazing_land") ? FACILITIES.grazing_land.tiers[facTier("grazing_land")].capacity+" acres" : "Not built",
      onClick: function(){ onOpenFacilities(); } },
    { key:"grazing2",       x:88, y:2,   w:14, h:24, rot:0,   label:"East Pasture",   icon:"\uD83C\uDF3E", facKey:"grazing_land",
      color:"#5aaa30", bg:"#081808", border:"#1a6a2a", owned: hasFac("grazing_land"),
      stat: hasFac("grazing_land") ? "Pasture" : "Not built",
      onClick: function(){ onOpenFacilities(); } },
    { key:"grazing3",       x:74, y:28,  w:14, h:24, rot:0,   label:"South Pasture",  icon:"\uD83C\uDF3E", facKey:"grazing_land",
      color:"#5aaa30", bg:"#0a1c0a", border:"#1a7a2a", owned: hasFac("grazing_land"),
      stat: hasFac("grazing_land") ? "Pasture" : "Not built",
      onClick: function(){ onOpenFacilities(); } },
    { key:"grazing4",       x:88, y:28,  w:14, h:24, rot:0,   label:"West Pasture",   icon:"\uD83C\uDF3E", facKey:"grazing_land",
      color:"#5aaa30", bg:"#081a08", border:"#1a6a2a", owned: hasFac("grazing_land"),
      stat: hasFac("grazing_land") ? "Pasture" : "Not built",
      onClick: function(){ onOpenFacilities(); } },

    // === RIGHT-BOTTOM: Stable (standoffish from other buildings) ===
    { key:"stable",         x:46, y:78,  w:20, h:19, rot:0,  label:"Stable",         icon:"\uD83D\uDC0E", facKey:"stable",
      color:"#f0c040", bg:"#1a1008", border:"#92400e", owned: hasFac("stable"),
      stat: hasFac("stable") ? lsCount("horse")+"/"+facCap("stable") : "Not built",
      onClick: function(){ if(hasFac("stable")){ onClose(); onNavigate("horses"); } else { onOpenFacilities(); } } },

    // === COMMUNITY SIGNS (always visible, no purchase needed) ===
    { key:"livestock_market", x:26, y:0,   w:18, h:16, rot:0,   label:"Livestock\nMarket", icon:"\uD83D\uDC04", facKey:null,
      color:"#bef264", bg:"#0e1a08", border:"#4a7c1a", owned:true, isSign:true,
      stat: "Open",
      onClick: function(){ onOpenMarket(); } },
    { key:"breeders_market",  x:0,  y:58,  w:18, h:16, rot:0,   label:"Breeder's\nMarket", icon:"\uD83C\uDFEA", facKey:null,
      color:"#e8a020", bg:"#1a1408", border:"#92600e", owned:true, isSign:true,
      stat: "Open",
      onClick: function(){ onNavigate("breeders_market"); } },
    { key:"mailbox",          x:16, y:60,  w:14, h:14,  rot:0,   label:"Mailbox", icon:"\uD83D\uDCEC", facKey:null,
      color:"#60a5fa", bg:"#0a1a2a", border:"#1e40af", owned:true, isSign:true,
      stat: "",
      onClick: function(){ onClose(); onNavigate("mail"); } }
  ];



  function renderBuildingSVG(b) {
    var owned = b.owned;
    var baseColor = owned ? b.border : "#1e1a12";
    var roofColor = owned ? b.color : "#2a2218";
    var wallColor = owned ? (b.border || "#443828") : "#1a1610";
    var fillColor = owned ? b.bg : "#0c0a08";

    if (b.key === "pond") {
      return '<rect x="0" y="0" width="110" height="110" fill="'+(owned?"#071a10":"#0a0f14")+'" rx="6"/>'
        + '<ellipse cx="55" cy="52" rx="46" ry="40" fill="'+(owned?"#0a2a3a":"#0a0f14")+'"/>'
        + '<ellipse cx="55" cy="52" rx="46" ry="40" fill="none" stroke="'+(owned?"#0ea5e9":"#1a2a3a")+'" stroke-width="2.5"/>'
        + '<ellipse cx="55" cy="55" rx="34" ry="28" fill="none" stroke="'+(owned?"#0369a1":"#0a1a28")+'" stroke-width="1" opacity="0.4"/>'
        + '<ellipse cx="48" cy="44" rx="8" ry="4" fill="'+(owned?"#bae6fd":"#1a2a3a")+'" opacity="0.3"/>'
        + (owned ? '<ellipse cx="38" cy="48" rx="5" ry="3" fill="#e0f2fe" opacity="0.5"/><ellipse cx="68" cy="58" rx="4" ry="2.5" fill="#e0f2fe" opacity="0.4"/>' : '')
        + '<line x1="10" y1="88" x2="10" y2="65" stroke="'+(owned?"#365314":"#1a1e10")+'" stroke-width="2.5"/>'
        + '<ellipse cx="10" cy="63" rx="6" ry="9" fill="'+(owned?"#4a7c1a":"#1a2a10")+'" opacity="0.7"/>'
        + '<line x1="100" y1="85" x2="100" y2="66" stroke="'+(owned?"#365314":"#1a1e10")+'" stroke-width="2"/>'
        + '<ellipse cx="100" cy="64" rx="5" ry="8" fill="'+(owned?"#4a7c1a":"#1a2a10")+'" opacity="0.7"/>';
    }
    if (b.key.indexOf("grazing") === 0) {
      return '<rect x="0" y="0" width="110" height="110" fill="'+(owned?"#0a1a08":"#0c0a08")+'" rx="8"/>'
        + '<rect x="3" y="3" width="104" height="104" fill="none" stroke="'+(owned?"#3a5a14":"#1a1e10")+'" stroke-width="2" rx="4" stroke-dasharray="8 4"/>'
        + (owned
          ? '<line x1="22" y1="3" x2="22" y2="107" stroke="#1a2a0a" stroke-width="0.4" opacity="0.4"/>'
          + '<line x1="44" y1="3" x2="44" y2="107" stroke="#1a2a0a" stroke-width="0.4" opacity="0.4"/>'
          + '<line x1="66" y1="3" x2="66" y2="107" stroke="#1a2a0a" stroke-width="0.4" opacity="0.4"/>'
          + '<line x1="88" y1="3" x2="88" y2="107" stroke="#1a2a0a" stroke-width="0.4" opacity="0.4"/>'
          : '');
    }
    if (b.key === "apiary") {
      var hc = owned ? "#b8860b" : "#2a2218";
      var hs = owned ? "#daa520" : "#1a1610";
      return '<rect x="0" y="0" width="110" height="110" fill="'+(owned?"#141008":"#0c0a08")+'" rx="6"/>'
        + '<rect x="12" y="50" width="24" height="32" fill="'+hc+'" rx="3" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="12" y1="62" x2="36" y2="62" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="12" y1="72" x2="36" y2="72" stroke="'+hs+'" stroke-width="1"/>'
        + '<rect x="43" y="46" width="24" height="36" fill="'+hc+'" rx="3" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="43" y1="58" x2="67" y2="58" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="43" y1="68" x2="67" y2="68" stroke="'+hs+'" stroke-width="1"/>'
        + '<rect x="74" y="50" width="24" height="32" fill="'+hc+'" rx="3" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="74" y1="62" x2="98" y2="62" stroke="'+hs+'" stroke-width="1"/>'
        + '<line x1="74" y1="72" x2="98" y2="72" stroke="'+hs+'" stroke-width="1"/>'
        + (owned ? '<circle cx="22" cy="34" r="3" fill="#f0c040" opacity="0.8"/><circle cx="68" cy="28" r="2.5" fill="#f0c040" opacity="0.7"/>' : '');
    }
    if (b.key.indexOf("empty") === 0) {
      return '<rect x="0" y="0" width="110" height="110" fill="#0c0a08" rx="8"/>'
        + '<rect x="5" y="5" width="100" height="100" fill="none" stroke="#1e1a12" stroke-width="1.5" rx="4" stroke-dasharray="8 5"/>'
        + '<line x1="44" y1="55" x2="66" y2="55" stroke="#2a2218" stroke-width="3" stroke-linecap="round"/>'
        + '<line x1="55" y1="44" x2="55" y2="66" stroke="#2a2218" stroke-width="3" stroke-linecap="round"/>';
    }
    if (b.isSign) {
      var sc = b.color || "#bef264";
      var sb = b.border || "#4a7c1a";
      // Wooden sign on a post
      return '<rect x="0" y="0" width="110" height="110" fill="transparent" rx="0"/>'
        + '<line x1="55" y1="30" x2="55" y2="105" stroke="#5a4020" stroke-width="6" stroke-linecap="round"/>'
        + '<line x1="55" y1="30" x2="55" y2="105" stroke="#7a5830" stroke-width="4" stroke-linecap="round"/>'
        + '<rect x="8" y="8" width="94" height="46" fill="#3a2810" rx="4" stroke="#5a4020" stroke-width="2"/>'
        + '<rect x="10" y="10" width="90" height="42" fill="#4a3418" rx="3"/>'
        + '<line x1="10" y1="10" x2="100" y2="10" stroke="#5a4020" stroke-width="1.5"/>'
        + '<line x1="10" y1="52" x2="100" y2="52" stroke="#5a4020" stroke-width="1.5"/>'
        + '<line x1="15" y1="14" x2="95" y2="14" stroke="#3a2810" stroke-width="0.5" opacity="0.5"/>'
        + '<line x1="15" y1="48" x2="95" y2="48" stroke="#3a2810" stroke-width="0.5" opacity="0.5"/>'
        + '<circle cx="14" cy="31" r="3" fill="#2a1a08" stroke="#5a4020" stroke-width="1"/>'
        + '<circle cx="96" cy="31" r="3" fill="#2a1a08" stroke="#5a4020" stroke-width="1"/>';
    }
    return '<rect x="0" y="0" width="110" height="110" fill="'+fillColor+'" rx="6"/>'
      + '<rect x="8" y="30" width="84" height="64" fill="'+wallColor+'" rx="3"/>'
      + '<polygon points="50,10 96,32 4,32" fill="'+roofColor+'" opacity="0.8"/>'
      + '<polygon points="50,10 80,24 20,24" fill="'+roofColor+'"/>'
      + '<rect x="40" y="62" width="22" height="32" fill="'+(owned?"#1a1410":"#0c0a08")+'" rx="2"/>'
      + '<rect x="12" y="40" width="18" height="14" fill="'+(owned?"#1a1410":"#0c0a08")+'" rx="1" stroke="'+baseColor+'" stroke-width="0.8"/>'
      + '<rect x="72" y="40" width="18" height="14" fill="'+(owned?"#1a1410":"#0c0a08")+'" rx="1" stroke="'+baseColor+'" stroke-width="0.8"/>';
  }



  return React.createElement("div", {
    style: { position:"relative", width:"100vw", height:"100vh", overflow:"hidden", display:"flex", flexDirection:"column",
      background:"#0e1208" }
  },
    // Header
    React.createElement("div", {
      style: { display:"flex", alignItems:"center", justifyContent:"space-between", padding: isMobile ? "6px 8px" : "10px 22px",
        background:"rgba(10,8,4,0.9)", borderBottom:"1px solid #2a1e10", flexShrink:0, zIndex:10, flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? 4 : 0 }
    },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap: isMobile ? 6 : 12 } },
        !isMobile && React.createElement("span", { style:{ fontSize:"1.3rem" } }, "\uD83C\uDFD8"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize: isMobile ? "0.8rem" : "1.05rem", letterSpacing:"0.04em" } },
            isMobile ? "Farm Map" : "Bloodline Acres"),
          !isMobile && React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem" } },
            editMode ? "\uD83D\uDD27 EDIT MODE \u2014 Drag buildings to rearrange" : roadEditMode ? ("\uD83D\uDEE3 ROAD EDIT \u2014 " + (roadStart ? "Now click a 2nd building to connect" : "Click a building to start a road \u00B7 Click a blue road to delete it")) : "Click a building to manage \u00B7 $" + money.toLocaleString())
        )
      ),
      React.createElement("div", { style:{ display:"flex", gap: isMobile ? 4 : 8, flexWrap:"wrap" } },
        React.createElement("button", {
          onClick: function(){ setEditMode(function(v){ return !v; }); setDragging(null); setRoadEditMode(false); setRoadStart(null); },
          style:{ background: editMode?"#2a1a08":"#1a1410", border:"1px solid "+(editMode?"#f59e0b":"#6b5038"),
            color: editMode?"#f59e0b":"#8a7055",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 16px", cursor:"pointer", fontSize: isMobile ? "0.65rem" : "0.8rem", fontWeight:"bold" }
        }, editMode ? "\uD83D\uDD12 Lock" : "\uD83D\uDD13 Edit"),
        editMode && React.createElement("button", {
          onClick: resetLayout,
          style:{ background:"#1a0808", border:"1px solid #7f1d1d", color:"#fca5a5",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 12px", cursor:"pointer", fontSize: isMobile ? "0.6rem" : "0.75rem" }
        }, "\u21BA Reset"),
        React.createElement("button", {
          onClick: function(){ setRoadEditMode(function(v){ return !v; }); setRoadStart(null); setEditMode(false); setDragging(null); },
          style:{ background: roadEditMode?"#0a1a2a":"#1a1410", border:"1px solid "+(roadEditMode?"#60a5fa":"#6b5038"),
            color: roadEditMode?"#60a5fa":"#8a7055",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 14px", cursor:"pointer", fontSize: isMobile ? "0.6rem" : "0.78rem", fontWeight: roadEditMode?"bold":"normal" }
        }, roadEditMode ? "\uD83D\uDEE3 Done" : "\uD83D\uDEE3 Roads"),
        roadEditMode && React.createElement("button", {
          onClick: function(){ if(confirm("Remove ALL roads?")){ onUpdateLayout(Object.assign({}, farmLayout, { __roads: [] })); } },
          style:{ background:"#1a0808", border:"1px solid #7f1d1d", color:"#fca5a5",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 12px", cursor:"pointer", fontSize: isMobile ? "0.6rem" : "0.75rem" }
        }, "\u2715 Clear Roads"),
        React.createElement("button", {
          onClick: onOpenFacilities,
          style:{ background:"#1a1410", border:"1px solid #d4942a", color:"#d4942a",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 16px", cursor:"pointer", fontSize: isMobile ? "0.65rem" : "0.8rem", fontWeight:"bold" }
        }, isMobile ? "\uD83C\uDFD7 Build" : "\uD83C\uDFD7 Build / Upgrade"),
        React.createElement("button", {
          onClick: onClose,
          style:{ background:"transparent", border:"1px solid #3a2e20", color:"#6b5038",
            borderRadius:8, padding: isMobile ? "5px 8px" : "7px 14px", cursor:"pointer", fontSize: isMobile ? "0.7rem" : "0.85rem" }
        }, "\u2715")
      )
    ),

    // Map area
    React.createElement("div", {
      ref: _mapRef,
      style: { flex:1, position:"relative", overflow:"hidden", cursor: editMode?(dragging?"grabbing":"grab"):"default" },
      onMouseMove: editMode ? onDragMove : undefined,
      onMouseUp: editMode ? onDragEnd : undefined,
      onMouseLeave: editMode ? onDragEnd : undefined,
      onTouchMove: editMode ? onTouchMove : undefined,
      onTouchEnd: editMode ? onTouchEnd : undefined,
      onTouchCancel: editMode ? onTouchEnd : undefined
    },
      // Ground texture
      React.createElement("div", {
        style: { position:"absolute", inset:0, background:"linear-gradient(135deg, #0a1208 0%, #0e1a0a 30%, #0c1608 60%, #0a1208 100%)" }
      }),

      // Edit mode grid overlay
      editMode && React.createElement("div", {
        style: { position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
          backgroundImage:"linear-gradient(rgba(74,58,40,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(74,58,40,0.15) 1px, transparent 1px)",
          backgroundSize: GRID+"% "+GRID+"%" }
      }),

      // Player-drawn roads — read from farmLayout.__roads
      (function(){
        var playerRoads = (farmLayout && farmLayout.__roads) || [];

        // Get center point of a building in percentage coords
        function getCenter(key) {
          var b = BUILDINGS.find(function(bb){ return bb.key===key; });
          if (!b) return null;
          if (!b.owned && !b.isSign) return null;
          var p = getPos(b);
          return { x: p.x + (b.w||10)/2, y: p.y + (b.h||10)/2 };
        }

        // Build SVG path with gentle curve between two points
        function roadPath(c1, c2) {
          var dx = c2.x - c1.x;
          var dy = c2.y - c1.y;
          var dist = Math.sqrt(dx*dx + dy*dy);
          var mx = (c1.x + c2.x) / 2;
          var my = (c1.y + c2.y) / 2;
          var wobble = Math.min(dist * 0.15, 4);
          var angle = Math.atan2(dy, dx) + Math.PI/2;
          var seed = (c1.x * 7 + c1.y * 13 + c2.x * 11 + c2.y * 3) % 100;
          var dir = seed > 50 ? 1 : -1;
          var cx = mx + Math.cos(angle) * wobble * dir;
          var cy = my + Math.sin(angle) * wobble * dir;
          return "M "+c1.x+" "+c1.y+" Q "+cx+" "+cy+" "+c2.x+" "+c2.y;
        }

        var paths = "";
        playerRoads.forEach(function(pair, idx) {
          var c1 = getCenter(pair[0]);
          var c2 = getCenter(pair[1]);
          if (!c1 || !c2) return;
          var d = roadPath(c1, c2);
          // Dirt road base (wider, dark)
          paths += '<path d="'+d+'" fill="none" stroke="#1e1810" stroke-width="2.2" stroke-linecap="round" opacity="0.45"/>';
          // Main road surface
          paths += '<path d="'+d+'" fill="none" stroke="#2a2218" stroke-width="1.6" stroke-linecap="round" opacity="0.55"/>';
          // Subtle dashed center line (static)
          paths += '<path d="'+d+'" fill="none" stroke="#3a3020" stroke-width="0.4" stroke-linecap="round" opacity="0.3" stroke-dasharray="2 2.5"/>';
          // Clickable hit area for deleting (only in road edit mode)
          if (roadEditMode) {
            paths += '<path data-road-idx="'+idx+'" d="'+d+'" fill="none" stroke="rgba(96,165,250,0.25)" stroke-width="4" stroke-linecap="round" style="cursor:pointer"/>';
          }
        });

        // Fence around grazing cluster
        var g1 = getCenter("grazing1");
        var g4 = getCenter("grazing4");
        if (g1 && g4) {
          var gB1 = BUILDINGS.find(function(b){ return b.key==="grazing1"; });
          var gB4 = BUILDINGS.find(function(b){ return b.key==="grazing4"; });
          if (gB1 && gB4) {
            var p1 = getPos(gB1);
            var p4 = getPos(gB4);
            var fx = Math.min(p1.x, p4.x) - 1;
            var fy = Math.min(p1.y, p4.y) - 1;
            var fw = Math.max(p1.x+gB1.w, p4.x+gB4.w) - fx + 1;
            var fh = Math.max(p1.y+gB1.h, p4.y+gB4.h) - fy + 1;
            paths += '<rect x="'+fx+'" y="'+fy+'" width="'+fw+'" height="'+fh+'" fill="none" stroke="#2a3a14" stroke-width="0.3" stroke-dasharray="1.5 0.8" rx="0.5" opacity="0.45"/>';
          }
        }

        return React.createElement("div", {
          style: { position:"absolute", inset:0, zIndex:2, pointerEvents: roadEditMode?"auto":"none" },
          onClick: roadEditMode ? function(e) {
            // Check if clicked on a road hit area
            var target = e.target;
            if (target && target.getAttribute && target.getAttribute("data-road-idx") !== null) {
              var idx = parseInt(target.getAttribute("data-road-idx"), 10);
              var curRoads = (farmLayout && farmLayout.__roads) || [];
              if (idx >= 0 && idx < curRoads.length) {
                var removed = curRoads[idx];
                var newRoads = curRoads.filter(function(_, i){ return i !== idx; });
                onUpdateLayout(Object.assign({}, farmLayout, { __roads: newRoads }));
              }
            }
          } : null,
          dangerouslySetInnerHTML: { __html:
            '<svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0">'
            + paths
            + '</svg>'
          }
        });
      })(),

      // Buildings
      BUILDINGS.filter(function(b){ return b.owned || b.isSign; }).map(function(b) {
        var pos = getPos(b);
        var isDraggingThis = dragging === b.key;
        return React.createElement("div", {
          key: b.key,
          style: {
            position:"absolute",
            left: pos.x+"%", top: pos.y+"%",
            width: b.w+"%", height: b.h+"%",
            zIndex: isDraggingThis ? 100 : (b.isSign ? 5 : 3),
            cursor: editMode ? (isDraggingThis ? "grabbing" : "grab") : (roadEditMode ? "crosshair" : "pointer"),
            transition: isDraggingThis ? "none" : "left 0.15s, top 0.15s",
            opacity: isDraggingThis ? 0.85 : 1,
            transform: isDraggingThis ? "scale(1.05)" : ("rotate("+(b.rot||0)+"deg)"),
            filter: isDraggingThis ? "drop-shadow(0 4px 12px rgba(245,158,11,0.4))" : (roadEditMode && roadStart === b.key ? "drop-shadow(0 0 8px rgba(96,165,250,0.8))" : "none"),
            outline: roadEditMode && roadStart === b.key ? "2px solid #60a5fa" : "none",
            outlineOffset: "2px",
            userSelect: "none", WebkitUserSelect: "none"
          },
          onClick: function(e) {
            if (editMode || dragging) return;
            if (roadEditMode) {
              // Road editing: first click sets start, second click creates road
              if (!roadStart) {
                setRoadStart(b.key);
              } else if (roadStart !== b.key) {
                var curRoads = (farmLayout && farmLayout.__roads) || [];
                // Check for duplicate
                var dup = curRoads.some(function(r){
                  return (r[0]===roadStart && r[1]===b.key) || (r[0]===b.key && r[1]===roadStart);
                });
                if (!dup) {
                  var newRoads = curRoads.concat([[roadStart, b.key]]);
                  onUpdateLayout(Object.assign({}, farmLayout, { __roads: newRoads }));
                }
                setRoadStart(null);
              } else {
                setRoadStart(null); // clicked same building, cancel
              }
              return;
            }
            b.onClick && b.onClick();
          },
          onMouseDown: editMode ? function(e){ startDrag(b.key, e); } : undefined,
          onTouchStart: editMode ? function(e){ onTouchStart(b.key, e); } : undefined,
          onMouseEnter: function(e) {
            if (dragging) return;
            setHoverKey(b.key);
            setTipText(b.label + (b.stat ? " \u00B7 " + b.stat : ""));
            var rect = e.currentTarget.getBoundingClientRect();
            setTipPos({ x: rect.left + rect.width/2, y: rect.top - 8 });
          },
          onMouseLeave: function() { setHoverKey(null); setTipText(null); }
        },
          // Building image
          React.createElement("img", {
            src: BUILDING_IMAGES[b.key] || "",
            alt: b.label,
            style: { width:"100%", height:"calc(100% - 16px)", objectFit:"contain", pointerEvents:"none",
              borderRadius:6, filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.6))" },
            draggable: false
          }),
          // Text label below image
          React.createElement("div", {
            style: { position:"absolute", bottom:0, left:"-10%", right:"-10%", textAlign:"center",
              pointerEvents:"none", lineHeight:1 }
          },
            React.createElement("span", {
              style: { fontSize: isMobile ? "0.7rem" : "0.6rem", color:"#e8d0a8", fontWeight:"bold",
                textShadow:"0 1px 4px rgba(0,0,0,0.95), 0 0px 2px rgba(0,0,0,0.9)",
                whiteSpace:"nowrap", letterSpacing:"0.02em" }
            }, b.label.replace(/\n/g, " "))
          ),
          // Edit mode indicator
          editMode && React.createElement("div", {
            style: { position:"absolute", top:2, right:2, width:10, height:10, borderRadius:"50%",
              background:"#f59e0b", border:"1px solid #92400e", opacity:0.7 }
          })
        );
      }),

      // Tooltip
      tipText && !dragging && React.createElement("div", {
        style: { position:"fixed", left: tipPos.x, top: tipPos.y,
          transform:"translate(-50%, -100%)", background:"rgba(20,16,8,0.95)",
          border:"1px solid #6b5038", borderRadius:6, padding:"6px 12px",
          color:"#e8d0a8", fontSize:"0.72rem", fontWeight:"bold",
          whiteSpace:"pre-line", textAlign:"center", zIndex:200,
          pointerEvents:"none", boxShadow:"0 4px 12px rgba(0,0,0,0.5)" }
      }, tipText)
    ),

    // Kennel sub-map modal (unchanged)
    showKennelMap && React.createElement("div", {
      style: { position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:60,
        display:"flex", alignItems:"center", justifyContent:"center" },
      onClick: function(){ setShowKennelMap(false); }
    },
      React.createElement("div", {
        style: { background:"#0e1208", border:"2px solid #6b5038", borderRadius:16,
          padding:0, width:"min(960px, 97vw)", maxHeight:"min(720px, 92vh)", overflow:"hidden",
          boxShadow:"0 12px 48px rgba(0,0,0,0.7)", position:"relative" },
        onClick: function(e){ e.stopPropagation(); }
      },
        // Header bar
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center",
          padding:"12px 20px", background:"rgba(10,8,4,0.9)", borderBottom:"1px solid #2a1e10" } },
          React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
            React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83D\uDC3E"),
            React.createElement("div", null,
              React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"1rem" } }, "Kennel Mini-Map"),
              React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.7rem" } },
                dogCount + "/" + dogCap + " dogs \u00B7 " + kennels.length + " kennel" + (kennels.length!==1?"s":""))
            )
          ),
          React.createElement("button", {
            onClick: function(){ setShowKennelMap(false); },
            style:{ background:"transparent", border:"none", color:"#6b5038", cursor:"pointer", fontSize:"1.3rem" }
          }, "\u2715")
        ),
        // Map area
        React.createElement("div", { style:{ position:"relative", width:"100%", height:"min(620px, 80vh)",
          background:"linear-gradient(180deg, #0e1a08 0%, #141c0a 40%, #1a1e10 100%)", overflow:"hidden" } },
          // Kennel buildings
          (function(){
            // Flex-wrap layout — elite kennels are double-wide
            return React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", justifyContent:"center",
              alignItems:"flex-start", gap:"16px 20px", padding:"24px 20px", height:"100%", alignContent:"center" } },
            kennels.map(function(k, idx) {
              var kt = KENNEL_TYPES[k.type] || { label:k.type, capacity:10, color:"#8a7055", icon:"\uD83C\uDFDA\uFE0F", cost:0 };
              var cnt = animals.filter(function(a){ return !a.retired && a.kennelId === k.id; }).length;
              var pct = kt.capacity > 0 ? Math.round(cnt / kt.capacity * 100) : 0;
              var barColor = pct >= 90 ? "#ef4444" : pct >= 70 ? "#f59e0b" : "#22c55e";
              var males = animals.filter(function(a){ return !a.retired && a.kennelId === k.id && a.sex === "M"; }).length;
              var females = cnt - males;

              // Runs per tier
              var numRuns = k.type === "elite" ? 8 : k.type === "commercial" ? 5 : 4;
              // Elite is double width
              var isElite = k.type === "elite";
              var cardW = isElite ? "min(420px, 46%)" : "min(200px, 30%)";

              // SVG dimensions — wider viewBox for more runs
              var svgW = 20 + numRuns * 20;
              var svgH = 100;
              var wallLeft = 10; var wallRight = svgW - 10; var wallW = wallRight - wallLeft;
              var roofPeak = svgW / 2;

              // Tier-specific colors
              var accentColor = kt.color;
              var wallFill, roofFill, roofEdge, wireFill, trimFill;
              if (k.type === "elite") {
                wallFill = "#5a4428"; roofFill = "#8a6830"; roofEdge = "#b08040"; wireFill = "#c4956a"; trimFill = "#d4a050";
              } else if (k.type === "commercial") {
                wallFill = "#4a3820"; roofFill = "#6a5028"; roofEdge = "#8a6430"; wireFill = "#a08060"; trimFill = "#8a6430";
              } else if (k.type === "standard") {
                wallFill = "#3a2e1a"; roofFill = "#5a4422"; roofEdge = "#6a4e28"; wireFill = "#7a6a50"; trimFill = "#6a4e28";
              } else {
                wallFill = "#2e2414"; roofFill = "#4a3a1c"; roofEdge = "#5a4420"; wireFill = "#605040"; trimFill = "#5a4420";
              }
              var doorFill = "#1a1008";

              var svg = '<svg viewBox="0 0 '+svgW+' '+svgH+'" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">'
                // Foundation
                + '<rect x="3" y="72" width="'+(svgW-6)+'" height="25" fill="#0a1408" rx="3" stroke="#2a3a1a" stroke-width="0.8"/>'
                // Back wall
                + '<rect x="'+wallLeft+'" y="28" width="'+wallW+'" height="46" fill="'+wallFill+'" rx="1"/>';

              // Roof — basic/standard get a simpler flat-ish roof, commercial/elite get a peaked roof
              if (k.type === "basic") {
                // Simple lean-to roof (slightly sloped)
                svg += '<polygon points="'+(wallLeft-4)+',26 '+(wallRight+4)+',26 '+(wallRight+4)+',30 '+(wallLeft-4)+',28" fill="'+roofFill+'"/>';
                svg += '<line x1="'+(wallLeft-4)+'" y1="28" x2="'+(wallRight+4)+'" y2="26" stroke="'+roofEdge+'" stroke-width="1.5"/>';
              } else if (k.type === "standard") {
                // Low peaked roof
                svg += '<polygon points="'+roofPeak+',16 '+(wallRight+6)+',30 '+(wallLeft-6)+',30" fill="'+roofFill+'"/>';
                svg += '<polygon points="'+roofPeak+',16 '+(wallRight)+',28 '+(wallLeft)+',28" fill="'+roofEdge+'" opacity="0.5"/>';
                svg += '<line x1="'+(wallLeft-6)+'" y1="30" x2="'+(wallRight+6)+'" y2="30" stroke="'+roofEdge+'" stroke-width="1.5"/>';
              } else if (k.type === "commercial") {
                // Steeper peaked roof
                svg += '<polygon points="'+roofPeak+',10 '+(wallRight+8)+',30 '+(wallLeft-8)+',30" fill="'+roofFill+'"/>';
                svg += '<polygon points="'+roofPeak+',10 '+(wallRight+2)+',27 '+(wallLeft-2)+',27" fill="'+roofEdge+'" opacity="0.5"/>';
                svg += '<line x1="'+(wallLeft-8)+'" y1="30" x2="'+(wallRight+8)+'" y2="30" stroke="'+roofEdge+'" stroke-width="1.8"/>';
              } else {
                // Elite — tall peaked roof with ridge vent
                svg += '<polygon points="'+roofPeak+',6 '+(wallRight+10)+',30 '+(wallLeft-10)+',30" fill="'+roofFill+'"/>';
                svg += '<polygon points="'+roofPeak+',6 '+(wallRight+3)+',26 '+(wallLeft-3)+',26" fill="'+roofEdge+'" opacity="0.5"/>';
                svg += '<line x1="'+(wallLeft-10)+'" y1="30" x2="'+(wallRight+10)+'" y2="30" stroke="'+trimFill+'" stroke-width="2"/>';
                // Ridge vent / cupola
                svg += '<rect x="'+(roofPeak-6)+'" y="2" width="12" height="6" fill="'+trimFill+'" rx="1"/>';
                svg += '<rect x="'+(roofPeak-4)+'" y="3" width="8" height="4" fill="'+doorFill+'" rx="0.5"/>';
              }

              // Shadow under eave
              svg += '<rect x="'+(wallLeft-2)+'" y="30" width="'+(wallW+4)+'" height="2" fill="rgba(0,0,0,0.25)" rx="0.5"/>';

              // Wire panel runs
              var runW = wallW / numRuns;
              for (var ri = 0; ri < numRuns; ri++) {
                var rx = wallLeft + ri * runW;
                // Run panel
                svg += '<rect x="'+rx+'" y="32" width="'+runW+'" height="40" fill="'+doorFill+'" stroke="'+wireFill+'" stroke-width="0.8" rx="0.5"/>';
                // Wire mesh — horizontal
                var meshLines = k.type === "basic" ? 3 : 4;
                for (var wi = 0; wi < meshLines; wi++) {
                  var wy = 36 + wi * (32 / meshLines);
                  svg += '<line x1="'+(rx+1)+'" y1="'+wy+'" x2="'+(rx+runW-1)+'" y2="'+wy+'" stroke="'+wireFill+'" stroke-width="0.35" opacity="'+(k.type==="basic"?"0.3":"0.45")+'"/>';
                }
                // Wire mesh — vertical
                var vLines = k.type === "basic" ? 2 : 3;
                for (var vi = 1; vi <= vLines; vi++) {
                  var vx = rx + vi * (runW / (vLines + 1));
                  svg += '<line x1="'+vx+'" y1="32" x2="'+vx+'" y2="72" stroke="'+wireFill+'" stroke-width="0.3" opacity="'+(k.type==="basic"?"0.25":"0.35")+'"/>';
                }
                // Gate door
                var gateW = Math.min(runW * 0.55, 14);
                var gateX = rx + (runW - gateW) / 2;
                svg += '<rect x="'+gateX+'" y="56" width="'+gateW+'" height="16" fill="'+doorFill+'" stroke="'+accentColor+'" stroke-width="0.7" rx="1"/>';
                // Door handle
                svg += '<circle cx="'+(gateX + gateW - 2.5)+'" cy="64" r="1" fill="'+accentColor+'"/>';
              }

              // Frame posts
              svg += '<line x1="'+wallLeft+'" y1="28" x2="'+wallLeft+'" y2="74" stroke="'+wallFill+'" stroke-width="2.2"/>';
              svg += '<line x1="'+wallRight+'" y1="28" x2="'+wallRight+'" y2="74" stroke="'+wallFill+'" stroke-width="2.2"/>';
              for (var pi = 1; pi < numRuns; pi++) {
                var px = wallLeft + pi * runW;
                svg += '<line x1="'+px+'" y1="28" x2="'+px+'" y2="74" stroke="'+wallFill+'" stroke-width="1.8"/>';
              }

              // Elite gets decorative side trim
              if (k.type === "elite") {
                svg += '<line x1="'+(wallLeft+1)+'" y1="33" x2="'+(wallLeft+1)+'" y2="72" stroke="'+trimFill+'" stroke-width="0.6" opacity="0.4"/>';
                svg += '<line x1="'+(wallRight-1)+'" y1="33" x2="'+(wallRight-1)+'" y2="72" stroke="'+trimFill+'" stroke-width="0.6" opacity="0.4"/>';
              }

              svg += '</svg>';

              return React.createElement("div", {
                key: k.id,
                style: { width:cardW, cursor:"pointer", transition:"transform 0.15s ease, filter 0.15s ease", flexShrink:0 },
                onMouseEnter: function(e){ e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.filter = "drop-shadow(0 6px 16px rgba(212,148,42,0.3))"; },
                onMouseLeave: function(e){ e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "none"; },
                onClick: function(){ setShowKennelMap(false); onClose(); onNavigate("kennel", k.id); }
              },
                // SVG building
                React.createElement("div", {
                  style: { width:"100%", pointerEvents:"none" },
                  dangerouslySetInnerHTML: { __html: svg }
                }),
                // Info below
                React.createElement("div", { style:{ textAlign:"center", pointerEvents:"none", marginTop:2 } },
                  React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.8rem",
                    textShadow:"0 1px 4px rgba(0,0,0,0.9)", lineHeight:1.2 } }, k.name || kt.label),
                  React.createElement("div", { style:{ color:kt.color, fontSize:"0.58rem", textTransform:"uppercase",
                    letterSpacing:"0.04em", textShadow:"0 1px 3px rgba(0,0,0,0.9)", marginBottom:3 } }, kt.label),
                  // Capacity bar
                  React.createElement("div", { style:{ width:"70%", margin:"0 auto", height:5, background:"#1a1410",
                    borderRadius:3, overflow:"hidden", border:"1px solid #2a1e10" } },
                    React.createElement("div", { style:{ height:"100%", width:Math.max(3,pct)+"%", background:barColor, borderRadius:2 } })
                  ),
                  // Stats
                  React.createElement("div", { style:{ display:"flex", justifyContent:"center", gap:6, marginTop:3, fontSize:"0.65rem" } },
                    React.createElement("span", { style:{ color:"#60a5fa" } }, "\u2642"+males),
                    React.createElement("span", { style:{ color:"#f472b6" } }, "\u2640"+females),
                    React.createElement("span", { style:{ color: pct>=90?"#ef4444":"#b09070", fontWeight:"bold" } }, cnt+"/"+kt.capacity)
                  )
                )
              );
            })
            );
          })()
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// NEW BREED RECOGNITION SYSTEM
// ══════════════════════════════════════════════════════════════════════════════

function getLineKey(animal, allAnimals) {
  if (!animal.isMixed) return null;
  var pcts = getBreedPctList(animal, allAnimals);
  if (pcts.length <= 1) return null;
  var names = pcts.map(function(p){ return p.breed; }).sort();
  return names.join(" + ");
}

function detectBreedingLines(allAnimals) {
  var lines = {};
  var living = allAnimals.filter(function(a){ return !a.retired; });
  living.forEach(function(a) {
    var key = getLineKey(a, allAnimals);
    if (!key) return;
    if (!lines[key]) lines[key] = { key: key, members: [] };
    lines[key].members.push(a);
  });
  return Object.keys(lines).map(function(k){ return lines[k]; })
    .filter(function(line){ return line.members.length >= 2; })
    .sort(function(a,b){ return b.members.length - a.members.length; });
}

var BREED_CRITERIA = {
  MIN_POPULATION: 10,
  MIN_GENERATION: 6,
  MAX_SIZE_CV: 15,
  MAX_HEIGHT_CV: 12,
  MIN_AVG_HEALTH: 60,
  MAX_AVG_COI: 25
};

function evaluateBreedLine(line, allAnimals) {
  var members = line.members;
  var count = members.length;
  var maxGen = members.reduce(function(m, a){ return Math.max(m, a.generation || 1); }, 1);
  var weights = members.map(function(a){ return a.adultWeight || SIZE_STANDARDS[a.size||"M"].weightAvg; });
  var heights = members.map(function(a){ return a.adultHeight || SIZE_STANDARDS[a.size||"M"].heightAvg; });
  var avgW = weights.reduce(function(s,v){ return s+v; }, 0) / count;
  var avgH = heights.reduce(function(s,v){ return s+v; }, 0) / count;
  var sdW = Math.sqrt(weights.reduce(function(s,v){ return s + (v-avgW)*(v-avgW); }, 0) / count);
  var sdH = Math.sqrt(heights.reduce(function(s,v){ return s + (v-avgH)*(v-avgH); }, 0) / count);
  var cvW = avgW > 0 ? (sdW / avgW) * 100 : 100;
  var cvH = avgH > 0 ? (sdH / avgH) * 100 : 100;
  var popPass = count >= BREED_CRITERIA.MIN_POPULATION;
  var genPass = maxGen >= BREED_CRITERIA.MIN_GENERATION;
  var sizePass = cvW <= BREED_CRITERIA.MAX_SIZE_CV && cvH <= BREED_CRITERIA.MAX_HEIGHT_CV;
  var avgHealth = members.reduce(function(s, a){ return s + (a.healthScore || 0); }, 0) / count;
  var healthPass = avgHealth >= BREED_CRITERIA.MIN_AVG_HEALTH;
  var avgCOI = members.reduce(function(s, a){ return s + (a.coi || 0); }, 0) / count;
  var coiPass = avgCOI <= BREED_CRITERIA.MAX_AVG_COI;
  var perfs = members.map(function(a){ return a.perfScore || 0; });
  var avgPerf = perfs.reduce(function(s,v){ return s+v; }, 0) / count;
  var sdPerf = Math.sqrt(perfs.reduce(function(s,v){ return s + (v-avgPerf)*(v-avgPerf); }, 0) / count);
  var cvPerf = avgPerf > 0 ? (sdPerf / avgPerf) * 100 : 100;
  var traitPass = cvPerf <= 25;
  var allPass = popPass && genPass && sizePass && healthPass && coiPass && traitPass;
  var sizeCounts = {};
  members.forEach(function(a){ var sz = a.size || "M"; sizeCounts[sz] = (sizeCounts[sz]||0)+1; });
  var dominantSize = Object.keys(sizeCounts).sort(function(a,b){ return sizeCounts[b]-sizeCounts[a]; })[0] || "M";
  var colorCounts = {};
  members.forEach(function(a){ var c = a.coatColor || "Unknown"; colorCounts[c] = (colorCounts[c]||0)+1; });
  var breedColors = Object.keys(colorCounts).sort(function(a,b){ return colorCounts[b]-colorCounts[a]; }).slice(0, 8);
  var coatTypes = {};
  members.forEach(function(a) {
    if (a.genome && a.genome.coat && a.genome.coat.L) {
      var hasLong = (a.genome.coat.L[0] === "l" && a.genome.coat.L[1] === "l");
      coatTypes[hasLong ? "long" : "short"] = (coatTypes[hasLong ? "long" : "short"] || 0) + 1;
    }
  });
  var dominantCoat = Object.keys(coatTypes).sort(function(a,b){ return coatTypes[b]-coatTypes[a]; })[0] || "short";
  var aptSet = {};
  var founderBreeds = line.key.split(" + ");
  founderBreeds.forEach(function(bName) {
    var bd = (typeof DEMO_BREEDS !== "undefined" ? DEMO_BREEDS : []).find(function(b){ return b.name === bName; });
    if (bd && bd.aptitudes) bd.aptitudes.forEach(function(apt){ aptSet[apt] = true; });
  });
  return {
    ready: allPass, founderBreeds: founderBreeds, count: count, maxGeneration: maxGen,
    dominantSize: dominantSize, dominantCoat: dominantCoat, breedColors: breedColors,
    aptitudes: Object.keys(aptSet), avgWeight: Math.round(avgW), avgHeight: Math.round(avgH*10)/10,
    avgHealth: Math.round(avgHealth), avgPerf: Math.round(avgPerf), avgCOI: Math.round(avgCOI*10)/10,
    criteria: {
      population: { pass: popPass, value: count, target: BREED_CRITERIA.MIN_POPULATION,
        msg: popPass ? count+" dogs in line" : "Need "+(BREED_CRITERIA.MIN_POPULATION-count)+" more dogs in this line" },
      generation: { pass: genPass, value: maxGen, target: BREED_CRITERIA.MIN_GENERATION,
        msg: genPass ? "Generation "+maxGen : "Deepest generation is "+maxGen+" \u2014 need at least "+BREED_CRITERIA.MIN_GENERATION },
      size: { pass: sizePass, value: Math.round(Math.max(cvW, cvH)),
        msg: sizePass ? "Size is consistent (weight \u00B1"+Math.round(sdW)+"lb, height \u00B1"+(Math.round(sdH*10)/10)+"in)"
          : "Size varies too much \u2014 keep selecting for dogs closer to "+Math.round(avgW)+"lb / "+(Math.round(avgH*10)/10)+"in" },
      health: { pass: healthPass, value: Math.round(avgHealth),
        msg: healthPass ? "Avg health "+Math.round(avgHealth)+"/100"
          : "Average health is "+Math.round(avgHealth)+" \u2014 breed from your healthiest dogs" },
      coi: { pass: coiPass, value: Math.round(avgCOI*10)/10,
        msg: coiPass ? "Avg COI "+(Math.round(avgCOI*10)/10)+"%"
          : "Average COI is "+(Math.round(avgCOI*10)/10)+"% \u2014 introduce less-related pairs to bring it down" },
      traits: { pass: traitPass, value: Math.round(cvPerf),
        msg: traitPass ? "Performance scores are stable"
          : "Performance scores vary too much \u2014 select breeding pairs with similar working ability" }
    }
  };
}

function buildCustomBreed(name, group, evaluation) {
  var sizeStd = SIZE_STANDARDS[evaluation.dominantSize] || SIZE_STANDARDS["M"];
  return {
    name: name, group: group || "Miscellaneous", size: evaluation.dominantSize,
    coat: evaluation.dominantCoat, colors: evaluation.breedColors,
    traits: { intelligence:5,energy:5,trainability:5,loyalty:5,playfulness:5,aggression:3,preyDrive:4,barkTendency:4,sociability:5,adaptability:5 },
    health: { hips:Math.min(95,evaluation.avgHealth), eyes:Math.min(95,evaluation.avgHealth),
      heart:Math.min(95,evaluation.avgHealth), joints:Math.min(95,evaluation.avgHealth) },
    aptitudes: evaluation.aptitudes, sizeAvg: evaluation.avgWeight,
    sizeRange: [Math.round(evaluation.avgWeight*0.8), Math.round(evaluation.avgWeight*1.2)],
    founderCOI: evaluation.avgCOI, isCustom: true, founderBreeds: evaluation.founderBreeds,
    createdAt: new Date().toISOString()
  };
}

function BreedProgramPanel(_ref_bp) {
  var animals = _ref_bp.animals;
  var customBreeds = _ref_bp.customBreeds || [];
  var onDeclareBreed = _ref_bp.onDeclareBreed;
  var onClose = _ref_bp.onClose;
  var _bpLines = _slicedToArray(React.useState(null), 2), lineData = _bpLines[0], setLineData = _bpLines[1];
  var _bpSel = _slicedToArray(React.useState(null), 2), selectedLine = _bpSel[0], setSelectedLine = _bpSel[1];
  var _bpName = _slicedToArray(React.useState(""), 2), newBreedName = _bpName[0], setNewBreedName = _bpName[1];
  var _bpGroup = _slicedToArray(React.useState("Miscellaneous"), 2), newBreedGroup = _bpGroup[0], setNewBreedGroup = _bpGroup[1];
  var _bpConfirm = _slicedToArray(React.useState(false), 2), showConfirm = _bpConfirm[0], setShowConfirm = _bpConfirm[1];
  React.useEffect(function() {
    var lines = detectBreedingLines(animals);
    var evaluated = lines.map(function(line) { return { line: line, eval: evaluateBreedLine(line, animals) }; });
    setLineData(evaluated);
  }, [animals]);
  if (!lineData) return React.createElement("div", { style:{ color:"#6b5038", padding:40, textAlign:"center" } }, "Analyzing breeding lines\u2026");
  var activeLine = selectedLine !== null ? lineData[selectedLine] : null;
  var nameExists = newBreedName.trim() && (
    (typeof DEMO_BREEDS !== "undefined" ? DEMO_BREEDS : []).some(function(b){ return b.name.toLowerCase() === newBreedName.trim().toLowerCase(); })
    || customBreeds.some(function(b){ return b.name.toLowerCase() === newBreedName.trim().toLowerCase(); })
  );
  function handleDeclare() {
    if (!activeLine || !activeLine.eval.ready) return;
    var trimmed = newBreedName.trim();
    if (!trimmed) { alert("Give your new breed a name first!"); return; }
    if (nameExists) { alert("That breed name already exists. Pick something unique!"); return; }
    var breed = buildCustomBreed(trimmed, newBreedGroup, activeLine.eval);
    onDeclareBreed(breed, activeLine.line.key, activeLine.line.members);
    setShowConfirm(false); setSelectedLine(null); setNewBreedName("");
  }
  var AKC_GROUP_OPTIONS = ["Herding","Hound","Non-Sporting","Sporting","Terrier","Toy","Working","Miscellaneous"];
  return React.createElement("div", {
    style: { position:"fixed", inset:0, background:"rgba(0,0,0,0.88)", zIndex:200,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 },
    onClick: onClose
  },
    React.createElement("div", {
      style: { background:"#1a1410", border:"2px solid #4a3a28", borderRadius:14,
        padding:0, maxWidth:720, width:"96%", maxHeight:"88vh", overflow:"hidden",
        boxShadow:"0 8px 40px rgba(0,0,0,0.8)", display:"flex", flexDirection:"column" },
      onClick: function(e){ e.stopPropagation(); }
    },
      React.createElement("div", {
        style: { padding:"16px 20px", borderBottom:"1px solid #2a1e10",
          display:"flex", alignItems:"center", justifyContent:"space-between" }
      },
        React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
          React.createElement("span", { style:{ fontSize:"1.4rem" } }, "\uD83E\uDDEC"),
          React.createElement("div", null,
            React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"1.05rem" } }, "Breeding Program"),
            React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
              lineData.length > 0
                ? lineData.length + " active line" + (lineData.length !== 1 ? "s" : "") + " detected"
                : "No mixed-breed lines detected yet")
          )
        ),
        React.createElement("button", {
          onClick: onClose,
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
            borderRadius:8, padding:"6px 14px", cursor:"pointer", fontSize:"0.8rem" }
        }, "\u2715 Close")
      ),
      React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"16px 20px" } },
        lineData.length === 0 && React.createElement("div", {
          style:{ textAlign:"center", padding:"40px 20px", color:"#6b5038" }
        },
          React.createElement("div", { style:{ fontSize:"2rem", marginBottom:12 } }, "\uD83D\uDC3E"),
          React.createElement("div", { style:{ fontSize:"0.9rem", marginBottom:8, color:"#8a7055" } }, "No breeding lines found"),
          React.createElement("div", { style:{ fontSize:"0.78rem", lineHeight:"1.5" } },
            "Cross two different breeds to start a line. Keep breeding their offspring together over multiple generations. When the line produces consistent dogs, it can be recognized as a new breed.")
        ),
        customBreeds.length > 0 && React.createElement("div", { style:{ marginBottom:20 } },
          React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.82rem", marginBottom:8, display:"flex", alignItems:"center", gap:6 } },
            React.createElement("span", null, "\u2705"), "Established Breeds (" + customBreeds.length + ")"),
          customBreeds.map(function(cb, i) {
            return React.createElement("div", { key:"cb-"+i,
              style:{ background:"#0a1a0a", border:"1px solid #166534", borderRadius:8,
                padding:"10px 14px", marginBottom:6, display:"flex", alignItems:"center", justifyContent:"space-between" }
            },
              React.createElement("div", null,
                React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.85rem" } }, cb.name),
                React.createElement("div", { style:{ color:"#4a6a18", fontSize:"0.7rem" } },
                  cb.group + " \u00B7 " + cb.size + " \u00B7 Founded from " + (cb.founderBreeds || []).join(" \u00D7 "))
              ),
              React.createElement("div", { style:{ color:"#166534", fontSize:"0.7rem", fontWeight:"bold" } }, "\uD83C\uDFC6 Recognized")
            );
          })
        ),
        lineData.length > 0 && React.createElement("div", null,
          React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.82rem", marginBottom:10 } }, "Active Breeding Lines"),
          lineData.map(function(item, idx) {
            var ev = item.eval;
            var isSelected = selectedLine === idx;
            var passCount = Object.keys(ev.criteria).filter(function(k){ return ev.criteria[k].pass; }).length;
            var totalCriteria = Object.keys(ev.criteria).length;
            return React.createElement("div", { key:"line-"+idx },
              React.createElement("div", {
                onClick: function(){ setSelectedLine(isSelected ? null : idx); setShowConfirm(false); },
                style:{ background: isSelected ? "#1e1a12" : "#141008", border:"1px solid " + (ev.ready ? "#22c55e" : "#4a3a28"),
                  borderRadius:10, padding:"12px 16px", marginBottom:8, cursor:"pointer", transition:"all 0.2s" }
              },
                React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:6 } },
                  React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:8 } },
                    React.createElement("span", { style:{ fontSize:"1.1rem" } }, ev.ready ? "\u2705" : "\uD83D\uDD2C"),
                    React.createElement("div", null,
                      React.createElement("div", { style:{ color: ev.ready ? "#22c55e" : "#e8d0a8", fontWeight:"bold", fontSize:"0.88rem" } },
                        item.line.key.replace(/ \+ /g, " \u00D7 ")),
                      React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem" } },
                        ev.count + " dogs \u00B7 Gen " + ev.maxGeneration + " \u00B7 Avg " + ev.avgWeight + "lb / " + ev.avgHeight + "in")
                    )
                  ),
                  React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6 } },
                    React.createElement("div", {
                      style:{ background: ev.ready ? "#0a2a0a" : "#1a1008", border:"1px solid " + (ev.ready ? "#22c55e" : "#4a3a28"),
                        borderRadius:6, padding:"4px 10px", fontSize:"0.72rem", fontWeight:"bold",
                        color: ev.ready ? "#22c55e" : "#d4942a" }
                    }, ev.ready ? "Ready" : passCount + "/" + totalCriteria),
                    React.createElement("span", { style:{ color:"#4a3a28", fontSize:"0.8rem" } }, isSelected ? "\u25B2" : "\u25BC")
                  )
                )
              ),
              isSelected && React.createElement("div", {
                style:{ background:"#0e0c08", border:"1px solid #2a1e10", borderRadius:10,
                  padding:"16px", marginBottom:12, marginTop:-4 }
              },
                React.createElement("div", { style:{ marginBottom:16 } },
                  React.createElement("div", { style:{ color:"#8a7055", fontWeight:"bold", fontSize:"0.75rem", marginBottom:10,
                    textTransform:"uppercase", letterSpacing:"0.06em" } }, "Breed Standard Criteria"),
                  Object.keys(ev.criteria).map(function(key) {
                    var c = ev.criteria[key];
                    var labels = { population:"Population", generation:"Generations", size:"Size Consistency",
                      health:"Health", coi:"Genetic Diversity", traits:"Trait Stability" };
                    return React.createElement("div", { key:key,
                      style:{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:8, padding:"6px 0",
                        borderBottom:"1px solid #1a1610" }
                    },
                      React.createElement("span", { style:{ fontSize:"0.9rem", flexShrink:0, marginTop:1 } }, c.pass ? "\u2705" : "\u274C"),
                      React.createElement("div", { style:{ flex:1 } },
                        React.createElement("div", { style:{ color: c.pass ? "#22c55e" : "#e8d0a8", fontWeight:"bold", fontSize:"0.8rem" } }, labels[key] || key),
                        React.createElement("div", { style:{ color: c.pass ? "#4a6a18" : "#8a7055", fontSize:"0.72rem", marginTop:2 } }, c.msg)
                      )
                    );
                  })
                ),
                React.createElement("div", {
                  style:{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))", gap:8, marginBottom:16 }
                },
                  [
                    { label:"Avg Weight", value: ev.avgWeight + " lb", color:"#e8d0a8" },
                    { label:"Avg Height", value: ev.avgHeight + " in", color:"#e8d0a8" },
                    { label:"Avg Health", value: ev.avgHealth + "/100", color: ev.avgHealth >= 60 ? "#22c55e" : "#ef4444" },
                    { label:"Avg Perf", value: ev.avgPerf + "/100", color:"#7dd3fc" },
                    { label:"Avg COI", value: ev.avgCOI + "%", color: ev.avgCOI < 10 ? "#22c55e" : ev.avgCOI < 25 ? "#d4960a" : "#ef4444" },
                    { label:"Coat Colors", value: ev.breedColors.length + " seen", color:"#a78bfa" }
                  ].map(function(s, i) {
                    return React.createElement("div", { key:"stat-"+i,
                      style:{ background:"#141008", border:"1px solid #1a1610", borderRadius:6, padding:"8px 10px", textAlign:"center" }
                    },
                      React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.6rem", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:3 } }, s.label),
                      React.createElement("div", { style:{ color: s.color, fontWeight:"bold", fontSize:"0.85rem" } }, s.value)
                    );
                  })
                ),
                ev.breedColors.length > 0 && React.createElement("div", { style:{ marginBottom:16 } },
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.7rem", marginBottom:6 } }, "Coat colors in this line:"),
                  React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:4 } },
                    ev.breedColors.map(function(c, i) {
                      return React.createElement("span", { key:"color-"+i,
                        style:{ background:"#1a1610", border:"1px solid #2a1e10", borderRadius:4,
                          padding:"2px 8px", fontSize:"0.68rem", color:"#e8d0a8" } }, c);
                    })
                  )
                ),
                ev.ready && !showConfirm && React.createElement("button", {
                  onClick: function(){ setShowConfirm(true); setNewBreedName(""); setNewBreedGroup("Miscellaneous"); },
                  style:{ width:"100%", padding:"12px", background:"#0a2a0a", border:"2px solid #22c55e",
                    color:"#22c55e", borderRadius:10, cursor:"pointer", fontWeight:"bold",
                    fontSize:"0.9rem", letterSpacing:"0.03em" }
                }, "\uD83C\uDFC6 Declare New Breed"),
                ev.ready && showConfirm && React.createElement("div", {
                  style:{ background:"#0a1a0a", border:"1px solid #22c55e", borderRadius:10, padding:16 }
                },
                  React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.88rem", marginBottom:12 } }, "Name Your New Breed"),
                  React.createElement("div", { style:{ marginBottom:10 } },
                    React.createElement("label", { style:{ color:"#6b5038", fontSize:"0.7rem", display:"block", marginBottom:4 } }, "Breed Name"),
                    React.createElement("input", {
                      type:"text", value: newBreedName,
                      onChange: function(e){ setNewBreedName(e.target.value); },
                      placeholder: "e.g. Carolina Mountain Dog", maxLength: 40,
                      style:{ width:"100%", padding:"8px 12px", background:"#141008",
                        border:"1px solid " + (nameExists ? "#ef4444" : "#4a3a28"),
                        borderRadius:6, color:"#f0e6d3", fontSize:"0.85rem", outline:"none", boxSizing:"border-box" }
                    }),
                    nameExists && React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.68rem", marginTop:4 } }, "That name is already taken")
                  ),
                  React.createElement("div", { style:{ marginBottom:14 } },
                    React.createElement("label", { style:{ color:"#6b5038", fontSize:"0.7rem", display:"block", marginBottom:4 } }, "AKC Group"),
                    React.createElement("select", {
                      value: newBreedGroup, onChange: function(e){ setNewBreedGroup(e.target.value); },
                      style:{ width:"100%", padding:"8px 12px", background:"#141008", border:"1px solid #4a3a28",
                        borderRadius:6, color:"#f0e6d3", fontSize:"0.85rem", outline:"none" }
                    }, AKC_GROUP_OPTIONS.map(function(g) { return React.createElement("option", { key:g, value:g }, g); }))
                  ),
                  React.createElement("div", { style:{ display:"flex", gap:8 } },
                    React.createElement("button", {
                      onClick: handleDeclare, disabled: !newBreedName.trim() || nameExists,
                      style:{ flex:1, padding:"10px", background: (!newBreedName.trim()||nameExists) ? "#1a1610" : "#166534",
                        border:"1px solid #22c55e", color: (!newBreedName.trim()||nameExists) ? "#4a3a28" : "#fff",
                        borderRadius:8, cursor: (!newBreedName.trim()||nameExists) ? "not-allowed" : "pointer",
                        fontWeight:"bold", fontSize:"0.85rem" }
                    }, "\u2705 Confirm"),
                    React.createElement("button", {
                      onClick: function(){ setShowConfirm(false); },
                      style:{ padding:"10px 16px", background:"transparent", border:"1px solid #4a3a28",
                        color:"#8a7055", borderRadius:8, cursor:"pointer", fontSize:"0.82rem" }
                    }, "Cancel")
                  )
                ),
                !ev.ready && React.createElement("div", {
                  style:{ background:"#1a1408", border:"1px solid #4a3a28", borderRadius:8,
                    padding:"12px 14px", textAlign:"center" }
                },
                  React.createElement("div", { style:{ color:"#d4942a", fontSize:"0.8rem", fontWeight:"bold", marginBottom:4 } }, "Not ready yet"),
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
                    "Keep breeding this line. Focus on the criteria marked with \u274C above.")
                )
              )
            );
          })
        )
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CATTLE GENETICS ENGINE — loaded from cattle-data.js
// All cattle breed defs, genetics, shows, DNA panel, CattleCard, and CattleView
// are defined in cattle-data.js (loaded before game.js via script tag).
// ══════════════════════════════════════════════════════════════════════════════

// ── Slaughterhouse Tab ──────────────────────────────────────────────────────
function SlaughterhouseTab(props) {
  var livestock = props.livestock || [];
  var onSlaughter = props.onSlaughter;
  var onClose = props.onClose;
  var commodities = props.commodities || {};

  var _f = React.useState("all"), filterSp = _f[0], setFilterSp = _f[1];
  var _s = React.useState("species"), sortBy = _s[0], setSortBy = _s[1];

  // Only slaughterable species (no horses)
  var eligible = livestock.filter(function(a) {
    return !a.retiredLivestock && ["cow","pig","sheep","goat","duck","chicken"].indexOf(a.species) !== -1;
  });

  var filtered = filterSp === "all" ? eligible :
    eligible.filter(function(a){ return a.species === filterSp; });

  var sorted = filtered.slice().sort(function(a, b) {
    if (sortBy === "species") return (a.species||"").localeCompare(b.species||"");
    if (sortBy === "name") return (a.name||"").localeCompare(b.name||"");
    if (sortBy === "breed") return (a.breed||"").localeCompare(b.breed||"");
    if (sortBy === "health") return (b.healthScore||0) - (a.healthScore||0);
    if (sortBy === "perf") return (b.perfScore||0) - (a.perfScore||0);
    if (sortBy === "type") return (a.type||"").localeCompare(b.type||"");
    return 0;
  });

  var speciesCounts = {};
  eligible.forEach(function(a) {
    speciesCounts[a.species] = (speciesCounts[a.species] || 0) + 1;
  });

  var speciesIcons = { cow:"\uD83D\uDC04", pig:"\uD83D\uDC37", sheep:"\uD83D\uDC11", goat:"\uD83D\uDC10", duck:"\uD83E\uDD86", chicken:"\uD83D\uDC14" };
  var speciesLabels = { cow:"Cattle", pig:"Pigs", sheep:"Sheep", goat:"Goats", duck:"Ducks", chicken:"Chickens" };

  function getMeatInfo(animal) {
    if (typeof MEAT_PRICES === "undefined") return null;
    var meatDef = MEAT_PRICES[animal.species];
    if (!meatDef) return null;
    if (animal.species === "cow") return animal.type === "dairy" ? meatDef.dairy : meatDef;
    if (animal.species === "goat") return meatDef[animal.type] || meatDef;
    return meatDef;
  }

  return React.createElement("div", {
    style:{ position:"fixed", inset:0, background:"#141008", zIndex:80, display:"flex", flexDirection:"column", overflow:"hidden" }
  },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"12px 18px", borderBottom:"2px solid #4a1a0a", background:"#1a0a08", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.4rem" } }, "\uD83E\uDE78"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#ef4444", fontWeight:"bold", fontSize:"1.05rem" } }, "Slaughterhouse"),
          React.createElement("div", { style:{ color:"#6b3020", fontSize:"0.72rem" } },
            eligible.length + " animal" + (eligible.length!==1?"s":"") + " available for processing")
        )
      ),
      React.createElement("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\u2715 Close")
    ),

    // Commodity inventory bar
    React.createElement("div", { style:{ display:"flex", gap:10, padding:"8px 18px", borderBottom:"1px solid #2a1610",
      background:"#120808", flexWrap:"wrap", flexShrink:0 } },
      React.createElement("div", { style:{ color:"#6b3020", fontSize:"0.65rem", alignSelf:"center", marginRight:4 } }, "INVENTORY:"),
      ["beef","pork","lamb","chevon","chicken_meat","duck_meat"].map(function(key) {
        var amt = commodities[key] || 0;
        if (amt <= 0) return null;
        var labels = { beef:"Beef", pork:"Pork", lamb:"Lamb", chevon:"Chevon", chicken_meat:"Chicken", duck_meat:"Duck" };
        return React.createElement("span", { key:key, style:{ background:"#2a1008", border:"1px solid #4a2a10",
          borderRadius:4, padding:"2px 8px", fontSize:"0.68rem", color:"#e8a060" } },
          (labels[key]||key) + ": " + amt);
      })
    ),

    // Filter + sort bar
    React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6, padding:"8px 18px",
      borderBottom:"1px solid #2a1610", flexShrink:0, flexWrap:"wrap" } },
      React.createElement("button", { onClick:function(){ setFilterSp("all"); },
        style:{ background:filterSp==="all"?"#3a1a08":"transparent", border:"1px solid "+(filterSp==="all"?"#ef4444":"#4a3a28"),
          color:filterSp==="all"?"#ef4444":"#8a7055", borderRadius:6, padding:"3px 10px", cursor:"pointer", fontSize:"0.72rem" }
      }, "All (" + eligible.length + ")"),
      Object.keys(speciesCounts).sort().map(function(sp) {
        var active = filterSp === sp;
        return React.createElement("button", { key:sp, onClick:function(){ setFilterSp(sp); },
          style:{ background:active?"#3a1a08":"transparent", border:"1px solid "+(active?"#ef4444":"#4a3a28"),
            color:active?"#ef4444":"#8a7055", borderRadius:6, padding:"3px 10px", cursor:"pointer", fontSize:"0.72rem" }
        }, (speciesIcons[sp]||"") + " " + (speciesLabels[sp]||sp) + " (" + speciesCounts[sp] + ")");
      }),
      React.createElement("div", { style:{ flex:1 } }),
      React.createElement("select", {
        value:sortBy, onChange:function(e){ setSortBy(e.target.value); },
        style:{ background:"#1a0a08", border:"1px solid #4a2a10", color:"#e8d0a8",
          borderRadius:6, padding:"4px 8px", fontSize:"0.72rem" }
      },
        React.createElement("option", { value:"species" }, "Sort: Species"),
        React.createElement("option", { value:"name" }, "Sort: Name"),
        React.createElement("option", { value:"breed" }, "Sort: Breed"),
        React.createElement("option", { value:"health" }, "Sort: Health"),
        React.createElement("option", { value:"perf" }, "Sort: Perf"),
        React.createElement("option", { value:"type" }, "Sort: Type")
      )
    ),

    // Animal list
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"8px 18px" } },
      sorted.length === 0
        ? React.createElement("div", { style:{ textAlign:"center", color:"#6b3020", padding:"60px 0" } },
            React.createElement("div", { style:{ fontSize:"2rem", marginBottom:10 } }, "\uD83E\uDE78"),
            React.createElement("div", { style:{ color:"#8a5040", fontSize:"0.85rem" } },
              filterSp === "all" ? "No livestock available for processing" : "No " + (speciesLabels[filterSp]||filterSp).toLowerCase() + " available")
          )
        : sorted.map(function(a) {
            var meatInfo = getMeatInfo(a);
            var ageYrs = Math.round((a.ageMonths||0)/12*10)/10;
            var sexColor = a.sex === "M" ? "#60a5fa" : "#f472b6";
            var isPreg = !!(a.pregnantUntil && a.pregnantUntil > Date.now());
            return React.createElement("div", { key:a.id,
              style:{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px",
                background:"#1a0e08", border:"1px solid #2a1e10", borderRadius:8, marginBottom:6 }
            },
              // Species icon
              React.createElement("span", { style:{ fontSize:"1.4rem", flexShrink:0 } },
                speciesIcons[a.species] || "\uD83D\uDC04"),
              // Animal details
              React.createElement("div", { style:{ flex:1, minWidth:0 } },
                React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6, marginBottom:2 } },
                  React.createElement("span", { style:{ color:sexColor, fontSize:"0.8rem" } },
                    a.sex==="M"?"\u2642":"\u2640"),
                  React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.88rem" } },
                    a.name || "(unnamed)"),
                  isPreg && React.createElement("span", { style:{ color:"#f472b6", fontSize:"0.65rem", fontWeight:"bold" } }, "\uD83E\uDD30 Pregnant")
                ),
                React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.7rem" } },
                  a.breed + (a.type ? " \u00B7 " + (a.type==="dairy"?"Dairy":"Beef") : "") +
                  (a.coatColor ? " \u00B7 " + a.coatColor : "") +
                  " \u00B7 " + ageYrs + "y"),
                React.createElement("div", { style:{ display:"flex", gap:10, marginTop:3 } },
                  React.createElement("span", { style:{ color:"#22c55e", fontSize:"0.7rem", fontWeight:"bold" } },
                    "\u2764\uFE0F " + (a.healthScore||0)),
                  React.createElement("span", { style:{ color:"#d4942a", fontSize:"0.7rem", fontWeight:"bold" } },
                    "\u26A1 " + (a.perfScore||0)),
                  a.weightLbs && React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.7rem" } },
                    (a.weightLbs||0) + " lb")
                )
              ),
              // Meat yield info
              meatInfo && React.createElement("div", { style:{ textAlign:"right", flexShrink:0, marginRight:10 } },
                React.createElement("div", { style:{ color:"#e8a060", fontSize:"0.72rem", fontWeight:"bold" } },
                  meatInfo.label),
                React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem" } },
                  "Worth $" + meatInfo.price)
              ),
              // Slaughter button
              React.createElement("button", {
                onClick: function() { if (onSlaughter) onSlaughter(a); },
                disabled: isPreg,
                style:{ background: isPreg ? "#1a1008" : "#3a0a0a", border:"1px solid " + (isPreg ? "#2a2018" : "#ef4444"),
                  color: isPreg ? "#4a3a28" : "#ef4444", borderRadius:6, padding:"8px 14px",
                  cursor: isPreg ? "not-allowed" : "pointer", fontSize:"0.78rem", fontWeight:"bold", flexShrink:0 }
              }, isPreg ? "Pregnant" : "\uD83E\uDE78 Process")
            );
          })
    )
  );
}

// BUILD 1773620579 — cache bust

// ── Tutorial System ──────────────────────────────────────────────────────────
var TUTORIAL_CONTENT = {
  kennel: {
    title: "🏠 Your Kennel",
    bullets: [
      "This is where all your dogs live. Click any dog card to see their full stats.",
      "Each dog has a Health Score and Performance Score — higher is better for breeding and shows.",
      "Female dogs go into heat on a cycle. Watch the heat timer — you can only breed during heat.",
      "Dogs age in real time. One real-world day equals one game month. They retire around age 10.",
      "Buy more kennels from the Market to house more dogs."
    ]
  },
  breed: {
    title: "🐾 Breeding",
    bullets: [
      "Pick a Sire (male) and a Dam (female) — both must be healthy and the female must be in heat.",
      "The female needs a Whelping Kennel before you can breed. Buy one from the Market first.",
      "Litter size depends on breed, health, and a little luck. Some litters may have stillborns.",
      "Pups stay in the litter tab until you name them and move them to a kennel.",
      "Breeding too closely related dogs raises the COI (inbreeding coefficient) and lowers pup quality."
    ]
  },
  shows: {
    title: "🏆 Dog Shows",
    bullets: [
      "Enter your dogs in 7 event types: Conformation, Obedience, Schutzhund, Herding, Protection, Agility, and Scent Work.",
      "Dogs start at Novice level. Place in the top 3 and they advance to Advanced, then Master.",
      "Win 1st place at any level to earn a title prefix (like Ch., UD, or MX) on your dog's name.",
      "Each show type has a cooldown — you can't enter the same event every single day.",
      "Some events require a minimum Performance Score. Check your dog's stats before entering."
    ]
  },
  farm: {
    title: "🌾 The Farm",
    bullets: [
      "Buy livestock from the Market to earn daily income: chickens, ducks, goats, sheep, pigs, cattle, and horses.",
      "Seasons change every real-world day (one game month). Production slows in Winter.",
      "Sheep must be sheared manually each Spring — click the Shear button when it appears.",
      "Build a Storage Barn to increase how much commodity you can hold and earn bonus income.",
      "Commodities (eggs, milk, wool, etc.) accumulate daily and are sold automatically."
    ]
  },
  horses: {
    title: "🐴 Horses",
    bullets: [
      "Horses are high-value animals that produce income and can compete in horse shows.",
      "Mares can be bred to produce foals — foals take time to mature before they're useful.",
      "Horse shows work similarly to dog shows — enter, place, earn titles and prize money.",
      "Horses have their own health and performance stats separate from your dogs.",
      "Stabling capacity is limited — upgrade your facilities from the Market."
    ]
  },
  retired: {
    title: "🎖️ Retired Dogs",
    bullets: [
      "Dogs retire automatically when they reach old age, or you can retire them manually from their card.",
      "Retired dogs keep all their earned titles and show points on record.",
      "A retired dog's titles can pass lineage bonuses to their offspring if used for breeding before retirement.",
      "You can't enter retired dogs in shows, but their legacy lives on through their pups.",
      "Use the Retired tab to review your kennel's history and bloodline achievements."
    ]
  },
  log: {
    title: "📋 Activity Log",
    bullets: [
      "The log records everything that happens in your kennel — births, sales, income, show results.",
      "Farm income entries appear here daily so you always know what your animals earned.",
      "Show results are logged with placement, score, and any titles earned.",
      "The log keeps your 50 most recent entries so it stays manageable.",
      "Check here if something seems off — it's the paper trail for your whole operation."
    ]
  }
};

function TutorialModal(_ref_tut) {
  var tabKey = _ref_tut.tabKey;
  var onDismiss = _ref_tut.onDismiss;
  // useState MUST come before any early return (Rules of Hooks)
  var _cbState = _slicedToArray(React.useState(false), 2);
  var dontShow = _cbState[0];
  var setDontShow = _cbState[1];
  var content = TUTORIAL_CONTENT[tabKey];
  if (!content) return null;
  return React.createElement("div", {
    style: { position:"fixed", top:0, left:0, right:0, bottom:0,
      background:"rgba(0,0,0,0.65)", zIndex:9000,
      display:"flex", alignItems:"center", justifyContent:"center" },
    onClick: function(e){ if (e.target === e.currentTarget) onDismiss(dontShow); }
  },
    React.createElement("div", {
      style: { background:"#f5e6c8", border:"4px solid #3a1e08", borderRadius:10,
        padding:"28px 32px", maxWidth:520, width:"90%", boxShadow:"0 8px 32px rgba(0,0,0,0.7)" }
    },
      React.createElement("div", {
        style: { fontSize:"1.3rem", fontWeight:"bold", color:"#1a0a00",
          marginBottom:16, borderBottom:"2px solid #3a1e08", paddingBottom:10 }
      }, content.title),
      React.createElement("ul", { style:{ margin:"0 0 20px 0", paddingLeft:22 } },
        content.bullets.map(function(b, i) {
          return React.createElement("li", {
            key: i,
            style: { color:"#1a0a00", fontSize:"1rem", marginBottom:8, lineHeight:1.5 }
          }, b);
        })
      ),
      React.createElement("div", {
        style: { display:"flex", alignItems:"center", justifyContent:"space-between",
          borderTop:"2px solid #3a1e08", paddingTop:14 }
      },
        React.createElement("label", {
          style: { display:"flex", alignItems:"center", gap:8,
            color:"#1a0a00", fontSize:"0.95rem", cursor:"pointer", userSelect:"none" }
        },
          React.createElement("input", {
            type:"checkbox", checked:dontShow,
            onChange: function(e){ setDontShow(e.target.checked); },
            style:{ width:17, height:17, cursor:"pointer", accentColor:"#3a1e08" }
          }),
          "Don't show this again"
        ),
        React.createElement("button", {
          onClick: function(){ onDismiss(dontShow); },
          style: { background:"#3a1e08", color:"#f5e6c8", border:"none",
            borderRadius:6, padding:"8px 22px", fontSize:"1rem",
            fontWeight:"bold", cursor:"pointer" }
        }, "Got it!")
      )
    )
  );
}

function App(_ref_app) {
  var user = _ref_app ? _ref_app.user : null;
  var profile = _ref_app ? _ref_app.profile : null;
  var onLogout = _ref_app ? _ref_app.onLogout : function(){};
  var displayName = (profile && profile.display_name) ? profile.display_name : (user && user.email ? user.email.split("@")[0] : "Unknown");

  // ── Mobile detection ──
  var _isMobileState = _slicedToArray(React.useState(function(){ return window.innerWidth < 768; }), 2),
      isMobile = _isMobileState[0], setIsMobile = _isMobileState[1];
  var _mobileMenu = _slicedToArray(React.useState(false), 2),
      mobileMenuOpen = _mobileMenu[0], setMobileMenuOpen = _mobileMenu[1];
  React.useEffect(function() {
    function checkMobile() { setIsMobile(window.innerWidth < 768); }
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", function(){ setTimeout(checkMobile, 100); });
    return function() { window.removeEventListener("resize", checkMobile); };
  }, []);

  // PWA install prompt
  var _pwaPrompt = _slicedToArray(React.useState(null), 2), pwaInstallPrompt = _pwaPrompt[0], setPwaInstallPrompt = _pwaPrompt[1];
  React.useEffect(function() {
    function handleBIP(e) { e.preventDefault(); setPwaInstallPrompt(e); }
    window.addEventListener("beforeinstallprompt", handleBIP);
    return function() { window.removeEventListener("beforeinstallprompt", handleBIP); };
  }, []);
  function handlePwaInstall() {
    if (!pwaInstallPrompt) return;
    pwaInstallPrompt.prompt();
    pwaInstallPrompt.userChoice.then(function(result) {
      if (result.outcome === "accepted") setPwaInstallPrompt(null);
    });
  }
  // Inject pulse animation CSS + mobile CSS once
  React.useEffect(function() {
    if (document.getElementById("ba-pwa-css")) return;
    var s = document.createElement("style");
    s.id = "ba-pwa-css";
    s.textContent = "@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.7}}"
      + "@media(max-width:767px){"
      + "body{-webkit-text-size-adjust:100%;}"
      + "button,select,input{min-height:36px;}"
      + "select{font-size:16px!important;}"
      + "::-webkit-scrollbar{width:3px;height:3px;}"
      + ".ba-card{padding:8px!important;margin:4px 0!important;}"
      + "}";
    document.head.appendChild(s);
  }, []);
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
  var _useState17 = useState(_savedState && _savedState.tab ? _savedState.tab : "farm"),
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
  var _useStateFL = useState(function(){
    // Try main save first, then dedicated layout key as fallback
    if (_savedState && _savedState.farmLayout && Object.keys(_savedState.farmLayout).length > 0) return _savedState.farmLayout;
    try { var fl = localStorage.getItem("ba_farmLayout"); if (fl) return JSON.parse(fl); } catch(e){}
    return {};
  }),
    _useStateFL2 = _slicedToArray(_useStateFL, 2),
    farmLayout = _useStateFL2[0],
    setFarmLayout = _useStateFL2[1];
  var _useStateCOM = useState(_savedState ? _savedState.commodities || { milk:0, eggs:0, wool:0, honey:0, pork:0, beef:0, lamb:0, chevon:0, goat_milk:0, chicken_meat:0, duck_meat:0, mohair:0 } : { milk:0, eggs:0, wool:0, honey:0, pork:0, beef:0, lamb:0, chevon:0, goat_milk:0, chicken_meat:0, duck_meat:0, mohair:0 }),
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
  var _useStateCSD = useState(_savedState ? _savedState.cattleShowDates || {} : {}),
    _useStateCSD2 = _slicedToArray(_useStateCSD, 2),
    cattleShowDates = _useStateCSD2[0],
    setCattleShowDates = _useStateCSD2[1];
  var _useStateGSD = useState(_savedState ? _savedState.goatShowDates || {} : {}),
    _useStateGSD2 = _slicedToArray(_useStateGSD, 2),
    goatShowDates = _useStateGSD2[0],
    setGoatShowDates = _useStateGSD2[1];
  var _useStateSSD = useState(_savedState ? _savedState.sheepShowDates || {} : {}),
    _useStateSSD2 = _slicedToArray(_useStateSSD, 2),
    sheepShowDates = _useStateSSD2[0],
    setSheepShowDates = _useStateSSD2[1];
  var _useStatePSD = useState(_savedState ? _savedState.pigShowDates || {} : {}),
    _useStatePSD2 = _slicedToArray(_useStatePSD, 2),
    pigShowDates = _useStatePSD2[0],
    setPigShowDates = _useStatePSD2[1];
  var _useStatePF = useState(_savedState ? _savedState.pendingFoals || [] : []),
    _useStatePF2 = _slicedToArray(_useStatePF, 2),
    pendingFoals = _useStatePF2[0],
    setPendingFoals = _useStatePF2[1];
  var _useStateFC = useState(_savedState ? _savedState.foalCount || 0 : 0),
    _useStateFC2 = _slicedToArray(_useStateFC, 2),
    foalCount = _useStateFC2[0],
    setFoalCount = _useStateFC2[1];
  var _useStateTD = useState(_savedState ? _savedState.tutorialDismissed || {} : {}),
    _useStateTD2 = _slicedToArray(_useStateTD, 2),
    tutorialDismissed = _useStateTD2[0],
    setTutorialDismissed = _useStateTD2[1];
  var _useStateTA = useState(null),
    _useStateTA2 = _slicedToArray(_useStateTA, 2),
    activeTutorial = _useStateTA2[0],
    setActiveTutorial = _useStateTA2[1];
  var _useStateCL = useState(false),
    _useStateCL2 = _slicedToArray(_useStateCL, 2),
    showCatLady = _useStateCL2[0],
    setShowCatLady = _useStateCL2[1];
  // ── New Breed Recognition state ──────────────────────────────────────────
  var _useStateCB = useState(_savedState ? _savedState.customBreeds || [] : []),
    _useStateCB2 = _slicedToArray(_useStateCB, 2),
    customBreeds = _useStateCB2[0],
    setCustomBreeds = _useStateCB2[1];
  var _useStateBP = useState(false),
    _useStateBP2 = _slicedToArray(_useStateBP, 2),
    showBreedProgram = _useStateBP2[0],
    setShowBreedProgram = _useStateBP2[1];
  var _useStateUM = useState(0),
    _useStateUM2 = _slicedToArray(_useStateUM, 2),
    unreadMail = _useStateUM2[0],
    setUnreadMail = _useStateUM2[1];
  var _useStateCFD = useState("all"),
    _useStateCFD2 = _slicedToArray(_useStateCFD, 2),
    cattleFilterDefault = _useStateCFD2[0],
    setCattleFilterDefault = _useStateCFD2[1];
  var _useStateBPN = useState(null),
    _useStateBPN2 = _slicedToArray(_useStateBPN, 2),
    breedLineNotify = _useStateBPN2[0],
    setBreedLineNotify = _useStateBPN2[1];
  // ────────────────────────────────────────────────────────────────────────
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
  var _useStateFRND = useState(false),
    _useStateFRND2 = _slicedToArray(_useStateFRND, 2),
    showFriends = _useStateFRND2[0],
    setShowFriends = _useStateFRND2[1];
  var _useStateOL = useState(function() {
    var ls = _savedState ? _savedState.ownedLivestock || [] : [];
    // Heal all livestock: fix missing ages, normalize those lacking genetics
    return ls.map(function(a) {
      if (a.species === "cow" && (!a.ageMonths || a.ageMonths < 1)) {
        a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*48) + 18 });
      }
      if (a.species === "cow" && !a.genome && typeof normalizeCattle === "function") {
        a = normalizeCattle(a);
      }
      if (a.species === "goat" && (!a.ageMonths || a.ageMonths < 1)) {
        a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*36) + 8 });
      }
      if (a.species === "goat" && !a.genome && typeof normalizeGoat === "function") {
        a = normalizeGoat(a);
      }
      if (a.species === "sheep" && !a.genome && typeof normalizeSheep === "function") {
        a = normalizeSheep(a);
      }
      if (a.species === "pig" && !a.genome && typeof normalizePig === "function") {
        a = normalizePig(a);
      }
      if (a.species === "duck" && !a.genome && typeof normalizeDuck === "function") {
        a = normalizeDuck(a);
      }
      if (a.species === "horse" && (!a.ageMonths || a.ageMonths < 1)) {
        a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*48) + 18 });
      }
      if (a.species === "horse" && !a.genome && typeof normalizeHorse === "function") {
        a = normalizeHorse(a);
      }
      return a;
    });
  }),
    _useStateOL2 = _slicedToArray(_useStateOL, 2),
    ownedLivestock = _useStateOL2[0],
    setOwnedLivestock = _useStateOL2[1];
  var _useStateNM = useState(_savedState ? _savedState.naturalMating || {} : {}),
    _useStateNM2 = _slicedToArray(_useStateNM, 2),
    naturalMating = _useStateNM2[0],
    setNaturalMating = _useStateNM2[1];
  var _useStatePC = useState(_savedState ? _savedState.pendingCalves || [] : []),
    _useStatePC2 = _slicedToArray(_useStatePC, 2),
    pendingCalves = _useStatePC2[0],
    setPendingCalves = _useStatePC2[1];
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
    // Merge any custom breeds from save with DEMO_BREEDS, then profile all
    var allBreeds = DEMO_BREEDS.slice();
    if (customBreeds && customBreeds.length > 0) {
      var existing = new Set(allBreeds.map(function(b){ return b.name.toLowerCase(); }));
      customBreeds.forEach(function(cb) {
        if (!existing.has(cb.name.toLowerCase())) {
          allBreeds.push(cb);
          existing.add(cb.name.toLowerCase());
        }
      });
    }
    var profiled = allBreeds.map(function(b){return assignGeneticProfile(b);});
    setBreeds(profiled);
  }, []);

  // ── Cloud load on mount — compare savedAt, use newer ──────
  useEffect(function() {
    if (!user || !window.baSupabaseSync) return;
    window.baSupabaseSync.loadFromCloud(user.id).then(function(cloud) {
      if (!cloud || !cloud.full_state) return;
      var cs = cloud.full_state;
      var localSaved = _savedState ? (_savedState.savedAt || 0) : 0;
      var cloudSaved = cs.savedAt || 0;
      if (cloudSaved > localSaved) {
        console.log("[BA] Cloud save is newer — applying (" + new Date(cloudSaved).toLocaleString() + ")");
        if (cs.animals) setAnimals(cs.animals);
        if (cs.kennels) setKennels(cs.kennels);
        if (cs.log) setLog(cs.log);
        if (cs.money !== undefined) setMoney(cs.money);
        if (cs.litter) setLitter(cs.litter);
        if (cs.litterSelected) setLitterSelected(cs.litterSelected);
        if (cs.hasWhelpingKennel !== undefined) setHasWhelpingKennel(cs.hasWhelpingKennel);
        if (cs.whelpingLitters) setWhelpingLitters(cs.whelpingLitters);
        if (cs.holdingPups) setHoldingPups(cs.holdingPups);
        if (cs.facilitiesOwned) setFacilitiesOwned(cs.facilitiesOwned);
        if (cs.farmLayout && Object.keys(cs.farmLayout).length > 0) setFarmLayout(cs.farmLayout);
        if (cs.ownedLivestock) setOwnedLivestock(cs.ownedLivestock.map(function(a) {
          if (a.species === "cow" && (!a.ageMonths || a.ageMonths < 1)) {
            a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*48) + 18 });
          }
          if (a.species === "cow" && !a.genome && typeof normalizeCattle === "function") {
            a = normalizeCattle(a);
          }
          if (a.species === "goat" && (!a.ageMonths || a.ageMonths < 1)) {
            a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*36) + 8 });
          }
          if (a.species === "goat" && !a.genome && typeof normalizeGoat === "function") {
            a = normalizeGoat(a);
          }
          if (a.species === "horse" && (!a.ageMonths || a.ageMonths < 1)) {
            a = Object.assign({}, a, { ageMonths: Math.floor(Math.random()*48) + 18 });
          }
          if (a.species === "horse" && !a.genome && typeof normalizeHorse === "function") {
            a = normalizeHorse(a);
          }
          return a;
        }));
        if (cs.commodities) setCommodities(cs.commodities);
        if (cs.sheepSheared) setSheepSheared(cs.sheepSheared);
        if (cs.lastShowDates) setLastShowDates(cs.lastShowDates);
        if (cs.horseShowDates) setHorseShowDates(cs.horseShowDates);
        if (cs.cattleShowDates) setCattleShowDates(cs.cattleShowDates);
        if (cs.goatShowDates) setGoatShowDates(cs.goatShowDates);
        if (cs.sheepShowDates) setSheepShowDates(cs.sheepShowDates);
        if (cs.pigShowDates) setPigShowDates(cs.pigShowDates);
        if (cs.pendingFoals) setPendingFoals(cs.pendingFoals);
        if (cs.foalCount !== undefined) setFoalCount(cs.foalCount);
        if (cs.naturalMating) setNaturalMating(cs.naturalMating);
        if (cs.pendingCalves) setPendingCalves(cs.pendingCalves);
        if (cs.tutorialDismissed) setTutorialDismissed(cs.tutorialDismissed);
      } else {
        console.log("[BA] Local save is newer or equal — keeping local");
      }
    }).catch(function(e){ console.warn("[BA] Cloud load failed", e); });
  }, [user]);

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

  // ── Check for calves/livestock births (runs when pendingCalves changes) ──
  useEffect(function() {
    if (!pendingCalves || pendingCalves.length === 0) return;
    var now = Date.now();
    var ready = pendingCalves.filter(function(pc){ return pc.dueDate <= now; });
    if (ready.length === 0) return;
    var remaining = pendingCalves.filter(function(pc){ return pc.dueDate > now; });
    setPendingCalves(remaining);

    // Clear pregnantUntil from dams that gave birth
    var bornDamIds = ready.map(function(pc){ return pc.damId; });
    setOwnedLivestock(function(prev) {
      var updated = prev.map(function(a) {
        if (bornDamIds.indexOf(a.id) !== -1) return Object.assign({}, a, { pregnantUntil: null });
        return a;
      });
      // Add newborn offspring
      var newborn = [];
      ready.forEach(function(pc) {
        pc.offspring.forEach(function(baby) { newborn.push(baby); });
      });
      return updated.concat(newborn);
    });

    // Log births
    ready.forEach(function(pc) {
      var speciesLabel = { cow:"\uD83D\uDC04", goat:"\uD83D\uDC10", sheep:"\uD83D\uDC11", pig:"\uD83D\uDC37", duck:"\uD83E\uDD86", chicken:"\uD83D\uDC14" }[pc.species] || "";
      pc.offspring.forEach(function(baby) {
        setLog(function(lg) {
          return [{ id: Date.now()+Math.random(), type:"breeding",
            name: speciesLabel + " " + baby.name + " born! (" + baby.breed + " \u00B7 " + (baby.coatColor||"") + " \u00B7 " + (baby.sex==="M"?"\u2642":"\u2640") + ")",
            date: new Date().toLocaleString() }].concat(_toConsumableArray(lg));
        });
      });
    });
  }, [pendingCalves]);

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
          if (a.locked) return a;
          var newAge = (a.ageMonths||0) + daysPassed;
          var maxAge = a.lifespan || 144;
          // Dog prime age warnings
          if (typeof PRIME_AGE!=="undefined"&&PRIME_AGE.dog) { var _dp=PRIME_AGE.dog; var _oa=a.ageMonths||0; var _dw=(typeof DECLINE_WINDOW!=="undefined")?DECLINE_WINDOW:24; if(_oa<_dp&&newAge>=_dp){(function(){setTimeout(function(){setLog(function(p){return [{id:Date.now()+Math.random(),type:"prime_warning",name:(a.name||a.breed||"Dog")+" has reached prime age ("+Math.round(_dp/12*10)/10+" years). Due to age, health and performance decline begins in 24 months. Consider retirement.",breed:a.breed,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0);})();} if(_oa<(_dp+_dw)&&newAge>=(_dp+_dw)){(function(){setTimeout(function(){setLog(function(p){return [{id:Date.now()+Math.random(),type:"decline_start",name:(a.name||a.breed||"Dog")+" is now in decline. Breeding and showing are no longer available.",breed:a.breed,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0);})();} }
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

      // ── Livestock aging with longevity system ─────────────────────────────────────────
      var _LS_MAX = (typeof MAX_LIFESPAN!=="undefined")?MAX_LIFESPAN:{};
      var _LS_FB = {horse:336,cow:240,pig:96,sheep:144,goat:168,duck:96,chicken:72};
      setOwnedLivestock(function(prev) {
        return prev.map(function(a) {
          if (a.retiredLivestock) return a;
          if (a.locked) return a;
          var newAge = (a.ageMonths||0) + daysPassed;
          var maxAge = a.lifespan || _LS_MAX[a.species] || _LS_FB[a.species] || 240;
          var sp = a.species||"cow";
          var isCompanion = (sp==="horse");
          if (typeof PRIME_AGE!=="undefined" && PRIME_AGE[sp]) {
            var pa = PRIME_AGE[sp];
            var oa = a.ageMonths||0;
            var dw = (typeof DECLINE_WINDOW!=="undefined")?DECLINE_WINDOW:24;
            if (oa<pa && newAge>=pa) {
              (function(){ var yrs=Math.round(pa/12*10)/10; var msg=isCompanion?(a.name||a.breed||sp)+" has reached prime age ("+yrs+" years). Due to age, health and performance decline begins in 24 months. Consider retirement.":(a.name||a.breed||sp)+" has reached prime age ("+yrs+" years). Due to age, health and performance decline and slaughterhouse access end in 24 months. Plan accordingly."; setTimeout(function(){setLog(function(p){return [{id:now+Math.random(),type:"prime_warning",name:msg,breed:a.breed||sp,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0); })();
            }
            if (oa<(pa+dw) && newAge>=(pa+dw)) {
              (function(){ var dm=isCompanion?(a.name||a.breed||sp)+" is now in decline. Breeding, showing, and production are no longer available.":(a.name||a.breed||sp)+" is now in decline. Breeding, showing, production, and slaughterhouse access are no longer available."; setTimeout(function(){setLog(function(p){return [{id:now+Math.random(),type:"decline_start",name:dm,breed:a.breed||sp,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0); })();
            }
          }
          if (a.pregnantUntil && typeof isDeclining==="function" && isDeclining(newAge,sp)) {
            if (Math.random()<0.5) {
              (function(){ setTimeout(function(){setLog(function(p){return [{id:now+Math.random(),type:"pregnancy_loss",name:(a.name||a.breed||sp)+" lost pregnancy due to declining age.",breed:a.breed||sp,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0); })();
              return Object.assign({},a,{ageMonths:newAge,pregnantUntil:null,lastUpdated:now});
            }
          }
          if (newAge>=maxAge) {
            (function(){ var dm=isCompanion?(a.name||a.breed||sp)+" has been retired (end of natural life)":(a.name||a.breed||sp)+" passed away (old age)"; setTimeout(function(){setLog(function(p){return [{id:now+Math.random(),type:"retire_age",name:dm,breed:a.breed||sp,date:new Date().toLocaleString()}].concat(_toConsumableArray(p));});},0); })();
            return Object.assign({},a,{ageMonths:newAge,retiredLivestock:true,retireReason:"End of natural life",retiredAt:now});
          }
          return Object.assign({},a,{ageMonths:newAge,lastUpdated:now});
        });
      });


      // ── Natural Mating — daily tick ──────────────────────────────────────
      var GESTATION_DAYS = { cow:9, goat:5, sheep:5, pig:4, duck:1, chicken:1 };
      // Minimum age in months to breed (roughly 1.5-2 years for cattle, scaled for others)
      var MIN_BREED_AGE = { cow:18, goat:8, sheep:8, pig:6, duck:5, chicken:4 };
      // Daily chance per eligible female when natural mating is on
      var MATE_CHANCE = { cow:0.25, goat:0.35, sheep:0.35, pig:0.40, duck:0.50, chicken:0.50 };
      // Max offspring per mating event
      var LITTER_SIZE = { cow:1, goat:2, sheep:2, pig:8, duck:8, chicken:6 };

      (function runNaturalMating() {
        // Only species with genetics engines get natural mating for now
        // Auto-enable natural mating for goats and sheep (always on — no toggle)
        if (!naturalMating.goat) {
          var hasGoats = (ownedLivestock||[]).some(function(a){ return a.species==="goat" && !a.retiredLivestock; });
          if (hasGoats) {
            setNaturalMating(function(prev){ return Object.assign({}, prev, { goat: true }); });
          }
        }
        if (!naturalMating.sheep) {
          var hasSheep = (ownedLivestock||[]).some(function(a){ return a.species==="sheep" && !a.retiredLivestock; });
          if (hasSheep) {
            setNaturalMating(function(prev){ return Object.assign({}, prev, { sheep: true }); });
          }
        }
        if (!naturalMating.pig) {
          var hasPigs = (ownedLivestock||[]).some(function(a){ return a.species==="pig" && !a.retiredLivestock; });
          if (hasPigs) {
            setNaturalMating(function(prev){ return Object.assign({}, prev, { pig: true }); });
          }
        }
        if (!naturalMating.duck) {
          var hasDucks = (ownedLivestock||[]).some(function(a){ return a.species==="duck" && !a.retiredLivestock; });
          if (hasDucks) {
            setNaturalMating(function(prev){ return Object.assign({}, prev, { duck: true }); });
          }
        }
        if (!naturalMating.chicken) {
          var hasChickens = (ownedLivestock||[]).some(function(a){ return a.species==="chicken" && !a.retiredLivestock; });
          if (hasChickens) {
            setNaturalMating(function(prev){ return Object.assign({}, prev, { chicken: true }); });
          }
        }

        var speciesWithGenetics = ["cow","goat","sheep","pig","duck","chicken"]; // expand as genetics engines are added
        speciesWithGenetics.forEach(function(sp) {
          // Goats auto-enable natural mating (no UI toggle yet — will get GoatView later)
          // Goat natural mating now controlled by toggle in GoatView
          if (!naturalMating[sp]) return; // toggle is off
          var allOfSpecies = (ownedLivestock||[]).filter(function(a){ return a.species===sp && !a.retiredLivestock && !a.locked && (typeof canBreedByAge!=="function"||canBreedByAge(a.ageMonths||0,sp)); });

          // ── CATTLE: separate beef and dairy herds ──
          // Beef bulls only cover beef cows, dairy bulls only cover dairy cows.
          // Other species don't have sub-types so they run as one group.
          var typeGroups = sp === "cow"
            ? ["beef", "dairy"]
            : [null]; // null = no sub-type filtering

          typeGroups.forEach(function(herdType) {
            var males, females;
            if (herdType) {
              males = allOfSpecies.filter(function(a){ return a.sex==="M" && a.type===herdType && (a.ageMonths||0) >= (MIN_BREED_AGE[sp]||12); });
              females = allOfSpecies.filter(function(a){ return a.sex==="F" && a.type===herdType && (a.ageMonths||0) >= (MIN_BREED_AGE[sp]||12) && !a.pregnantUntil; });
            } else {
              males = allOfSpecies.filter(function(a){ return a.sex==="M" && (a.ageMonths||0) >= (MIN_BREED_AGE[sp]||12); });
              females = allOfSpecies.filter(function(a){ return a.sex==="F" && (a.ageMonths||0) >= (MIN_BREED_AGE[sp]||12) && !a.pregnantUntil; });
            }
            // Allow breeding if hired community bull exists even without own males
            var nmStateCheck = naturalMating[sp];
            var hasHiredBull = nmStateCheck && typeof nmStateCheck === "object" && nmStateCheck.hiredCommunityBull && nmStateCheck.hiredCommunityBull.genome;
            if ((males.length === 0 && !hasHiredBull) || females.length === 0) return;

            // Each eligible female gets a chance to be bred each day
            var newPregnancies = [];
            for (var d = 0; d < daysPassed; d++) {
              females.forEach(function(fem) {
                // Skip if she got pregnant on an earlier day in this batch
                if (newPregnancies.some(function(p){ return p.damId===fem.id; })) return;
                if (Math.random() > (MATE_CHANCE[sp]||0.25)) return;

                // Check for hired community bull first
                var hiredBull = null;
                var nmState = naturalMating[sp];
                if (nmState && typeof nmState === "object" && nmState.hiredCommunityBull) {
                  hiredBull = nmState.hiredCommunityBull;
                }
                // Pick sire: hired community bull (if any and matching herd type) or best own bull
                var sire;
                if (hiredBull && hiredBull.genome) {
                  // Use hired bull as a virtual sire object
                  sire = {
                    id: hiredBull.animal_id || "hired_community_bull",
                    name: hiredBull.name || hiredBull.breed || "Hired Bull",
                    breed: hiredBull.breed || "Unknown",
                    sex: "M",
                    genome: hiredBull.genome,
                    healthScore: hiredBull.healthScore || 0,
                    perfScore: hiredBull.perfScore || 0,
                    coi: hiredBull.coi || 0,
                    type: herdType,
                    species: sp
                  };
                } else {
                  // Default: best available bull of the SAME TYPE (highest perf score)
                  sire = males.slice().sort(function(a,b){ return (b.perfScore||0)-(a.perfScore||0); })[0];
                }
                var gestationMs = (GESTATION_DAYS[sp]||9) * 24 * 60 * 60 * 1000;
                var dueDate = now + gestationMs;

                // Create offspring — cattle=1, others may have multiples
                var maxOffspring = LITTER_SIZE[sp] || 1;
                var litterCount = sp === "cow" ? 1 :
                  sp === "pig" ? Math.floor(Math.random() * maxOffspring) + 3 :
                  sp === "duck" || sp === "chicken" ? Math.floor(Math.random() * maxOffspring) + 2 :
                  Math.random() < 0.3 ? 2 : 1; // goat/sheep: 30% twins

                var offspring = [];
                for (var li = 0; li < litterCount; li++) {
                  if (typeof createCalf === "function" && sp === "cow") {
                    offspring.push(createCalf(sire, fem));
                  } else if (typeof createKid === "function" && sp === "goat") {
                    offspring.push(createKid(sire, fem));
                  } else if (typeof createLamb === "function" && sp === "sheep") {
                    offspring.push(createLamb(sire, fem));
                  } else if (typeof createPiglet === "function" && sp === "pig") {
                    offspring.push(createPiglet(sire, fem));
                  } else if (typeof createDuckling === "function" && sp === "duck") {
                    offspring.push(createDuckling(sire, fem));
                  } else if (typeof createChick === "function" && sp === "chicken") {
                    offspring.push(createChick(sire, fem));
                  }
                  // Other species will use their own create functions when genetics engines are added
                }

                if (offspring.length > 0) {
                  newPregnancies.push({
                    species: sp,
                    sireId: sire.id,
                    damId: fem.id,
                    sireName: sire.name || sire.breed,
                    damName: fem.name || fem.breed,
                    dueDate: dueDate,
                  offspring: offspring
                });
                  // Clear hired community bull after first successful breeding
                  if (hiredBull) {
                    hiredBull = null;
                    setNaturalMating(function(prev) {
                      var prevSp = prev[sp];
                      if (prevSp && typeof prevSp === "object") {
                        var updated = Object.assign({}, prevSp);
                        delete updated.hiredCommunityBull;
                        // If no other keys, just set to true
                        if (Object.keys(updated).length === 0) return Object.assign({}, prev, (function(){ var o={}; o[sp]=true; return o; })());
                        return Object.assign({}, prev, (function(){ var o={}; o[sp]=updated; return o; })());
                      }
                      return prev;
                    });
                  }
              }
            });
            // After each simulated day, remove newly-pregnant females from the pool
            var pregIds = newPregnancies.map(function(p){ return p.damId; });
            females = females.filter(function(f){ return pregIds.indexOf(f.id) === -1; });
          }

          if (newPregnancies.length > 0) {
            // Mark dams as pregnant
            setTimeout(function() {
              setOwnedLivestock(function(prev) {
                return prev.map(function(a) {
                  var match = newPregnancies.find(function(p){ return p.damId === a.id; });
                  if (match) return Object.assign({}, a, { pregnantUntil: match.dueDate });
                  return a;
                });
              });
            }, 0);
            // Add to pending calves
            setTimeout(function() {
              setPendingCalves(function(prev) { return prev.concat(newPregnancies); });
            }, 0);
            // Log
            newPregnancies.forEach(function(p) {
              var speciesLabel = { cow:"\uD83D\uDC04", goat:"\uD83D\uDC10", sheep:"\uD83D\uDC11", pig:"\uD83D\uDC37", duck:"\uD83E\uDD86", chicken:"\uD83D\uDC14" }[sp] || "\uD83E\uDD14";
              var gestDays = GESTATION_DAYS[sp] || 9;
              setTimeout(function() {
                setLog(function(lg) {
                  return [{ id: Date.now()+Math.random(), type:"breeding",
                    name: speciesLabel + " " + p.sireName + " \u00D7 " + p.damName + " \u2014 " + p.offspring.length + " offspring due in " + gestDays + " days",
                    date: new Date().toLocaleString() }].concat(_toConsumableArray(lg));
                });
              }, 0);
            });
          }
          }); // end typeGroups.forEach
        });
      })();

      // ── Check for calves/offspring ready to be born ──────────────────────
      if (pendingCalves && pendingCalves.length > 0) {
        var readyCalves = pendingCalves.filter(function(pc){ return pc.dueDate <= now; });
        if (readyCalves.length > 0) {
          var remainingCalves = pendingCalves.filter(function(pc){ return pc.dueDate > now; });
          setTimeout(function(){ setPendingCalves(remainingCalves); }, 0);

          // Clear pregnantUntil from dams that just gave birth
          var bornDamIds = readyCalves.map(function(pc){ return pc.damId; });
          setTimeout(function() {
            setOwnedLivestock(function(prev) {
              var updated = prev.map(function(a) {
                if (bornDamIds.indexOf(a.id) !== -1) return Object.assign({}, a, { pregnantUntil: null });
                return a;
              });
              // Add newborn offspring to livestock
              var newborn = [];
              readyCalves.forEach(function(pc) {
                pc.offspring.forEach(function(baby) { newborn.push(baby); });
              });
              return updated.concat(newborn);
            });
          }, 0);

          // Log births
          readyCalves.forEach(function(pc) {
            var speciesLabel = { cow:"\uD83D\uDC04", goat:"\uD83D\uDC10", sheep:"\uD83D\uDC11", pig:"\uD83D\uDC37", duck:"\uD83E\uDD86", chicken:"\uD83D\uDC14" }[pc.species] || "";
            pc.offspring.forEach(function(baby) {
              setTimeout(function() {
                setLog(function(lg) {
                  return [{ id: Date.now()+Math.random(), type:"breeding",
                    name: speciesLabel + " " + baby.name + " born! (" + baby.breed + " \u00B7 " + (baby.coatColor||"") + " \u00B7 " + (baby.sex==="M"?"\u2642":"\u2640") + ")",
                    date: new Date().toLocaleString() }].concat(_toConsumableArray(lg));
                });
              }, 0);
            });
          });
        }
      }

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
      // Cattle stud fee income
      (function() {
        var cattleStuds = (ownedLivestock||[]).filter(function(a){ return a.species==="cow" && a.sex==="M" && a.isCattleStud && a.cattleStudFee > 0; });
        if (cattleStuds.length === 0) return;
        var income = cattleStuds.reduce(function(s,a){ return s + (a.cattleStudFee||0) * daysPassed; }, 0);
        var goatStuds = (ownedLivestock||[]).filter(function(a){ return a.species==="goat" && a.sex==="M" && a.isGoatStud && a.goatStudFee > 0; });
        if (goatStuds.length > 0) {
          var goatStudIncome = goatStuds.reduce(function(s,a){ return s + (a.goatStudFee||0) * daysPassed; }, 0);
          income += goatStudIncome;
        }
        var sheepStuds = (ownedLivestock||[]).filter(function(a){ return a.species==="sheep" && a.sex==="M" && a.isSheepStud && a.sheepStudFee > 0; });
        if (sheepStuds.length > 0) {
          var sheepStudIncome = sheepStuds.reduce(function(s,a){ return s + (a.sheepStudFee||0) * daysPassed; }, 0);
          income += sheepStudIncome;
        }
        var pigStuds = (ownedLivestock||[]).filter(function(a){ return a.species==="pig" && a.sex==="M" && a.isPigStud && a.pigStudFee > 0; });
        if (pigStuds.length > 0) {
          var pigStudIncome = pigStuds.reduce(function(s,a){ return s + (a.pigStudFee||0) * daysPassed; }, 0);
          income += pigStudIncome;
        }
        setMoney(function(m){ return m + income; });
        setLog(function(lg){ return [{ id: now+Math.random(), type:"financial",
          name: "\uD83D\uDC02 Bull stud fees \u2014 " + cattleStuds.length + " bull" + (cattleStuds.length!==1?"s":"") + " listed",
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
          cattleShowDates: cattleShowDates,
          goatShowDates: goatShowDates,
          sheepShowDates: sheepShowDates,
          pigShowDates: pigShowDates,
          pendingFoals: pendingFoals,
          foalCount: foalCount,
          naturalMating: naturalMating,
          pendingCalves: pendingCalves,
          gameStartDate: gameStartDate,
          tutorialDismissed: tutorialDismissed,
          customBreeds: customBreeds,
          farmLayout: farmLayout,
          gameVersion: GAME_VERSION,
          savedAt: Date.now()
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        // Save farm layout separately so it survives hard resets
        if (farmLayout && Object.keys(farmLayout).length > 0) {
          localStorage.setItem("ba_farmLayout", JSON.stringify(farmLayout));
        }
        // ── Cloud sync ──────────────────────────────────────────
        if (user && window.baSupabaseSync) {
          window.baSupabaseSync.saveToCloud(user.id, state).catch(function(e){ console.warn("Cloud save failed", e); });
          window.baSupabaseSync.syncAnimals(user.id, state.animals || []).catch(function(e){ console.warn("syncAnimals failed", e); });
          window.baSupabaseSync.syncStudListings(user.id, state.animals || []).catch(function(e){ console.warn("syncStudListings failed", e); });
          window.baSupabaseSync.syncMarketListings(user.id, state.animals || [], displayName).then(function(result) {
            if (result && result.soldAnimalIds && result.soldAnimalIds.length > 0) {
              // Dogs were bought by other players — remove from local kennel and credit money
              var soldIds = {};
              var totalEarned = 0;
              var soldNames = [];
              for (var si = 0; si < result.soldAnimalIds.length; si++) {
                var sold = result.soldAnimalIds[si];
                soldIds[sold.animalId] = true;
                totalEarned += sold.price;
                soldNames.push(sold.name + " ($" + sold.price.toLocaleString() + ")");
              }
              setAnimals(function(prev){ return prev.filter(function(a){ return !soldIds[a.id]; }); });
              setMoney(function(m){ return m + totalEarned; });
              setLog(function(lg){ return [{ id: Date.now(), type: "financial",
                name: "\uD83C\uDFEA Breeder\u2019s Market sale! " + soldNames.join(", ") + " \u2014 +$" + totalEarned.toLocaleString(),
                amount: totalEarned, date: new Date().toLocaleString() }].concat(lg); });
              console.log("[BA] Market sold dogs detected:", result.soldAnimalIds.length, "earned $" + totalEarned);
            }
          }).catch(function(e){ console.warn("syncMarketListings failed", e); });
          if (window.baSupabaseSync.syncCattleStudListings) window.baSupabaseSync.syncCattleStudListings(user.id, state.ownedLivestock || []).catch(function(e){ console.warn("syncCattleStudListings failed", e); });
          if (window.baSupabaseSync.syncGoatStudListings) window.baSupabaseSync.syncGoatStudListings(user.id, state.ownedLivestock || []).catch(function(e){ console.warn("syncGoatStudListings failed", e); });
          if (window.baSupabaseSync.syncSheepStudListings) window.baSupabaseSync.syncSheepStudListings(user.id, state.ownedLivestock || []).catch(function(e){ console.warn("syncSheepStudListings failed", e); });
          if (window.baSupabaseSync.syncPigStudListings) window.baSupabaseSync.syncPigStudListings(user.id, state.ownedLivestock || []).catch(function(e){ console.warn("syncPigStudListings failed", e); });
        }
      } catch(e) { console.warn("Autosave failed", e); }
    }
    doSave();
    var interval = setInterval(doSave, 60000);
    return function() { clearInterval(interval); };
  }, [animals, kennels, log, money, litter, litterSelected, tab, hasWhelpingKennel, whelpingLitters, holdingPups, facilitiesOwned, ownedLivestock, commodities, sheepSheared, lastShowDates, horseShowDates, cattleShowDates, goatShowDates, sheepShowDates, pigShowDates, pendingFoals, foalCount, naturalMating, pendingCalves, tutorialDismissed, customBreeds, farmLayout]);

  // ── Periodic unread mail check ──────────────────────────────────────────
  useEffect(function() {
    if (!user || !window.baSupabaseSync || !window.baSupabaseSync.fetchUnreadCount) return;
    function checkUnread() {
      window.baSupabaseSync.fetchUnreadCount(user.id).then(function(c){ setUnreadMail(c); }).catch(function(){});
    }
    checkUnread();
    var interval = setInterval(checkUnread, 60000);
    return function(){ clearInterval(interval); };
  }, [user]);

  // ── Auto-detect qualified breeding lines ───────────────────────────────
  useEffect(function() {
    if (!animals || animals.length < BREED_CRITERIA.MIN_POPULATION) return;
    var lines = detectBreedingLines(animals);
    for (var i = 0; i < lines.length; i++) {
      var ev = evaluateBreedLine(lines[i], animals);
      if (ev.ready) {
        // Check it hasn't already been declared as a custom breed
        var lineBreeds = lines[i].key.split(" + ").sort().join("+");
        var alreadyDeclared = customBreeds.some(function(cb) {
          return (cb.founderBreeds || []).slice().sort().join("+") === lineBreeds;
        });
        if (!alreadyDeclared) {
          setBreedLineNotify(lines[i].key.replace(/ \+ /g, " \u00D7 "));
          return;
        }
      }
    }
    setBreedLineNotify(null);
  }, [animals, customBreeds]);
  // ──────────────────────────────────────────────────────────────────────
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
  // ── New Breed Declaration Handler ────────────────────────────────────────
  var handleDeclareBreed = function(newBreed, lineKey, lineMembers) {
    // 1. Add to customBreeds
    setCustomBreeds(function(prev) { return prev.concat([newBreed]); });
    // 2. Add to breeds list (profiled)
    setBreeds(function(prev) { return prev.concat([assignGeneticProfile(newBreed)]); });
    // 3. Reclassify all dogs in the line as the new breed
    setAnimals(function(prev) {
      return prev.map(function(a) {
        var aKey = getLineKey(a, prev);
        if (aKey === lineKey) {
          return Object.assign({}, a, {
            breed: newBreed.name,
            group: newBreed.group,
            isMixed: false
          });
        }
        return a;
      });
    });
    // 4. Log it
    setLog(function(lg) {
      return [{ id: Date.now(), type: "milestone", name: "\uD83C\uDFC6 New breed recognized: " + newBreed.name + " (founded from " + (newBreed.founderBreeds || []).join(" \u00D7 ") + ")", date: new Date().toLocaleString() }].concat(_toConsumableArray(lg));
    });
    setBreedLineNotify(null);
    alert("\uD83C\uDFC6 Congratulations!\n\n\"" + newBreed.name + "\" has been officially recognized as a new breed!\n\nAll " + (lineMembers ? lineMembers.length : 0) + " dogs in this line have been reclassified. Your new breed is now available in the breed registry.");
  };
  // ──────────────────────────────────────────────────────────────────────────

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
      var newAnimal = makeAnimal(b, b.name, sex);
      newAnimal.ageMonths = arrivalAge || 12;
      newAnimal.kennelId = activeKennel.id;
      setPendingBoughtDog(newAnimal);
    }
  };
  var breedingIneligibleReason = function breedingIneligibleReason(a) {
    if (!a) return null;
    if (a.retired) return "Retired";
    if (a.locked) return "Locked";
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
  // ── Breed tab DNA peek panel (rich version with QTL bars) ─────────────
  var DOG_PERF_QTL_INFO = {
    DRIVE:  { icon:"\uD83C\uDFAF", label:"Drive",     color:"#f97316" },
    INTEL:  { icon:"\uD83E\uDDE0", label:"Intel",      color:"#3b82f6" },
    NERVE:  { icon:"\uD83E\uDDB4", label:"Nerve",      color:"#a78bfa" },
    SPEED:  { icon:"\u26A1",       label:"Speed",      color:"#eab308" },
    MUSCLE: { icon:"\uD83D\uDCAA", label:"Muscle",     color:"#ef4444" }
  };
  var DOG_HEALTH_QTL_INFO = {
    HipQ:   { icon:"\uD83E\uDDB4", label:"Hips",       color:"#22c55e" },
    EyeQ:   { icon:"\uD83D\uDC41",  label:"Eyes",       color:"#3b82f6" },
    HeartQ: { icon:"\u2764\uFE0F",  label:"Heart",      color:"#ef4444" },
    JointQ: { icon:"\uD83E\uDD9B", label:"Joints",     color:"#f97316" }
  };
  function renderDogBreedDNA(a) {
    if (!a || !a.genome) return null;
    var g = a.genome;
    var ce = React.createElement;
    // Perf QTL bars
    var perfBars = PERF_QTLS.map(function(q) {
      var info = DOG_PERF_QTL_INFO[q] || { icon:"?", label:q, color:"#888" };
      var v = (g.perf||{})[q] || [3,3];
      var avg = (v[0]+v[1])/2;
      var pct = Math.round((avg/5)*100);
      return ce("div", { key:q, style:{ textAlign:"center", minWidth:0 } },
        ce("div", { style:{ fontSize:"0.8rem", marginBottom:2 } }, info.icon),
        ce("div", { style:{ fontSize:"0.58rem", color:info.color, fontWeight:"bold", marginBottom:2 } }, info.label),
        ce("div", { style:{ height:4, background:"#1a1410", borderRadius:2, overflow:"hidden" } },
          ce("div", { style:{ height:"100%", width:pct+"%", background:info.color, borderRadius:2 } })
        ),
        ce("div", { style:{ fontSize:"0.55rem", color:"#8a7055", marginTop:1 } }, v[0]+"/"+v[1])
      );
    });
    // Health QTL bars
    var healthBars = ["HipQ","EyeQ","HeartQ","JointQ"].map(function(loc) {
      var info = DOG_HEALTH_QTL_INFO[loc] || { icon:"?", label:loc, color:"#888" };
      var alleles = (g.health||{})[loc] || ["G","G"];
      var good = (alleles[0]==="G"?1:0) + (alleles[1]==="G"?1:0);
      var pct = good===2?100:good===1?50:0;
      var col = good===2?"#22c55e":good===1?"#eab308":"#ef4444";
      var lbl = good===2?"Good":good===1?"Carrier":"Poor";
      return ce("div", { key:loc, style:{ textAlign:"center", minWidth:0 } },
        ce("div", { style:{ fontSize:"0.8rem", marginBottom:2 } }, info.icon),
        ce("div", { style:{ fontSize:"0.58rem", color:col, fontWeight:"bold", marginBottom:2 } }, info.label),
        ce("div", { style:{ height:4, background:"#1a1410", borderRadius:2, overflow:"hidden" } },
          ce("div", { style:{ height:"100%", width:pct+"%", background:col, borderRadius:2 } })
        ),
        ce("div", { style:{ fontSize:"0.55rem", color:"#8a7055", marginTop:1 } }, lbl)
      );
    });
    // Disease carriers
    var diseases = ["MDR1","PRA","DM","vWD"].map(function(loc) {
      var alleles = (g.health||{})[loc]; if (!alleles) return null;
      var aff = alleles[0]==="n"&&alleles[1]==="n";
      var car = !aff&&(alleles[0]==="n"||alleles[1]==="n");
      var clr = aff ? "#ef4444" : car ? "#f97316" : "#22c55e";
      var txt = aff ? "AFFECTED" : car ? "Carrier" : "Clear";
      return ce("span", { key:loc, style:{ fontSize:"0.6rem", color:clr, marginRight:6 } }, loc+" "+txt);
    }).filter(Boolean);
    // Traits (if available)
    var traitSection = null;
    if (a.traits) {
      var traitPairs = [
        ["intelligence","\uD83E\uDDE0","#d4942a"],["energy","\u26A1","#eab308"],
        ["trainability","\uD83C\uDF93","#22c55e"],["loyalty","\u2764\uFE0F","#e870a0"],
        ["sociability","\uD83E\uDD1D","#3b82f6"],["preyDrive","\uD83C\uDFAF","#f97316"],
        ["aggression","\u26A0\uFE0F","#ef4444"],["barkTendency","\uD83D\uDD0A","#eab308"]
      ];
      traitSection = ce("div", { style:{ marginTop:6 } },
        ce("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.04em", marginBottom:4 } }, "Traits"),
        ce("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2px 8px" } },
          traitPairs.map(function(t) {
            var val = a.traits[t[0]]; if (val===undefined) return null;
            return ce("div", { key:t[0], style:{ display:"flex", alignItems:"center", gap:3 } },
              ce("span", { style:{ fontSize:"0.6rem" } }, t[1]),
              ce("div", { style:{ flex:1, height:3, background:"#1a1410", borderRadius:2, overflow:"hidden" } },
                ce("div", { style:{ height:"100%", width:(val/10*100)+"%", background:t[2], borderRadius:2 } })
              ),
              ce("span", { style:{ fontSize:"0.55rem", color:t[2], width:14, textAlign:"right" } }, val)
            );
          })
        )
      );
    }
    return ce("div", { style:{ marginTop:6, background:"#2a2018", border:"1px solid #3a2a4a", borderRadius:6, padding:"8px 8px", fontSize:"0.72rem" } },
      ce("div", { style:{ color:"#a78bfa", fontWeight:"bold", fontSize:"0.72rem", marginBottom:6 } }, "\uD83E\uDDEC " + (a.name||a.breed)),
      // Perf QTLs
      ce("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.04em", marginBottom:4 } }, "Performance"),
      ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:4, marginBottom:8 } }, perfBars),
      // Health QTLs
      ce("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.04em", marginBottom:4 } }, "Structure"),
      ce("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:4, marginBottom:6 } }, healthBars),
      // Disease carriers
      diseases.length > 0 && ce("div", { style:{ marginBottom:4 } },
        ce("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.04em", marginBottom:3 } }, "Disease Panel"),
        ce("div", { style:{ display:"flex", flexWrap:"wrap" } }, diseases)
      ),
      // COI
      ce("div", { style:{ display:"flex", alignItems:"center", gap:4, marginBottom:2 } },
        ce("span", { style:{ color:"#6b5038", fontSize:"0.6rem" } }, "COI:"),
        ce("span", { style:{ fontSize:"0.68rem", fontWeight:"bold", color:(a.coi||0)>=25?"#ef4444":(a.coi||0)>=12?"#f97316":"#22c55e" } }, (a.coi||0)+"%")
      ),
      // Traits
      traitSection
    );
  }
  // ──────────────────────────────────────────────────────────────────────────

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
  var toggleLockDog = function toggleLockDog(id) {
    setAnimals(function(p){ return p.map(function(a){
      if (a.id!==id) return a;
      if (a.locked) {
        // Unlock — set cooldown
        var cooldownUntil = Date.now() + ((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
        setLog(function(lg){ return [{id:Date.now()+Math.random(),type:"system",name:(a.name||a.breed)+" has been unlocked. Aging resumes. Can re-lock in 24 hours.",date:new Date().toLocaleString()}].concat(_toConsumableArray(lg)); });
        return Object.assign({},a,{locked:false,lockedCooldownUntil:cooldownUntil});
      } else {
        // Lock — check cooldown
        if (a.lockedCooldownUntil && Date.now() < a.lockedCooldownUntil) {
          var hrs = Math.ceil((a.lockedCooldownUntil - Date.now())/(3600000));
          alert("Lock cooldown active. Can re-lock in ~" + hrs + " hour(s).");
          return a;
        }
        setLog(function(lg){ return [{id:Date.now()+Math.random(),type:"system",name:(a.name||a.breed)+" has been locked. Aging and all activities are frozen.",date:new Date().toLocaleString()}].concat(_toConsumableArray(lg)); });
        return Object.assign({},a,{locked:true,lockedAt:Date.now()});
      }
    }); });
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
    var trimmed = (newName || "").trim();
    if (!trimmed) return;
    var dupAnimal = animals.find(function(a){ return !a.retired && a.name.toLowerCase() === trimmed.toLowerCase(); });
    var dupLitter = litter.find(function(p){ return p.id !== pupId && p.name.toLowerCase() === trimmed.toLowerCase(); });
    if (dupAnimal || dupLitter) { alert("\"" + trimmed + "\" is already taken. Pick a different name."); return; }
    setLitter(function(prev){ return prev.map(function(p){ return p.id===pupId ? Object.assign({},p,{name:trimmed}) : p; }); });
  };
  // Rename a pup in a whelping litter
  var renameWhelpingPup = function renameWhelpingPup(litterId, pupId, newName) {
    var trimmed = (newName || "").trim();
    if (!trimmed) return;
    var dupAnimal = animals.find(function(a){ return !a.retired && a.name.toLowerCase() === trimmed.toLowerCase(); });
    if (dupAnimal) { alert("\"" + trimmed + "\" is already taken. Pick a different name."); return; }
    setWhelpingLitters(function(prev){ return prev.map(function(lit){
      if (lit.litterId !== litterId) return lit;
      return Object.assign({}, lit, { pups: lit.pups.map(function(p){ return p.id===pupId ? Object.assign({},p,{name:trimmed}) : p; }) });
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
    var trimmed = (name || "").trim();
    if (!trimmed) return;
    var dup = animals.find(function(a){ return a.id !== id && !a.retired && a.name.toLowerCase() === trimmed.toLowerCase(); });
    if (dup) { alert("You already have a dog named \"" + trimmed + "\" (" + dup.breed + "). Pick a different name."); return; }
    setAnimals(function (p) {
      return p.map(function (a) {
        return a.id === id ? _objectSpread(_objectSpread({}, a), {}, {
          name: trimmed
        }) : a;
      });
    });
    if ((sire === null || sire === void 0 ? void 0 : sire.id) === id) setSire(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        name: trimmed
      });
    });
    if ((dam === null || dam === void 0 ? void 0 : dam.id) === id) setDam(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        name: trimmed
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
      padding: isMobile ? "6px 10px" : "9px 18px",
      background: tab === t ? "#3a2810" : "transparent",
      border: "1px solid " + (tab === t ? "#d4942a" : "transparent"),
      borderBottom: tab === t ? "2px solid #d4942a" : "2px solid transparent",
      borderRadius: "6px 6px 0 0",
      color: tab === t ? "#e8a020" : "#b09070",
      cursor: "pointer",
      fontSize: isMobile ? "0.72rem" : "0.83rem",
      fontWeight: tab === t ? "bold" : "normal",
      letterSpacing: "0.02em",
      transition: "all 0.15s"
    };
  };
  var actionModalAnimal = animals.find(function(a){ return a.id === actionModalId; });
  var handleTabChange = function(newTab) {
    setTab(newTab);
    if (TUTORIAL_CONTENT[newTab] && !tutorialDismissed[newTab]) {
      setActiveTutorial(newTab);
    }
  };
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
      padding: isMobile ? "8px 10px" : "14px 22px",
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
      gap: isMobile ? 4 : 10
    }
  }, /*#__PURE__*/React.createElement("div", { style:{ display:"flex", alignItems:"center", gap: isMobile ? 6 : 14, flexWrap:"wrap" } },
    !isMobile && /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8a020",
        fontSize: "1.8rem",
        fontWeight: "bold",
        letterSpacing: "0.02em",
        textShadow: "0 1px 8px rgba(212,148,42,0.4)"
      }
    }, "\uD83E\uDDEC Bloodline Acres"),
    isMobile && /*#__PURE__*/React.createElement("div", {
      style: { color: "#e8a020", fontSize: "1rem", fontWeight: "bold" }
    }, "\uD83E\uDDEC BA"),
    /*#__PURE__*/React.createElement("div", { style:{ display:"flex", alignItems:"center", gap: isMobile ? 4 : 8, fontSize: isMobile ? "0.68rem" : "0.75rem", color:"#6b5038" } },
      /*#__PURE__*/React.createElement("span", { style:{ color: money < 500 ? "#ef4444" : money < 1500 ? "#d4860a" : "#22c55e", fontWeight:"bold" } }, formatMoney(money)),
      !isMobile && /*#__PURE__*/React.createElement("span", { style:{ color:"#d4942a" } }, "\uD83D\uDC64 " + displayName),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ if(confirm("Log out of Bloodline Acres?")) onLogout(); },
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:4,
          padding:"1px 8px", cursor:"pointer", fontSize:"0.65rem", marginLeft:2, verticalAlign:"middle" }
      }, "\u23FB Logout")
    )
  ), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: isMobile ? 4 : 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function(){ handleTabChange("farm"); },
    style: {
      background: tab==="farm" ? "#2a1a08" : "linear-gradient(135deg, #1a2a08 0%, #0a1a08 100%)",
      border: "2px solid " + (tab==="farm" ? "#22c55e" : "#4a8a2a"),
      color: tab==="farm" ? "#22c55e" : "#86efac",
      borderRadius: 10, padding: isMobile ? "5px 10px" : "8px 20px", cursor: "pointer",
      fontSize: isMobile ? "0.85rem" : "1.3rem", fontWeight: "bold",
      letterSpacing: "0.03em",
      textShadow: "0 1px 6px rgba(34,197,94,0.3)",
      transition: "all 0.15s"
    }
  }, "\uD83C\uDFD8\uFE0F Farm Map"),
  pwaInstallPrompt && /*#__PURE__*/React.createElement("button", {
    onClick: handlePwaInstall,
    style: {
      background: "linear-gradient(135deg, #1a0a2a 0%, #0a0a1e 100%)",
      border: "2px solid #7c3aed",
      color: "#c4b5fd",
      borderRadius: 10, padding: "8px 16px", cursor: "pointer",
      fontSize: "0.9rem", fontWeight: "bold",
      letterSpacing: "0.03em",
      textShadow: "0 1px 6px rgba(124,58,237,0.3)",
      transition: "all 0.15s",
      animation: "pulse 2s ease-in-out infinite"
    }
  }, "\uD83D\uDCF1 Install App"),
  /*#__PURE__*/React.createElement("input", {
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
      padding: isMobile ? "8px 6px" : "18px 22px",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, isMobile ?
  // ── MOBILE: Species dropdown ──
  /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", gap:6, marginBottom:10, alignItems:"center", flexWrap:"wrap" }
  },
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setMobileMenuOpen(function(v){ return !v; }); },
      style: { background: mobileMenuOpen ? "#3a2810" : "transparent", border:"1px solid #4a3a28", color:"#e8a020",
        borderRadius:6, padding:"8px 12px", cursor:"pointer", fontSize:"1.1rem", lineHeight:1 }
    }, "\u2630"),
    /*#__PURE__*/React.createElement("select", {
      value: tab,
      onChange: function(e){ handleTabChange(e.target.value); setMobileMenuOpen(false); },
      style: { flex:1, background:"#1a1410", border:"1px solid #4a3a28", color:"#e8a020",
        borderRadius:6, padding:"8px 10px", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
    },
      /*#__PURE__*/React.createElement("option", { value:"kennel" }, "\uD83D\uDC15 Dogs (" + animals.filter(function(a){return !a.retired;}).length + ")"),
      /*#__PURE__*/React.createElement("option", { value:"horses" }, "\uD83D\uDC0E Horses ("+(ownedLivestock||[]).filter(function(a){return a.species==="horse";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"cattle" }, "\uD83D\uDC04 Cattle ("+(ownedLivestock||[]).filter(function(a){return a.species==="cow";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"goats" }, "\uD83D\uDC10 Goats ("+(ownedLivestock||[]).filter(function(a){return a.species==="goat";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"sheep" }, "\uD83D\uDC11 Sheep ("+(ownedLivestock||[]).filter(function(a){return a.species==="sheep";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"pigs" }, "\uD83D\uDC37 Pigs ("+(ownedLivestock||[]).filter(function(a){return a.species==="pig";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"ducks" }, "\uD83E\uDD86 Ducks ("+(ownedLivestock||[]).filter(function(a){return a.species==="duck";}).length+")"),
      /*#__PURE__*/React.createElement("option", { value:"chickens" }, "\uD83D\uDC14 Chickens ("+(ownedLivestock||[]).filter(function(a){return a.species==="chicken";}).length+")")
    ),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowCatLady(true); },
      style: { background:"transparent", border:"1px solid #4a3a28", color:"#b09070",
        borderRadius:6, padding:"8px 10px", cursor:"pointer", fontSize:"0.78rem" }
    }, "\uD83D\uDC08 Cat Lady")
  ) :
  // ── DESKTOP: Tab buttons ──
  /*#__PURE__*/React.createElement("div", {
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
      handleTabChange("kennel"); setKennelOpen(true);
    }
  }, "\uD83D\uDC15 Dogs (" + animals.filter(function(a){return !a.retired;}).length + ")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("horses"),
      onClick: function(e){ e.stopPropagation(); handleTabChange("horses"); }
    }, "\uD83D\uDC0E Horses ("+(ownedLivestock||[]).filter(function(a){return a.species==="horse";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("cattle"),
      onClick: function(){ handleTabChange("cattle"); }
    }, "\uD83D\uDC04 Cattle ("+(ownedLivestock||[]).filter(function(a){return a.species==="cow";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("goats"),
      onClick: function(){ handleTabChange("goats"); }
    }, "\uD83D\uDC10 Goats ("+(ownedLivestock||[]).filter(function(a){return a.species==="goat";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("sheep"),
      onClick: function(){ handleTabChange("sheep"); }
    }, "\uD83D\uDC11 Sheep ("+(ownedLivestock||[]).filter(function(a){return a.species==="sheep";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("pigs"),
      onClick: function(){ handleTabChange("pigs"); }
    }, "\uD83D\uDC37 Pigs ("+(ownedLivestock||[]).filter(function(a){return a.species==="pig";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("ducks"),
      onClick: function(){ handleTabChange("ducks"); }
    }, "\uD83E\uDD86 Ducks ("+(ownedLivestock||[]).filter(function(a){return a.species==="duck";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("chickens"),
      onClick: function(){ handleTabChange("chickens"); }
    }, "\uD83D\uDC14 Chickens ("+(ownedLivestock||[]).filter(function(a){return a.species==="chicken";}).length+")"),
    /*#__PURE__*/React.createElement("button", {
      style: tabS("catLady"),
      onClick: function(){ setShowCatLady(true); }
    }, "\uD83D\uDC08 Old Cat Lady")
  ), tab === "kennel" && /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", flex: 1, overflow: "hidden", gap: 0, position: "relative" }
  },
  // ── MOBILE MENU OVERLAY ──
  isMobile && mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    style: { position:"absolute", top:0, left:0, bottom:0, width:220, zIndex:50,
      background:"#1a1410", borderRight:"2px solid #4a3a28", padding:"10px 8px",
      display:"flex", flexDirection:"column", gap:2, overflowY:"auto",
      boxShadow:"4px 0 20px rgba(0,0,0,0.6)" }
  },
    /*#__PURE__*/React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 } },
      /*#__PURE__*/React.createElement("span", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"0.9rem" } }, "Menu"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setMobileMenuOpen(false); },
        style:{ background:"transparent", border:"none", color:"#8a7055", fontSize:"1.3rem", cursor:"pointer", padding:"4px 8px" }
      }, "\u2715")
    ),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowMarket(true); setMobileMenuOpen(false); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDC04 Livestock Market"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowFacilities(true); setMobileMenuOpen(false); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83C\uDFD7 Buy Facilities"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("log"); setMobileMenuOpen(false); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDCD3 Journal"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("mail"); setMobileMenuOpen(false); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDCEC Mail", unreadMail > 0 ? /*#__PURE__*/React.createElement("span", {
      style:{ marginLeft:6, minWidth:18, height:18, borderRadius:9, background:"#ef4444", color:"#fff", fontSize:"0.6rem", fontWeight:"bold", display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"0 5px" }
    }, unreadMail > 99 ? "99+" : unreadMail) : null),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowFriends(true); setMobileMenuOpen(false); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83E\uDD1D Friends"),
    // ── Dog Management (mobile) ──
    tab === "kennel" && /*#__PURE__*/React.createElement("div", { style:{ borderTop:"1px solid #2e2218", marginTop:8, paddingTop:8 } },
      /*#__PURE__*/React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.08em", padding:"0 8px 6px" } }, "Dog Management"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setTab("breeders_market"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83C\uDFEA Breeder\u2019s Market"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowBuyDogs(function(v){ return !v; }); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83D\uDED2 Buy Dogs"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ handleTabChange("breed"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\u26A1 Breed"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setTab("openlitter"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83D\uDC3E Open Litters" + (litter.length > 0 ? " (" + litter.length + ")" : "")),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setTab("whelping"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color: hasWhelpingKennel ? "#b09070" : "#5a4a38", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%", opacity: hasWhelpingKennel ? 1 : 0.5 }
      }, "\uD83C\uDFE5 Whelping" + (whelpingLitters.length > 0 ? " (" + whelpingLitters.length + "/2)" : " (0/2)")),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setTab("stud"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83D\uDC3E Stud"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowBreedProgram(true); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83E\uDDEC Breed Program"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ handleTabChange("shows"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83C\uDF80 Shows"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ handleTabChange("retired"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"none", color:"#b09070", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83C\uDFDB\uFE0F Legacy (" + animals.filter(function(a){ return a.retired; }).length + ")"),
      holdingPups.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setTab("holding"); setMobileMenuOpen(false); },
        style: { background:"transparent", border:"1px solid #22c55e", color:"#22c55e", padding:"12px 8px", cursor:"pointer", fontSize:"0.95rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
      }, "\uD83D\uDC3E Holding (" + holdingPups.length + ")")
    )
  ),
  // ── LEFT SIDEBAR (desktop only) ──
  !isMobile && /*#__PURE__*/React.createElement("div", {
    style: { width: 160, minWidth: 140, display: "flex", flexDirection: "column", gap: 4, padding: "10px 6px 10px 0", overflowY: "auto" }
  },
    /*#__PURE__*/React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.08em", padding:"0 6px 4px", borderBottom:"1px solid #2e2218", marginBottom:2 } }, "General"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowMarket(true); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDC04 Livestock Market"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowFacilities(true); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83C\uDFD7 Buy Facilities"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("log"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDCD3 Journal"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("mail"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%", position:"relative" }
    }, "\uD83D\uDCEC Mail", unreadMail > 0 ? /*#__PURE__*/React.createElement("span", {
      style:{ marginLeft:6, minWidth:16, height:16, borderRadius:8, background:"#ef4444", color:"#fff", fontSize:"0.55rem", fontWeight:"bold", display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"0 4px" }
    }, unreadMail > 99 ? "99+" : unreadMail) : null),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowFriends(true); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83E\uDD1D Friends")
  ),
  // ── CENTER CONTENT ──
  /*#__PURE__*/React.createElement("div", {
    style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", borderLeft: isMobile ? "none" : "1px solid #2e2218", borderRight: isMobile ? "none" : "1px solid #2e2218", padding: isMobile ? "0 2px" : "0 8px" }
  },

  /*#__PURE__*/React.createElement("div", {
    style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", padding: isMobile ? "6px 0" : "10px 0" }
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
      }, showKennelMgr ? "\u2715 Close" : "+ Manage Kennels")
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
            // Kennel cap based on highest tier owned (or the one being purchased)
            var TIER_ORDER = { elite:4, commercial:3, standard:2, basic:1 };
            var TIER_MAX = { elite:4, commercial:5, standard:6, basic:6 };
            var highestTier = "basic";
            kennels.forEach(function(kk){ if ((TIER_ORDER[kk.type]||0) > (TIER_ORDER[highestTier]||0)) highestTier = kk.type; });
            // If buying a higher tier, that becomes the new cap
            if ((TIER_ORDER[typeKey]||0) > (TIER_ORDER[highestTier]||0)) highestTier = typeKey;
            var maxKennels = TIER_MAX[highestTier] || 6;
            if (kennels.length >= maxKennels) {
              alert("Kennel limit reached!\nYour highest tier (" + (KENNEL_TYPES[highestTier]||{}).label + ") allows a maximum of " + maxKennels + " kennels total.\nDelete a kennel first to add a new one.");
              return;
            }
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
            if (kennelListSort === "perf") return dir * ((a.perfScore||0) - (b.perfScore||0));
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
                  var hs = a.healthScore||0; var ps = a.perfScore||0;
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
                onRetire: function(a){ retireAnimal(a.id); },
                onRehome: function(a){ if(confirm('Rehome "'+a.name+'"? This removes them from your kennel permanently.')){rehomeAnimal(a.id);} },
                onLock: function(a){ toggleLockDog(a.id); }
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
                  onRetire:function(a){ retireAnimal(a.id); },
                  onRehome:function(a){ if(confirm('Rehome "'+a.name+'"? This removes them from your kennel permanently.')){rehomeAnimal(a.id);} },
                  onLock:function(a){ toggleLockDog(a.id); }
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
  ), // close center content div
  // ── RIGHT SIDEBAR (dog-specific, desktop only) ──
  !isMobile && /*#__PURE__*/React.createElement("div", {
    style: { width: 160, minWidth: 140, display: "flex", flexDirection: "column", gap: 4, padding: "10px 0 10px 6px", overflowY: "auto" }
  },
    /*#__PURE__*/React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.6rem", fontWeight:"bold", textTransform:"uppercase", letterSpacing:"0.08em", padding:"0 6px 4px", borderBottom:"1px solid #2e2218", marginBottom:2 } }, "Dog Management"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setTab("breeders_market"); },
      style: { background: tab==="breeders_market" ? "#2a1e14" : "transparent", border:"none", color: tab==="breeders_market" ? "#e8a020" : "#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%", fontWeight: tab==="breeders_market" ? "bold" : "normal" }
    }, "\uD83C\uDFEA Breeder\u2019s Market"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowBuyDogs(function(v){ return !v; }); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDED2 Buy Dogs"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("breed"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\u26A1 Breed"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setTab("openlitter"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDC3E Open Litters", litter.length > 0 ? " (" + litter.length + ")" : ""),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setTab("whelping"); },
      style: { background:"transparent", border:"none", color: hasWhelpingKennel ? "#b09070" : "#5a4a38", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%", opacity: hasWhelpingKennel ? 1 : 0.5 },
      title: hasWhelpingKennel ? "Whelping Kennel" : "Purchase a Whelping Kennel to unlock"
    }, "\uD83C\uDFE5 Whelping", whelpingLitters.length > 0 ? " (" + whelpingLitters.length + "/2)" : " (0/2)"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setTab("stud"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDC3E Stud (", animals.filter(function(a){ return !a.retired && a.isStud && a.sex==="M"; }).length, ")"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setShowBreedProgram(true); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%", position:"relative" }
    }, "\uD83E\uDDEC Breed Program", breedLineNotify ? /*#__PURE__*/React.createElement("span", {
      style:{ marginLeft:4, width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }
    }) : null),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("shows"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83C\uDF80 Shows"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){ handleTabChange("retired"); },
      style: { background:"transparent", border:"none", color:"#b09070", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83C\uDFDB\uFE0F Legacy (", animals.filter(function(a){ return a.retired; }).length, ")"),
    holdingPups.length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: function(){ setTab("holding"); },
      style: { background:"transparent", border:"1px solid #22c55e", color:"#22c55e", padding:"6px 8px", cursor:"pointer", fontSize:"0.78rem", textAlign:"left", borderRadius:4, display:"block", width:"100%" }
    }, "\uD83D\uDC3E Holding (", holdingPups.length, ")")
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
          if (breedSireSort === "perf") return (b.perfScore||0) - (a.perfScore||0);
          if (breedSireSort === "health") return (b.healthScore||0) - (a.healthScore||0);
          return (a.name||"").localeCompare(b.name||"");
        });
        if (sorted.length === 0) return /*#__PURE__*/React.createElement("div", { style: { color: "#5a4a30", fontSize: "0.8rem", textAlign: "center", padding: "20px 0" } }, "No males available");
        return sorted.map(function(a){
          var reason = breedingIneligibleReason(a);
          var isSel = sire && sire.id === a.id;
          var isDna = breedSireDna === a.id;
          var hs = a.healthScore || 0;
          var ps = a.perfScore || 0;
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
            isDna && renderDogBreedDNA(a)
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
    // ── Pairing Analysis Panel ──────────────────────────────────────────
    sire && dam && sire.sex !== dam.sex && sire.id !== dam.id && sire.genome && dam.genome && (function(){
      var ce = React.createElement;
      var sg = sire.genome, dg = dam.genome;

      // ─── TRAIT COMPARISON (Perf QTLs) ───
      var traitRows = PERF_QTLS.map(function(q) {
        var sV = (sg.perf||{})[q] || [3,3]; var dV = (dg.perf||{})[q] || [3,3];
        var sAvg = (sV[0]+sV[1])/2; var dAvg = (dV[0]+dV[1])/2;
        var pupAvg = (sAvg+dAvg)/2;
        var info = DOG_PERF_QTL_INFO[q] || { icon:"?", label:q, color:"#888" };
        return ce("div", { key:q, style:{ display:"flex", alignItems:"center", gap:4, marginBottom:3 } },
          ce("span", { style:{ width:22, fontSize:"0.7rem", textAlign:"center", flexShrink:0 } }, info.icon),
          ce("span", { style:{ width:40, fontSize:"0.6rem", color:info.color, fontWeight:"bold", flexShrink:0 } }, info.label),
          ce("div", { style:{ flex:1, display:"flex", alignItems:"center", gap:2 } },
            ce("span", { style:{ fontSize:"0.58rem", color:"#60a5fa", width:18, textAlign:"right", flexShrink:0 } }, sAvg.toFixed(1)),
            ce("div", { style:{ flex:1, height:4, background:"#1a1410", borderRadius:2, overflow:"hidden", position:"relative" } },
              ce("div", { style:{ position:"absolute", left:0, top:0, height:"100%", width:Math.round(sAvg/5*100)+"%", background:"#3b82f6", borderRadius:2, opacity:0.5 } }),
              ce("div", { style:{ position:"absolute", left:0, top:0, height:"100%", width:Math.round(dAvg/5*100)+"%", background:"#f472b6", borderRadius:2, opacity:0.5 } }),
              ce("div", { style:{ position:"absolute", left:"calc("+Math.round(pupAvg/5*100)+"% - 2px)", top:-1, width:4, height:6, background:"#d4942a", borderRadius:1 } })
            ),
            ce("span", { style:{ fontSize:"0.58rem", color:"#f472b6", width:18, flexShrink:0 } }, dAvg.toFixed(1))
          ),
          ce("span", { style:{ fontSize:"0.58rem", color:"#d4942a", fontWeight:"bold", width:20, textAlign:"right", flexShrink:0 } }, pupAvg.toFixed(1))
        );
      });

      // ─── HEALTH COMPARISON (Polygenic) ───
      var healthRows = ["HipQ","EyeQ","HeartQ","JointQ"].map(function(loc) {
        var info = DOG_HEALTH_QTL_INFO[loc] || { icon:"?", label:loc, color:"#888" };
        var sA = (sg.health||{})[loc] || ["G","G"]; var dA = (dg.health||{})[loc] || ["G","G"];
        var sGood = (sA[0]==="G"?1:0)+(sA[1]==="G"?1:0);
        var dGood = (dA[0]==="G"?1:0)+(dA[1]==="G"?1:0);
        var sCol = sGood===2?"#22c55e":sGood===1?"#eab308":"#ef4444";
        var dCol = dGood===2?"#22c55e":dGood===1?"#eab308":"#ef4444";
        var sLbl = sGood===2?"Good":sGood===1?"Carrier":"Poor";
        var dLbl = dGood===2?"Good":dGood===1?"Carrier":"Poor";
        // Pup risk
        var bothPoor = sGood===0 && dGood===0;
        var oneCarrier = (sGood===1||dGood===1) && !bothPoor;
        var pupCol = bothPoor?"#ef4444":oneCarrier?"#eab308":"#22c55e";
        return ce("div", { key:loc, style:{ display:"flex", alignItems:"center", gap:4, marginBottom:2 } },
          ce("span", { style:{ width:22, fontSize:"0.7rem", textAlign:"center", flexShrink:0 } }, info.icon),
          ce("span", { style:{ width:38, fontSize:"0.6rem", color:"#8a7055", flexShrink:0 } }, info.label),
          ce("span", { style:{ flex:1, fontSize:"0.58rem", color:sCol, textAlign:"center" } }, sLbl),
          ce("div", { style:{ width:6, height:6, borderRadius:3, background:pupCol, flexShrink:0 } }),
          ce("span", { style:{ flex:1, fontSize:"0.58rem", color:dCol, textAlign:"center" } }, dLbl)
        );
      });

      // ─── DISEASE RISK TABLE ───
      var diseaseRows = ["MDR1","PRA","DM","vWD"].map(function(loc) {
        var sA = (sg.health||{})[loc]; var dA = (dg.health||{})[loc];
        if (!sA || !dA) return null;
        var sAff = sA[0]==="n"&&sA[1]==="n"; var sC = !sAff&&(sA[0]==="n"||sA[1]==="n");
        var dAff = dA[0]==="n"&&dA[1]==="n"; var dC = !dAff&&(dA[0]==="n"||dA[1]==="n");
        var sClr = sAff?"#ef4444":sC?"#f97316":"#22c55e";
        var dClr = dAff?"#ef4444":dC?"#f97316":"#22c55e";
        var sLbl = sAff?"Aff":sC?"Car":"Clr";
        var dLbl = dAff?"Aff":dC?"Car":"Clr";
        var risk = "Safe";
        var rClr = "#22c55e";
        if (sAff&&dAff) { risk="100%"; rClr="#ef4444"; }
        else if ((sAff&&dC)||(sC&&dAff)) { risk="50%"; rClr="#ef4444"; }
        else if (sAff||dAff) { risk="Car"; rClr="#f97316"; }
        else if (sC&&dC) { risk="25%"; rClr="#f97316"; }
        else if (sC||dC) { risk="Safe*"; rClr="#eab308"; }
        return ce("div", { key:loc, style:{ display:"flex", alignItems:"center", gap:3, marginBottom:1 } },
          ce("span", { style:{ width:32, fontSize:"0.58rem", color:"#8a7055", flexShrink:0 } }, loc),
          ce("span", { style:{ flex:1, fontSize:"0.55rem", color:sClr, textAlign:"center" } }, sLbl),
          ce("span", { style:{ flex:1, fontSize:"0.55rem", color:rClr, textAlign:"center", fontWeight:"bold" } }, risk),
          ce("span", { style:{ flex:1, fontSize:"0.55rem", color:dClr, textAlign:"center" } }, dLbl)
        );
      }).filter(Boolean);

      // ─── COAT COLOR PREVIEW (exact Punnett math) ───
      var coatPreview = (function() {
        var sc = sg.coat || {}; var dc = dg.coat || {};
        var allLoci = Object.keys(Object.assign({}, sc, dc));
        // Build per-locus outcome arrays: each entry is { genotype:[a,b], prob:0.25 }
        // If both parents homozygous at a locus, only 1 outcome (prob 1.0) — saves branching
        var lociOutcomes = [];
        var lociNames = [];
        for (var li = 0; li < allLoci.length; li++) {
          var loc = allLoci[li];
          var sa = sc[loc] || ["m","m"]; var da = dc[loc] || ["m","m"];
          var sHomo = sa[0] === sa[1]; var dHomo = da[0] === da[1];
          if (sHomo && dHomo) {
            lociOutcomes.push([{ g:[sa[0], da[0]], p:1.0 }]);
          } else {
            // Deduplicate identical genotypes and sum their probabilities
            var raw = [
              { g:[sa[0],da[0]], p:0.25 }, { g:[sa[0],da[1]], p:0.25 },
              { g:[sa[1],da[0]], p:0.25 }, { g:[sa[1],da[1]], p:0.25 }
            ];
            var deduped = {}; for (var ri=0; ri<raw.length; ri++) {
              var gk = raw[ri].g[0]+"|"+raw[ri].g[1];
              if (!deduped[gk]) deduped[gk] = { g:raw[ri].g, p:0 };
              deduped[gk].p += raw[ri].p;
            }
            lociOutcomes.push(Object.keys(deduped).map(function(k){ return deduped[k]; }));
          }
          lociNames.push(loc);
        }
        // Enumerate all combinations via recursive walk — cap at 50000 paths for safety
        var colorProbs = {}; var pathCount = 0; var MAX_PATHS = 50000;
        function walk(idx, coat, prob) {
          if (pathCount > MAX_PATHS) return;
          if (idx === lociNames.length) {
            pathCount++;
            var col = interpretColor({ coat: coat });
            colorProbs[col] = (colorProbs[col] || 0) + prob;
            return;
          }
          var outcomes = lociOutcomes[idx]; var locName = lociNames[idx];
          for (var oi = 0; oi < outcomes.length; oi++) {
            var next = Object.assign({}, coat);
            next[locName] = outcomes[oi].g;
            walk(idx+1, next, prob * outcomes[oi].p);
          }
        }
        walk(0, {}, 1.0);
        var sorted = Object.keys(colorProbs).sort(function(a,b){ return colorProbs[b]-colorProbs[a]; });
        return sorted.slice(0, 8).map(function(color) {
          var pct = Math.round(colorProbs[color] * 1000) / 10;
          if (pct < 0.5) return null;
          return ce("div", { key:color, style:{ display:"flex", alignItems:"center", gap:4, marginBottom:2 } },
            ce("div", { style:{ width:Math.max(8, Math.round(pct*0.6)), height:6, borderRadius:2,
              background: color.indexOf("Blue")!==-1?"#60a5fa":color.indexOf("Choco")!==-1?"#92400e":
                color.indexOf("Red")!==-1||color.indexOf("Sable")!==-1?"#dc6832":
                color.indexOf("Cream")!==-1||color.indexOf("Yellow")!==-1?"#fde68a":
                color.indexOf("Merle")!==-1?"#a78bfa":color.indexOf("Harlequin")!==-1?"#e0e0e0":
                color.indexOf("Fawn")!==-1?"#d4a060":color.indexOf("Brindle")!==-1?"#b08040":
                color.indexOf("White")!==-1||color.indexOf("Piebald")!==-1?"#f0f0f0":"#6b7280",
              flexShrink:0 } }),
            ce("span", { style:{ fontSize:"0.55rem", color:"#e8d0a8", flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" } }, color),
            ce("span", { style:{ fontSize:"0.55rem", color:"#d4942a", fontWeight:"bold", flexShrink:0 } }, pct+"%")
          );
        }).filter(Boolean);
      })();

      // ─── SIZE PREDICTION ───
      var sizePred = (function() {
        var szStd_s = SIZE_STANDARDS[sire.size||"M"]; var szStd_d = SIZE_STANDARDS[dam.size||"M"];
        var std_s = getBreedHeightStd(sire.breed) || szStd_s; var std_d = getBreedHeightStd(dam.breed) || szStd_d;
        var sW = sire.adultWeight||sire.sizeAvg||szStd_s.weightAvg;
        var dW = dam.adultWeight||dam.sizeAvg||szStd_d.weightAvg;
        var sH = (sire.adultHeight&&sire.adultHeight<=40)?sire.adultHeight:std_s.heightAvg;
        var dH = (dam.adultHeight&&dam.adultHeight<=40)?dam.adultHeight:std_d.heightAvg;
        var avgW = Math.round((sW+dW)/2); var avgH = Math.round(((sH+dH)/2)*10)/10;
        var lowW = Math.round(avgW*0.85); var hiW = Math.round(avgW*1.15);
        var lowH = Math.round((avgH*0.9)*10)/10; var hiH = Math.round((avgH*1.1)*10)/10;
        return { avgW:avgW, avgH:avgH, lowW:lowW, hiW:hiW, lowH:lowH, hiH:hiH, sW:sW, dW:dW, sH:sH, dH:dH };
      })();

      // ─── LITTER SIZE ESTIMATE ───
      var litterEst = (function() {
        var LITTER_RANGES = { S:[1,4], M:[3,7], L:[6,12] };
        var sR = LITTER_RANGES[sire.litterSize||"M"]; var dR = LITTER_RANGES[dam.litterSize||"M"];
        var minN = Math.round((sR[0]+dR[0])/2); var maxN = Math.round((sR[1]+dR[1])/2);
        var coi = calcCOI(sire.id, dam.id, animals);
        if (coi>=50) { minN=Math.max(1,minN-2); maxN=Math.max(1,maxN-3); }
        else if (coi>=25) { minN=Math.max(1,minN-1); maxN=Math.max(1,maxN-2); }
        else if (coi>=12.5) { maxN=Math.max(minN,maxN-1); }
        return { min:minN, max:maxN, coi:coi };
      })();

      // ─── RENDER ───
      return ce("div", { style:{ background:"#1a1408", border:"1px solid #3a2810", borderRadius:8, padding:"8px 6px" } },
        // Header
        ce("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.72rem", textAlign:"center", marginBottom:6,
          borderBottom:"1px solid #2a1e10", paddingBottom:4 } }, "\uD83E\uDDEC Pairing Analysis"),

        // Trait Comparison
        ce("div", { style:{ marginBottom:6 } },
          ce("div", { style:{ display:"flex", justifyContent:"space-between", marginBottom:3 } },
            ce("span", { style:{ fontSize:"0.58rem", color:"#60a5fa" } }, "\u2642 Sire"),
            ce("span", { style:{ fontSize:"0.58rem", color:"#d4942a" } }, "Pup"),
            ce("span", { style:{ fontSize:"0.58rem", color:"#f472b6" } }, "\u2640 Dam")
          ),
          traitRows
        ),

        // Health QTLs
        ce("div", { style:{ marginBottom:6, borderTop:"1px solid #2a1e10", paddingTop:4 } },
          ce("div", { style:{ fontSize:"0.6rem", color:"#4a3a28", textTransform:"uppercase", marginBottom:3 } }, "Health"),
          healthRows
        ),

        // Disease Risk
        diseaseRows.length > 0 && ce("div", { style:{ marginBottom:6, borderTop:"1px solid #2a1e10", paddingTop:4 } },
          ce("div", { style:{ display:"flex", justifyContent:"space-between", marginBottom:2 } },
            ce("span", { style:{ fontSize:"0.55rem", color:"#4a3a28" } }, "DISEASE"),
            ce("span", { style:{ fontSize:"0.55rem", color:"#60a5fa" } }, "\u2642"),
            ce("span", { style:{ fontSize:"0.55rem", color:"#d4942a" } }, "PUP"),
            ce("span", { style:{ fontSize:"0.55rem", color:"#f472b6" } }, "\u2640")
          ),
          diseaseRows
        ),

        // Coat Color Preview
        ce("div", { style:{ marginBottom:6, borderTop:"1px solid #2a1e10", paddingTop:4 } },
          ce("div", { style:{ fontSize:"0.6rem", color:"#4a3a28", textTransform:"uppercase", marginBottom:3 } }, "\uD83C\uDFA8 Possible Coat Colors"),
          coatPreview
        ),

        // Size Prediction
        ce("div", { style:{ marginBottom:6, borderTop:"1px solid #2a1e10", paddingTop:4 } },
          ce("div", { style:{ fontSize:"0.6rem", color:"#4a3a28", textTransform:"uppercase", marginBottom:3 } }, "\uD83D\uDCCF Size Prediction"),
          ce("div", { style:{ display:"flex", justifyContent:"space-between", fontSize:"0.58rem", marginBottom:2 } },
            ce("span", { style:{ color:"#60a5fa" } }, sizePred.sW+" lb / "+sizePred.sH+"\""),
            ce("span", { style:{ color:"#f472b6" } }, sizePred.dW+" lb / "+sizePred.dH+"\"")
          ),
          ce("div", { style:{ textAlign:"center", fontSize:"0.7rem", color:"#e8d0a8", fontWeight:"bold" } },
            "~"+sizePred.lowW+"\u2013"+sizePred.hiW+" lb / "+sizePred.lowH+"\u2013"+sizePred.hiH+"\""),
          ce("div", { style:{ textAlign:"center", fontSize:"0.55rem", color:"#6b5038", marginTop:1 } },
            "avg "+sizePred.avgW+" lb / "+sizePred.avgH+"\"")
        ),

        // Litter Size Estimate
        ce("div", { style:{ borderTop:"1px solid #2a1e10", paddingTop:4 } },
          ce("div", { style:{ fontSize:"0.6rem", color:"#4a3a28", textTransform:"uppercase", marginBottom:3 } }, "\uD83D\uDC3E Litter Estimate"),
          ce("div", { style:{ textAlign:"center" } },
            ce("span", { style:{ fontSize:"0.85rem", color:"#e8d0a8", fontWeight:"bold" } },
              litterEst.min + "\u2013" + litterEst.max + " pups"),
            litterEst.coi >= 12.5 && ce("div", { style:{ fontSize:"0.55rem", color:"#f97316", marginTop:1 } },
              "COI penalty applied (" + litterEst.coi + "%)")
          )
        )
      );
    })(),
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
            if (a.locked) return a; // Frozen — no aging
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
          if (breedDamSort === "perf") return (b.perfScore||0) - (a.perfScore||0);
          if (breedDamSort === "health") return (b.healthScore||0) - (a.healthScore||0);
          return (a.name||"").localeCompare(b.name||"");
        });
        if (sorted.length === 0) return /*#__PURE__*/React.createElement("div", { style: { color: "#5a4a30", fontSize: "0.8rem", textAlign: "center", padding: "20px 0" } }, "No females available");
        return sorted.map(function(a){
          var reason = breedingIneligibleReason(a);
          var isSel = dam && dam.id === a.id;
          var isDna = breedDamDna === a.id;
          var hs = a.healthScore || 0;
          var ps = a.perfScore || 0;
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
            isDna && renderDogBreedDNA(a)
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

  tab === "stud" && /*#__PURE__*/React.createElement(StudTab, {
    animals: animals,
    user: user,
    onToggleStud: toggleStud,
    onEditFee: function(id, fee) {
      setAnimals(function(prev){ return prev.map(function(x){ return x.id===id ? Object.assign({},x,{studFee:Number(fee)}) : x; }); });
    }
  }),
  tab === "breeders_market" && /*#__PURE__*/React.createElement(BreedersMarketTab, {
    animals: animals,
    user: user,
    money: money,
    kennels: kennels,
    activeKennel: activeKennel,
    onListDog: function(id, price) {
      setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{forSale:true,salePrice:Number(price),listedDate:Date.now()}) : a; }); });
    },
    onDelistDog: function(id) {
      setAnimals(function(prev){ return prev.map(function(a){ return a.id===id ? Object.assign({},a,{forSale:false,salePrice:null,listedDate:null}) : a; }); });
    },
    onBuyDog: function(listing, genome) {
      // Look up breed data for proper size/lifespan defaults
      var breedData = breeds.find(function(b){ return b.name === listing.breed; });
      var sizeKey = listing.size || (breedData ? breedData.size : "M");
      var szStd = SIZE_STANDARDS[sizeKey] || SIZE_STANDARDS["M"];
      var breedHt = breedData ? getBreedHeightStd(listing.breed) : null;
      var htStd = breedHt || szStd;
      var newDog = {
        id: "MKT-" + Date.now() + "-" + Math.floor(Math.random()*9999),
        name: listing.dog_name || "Purchased Dog",
        sex: listing.sex || "M",
        breed: listing.breed || "Unknown",
        group: listing.breed_group || (breedData ? breedData.group : ""),
        size: sizeKey,
        sizeAvg: szStd.weightAvg || 40,
        isMixed: (listing.breed||"").indexOf("\u00D7") !== -1,
        genome: genome || {},
        coatColor: listing.coat_color || (genome ? interpretColor(genome) : "Unknown"),
        healthScore: listing.health_score || 50,
        perfScore: listing.perf_score || 50,
        coi: listing.coi || 0,
        vinStr: genome ? buildVIN(genome) : "BA-??????",
        mutations: [],
        generation: 1,
        ageMonths: listing.age_months || 24,
        lifespan: breedData ? (breedData.lifespan || 144) : 144,
        litterSize: breedData ? (breedData.litterSize || "M") : "M",
        born: new Date().toLocaleDateString(),
        adultWeight: szStd.weightAvg || 40,
        adultHeight: htStd.heightAvg || 20,
        sizeVariant: null,
        kennelId: activeKennel ? activeKennel.id : null,
        purchasedFrom: listing.seller_name || "Unknown Breeder",
        purchaseDate: Date.now()
      };
      setAnimals(function(prev){ return prev.concat([newDog]); });
      setMoney(function(m){ return m - (listing.asking_price || 0); });
      setLog(function(lg){ return [{ id:Date.now(), type:"financial",
        name:"\uD83C\uDFEA Bought from Breeder\u2019s Market: " + (listing.dog_name||"dog") + " (" + (listing.breed||"?") + ") \u2014 -$" + (listing.asking_price||0).toLocaleString(),
        amount: -(listing.asking_price||0), date: new Date().toLocaleString() }].concat(lg); });
    }
  }),
  tab === "mail" && /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", flexDirection:"column", flex:1, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(MailView, {
    user: user,
    profile: profile,
    onClose: function(){ setTab("farm"); },
    onUnreadUpdate: function(count){ setUnreadMail(count); }
  })),
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
  }, "\u2192 Go Breed"),
  /*#__PURE__*/React.createElement(Clock, { gameStartDate: gameStartDate }),
  tab === "retired" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"auto" }
  }, /*#__PURE__*/React.createElement(RetiredView, {
    animals: animals.filter(function(a){ return a.retired; }),
    onClose: function(){ setTab("farm"); }
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
    onClose: function(){ setTab("farm"); }
  })),
  tab === "horses" && /*#__PURE__*/React.createElement(HorsesView, {
    horses: (ownedLivestock||[]).filter(function(a){ return a.species==="horse"; }),
    money: money,
    lastShowDates: horseShowDates,
    onRename: function(horse, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===horse.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(horse){
      var sellPrice = Math.round((horse.price||500)*0.85);
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
    onClose: function(){ setTab("farm"); },
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
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
  tab === "sheep" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(SheepView, {
    sheep: (ownedLivestock||[]).filter(function(a){ return a.species==="sheep"; }).map(function(s){
      if (typeof normalizeSheep === "function" && !s.genome) {
        var normalized = normalizeSheep(s);
        if (normalized !== s) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===s.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return s;
    }),
    onRename: function(sheep, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===sheep.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(sheep){
      var sellPrice = Math.round((sheep.price||100)*0.6);
      if (confirm("Sell "+sheep.name+" ("+sheep.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==sheep.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC11 Sold "+sheep.name+" ("+sheep.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    pendingCalves: pendingCalves || [],
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    onBreedSheep: function(sireId, damId){
      var sheepAll = (ownedLivestock||[]).filter(function(a){ return a.species==="sheep"; });
      var sire = sheepAll.find(function(s){ return s.id===sireId; });
      var dam  = sheepAll.find(function(s){ return s.id===damId;  });
      if (!sire || !dam) return;
      var numLambs = Math.random() < 0.3 ? 2 : 1;
      var offspring = [];
      for (var k=0; k<numLambs; k++) { offspring.push(createLamb(sire, dam)); }
      var dueDate = Date.now() + (5 * 24 * 60 * 60 * 1000);
      setPendingCalves(function(prev){ return prev.concat([{
        species: "sheep", sireId: sireId, damId: damId,
        sireName: sire.name || sire.breed, damName: dam.name || dam.breed,
        dueDate: dueDate, offspring: offspring
      }]); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"\uD83D\uDC11 Bred "+sire.name+" \u00D7 "+dam.name+" \u2014 "+numLambs+" lamb"+(numLambs!==1?"s":"")+" due in 5 days",
        date: new Date().toLocaleString() }].concat(lg); });
    },
    onShowsOpen: function(){ setTab("sheepShows"); },
    onListSheepStud: function(id, list, fee) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== id) return a;
        return Object.assign({}, a, { isSheepStud: list, sheepStudFee: list ? fee : null });
      }); });
    },
    user: user,
    money: money,
    onHireRam: function(ram) {
      var fee = ram.fee || 0;
      if (fee > money) { alert("Not enough money to hire this ram!"); return; }
      setMoney(function(m){ return m - fee; });
      setNaturalMating(function(prev) {
        var sheepState = prev.sheep;
        if (typeof sheepState !== "object") sheepState = {};
        return Object.assign({}, prev, { sheep: Object.assign({}, sheepState, {
          hiredCommunityBull: {
            animal_id: ram.animal_id, name: ram.dog_name || ram.breed, breed: ram.breed,
            genome: typeof ram.genome === "string" ? (function(){ try { return JSON.parse(ram.genome); } catch(e){ return null; } })() : ram.genome,
            healthScore: ram.health_score || 0, perfScore: ram.perf_score || 0, coi: ram.coi || 0,
            fee: fee, hiredAt: Date.now()
          }
        }) });
      });
      setLog(function(lg){ return [{ id: Date.now(), type: "financial",
        name: "\uD83D\uDC11 Hired community ram " + (ram.dog_name||ram.breed) + " \u2014 -$" + fee.toLocaleString(),
        amount: -fee, date: new Date().toLocaleString() }].concat(lg); });
    },

    onClose: function(){ setTab("farm"); }
  })),
  tab === "sheepShows" && /*#__PURE__*/React.createElement(SheepShowsView, {
    sheep: (ownedLivestock||[]).filter(function(a){ return a.species==="sheep" && !a.retiredLivestock; }),
    money: money,
    onMoneyChange: setMoney,
    onSheepUpdate: function(updated) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry) { setLog(function(lg){ return [entry].concat(lg); }); },
    lastShowDates: sheepShowDates,
    onShowDatesUpdate: function(nd) { setSheepShowDates(nd); },
    onClose: function(){ setTab("sheep"); }
  }),
  tab === "pigs" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#140810", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(PigView, {
    pigs: (ownedLivestock||[]).filter(function(a){ return a.species==="pig"; }).map(function(s){
      if (typeof normalizePig === "function" && !s.genome) {
        var normalized = normalizePig(s);
        if (normalized !== s) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===s.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return s;
    }),
    onRename: function(pig, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===pig.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(pig){
      var sellPrice = Math.round((pig.price||100)*0.6);
      if (confirm("Sell "+pig.name+" ("+pig.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==pig.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC37 Sold "+pig.name+" ("+pig.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    pendingCalves: pendingCalves || [],
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    onBreedPig: function(sireId, damId){
      var pigAll = (ownedLivestock||[]).filter(function(a){ return a.species==="pig"; });
      var sire = pigAll.find(function(s){ return s.id===sireId; });
      var dam  = pigAll.find(function(s){ return s.id===damId;  });
      if (!sire || !dam) return;
      var numPiglets = Math.floor(Math.random() * 6) + 3;
      var offspring = [];
      for (var k=0; k<numPiglets; k++) { offspring.push(createPiglet(sire, dam)); }
      var dueDate = Date.now() + (4 * 24 * 60 * 60 * 1000);
      setPendingCalves(function(prev){ return prev.concat([{
        species: "pig", sireId: sireId, damId: damId,
        sireName: sire.name || sire.breed, damName: dam.name || dam.breed,
        dueDate: dueDate, offspring: offspring
      }]); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"\uD83D\uDC37 Bred "+sire.name+" \u00D7 "+dam.name+" \u2014 "+numPiglets+" piglet"+(numPiglets!==1?"s":"")+" due in 4 days",
        date: new Date().toLocaleString() }].concat(lg); });
    },
    onShowsOpen: function(){ setTab("pigShows"); },
    onListPigStud: function(id, list, fee) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== id) return a;
        return Object.assign({}, a, { isPigStud: list, pigStudFee: list ? fee : null });
      }); });
    },
    user: user,
    money: money,
    onHireBoar: function(boar) {
      var fee = boar.fee || 0;
      if (fee > money) { alert("Not enough money to hire this boar!"); return; }
      setMoney(function(m){ return m - fee; });
      setNaturalMating(function(prev) {
        var pigState = prev.pig;
        if (typeof pigState !== "object") pigState = {};
        return Object.assign({}, prev, { pig: Object.assign({}, pigState, {
          hiredCommunityBull: {
            animal_id: boar.animal_id, name: boar.dog_name || boar.breed, breed: boar.breed,
            genome: typeof boar.genome === "string" ? (function(){ try { return JSON.parse(boar.genome); } catch(e){ return null; } })() : boar.genome,
            healthScore: boar.health_score || 0, perfScore: boar.perf_score || 0, coi: boar.coi || 0,
            fee: fee, hiredAt: Date.now()
          }
        }) });
      });
      setLog(function(lg){ return [{ id: Date.now(), type: "financial",
        name: "\uD83D\uDC37 Hired community boar " + (boar.dog_name||boar.breed) + " \u2014 -$" + fee.toLocaleString(),
        amount: -fee, date: new Date().toLocaleString() }].concat(lg); });
    },

    onClose: function(){ setTab("farm"); }
  })),
  tab === "pigShows" && /*#__PURE__*/React.createElement(PigShowsView, {
    pigs: (ownedLivestock||[]).filter(function(a){ return a.species==="pig" && !a.retiredLivestock; }),
    money: money,
    onMoneyChange: setMoney,
    onPigUpdate: function(updated) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry) { setLog(function(lg){ return [entry].concat(lg); }); },
    lastShowDates: pigShowDates,
    onShowDatesUpdate: function(nd) { setPigShowDates(nd); },
    onClose: function(){ setTab("pigs"); }
  }),
  tab === "ducks" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#0c1a1e", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(DuckView, {
    ducks: (ownedLivestock||[]).filter(function(a){ return a.species==="duck"; }).map(function(s){
      if (typeof normalizeDuck === "function" && !s.genome) {
        var normalized = normalizeDuck(s);
        if (normalized !== s) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===s.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return s;
    }),
    onRename: function(duck, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===duck.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(duck){
      var sellPrice = Math.round((duck.price||15)*0.6);
      if (confirm("Sell "+duck.name+" ("+duck.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==duck.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83E\uDD86 Sold "+duck.name+" ("+duck.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    pendingCalves: pendingCalves || [],
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    onBreedDuck: function(sireId, damId){
      var duckAll = (ownedLivestock||[]).filter(function(a){ return a.species==="duck"; });
      var sire = duckAll.find(function(s){ return s.id===sireId; });
      var dam  = duckAll.find(function(s){ return s.id===damId;  });
      if (!sire || !dam) return;
      var numDucklings = Math.floor(Math.random() * 7) + 4;
      var offspring = [];
      for (var k=0; k<numDucklings; k++) { offspring.push(createDuckling(sire, dam)); }
      var dueDate = Date.now() + (4 * 24 * 60 * 60 * 1000);
      setPendingCalves(function(prev){ return prev.concat([{
        species: "duck", sireId: sireId, damId: damId,
        sireName: sire.name || sire.breed, damName: dam.name || dam.breed,
        dueDate: dueDate, offspring: offspring
      }]); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"\uD83E\uDD86 Bred "+sire.name+" \u00D7 "+dam.name+" \u2014 "+numDucklings+" duckling"+(numDucklings!==1?"s":"")+" due in 4 days",
        date: new Date().toLocaleString() }].concat(lg); });
    },
    onClose: function(){ setTab("farm"); }
  })),
  tab === "chickens" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#1a1208", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(ChickenView, {
    chickens: (ownedLivestock||[]).filter(function(a){ return a.species==="chicken"; }).map(function(s){
      if (typeof normalizeChicken === "function" && !s.genome) {
        var normalized = normalizeChicken(s);
        if (normalized !== s) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===s.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return s;
    }),
    onRename: function(chicken, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===chicken.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(chicken){
      var sellPrice = Math.round((chicken.price||10)*0.6);
      if (confirm("Sell "+chicken.name+" ("+chicken.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==chicken.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC14 Sold "+chicken.name+" ("+chicken.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    pendingCalves: pendingCalves || [],
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    onBreedChicken: function(sireId, damId){
      var chickenAll = (ownedLivestock||[]).filter(function(a){ return a.species==="chicken"; });
      var sire = chickenAll.find(function(s){ return s.id===sireId; });
      var dam  = chickenAll.find(function(s){ return s.id===damId;  });
      if (!sire || !dam) return;
      var numChicks = Math.floor(Math.random() * 5) + 4;
      var offspring = [];
      for (var k=0; k<numChicks; k++) { offspring.push(createChick(sire, dam)); }
      var dueDate = Date.now() + (3 * 24 * 60 * 60 * 1000);
      setPendingCalves(function(prev){ return prev.concat([{
        species: "chicken", sireId: sireId, damId: damId,
        sireName: sire.name || sire.breed, damName: dam.name || dam.breed,
        dueDate: dueDate, offspring: offspring
      }]); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"\uD83D\uDC14 Bred "+sire.name+" \u00D7 "+dam.name+" \u2014 "+numChicks+" chick"+(numChicks!==1?"s":"")+" due in 3 days",
        date: new Date().toLocaleString() }].concat(lg); });
    },
    onClose: function(){ setTab("farm"); }
  })),
  tab === "cattle" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(CattleView, {
    cattle: (ownedLivestock||[]).filter(function(a){ return a.species==="cow"; }).map(function(c){
      if (typeof normalizeCattle === "function" && !c.genome) {
        var normalized = normalizeCattle(c);
        if (normalized !== c) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===c.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return c;
    }),
    initialFilter: cattleFilterDefault,
    onRename: function(cow, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===cow.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(cow){
      var sellPrice = Math.round((cow.price||500)*0.6);
      if (confirm("Sell "+cow.name+" ("+cow.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==cow.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC04 Sold "+cow.name+" ("+cow.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    onBreed: function(){},
    naturalMatingOn: !!(naturalMating && naturalMating.cow),
    onToggleNaturalMating: function(val) {
      setNaturalMating(function(prev){ return Object.assign({}, prev, { cow: val }); });
    },
    pendingCalves: pendingCalves || [],
    onListCattleStud: function(id, list, fee) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== id) return a;
        return Object.assign({}, a, { isCattleStud: list, cattleStudFee: list ? fee : null });
      }); });
    },
    onShowsOpen: function(){ setTab("cattleShows"); },
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    onClose: function(){ setCattleFilterDefault("all"); setTab("farm"); },
    user: user,
    money: money,
    onHireBull: function(bull) {
      var fee = bull.fee || 0;
      if (fee > money) { alert("Not enough money to hire this bull!"); return; }
      setMoney(function(m){ return m - fee; });
      setNaturalMating(function(prev) {
        var cowState = prev.cow;
        if (typeof cowState !== "object") cowState = {};
        return Object.assign({}, prev, { cow: Object.assign({}, cowState, {
          hiredCommunityBull: {
            animal_id: bull.animal_id,
            name: bull.dog_name || bull.breed,
            breed: bull.breed,
            genome: typeof bull.genome === "string" ? (function(){ try { return JSON.parse(bull.genome); } catch(e){ return null; } })() : bull.genome,
            healthScore: bull.health_score || 0,
            perfScore: bull.perf_score || 0,
            coi: bull.coi || 0,
            fee: fee,
            hiredAt: Date.now()
          }
        }) });
      });
      setLog(function(lg){ return [{ id: Date.now(), type: "financial",
        name: "\uD83E\uDD1D Hired community bull " + (bull.dog_name||bull.breed) + " \u2014 -$" + fee.toLocaleString(),
        amount: -fee, date: new Date().toLocaleString() }].concat(lg); });
    }
  })),
  tab === "goats" && /*#__PURE__*/React.createElement("div", {
    style: { position:"fixed", inset:0, background:"#141008", zIndex:50, overflow:"hidden" }
  }, /*#__PURE__*/React.createElement(GoatView, {
    goats: (ownedLivestock||[]).filter(function(a){ return a.species==="goat"; }).map(function(g){
      if (typeof normalizeGoat === "function" && !g.genome) {
        var normalized = normalizeGoat(g);
        if (normalized !== g) {
          setTimeout(function(){ setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===g.id && !a.genome ? normalized : a; }); }); }, 0);
        }
        return normalized;
      }
      return g;
    }),
    onRename: function(goat, newName){
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===goat.id ? Object.assign({},a,{name:newName}) : a; }); });
    },
    onSell: function(goat){
      var sellPrice = Math.round((goat.price||100)*0.6);
      if (confirm("Sell "+goat.name+" ("+goat.breed+") for $"+sellPrice.toLocaleString()+"?")) {
        setMoney(function(m){ return m+sellPrice; });
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id!==goat.id; }); });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC10 Sold "+goat.name+" ("+goat.breed+") \u2014 +$"+sellPrice.toLocaleString(),
          amount:sellPrice, date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    pendingCalves: pendingCalves || [],
    naturalMatingOn: !!(naturalMating && naturalMating.goat),

    onListGoatStud: function(id, list, fee) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== id) return a;
        return Object.assign({}, a, { isGoatStud: list, goatStudFee: list ? fee : null });
      }); });
    },
    onShowsOpen: function(){ setTab("goatShows"); },
    onLock: function(animal){
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id!==animal.id) return a;
        if (a.locked) {
          var cu = Date.now()+((typeof LOCK_COOLDOWN_MS!=="undefined")?LOCK_COOLDOWN_MS:86400000);
          return Object.assign({},a,{locked:false,lockedCooldownUntil:cu});
        } else {
          if (a.lockedCooldownUntil && Date.now()<a.lockedCooldownUntil) { var h=Math.ceil((a.lockedCooldownUntil-Date.now())/3600000); alert("Lock cooldown active. Can re-lock in ~"+h+" hour(s)."); return a; }
          return Object.assign({},a,{locked:true,lockedAt:Date.now()});
        }
      }); });
    },
    user: user,
    money: money,
    onHireBuck: function(buck) {
      var fee = buck.fee || 0;
      if (fee > money) { alert("Not enough money to hire this buck!"); return; }
      setMoney(function(m){ return m - fee; });
      setNaturalMating(function(prev) {
        var goatState = prev.goat;
        if (typeof goatState !== "object") goatState = {};
        return Object.assign({}, prev, { goat: Object.assign({}, goatState, {
          hiredCommunityBull: {
            animal_id: buck.animal_id,
            name: buck.dog_name || buck.breed,
            breed: buck.breed,
            genome: typeof buck.genome === "string" ? (function(){ try { return JSON.parse(buck.genome); } catch(e){ return null; } })() : buck.genome,
            healthScore: buck.health_score || 0,
            perfScore: buck.perf_score || 0,
            coi: buck.coi || 0,
            fee: fee,
            hiredAt: Date.now()
          }
        }) });
      });
      setLog(function(lg){ return [{ id: Date.now(), type: "financial",
        name: "������ Hired community buck " + (buck.dog_name||buck.breed) + " — -$" + fee.toLocaleString(),
        amount: -fee, date: new Date().toLocaleString() }].concat(lg); });
    },
    onBreedGoat: function(sireId, damId){
      var goats = (ownedLivestock||[]).filter(function(a){ return a.species==="goat"; });
      var sire = goats.find(function(g){ return g.id===sireId; });
      var dam  = goats.find(function(g){ return g.id===damId;  });
      if (!sire || !dam) return;
      // Create 1-3 kids
      var numKids = Math.random() < 0.15 ? 3 : (Math.random() < 0.4 ? 2 : 1);
      var offspring = [];
      for (var k=0; k<numKids; k++) {
        offspring.push(createKid(sire, dam));
      }
      var dueDate = Date.now() + (5 * 24 * 60 * 60 * 1000);
      setPendingCalves(function(prev){ return prev.concat([{
        species: "goat",
        sireId: sireId,
        damId: damId,
        sireName: sire.name || sire.breed,
        damName: dam.name || dam.breed,
        dueDate: dueDate,
        offspring: offspring
      }]); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        return a.id===damId ? Object.assign({},a,{pregnantUntil:dueDate}) : a;
      }); });
      setLog(function(lg){ return [{ id:Date.now(), type:"breeding",
        name:"\uD83D\uDC10 Bred "+sire.name+" \u00D7 "+dam.name+" \u2014 "+numKids+" kid"+(numKids!==1?"s":"")+" due in 5 days",
        date: new Date().toLocaleString() }].concat(lg); });
    },
    onClose: function(){ setTab("farm"); }
  })),
  tab === "goatShows" && /*#__PURE__*/React.createElement(GoatShowsView, {
    goats: (ownedLivestock||[]).filter(function(a){ return a.species==="goat" && !a.retiredLivestock; }),
    money: money,
    onMoneyChange: setMoney,
    onGoatUpdate: function(updated) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry){ setLog(function(lg){ return [entry].concat(_toConsumableArray(lg)); }); },
    lastShowDates: goatShowDates,
    onShowDatesUpdate: setGoatShowDates,
    onClose: function(){ setTab("goats"); }
  }),
  tab === "slaughterhouse" && /*#__PURE__*/React.createElement(SlaughterhouseTab, {
    livestock: (ownedLivestock||[]).filter(function(a){ return a.species !== "horse"; }),
    commodities: commodities,
    onSlaughter: function(animal) {
      if (typeof canSlaughterByAge==="function"&&!canSlaughterByAge(animal.ageMonths||0,animal.species||"cow")){alert("This animal is in decline and can no longer be sent to slaughter.");return;}
      if (typeof canSlaughterByAge==="function"&&!canSlaughterByAge(animal.ageMonths||0,animal.species||"cow")){alert("This animal is in decline and can no longer be sent to slaughter.");return;}
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
      var animalLabel = (animal.name && animal.name !== animal.breed) ? animal.name + " (" + animal.breed + ")" : (animal.breed || species);
      if (confirm("Send " + animalLabel + " to slaughter?\n\n" + (animal.sex==="M"?"\u2642 Male":"\u2640 Female") + " \u00B7 " + (animal.type||"") + "\nHealth: " + (animal.healthScore||0) + " \u00B7 Perf: " + (animal.perfScore||0) + "\n\nYields: " + info.label + " worth $" + info.price)) {
        setOwnedLivestock(function(prev){ return prev.filter(function(a){ return a.id !== animal.id; }); });
        setCommodities(function(c){ return Object.assign({}, c, { [info.commodity]: (c[info.commodity]||0) + 1 }); });
        setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"financial",
          name:"\uD83E\uDE78 Slaughtered: " + animalLabel + " \u2014 " + info.label + " added to inventory",
          date:new Date().toLocaleString() }].concat(lg); });
      }
    },
    onClose: function(){ setTab("farm"); }
  }),
  tab === "cattleShows" && /*#__PURE__*/React.createElement(CattleShowsView, {
    cattle: (ownedLivestock||[]).filter(function(a){ return a.species==="cow" && !a.retiredLivestock; }),
    money: money,
    onMoneyChange: setMoney,
    onCattleUpdate: function(updated) {
      setOwnedLivestock(function(prev){ return prev.map(function(a){ return a.id===updated.id ? updated : a; }); });
    },
    onLog: function(entry){ setLog(function(lg){ return [entry].concat(_toConsumableArray(lg)); }); },
    lastShowDates: cattleShowDates,
    onShowDatesUpdate: setCattleShowDates,
    onClose: function(){ setTab("cattle"); }
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
    farmLayout: farmLayout,
    isMobile: isMobile,
    onUpdateLayout: function(layout){ setFarmLayout(layout); },
    onClose: function(){ setTab("kennel"); },
    onNavigate: function(target, opts){ if(target==="cattle" && opts) setCattleFilterDefault(opts); if(target==="kennel" && opts) setActiveKennelId(opts); setTab(target); },
    onOpenFacilities: function(){ setShowFacilities(true); },
    onOpenMarket: function(){ setShowMarket(true); },
    onOpenShearing: function(){ setShowShearing(true); }
  })),
  // ── Breed line notification banner ──
  breedLineNotify && !showBreedProgram && React.createElement("div", {
    style:{ position:"fixed", top:52, left:"50%", transform:"translateX(-50%)", zIndex:180,
      background:"#0a2a0a", border:"2px solid #22c55e", borderRadius:10,
      padding:"10px 20px", display:"flex", alignItems:"center", gap:12,
      boxShadow:"0 4px 24px rgba(34,197,94,0.3)", cursor:"pointer", maxWidth:500 },
    onClick: function(){ setShowBreedProgram(true); }
  },
    React.createElement("span", { style:{ fontSize:"1.2rem" } }, "\uD83E\uDDEC"),
    React.createElement("div", { style:{ flex:1 } },
      React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.82rem" } },
        "Breeding line ready!"),
      React.createElement("div", { style:{ color:"#4a6a18", fontSize:"0.7rem" } },
        breedLineNotify + " \u2014 click to review")
    ),
    React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); setBreedLineNotify(null); },
      style:{ background:"transparent", border:"none", color:"#4a6a18", cursor:"pointer", fontSize:"1rem", padding:4 }
    }, "\u2715")
  ),
  // ── Breed Program Panel ──
  showBreedProgram && React.createElement(BreedProgramPanel, {
    animals: animals,
    customBreeds: customBreeds,
    onDeclareBreed: handleDeclareBreed,
    onClose: function(){ setShowBreedProgram(false); }
  }),
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
      var isFiberGoat = animal.species === "goat" && animal.type === "fiber";
      var yieldLbs = isFiberGoat ? (animal.fiberYield || (Math.round((Math.random()*2+1.5)*10)/10)) : (animal.shearYield || (Math.floor(Math.random()*4)+7));
      var storageMult = getStorageMult(facilitiesOwned);
      var finalYield = Math.round(yieldLbs * storageMult * 10) / 10;
      setSheepSheared(function(s){ return Object.assign({}, s, { [animal.id]: seasonKey }); });
      setOwnedLivestock(function(prev){ return prev.map(function(a){
        if (a.id !== animal.id) return a;
        if (isFiberGoat) return Object.assign({},a,{fiberYield: Math.round((Math.random()*2+1.5)*10)/10});
        return Object.assign({},a,{shearYield: Math.floor(Math.random()*4)+7});
      }); });
      var commodityKey = isFiberGoat ? "mohair" : "wool";
      setCommodities(function(c){ return Object.assign({}, c, { [commodityKey]: Math.round(((c[commodityKey]||0) + finalYield)*10)/10 }); });
      var label = isFiberGoat ? "\uD83D\uDC10 Sheared: "+(animal.breed||"Goat")+" \u2014 +"+finalYield+" lbs mohair" : "\uD83D\uDC11 Sheared: "+(animal.breed||"Sheep")+" \u2014 +"+finalYield+" lbs wool";
      setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"income",
        name: label,
        date:new Date().toLocaleString() }].concat(lg); });
    },
    onShearAll: function(animals, seasonKey) {
      var storageMult = getStorageMult(facilitiesOwned);
      var totalWool = 0;
      var totalMohair = 0;
      var newSheared = Object.assign({}, sheepSheared);
      var updatedAnimals = ownedLivestock.slice();
      animals.forEach(function(a) {
        var isFiberGoat = a.species === "goat" && a.type === "fiber";
        var yieldLbs = isFiberGoat ? (a.fiberYield || (Math.round((Math.random()*2+1.5)*10)/10)) : (a.shearYield || (Math.floor(Math.random()*4)+7));
        var finalYield = Math.round(yieldLbs * storageMult * 10) / 10;
        if (isFiberGoat) { totalMohair += finalYield; } else { totalWool += finalYield; }
        newSheared[a.id] = seasonKey;
        updatedAnimals = updatedAnimals.map(function(u){
          if (u.id !== a.id) return u;
          if (isFiberGoat) return Object.assign({},u,{fiberYield: Math.round((Math.random()*2+1.5)*10)/10});
          return Object.assign({},u,{shearYield: Math.floor(Math.random()*4)+7});
        });
      });
      totalWool = Math.round(totalWool * 10) / 10;
      totalMohair = Math.round(totalMohair * 10) / 10;
      setSheepSheared(newSheared);
      setOwnedLivestock(updatedAnimals);
      setCommodities(function(c){
        var updated = Object.assign({}, c);
        if (totalWool > 0) updated.wool = Math.round(((c.wool||0) + totalWool)*10)/10;
        if (totalMohair > 0) updated.mohair = Math.round(((c.mohair||0) + totalMohair)*10)/10;
        return updated;
      });
      var parts = [];
      if (totalWool > 0) parts.push(totalWool+" lbs wool");
      if (totalMohair > 0) parts.push(totalMohair+" lbs mohair");
      setLog(function(lg){ return [{ id:Date.now()+Math.random(), type:"income",
        name:"\u2702\uFE0F Sheared "+animals.length+" animals \u2014 +"+parts.join(", "),
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
  showFriends && /*#__PURE__*/React.createElement(FriendsView, {
    user: user,
    onClose: function(){ setShowFriends(false); }
  }),
  showFacilities && /*#__PURE__*/React.createElement(Facilities, {
    onClose: function(){ setShowFacilities(false); },
    money: money,
    facilities: Object.assign({}, facilitiesOwned, hasWhelpingKennel ? { whelping_kennel: { tier: 0 } } : {}),
    onBuy: function(key, cost){
      // Prerequisite: milking_barn requires barn
      if (key === "milking_barn" && !facilitiesOwned.barn) {
        alert("You need to build a Barn first before you can build a Milking Barn."); return;
      }
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
      // Auto-grant grazing land tier 0 with first qualifying livestock facility
      var GRAZING_TRIGGERS = ["barn","milking_barn","goat_pen","pig_pen","stable","shearing_shed"];
      if (GRAZING_TRIGGERS.indexOf(key) !== -1 && !facilitiesOwned.grazing_land) {
        setFacilitiesOwned(function(f){
          if (f.grazing_land) return f;
          var n = Object.assign({}, f); n.grazing_land = {tier:0}; return n;
        });
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83C\uDF3E Grazing Land (5 Acres) included free with your first livestock facility!",
          date:new Date().toLocaleString() }].concat(lg); });
      }
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
        if (species==="cow" && typeof normalizeCattle === "function") {
          finalAnimal = normalizeCattle(finalAnimal);
        }
        if (species==="goat" && typeof normalizeGoat === "function") {
          finalAnimal = normalizeGoat(finalAnimal);
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
      if (typeof canSlaughterByAge==="function"&&!canSlaughterByAge(animal.ageMonths||0,animal.species||"cow")){alert("This animal is in decline and can no longer be sent to slaughter.");return;}
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
  }),
  // Tutorial modal — fixed overlay, renders on top of everything
  activeTutorial ? /*#__PURE__*/React.createElement(TutorialModal, {
    tabKey: activeTutorial,
    onDismiss: function(dontShowAgain) {
      if (dontShowAgain) {
        setTutorialDismissed(function(prev) {
          var updated = Object.assign({}, prev);
          updated[activeTutorial] = true;
          return updated;
        });
      }
      setActiveTutorial(null);
    }
  }) : null
  ))); // close outer div children + outer div + AnimalsContext.Provider
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
              (function(){
                // Prerequisite checks
                var prereqFail = null;
                if (key==="milking_barn" && !facilities.barn) prereqFail = "Requires: Barn";
                if (prereqFail) {
                  return /*#__PURE__*/React.createElement("div",{style:{textAlign:"center",fontSize:"0.72rem",
                    color:"#f59e0b",padding:"6px 0",fontWeight:"bold",border:"1px solid #92400e",
                    borderRadius:6,background:"#1a1408"}},
                    "\uD83D\uDD12 "+prereqFail);
                }
                return !owned
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
              })()
            );
          })
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AuthGate, null));

// ══════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════
// USERNAME MODAL — shown on first login if display_name is not set
// ══════════════════════════════════════════════════════════════
function UsernameModal(props) {
  var user = props.user;
  var currentName = props.currentName || "";
  var onComplete = props.onComplete;
  var _n = _slicedToArray(useState(currentName), 2), nameVal = _n[0], setNameVal = _n[1];
  var _e = _slicedToArray(useState(""), 2), error = _e[0], setError = _e[1];
  var _s = _slicedToArray(useState(false), 2), saving = _s[0], setSaving = _s[1];

  function handleSubmit() {
    var trimmed = nameVal.trim();
    if (trimmed.length < 3) { setError("Username must be at least 3 characters"); return; }
    if (trimmed.length > 20) { setError("Username must be 20 characters or less"); return; }
    if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) { setError("Letters, numbers, and underscores only"); return; }
    setSaving(true);
    setError("");
    // Check if name is taken
    window.baSupabaseSync.lookupPlayerByName(trimmed).then(function(results) {
      var taken = results.some(function(r){ return r.display_name.toLowerCase() === trimmed.toLowerCase() && r.id !== user.id; });
      if (taken) { setError("That username is already taken"); setSaving(false); return; }
      // Save it
      window.baSupabaseSync.updateDisplayName(user.id, trimmed).then(function(updated) {
        if (updated) { onComplete(updated); }
        else { setError("Failed to save. Try again."); setSaving(false); }
      }).catch(function() { setError("Failed to save. Try again."); setSaving(false); });
    }).catch(function() { setError("Could not check username. Try again."); setSaving(false); });
  }

  return React.createElement("div", {
    style: { height:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"#0a0f1e", padding:20 }
  },
    React.createElement("div", {
      style: { background:"#1a1410", border:"2px solid #d4942a", borderRadius:16, padding:"32px 28px",
        maxWidth:420, width:"100%", boxShadow:"0 8px 40px rgba(0,0,0,0.7)" }
    },
      React.createElement("div", { style:{ textAlign:"center", marginBottom:20 } },
        React.createElement("div", { style:{ fontSize:"2.5rem", marginBottom:8 } }, "\uD83D\uDC3E"),
        React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"1.3rem" } }, "Welcome to Bloodline Acres!"),
        React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.85rem", marginTop:6 } }, "Choose a username for your farm. Other players will see this name.")
      ),
      React.createElement("input", {
        value: nameVal,
        onChange: function(e){ setNameVal(e.target.value); setError(""); },
        onKeyDown: function(e){ if(e.key==="Enter" && !saving) handleSubmit(); },
        placeholder: "Your farm name...",
        maxLength: 20,
        style: { width:"100%", background:"#0a0f1e", border:"2px solid "+(error?"#ef4444":"#4a3a28"), color:"#f0e6d3",
          borderRadius:8, padding:"12px 14px", fontSize:"1rem", boxSizing:"border-box", marginBottom:8, outline:"none" }
      }),
      React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem", marginBottom:12 } },
        "3\u201320 characters \u00B7 Letters, numbers, underscores"),
      error && React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.8rem", marginBottom:10, padding:"6px 10px",
        background:"#1a0808", border:"1px solid #5a1a1a", borderRadius:6 } }, error),
      React.createElement("button", {
        onClick: handleSubmit,
        disabled: saving || nameVal.trim().length < 3,
        style: { width:"100%", padding:"12px 0", borderRadius:8, cursor: saving?"wait":"pointer",
          background: saving?"#1a1410":"#2a1a08", border:"2px solid #d4942a", color:"#d4942a",
          fontSize:"1rem", fontWeight:"bold" }
      }, saving ? "Saving..." : "\u2705 Set Username")
    )
  );
}

// ══════════════════════════════════════════════════════════════
// FRIENDS VIEW — Add, Accept, Remove friends
// ══════════════════════════════════════════════════════════════
function FriendsView(props) {
  var user = props.user;
  var _dragF = useDrag(), dragHandlePropsF = _dragF.dragHandleProps, panelStyleF = _dragF.panelStyle;
  var _fList = _slicedToArray(React.useState([]), 2), friendRows = _fList[0], setFriendRows = _fList[1];
  var _fNames = React.useRef({});
  var _fLoading = _slicedToArray(React.useState(true), 2), loading = _fLoading[0], setLoading = _fLoading[1];
  var _fErr = _slicedToArray(React.useState(""), 2), err = _fErr[0], setErr = _fErr[1];
  var _fOk = _slicedToArray(React.useState(""), 2), okMsg = _fOk[0], setOkMsg = _fOk[1];
  var _fTo = _slicedToArray(React.useState(""), 2), toName = _fTo[0], setToName = _fTo[1];
  var _fSending = _slicedToArray(React.useState(false), 2), sending = _fSending[0], setSending = _fSending[1];
  var _fSearch = _slicedToArray(React.useState([]), 2), searchResults = _fSearch[0], setSearchResults = _fSearch[1];
  var _fSearchTimer = React.useRef(null);

  function handleToSearch(val) {
    setToName(val);
    setErr(""); setOkMsg("");
    if (_fSearchTimer.current) clearTimeout(_fSearchTimer.current);
    if (val.trim().length < 2) { setSearchResults([]); return; }
    _fSearchTimer.current = setTimeout(function(){
      window.baSupabaseSync.searchPlayers(val.trim()).then(function(results){
        setSearchResults((results||[]).filter(function(r){ return r.id !== user.id; }));
      });
    }, 300);
  }

  function loadFriends() {
    setLoading(true);
    window.baSupabaseSync.fetchFriends(user.id).then(function(rows) {
      setFriendRows(rows || []);
      // resolve display names for all user_ids and friend_ids
      var ids = {};
      (rows || []).forEach(function(r) { ids[r.user_id] = true; ids[r.friend_id] = true; });
      var unknownIds = Object.keys(ids).filter(function(id) { return !_fNames.current[id]; });
      if (unknownIds.length > 0) {
        // batch lookup display names
        var filter = unknownIds.map(function(id){ return "id.eq." + id; }).join(",");
        fetch("https://vjxaltcdvxlmnmymkcox.supabase.co/rest/v1/profiles?or=(" + filter + ")&select=id,display_name", {
          headers: { "apikey": window.sb ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGFsdGNkdnhsbW5teW1rY294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjgxMjMsImV4cCI6MjA4ODg0NDEyM30.p-zRdzhyGpDd_ujKj1ScfPnIjiIgQEkOSxdy_BgrEeE" : "", "Authorization": "Bearer " + window.baSupabaseSync.getToken() }
        }).then(function(r){ return r.json(); }).then(function(profiles) {
          (profiles || []).forEach(function(p) { _fNames.current[p.id] = p.display_name || "Unknown"; });
          setLoading(false);
        }).catch(function(){ setLoading(false); });
      } else {
        setLoading(false);
      }
    }).catch(function(e) { setErr("Could not load friends"); setLoading(false); });
  }

  React.useEffect(function() { loadFriends(); }, []);

  function getName(id) { return _fNames.current[id] || id.substring(0,8) + "..."; }

  function handleSendRequest() {
    var trimTo = toName.trim();
    if (!trimTo) { setErr("Enter a player name"); return; }
    setSending(true); setErr(""); setOkMsg("");
    window.baSupabaseSync.lookupPlayerByName(trimTo).then(function(results) {
      var match = results.find(function(r){ return r.display_name.toLowerCase() === trimTo.toLowerCase(); });
      if (!match) { setErr("Player \"" + trimTo + "\" not found"); setSending(false); return; }
      if (match.id === user.id) { setErr("You can't add yourself"); setSending(false); return; }
      // check if already friends or pending
      var existing = friendRows.find(function(r) {
        return (r.user_id === user.id && r.friend_id === match.id) || (r.friend_id === user.id && r.user_id === match.id);
      });
      if (existing) {
        if (existing.status === "accepted") { setErr("Already friends with " + match.display_name); }
        else if (existing.status === "pending") { setErr("Friend request already pending"); }
        else { setErr("Cannot send request to this player"); }
        setSending(false); return;
      }
      window.baSupabaseSync.sendFriendRequest(user.id, match.id).then(function() {
        setOkMsg("Friend request sent to " + match.display_name + "!");
        _fNames.current[match.id] = match.display_name;
        setToName("");
        setSending(false);
        loadFriends();
      }).catch(function(e) { setErr("Failed to send request: " + (e.message || e)); setSending(false); });
    }).catch(function() { setErr("Could not look up player"); setSending(false); });
  }

  var pending = friendRows.filter(function(r) { return r.status === "pending" && r.friend_id === user.id; });
  var outgoing = friendRows.filter(function(r) { return r.status === "pending" && r.user_id === user.id; });
  var accepted = friendRows.filter(function(r) { return r.status === "accepted"; });

  var bstyle = { background:"transparent", border:"1px solid #4a3a28", color:"#b09070", borderRadius:4, padding:"3px 8px", cursor:"pointer", fontSize:"0.7rem" };

  return React.createElement("div", {
    style:{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.85)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center" }
  },
    React.createElement("div", {
      style: Object.assign({ background:"#0a0f1e", border:"1px solid #4a3a28", borderRadius:14, width:"min(550px,95vw)", maxHeight:"85vh", display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.8)" }, panelStyleF)
    },
      // Header
      React.createElement("div", Object.assign({}, dragHandlePropsF, { style: Object.assign({ display:"flex", alignItems:"center", padding:"14px 18px", borderBottom:"1px solid #2e2218", gap:12, userSelect:"none" }, dragHandlePropsF.style) }),
        React.createElement("div", { style:{ fontSize:"1.1rem", fontWeight:"bold", color:"#f0e6d3", flex:1 } }, "\uD83E\uDD1D Friends"),
        React.createElement("button", { onClick: props.onClose, onMouseDown:function(e){e.stopPropagation();},
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#b09070", borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.8rem" } }, "\u2715 Close")
      ),
      // Add friend
      React.createElement("div", { style:{ padding:"12px 18px", borderBottom:"1px solid #2e2218", position:"relative" } },
        React.createElement("div", { style:{ display:"flex", gap:8, alignItems:"center" } },
          React.createElement("input", {
            value: toName, onChange: function(e){ handleToSearch(e.target.value); },
            onKeyDown: function(e){ if(e.key==="Enter"){ setSearchResults([]); handleSendRequest(); } },
            placeholder: "Enter player name...",
            style:{ flex:1, background:"#1a1410", border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:6, padding:"6px 10px", fontSize:"0.82rem", outline:"none" }
          }),
          React.createElement("button", {
            onClick: function(){ setSearchResults([]); handleSendRequest(); }, disabled: sending,
            style:{ background:"#1e2a12", border:"1px solid #5aaa30", color:"#5aaa30", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontSize:"0.78rem", fontWeight:"bold", opacity: sending ? 0.5 : 1 }
          }, sending ? "Sending..." : "\u2795 Add Friend")
        ),
        searchResults.length > 0 && toName.trim().length >= 2 && React.createElement("div", {
          style:{ position:"absolute", left:18, right:18, top:"100%", background:"#1a1410",
            border:"1px solid #4a3a28", borderRadius:"0 0 6px 6px", zIndex:10, maxHeight:150, overflowY:"auto" }
        },
          searchResults.map(function(r) {
            return React.createElement("div", { key:r.id,
              onClick: function(){ setToName(r.display_name); setSearchResults([]); },
              style:{ padding:"8px 12px", cursor:"pointer", borderBottom:"1px solid #2e2218",
                color:"#f0e6d3", fontSize:"0.82rem" }
            },
              r.display_name + " \u00B7 #" + String(r.account_number).padStart(4, "0")
            );
          })
        )
      ),
      err && React.createElement("div", { style:{ padding:"6px 18px", color:"#ef4444", fontSize:"0.75rem", background:"#1a0808" } }, err),
      okMsg && React.createElement("div", { style:{ padding:"6px 18px", color:"#22c55e", fontSize:"0.75rem", background:"#0a1a0a" } }, okMsg),
      // Content
      React.createElement("div", { style:{ overflowY:"auto", flex:1, padding:"12px 18px" } },
        loading ? React.createElement("div", { style:{ textAlign:"center", color:"#6b5038", padding:"30px 0" } }, "Loading...") :
        React.createElement(React.Fragment, null,
          // Incoming requests
          pending.length > 0 && React.createElement("div", { style:{ marginBottom:16 } },
            React.createElement("div", { style:{ color:"#e8a020", fontSize:"0.78rem", fontWeight:"bold", marginBottom:6 } }, "\uD83D\uDD14 Incoming Requests (" + pending.length + ")"),
            pending.map(function(r) {
              return React.createElement("div", { key: r.id, style:{ display:"flex", alignItems:"center", gap:8, padding:"6px 8px", background:"#1a1410", borderRadius:6, border:"1px solid #443828", marginBottom:4 } },
                React.createElement("span", { style:{ flex:1, fontSize:"0.8rem", color:"#f0e6d3" } }, getName(r.user_id)),
                React.createElement("button", { onClick: function(){ window.baSupabaseSync.respondFriendRequest(r.id, "accepted").then(function(){ loadFriends(); }); }, style: Object.assign({}, bstyle, { borderColor:"#22c55e", color:"#22c55e" }) }, "\u2714 Accept"),
                React.createElement("button", { onClick: function(){ window.baSupabaseSync.removeFriend(r.id).then(function(){ loadFriends(); }); }, style: Object.assign({}, bstyle, { borderColor:"#ef4444", color:"#ef4444" }) }, "\u2718 Decline")
              );
            })
          ),
          // Outgoing requests
          outgoing.length > 0 && React.createElement("div", { style:{ marginBottom:16 } },
            React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.78rem", fontWeight:"bold", marginBottom:6 } }, "\u23F3 Pending Sent (" + outgoing.length + ")"),
            outgoing.map(function(r) {
              return React.createElement("div", { key: r.id, style:{ display:"flex", alignItems:"center", gap:8, padding:"6px 8px", background:"#1a1410", borderRadius:6, border:"1px solid #2e2218", marginBottom:4 } },
                React.createElement("span", { style:{ flex:1, fontSize:"0.8rem", color:"#8a7055" } }, getName(r.friend_id) + " \u2014 waiting..."),
                React.createElement("button", { onClick: function(){ window.baSupabaseSync.removeFriend(r.id).then(function(){ loadFriends(); }); }, style: Object.assign({}, bstyle, { borderColor:"#ef4444", color:"#ef4444" }) }, "\u2718 Cancel")
              );
            })
          ),
          // Accepted friends
          React.createElement("div", null,
            React.createElement("div", { style:{ color:"#22c55e", fontSize:"0.78rem", fontWeight:"bold", marginBottom:6 } }, "\u2705 Friends (" + accepted.length + ")"),
            accepted.length === 0 ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", padding:"20px 0", textAlign:"center" } }, "No friends yet. Add someone above!") :
            accepted.map(function(r) {
              var friendUserId = r.user_id === user.id ? r.friend_id : r.user_id;
              return React.createElement("div", { key: r.id, style:{ display:"flex", alignItems:"center", gap:8, padding:"6px 8px", background:"#0a1a0a", borderRadius:6, border:"1px solid #1a3a1a", marginBottom:4 } },
                React.createElement("span", { style:{ flex:1, fontSize:"0.8rem", color:"#f0e6d3" } }, "\uD83D\uDC64 " + getName(friendUserId)),
                React.createElement("button", { onClick: function(){ if(confirm("Remove " + getName(friendUserId) + " from friends?")) window.baSupabaseSync.removeFriend(r.id).then(function(){ loadFriends(); }); }, style: Object.assign({}, bstyle, { borderColor:"#ef4444", color:"#ef4444" }) }, "Unfriend")
              );
            })
          )
        )
      ),
      // Refresh
      React.createElement("div", { style:{ padding:"8px 18px", borderTop:"1px solid #2e2218", textAlign:"center" } },
        React.createElement("button", { onClick: function(){ loadFriends(); setErr(""); setOkMsg(""); },
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:6, padding:"4px 16px", cursor:"pointer", fontSize:"0.72rem" } }, "\u21BB Refresh")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════
// MAIL VIEW — Inbox, Sent, Compose
// ══════════════════════════════════════════════════════════════
function MailView(props) {
  var user = props.user;
  var profile = props.profile;
  var onClose = props.onClose;
  var onUnreadUpdate = props.onUnreadUpdate || function(){};

  var _sub = _slicedToArray(useState("inbox"), 2), subTab = _sub[0], setSubTab = _sub[1];
  var _inbox = _slicedToArray(useState([]), 2), inbox = _inbox[0], setInbox = _inbox[1];
  var _sent = _slicedToArray(useState([]), 2), sent = _sent[0], setSent = _sent[1];
  var _loading = _slicedToArray(useState(false), 2), loading = _loading[0], setLoading = _loading[1];
  var _readMsg = _slicedToArray(useState(null), 2), readMsg = _readMsg[0], setReadMsg = _readMsg[1];
  var _replyTo = _slicedToArray(useState(null), 2), replyTo = _replyTo[0], setReplyTo = _replyTo[1];
  // Compose state
  var _toName = _slicedToArray(useState(""), 2), toName = _toName[0], setToName = _toName[1];
  var _subject = _slicedToArray(useState(""), 2), subject = _subject[0], setSubject = _subject[1];
  var _body = _slicedToArray(useState(""), 2), body = _body[0], setBody = _body[1];
  var _sendErr = _slicedToArray(useState(""), 2), sendErr = _sendErr[0], setSendErr = _sendErr[1];
  var _sending = _slicedToArray(useState(false), 2), sending = _sending[0], setSending = _sending[1];
  var _sendOk = _slicedToArray(useState(""), 2), sendOk = _sendOk[0], setSendOk = _sendOk[1];
  // Player search results
  var _searchResults = _slicedToArray(useState([]), 2), searchResults = _searchResults[0], setSearchResults = _searchResults[1];
  var _searchTimeout = React.useRef(null);
  // Sender name cache
  var _nameCache = React.useRef({});

  function refreshInbox() {
    if (!user || !window.baSupabaseSync) return;
    setLoading(true);
    window.baSupabaseSync.fetchInbox(user.id).then(function(rows) {
      setInbox(rows || []);
      setLoading(false);
      // Resolve sender names
      var uniqueIds = {};
      (rows||[]).forEach(function(m){ if(m.from_user) uniqueIds[m.from_user]=true; });
      Object.keys(uniqueIds).forEach(function(uid){
        if (_nameCache.current[uid]) return;
        window.baSupabaseSync.fetchProfile(uid).then(function(p){
          if(p) _nameCache.current[uid] = p.display_name || "Player #"+p.account_number;
          setInbox(function(prev){ return prev.slice(); }); // force re-render
        });
      });
      // Update unread count
      var unread = (rows||[]).filter(function(m){ return !m.read; }).length;
      onUnreadUpdate(unread);
    }).catch(function(){ setLoading(false); });
  }

  function refreshSent() {
    if (!user || !window.baSupabaseSync) return;
    setLoading(true);
    window.baSupabaseSync.fetchSent(user.id).then(function(rows) {
      setSent(rows || []);
      setLoading(false);
      var uniqueIds = {};
      (rows||[]).forEach(function(m){ if(m.to_user) uniqueIds[m.to_user]=true; });
      Object.keys(uniqueIds).forEach(function(uid){
        if (_nameCache.current[uid]) return;
        window.baSupabaseSync.fetchProfile(uid).then(function(p){
          if(p) _nameCache.current[uid] = p.display_name || "Player #"+p.account_number;
          setSent(function(prev){ return prev.slice(); });
        });
      });
    }).catch(function(){ setLoading(false); });
  }

  useEffect(function() {
    if (subTab === "inbox") refreshInbox();
    else if (subTab === "sent") refreshSent();
  }, [subTab]);

  function openMessage(msg) {
    setReadMsg(msg);
    if (!msg.read && msg.to_user === user.id) {
      window.baSupabaseSync.markMessageRead(msg.id).then(function(){
        setInbox(function(prev){ return prev.map(function(m){ return m.id===msg.id ? Object.assign({},m,{read:true}) : m; }); });
        onUnreadUpdate(inbox.filter(function(m){ return !m.read && m.id !== msg.id; }).length);
      });
    }
  }

  function handleDelete(msgId) {
    if (!confirm("Delete this message?")) return;
    window.baSupabaseSync.deleteMessage(msgId).then(function(){
      setInbox(function(prev){ return prev.filter(function(m){ return m.id !== msgId; }); });
      setReadMsg(null);
    });
  }

  function startReply(msg) {
    var senderName = _nameCache.current[msg.from_user] || "";
    setToName(senderName);
    setSubject("Re: " + (msg.subject || ""));
    setBody("");
    setReplyTo(msg);
    setSubTab("compose");
    setSendErr("");
    setSendOk("");
  }

  function handleSend() {
    var trimTo = toName.trim();
    if (!trimTo) { setSendErr("Enter a recipient"); return; }
    if (!body.trim()) { setSendErr("Message body cannot be empty"); return; }
    setSending(true); setSendErr(""); setSendOk("");
    window.baSupabaseSync.lookupPlayerByName(trimTo).then(function(results) {
      var match = results.find(function(r){ return r.display_name.toLowerCase() === trimTo.toLowerCase(); });
      if (!match) { setSendErr("Player \""+trimTo+"\" not found"); setSending(false); return; }
      if (match.id === user.id) { setSendErr("You can't send a message to yourself"); setSending(false); return; }
      window.baSupabaseSync.sendMessage(user.id, match.id, subject.trim(), body.trim()).then(function(){
        setSendOk("Message sent to " + match.display_name + "!");
        setSending(false);
        setToName(""); setSubject(""); setBody(""); setReplyTo(null);
      }).catch(function(err){ setSendErr("Send failed: "+(err.message||err)); setSending(false); });
    }).catch(function(){ setSendErr("Could not look up player"); setSending(false); });
  }

  function handleToSearch(val) {
    setToName(val);
    setSendErr("");
    if (_searchTimeout.current) clearTimeout(_searchTimeout.current);
    if (val.trim().length < 2) { setSearchResults([]); return; }
    _searchTimeout.current = setTimeout(function(){
      window.baSupabaseSync.searchPlayers(val.trim()).then(function(results){
        setSearchResults((results||[]).filter(function(r){ return r.id !== user.id; }));
      });
    }, 300);
  }

  function getName(uid) {
    return _nameCache.current[uid] || "Player";
  }

  var subTabStyle = function(key) {
    return { background: subTab===key?"#2a1a08":"transparent", border:"1px solid "+(subTab===key?"#d4942a":"#4a3a28"),
      color: subTab===key?"#d4942a":"#8a7055", borderRadius:"6px 6px 0 0", padding:"6px 14px", cursor:"pointer",
      fontSize:"0.8rem", fontWeight: subTab===key?"bold":"normal" };
  };

  function formatDate(ts) {
    if (!ts) return "";
    var d = new Date(ts);
    var now = new Date();
    var diff = now - d;
    if (diff < 60000) return "just now";
    if (diff < 3600000) return Math.floor(diff/60000) + "m ago";
    if (diff < 86400000) return Math.floor(diff/3600000) + "h ago";
    if (diff < 604800000) return Math.floor(diff/86400000) + "d ago";
    return d.toLocaleDateString();
  }

  return React.createElement("div", { style:{ display:"flex", flexDirection:"column", height:"100%", overflow:"hidden" } },
    // Header
    React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"12px 16px", borderBottom:"1px solid #4a3a28", flexShrink:0 } },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10 } },
        React.createElement("span", { style:{ fontSize:"1.3rem" } }, "\uD83D\uDCEC"),
        React.createElement("div", null,
          React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"1.05rem" } }, "Mail"),
          React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
            profile ? ("Logged in as " + profile.display_name + " \u00B7 #" + String(profile.account_number).padStart(4, "0")) : "")
        )
      ),
      React.createElement("button", { onClick:onClose,
        style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
          borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.82rem" }
      }, "\u2190 Back")
    ),
    // Sub-tabs
    React.createElement("div", { style:{ display:"flex", gap:4, padding:"8px 16px", borderBottom:"1px solid #2e2218", flexShrink:0 } },
      React.createElement("button", { onClick:function(){ setSubTab("inbox"); setReadMsg(null); }, style:subTabStyle("inbox") },
        "\uD83D\uDCE5 Inbox" + (inbox.filter(function(m){return !m.read;}).length > 0 ? " ("+inbox.filter(function(m){return !m.read;}).length+")" : "")),
      React.createElement("button", { onClick:function(){ setSubTab("sent"); setReadMsg(null); }, style:subTabStyle("sent") }, "\uD83D\uDCE4 Sent"),
      React.createElement("button", { onClick:function(){ setSubTab("compose"); setReadMsg(null); setSendErr(""); setSendOk(""); }, style:subTabStyle("compose") }, "\u270F\uFE0F Compose")
    ),
    // Content
    React.createElement("div", { style:{ flex:1, overflowY:"auto", padding:"12px 16px" } },

      // ── INBOX ──
      subTab === "inbox" && React.createElement("div", null,
        loading ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "Loading...")
        : readMsg ? React.createElement("div", null,
            React.createElement("button", { onClick:function(){ setReadMsg(null); },
              style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055",
                borderRadius:5, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem", marginBottom:12 }
            }, "\u2190 Back to Inbox"),
            React.createElement("div", { style:{ background:"#1a1410", border:"1px solid #4a3a28", borderRadius:10, padding:"16px 18px" } },
              React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 } },
                React.createElement("div", null,
                  React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"1rem", marginBottom:4 } }, readMsg.subject || "(No subject)"),
                  React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem" } }, "From: " + getName(readMsg.from_user) + " \u00B7 " + formatDate(readMsg.created_at))
                ),
                React.createElement("div", { style:{ display:"flex", gap:6 } },
                  React.createElement("button", { onClick:function(){ startReply(readMsg); },
                    style:{ background:"#0a1a2a", border:"1px solid #60a5fa", color:"#60a5fa",
                      borderRadius:5, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
                  }, "\u21A9 Reply"),
                  React.createElement("button", { onClick:function(){ handleDelete(readMsg.id); },
                    style:{ background:"#1a0808", border:"1px solid #5a2a2a", color:"#ef4444",
                      borderRadius:5, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
                  }, "\uD83D\uDDD1 Delete")
                )
              ),
              React.createElement("div", { style:{ color:"#e8d0a8", fontSize:"0.88rem", lineHeight:1.6, whiteSpace:"pre-wrap", padding:"12px 0",
                borderTop:"1px solid #2e2218" } }, readMsg.body || "")
            )
          )
        : inbox.length === 0
          ? React.createElement("div", { style:{ textAlign:"center", padding:"40px 0" } },
              React.createElement("div", { style:{ fontSize:"2rem", opacity:0.3, marginBottom:8 } }, "\uD83D\uDCEC"),
              React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.85rem" } }, "Your inbox is empty"))
          : inbox.map(function(msg) {
              var unread = !msg.read;
              return React.createElement("div", { key:msg.id,
                onClick: function(){ openMessage(msg); },
                style:{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px",
                  background: unread?"#1a1808":"#141008", border:"1px solid "+(unread?"#d4942a":"#2e2218"),
                  borderRadius:8, marginBottom:6, cursor:"pointer" }
              },
                unread && React.createElement("div", { style:{ width:8, height:8, borderRadius:4, background:"#d4942a", flexShrink:0 } }),
                React.createElement("div", { style:{ flex:1, overflow:"hidden" } },
                  React.createElement("div", { style:{ color: unread?"#f0e6d3":"#b09070", fontWeight: unread?"bold":"normal", fontSize:"0.85rem",
                    whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" } }, msg.subject || "(No subject)"),
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
                    "From: " + getName(msg.from_user) + " \u00B7 " + formatDate(msg.created_at))
                ),
                React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.65rem", flexShrink:0 } }, formatDate(msg.created_at))
              );
            })
      ),

      // ── SENT ──
      subTab === "sent" && React.createElement("div", null,
        loading ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "Loading...")
        : sent.length === 0
          ? React.createElement("div", { style:{ textAlign:"center", padding:"40px 0" } },
              React.createElement("div", { style:{ fontSize:"2rem", opacity:0.3, marginBottom:8 } }, "\uD83D\uDCE4"),
              React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.85rem" } }, "No sent messages"))
          : sent.map(function(msg) {
              return React.createElement("div", { key:msg.id,
                style:{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px",
                  background:"#141008", border:"1px solid #2e2218", borderRadius:8, marginBottom:6 }
              },
                React.createElement("div", { style:{ flex:1, overflow:"hidden" } },
                  React.createElement("div", { style:{ color:"#b09070", fontSize:"0.85rem",
                    whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" } }, msg.subject || "(No subject)"),
                  React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } },
                    "To: " + getName(msg.to_user) + " \u00B7 " + formatDate(msg.created_at))
                ),
                React.createElement("div", { style:{ color: msg.read?"#22c55e":"#8a7055", fontSize:"0.65rem", flexShrink:0 } },
                  msg.read ? "\u2705 Read" : "\u23F3 Unread")
              );
            })
      ),

      // ── COMPOSE ──
      subTab === "compose" && React.createElement("div", null,
        React.createElement("div", { style:{ marginBottom:12 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:4 } }, "To:"),
          React.createElement("div", { style:{ position:"relative" } },
            React.createElement("input", { value:toName, onChange:function(e){ handleToSearch(e.target.value); },
              placeholder: "Player name...",
              style:{ width:"100%", background:"#0a0f1e", border:"1px solid #4a3a28", color:"#f0e6d3",
                borderRadius:6, padding:"8px 12px", fontSize:"0.88rem", boxSizing:"border-box" }
            }),
            searchResults.length > 0 && toName.trim().length >= 2 && React.createElement("div", {
              style:{ position:"absolute", top:"100%", left:0, right:0, background:"#1a1410",
                border:"1px solid #4a3a28", borderRadius:"0 0 6px 6px", zIndex:10, maxHeight:150, overflowY:"auto" }
            },
              searchResults.map(function(r) {
                return React.createElement("div", { key:r.id,
                  onClick: function(){ setToName(r.display_name); setSearchResults([]); },
                  style:{ padding:"8px 12px", cursor:"pointer", borderBottom:"1px solid #2e2218",
                    color:"#f0e6d3", fontSize:"0.82rem" }
                },
                  r.display_name + " \u00B7 #" + String(r.account_number).padStart(4, "0")
                );
              })
            )
          )
        ),
        React.createElement("div", { style:{ marginBottom:12 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:4 } }, "Subject:"),
          React.createElement("input", { value:subject, onChange:function(e){ setSubject(e.target.value); },
            placeholder: "Subject...", maxLength:200,
            style:{ width:"100%", background:"#0a0f1e", border:"1px solid #4a3a28", color:"#f0e6d3",
              borderRadius:6, padding:"8px 12px", fontSize:"0.88rem", boxSizing:"border-box" }
          })
        ),
        React.createElement("div", { style:{ marginBottom:12 } },
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:4 } }, "Message:"),
          React.createElement("textarea", { value:body, onChange:function(e){ setBody(e.target.value); },
            placeholder: "Write your message...", maxLength:5000, rows:8,
            style:{ width:"100%", background:"#0a0f1e", border:"1px solid #4a3a28", color:"#f0e6d3",
              borderRadius:6, padding:"10px 12px", fontSize:"0.85rem", boxSizing:"border-box",
              resize:"vertical", fontFamily:"inherit", lineHeight:1.5 }
          })
        ),
        sendErr && React.createElement("div", { style:{ color:"#ef4444", fontSize:"0.8rem", marginBottom:10, padding:"6px 10px",
          background:"#1a0808", border:"1px solid #5a1a1a", borderRadius:6 } }, sendErr),
        sendOk && React.createElement("div", { style:{ color:"#22c55e", fontSize:"0.8rem", marginBottom:10, padding:"6px 10px",
          background:"#0a1a0a", border:"1px solid #166534", borderRadius:6 } }, sendOk),
        React.createElement("button", {
          onClick: handleSend,
          disabled: sending || !toName.trim() || !body.trim(),
          style:{ padding:"10px 24px", borderRadius:8, cursor: sending?"wait":"pointer",
            background: (!toName.trim()||!body.trim())?"#141008":"#2a1a08",
            border:"2px solid "+((!toName.trim()||!body.trim())?"#4a3a28":"#d4942a"),
            color: (!toName.trim()||!body.trim())?"#4a3a28":"#d4942a",
            fontSize:"0.9rem", fontWeight:"bold" }
        }, sending ? "Sending..." : "\uD83D\uDCE8 Send Message")
      )
    )
  );
}

// AUTH GATE — wraps App, shows login if no session
// ══════════════════════════════════════════════════════════════
function AuthGate() {
  var _s = _slicedToArray(useState(null), 2), user = _s[0], setUser = _s[1];
  var _l = _slicedToArray(useState(true), 2), loading = _l[0], setLoading = _l[1];
  var _p = _slicedToArray(useState(null), 2), profile = _p[0], setProfile = _p[1];
  var _needsName = _slicedToArray(useState(false), 2), needsName = _needsName[0], setNeedsName = _needsName[1];

  function loadProfile(u) {
    if (!u || !window.baSupabaseSync || !window.baSupabaseSync.fetchProfile) return;
    window.baSupabaseSync.fetchProfile(u.id).then(function(p) {
      if (p) {
        setProfile(p);
        if (!p.name_chosen) {
          setNeedsName(true);
        } else {
          setNeedsName(false);
        }
      } else {
        setNeedsName(true);
      }
    }).catch(function() { setNeedsName(true); });
  }

  useEffect(function() {
    var sb = window.sb;
    if (!sb) { setLoading(false); return; }
    sb.auth.getSession().then(function(res) {
      var s = res && res.data && res.data.session;
      if (s && s.user) { setUser(s.user); loadProfile(s.user); }
      setLoading(false);
    }).catch(function() { setLoading(false); });
    var sub = sb.auth.onAuthStateChange(function(event, session) {
      var u = session && session.user ? session.user : null;
      setUser(u);
      if (u) loadProfile(u);
      else { setProfile(null); setNeedsName(false); }
    });
    return function() { if (sub && sub.data && sub.data.subscription) sub.data.subscription.unsubscribe(); };
  }, []);

  if (loading) return React.createElement("div", {
    style: { height:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"#1a1410", color:"#d4942a", fontSize:"1.2rem" }
  }, "Loading...");

  if (!user) return React.createElement(AuthModal, { onAuth: function(u){ setUser(u); loadProfile(u); } });

  if (needsName) return React.createElement(UsernameModal, {
    user: user,
    currentName: profile ? (profile.display_name || "") : "",
    onComplete: function(updatedProfile) {
      setProfile(updatedProfile);
      setNeedsName(false);
    }
  });

  return React.createElement(App, {
    user: user,
    profile: profile,
    onLogout: function() {
      var sb = window.sb;
      if (sb) sb.auth.signOut();
      setUser(null);
      setProfile(null);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// AUTH MODAL — email/password login + signup
// ══════════════════════════════════════════════════════════════
function AuthModal(_ref_am) {
  var onAuth = _ref_am.onAuth;
  var _e = _slicedToArray(useState(""), 2), email = _e[0], setEmail = _e[1];
  var _p = _slicedToArray(useState(""), 2), pass = _p[0], setPass = _p[1];
  var _m = _slicedToArray(useState("login"), 2), mode = _m[0], setMode = _m[1];
  var _er = _slicedToArray(useState(null), 2), err = _er[0], setErr = _er[1];
  var _ld = _slicedToArray(useState(false), 2), busy = _ld[0], setBusy = _ld[1];

  function submit() {
    var sb = window.sb;
    if (!sb) { setErr("Supabase not loaded"); return; }
    if (!email || !pass) { setErr("Enter email and password"); return; }
    setBusy(true); setErr(null);
    var fn = mode === "login"
      ? sb.auth.signInWithPassword({ email: email, password: pass })
      : sb.auth.signUp({ email: email, password: pass });
    fn.then(function(res) {
      setBusy(false);
      if (res.error) { setErr(res.error.message); return; }
      if (mode === "signup" && res.data && res.data.user && !res.data.session) {
        setErr("Check your email to confirm your account, then log in.");
        setMode("login");
        return;
      }
      if (res.data && res.data.user) onAuth(res.data.user);
    }).catch(function(e) { setBusy(false); setErr(String(e)); });
  }

  var inputStyle = { width:"100%", boxSizing:"border-box", background:"#2a1e14", border:"1px solid #4a3a28",
    color:"#f0e6d3", borderRadius:6, padding:"10px 12px", fontSize:"0.9rem", outline:"none" };

  return React.createElement("div", {
    style: { height:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"linear-gradient(135deg,#141008,#1e1208)", fontFamily:"system-ui,sans-serif" }
  },
    React.createElement("div", {
      style: { background:"#1a1410", border:"1px solid #4a3a28", borderRadius:14, padding:"32px 28px",
        width:"100%", maxWidth:380, boxShadow:"0 8px 40px rgba(0,0,0,0.6)" }
    },
      React.createElement("div", { style:{ textAlign:"center", marginBottom:24 } },
        React.createElement("div", { style:{ fontSize:"2rem", marginBottom:8 } }, "\uD83D\uDC3E"),
        React.createElement("div", { style:{ color:"#e8a020", fontSize:"1.3rem", fontWeight:"bold" } }, "Bloodline Acres"),
        React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.78rem", marginTop:4 } }, mode === "login" ? "Sign in to your kennel" : "Create a new account")
      ),
      React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:12 } },
        React.createElement("input", { type:"email", placeholder:"Email", value:email,
          onChange:function(e){ setEmail(e.target.value); }, style:inputStyle,
          onKeyDown:function(e){ if(e.key==="Enter") submit(); }
        }),
        React.createElement("input", { type:"password", placeholder:"Password", value:pass,
          onChange:function(e){ setPass(e.target.value); }, style:inputStyle,
          onKeyDown:function(e){ if(e.key==="Enter") submit(); }
        }),
        err && React.createElement("div", { style:{ color:"#fca5a5", fontSize:"0.78rem", background:"#481808",
          border:"1px solid #ef4444", borderRadius:6, padding:"6px 10px" } }, err),
        React.createElement("button", {
          onClick:submit, disabled:busy,
          style:{ width:"100%", background:"#3a2810", border:"2px solid #d4942a", color:"#f0e6d3",
            borderRadius:8, padding:"12px 0", fontSize:"0.95rem", fontWeight:"bold", cursor:busy?"wait":"pointer" }
        }, busy ? "..." : (mode==="login" ? "Sign In" : "Create Account")),
        React.createElement("button", {
          onClick:function(){ setMode(mode==="login"?"signup":"login"); setErr(null); },
          style:{ background:"transparent", border:"none", color:"#6b5038", fontSize:"0.78rem",
            cursor:"pointer", textDecoration:"underline", padding:"4px 0" }
        }, mode==="login" ? "Need an account? Sign up" : "Already have an account? Sign in")
      )
    )
  );
}

// ══════════════════════════════════════════════════════════════
// STUD TAB — My Roster + Community tabs + DNA Peek
// ══════════════════════════════════════════════════════════════
function StudTab(_ref_st) {
  var animals = _ref_st.animals || [];
  var user = _ref_st.user;
  var onToggleStud = _ref_st.onToggleStud || function(){};
  var onEditFee = _ref_st.onEditFee || function(){};

  var _st1 = _slicedToArray(useState("roster"), 2), subTab = _st1[0], setSubTab = _st1[1];
  var _st2 = _slicedToArray(useState([]), 2), community = _st2[0], setCommunity = _st2[1];
  var _st3 = _slicedToArray(useState(false), 2), comLoading = _st3[0], setComLoading = _st3[1];
  var _st4 = _slicedToArray(useState(null), 2), peekDog = _st4[0], setPeekDog = _st4[1];

  useEffect(function() {
    if (subTab === "community" && window.baSupabaseSync) {
      setComLoading(true);
      window.baSupabaseSync.fetchStudDirectory().then(function(rows) {
        setCommunity(rows || []);
        setComLoading(false);
      }).catch(function() { setComLoading(false); });
    }
  }, [subTab]);

  var studs = animals.filter(function(a){ return !a.retired && a.sex === "M"; });
  var subTabStyle = function(key) {
    return { background: subTab===key?"#3a2810":"transparent", border:"1px solid "+(subTab===key?"#d4942a":"#4a3a28"),
      color: subTab===key?"#d4942a":"#8a7055", borderRadius:"6px 6px 0 0", padding:"6px 14px", cursor:"pointer",
      fontSize:"0.8rem", fontWeight: subTab===key?"bold":"normal" };
  };

  function StudRow(props) {
    var a = props.a, isMine = props.isMine;
    var isPeek = peekDog && peekDog.id === a.id;
    return React.createElement("div", { key: a.id || a.dog_name,
      style: { background: a.isStud ? "#0a1f0a" : "#1a1410", border: "1px solid "+(a.isStud?"#22c55e":"#443828"),
        borderRadius:10, padding:"12px 16px", marginBottom:6 }
    },
      React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:12 } },
        React.createElement("div", { style:{ flex:1 } },
          React.createElement("div", { style:{ fontWeight:"bold", fontSize:"0.95rem", color:"#f0e6d3" } }, a.name || a.dog_name || "Unknown"),
          React.createElement("div", { style:{ fontSize:"0.78rem", color:"#8a7055", marginTop:2 } },
            (a.breed || "?") + " \u00B7 " + (a.size || "M") + " \u00B7 " +
            (a.ageMonths ? (Math.round(a.ageMonths/12*10)/10)+" yrs" : (a.age_months ? (Math.round(a.age_months/12*10)/10)+" yrs" : "?"))
          ),
          (a.isStud || a.stud_fee) && React.createElement("div", { style:{ fontSize:"0.8rem", color:"#22c55e", marginTop:4 } },
            "Stud Fee: $" + (a.studFee || a.stud_fee || 0).toLocaleString()
          ),
          !isMine && a.owner_name && React.createElement("div", { style:{ fontSize:"0.72rem", color:"#6b5038", marginTop:2 } },
            "Owner: " + a.owner_name)
        ),
        React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:6, alignItems:"flex-end" } },
          // DNA Peek button
          React.createElement("button", {
            onClick: function(){ setPeekDog(isPeek ? null : a); },
            style: { background: isPeek?"#1a0a2e":"#2a1e14", border:"1px solid "+(isPeek?"#7c3aed":"#4a3a28"),
              color: isPeek?"#a78bfa":"#8a7055", borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
          }, "\uD83E\uDDEC DNA Peek"),
          isMine && a.isStud && React.createElement("button", {
            onClick: function(){
              var fee = prompt('Update stud fee for "' + (a.name||"dog") + '":', a.studFee||150);
              if (fee && !isNaN(fee) && Number(fee) > 0) onEditFee(a.id, Number(fee));
            },
            style:{ background:"#2a1e14", border:"1px solid #22c55e", color:"#22c55e",
              borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:"0.75rem" }
          }, "Edit Fee"),
          isMine && React.createElement("button", {
            onClick: function(){ onToggleStud(a.id); },
            style:{ background: a.isStud?"#481808":"#2a1e14", border:"1px solid "+(a.isStud?"#ef4444":"#22c55e"),
              color: a.isStud?"#fca5a5":"#22c55e", borderRadius:6, padding:"4px 12px", cursor:"pointer",
              fontSize:"0.75rem", fontWeight:"bold" }
          }, a.isStud ? "Remove from Stud" : "\uD83D\uDC3E List as Stud")
        )
      ),
      // DNA Peek panel
      isPeek && React.createElement("div", {
        style: { marginTop:8, background:"#1a0a1e", border:"1px solid #3a2a5a", borderRadius:8, padding:"10px 12px" }
      },
        React.createElement("div", { style:{ color:"#a78bfa", fontWeight:"bold", fontSize:"0.8rem", marginBottom:6 } },
          "\uD83E\uDDEC DNA Peek \u2014 " + (a.name || a.dog_name || "Unknown")),
        (function(){
          var genome = a.genome;
          if (!genome && a.genome_data) { try { genome = JSON.parse(a.genome_data); } catch(e){} }
          if (!genome && typeof a.genome === "string") { try { genome = JSON.parse(a.genome); } catch(e){} }
          if (!genome) return React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.75rem" } }, "No genome data available");
          var hs = a.health_score || a.healthScore || (genome.health ? calcHealthScore(genome).score : "?");
          var ps = a.perf_score || a.perfScore || (genome.perf ? calcPerfScore(genome) : "?");
          var coi = a.coi || 0;
          return React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:4, fontSize:"0.75rem" } },
            React.createElement("div", { style:{ display:"flex", gap:12 } },
              React.createElement("span", { style:{ color: healthColor(hs) } }, "\u2764\uFE0F Health: " + hs),
              React.createElement("span", { style:{ color:"#c4956a" } }, "\u26A1 Perf: " + ps),
              React.createElement("span", { style:{ color: coiColor(coi) } }, "COI: " + coi + "%")
            ),
            genome.coat && React.createElement("div", { style:{ color:"#b09070" } }, "Coat: " +
              Object.entries(genome.coat).map(function(e){ return e[0]+"("+e[1].join("")+")"; }).join(" ")),
            genome.health && React.createElement("div", { style:{ color:"#b09070" } }, "Health loci: " +
              Object.entries(genome.health).filter(function(e){ return ["MDR1","PRA","DM","vWD"].includes(e[0]); }).map(function(e){
                var al = e[1]; var aff = al[0]==="n"&&al[1]==="n"; var car = !aff&&(al[0]==="n"||al[1]==="n");
                return e[0]+(aff?" AFFECTED":car?" Carrier":" Clear");
              }).join(" \u00B7 "))
          );
        })()
      )
    );
  }

  return React.createElement("div", null,
    // Sub-tab buttons
    React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:12 } },
      React.createElement("button", { onClick:function(){ setSubTab("roster"); }, style:subTabStyle("roster") }, "\uD83D\uDC3E My Roster"),
      React.createElement("button", { onClick:function(){ setSubTab("community"); }, style:subTabStyle("community") }, "\uD83C\uDF10 Community Studs")
    ),
    // My Roster
    subTab === "roster" && React.createElement("div", null,
      React.createElement("div", { style:{ color:"#5aaa30", fontWeight:"bold", fontSize:"1.05rem", marginBottom:12, paddingBottom:8, borderBottom:"1px solid #4a3a28" } },
        "\uD83D\uDC3E My Stud Roster"),
      studs.length === 0
        ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "No males in your kennel yet.")
        : React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:6 } },
            studs.map(function(a){ return React.createElement(StudRow, { key:a.id, a:a, isMine:true }); })
          )
    ),
    // Community
    subTab === "community" && React.createElement("div", null,
      React.createElement("div", { style:{ color:"#38bdf8", fontWeight:"bold", fontSize:"1.05rem", marginBottom:12, paddingBottom:8, borderBottom:"1px solid #1e3a5f" } },
        "\uD83C\uDF10 Community Stud Directory"),
      comLoading
        ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "Loading...")
        : community.length === 0
          ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "No community studs listed yet.")
          : React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:6 } },
              community.filter(function(c){ return !user || c.user_id !== user.id; }).map(function(c, i){
                return React.createElement(StudRow, { key:c.id||i, a:c, isMine:false });
              })
            )
    )
  );
}



// ══════════════════════════════════════════════════════════════
// BREEDER'S MARKET — player-to-player dog sales
// ══════════════════════════════════════════════════════════════
var AKC_GROUPS = ["All","Herding","Hound","Non-Sporting","Sporting","Terrier","Toy","Working","Miscellaneous"];

function BreedersMarketTab(_ref_bm) {
  var animals = _ref_bm.animals || [];
  var user = _ref_bm.user;
  var money = _ref_bm.money || 0;
  var activeKennel = _ref_bm.activeKennel;
  var onListDog = _ref_bm.onListDog || function(){};
  var onDelistDog = _ref_bm.onDelistDog || function(){};
  var onBuyDog = _ref_bm.onBuyDog || function(){};

  var _bm1 = _slicedToArray(useState("my_listings"), 2), subTab = _bm1[0], setSubTab = _bm1[1];
  var _bm2 = _slicedToArray(useState([]), 2), listings = _bm2[0], setListings = _bm2[1];
  var _bm3 = _slicedToArray(useState(false), 2), loading = _bm3[0], setLoading = _bm3[1];
  var _bm4 = _slicedToArray(useState(null), 2), peekDog = _bm4[0], setPeekDog = _bm4[1];
  var _bm5 = _slicedToArray(useState("All"), 2), groupFilter = _bm5[0], setGroupFilter = _bm5[1];
  var _bm6 = _slicedToArray(useState(""), 2), searchText = _bm6[0], setSearchText = _bm6[1];
  var _bm7 = _slicedToArray(useState("newest"), 2), sortBy = _bm7[0], setSortBy = _bm7[1];
  var _bm8 = _slicedToArray(useState(null), 2), buyConfirm = _bm8[0], setBuyConfirm = _bm8[1];
  var _bm9 = _slicedToArray(useState(false), 2), buying = _bm9[0], setBuying = _bm9[1];

  useEffect(function() {
    if (subTab === "browse" && window.baSupabaseSync) {
      setLoading(true);
      window.baSupabaseSync.fetchMarketListings().then(function(rows) {
        setListings(rows || []);
        setLoading(false);
      }).catch(function() { setLoading(false); });
    }
  }, [subTab]);

  var myDogs = animals.filter(function(a){ return !a.retired; });
  var myListed = myDogs.filter(function(a){ return a.forSale; });
  var myUnlisted = myDogs.filter(function(a){ return !a.forSale && a.sex; });

  var browseDogs = listings.filter(function(l){
    if (user && l.seller_id === user.id) return false;
    if (groupFilter !== "All" && (l.breed_group||"").toLowerCase() !== groupFilter.toLowerCase()) return false;
    if (searchText) {
      var q = searchText.toLowerCase();
      if (!(l.dog_name||"").toLowerCase().includes(q) && !(l.breed||"").toLowerCase().includes(q) && !(l.seller_name||"").toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (sortBy === "price_low") browseDogs.sort(function(a,b){ return (a.asking_price||0) - (b.asking_price||0); });
  else if (sortBy === "price_high") browseDogs.sort(function(a,b){ return (b.asking_price||0) - (a.asking_price||0); });
  else if (sortBy === "health") browseDogs.sort(function(a,b){ return (b.health_score||0) - (a.health_score||0); });
  else if (sortBy === "perf") browseDogs.sort(function(a,b){ return (b.perf_score||0) - (a.perf_score||0); });

  var subTabStyle = function(key) {
    return { background: subTab===key?"#3a2810":"transparent", border:"1px solid "+(subTab===key?"#d4942a":"#4a3a28"),
      color: subTab===key?"#d4942a":"#8a7055", borderRadius:"6px 6px 0 0", padding:"6px 14px", cursor:"pointer",
      fontSize:"0.8rem", fontWeight: subTab===key?"bold":"normal" };
  };

  function handleList(dog) {
    var price = prompt('List "' + (dog.name||dog.breed) + '" for sale on the Breeder\u2019s Market.\nEnter asking price ($):', '500');
    if (price && !isNaN(price) && Number(price) > 0) {
      onListDog(dog.id, Number(price));
    }
  }

  function handleDelist(dog) {
    if (confirm('Remove "' + (dog.name||dog.breed) + '" from the Breeder\u2019s Market?')) {
      onDelistDog(dog.id);
    }
  }

  function handleBuy(listing) {
    if (!activeKennel) { alert("No kennel selected! You need a kennel to house purchased dogs."); return; }
    if (money < (listing.asking_price||0)) { alert("Not enough funds!\nThis dog costs $"+(listing.asking_price||0).toLocaleString()+", you have $"+money.toLocaleString()); return; }
    setBuyConfirm(listing);
  }

  function confirmBuy() {
    if (!buyConfirm) return;
    setBuying(true);
    var listing = buyConfirm;
    window.baSupabaseSync.buyMarketDog(listing.id).then(function(deactivated) {
      var genome = deactivated.genome || listing.genome || null;
      if (typeof genome === "string") { try { genome = JSON.parse(genome); } catch(e){ genome = null; } }
      onBuyDog(listing, genome);
      setBuyConfirm(null);
      setBuying(false);
      window.baSupabaseSync.fetchMarketListings().then(function(rows){ setListings(rows||[]); });
    }).catch(function(err) {
      alert("Purchase failed: " + (err.message||err) + "\nThe dog may have already been sold.");
      setBuyConfirm(null);
      setBuying(false);
      window.baSupabaseSync.fetchMarketListings().then(function(rows){ setListings(rows||[]); });
    });
  }

  function DNAPeek(props) {
    var a = props.listing;
    var genome = a.genome;
    if (typeof genome === "string") { try { genome = JSON.parse(genome); } catch(e){ genome = null; } }
    if (!genome) return React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.75rem", padding:"8px 0" } }, "No genome data available");
    var hs = a.health_score || 0;
    var ps = a.perf_score || 0;
    var coi = a.coi || 0;
    return React.createElement("div", { style:{ marginTop:8, background:"#1a0a1e", border:"1px solid #3a2a5a", borderRadius:8, padding:"10px 12px" } },
      React.createElement("div", { style:{ color:"#a78bfa", fontWeight:"bold", fontSize:"0.8rem", marginBottom:6 } },
        "\uD83E\uDDEC DNA Peek \u2014 " + (a.dog_name || "Unknown")),
      React.createElement("div", { style:{ display:"flex", gap:12, fontSize:"0.75rem", marginBottom:4 } },
        React.createElement("span", { style:{ color: healthColor(hs) } }, "\u2764\uFE0F Health: " + hs),
        React.createElement("span", { style:{ color:"#c4956a" } }, "\u26A1 Perf: " + ps),
        React.createElement("span", { style:{ color: coiColor(coi) } }, "COI: " + coi + "%")
      ),
      genome.coat && React.createElement("div", { style:{ color:"#b09070", fontSize:"0.72rem", marginBottom:3 } }, "Coat: " +
        Object.entries(genome.coat).map(function(e){ return e[0]+"("+e[1].join("")+")"; }).join(" ")),
      genome.health && React.createElement("div", { style:{ color:"#b09070", fontSize:"0.72rem" } }, "Health: " +
        Object.entries(genome.health).filter(function(e){ return ["MDR1","PRA","DM","vWD"].includes(e[0]); }).map(function(e){
          var al = e[1]; var aff = al[0]==="n"&&al[1]==="n"; var car = !aff&&(al[0]==="n"||al[1]==="n");
          return e[0]+(aff?" AFFECTED":car?" Carrier":" Clear");
        }).join(" \u00B7 "))
    );
  }

  function BrowseCard(props) {
    var l = props.listing;
    var isPeek = peekDog && peekDog.id === l.id;
    var sexColor = l.sex === "M" ? "#60a5fa" : "#f472b6";
    var sexIcon = l.sex === "M" ? "\u2642" : "\u2640";
    return React.createElement("div", {
      style: { background:"#1a1410", border:"1px solid #4a3a28", borderRadius:10, padding:"12px 16px", marginBottom:8 }
    },
      React.createElement("div", { style:{ display:"flex", alignItems:"flex-start", gap:12 } },
        React.createElement("div", { style:{ flex:1 } },
          React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:6, marginBottom:4 } },
            React.createElement("span", { style:{ fontWeight:"bold", fontSize:"0.95rem", color:"#f0e6d3" } }, l.dog_name || "Unknown"),
            React.createElement("span", { style:{ color:sexColor, fontSize:"0.85rem" } }, sexIcon),
            l.titles && React.createElement("span", { style:{ color:"#fbbf24", fontSize:"0.68rem",
              background:"#2a1e08", border:"1px solid #6a4a10", borderRadius:3, padding:"0 4px" } }, l.titles)
          ),
          React.createElement("div", { style:{ color:"#b09070", fontSize:"0.78rem", marginBottom:2 } },
            (l.breed||"Unknown") + " \u00B7 " + (l.breed_group||"") + " \u00B7 " + (l.size||"M")),
          React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem", marginBottom:4 } },
            (l.age_months ? (Math.round(l.age_months/12*10)/10)+" yrs" : "?") +
            " \u00B7 " + (l.coat_color||"Unknown coat")),
          React.createElement("div", { style:{ display:"flex", gap:8, marginBottom:4 } },
            React.createElement("span", { style:{ color: healthColor(l.health_score||0), fontSize:"0.78rem", fontWeight:"bold" } }, "\u2764\uFE0F " + (l.health_score||0)),
            React.createElement("span", { style:{ color:"#c4956a", fontSize:"0.78rem", fontWeight:"bold" } }, "\u26A1 " + (l.perf_score||0)),
            React.createElement("span", { style:{ color: coiColor(l.coi||0), fontSize:"0.78rem" } }, "COI " + (l.coi||0) + "%")
          ),
          l.seller_name && React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } }, "Seller: " + l.seller_name)
        ),
        React.createElement("div", { style:{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6, minWidth:100 } },
          React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"1.1rem" } }, "$" + (l.asking_price||0).toLocaleString()),
          React.createElement("button", {
            onClick: function(){ handleBuy(l); },
            style: { background: money>=(l.asking_price||0) ? "#0a2a15" : "#381808",
              border: "2px solid " + (money>=(l.asking_price||0) ? "#22c55e" : "#ef4444"),
              color: money>=(l.asking_price||0) ? "#22c55e" : "#ef4444",
              borderRadius:6, padding:"6px 16px", cursor: money>=(l.asking_price||0) ? "pointer" : "not-allowed",
              fontSize:"0.82rem", fontWeight:"bold" }
          }, money>=(l.asking_price||0) ? "\uD83D\uDED2 Buy" : "\u26A0\uFE0F Can\u2019t afford"),
          React.createElement("button", {
            onClick: function(){ setPeekDog(isPeek ? null : l); },
            style: { background: isPeek?"#1a0a2e":"transparent", border:"1px solid "+(isPeek?"#7c3aed":"#4a3a28"),
              color: isPeek?"#a78bfa":"#8a7055", borderRadius:6, padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
          }, "\uD83E\uDDEC DNA Peek")
        )
      ),
      isPeek && React.createElement(DNAPeek, { listing: l })
    );
  }

  return React.createElement("div", { style:{ overflowY:"auto", maxHeight:"calc(100vh - 150px)" } },
    React.createElement("div", { style:{ display:"flex", alignItems:"center", gap:10, marginBottom:12 } },
      React.createElement("span", { style:{ fontSize:"1.4rem" } }, "\uD83C\uDFEA"),
      React.createElement("div", null,
        React.createElement("div", { style:{ color:"#e8a020", fontWeight:"bold", fontSize:"1.1rem" } }, "Breeder\u2019s Market"),
        React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem" } }, "Buy and sell dogs with other players")
      ),
      React.createElement("div", { style:{ marginLeft:"auto", color: money>=500?"#22c55e":money>=0?"#d4860a":"#ef4444", fontWeight:"bold", fontSize:"0.9rem" } },
        "$" + money.toLocaleString())
    ),

    React.createElement("div", { style:{ display:"flex", gap:4, marginBottom:14 } },
      React.createElement("button", { onClick:function(){ setSubTab("my_listings"); }, style:subTabStyle("my_listings") }, "\uD83D\uDCCB My Listings"),
      React.createElement("button", { onClick:function(){ setSubTab("browse"); }, style:subTabStyle("browse") }, "\uD83D\uDD0D Browse Dogs")
    ),

    subTab === "my_listings" && React.createElement("div", null,
      React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"0.88rem", marginBottom:8, paddingBottom:6, borderBottom:"1px solid #2e2218" } },
        "\uD83D\uDCB0 Listed for Sale (" + myListed.length + ")"),
      myListed.length === 0
        ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.8rem", padding:"12px 0", fontStyle:"italic" } },
            "No dogs currently listed. Select a dog below to list them.")
        : React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:6, marginBottom:16 } },
            myListed.map(function(a) {
              return React.createElement("div", { key:a.id,
                style:{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px",
                  background:"#0a1f0a", border:"1px solid #22c55e", borderRadius:8 }
              },
                React.createElement("div", { style:{ flex:1 } },
                  React.createElement("div", { style:{ fontWeight:"bold", color:"#f0e6d3", fontSize:"0.9rem" } }, a.name || a.breed),
                  React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.75rem" } },
                    a.breed + " \u00B7 " + (a.sex==="M"?"\u2642":"\u2640") + " \u00B7 " +
                    Math.round((a.ageMonths||0)/12*10)/10 + " yrs")
                ),
                React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"1rem" } },
                  "$" + (a.salePrice||0).toLocaleString()),
                React.createElement("button", {
                  onClick: function(){ handleDelist(a); },
                  style:{ background:"#481808", border:"1px solid #ef4444", color:"#fca5a5",
                    borderRadius:6, padding:"5px 12px", cursor:"pointer", fontSize:"0.78rem" }
                }, "\u2715 Delist")
              );
            })
          ),

      React.createElement("div", { style:{ color:"#d4942a", fontWeight:"bold", fontSize:"0.88rem", marginBottom:8, paddingBottom:6, borderBottom:"1px solid #2e2218" } },
        "\uD83D\uDC15 Available to List (" + myUnlisted.length + ")"),
      myUnlisted.length === 0
        ? React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.8rem", padding:"12px 0" } }, "No dogs available to list.")
        : React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:4 } },
            myUnlisted.map(function(a) {
              var stage = getAgeStage(a.ageMonths||0);
              var tooYoung = stage.label === "Newborn" || stage.label === "Puppy";
              return React.createElement("div", { key:a.id,
                style:{ display:"flex", alignItems:"center", gap:10, padding:"8px 12px",
                  background:"#1a1410", border:"1px solid #2e2218", borderRadius:6,
                  opacity: tooYoung ? 0.5 : 1 }
              },
                React.createElement("span", { style:{ color: a.sex==="M"?"#60a5fa":"#f472b6", fontSize:"0.85rem" } },
                  a.sex==="M"?"\u2642":"\u2640"),
                React.createElement("div", { style:{ flex:1 } },
                  React.createElement("span", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.82rem" } }, a.name || a.breed),
                  React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.72rem", marginLeft:8 } },
                    a.breed + " \u00B7 " + Math.round((a.ageMonths||0)/12*10)/10 + "y \u00B7 \u2764\uFE0F" + (a.healthScore||0) + " \u26A1" + (a.perfScore||0))
                ),
                React.createElement("button", {
                  onClick: function(){ if(!tooYoung) handleList(a); },
                  disabled: tooYoung,
                  style:{ background: tooYoung?"#1a1410":"#2a1e14", border:"1px solid "+(tooYoung?"#4a3a28":"#d4942a"),
                    color: tooYoung?"#4a3a28":"#d4942a", borderRadius:6, padding:"4px 12px",
                    cursor: tooYoung?"not-allowed":"pointer", fontSize:"0.75rem", fontWeight:"bold" }
                }, tooYoung ? "Too Young" : "\uD83D\uDCB0 List for Sale")
              );
            })
          )
    ),

    subTab === "browse" && React.createElement("div", null,
      React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:12, padding:"8px 10px",
        background:"#141008", border:"1px solid #2e2218", borderRadius:8, alignItems:"center" } },
        React.createElement("div", { style:{ display:"flex", gap:3, flexWrap:"wrap" } },
          AKC_GROUPS.map(function(g) {
            var active = groupFilter === g;
            return React.createElement("button", { key:g,
              onClick: function(){ setGroupFilter(g); },
              style:{ background: active?"#3a2810":"transparent", border:"1px solid "+(active?"#d4942a":"#3a2e20"),
                color: active?"#d4942a":"#8a7055", borderRadius:4, padding:"3px 8px", cursor:"pointer",
                fontSize:"0.68rem", fontWeight: active?"bold":"normal" }
            }, g);
          })
        ),
        React.createElement("input", {
          type:"text", placeholder:"Search name, breed, seller\u2026", value:searchText,
          onChange: function(e){ setSearchText(e.target.value); },
          style:{ background:"#1a1410", border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:6,
            padding:"5px 10px", fontSize:"0.78rem", flex:"1 1 160px", minWidth:120 }
        }),
        React.createElement("select", {
          value: sortBy,
          onChange: function(e){ setSortBy(e.target.value); },
          style:{ background:"#1a1410", border:"1px solid #4a3a28", color:"#f0e6d3", borderRadius:6,
            padding:"5px 8px", fontSize:"0.75rem" }
        },
          React.createElement("option", { value:"newest" }, "Newest"),
          React.createElement("option", { value:"price_low" }, "Price: Low \u2192 High"),
          React.createElement("option", { value:"price_high" }, "Price: High \u2192 Low"),
          React.createElement("option", { value:"health" }, "Health Score"),
          React.createElement("option", { value:"perf" }, "Performance")
        ),
        React.createElement("button", {
          onClick: function(){
            setLoading(true);
            window.baSupabaseSync.fetchMarketListings().then(function(rows){ setListings(rows||[]); setLoading(false); }).catch(function(){ setLoading(false); });
          },
          style:{ background:"transparent", border:"1px solid #4a3a28", color:"#8a7055", borderRadius:6,
            padding:"4px 10px", cursor:"pointer", fontSize:"0.72rem" }
        }, "\u21BB Refresh")
      ),

      loading
        ? React.createElement("div", { style:{ color:"#6b5038", textAlign:"center", padding:40 } }, "Loading listings...")
        : browseDogs.length === 0
          ? React.createElement("div", { style:{ textAlign:"center", padding:"40px 0" } },
              React.createElement("div", { style:{ fontSize:"2rem", marginBottom:8, opacity:0.3 } }, "\uD83C\uDFEA"),
              React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.85rem" } },
                listings.length === 0 ? "No dogs listed on the market yet. Be the first!" : "No dogs match your filters."),
              React.createElement("div", { style:{ color:"#4a3a28", fontSize:"0.72rem", marginTop:4 } },
                "List your dogs from the My Listings tab, or check back later.")
            )
          : React.createElement("div", null,
              React.createElement("div", { style:{ color:"#8a7055", fontSize:"0.72rem", marginBottom:8 } },
                browseDogs.length + " dog" + (browseDogs.length!==1?"s":"") + " available"),
              browseDogs.map(function(l) {
                return React.createElement(BrowseCard, { key:l.id, listing:l });
              })
            )
    ),

    buyConfirm && React.createElement("div", {
      style:{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.85)",
        zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center" },
      onClick: function(){ if(!buying) setBuyConfirm(null); }
    },
      React.createElement("div", {
        style:{ background:"#2a1e14", border:"2px solid #d4942a", borderRadius:14, padding:"24px 28px",
          maxWidth:420, width:"92%", boxShadow:"0 8px 40px rgba(0,0,0,0.7)" },
        onClick: function(e){ e.stopPropagation(); }
      },
        React.createElement("div", { style:{ textAlign:"center", marginBottom:16 } },
          React.createElement("div", { style:{ fontSize:"2rem", marginBottom:6 } }, "\uD83D\uDED2"),
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"1.1rem" } }, "Confirm Purchase")
        ),
        React.createElement("div", { style:{ background:"#141008", border:"1px solid #4a3a28", borderRadius:8, padding:"12px 14px", marginBottom:14 } },
          React.createElement("div", { style:{ color:"#f0e6d3", fontWeight:"bold", fontSize:"0.95rem", marginBottom:4 } },
            buyConfirm.dog_name || "Unknown"),
          React.createElement("div", { style:{ color:"#b09070", fontSize:"0.78rem", marginBottom:4 } },
            (buyConfirm.breed||"?") + " \u00B7 " + (buyConfirm.sex==="M"?"\u2642 Male":"\u2640 Female") +
            " \u00B7 " + (buyConfirm.age_months ? Math.round(buyConfirm.age_months/12*10)/10+" yrs" : "?")),
          React.createElement("div", { style:{ display:"flex", gap:10, fontSize:"0.78rem" } },
            React.createElement("span", { style:{ color: healthColor(buyConfirm.health_score||0) } }, "\u2764\uFE0F " + (buyConfirm.health_score||0)),
            React.createElement("span", { style:{ color:"#c4956a" } }, "\u26A1 " + (buyConfirm.perf_score||0)),
            React.createElement("span", { style:{ color: coiColor(buyConfirm.coi||0) } }, "COI " + (buyConfirm.coi||0) + "%")
          ),
          buyConfirm.seller_name && React.createElement("div", { style:{ color:"#6b5038", fontSize:"0.72rem", marginTop:4 } },
            "From: " + buyConfirm.seller_name)
        ),
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 } },
          React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.85rem" } }, "Price:"),
          React.createElement("span", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"1.2rem" } },
            "$" + (buyConfirm.asking_price||0).toLocaleString())
        ),
        React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, padding:"6px 0", borderTop:"1px solid #3a2810" } },
          React.createElement("span", { style:{ color:"#8a7055", fontSize:"0.78rem" } }, "Balance after:"),
          React.createElement("span", { style:{ color: (money-(buyConfirm.asking_price||0))>=0?"#22c55e":"#ef4444", fontWeight:"bold", fontSize:"0.9rem" } },
            "$" + (money - (buyConfirm.asking_price||0)).toLocaleString())
        ),
        React.createElement("div", { style:{ display:"flex", gap:10 } },
          React.createElement("button", {
            onClick: function(){ setBuyConfirm(null); }, disabled: buying,
            style:{ flex:1, background:"#1a1410", border:"1px solid #4a3a28", color:"#8a7055",
              borderRadius:8, padding:"10px 0", cursor:"pointer", fontSize:"0.85rem" }
          }, "Cancel"),
          React.createElement("button", {
            onClick: confirmBuy, disabled: buying,
            style:{ flex:1, background:"#0a2a15", border:"2px solid #22c55e", color:"#22c55e",
              borderRadius:8, padding:"10px 0", cursor: buying?"wait":"pointer",
              fontSize:"0.9rem", fontWeight:"bold" }
          }, buying ? "Buying..." : "\u2705 Confirm Purchase")
        )
      )
    )
  );
}
