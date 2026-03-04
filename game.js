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

// ── LOCI DEFINITIONS ─────────────────────────────────────────
function App() {
  var _sire$genome$coat$M, _sire$genome$coat$M2, _dam$genome$coat$M, _dam$genome$coat$M2, _litter$, _litter$2;
  var _useState7 = useState(DEMO_BREEDS),
    _useState8 = _slicedToArray(_useState7, 2),
    breeds = _useState8[0],
    setBreeds = _useState8[1];
  var _useState9 = useState([]),
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
  var _useState15 = useState([]),
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
  var KENNEL_TYPES = {
    basic:      { label: "Basic Kennel",      capacity: 10,  color: "#64748b", icon: "🏚️", cost: 500 },
    standard:   { label: "Standard Kennel",   capacity: 25,  color: "#38bdf8", icon: "🏠", cost: 1200 },
    commercial: { label: "Commercial Kennel", capacity: 50,  color: "#a78bfa", icon: "🏢", cost: 3000 },
    elite:      { label: "Elite Kennel",      capacity: 100, color: "#fbbf24", icon: "🏆", cost: 8000 }
  };
  var WHELPING_COST = 1500;
  var DOG_COST_PUPPY = 200;
  var DOG_COST_ADULT = 350;
  var BOARDING_COSTS = { XS: 15, S: 20, M: 30, L: 40, XL: 50 };
  var getBoardingCost = function(a) { return BOARDING_COSTS[a.size] || BOARDING_COSTS["M"]; };
  var formatMoney = function(n) { return "$" + n.toLocaleString(); };
  var makeKennel = function(type, name) {
    return { id: Date.now() + Math.random(), type: type, name: name || KENNEL_TYPES[type].label };
  };
  var _useStateKL = useState(function(){
    return [makeKennel("basic","My First Kennel")];
  }),
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
  var _useStateWK = useState(false),
    _useStateWK2 = _slicedToArray(_useStateWK, 2),
    hasWhelpingKennel = _useStateWK2[0],
    setHasWhelpingKennel = _useStateWK2[1];
  var _useStateWL = useState([]),
    _useStateWL2 = _slicedToArray(_useStateWL, 2),
    whelpingLitters = _useStateWL2[0],
    setWhelpingLitters = _useStateWL2[1];
  var _useStateTH = useState([]),
    _useStateTH2 = _slicedToArray(_useStateTH, 2),
    holdingPups = _useStateTH2[0],
    setHoldingPups = _useStateTH2[1];
  var _useStateLS = useState([]),
    _useStateLS2 = _slicedToArray(_useStateLS, 2),
    litterSelected = _useStateLS2[0],
    setLitterSelected = _useStateLS2[1];
  var _useStateMON = useState(2500),
    _useStateMON2 = _slicedToArray(_useStateMON, 2),
    money = _useStateMON2[0],
    setMoney = _useStateMON2[1];
  var _useStateMKT = useState(false),
    _useStateMKT2 = _slicedToArray(_useStateMKT, 2),
    showMarket = _useStateMKT2[0],
    setShowMarket = _useStateMKT2[1];
  var _useStateFAC = useState(false),
    _useStateFAC2 = _slicedToArray(_useStateFAC, 2),
    showFacilities = _useStateFAC2[0],
    setShowFacilities = _useStateFAC2[1];
  var _useStateFACD = useState({}),
    _useStateFACD2 = _slicedToArray(_useStateFACD, 2),
    facilitiesOwned = _useStateFACD2[0],
    setFacilitiesOwned = _useStateFACD2[1];
  var _useStateCL = useState(false),
    _useStateCL2 = _slicedToArray(_useStateCL, 2),
    showCatLady = _useStateCL2[0],
    setShowCatLady = _useStateCL2[1];
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
  var fileRef = useRef();
  useEffect(function () {
    var profiled = breeds.map(function(b){return assignGeneticProfile(b);});
    setBreeds(profiled);
    setAnimals([]);
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
          if (newAge >= maxAge) {
            (function(){
              var logEntry = {id:Date.now()+Math.random(), type:"retire_age", name:a.name, breed:a.breed, ageMonths:newAge, date:new Date().toLocaleString()};
              setTimeout(function(){ setLog(function(p){ return [logEntry].concat(_toConsumableArray(p)); }); }, 0);
            })();
            return Object.assign({}, a, {ageMonths: newAge, retired: true, retireReason: "End of natural life"});
          }
          return Object.assign({}, a, {ageMonths: newAge, lastUpdated: now});
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
      setAnimals(function (p) {
        var a = makeAnimal(b, "".concat(b.name, " ").concat(p.length + 1), sex);
        a.ageMonths = arrivalAge || 12;
        a.kennelId = activeKennel.id;
        return [].concat(_toConsumableArray(p), [a]);
      });
    }
  };
  var breedingIneligibleReason = function breedingIneligibleReason(a) {
    if (!a) return null;
    if (a.retired) return "Retired";
    if (a.sick) return "Currently sick";
    if (a.injured) return "Currently injured";
    var stage = getAgeStage(a.ageMonths || 0);
    if (!stage.canBreed) return stage.label + " — not breeding age";
    return null;
  };
  var selectAnimal = function selectAnimal(a) {
    var reason = breedingIneligibleReason(a);
    if (reason) return; // silently block — card will show why
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
      padding: "8px 16px",
      background: tab === t ? "#1e3a5f" : "transparent",
      border: "1px solid ".concat(tab === t ? "#38bdf8" : "#334155"),
      borderRadius: 6,
      color: tab === t ? "#38bdf8" : "#64748b",
      cursor: "pointer",
      fontSize: "0.82rem",
      transition: "all 0.15s"
    };
  };
  var actionModalAnimal = animals.find(function(a){ return a.id === actionModalId; });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#0a0f1e",
      fontFamily: "system-ui,sans-serif",
      color: "#e2e8f0",
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
      background: "#1e293b", border: "2px solid #475569", borderRadius: 14,
      padding: "26px 28px", maxWidth: 380, width: "92%", textAlign: "center"
    },
    onClick: function(e){ e.stopPropagation(); }
  }, /*#__PURE__*/React.createElement("div", { style: { fontSize: "2rem", marginBottom: 8 } }, "🐾"),
  /*#__PURE__*/React.createElement("div", {
    style: { color: "#f1f5f9", fontWeight: "bold", fontSize: "1.1rem", marginBottom: 4 }
  }, actionModalAnimal ? actionModalAnimal.name : "Dog"),
  /*#__PURE__*/React.createElement("div", {
    style: { color: "#64748b", fontSize: "0.8rem", marginBottom: 18 }
  }, "What would you like to do with this dog?"),
  /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 } },
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        retireAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#1a2a1a", border: "2px solid #4ade80", color: "#4ade80",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🏡 Retire  —  stays in kennel, no longer breeding, doesn't count toward capacity"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        rehomeAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#1a1a2a", border: "2px solid #a78bfa", color: "#a78bfa",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🚐 Rehome  —  placed in a new home, logged, frees up a kennel slot"),
    /*#__PURE__*/React.createElement("button", {
      onClick: function(){
        removeAnimal(actionModalId);
        setActionModalId(null);
      },
      style: {
        background: "#3b0f0f", border: "2px solid #ef4444", color: "#fca5a5",
        borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontSize: "0.88rem", fontWeight: "bold"
      }
    }, "🗑️ Remove  —  permanently delete this dog")
  ),
  /*#__PURE__*/React.createElement("button", {
    onClick: function(){ setActionModalId(null); },
    style: {
      background: "#0f172a", border: "1px solid #334155", color: "#64748b",
      borderRadius: 6, padding: "7px 24px", cursor: "pointer", fontSize: "0.85rem"
    }
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#0f172a,#1e293b)",
      borderBottom: "1px solid #1e3a5f",
      padding: "16px 22px"
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
      color: "#38bdf8",
      fontSize: "1.35rem",
      fontWeight: "bold",
      letterSpacing: "-0.01em"
    }
  }, "\uD83E\uDDEC Universal Breeding Simulator"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#475569",
      fontSize: "0.75rem",
      marginTop: 2
    }
  }, "Genetics Engine v1.0 \xB7 ", breeds.length, " breeds loaded \xB7 ", kennels.length, " kennel", kennels.length!==1?"s":"", " \xB7 ", animals.filter(function(a){return !a.retired;}).length, " active dogs  · ", /*#__PURE__*/React.createElement("span", { style:{ color: money < 500 ? "#ef4444" : money < 1500 ? "#f59e0b" : "#22c55e", fontWeight:"bold" } }, formatMoney(money)))), /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("button", {
    onClick: saveBreeds,
    style: {
      background: "#0f2d1e",
      border: "1px solid #22c55e",
      color: "#22c55e",
      borderRadius: 6,
      padding: "7px 13px",
      cursor: "pointer",
      fontSize: "0.78rem"
    }
  }, "\uD83D\uDCBE Save Breeds (", breeds.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return fileRef.current.click();
    },
    style: {
      background: "#1e293b",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: 6,
      padding: "7px 13px",
      cursor: "pointer",
      fontSize: "0.78rem"
    }
  }, "\uD83D\uDCC2 Load Species File")))), fileError && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#3b0f0f",
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
      gap: 8,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: tabS("kennel"),
    onClick: function onClick() {
      if (tab === "kennel") { setKennelOpen(function(v){ return !v; }); }
      else { setTab("kennel"); setKennelOpen(true); }
    }
  }, kennelOpen && tab === "kennel" ? "\uD83C\uDFE1 Kennel (" + (activeKennel ? getKennelCount(activeKennel.id) + "/" + getKennelCapacity(activeKennel) : animals.length) + ")" : "\uD83C\uDFE0 Kennel (" + (activeKennel ? getKennelCount(activeKennel.id) + "/" + getKennelCapacity(activeKennel) : animals.length) + ")"), /*#__PURE__*/React.createElement("button", {
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
      style: { background: tab==="holding"?"#0f2d1e":"transparent", border:"1px solid #22c55e", color:"#22c55e",
        borderRadius:6, padding:"5px 14px", cursor:"pointer", fontSize:"0.82rem" },
      onClick: function(){ setTab("holding"); }
    }, "\uD83D\uDC3E Holding (", holdingPups.length, ")")
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
            background: isActive ? "#1e293b" : "transparent",
            border: "2px solid " + (isActive ? kt.color : "#334155"),
            color: isActive ? kt.color : "#64748b",
            borderRadius: 8, padding: "4px 10px", cursor: "pointer", fontSize: "0.75rem",
            display: "flex", alignItems: "center", gap: 4
          }
        },
          kt.icon + " " + k.name + " ",
          /*#__PURE__*/React.createElement("span", {
            style: {
              background: isFull ? "#3b0f0f" : "#0f2d1e",
              color: isFull ? "#ef4444" : "#22c55e",
              borderRadius: 4, padding: "1px 5px", fontSize: "0.7rem", fontWeight: "bold"
            }
          }, cnt + "/" + cap)
        );
      }),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowKennelMgr(function(v){ return !v; }); },
        style: {
          background: showKennelMgr ? "#1e3a5f" : "transparent",
          border: "1px solid " + (showKennelMgr ? "#38bdf8" : "#334155"),
          color: showKennelMgr ? "#38bdf8" : "#64748b",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem"
        }
      }, showKennelMgr ? "\u2715 Close" : "+ Manage Kennels"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowMarket(true); },
        style: {
          background: "transparent", border: "1px solid #334155", color: "#64748b",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: 16
        }
      }, "\uD83D\uDC04 Livestock Market"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowCatLady(true); },
        style: {
          background: "transparent", border: "1px solid #334155", color: "#64748b",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: 8
        }
      }, "\uD83D\uDC08 Old Cat Lady"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ setShowFacilities(true); },
        style: {
          background: "transparent", border: "1px solid #334155", color: "#64748b",
          borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: "0.72rem",
          marginLeft: "auto"
        }
      }, "\uD83C\uDFD7 Facilities"),
      /*#__PURE__*/React.createElement("span", {
        style: { color: "#475569", fontSize: "0.68rem" }
      }, "Aerial View \u00B7 Click \uD83C\uDFE0 Kennel to see cards")
    ),
    showKennelMgr && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0f172a", border: "1px solid #334155", borderRadius: 10,
        padding: "12px 14px", marginBottom: 8, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center"
      }
    },
      /*#__PURE__*/React.createElement("span", { style: { color: "#64748b", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" } }, "Add Kennel:"),
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
            background: "#1e293b", border: "1px solid " + kt.color, color: kt.color,
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
          background: "#3b0f0f", border: "1px solid #ef4444", color: "#fca5a5",
          borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: "0.72rem", marginLeft: "auto"
        }
      }, "\uD83D\uDDD1\uFE0F Delete Active Kennel")
    ),
    /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1, background: "#0f172a", borderRadius: 12, border: "1px solid #1e293b",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20
      }
    },
      /*#__PURE__*/React.createElement("div", { style: { textAlign: "center", color: "#334155" } },
        /*#__PURE__*/React.createElement("div", { style: { fontSize: "3rem", marginBottom: 10 } }, "\uD83D\uDDFA\uFE0F"),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.9rem", color: "#475569", marginBottom: 6 } }, "Property Map"),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.75rem", color: "#334155" } }, "Coming soon \u2014 click \uD83C\uDFE0 Kennel to manage your dogs")
      )
    )
  ),

  kennelOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
      background: "#0f172a", zIndex: 20, display: "flex", flexDirection: "column",
      borderRadius: 10, overflow: "hidden"
    }
  },
    /*#__PURE__*/React.createElement("div", {
      style: { background: "#1e293b", borderBottom: "1px solid #334155", padding: "10px 14px",
        display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", flexShrink: 0 }
    },
      /*#__PURE__*/React.createElement("div", { style: { color: "#64748b", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" } },
        "Add Animal to Kennel"
      ),
      /*#__PURE__*/React.createElement("select", {
        id: "bsel",
        style: { background: "#0f172a", border: "1px solid #334155", color: "#e2e8f0",
          borderRadius: 6, padding: "6px 10px", flex: 1, minWidth: 160, fontSize: "0.82rem" }
      }, Object.entries(breeds.slice().sort(function(a,b){
          return (a.group||"Other").localeCompare(b.group||"Other") || a.name.localeCompare(b.name);
        }).reduce(function(acc,b){ var g=b.group||"Other"; if(!acc[g])acc[g]=[]; acc[g].push(b); return acc; }, {})
      ).map(function(_r){ var _r2=_slicedToArray(_r,2),group=_r2[0],list=_r2[1];
        return /*#__PURE__*/React.createElement("optgroup",{key:group,label:"\u2500\u2500 "+group+" \u2500\u2500"},
          list.map(function(b){ return /*#__PURE__*/React.createElement("option",{key:b.name,value:b.name},b.name); })
        );
      })),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ return addAnimal(document.getElementById("bsel").value,"M",addAge); },
        style: { background:"#1e3a5f",border:"1px solid #38bdf8",color:"#38bdf8",borderRadius:6,padding:"6px 12px",cursor:"pointer",fontSize:"0.82rem" }
      }, "+ Male \u2642 (" + formatMoney(addAge <= 12 ? DOG_COST_PUPPY : DOG_COST_ADULT) + ")"),
      /*#__PURE__*/React.createElement("button", {
        onClick: function(){ return addAnimal(document.getElementById("bsel").value,"F",addAge); },
        style: { background:"#2d1e4f",border:"1px solid #a78bfa",color:"#a78bfa",borderRadius:6,padding:"6px 12px",cursor:"pointer",fontSize:"0.82rem" }
      }, "+ Female \u2640 (" + formatMoney(addAge <= 12 ? DOG_COST_PUPPY : DOG_COST_ADULT) + ")"),
      [{ label:"\uD83D\uDC3E Puppy", age:12 }, { label:"\uD83D\uDC15 Adult", age:20 }].map(function(opt){
        return /*#__PURE__*/React.createElement("button", {
          key: opt.age, onClick: function(){ setAddAge(opt.age); },
          style: { background: addAge===opt.age?"#1e3a5f":"transparent",
            border:"1px solid "+(addAge===opt.age?"#38bdf8":"#334155"),
            color:addAge===opt.age?"#38bdf8":"#64748b",
            borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.75rem" }
        }, opt.label, " (", opt.age===12?"12mo":"20mo", ")");
      }),
      /*#__PURE__*/React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" } },
        ["All","M","F"].map(function(s){
          return /*#__PURE__*/React.createElement("button", {
            key:s, onClick:function(){ setFilterSex(s); },
            style: { background:filterSex===s?"#1e3a5f":"transparent",
              border:"1px solid "+(filterSex===s?"#38bdf8":"#334155"),
              color:filterSex===s?"#38bdf8":"#64748b",
              borderRadius:5,padding:"3px 10px",cursor:"pointer",fontSize:"0.75rem" }
          }, s==="All"?"All":s==="M"?"Males \u2642":"Females \u2640");
        }),
        /*#__PURE__*/React.createElement("button", {
          onClick: function(){ setKennelOpen(false); },
          style: { background:"#3b0f0f",border:"1px solid #ef4444",color:"#fca5a5",
            borderRadius:6,padding:"4px 12px",cursor:"pointer",fontSize:"0.75rem" }
        }, "\u2715 Close")
      )
    ),
    filtered.length === 0
      ? /*#__PURE__*/React.createElement("div", {
          style: { flex:1,textAlign:"center",color:"#475569",padding:"50px 0",fontSize:"0.85rem" }
        }, "No animals yet \u2014 add some above!")
      : (function(){
          var a = filtered[safeKennelIdx];
          var arrowBtn = function(dir,disabled){
            return /*#__PURE__*/React.createElement("button", {
              onClick: function(e){ e.stopPropagation(); setKennelIdx(safeKennelIdx+dir); },
              disabled: disabled,
              style: { position:"absolute",top:8,left:dir<0?6:"auto",right:dir>0?6:"auto",
                background:disabled?"rgba(15,23,42,0.3)":"rgba(15,23,42,0.85)",
                border:"1px solid "+(disabled?"#1e293b":"#334155"),
                color:disabled?"#1e3a5f":"#94a3b8",
                borderRadius:8,width:38,height:38,cursor:disabled?"default":"pointer",
                fontSize:"1.1rem",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center" }
            }, dir<0?"\u25C4":"\u25BA");
          };
          return /*#__PURE__*/React.createElement("div", { style: { flex:1,display:"flex",flexDirection:"column",overflow:"hidden" } },
            /*#__PURE__*/React.createElement("div", {
              style: { color:"#475569",fontSize:"0.72rem",padding:"6px 0",textAlign:"center",flexShrink:0 }
            }, safeKennelIdx+1, " of ", filtered.length),
            /*#__PURE__*/React.createElement("div", { style: { position:"relative",flex:1,display:"flex",flexDirection:"column",overflow:"hidden" } },
              arrowBtn(-1, safeKennelIdx===0),
              /*#__PURE__*/React.createElement("div", { style: { flex:1,display:"flex",flexDirection:"column",overflow:"hidden",padding:"0 44px" } },
                /*#__PURE__*/React.createElement(Card, {
                  animal:a, onSelect:selectAnimal,
                  isSelected:(sire&&sire.id===a.id)||(dam&&dam.id===a.id),
                  ineligibleReason:breedingIneligibleReason(a),
                  onRemove:function(id){ setActionModalId(id); },
                  onRename:renameAnimal, fullHeight:true,
                  onStud:function(a){ toggleStud(a.id); },
                  onSell:function(a){ handleSellListing(a.id); },
                  onRetire:function(a){ retireAnimal(a.id); }
                })
              ),
              arrowBtn(1, safeKennelIdx>=filtered.length-1)
            )
          );
        })()
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
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#38bdf8",
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
      color: "#475569",
      textAlign: "center",
      padding: "30px 0",
      fontSize: "0.85rem"
    }
  }, "Go to Kennel \u2192 click a male")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#a78bfa",
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
      color: "#475569",
      textAlign: "center",
      padding: "30px 0",
      fontSize: "0.85rem"
    }
  }, "Go to Kennel \u2192 click a female"))), sire && dam && (((_sire$genome$coat$M = sire.genome.coat.M) === null || _sire$genome$coat$M === void 0 ? void 0 : _sire$genome$coat$M[0]) === "M" || ((_sire$genome$coat$M2 = sire.genome.coat.M) === null || _sire$genome$coat$M2 === void 0 ? void 0 : _sire$genome$coat$M2[1]) === "M") && (((_dam$genome$coat$M = dam.genome.coat.M) === null || _dam$genome$coat$M === void 0 ? void 0 : _dam$genome$coat$M[0]) === "M" || ((_dam$genome$coat$M2 = dam.genome.coat.M) === null || _dam$genome$coat$M2 === void 0 ? void 0 : _dam$genome$coat$M2[1]) === "M") && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#3b0f0f",
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
        background: "#2d1a00", border: "1px solid #f59e0b", borderRadius: 8,
        padding: "10px 14px", marginBottom: 12, fontSize: "0.82rem", color: "#fcd34d"
      }
    }, warnings.map(function(w, i) {
      return /*#__PURE__*/React.createElement("div", { key: i }, w);
    }));
  })(), /*#__PURE__*/React.createElement("button", {
    onClick: doBreed,
    disabled: !sire || !dam || !!(sire && breedingIneligibleReason(sire)) || !!(dam && breedingIneligibleReason(dam)) || (sire && dam && sire.id === dam.id) || (sire && dam && sire.sex === dam.sex),
    style: {
      width: "100%",
      background: sire && dam ? "linear-gradient(135deg,#1e3a5f,#2d1e4f)" : "#1e293b",
      border: "2px solid ".concat(sire && dam ? "#38bdf8" : "#334155"),
      color: sire && dam ? "#e2e8f0" : "#475569",
      borderRadius: 8,
      padding: 12,
      cursor: (sire && dam) ? "pointer" : "not-allowed",
      fontSize: "0.95rem",
      fontWeight: "bold",
      letterSpacing: "0.03em"
    }
  }, sire && dam ? "🧬 BREED SELECTED PAIR" : "Select a sire ♂ and dam ♀ to breed")), tab === "litter" && /*#__PURE__*/React.createElement("div", null,
    litter.length === 0
      ? /*#__PURE__*/React.createElement("div", { style: { textAlign:"center", color:"#475569", padding:"60px 0" } }, "No litter yet \u2014 go to the Breed tab!")
      : /*#__PURE__*/React.createElement(React.Fragment, null,
          /*#__PURE__*/React.createElement("div", {
            style: { background:"#1a1200", border:"1px solid #f59e0b", borderRadius:8, padding:"10px 14px", marginBottom:12, fontSize:"0.8rem", color:"#fcd34d" }
          }, "\uD83D\uDC3E Litter of ", litter.length, " \u00B7 ",
            /*#__PURE__*/React.createElement("span", { style:{color:"#64748b"} }, (litter[0]||{}).sireBreed, " \xD7 ", (litter[0]||{}).damBreed),
            " \u00B7 No Whelping Kennel \u2014 select 1 pup to keep"
          ),
          /*#__PURE__*/React.createElement("div", { style: { display:"flex", flexWrap:"wrap", gap:10, marginBottom:14 } },
            litter.map(function(pup) {
              var sel = litterSelected.includes(pup.id);
              return /*#__PURE__*/React.createElement("div", { key: pup.id, style:{ cursor:"pointer" }, onClick: function(){ toggleLitterSelect(pup.id); } },
                /*#__PURE__*/React.createElement(Card, { animal: pup }),
                /*#__PURE__*/React.createElement("div", {
                  style: { background: sel?"#0f2d1e":"#1e293b", border:"1px solid "+(sel?"#22c55e":"#475569"),
                    color: sel?"#22c55e":"#64748b", borderRadius:"0 0 8px 8px",
                    padding:"6px 0", textAlign:"center", fontSize:"0.78rem", fontWeight:"bold", marginTop:-2 }
                }, sel ? "\u2713 Selected" : "Tap to Select")
              );
            })
          ),
          /*#__PURE__*/React.createElement("button", {
            onClick: finalizeLitter,
            style: { width:"100%", background:"#0a2a15", border:"2px solid #22c55e", color:"#22c55e",
              borderRadius:8, padding:"10px 0", fontSize:"0.88rem", fontWeight:"bold", cursor:"pointer" }
          }, "\u2705 Keep ", litterSelected.length, " \u2014 Rehome rest (", litter.length-litterSelected.length, ")")
      )
  ),

  tab === "whelping" && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 } },
      /*#__PURE__*/React.createElement("div", { style:{ color:"#f472b6", fontWeight:"bold", fontSize:"1rem" } }, "\uD83C\uDFE5 Whelping Kennel"),
      !hasWhelpingKennel && /*#__PURE__*/React.createElement("button", {
        onClick: function(){
          if (money < WHELPING_COST) { alert("Not enough funds!\nWhelping Kennel costs " + formatMoney(WHELPING_COST) + ", you have " + formatMoney(money) + "."); return; }
          if (confirm("Purchase Whelping Kennel for " + formatMoney(WHELPING_COST) + "?\nKeep up to 2 pups per litter, house up to 4 litters at once.")) {
            setHasWhelpingKennel(true);
            setMoney(function(m){ return m - WHELPING_COST; });
            setLog(function(lg){ return [{ id:Date.now(), type:"financial", name:"Purchased Whelping Kennel", amount: -WHELPING_COST, date: new Date().toLocaleString() }].concat(_toConsumableArray(lg)); });
          }
        },
        style: { background:"#1a1a2a", border:"1px solid #f472b6", color:"#f472b6", borderRadius:6, padding:"6px 14px", cursor:"pointer", fontSize:"0.8rem" }
      }, "\uD83D\uDED2 Purchase Whelping Kennel (placeholder)")
    ),
    !hasWhelpingKennel
      ? /*#__PURE__*/React.createElement("div", { style:{ textAlign:"center", color:"#475569", padding:"40px 0", fontSize:"0.85rem" } },
          "\uD83C\uDFE5 You don't have a Whelping Kennel yet.", /*#__PURE__*/React.createElement("br", null),
          "Purchase one to house up to 4 litters and keep 2 pups per breeding.")
      : whelpingLitters.length === 0
        ? /*#__PURE__*/React.createElement("div", { style:{ textAlign:"center", color:"#475569", padding:"40px 0" } }, "Whelping Kennel is empty \u2014 breed a pair to use it.")
        : whelpingLitters.map(function(lit) {
            var ageDays = Math.floor((Date.now()-lit.bornDate)/(1000*60*60*24));
            var canWean = ageDays >= 3;
            return /*#__PURE__*/React.createElement("div", { key: lit.litterId,
              style:{ background:"#1e1a2e", border:"1px solid #6d28d9", borderRadius:10, padding:14, marginBottom:14 }
            },
              /*#__PURE__*/React.createElement("div", { style:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 } },
                /*#__PURE__*/React.createElement("div", null,
                  /*#__PURE__*/React.createElement("span", { style:{color:"#a78bfa",fontWeight:"bold"} }, lit.dam.name),
                  /*#__PURE__*/React.createElement("span", { style:{color:"#64748b",fontSize:"0.75rem",marginLeft:8} }, lit.dam.breed, " \u00B7 ", lit.pups.length, " pups \u00B7 Day ", ageDays, "/3")
                ),
                /*#__PURE__*/React.createElement("span", { style:{fontSize:"0.75rem", color: canWean?"#22c55e":"#f59e0b"} },
                  canWean ? "\u2705 Ready to wean" : "\u23F3 "+(3-ageDays)+" day(s) left")
              ),
              /*#__PURE__*/React.createElement("div", { style:{fontSize:"0.72rem",color:"#64748b",marginBottom:8} }, "Select up to 2 pups \u00B7 ", lit.selectedIds.length, "/2 selected"),
              /*#__PURE__*/React.createElement("div", { style:{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:10 } },
                lit.pups.map(function(pup) {
                  var sel = lit.selectedIds.includes(pup.id);
                  return /*#__PURE__*/React.createElement("div", { key:pup.id, style:{cursor:"pointer"}, onClick:function(){ toggleWhelpSelect(lit.litterId, pup.id); } },
                    /*#__PURE__*/React.createElement(Card, { animal:pup }),
                    /*#__PURE__*/React.createElement("div", {
                      style:{ background:sel?"#0f2d1e":"#1e293b", border:"1px solid "+(sel?"#22c55e":"#475569"),
                        color:sel?"#22c55e":"#64748b", borderRadius:"0 0 8px 8px",
                        padding:"5px 0", textAlign:"center", fontSize:"0.75rem", fontWeight:"bold", marginTop:-2 }
                    }, sel?"\u2713 Keep":"Tap to Keep")
                  );
                })
              ),
              canWean && /*#__PURE__*/React.createElement("button", {
                onClick: function(){ finalizeWhelpingLitter(lit.litterId); },
                style:{ width:"100%", background:"#0a1a2a", border:"2px solid #38bdf8", color:"#38bdf8",
                  borderRadius:8, padding:"8px 0", fontSize:"0.85rem", fontWeight:"bold", cursor:"pointer" }
              }, "\uD83C\uDFE0 Wean Litter \u2014 Keep ", lit.selectedIds.length, ", Rehome ", lit.pups.length-lit.selectedIds.length)
            );
          })
  ),

  tab === "holding" && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style:{color:"#22c55e",fontWeight:"bold",fontSize:"1rem",marginBottom:10} }, "\uD83D\uDC3E Temporary Holding"),
    /*#__PURE__*/React.createElement("div", { style:{fontSize:"0.78rem",color:"#64748b",marginBottom:12} }, "Pups here are aging. Move them to a kennel before they grow up unused!"),
    holdingPups.length === 0
      ? /*#__PURE__*/React.createElement("div", { style:{textAlign:"center",color:"#475569",padding:"40px 0"} }, "No pups in holding.")
      : /*#__PURE__*/React.createElement("div", { style:{display:"flex",flexWrap:"wrap",gap:12} },
          holdingPups.map(function(pup) {
            var days = Math.floor((Date.now()-(pup.heldSince||Date.now()))/(1000*60*60*24));
            return /*#__PURE__*/React.createElement("div", { key:pup.id },
              /*#__PURE__*/React.createElement(Card, { animal:pup }),
              /*#__PURE__*/React.createElement("div", { style:{fontSize:"0.7rem",color:"#64748b",textAlign:"center",margin:"2px 0 4px"} }, "In holding: ", days, " day", days!==1?"s":""),
              /*#__PURE__*/React.createElement("div", { style:{display:"flex",gap:4} },
                /*#__PURE__*/React.createElement("button", {
                  onClick: function(){ placeHoldingPup(pup.id); },
                  style:{flex:1,background:"#0a2a15",border:"1px solid #22c55e",color:"#22c55e",borderRadius:6,padding:"5px 0",cursor:"pointer",fontSize:"0.75rem"}
                }, "\u2192 Move to Kennel"),
                /*#__PURE__*/React.createElement("button", {
                  onClick: function(){ rehomeHoldingPup(pup.id); },
                  style:{background:"#1a0a2a",border:"1px solid #6d28d9",color:"#a78bfa",borderRadius:6,padding:"5px 8px",cursor:"pointer",fontSize:"0.75rem"}
                }, "\uD83D\uDE90")
              )
            );
          })
        )
  ),

  tab === "stud" && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style:{ color:"#22c55e", fontWeight:"bold", fontSize:"1.05rem", marginBottom:14 } }, "\uD83D\uDC3E Stud Roster"),
    (function(){
      var studs = animals.filter(function(a){ return !a.retired && a.sex==="M"; });
      if (studs.length === 0) return /*#__PURE__*/React.createElement("div", { style:{ color:"#475569", textAlign:"center", padding:40 } }, "No males in your kennel yet.");
      return /*#__PURE__*/React.createElement("div", { style:{ display:"flex", flexDirection:"column", gap:10 } },
        studs.map(function(a){
          return /*#__PURE__*/React.createElement("div", { key:a.id, style:{
            background: a.isStud ? "#0a1f0a" : "#0f172a",
            border: "1px solid " + (a.isStud ? "#22c55e" : "#1e293b"),
            borderRadius:10, padding:"12px 16px", display:"flex", alignItems:"center", gap:12
          }},
            /*#__PURE__*/React.createElement("div", { style:{ flex:1 } },
              /*#__PURE__*/React.createElement("div", { style:{ fontWeight:"bold", fontSize:"0.95rem", color:"#e2e8f0" } }, a.name),
              /*#__PURE__*/React.createElement("div", { style:{ fontSize:"0.78rem", color:"#64748b", marginTop:2 } },
                a.breed, " \u00B7 ", a.size, " \u00B7 ",
                Math.round((a.ageMonths||0)/12*10)/10, " yrs"
              ),
              a.isStud && /*#__PURE__*/React.createElement("div", { style:{ fontSize:"0.8rem", color:"#22c55e", marginTop:4 } },
                "Stud Fee: $", (a.studFee||0).toLocaleString(),
                " \u00B7 ",
                /*#__PURE__*/React.createElement("span", { style:{ color:"#94a3b8", fontSize:"0.75rem" } }, "One breeding per payment \u00B7 Auto-delists after use")
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
                style:{ background:"#0f2d1e", border:"1px solid #22c55e", color:"#22c55e",
                  borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:"0.75rem" }
              }, "Edit Fee"),
              /*#__PURE__*/React.createElement("button", {
                onClick: function(){ toggleStud(a.id); },
                style:{ background: a.isStud?"#3b0f0f":"#0f2d1e",
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
      color: "#38bdf8",
      fontWeight: "bold",
      fontSize: "1.05rem",
      marginBottom: 14
    }
  }, "\uD83D\uDCD3 Activity Journal"),
  log.length === 0
    ? /*#__PURE__*/React.createElement("div", {
        style: { textAlign: "center", color: "#475569", padding: "60px 0", fontSize: "0.85rem" }
      }, "No activity yet \u2014 your kennel journal will appear here.")
    : /*#__PURE__*/React.createElement("div", null,
        log.map(function(e) {
          // ── Entry config by type ──────────────────────────────────────
          var cfg = {
            breed:         { icon:"\uD83E\uDEC2", border:"#1e3a5f", bg:"#0d1e35", label:"Breeding" },
            rehome:        { icon:"\uD83D\uDE90", border:"#6d28d9", bg:"#1a1a2a", label:"Rehomed" },
            retire_player: { icon:"\uD83C\uDFE1", border:"#4ade80", bg:"#0f2d1e", label:"Retired" },
            retire_age:    { icon:"\uD83D\uDC74", border:"#eab308", bg:"#1f1a00", label:"Retired (Age)" },
            whelping:      { icon:"\uD83D\uDC23", border:"#f472b6", bg:"#2a0f1a", label:"Whelping" },
            pups_holding:  { icon:"\uD83D\uDC36", border:"#22c55e", bg:"#0a2a15", label:"Pups to Holding" },
            financial:     { icon:"\uD83D\uDCB0", border:"#fbbf24", bg:"#1f1500", label:"Financial" },
            incident:      { icon:"\u26A0\uFE0F",  border:"#ef4444", bg:"#2a0a0a", label:"Incident" }
          }[e.type] || { icon:"\uD83D\uDCCB", border:"#334155", bg:"#1e293b", label:"Event" };

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
                  /*#__PURE__*/React.createElement("span", { style: { color:"#38bdf8", fontWeight:"bold" } }, e.sire),
                  " \xD7 ",
                  /*#__PURE__*/React.createElement("span", { style: { color:"#a78bfa", fontWeight:"bold" } }, e.dam)
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
                  /*#__PURE__*/React.createElement("span", { style: { color:"#a78bfa", fontWeight:"bold" } }, e.name),
                  " placed in a new home"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#64748b", fontSize:"0.75rem", marginTop:2 } }, e.breed)
              ),
              // RETIRE PLAYER entry
              e.type === "retire_player" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem" } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#4ade80", fontWeight:"bold" } }, e.name),
                  " retired by owner"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#64748b", fontSize:"0.75rem", marginTop:2 } }, e.breed + " \u00B7 " + Math.floor((e.ageMonths||0)/12) + " yrs old")
              ),
              // RETIRE AGE entry
              e.type === "retire_age" && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.9rem" } },
                  /*#__PURE__*/React.createElement("span", { style: { color:"#eab308", fontWeight:"bold" } }, e.name),
                  " retired \u2014 end of working life"
                ),
                /*#__PURE__*/React.createElement("div", { style: { color:"#64748b", fontSize:"0.75rem", marginTop:2 } }, e.breed + " \u00B7 " + Math.floor((e.ageMonths||0)/12) + " yrs old")
              ),
              // STUB entries
              (e.type === "whelping" || e.type === "pups_holding" || e.type === "financial" || e.type === "incident" || e.type === "whelp") && /*#__PURE__*/React.createElement("div", null,
                /*#__PURE__*/React.createElement("div", { style: { fontSize:"0.85rem", color: e.type==="incident" ? "#fca5a5" : e.type==="financial" ? "#fcd34d" : "#94a3b8" } },
                  e.type==="financial" ? (e.name + (e.amount ? "  " + (e.amount > 0 ? "+" : "") + formatMoney(e.amount) : "")) :
                  e.type==="incident" ? ("\u26A0\uFE0F " + e.name + (e.fine ? "  Fine: " + formatMoney(e.fine) : "")) :
                  e.type==="pups_holding" ? (e.count + " pup" + (e.count!==1?"s":"") + " moved to temporary holding") :
                  e.type==="whelp" ? (e.name + " \u2014 " + (e.note||"Whelping event")) :
                  (e.note || cfg.label + " event")
                ),
                e.detail && /*#__PURE__*/React.createElement("div", { style: { color:"#64748b", fontSize:"0.75rem", marginTop:2 } }, e.detail)
              ),
              // Timestamp
              /*#__PURE__*/React.createElement("div", { style: { color:"#334155", fontSize:"0.65rem", marginTop:4 } }, e.date)
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
      background: "#0f172a",
      borderTop: "1px solid #1e293b",
      padding: "7px 22px",
      display: "flex",
      gap: 16,
      alignItems: "center",
      fontSize: "0.74rem",
      zIndex: 100
    }
  }, sire && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#38bdf8"
    }
  }, "\u2642 Sire: ", sire.name), dam && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#a78bfa"
    }
  }, "\u2640 Dam: ", dam.name), sire && dam && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab("breed");
    },
    style: {
      background: "#1e3a5f",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: 4,
      padding: "2px 8px",
      cursor: "pointer",
      fontSize: "0.72rem"
    }
  }, "\u2192 Go Breed"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1e3a5f",
      marginLeft: "auto"
    }
  }, "8 coat loci \xB7 8 health loci \xB7 5 perf QTLs \xB7 0.5% mutation rate \xB7 COI tracking"), /*#__PURE__*/React.createElement(Clock, null),
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
    onClose: function(){ setShowMarket(false); },
    money: money,
    ownedAnimals: animals,
    ownedLivestock: ownedLivestock,
    facilitiesOwned: facilitiesOwned,
    onBuy: function(species, animal){
      if (money < (animal.price||0)) { alert("Not enough funds!\nNeed $"+(animal.price||0).toLocaleString()+", you have $"+money.toLocaleString()); return false; }
      // Check facility capacity
      var facKey = {horse:"stable",cow:"barn",sheep:null,goat:null,pig:"pig_pen",duck:"pond",chicken:"chicken_coop"}[species];
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
        setOwnedLivestock(function(prev){ return prev.concat([Object.assign({},animal,{species:species,purchasePrice:animal.price||0})]); });
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
      if (label) {
        setLog(function(lg){ return [{ id:Date.now(), type:"financial",
          name:"\uD83D\uDC04 Market Session \u2014 "+label,
          amount:total, date:new Date().toLocaleString() }].concat(lg); });
      }
    }
  })
));
}

// ── LIVESTOCK MARKET ─────────────────────────────────────────


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
  }
};

function Facilities(_ref) {
  var onClose=_ref.onClose, money=_ref.money, facilities=_ref.facilities,
      onBuy=_ref.onBuy, onUpgrade=_ref.onUpgrade;

  var _fa=_slicedToArray(useState(null),2),selected=_fa[0],setSelected=_fa[1];

  var keys = Object.keys(FACILITIES);

  return /*#__PURE__*/React.createElement("div",{
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.88)",
      zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}},
    /*#__PURE__*/React.createElement("div",{
      style:{background:"#0a0f1e",border:"1px solid #334155",borderRadius:14,
        width:"min(860px,95vw)",maxHeight:"88vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}},

      // Header
      /*#__PURE__*/React.createElement("div",{
        style:{display:"flex",alignItems:"center",padding:"14px 18px",
          borderBottom:"1px solid #1e293b",gap:12}},
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#e2e8f0",flex:1}},
          "\uD83C\uDFD7 Facilities"),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.78rem",color:"#475569"}},
          "Balance: "),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.88rem",fontWeight:"bold",
          color:money>=500?"#22c55e":money>=0?"#f59e0b":"#ef4444"}},
          "$"+money.toLocaleString()),
        /*#__PURE__*/React.createElement("button",{onClick:onClose,
          style:{background:"transparent",border:"1px solid #334155",color:"#94a3b8",
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
              style:{background: owned?"#0a1a0a":"#0f172a",
                border:"1px solid "+(owned?"#22c55e":"#1e293b"),
                borderRadius:10,padding:"14px",display:"flex",flexDirection:"column",gap:8}},

              // Title row
              /*#__PURE__*/React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},
                /*#__PURE__*/React.createElement("span",{style:{fontSize:"1.4rem"}},fac.icon),
                /*#__PURE__*/React.createElement("div",{style:{flex:1}},
                  /*#__PURE__*/React.createElement("div",{style:{fontWeight:"bold",color:"#e2e8f0",fontSize:"0.88rem"}},
                    fac.label),
                  owned
                    ?/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#22c55e"}},
                        currentTier.name+" \u00B7 Capacity: "+currentTier.capacity+
                        (isMaxed?" \u00B7 \u2605 Maxed":""))
                    :/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#475569"}},
                        "Not built")
                )
              ),

              // Description
              /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#64748b",lineHeight:1.4}},
                fac.desc),

              // Upkeep if owned
              owned&&/*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#94a3b8"}},
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
                    style:{background:money>=firstTier.cost?"#0f2d1e":"#1a0a0a",
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
                      style:{background:money>=nextTier.cost?"#0f1f3d":"#1a0a0a",
                        border:"1px solid "+(money>=nextTier.cost?"#38bdf8":"#ef4444"),
                        color:money>=nextTier.cost?"#38bdf8":"#ef4444",
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

