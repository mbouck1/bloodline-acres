// game-data.js — Genetics and livestock data for Bloodline Acres

var COAT_LOCI = {
  B: {
    name: "Black/Brown",
    alleles: ["B", "b"],
    desc: { "B/B": "Black pigment", "B/b": "Black (brown carrier)", "b/b": "Brown/Liver/Chocolate" }
  },
  E: {
    name: "Extension",
    alleles: ["E", "e"],
    desc: { "E/E": "Full color", "E/e": "Full color (red carrier)", "e/e": "Recessive Red/Yellow" }
  },
  A: {
    name: "Agouti",
    alleles: ["Ay", "aw", "at", "a"],
    desc: {
      "Ay/Ay": "Sable", "Ay/aw": "Sable", "Ay/at": "Sable (tan carrier)", "Ay/a": "Sable",
      "aw/aw": "Wolf Sable", "aw/at": "Wolf Sable", "aw/a": "Wolf Sable",
      "at/at": "Tan Points", "at/a": "Tan Points (rec black carrier)", "a/a": "Recessive Black"
    }
  },
  K: {
    name: "Dominant Black",
    alleles: ["KB", "kbr", "ky"],
    desc: {
      "KB/KB": "Dominant Black", "KB/kbr": "Dom Black (brindle carrier)", "KB/ky": "Dominant Black",
      "kbr/kbr": "Brindle", "kbr/ky": "Brindle", "ky/ky": "A locus determines color"
    }
  },
  D: {
    name: "Dilution",
    alleles: ["D", "d"],
    desc: { "D/D": "Full color", "D/d": "Full color (dilute carrier)", "d/d": "Dilute (blue/fawn/cream)" }
  },
  M: {
    name: "Merle",
    alleles: ["M", "m"],
    desc: { "M/M": "⚠️ DOUBLE MERLE (deaf/blind risk)", "M/m": "Merle", "m/m": "Non-merle" },
    lethal: "M/M"
  },
  H: {
    name: "Harlequin",
    alleles: ["H", "h"],
    desc: { "H/H": "⚠️ LETHAL (embryonic)", "H/h": "Harlequin (if merle)", "h/h": "Non-harlequin" },
    lethal: "H/H"
  },
  S: {
    name: "Spotting",
    alleles: ["S", "sp", "sw"],
    desc: {
      "S/S": "Solid", "S/sp": "Solid (piebald carrier)", "S/sw": "Solid (extreme white carrier)",
      "sp/sp": "Piebald spotted", "sp/sw": "Heavy piebald", "sw/sw": "Extreme white"
    }
  },
  T: {
    name: "Ticking/Roan",
    alleles: ["TR", "T", "t"],
    desc: {
      "TR/TR": "Heavy Roan", "TR/T": "Roan", "TR/t": "Roan",
      "T/T": "Ticked", "T/t": "Ticked", "t/t": "Clear white"
    }
  },
  I: {
    name: "Intensity",
    alleles: ["I", "i"],
    desc: { "I/I": "Full intensity", "I/i": "Reduced intensity carrier", "i/i": "Low intensity (pale/cream)" }
  },
  As: {
    name: "Saddle Tan",
    alleles: ["N", "n"],
    desc: { "N/N": "Saddle tan pattern", "N/n": "Saddle tan (carrier)", "n/n": "Full tan points" }
  },
  L: {
    name: "Coat Length",
    alleles: ["L", "l"],
    desc: { "L/L": "Short coat", "L/l": "Short (long carrier)", "l/l": "Long coat" }
  },
  W: {
    name: "Furnishings/Wire",
    alleles: ["W", "w"],
    desc: { "W/W": "Furnished/Wire coat", "W/w": "Furnished/Wire coat", "w/w": "Smooth/No furnishings" }
  },
  Cu: {
    name: "Curl",
    alleles: ["Cu", "cu"],
    desc: { "Cu/Cu": "Curly coat", "Cu/cu": "Wavy coat", "cu/cu": "Straight coat" }
  }
};
var HEALTH_LOCI = {
  HipQ: {
    name: "Hip Quality",
    alleles: ["G", "g"],
    desc: {
      "G/G": "Excellent hips",
      "G/g": "Good hips (carrier)",
      "g/g": "Hip dysplasia risk"
    }
  },
  EyeQ: {
    name: "Eye Health",
    alleles: ["G", "g"],
    desc: {
      "G/G": "Clear eyes",
      "G/g": "Clear (carrier)",
      "g/g": "Eye condition risk"
    }
  },
  HeartQ: {
    name: "Heart Health",
    alleles: ["G", "g"],
    desc: {
      "G/G": "Clear heart",
      "G/g": "Clear (carrier)",
      "g/g": "Cardiac risk"
    }
  },
  JointQ: {
    name: "Joint Quality",
    alleles: ["G", "g"],
    desc: {
      "G/G": "Excellent joints",
      "G/g": "Good joints (carrier)",
      "g/g": "Joint condition risk"
    }
  },
  MDR1: {
    name: "MDR1 Drug Sensitivity",
    alleles: ["N", "m"],
    desc: {
      "N/N": "Normal",
      "N/m": "Carrier (1 copy)",
      "m/m": "⚠️ Drug sensitive"
    }
  },
  PRA: {
    name: "Progressive Retinal Atrophy",
    alleles: ["N", "n"],
    desc: {
      "N/N": "Clear",
      "N/n": "Carrier",
      "n/n": "⚠️ Affected"
    }
  },
  DM: {
    name: "Degenerative Myelopathy",
    alleles: ["N", "n"],
    desc: {
      "N/N": "Clear",
      "N/n": "Carrier",
      "n/n": "⚠️ At risk"
    }
  },
  vWD: {
    name: "von Willebrand Disease",
    alleles: ["N", "n"],
    desc: {
      "N/N": "Clear",
      "N/n": "Carrier",
      "n/n": "⚠️ Affected"
    }
  }
};
var PERF_QTLS = ["DRIVE", "INTEL", "NERVE", "SPEED", "MUSCLE"];

// ── GENETICS ENGINE ───────────────────────────────────────────
function pickAllele(freqPairs) {
  var r = Math.random();
  var c = 0;
  var _iterator = _createForOfIteratorHelper(freqPairs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        al = _step$value[0],
        fr = _step$value[1];
      c += fr;
      if (r < c) return al;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return freqPairs[freqPairs.length - 1][0];
}
function makeGeno(freqPairs) {
  return [pickAllele(freqPairs), pickAllele(freqPairs)];
}
function inheritOne(alleles) {
  var a = alleles[Math.random() < 0.5 ? 0 : 1];
  return {
    allele: a,
    mutated: Math.random() < 0.005
  };
}
function generateGenome(breed) {
  var g = {
    coat: {},
    health: {},
    perf: {},
    mutations: []
  };
  for (var _i = 0, _Object$entries = Object.entries(COAT_LOCI); _i < _Object$entries.length; _i++) {
    var _breed$coatFreqs;
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      loc = _Object$entries$_i[0],
      ld = _Object$entries$_i[1];
    var f = breed === null || breed === void 0 || (_breed$coatFreqs = breed.coatFreqs) === null || _breed$coatFreqs === void 0 ? void 0 : _breed$coatFreqs[loc];
    g.coat[loc] = f ? makeGeno(f) : [ld.alleles[Math.floor(Math.random() * ld.alleles.length)], ld.alleles[Math.floor(Math.random() * ld.alleles.length)]];
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(HEALTH_LOCI); _i2 < _Object$entries2.length; _i2++) {
    var _breed$healthFreqs;
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      _loc = _Object$entries2$_i[0],
      _ld = _Object$entries2$_i[1];
    var _f = breed === null || breed === void 0 || (_breed$healthFreqs = breed.healthFreqs) === null || _breed$healthFreqs === void 0 ? void 0 : _breed$healthFreqs[_loc];
    var ha = _ld.alleles[0],
      ra = _ld.alleles[1] || _ld.alleles[0];
    g.health[_loc] = _f ? makeGeno(_f) : [Math.random() < 0.85 ? ha : ra, Math.random() < 0.85 ? ha : ra];
  }
  var _iterator2 = _createForOfIteratorHelper(PERF_QTLS),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _breed$perfAvg;
      var q = _step2.value;
      var avg = (breed === null || breed === void 0 || (_breed$perfAvg = breed.perfAvg) === null || _breed$perfAvg === void 0 ? void 0 : _breed$perfAvg[q]) || 3;
      g.perf[q] = [Math.min(5, Math.max(1, Math.round(avg + (Math.random() - 0.5) * 2))), Math.min(5, Math.max(1, Math.round(avg + (Math.random() - 0.5) * 2)))];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return g;
}
function breedGenomes(sG, dG) {
  var off = {
    coat: {},
    health: {},
    perf: {},
    mutations: []
  };
  for (var _i3 = 0, _Object$keys = Object.keys(COAT_LOCI); _i3 < _Object$keys.length; _i3++) {
    var loc = _Object$keys[_i3];
    var fs = inheritOne(sG.coat[loc] || ["?", "?"]),
      fd = inheritOne(dG.coat[loc] || ["?", "?"]);
    if (fs.mutated) off.mutations.push({
      loc: loc,
      src: "sire"
    });
    if (fd.mutated) off.mutations.push({
      loc: loc,
      src: "dam"
    });
    off.coat[loc] = [fs.allele, fd.allele];
  }
  for (var _i4 = 0, _Object$keys2 = Object.keys(HEALTH_LOCI); _i4 < _Object$keys2.length; _i4++) {
    var _loc2 = _Object$keys2[_i4];
    var _fs = inheritOne(sG.health[_loc2] || ["G", "G"]),
      _fd = inheritOne(dG.health[_loc2] || ["G", "G"]);
    if (_fs.mutated) off.mutations.push({
      loc: _loc2,
      src: "sire"
    });
    if (_fd.mutated) off.mutations.push({
      loc: _loc2,
      src: "dam"
    });
    off.health[_loc2] = [_fs.allele, _fd.allele];
  }
  var _iterator3 = _createForOfIteratorHelper(PERF_QTLS),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var q = _step3.value;
      var sv = sG.perf[q] || [3, 3],
        dv = dG.perf[q] || [3, 3];
      off.perf[q] = [sv[Math.random() < 0.5 ? 0 : 1], dv[Math.random() < 0.5 ? 0 : 1]];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return off;
}
function checkLethals(genome) {
  var w = [];
  for (var _i5 = 0, _Object$entries3 = Object.entries(COAT_LOCI); _i5 < _Object$entries3.length; _i5++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i5], 2),
      loc = _Object$entries3$_i[0],
      ld = _Object$entries3$_i[1];
    if (!ld.lethal) continue;
    var _ref = genome.coat[loc] || [],
      _ref2 = _slicedToArray(_ref, 2),
      a1 = _ref2[0],
      a2 = _ref2[1];
    if ("".concat(a1, "/").concat(a2) === ld.lethal || "".concat(a2, "/").concat(a1) === ld.lethal) w.push({
      loc: loc,
      msg: ld.desc[ld.lethal]
    });
  }
  return w;
}
function calcHealthScore(genome) {
  var score = 100,
    issues = [];
  for (var _i6 = 0, _Object$entries4 = Object.entries(HEALTH_LOCI); _i6 < _Object$entries4.length; _i6++) {
    var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i6], 2),
      loc = _Object$entries4$_i[0],
      ld = _Object$entries4$_i[1];
    var _ref3 = genome.health[loc] || [],
      _ref4 = _slicedToArray(_ref3, 2),
      a1 = _ref4[0],
      a2 = _ref4[1];
    var ra = ld.alleles[ld.alleles.length - 1];
    if (a1 === ra && a2 === ra) {
      score -= 20;
      issues.push({
        loc: loc,
        sev: "high",
        name: ld.name
      });
    } else if (a1 === ra || a2 === ra) {
      score -= 5;
      issues.push({
        loc: loc,
        sev: "carrier",
        name: ld.name
      });
    }
  }
  return {
    score: Math.max(0, score),
    issues: issues
  };
}
function calcPerfScore(genome) {
  var t = 0,
    c = 0;
  var _iterator4 = _createForOfIteratorHelper(PERF_QTLS),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var q = _step4.value;
      if (genome.perf[q]) {
        t += genome.perf[q][0] + genome.perf[q][1];
        c += 2;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return c > 0 ? Math.round(t / c * 20) : 50;
}
function interpretCoatType(genome) {
  var c = genome.coat;
  var isLong = c.L && c.L[0] === "l" && c.L[1] === "l";
  var hasFurn = c.W && (c.W[0] === "W" || c.W[1] === "W");
  var curl = c.Cu ? (c.Cu[0] === "Cu" && c.Cu[1] === "Cu" ? "curly" : (c.Cu[0] === "Cu" || c.Cu[1] === "Cu") ? "wavy" : "straight") : "straight";
  if (!isLong && !hasFurn && curl === "straight") return "Short/Smooth";
  if (!isLong && hasFurn && curl === "straight") return "Wire/Rough";
  if (!isLong && hasFurn && curl !== "straight") return "Wire/Curly";
  if (isLong && !hasFurn && curl === "straight") return "Long/Smooth";
  if (isLong && hasFurn && curl === "straight") return "Long/Furnished";
  if (isLong && !hasFurn && curl !== "straight") return "Long/Curly";
  if (isLong && hasFurn && curl !== "straight") return "Long/Curly+Furnished";
  return "Short/Smooth";
}
function interpretColor(genome) {
  var c = genome.coat;
  if (!c.E) return "Unknown";
  // Coat type prefix
  var ct = interpretCoatType(genome);
  // Base color
  var brown = c.B && c.B[0] === "b" && c.B[1] === "b";
  var dilute = c.D && c.D[0] === "d" && c.D[1] === "d";
  var merle = c.M && (c.M[0] === "M" || c.M[1] === "M");
  var doubleMerle = c.M && c.M[0] === "M" && c.M[1] === "M";
  var harlequin = merle && c.H && (c.H[0] === "H" || c.H[1] === "H");
  var mt = harlequin ? " Harlequin" : merle ? " Merle" : "";
  if (doubleMerle) mt = " ⚠️DblMerle";
  // Ticking/roan modifier (only on white areas)
  var hasWhite = c.S && (c.S[0] !== "S" || c.S[1] !== "S");
  var tick = "";
  if (hasWhite && c.T) {
    if (c.T[0] === "TR" || c.T[1] === "TR") tick = " Roan";
    else if (c.T[0] === "T" || c.T[1] === "T") tick = " Ticked";
  }
  // Recessive red
  if (c.E[0] === "e" && c.E[1] === "e") {
    var shade = c.I && c.I[0] === "i" && c.I[1] === "i" ? "Cream" : "Yellow/Red";
    return ct + " · " + shade + tick;
  }
  // Dominant black
  if (c.K && (c.K[0] === "KB" || c.K[1] === "KB")) {
    var base = brown && dilute ? "Isabella" : brown ? "Liver" : dilute ? "Blue" : "Black";
    return ct + " · " + base + mt + tick;
  }
  // Brindle
  var brindle = c.K && (c.K[0] === "kbr" || c.K[1] === "kbr") && !(c.K[0] === "KB" || c.K[1] === "KB");
  var brindleStr = brindle ? " Brindle" : "";
  // A locus
  var a1 = c.A && c.A[0];
  var saddle = c.As && (c.As[0] === "N" || c.As[1] === "N") && a1 === "at";
  if (a1 === "Ay") {
    var s = dilute ? " Dilute" : "";
    var b = brown ? " (liver)" : "";
    return ct + " · Sable" + s + b + brindleStr + mt + tick;
  }
  if (a1 === "aw") return ct + " · Wolf Sable" + brindleStr + mt + tick;
  if (a1 === "at") {
    var tanBase = brown && dilute ? "Isabella" : brown ? "Liver" : dilute ? "Blue" : "Black";
    var pattern = saddle ? " Saddle Tan" : " & Tan";
    return ct + " · " + tanBase + pattern + brindleStr + mt + tick;
  }
  // Recessive black (a/a)
  var rBase = brown && dilute ? "Isabella" : brown ? "Liver" : dilute ? "Blue" : "Black";
  return ct + " · " + rBase + brindleStr + mt + tick;
}
function buildVIN(genome) {
  var c = genome.coat,
    h = genome.health,
    p = genome.perf;
  var cp = ["B", "E", "A", "D"].map(function (l) {
    return c[l] ? "".concat(c[l][0], "/").concat(c[l][1]) : "?/?";
  }).join("·") + (c.M ? "\xB7".concat(c.M[0]).concat(c.M[1]) : "·??");
  var hp = ["HipQ", "EyeQ", "HeartQ", "JointQ"].map(function (l) {
    return h[l] ? "".concat(h[l][0], "/").concat(h[l][1]) : "?/?";
  }).join("·");
  var pp = PERF_QTLS.map(function (q) {
    return p[q] ? "".concat(p[q][0], "/").concat(p[q][1]) : "?/?";
  }).join("·");
  return "".concat(cp, " | ").concat(hp, " | ").concat(pp);
}
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
      born: new Date().toLocaleDateString()
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
var HORSE_BREEDS = {
  light: [
    // American stock & color breeds
    { name:"Quarter Horse",        aptitudes:["Racing","Western","Trail"] },
    { name:"Paint Horse",          aptitudes:["Western","Trail","Show"] },
    { name:"Appaloosa",            aptitudes:["Western","Trail","Show"] },
    { name:"Palomino",             aptitudes:["Western","Show","Pleasure"] },
    { name:"Buckskin",             aptitudes:["Western","Trail","Show"] },
    { name:"Mustang",              aptitudes:["Trail","Western","Endurance"] },
    { name:"American Saddlebred",  aptitudes:["Show","Pleasure","Gaited"] },
    { name:"Standardbred",         aptitudes:["Racing","Harness","Pleasure"] },
    { name:"Morgan",               aptitudes:["Western","Trail","Pleasure"] },
    { name:"National Show Horse",  aptitudes:["Show","Pleasure","Gaited"] },
    // Thoroughbred & racing
    { name:"Thoroughbred",         aptitudes:["Racing","Hunt Seat","Cross Country"] },
    { name:"Anglo-Arabian",        aptitudes:["Racing","Endurance","Cross Country"] },
    // Arabian family
    { name:"Arabian",              aptitudes:["Endurance","Racing","Show"] },
    { name:"Half-Arabian",         aptitudes:["Endurance","Show","Trail"] },
    { name:"Shagya Arabian",       aptitudes:["Endurance","Show","Dressage"] },
    // Baroque & Iberian
    { name:"Andalusian",           aptitudes:["Dressage","Show Jumping","Show"] },
    { name:"Lusitano",             aptitudes:["Dressage","Bullfighting","Show"] },
    { name:"Lipizzaner",           aptitudes:["Dressage","Show","Pleasure"] },
    { name:"Friesian",             aptitudes:["Dressage","Show","Pleasure"] },
    { name:"Friesian Sport Horse", aptitudes:["Dressage","Show Jumping","Show"] },
    // Sport & event
    { name:"Irish Sport Horse",    aptitudes:["Cross Country","Show Jumping","Hunt Seat"] },
    { name:"Irish Draught",        aptitudes:["Cross Country","Hunt Seat","Farm Work"] },
    { name:"Akhal-Teke",           aptitudes:["Endurance","Racing","Dressage"] },
    // Heritage & exotic
    { name:"Marwari",              aptitudes:["Endurance","Show","Trail"] },
    { name:"Kathiawari",           aptitudes:["Endurance","Trail","Show"] },
    { name:"Criollo",              aptitudes:["Endurance","Western","Trail"] },
    { name:"Camargue",             aptitudes:["Trail","Endurance","Western"] },
    { name:"Barb",                 aptitudes:["Endurance","Racing","Trail"] },
    { name:"Turkoman",             aptitudes:["Racing","Endurance","Show"] },
    { name:"Kiger Mustang",        aptitudes:["Trail","Western","Show"] }
  ],
  warmblood: [
    // German
    { name:"Hanoverian",           aptitudes:["Dressage","Show Jumping","Cross Country"] },
    { name:"Oldenburg",            aptitudes:["Dressage","Show Jumping","Show"] },
    { name:"Trakehner",            aptitudes:["Dressage","Cross Country","Show Jumping"] },
    { name:"Westphalian",          aptitudes:["Show Jumping","Dressage","Cross Country"] },
    { name:"Holsteiner",           aptitudes:["Show Jumping","Dressage","Cross Country"] },
    { name:"Rhinelander",          aptitudes:["Dressage","Show Jumping","Show"] },
    { name:"Baden-Württemberg",    aptitudes:["Dressage","Show Jumping","Cross Country"] },
    // Dutch & Belgian
    { name:"Dutch Warmblood",      aptitudes:["Dressage","Show Jumping","Hunt Seat"] },
    { name:"Belgian Warmblood",    aptitudes:["Show Jumping","Dressage","Hunt Seat"] },
    { name:"KWPN",                 aptitudes:["Dressage","Show Jumping","Cross Country"] },
    // Scandinavian
    { name:"Swedish Warmblood",    aptitudes:["Dressage","Show Jumping","Cross Country"] },
    { name:"Danish Warmblood",     aptitudes:["Dressage","Show Jumping","Cross Country"] },
    // French
    { name:"Selle Français",       aptitudes:["Show Jumping","Cross Country","Hunt Seat"] },
    // Other European
    { name:"Zangersheide",         aptitudes:["Show Jumping","Cross Country","Hunt Seat"] },
    { name:"Latvian Warmblood",    aptitudes:["Dressage","Show Jumping","Cross Country"] },
    { name:"Czech Warmblood",      aptitudes:["Show Jumping","Dressage","Cross Country"] },
    { name:"Australian Warmblood", aptitudes:["Show Jumping","Dressage","Cross Country"] }
  ],
  gaited: [
    // American gaited
    { name:"Tennessee Walking Horse", aptitudes:["Gaited","Pleasure","Trail"] },
    { name:"Missouri Fox Trotter",    aptitudes:["Gaited","Trail","Pleasure"] },
    { name:"American Standardbred",   aptitudes:["Gaited","Harness","Racing"] },
    { name:"Racking Horse",           aptitudes:["Gaited","Pleasure","Show"] },
    { name:"Spotted Saddle Horse",    aptitudes:["Gaited","Show","Pleasure"] },
    { name:"Rocky Mountain Horse",    aptitudes:["Gaited","Trail","Pleasure"] },
    { name:"Kentucky Mountain Horse", aptitudes:["Gaited","Trail","Pleasure"] },
    { name:"Single-Footing Horse",    aptitudes:["Gaited","Trail","Endurance"] },
    // Latin American gaited
    { name:"Paso Fino",               aptitudes:["Gaited","Show","Pleasure"] },
    { name:"Peruvian Paso",           aptitudes:["Gaited","Trail","Show"] },
    { name:"Mangalarga Marchador",    aptitudes:["Gaited","Endurance","Trail"] },
    { name:"Campolina",               aptitudes:["Gaited","Pleasure","Show"] },
    // European gaited
    { name:"Icelandic Horse",         aptitudes:["Gaited","Trail","Endurance"] },
    { name:"Standardbred (Trotter)",  aptitudes:["Gaited","Harness","Racing"] },
    { name:"Frederiksborg",           aptitudes:["Gaited","Show","Pleasure"] }
  ],
  draft: [
    // Heavy European
    { name:"Shire",                aptitudes:["Show","Pulling","Farm Work"] },
    { name:"Clydesdale",           aptitudes:["Show","Pulling","Farm Work"] },
    { name:"Percheron",            aptitudes:["Show","Pulling","Farm Work"] },
    { name:"Belgian Draft",        aptitudes:["Pulling","Farm Work","Show"] },
    { name:"Brabant",              aptitudes:["Pulling","Farm Work"] },
    { name:"Suffolk Punch",        aptitudes:["Farm Work","Pulling"] },
    { name:"Jutland",              aptitudes:["Farm Work","Pulling","Show"] },
    { name:"Boulonnais",           aptitudes:["Pulling","Farm Work","Show"] },
    { name:"Breton",               aptitudes:["Farm Work","Pulling","Show"] },
    { name:"Comtois",              aptitudes:["Farm Work","Pulling"] },
    // Light draft / multipurpose
    { name:"Haflinger",            aptitudes:["Farm Work","Trail","Show"] },
    { name:"Norwegian Fjord",      aptitudes:["Farm Work","Trail","Show"] },
    { name:"American Cream Draft", aptitudes:["Show","Pulling","Farm Work"] },
    { name:"Black Forest Horse",   aptitudes:["Farm Work","Trail","Show"] },
    { name:"Noriker",              aptitudes:["Farm Work","Pulling","Trail"] },
    { name:"Auxois",               aptitudes:["Pulling","Farm Work"] },
    { name:"Ardennais",            aptitudes:["Farm Work","Pulling"] },
    { name:"Rhenish German",       aptitudes:["Pulling","Farm Work","Show"] }
  ],
  pony: [
    // British Isles mountain & moorland
    { name:"Connemara",            aptitudes:["Show Jumping","Trail","Show"] },
    { name:"Welsh Section A",      aptitudes:["Show","Pleasure","Driving"] },
    { name:"Welsh Section B",      aptitudes:["Show","Show Jumping","Pleasure"] },
    { name:"Welsh Section C",      aptitudes:["Trail","Show","Driving"] },
    { name:"Welsh Section D",      aptitudes:["Show Jumping","Trail","Farm Work"] },
    { name:"Shetland Pony",        aptitudes:["Show","Pleasure","Driving"] },
    { name:"Dartmoor Pony",        aptitudes:["Trail","Pleasure","Show"] },
    { name:"Exmoor Pony",          aptitudes:["Trail","Endurance","Show"] },
    { name:"New Forest Pony",      aptitudes:["Trail","Show","Pleasure"] },
    { name:"Fell Pony",            aptitudes:["Trail","Driving","Show"] },
    { name:"Dales Pony",           aptitudes:["Driving","Trail","Farm Work"] },
    { name:"Highland Pony",        aptitudes:["Trail","Farm Work","Show"] },
    // European ponies
    { name:"Hackney Pony",         aptitudes:["Driving","Show","Pleasure"] },
    { name:"Fjord Pony",           aptitudes:["Trail","Farm Work","Driving"] },
    { name:"Haflinger Pony",       aptitudes:["Trail","Show","Pleasure"] },
    { name:"Landais Pony",         aptitudes:["Trail","Pleasure","Show"] },
    { name:"Gotland Pony",         aptitudes:["Trail","Show","Pleasure"] },
    // American & miniature
    { name:"Miniature Horse",      aptitudes:["Show","Driving","Pleasure"] },
    { name:"American Miniature",   aptitudes:["Show","Driving","Pleasure"] },
    { name:"Pony of the Americas", aptitudes:["Western","Trail","Show"] },
    { name:"Chincoteague Pony",    aptitudes:["Trail","Show","Pleasure"] },
    { name:"Assateague Pony",      aptitudes:["Trail","Endurance","Show"] }
  ]
};

var BEEF_BREEDS = ["Angus","Hereford","Charolais","Simmental","Limousin","Shorthorn","Brahman","Brangus","Red Angus","Gelbvieh"];
var DAIRY_BREEDS = ["Holstein","Jersey","Guernsey","Brown Swiss","Ayrshire","Milking Shorthorn"];

var LIVESTOCK_SPECIES = [
  { key:"horse",   label:"Horses",   icon:"\uD83D\uDC0E", hasGenetics:true  },
  { key:"cow",     label:"Cows",     icon:"\uD83D\uDC04", hasGenetics:true  },
  { key:"sheep",   label:"Sheep",    icon:"\uD83D\uDC11", hasGenetics:false },
  { key:"goat",    label:"Goats",    icon:"\uD83D\uDC10", hasGenetics:false },
  { key:"pig",     label:"Pigs",     icon:"\uD83D\uDC16", hasGenetics:false },
  { key:"duck",    label:"Ducks",    icon:"\uD83E\uDD86", hasGenetics:false },
  { key:"chicken", label:"Chickens", icon:"\uD83D\uDC14", hasGenetics:false }
];


// ═══════════════════════════════════════════════════════════════
// HORSE GENETICS ENGINE
// ═══════════════════════════════════════════════════════════════
var HORSE_PERF_QTLS_MKT = ["SPEED","STAMINA","MUSCLE","TEMP","AGILITY"];

function generateHorseGenomeInline(breedType) {
  var freqs = {
    light:    {E:0.65,A:0.75,Cr:0.10,D:0.10,G:0.20,Rn:0.15,TO:0.05,Sv:0.04,Z:0.05,Ch:0.05},
    warmblood:{E:0.70,A:0.80,Cr:0.05,D:0.05,G:0.20,Rn:0.05,TO:0.00,Sv:0.00,Z:0.00,Ch:0.00},
    gaited:   {E:0.60,A:0.65,Cr:0.20,D:0.10,G:0.15,Rn:0.20,TO:0.10,Sv:0.08,Z:0.00,Ch:0.05},
    draft:    {E:0.70,A:0.75,Cr:0.05,D:0.05,G:0.20,Rn:0.20,TO:0.00,Sv:0.00,Z:0.10,Ch:0.00},
    pony:     {E:0.55,A:0.60,Cr:0.15,D:0.20,G:0.20,Rn:0.25,TO:0.10,Sv:0.08,Z:0.05,Ch:0.05}
  };
  var hb = {
    light:    {HipQ:0.80,BoneQ:0.80,LungQ:0.80,HeartQ:0.82,HoofQ:0.80},
    warmblood:{HipQ:0.75,BoneQ:0.85,LungQ:0.80,HeartQ:0.78,HoofQ:0.80},
    gaited:   {HipQ:0.80,BoneQ:0.80,LungQ:0.80,HeartQ:0.82,HoofQ:0.82},
    draft:    {HipQ:0.70,BoneQ:0.90,LungQ:0.75,HeartQ:0.75,HoofQ:0.80},
    pony:     {HipQ:0.85,BoneQ:0.85,LungQ:0.82,HeartQ:0.85,HoofQ:0.85}
  };
  var pb = {
    light:    {SPEED:3.5,STAMINA:3.5,MUSCLE:3.0,TEMP:3.2,AGILITY:3.5},
    warmblood:{SPEED:3.3,STAMINA:3.5,MUSCLE:3.5,TEMP:3.8,AGILITY:4.0},
    gaited:   {SPEED:3.0,STAMINA:3.8,MUSCLE:3.0,TEMP:4.2,AGILITY:3.2},
    draft:    {SPEED:2.0,STAMINA:4.0,MUSCLE:5.0,TEMP:4.5,AGILITY:2.0},
    pony:     {SPEED:3.0,STAMINA:3.8,MUSCLE:3.2,TEMP:4.0,AGILITY:3.8}
  };
  var f=freqs[breedType]||freqs.light, h=hb[breedType]||hb.light, p=pb[breedType]||pb.light;
  function dip(q){return [Math.random()<q?"1":"0",Math.random()<q?"1":"0"];}
  function hdip(q){return [Math.random()<q?"Q":"g",Math.random()<q?"Q":"g"];}
  function pp(base){
    var lo=Math.max(1,Math.min(5,Math.round(base-1+Math.random()*2)));
    var hi=Math.max(1,Math.min(5,Math.round(base-1+Math.random()*2)));
    return [lo,hi];
  }
  var coat={},health={},perf={};
  Object.keys(f).forEach(function(l){coat[l]=dip(f[l]);});
  Object.keys(h).forEach(function(l){health[l]=hdip(h[l]);});
  HORSE_PERF_QTLS_MKT.forEach(function(q){perf[q]=pp(p[q]||3);});
  return {coat:coat,health:health,perf:perf};
}

function interpretHorseColorInline(genome) {
  if(!genome||!genome.coat) return "Bay";
  var c=genome.coat;
  var hasE =(c.E||[])[0]==="1"||(c.E||[])[1]==="1";
  var hasA =(c.A||[])[0]==="1"||(c.A||[])[1]==="1";
  var crN  =((c.Cr||[])[0]==="1"?1:0)+((c.Cr||[])[1]==="1"?1:0);
  var hasDun=(c.D||[])[0]==="1"||(c.D||[])[1]==="1";
  var hasGr=(c.G||[])[0]==="1"||(c.G||[])[1]==="1";
  var hasRn=(c.Rn||[])[0]==="1"||(c.Rn||[])[1]==="1";
  var hasTO=(c.TO||[])[0]==="1"||(c.TO||[])[1]==="1";
  var hasSv=(c.Sv||[])[0]==="1"||(c.Sv||[])[1]==="1";
  var hasZ =(c.Z||[])[0]==="1"||(c.Z||[])[1]==="1";
  var hasCh=(c.Ch||[])[0]==="1"||(c.Ch||[])[1]==="1";
  var base=!hasE?"Chestnut":hasA?"Bay":"Black";
  if(hasCh) base=base==="Bay"?"Amber Champagne":base==="Chestnut"?"Gold Champagne":"Classic Champagne";
  if(crN===2) base=base==="Bay"||base==="Amber Champagne"?"Perlino":base==="Chestnut"||base==="Gold Champagne"?"Cremello":"Smoky Cream";
  else if(crN===1) base=base==="Bay"?"Buckskin":base==="Chestnut"?"Palomino":base==="Black"?"Smoky Black":base;
  if(hasDun&&crN===0) base=base==="Bay"||base==="Buckskin"?"Dun":base==="Black"||base==="Smoky Black"?"Grulla":base==="Chestnut"||base==="Palomino"?"Red Dun":base;
  if(hasZ&&(base==="Black"||base==="Bay")) base=base==="Bay"?"Silver Bay":"Silver Black";
  var pat=hasTO&&hasSv?"Tovero":hasTO?"Tobiano":hasSv?"Overo":"";
  if(hasGr) return "Grey ("+base+")";
  var result=pat?pat+" "+base:base;
  if(hasRn&&!pat) result+=" Roan";
  return result;
}

function calcHorseHealthInline(genome) {
  if(!genome||!genome.health) return 50;
  var h=genome.health,s=0,n=0;
  Object.keys(h).forEach(function(l){var a=h[l];if(!a)return;s+=((a[0]==="Q"?1:0)+(a[1]==="Q"?1:0))/2*100;n++;});
  return n?Math.round(s/n):50;
}

function calcHorsePerfInline(genome) {
  if(!genome||!genome.perf) return 50;
  var p=genome.perf,t=0;
  HORSE_PERF_QTLS_MKT.forEach(function(q){var v=p[q];if(v)t+=(v[0]+v[1])/2;});
  return Math.round((t/(HORSE_PERF_QTLS_MKT.length*5))*100);
}

// Count health warnings for badge
function countHorseHealthWarnings(genome) {
  if(!genome||!genome.health) return 0;
  var n=0;
  ["HipQ","BoneQ","LungQ","HeartQ","HoofQ"].forEach(function(l){
    var a=(genome.health||{})[l]||["g","g"];
    if(a[0]==="g"&&a[1]==="g") n++;
  });
  return n;
}

var LIVESTOCK_QTY = {
  horse:   function(){ return Math.floor(Math.random()*13)+8; },
  cow:     function(){ return Math.floor(Math.random()*6)+20; },
  sheep:   function(){ return Math.floor(Math.random()*21)+30; },
  goat:    function(){ return Math.floor(Math.random()*6)+3; },
  pig:     function(){ return Math.floor(Math.random()*21)+30; },
  duck:    function(){ return Math.floor(Math.random()*51)+50; },
  chicken: function(){ return Math.floor(Math.random()*51)+50; }
};

function randomSex() { return Math.random() < 0.75 ? "F" : "M"; }
var _lsIdCtr = 1;
function lsId() { return "ls_" + (_lsIdCtr++) + "_" + Math.floor(Math.random()*9999); }

var GOAT_DAIRY_BREEDS   = ["Nubian","Alpine","LaMancha","Saanen","Oberhasli","Toggenburg"];
var GOAT_MEAT_BREEDS    = ["Boer","Kiko","Spanish","Myotonic","Savanna","Rangeland"];
var GOAT_DUAL_BREEDS    = ["Nigerian Dwarf","Pygmy","Kinder","Jamnapari"];

var GOAT_MILK_OUTPUT = {
  dairy: 15,   // gallons per game month
  dual:  8,    // gallons per game month
  meat:  0
};

var GOAT_MEAT_PRICE = {
  dairy: 90,
  dual:  90,
  meat:  120
};

function randomGoatType() {
  var r = Math.random();
  if (r < 0.40) return "dairy";
  if (r < 0.70) return "meat";
  return "dual";
}

function goatBreedForType(type) {
  var list = type==="dairy" ? GOAT_DAIRY_BREEDS : type==="meat" ? GOAT_MEAT_BREEDS : GOAT_DUAL_BREEDS;
  return list[Math.floor(Math.random()*list.length)];
}

function generateLivestockStock() {
  var stock = {};
  LIVESTOCK_SPECIES.forEach(function(sp) {
    var qty = LIVESTOCK_QTY[sp.key]();
    stock[sp.key] = [];
    if (sp.key === "horse") {
      var horseTypes = ["light","warmblood","gaited","draft","pony"];
      // weighted: light 35%, warmblood 25%, gaited 15%, draft 15%, pony 10%
      var horseWeights = [0.35, 0.60, 0.75, 0.90, 1.0];
      for (var i=0; i<qty; i++) {
        var r = Math.random();
        var type = "light";
        for (var wi=0; wi<horseWeights.length; wi++) { if (r < horseWeights[wi]) { type = horseTypes[wi]; break; } }
        var breeds = HORSE_BREEDS[type];
        var breed = breeds[Math.floor(Math.random()*breeds.length)];
        var hGenome = generateHorseGenomeInline(type);
        var ha = { id:lsId(), type:type, breed:breed.name, species:"horse",
          aptitudes:breed.aptitudes, sex:randomSex(), price:0,
          genome:hGenome,
          coatColor:interpretHorseColorInline(hGenome),
          healthScore:calcHorseHealthInline(hGenome),
          ageMonths:Math.floor(Math.random()*60)+24 };
        ha.sex = ha.sex; // already set
        ha.name = (function(s){
          var mn = typeof HORSE_NAMES_M !== "undefined" ? HORSE_NAMES_M : ["Thunder","Blaze","Shadow","Midnight","Storm","Duke","Maverick","Scout"];
          var fn = typeof HORSE_NAMES_F !== "undefined" ? HORSE_NAMES_F : ["Luna","Stella","Misty","Ivory","Sierra","Maple","Sage","Lady"];
          var pool = s==="M" ? mn : fn;
          return pool[Math.floor(Math.random()*pool.length)];
        })(ha.sex);
        ha.perfScore = calcHorsePerfInline(hGenome);
        ha.price = calcHorsePrice(ha);
        stock[sp.key].push(ha);
      }
    } else if (sp.key === "cow") {
      for (var i=0; i<qty; i++) {
        var cowType = Math.random()<0.5?"beef":"dairy";
        var breeds = cowType==="beef"?BEEF_BREEDS:DAIRY_BREEDS;
        var breed = breeds[Math.floor(Math.random()*breeds.length)];
        var ca = { id:lsId(), type:cowType, breed:breed, sex:randomSex(), price:0 };
        ca.price = ca.type==="dairy" ? 600 : 500;
        stock[sp.key].push(ca);
      }
    } else if (sp.key === "goat") {
      for (var i=0; i<qty; i++) {
        var goatType = randomGoatType();
        var goatBreed = goatBreedForType(goatType);
        var ga = { id:lsId(), type:goatType, breed:goatBreed, sex:randomSex(), price:0 };
        ga.price = GOAT_MEAT_PRICE[goatType] + (goatType==="dairy"||goatType==="dual" ? 30 : 0);
        stock[sp.key].push(ga);
      }
    } else {
      for (var i=0; i<qty; i++) {
        var a = { id:lsId(), sex:randomSex(), price:0 };
        a.price = getListingPrice(sp.key, a);
        stock[sp.key].push(a);
      }
    }
  });
  return stock;
}

function calcHorsePrice(animal) {
  var bases    = { light:1500, warmblood:2500, gaited:1200, draft:1200, pony:600 };
  var premiums = { light:3500, warmblood:5000, gaited:2000, draft:2500, pony:1200 };
  var mids     = { light:2000, warmblood:3000, gaited:1200, draft:1200, pony:700 };
  var base = bases[animal.type] || 1500;
  var perf = animal.perfScore != null ? animal.perfScore : Math.floor(Math.random()*100);
  animal.perfScore = perf;
  var healthMod = animal.healthScore != null ? (0.8 + (animal.healthScore/100)*0.2) : 1.0;
  var premium = premiums[animal.type] || 3500;
  var mid = mids[animal.type] || 2000;
  var raw;
  if (perf >= 80) raw = base + Math.floor(Math.random()*1000) + premium;
  else if (perf >= 60) raw = base + Math.floor(Math.random()*800) + mid;
  else if (perf >= 40) raw = base + Math.floor(Math.random()*500) + 500;
  else raw = base + Math.floor(Math.random()*300);
  return Math.round(raw * healthMod / 50) * 50;
}

var LIVESTOCK_PRICES = {
  chicken: 5,
  duck:    8,
  pig:     50,
  goat:    50,
  sheep:   100,
  cow:     function(a){ return a.type==="dairy" ? 600 : 500; },
  horse:   function(a){ return calcHorsePrice(a); }
};

// Slaughterhouse meat prices per animal
var MEAT_PRICES = {
  chicken: { label: "Chicken", price: 8,   commodity: "chicken_meat" },
  duck:    { label: "Duck",    price: 14,  commodity: "duck_meat"    },
  pig:     { label: "Pork",    price: 120, commodity: "pork"         },
  sheep:   { label: "Lamb",    price: 240, commodity: "lamb"         },
  goat:  { label: "Chevon", price: 120, commodity: "chevon",
    dairy: { label: "Chevon (Dairy)", price: 90,  commodity: "chevon" },
    dual:  { label: "Chevon (Dual)",  price: 90,  commodity: "chevon" },
    meat:  { label: "Chevon",         price: 120, commodity: "chevon" }
  },
  cow:   { label: "Beef",  price: 800,  commodity: "beef",
    dairy: { label: "Beef (Dairy)", price: 650, commodity: "beef" }
  }
};

// Livestock productive lifespans in game months (= real days)
var LIVESTOCK_LIFESPAN = {
  chicken: 18,
  duck:    24,
  pig:     24,
  goat:    48,
  sheep:   42,
  cow:     60,   // beef
  dairy:   72,   // dairy cow
  horse:   null  // own system later
};

// Commodity market sell prices
var COMMODITY_PRICES = {
  milk:         { label: "Cow Milk",    unit: "gal",  price: 1.50  },
  goat_milk:    { label: "Goat Milk",   unit: "gal",  price: 4.00  },
  eggs:         { label: "Eggs",        unit: "egg",  price: 0.40  },
  wool:         { label: "Wool",        unit: "lb",   price: 2.50  },
  honey:        { label: "Honey",       unit: "lb",   price: 9.00  },
  chicken_meat: { label: "Chicken",     unit: "bird", price: 8     },
  duck_meat:    { label: "Duck",        unit: "bird", price: 14    },
  pork:         { label: "Pork",        unit: "unit", price: 120   },
  beef:         { label: "Beef",        unit: "unit", price: 800   },
  lamb:         { label: "Lamb",        unit: "unit", price: 240   },
  chevon:       { label: "Chevon",      unit: "unit", price: 120   }
};

function getListingPrice(species, animal) {
  var p = LIVESTOCK_PRICES[species];
  if (typeof p === "function") return p(animal);
  return p || 0;
}


// ── MARKET HORSE CARD (stateful — has DNA modal toggle) ──────
function MarketHorseCard(props) {
  var animal=props.animal, sp=props.sp, sellBack=props.sellBack;
  var canAfford=props.canAfford, isHorse=props.isHorse;
  var hs=props.hs, ps=props.ps, hsCol=props.hsCol, psCol=props.psCol;
  var hWarn=props.hWarn, perfIcons=props.perfIcons;
  var onBuy=props.onBuy, setStock=props.setStock, setSess=props.setSess;
  var species=props.species;

  var _dn=React.useState(false), showDNA=_dn[0], setShowDNA=_dn[1];

  return React.createElement("div",{
    style:{background:isHorse?"#0c1408":"#0f172a",
      border:"1px solid "+(isHorse?"#2a3a18":"#1e293b"),
      borderRadius:8,padding:"10px 12px",display:"flex",flexDirection:"column",gap:5}},

    // Header row
    React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},
      React.createElement("span",{style:{fontSize:"1.2rem"}},sp.icon),
      React.createElement("div",{style:{flex:1}},
        React.createElement("div",{style:{fontWeight:"bold",fontSize:"0.82rem",color:"#e2e8f0"}},
          animal.breed||sp.label),
        isHorse&&animal.coatColor
          ? React.createElement("div",{style:{fontSize:"0.68rem",color:"#c4956a"}},animal.coatColor)
          : animal.type&&React.createElement("div",{style:{fontSize:"0.68rem",color:"#64748b"}},
              animal.type.charAt(0).toUpperCase()+animal.type.slice(1))
      ),
      React.createElement("span",{style:{fontSize:"0.72rem",fontWeight:"bold",
        color:animal.sex==="F"?"#f472b6":"#38bdf8",background:"#0a0f1a",
        border:"1px solid "+(animal.sex==="F"?"#f472b6":"#38bdf8"),
        borderRadius:4,padding:"2px 5px"}},
        animal.sex==="F"?"♀":"♂")
    ),

    // Horse stats row
    isHorse&&hs!=null&&ps!=null&&React.createElement("div",{
      style:{display:"flex",gap:8,fontSize:"0.7rem",alignItems:"center",flexWrap:"wrap"}},
      React.createElement("span",{style:{color:hsCol,fontWeight:"bold"}},"❤️ "+hs),
      React.createElement("span",{style:{color:psCol,fontWeight:"bold"}},"⚡ "+ps),
      animal.ageMonths&&React.createElement("span",{style:{color:"#64748b"}},
        Math.round(animal.ageMonths/12*10)/10+" yrs"),
      hWarn>0&&React.createElement("span",{style:{background:"#481808",border:"1px solid #ef4444",
        color:"#fca5a5",borderRadius:3,padding:"1px 5px",fontSize:"0.62rem",fontWeight:"bold"}},
        "⚠️ "+hWarn+" health concern"+(hWarn>1?"s":""))
    ),

    // Perf bars (horses only)
    isHorse&&animal.genome&&animal.genome.perf&&React.createElement("div",{
      style:{background:"#080e04",border:"1px solid #1e2e14",borderRadius:4,padding:"5px 7px"}},
      React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2}},
        HORSE_PERF_QTLS_MKT.map(function(q){
          var v=animal.genome.perf[q]||[3,3];
          var avg=(v[0]+v[1])/2, pct=Math.round((avg/5)*100);
          var col=avg>=4?"#d4942a":avg>=3?"#22c55e":"#475569";
          return React.createElement("div",{key:q,style:{display:"flex",alignItems:"center",gap:4}},
            React.createElement("span",{style:{fontSize:"0.58rem",width:52,color:col,flexShrink:0}},
              perfIcons[q]+" "+q),
            React.createElement("div",{style:{flex:1,background:"#1e293b",borderRadius:2,height:3,overflow:"hidden"}},
              React.createElement("div",{style:{background:col,width:pct+"%",height:"100%"}})
            ),
            React.createElement("span",{style:{fontSize:"0.58rem",color:col,width:16,textAlign:"right",flexShrink:0}},
              avg.toFixed(1))
          );
        })
      )
    ),

    // Aptitudes (non-horse plain, horse green)
    animal.aptitudes&&React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:3}},
      animal.aptitudes.map(function(apt){
        return React.createElement("span",{key:apt,
          style:{fontSize:"0.6rem",
            background:isHorse?"#0a1a08":"#1e293b",
            border:"1px solid "+(isHorse?"#2a4018":"#334155"),
            color:isHorse?"#84cc16":"#94a3b8",
            borderRadius:3,padding:"1px 4px"}},apt);
      })
    ),

    // Price row
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",marginTop:2}},
      React.createElement("span",{style:{color:"#22c55e",fontWeight:"bold"}},
        "Buy: $"+(animal.price||0).toLocaleString()),
      React.createElement("span",{style:{color:"#94a3b8"}},
        "Sell back: $"+sellBack.toLocaleString())
    ),

    // Buttons
    React.createElement("div",{style:{display:"flex",gap:5}},
      isHorse&&animal.genome&&React.createElement("button",{
        onClick:function(){setShowDNA(true);},
        style:{flex:"0 0 auto",background:"#0a1a08",border:"1px solid #2a4a18",color:"#84cc16",
          borderRadius:5,padding:"5px 10px",cursor:"pointer",fontSize:"0.72rem",fontWeight:"bold"}},
        "🧬 DNA"),
      React.createElement("button",{
        onClick:function(){
          var ok=onBuy(species,animal);
          if(ok){
            setStock(function(prev){
              var nx=Object.assign({},prev);
              nx[species]=(prev[species]||[]).filter(function(a){return a.id!==animal.id;});
              return nx;
            });
            setSess(function(s){return {bought:s.bought+1,bAmt:s.bAmt+(animal.price||0),sold:s.sold,sAmt:s.sAmt};});
          }
        },
        style:{flex:1,background:canAfford?"#0f2d1e":"#1a0a0a",
          border:"1px solid "+(canAfford?"#22c55e":"#ef4444"),
          color:canAfford?"#22c55e":"#ef4444",
          borderRadius:5,padding:"5px 0",cursor:"pointer",fontSize:"0.75rem",fontWeight:"bold"}},
        canAfford?"Buy":"Can't Afford")
    ),

    // DNA modal
    showDNA&&React.createElement(HorseDNAModal,{horse:animal,onClose:function(){setShowDNA(false);}})
  );
}

function LivestockMarket(_ref) {
  var onClose=_ref.onClose, money=_ref.money, onBuy=_ref.onBuy, onSellBack=_ref.onSellBack,
      ownedAnimals=_ref.ownedAnimals||[], ownedLivestock=_ref.ownedLivestock||[],
      facilitiesOwned=_ref.facilitiesOwned||{}, commodities=_ref.commodities||{},
      onSlaughter=_ref.onSlaughter, onSellCommodities=_ref.onSellCommodities;
  var _a=_slicedToArray(useState("horse"),2),species=_a[0],setSpecies=_a[1];
  var _b=_slicedToArray(useState("buy"),2),mktTab=_b[0],setMktTab=_b[1];
  var _c=_slicedToArray(useState("all"),2),cowF=_c[0],setCowF=_c[1];
  var _d=_slicedToArray(useState("all"),2),horseF=_d[0],setHorseF=_d[1];
  var _e=_slicedToArray(useState(function(){return generateLivestockStock();}),2),stock=_e[0],setStock=_e[1];
  var _f=_slicedToArray(useState(Date.now()),2),lastRef=_f[0],setLastRef=_f[1];
  var _g=_slicedToArray(useState({bought:0,bAmt:0,sold:0,sAmt:0}),2),sess=_g[0],setSess=_g[1];
  var _h=_slicedToArray(useState("dog"),2),sellSp=_h[0],setSellSp=_h[1];

  useState(function(){
    var t=setInterval(function(){
      if(Date.now()-lastRef>=43200000){setStock(generateLivestockStock());setLastRef(Date.now());}
    },60000);
    return function(){clearInterval(t);};
  });

  var handleClose=function(){
    if(sess.bought>0||sess.sold>0){
      var net=sess.sAmt-sess.bAmt;
      var parts=[];
      if(sess.bought>0) parts.push("Bought: "+sess.bought+" (-$"+sess.bAmt.toLocaleString()+")");
      if(sess.sold>0)   parts.push("Sold: "+sess.sold+" (+$"+sess.sAmt.toLocaleString()+")");
      onSellBack(net, parts.join(" \u00B7 "));
    }
    onClose();
  };

  var filtered=(stock[species]||[]).filter(function(a){
    if(species==="cow"   && cowF!=="all"   && a.type!==cowF)   return false;
    if(species==="horse" && horseF!=="all" && a.type!==horseF) return false;
    return true;
  });

  var bwarn=null;
  if(species==="cow")     bwarn="Requires: Grazing Land (1 acre per 2 cows). Dairy cows also need a Milking Barn.";
  if(species==="duck")    bwarn="Requires: Pond (purchaseable from property map).";
  if(species==="sheep")   bwarn="Requires: Shearing Shed to sell wool. Sheep can always be sold for meat.";
  if(species==="pig")     bwarn="Requires: Pig Pen. Must be purchased before buying pigs.";
  if(species==="chicken") bwarn="Requires: Chicken Coop. Must be purchased before buying chickens.";
  if(species==="horse")   bwarn="Requires: Stable with at least 1 stall per horse. Horses cannot be purchased without adequate stabling.";

  var nr=new Date(lastRef+43200000), pad=function(n){return String(n).padStart(2,"0");};
  var refStr=pad(nr.getHours())+":"+pad(nr.getMinutes());

  var tb=function(k,lbl){return /*#__PURE__*/React.createElement("button",{
    onClick:function(){setMktTab(k);},
    style:{background:mktTab===k?"#1e3a5f":"transparent",border:"1px solid "+(mktTab===k?"#38bdf8":"#334155"),
      color:mktTab===k?"#38bdf8":"#64748b",borderRadius:6,padding:"5px 16px",cursor:"pointer",
      fontSize:"0.82rem",fontWeight:"bold"}},lbl);};

  return /*#__PURE__*/React.createElement("div",{
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",zIndex:1000,
      display:"flex",alignItems:"center",justifyContent:"center"}},
    /*#__PURE__*/React.createElement("div",{
      style:{background:"#0a0f1e",border:"1px solid #334155",borderRadius:14,
        width:"min(920px,95vw)",maxHeight:"88vh",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.8)"}},
      // Header
      /*#__PURE__*/React.createElement("div",{style:{display:"flex",alignItems:"center",
        padding:"14px 18px",borderBottom:"1px solid #1e293b",gap:12}},
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#e2e8f0",flex:1}},
          "\uD83D\uDC04 Livestock Market"),
        (sess.bought>0||sess.sold>0)&&/*#__PURE__*/React.createElement("div",{
          style:{fontSize:"0.72rem",color:"#94a3b8",background:"#0f172a",
            border:"1px solid #1e293b",borderRadius:6,padding:"3px 10px"}},
          sess.bought>0?"Bought: "+sess.bought+" (-$"+sess.bAmt.toLocaleString()+")  ":"",
          sess.sold>0?"Sold: "+sess.sold+" (+$"+sess.sAmt.toLocaleString()+")":""),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#475569"}},
          "Refreshes at ",refStr),
        /*#__PURE__*/React.createElement("button",{onClick:handleClose,
          style:{background:"transparent",border:"1px solid #334155",color:"#94a3b8",
            borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.8rem"}},
          "\u2715 Close")
      ),
      // Buy/Sell tabs
      /*#__PURE__*/React.createElement("div",{style:{display:"flex",gap:8,padding:"10px 18px",
        borderBottom:"1px solid #1e293b"}},
        tb("buy","\uD83D\uDED2 Buy Livestock"),
        tb("sell","\uD83D\uDCB0 Sell to Market"),
        facilitiesOwned.slaughterhouse && tb("slaughter","\uD83E\uDE78 Slaughterhouse"),
        tb("commodities","\uD83D\uDCE6 Commodities"+(Object.values(commodities).some(function(v){return v>0;})?" \u25CF":""))
      ),
      // Species bar (buy only)
      mktTab==="buy"&&/*#__PURE__*/React.createElement("div",{
        style:{display:"flex",gap:6,padding:"8px 18px",borderBottom:"1px solid #1e293b",flexWrap:"wrap"}},
        LIVESTOCK_SPECIES.map(function(sp){
          return /*#__PURE__*/React.createElement("button",{key:sp.key,
            onClick:function(){setSpecies(sp.key);setCowF("all");setHorseF("all");},
            style:{background:species===sp.key?"#1e3a5f":"transparent",
              border:"1px solid "+(species===sp.key?"#38bdf8":"#334155"),
              color:species===sp.key?"#38bdf8":"#64748b",
              borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.75rem"}},
            sp.icon+" "+sp.label+" ("+(stock[sp.key]||[]).length+")");
        })
      ),
      // Sub-filters
      mktTab==="buy"&&(species==="cow"||species==="horse")&&/*#__PURE__*/React.createElement("div",{
        style:{display:"flex",gap:6,padding:"6px 18px",borderBottom:"1px solid #1e293b",alignItems:"center"}},
        /*#__PURE__*/React.createElement("span",{style:{color:"#64748b",fontSize:"0.75rem"}},
          species==="cow"?"Type:":"Category:"),
        (species==="cow"?["all","beef","dairy"]:["all","light","warmblood","gaited","draft","pony"]).map(function(f){
          var active=species==="cow"?cowF===f:horseF===f;
          return /*#__PURE__*/React.createElement("button",{key:f,
            onClick:function(){species==="cow"?setCowF(f):setHorseF(f);},
            style:{background:active?"#1e293b":"transparent",border:"1px solid "+(active?"#38bdf8":"#334155"),
              color:active?"#38bdf8":"#64748b",borderRadius:5,padding:"3px 10px",cursor:"pointer",fontSize:"0.75rem"}},
            f==="all"?"All":f.charAt(0).toUpperCase()+f.slice(1));
        })
      ),
      // Building warning
      mktTab==="buy"&&bwarn&&/*#__PURE__*/React.createElement("div",{
        style:{background:"#1a1000",borderBottom:"1px solid #f59e0b",padding:"7px 18px",
          fontSize:"0.78rem",color:"#fcd34d"}},
        "\u26A0\uFE0F ",bwarn),
      // Content
      /*#__PURE__*/React.createElement("div",{style:{flex:1,overflowY:"auto",padding:"12px 18px"}},
        mktTab==="buy"?(
          filtered.length===0
            ?/*#__PURE__*/React.createElement("div",{style:{color:"#475569",textAlign:"center",padding:40}},
                "No stock in this category. Check back after next refresh.")
            :/*#__PURE__*/React.createElement("div",{style:{display:"grid",
                gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:8}},
                filtered.map(function(animal){
                  var sp=LIVESTOCK_SPECIES.find(function(s){return s.key===species;});
                  var sellBack=Math.floor((animal.price||0)*0.5);
                  var canAfford=money>=(animal.price||0);
                  var isHorse=species==="horse";
                  var hs=animal.healthScore, ps=animal.perfScore;
                  var hsCol=hs>=80?"#22c55e":hs>=60?"#d4942a":"#ef4444";
                  var psCol=ps>=80?"#22c55e":ps>=60?"#d4942a":"#ef4444";
                  var hWarn=isHorse&&animal.genome?countHorseHealthWarnings(animal.genome):0;
                  var perfIcons={SPEED:"💨",STAMINA:"🫁",MUSCLE:"💪",TEMP:"🧠",AGILITY:"🌀"};
                  return /*#__PURE__*/React.createElement(React.Fragment,{key:animal.id},
                    React.createElement(MarketHorseCard,{
                      animal:animal,sp:sp,sellBack:sellBack,canAfford:canAfford,
                      isHorse:isHorse,hs:hs,ps:ps,hsCol:hsCol,psCol:psCol,hWarn:hWarn,
                      perfIcons:perfIcons,onBuy:onBuy,setStock:setStock,setSess:setSess,species:species
                    })
                  );
                })
              )
        ):(
          (function(){
            var SELLABLE=[
              {key:"dog",    label:"Dogs",     icon:"\uD83D\uDC15",
                getItems:function(){return ownedAnimals.filter(function(a){return !a.retired&&!a.isCat;});},
                buyPrice:function(a){return (Math.floor(((a.perfScore||50)/100)*300)+100)*2;},
                sellPrice:function(a){return Math.floor(((a.perfScore||50)/100)*300)+100;}},
              {key:"horse",  label:"Horses",   icon:"\uD83D\uDC0E",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="horse";});},
                buyPrice:function(a){return a.price||1000;},
                sellPrice:function(a){return Math.floor((a.price||1000)*0.5);}},
              {key:"cow",    label:"Cows",     icon:"\uD83D\uDC04",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="cow";});},
                buyPrice:function(a){return a.type==="dairy"?600:500;},
                sellPrice:function(a){return a.type==="dairy"?300:250;}},
              {key:"sheep",  label:"Sheep",    icon:"\uD83D\uDC11",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="sheep";});},
                buyPrice:function(){return 100;}, sellPrice:function(){return 50;}},
              {key:"goat",   label:"Goats",    icon:"\uD83D\uDC10",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="goat";});},
                buyPrice:function(){return 50;},  sellPrice:function(){return 25;}},
              {key:"pig",    label:"Pigs",     icon:"\uD83D\uDC16",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="pig";});},
                buyPrice:function(){return 50;},  sellPrice:function(){return 25;}},
              {key:"duck",   label:"Ducks",    icon:"\uD83E\uDD86",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="duck";});},
                buyPrice:function(){return 8;},   sellPrice:function(){return 4;}},
              {key:"chicken",label:"Chickens", icon:"\uD83D\uDC14",
                getItems:function(){return ownedLivestock.filter(function(a){return a.species==="chicken";});},
                buyPrice:function(){return 5;},   sellPrice:function(){return 2;}}
            ];
            var cur=SELLABLE.find(function(s){return s.key===sellSp;})||SELLABLE[0];
            var items=cur.getItems();
            return /*#__PURE__*/React.createElement("div",null,
              /*#__PURE__*/React.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12}},
                /*#__PURE__*/React.createElement("div",{style:{color:"#64748b",fontSize:"0.82rem"}},
                  "Market pays 50% of value. No cats ever."),
                /*#__PURE__*/React.createElement("select",{value:sellSp,
                  onChange:function(e){setSellSp(e.target.value);},
                  style:{marginLeft:"auto",background:"#0f172a",border:"1px solid #334155",
                    color:"#e2e8f0",borderRadius:6,padding:"4px 10px",fontSize:"0.78rem",cursor:"pointer"}},
                  SELLABLE.map(function(s){
                    return /*#__PURE__*/React.createElement("option",{key:s.key,value:s.key},
                      s.label+" ("+s.getItems().length+")");
                  })
                )
              ),
              items.length===0
                ?/*#__PURE__*/React.createElement("div",{style:{color:"#475569",textAlign:"center",padding:32}},
                    "You don\u2019t have any "+cur.label.toLowerCase()+" to sell.")
                :/*#__PURE__*/React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},
                    items.map(function(item){
                      var sp=cur.sellPrice(item);
                      var bp=cur.buyPrice(item);
                      return /*#__PURE__*/React.createElement("div",{key:item.id,
                        style:{background:"#0f172a",border:"1px solid #1e293b",borderRadius:8,
                          padding:"10px 14px",display:"flex",alignItems:"center",gap:10}},
                        /*#__PURE__*/React.createElement("span",{style:{fontSize:"1.1rem"}},cur.icon),
                        /*#__PURE__*/React.createElement("div",{style:{flex:1}},
                          /*#__PURE__*/React.createElement("div",{style:{fontWeight:"bold",color:"#e2e8f0",fontSize:"0.84rem"}},
                            item.name||item.breed||cur.label),
                          /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.7rem",color:"#64748b",marginTop:1}},
                            (item.breed&&item.name?item.breed:""),(item.sex?" \u00B7 "+(item.sex==="F"?"\u2640 Female":"\u2642 Male"):""))
                        ),
                        /*#__PURE__*/React.createElement("div",{style:{textAlign:"right",marginRight:6}},
                          /*#__PURE__*/React.createElement("div",{style:{color:"#22c55e",fontWeight:"bold",fontSize:"0.8rem"}},
                            "You get: $"+sp.toLocaleString()),
                          /*#__PURE__*/React.createElement("div",{style:{color:"#64748b",fontSize:"0.68rem"}},
                            "Mkt sells: $"+bp.toLocaleString())
                        ),
                        /*#__PURE__*/React.createElement("button",{
                          onClick:function(){
                            if(confirm("Sell "+(item.name||item.breed||cur.label)+" for $"+sp.toLocaleString()+"?\nMarket will resell for $"+bp.toLocaleString()+".")){
                              onSellBack(sp,cur.label+" \u2014 "+(item.name||item.breed||""),item.id,sellSp);
                              setSess(function(s){return {bought:s.bought,bAmt:s.bAmt,sold:s.sold+1,sAmt:s.sAmt+sp};});
                            }
                          },
                          style:{background:"#1a1200",border:"1px solid #f59e0b",color:"#fbbf24",
                            borderRadius:6,padding:"5px 12px",cursor:"pointer",fontSize:"0.75rem",fontWeight:"bold"}},
                          "Sell")
                      );
                    })
                  )
            );
          })()
        )
      ),

      // ── SLAUGHTERHOUSE TAB ──
      mktTab==="slaughter" && /*#__PURE__*/React.createElement("div", {
        style:{padding:"16px 18px",overflowY:"auto",flex:1}
      },
        /*#__PURE__*/React.createElement("div",{style:{color:"#fca5a5",fontWeight:"bold",fontSize:"0.95rem",marginBottom:12}},
          "\uD83E\uDE78 Slaughterhouse \u2014 Send livestock to processing"),
        /*#__PURE__*/React.createElement("div",{style:{color:"#64748b",fontSize:"0.75rem",marginBottom:16}},
          "Processed meat is added to your commodity inventory. Take it to market to sell."),
        ["pig","cow","sheep","goat"].map(function(sp) {
          var animals = ownedLivestock.filter(function(a){ return a.species===sp; });
          if (animals.length === 0) return null;
          var spInfo = MEAT_PRICES[sp];
          return /*#__PURE__*/React.createElement("div",{key:sp,style:{marginBottom:16}},
            /*#__PURE__*/React.createElement("div",{style:{color:"#94a3b8",fontSize:"0.78rem",fontWeight:"bold",
              marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}},
              sp.charAt(0).toUpperCase()+sp.slice(1)+"s ("+animals.length+")"),
            animals.map(function(a){
              var info = (sp==="cow"&&a.type==="dairy") ? spInfo.dairy : spInfo;
              return /*#__PURE__*/React.createElement("div",{key:a.id,
                style:{display:"flex",alignItems:"center",gap:10,padding:"7px 10px",
                  background:"#0f1318",borderRadius:6,border:"1px solid #1e293b",marginBottom:5}},
                /*#__PURE__*/React.createElement("div",{style:{flex:1,fontSize:"0.78rem",color:"#e2e8f0"}},
                  (a.breed||sp)+" \u2014 "+(a.sex==="F"?"\u2640 Female":"\u2642 Male")+
                  (a.type?" ("+a.type+")":"")
                ),
                /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.72rem",color:"#4ade80",minWidth:80,textAlign:"right"}},
                  info.label+": $"+info.price),
                /*#__PURE__*/React.createElement("button",{
                  onClick:function(){ onSlaughter && onSlaughter(a); },
                  style:{background:"#2a0808",border:"1px solid #dc2626",color:"#fca5a5",
                    borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.72rem",fontWeight:"bold"}},
                  "Slaughter")
              );
            })
          );
        }),
        ownedLivestock.filter(function(a){return ["pig","cow","sheep","goat"].indexOf(a.species)>-1;}).length===0 &&
          /*#__PURE__*/React.createElement("div",{style:{textAlign:"center",color:"#475569",padding:"40px 0",fontSize:"0.85rem"}},
            "No eligible livestock owned.")
      ),

      // ── COMMODITIES TAB ──
      mktTab==="commodities" && /*#__PURE__*/React.createElement("div", {
        style:{padding:"16px 18px",overflowY:"auto",flex:1}
      },
        /*#__PURE__*/React.createElement("div",{style:{color:"#fde68a",fontWeight:"bold",fontSize:"0.95rem",marginBottom:12}},
          "\uD83D\uDCE6 Commodity Inventory \u2014 Sell your stockpile"),
        /*#__PURE__*/React.createElement("div",{style:{color:"#64748b",fontSize:"0.75rem",marginBottom:16}},
          "Commodities accumulate daily and must be sold here at market."),
        Object.keys(COMMODITY_PRICES).map(function(key) {
          var info = COMMODITY_PRICES[key];
          var qty = Math.floor(commodities[key]||0);
          var totalVal = (qty * info.price).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
          return /*#__PURE__*/React.createElement("div",{key:key,
            style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",
              background:"#0f1318",borderRadius:8,border:"1px solid "+(qty>0?"#334155":"#1e293b"),
              marginBottom:8,opacity:qty>0?1:0.4}},
            /*#__PURE__*/React.createElement("div",{style:{flex:1}},
              /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.85rem",color:"#e2e8f0",fontWeight:"bold"}},
                info.label),
              /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.7rem",color:"#64748b"}},
                "$"+info.price+" / "+info.unit)
            ),
            /*#__PURE__*/React.createElement("div",{style:{textAlign:"right",minWidth:90}},
              /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.85rem",color:qty>0?"#4ade80":"#475569",fontWeight:"bold"}},
                qty+" "+info.unit+(qty!==1&&info.unit!=="unit"?"s":"")),
              qty>0 && /*#__PURE__*/React.createElement("div",{style:{fontSize:"0.68rem",color:"#94a3b8"}},
                "value: $"+totalVal)
            ),
            qty>0 && /*#__PURE__*/React.createElement("button",{
              onClick:function(){ onSellCommodities && onSellCommodities(key, qty); },
              style:{background:"#0a1f0a",border:"1px solid #22c55e",color:"#4ade80",
                borderRadius:6,padding:"6px 14px",cursor:"pointer",fontSize:"0.78rem",fontWeight:"bold"}},
              "Sell All")
          );
        })
      )
    )
  );
}


// ── OLD CAT LADY ──────────────────────────────────────────────

var CAT_BREEDS = [
  { breed:"Domestic Shorthair",  desc:"Patchy, one ear notched, perpetual scowl. Outstanding mouser." },
  { breed:"Domestic Longhair",   desc:"Matted fur, suspicious eyes. Has survived things you wouldn't believe." },
  { breed:"Tabby",               desc:"Scraggly stripes, missing a whisker. Attitude to spare." },
  { breed:"Calico",              desc:"Looks like she was painted by someone who gave up halfway through." },
  { breed:"Tortoiseshell",       desc:"Mean as a snake and twice as fast. Excellent mouser." },
  { breed:"Black Cat",           desc:"You can only see its eyes in the dark. Unsettling. Great hunter." },
  { breed:"Orange Tabby",        desc:"Fat, loud, and surprisingly effective at catching things." },
  { breed:"Tuxedo",              desc:"Acts like he owns the place. Every place. Including yours." },
  { breed:"Barn Cat Mix",        desc:"Born outside, lives outside, prefers it that way. Pure business." },
  { breed:"Gray Shorthair",      desc:"Looks like a storm cloud. Hunts like one too." },
  { breed:"Siamese Mix",         desc:"Talks constantly, mostly complaints. Deadly to rodents." },
  { breed:"Maine Coon Mix",      desc:"Big, shaggy, half-feral. The mice don't stand a chance." }
];

var CAT_LADY_MESSAGES = [
  "This one's been nothing but trouble. Take {pronoun}.",
  "{Name} doesn't like most people. You seem tolerable.",
  "{Name} bit me twice this morning. {PronounCap}'s yours now.",
  "Don't let {pronoun} near your good furniture. Not that it matters.",
  "This one thinks {pronoun}'s better than everyone. {PronounCap}'s probably right.",
  "{Name} knocked my coffee over three times today. Get {pronoun} out of my house.",
  "{Name} hasn't caught a mouse in a week. Maybe {pronoun}'ll do better at your place.",
  "Don't look at {pronoun} wrong or {pronoun}'ll scratch you. You'll figure it out.",
  "I've had {pronoun} since {pronoun} was a kitten. Don't make me regret this.",
  "{Name} eats more than the others. Figured I'd make {pronoun} your problem.",
  "{Name} hates Tuesdays. And Wednesdays. And most people. You'll be fine.",
  "This one knocked three things off my counter this morning. On purpose.",
  "{Name} stares at the wall for hours. I don't ask questions anymore.",
  "{Name} bit the mailman. Twice. I'm not apologizing.",
  "Take {pronoun} before I change my mind. I won't change my mind but still.",
  "{Name}'s been giving me that look all week. I think {pronoun} wants to leave.",
  "Don't let {pronoun} outside after dark. Actually, {pronoun}'ll be fine. You might not be.",
  "I don't know where {pronoun} goes at night. I've stopped asking.",
  "{Name}'s particular about everything. You'll learn what that means.",
  "{Name}'s my favorite. Don't read anything into this."
];

function resolveCatMsg(msg, sex) {
  var pronoun = sex === "M" ? "him" : "her";
  var name = sex === "M" ? "He" : "She";
  var pronounCap = sex === "M" ? "He" : "She";
  return msg
    .replace(/{pronoun}/g, pronoun)
    .replace(/{name}/g, pronoun)
    .replace(/{Name}/g, name)
    .replace(/{PronounCap}/g, pronounCap);
}

function OldCatLady(_ref) {
  var onClose=_ref.onClose, money=_ref.money, onReceiveCat=_ref.onReceiveCat,
      lastVisit=_ref.lastVisit, lastFeedPaid=_ref.lastFeedPaid, onPayFeed=_ref.onPayFeed, onSetLastVisit=_ref.onSetLastVisit;

  var now = Date.now();
  var twoDays = 2*24*60*60*1000;
  var thirtyDays = 30*24*60*60*1000;

  var feedDue = !lastFeedPaid || (now - lastFeedPaid) >= thirtyDays;
  var canVisit = !lastVisit || (now - lastVisit) >= twoDays;

  var nextVisitDate = lastVisit ? new Date(lastVisit + twoDays) : null;
  var pad = function(n){ return String(n).padStart(2,"0"); };
  var nextVisitStr = nextVisitDate
    ? nextVisitDate.toLocaleDateString()+" "+pad(nextVisitDate.getHours())+":"+pad(nextVisitDate.getMinutes())
    : null;

  var handleGetCat = function(){
    if (feedDue) { alert("She won't open the door until her feed bill is paid."); return; }
    if (!canVisit) { alert("She says you were just here. Come back "+nextVisitStr+"."); return; }
    var breed = CAT_BREEDS[Math.floor(Math.random()*CAT_BREEDS.length)];
    var sex = Math.random()<0.5?"M":"F";
    var rawMsg = CAT_LADY_MESSAGES[Math.floor(Math.random()*CAT_LADY_MESSAGES.length)];
    var msg = resolveCatMsg(rawMsg, sex);
    var cat = { id:Date.now()+Math.random(), breed:breed.breed, desc:breed.desc,
      sex:sex, isCat:true, isMouser:true, name:breed.breed+" "+(sex==="M"?"Tom":"Queen") };
    onReceiveCat(cat, msg);
    onSetLastVisit(now);
  };

  var handlePayFeed = function(){
    if (money < 150) { alert("You don't have enough money.\nShe eyes you suspiciously."); return; }
    if (confirm("Pay the Old Cat Lady's $150 feed bill?")) {
      onPayFeed();
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.88)",
      zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}},
    /*#__PURE__*/React.createElement("div", {
      style:{background:"#0a0f1e",border:"1px solid #4a3728",borderRadius:14,
        width:"min(480px,92vw)",display:"flex",flexDirection:"column",
        overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}},
      // Header
      /*#__PURE__*/React.createElement("div", {
        style:{background:"#110d08",borderBottom:"1px solid #4a3728",
          padding:"16px 18px",display:"flex",alignItems:"center",gap:10}},
        /*#__PURE__*/React.createElement("span", {style:{fontSize:"2rem"}},"👨‍👧‍👦"),
        /*#__PURE__*/React.createElement("div", {style:{flex:1}},
          /*#__PURE__*/React.createElement("div", {style:{fontWeight:"bold",fontSize:"1rem",color:"#d4a96a"}},
            "Old Cat Lady"),
          /*#__PURE__*/React.createElement("div", {style:{fontSize:"0.72rem",color:"#6b4c2a",marginTop:1}},
            "Est. longer than she'll tell you")
        ),
        /*#__PURE__*/React.createElement("button", {onClick:onClose,
          style:{background:"transparent",border:"1px solid #4a3728",color:"#6b4c2a",
            borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:"0.8rem"}},
          "\u2715 Leave")
      ),
      // Body
      /*#__PURE__*/React.createElement("div", {style:{padding:"20px 22px",display:"flex",flexDirection:"column",gap:16}},
        // Cat count flavor text
        /*#__PURE__*/React.createElement("div", {style:{color:"#8a7060",fontSize:"0.82rem",fontStyle:"italic",lineHeight:1.5}},
          "You can hear cats. Lots of cats. The smell hits you before the door fully opens. She eyes you from behind a tabby draped across her shoulder like a shawl."
        ),
        // Feed bill status
        /*#__PURE__*/React.createElement("div", {
          style:{background: feedDue?"#1a0a00":"#0a1a0a",
            border:"1px solid "+(feedDue?"#f59e0b":"#22c55e"),
            borderRadius:8,padding:"12px 14px"}},
          /*#__PURE__*/React.createElement("div", {style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", {style:{fontWeight:"bold",fontSize:"0.88rem",
                color:feedDue?"#fbbf24":"#22c55e"}},
                feedDue?"💸 Feed Bill Due: $150":"✅ Feed Bill Paid"),
              /*#__PURE__*/React.createElement("div", {style:{fontSize:"0.72rem",color:"#64748b",marginTop:2}},
                feedDue?"She won't so much as crack the door until you pay.":"She nods. Barely.")
            ),
            feedDue&&/*#__PURE__*/React.createElement("button", {
              onClick:handlePayFeed,
              style:{background:money>=150?"#1a1200":"#1a0a0a",
                border:"1px solid "+(money>=150?"#f59e0b":"#ef4444"),
                color:money>=150?"#fbbf24":"#ef4444",
                borderRadius:6,padding:"6px 14px",cursor:"pointer",fontSize:"0.82rem",fontWeight:"bold"}},
              money>=150?"Pay $150":"Can't Afford")
          )
        ),
        // Visit status
        /*#__PURE__*/React.createElement("div", {
          style:{background:"#0f172a",border:"1px solid #1e293b",borderRadius:8,padding:"12px 14px"}},
          /*#__PURE__*/React.createElement("div", {style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", {style:{fontWeight:"bold",fontSize:"0.88rem",
                color:canVisit?"#e2e8f0":"#475569"}},
                canVisit?"🐈 She has a cat for you":"🕒 Come back later"),
              /*#__PURE__*/React.createElement("div", {style:{fontSize:"0.72rem",color:"#64748b",marginTop:2}},
                canVisit
                  ?"One per visit. Every other day. Her rules."
                  :"Next visit available: "+nextVisitStr)
            ),
            (!feedDue&&canVisit)&&/*#__PURE__*/React.createElement("button", {
              onClick:handleGetCat,
              style:{background:"#1a0d1a",border:"1px solid #a855f7",color:"#c084fc",
                borderRadius:6,padding:"6px 14px",cursor:"pointer",fontSize:"0.82rem",fontWeight:"bold"}},
              "Take the Cat")
          )
        )
      )
    )
  );
}



// ══════════════════════════════════════════════════════════════
// ── LIVESTOCK INCOME SYSTEM ───────────────────────────────────
// ══════════════════════════════════════════════════════════════

var QUALITY_TIERS = [
  { stars: 1, label: "Poor",     yieldMult: 0.50, color: "#ef4444" },
  { stars: 2, label: "Fair",     yieldMult: 0.75, color: "#f97316" },
  { stars: 3, label: "Average",  yieldMult: 1.00, color: "#eab308" },
  { stars: 4, label: "Good",     yieldMult: 1.30, color: "#22c55e" },
  { stars: 5, label: "Superior", yieldMult: 1.65, color: "#a78bfa" }
];

function rollQuality() {
  var roll = Math.random();
  if (roll < 0.08) return 1;
  if (roll < 0.25) return 2;
  if (roll < 0.65) return 3;
  if (roll < 0.90) return 4;
  return 5;
}

function getQualityTier(stars) {
  return QUALITY_TIERS.find(function(t){ return t.stars === stars; }) || QUALITY_TIERS[2];
}

// Storage Barn yield multiplier — +10% per tier
function getStorageMult(facilitiesOwned) {
  if (!facilitiesOwned || !facilitiesOwned.storage_barn) return 1.0;
  return 1.0 + ((facilitiesOwned.storage_barn.tier + 1) * 0.1);
}

var LIVESTOCK_INCOME = {
  chicken: { matureAtDays:5,  baseDaily:18,   degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"egg production",     commodity:"eggs",     isCommodity:true  },
  duck:    { matureAtDays:6,  baseDaily:12,   degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"egg production",     commodity:"eggs",     isCommodity:true  },
  goat:    { matureAtDays:5,  baseDaily:0,    degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"milk yield",         commodity:"goat_milk",isCommodity:true  },
  sheep:   { matureAtDays:6,  baseDaily:0,    degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"wool production",    commodity:null,       isCommodity:false },
  pig:     { matureAtDays:6,  baseDaily:1.80, degradeAtDays:18,   degradeMult:0.45, degradeMsg:"past peak market weight — gone tough", produceLabel:"market weight gain", commodity:null, isCommodity:false, sellByDays:18 },
  cow:     { matureAtDays:9,  baseDaily:0,    degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"milk \/ beef value", commodity:"milk",     isCommodity:true  },
  horse:   { matureAtDays:36, baseDaily:3.50, degradeAtDays:null, degradeMult:null, degradeMsg:null, produceLabel:"training value",     commodity:null,       isCommodity:false }
};

function refreshMarketMult(animal) {
  var current = animal.marketMult || 1.0;
  var drift = (Math.random() - 0.5) * 0.15;
  var next = Math.max(0.70, Math.min(1.30, current + drift));
  return Math.round(next * 100) / 100;
}

function attachIncomeData(animal, species) {
  var quality = rollQuality();
  return Object.assign({}, animal, {
    species:         species,
    quality:         quality,
    qualityRevealed: false,
    purchasedAt:     Date.now(),
    lastIncomeTick:  null,
    marketMult:      1.0,
    degraded:        false,
    incomeTotal:     0
  });
}

function revealQuality(animal) {
  if (animal.qualityRevealed) return animal;
  return Object.assign({}, animal, { qualityRevealed: true });
}

function runDailyIncomeTick(ownedLivestock, lastTickDate, facilitiesOwned) {
  var now = Date.now();
  var totalEarned = 0;
  var journalEntries = [];
  var bySpecies = {};
  var commodityGains = {};
  var newlyRetired = [];
  var storageMult = getStorageMult(facilitiesOwned);

  // Pre-calculate male fertility multiplier per species
  var PRIME_AGE_DAYS = 45;
  var fertilityBySpecies = {};
  ["chicken","duck","pig","goat","sheep","cow"].forEach(function(sp) {
    var males = (ownedLivestock || []).filter(function(a) {
      return a.species === sp && a.sex === "M";
    });
    if (males.length === 0) {
      fertilityBySpecies[sp] = 1.0;
    } else {
      var bestMale = males.reduce(function(best, m) {
        var mAge = (now - (m.purchasedAt || now)) / 86400000;
        var bAge = (now - (best.purchasedAt || now)) / 86400000;
        return mAge < bAge ? m : best;
      });
      var maleAge = (now - (bestMale.purchasedAt || now)) / 86400000;
      if (maleAge > PRIME_AGE_DAYS) {
        var daysOver = maleAge - PRIME_AGE_DAYS;
        fertilityBySpecies[sp] = Math.max(0.20, 1.0 - (daysOver * 0.02));
      } else {
        fertilityBySpecies[sp] = 1.0;
      }
    }
  });

  var updatedAnimals = (ownedLivestock || []).map(function(animal) {
    var species = animal.species;
    var inc = LIVESTOCK_INCOME[species];
    if (!inc) return animal;

    var daysSincePurchase = (now - (animal.purchasedAt || now)) / 86400000;
    if (daysSincePurchase < inc.matureAtDays) {
      return Object.assign({}, animal, { marketMult: refreshMarketMult(animal) });
    }

    // Longevity check — retire animal past productive lifespan
    var lifespan = (species === "cow" && animal.type === "dairy")
      ? LIVESTOCK_LIFESPAN.dairy
      : LIVESTOCK_LIFESPAN[species];
    if (lifespan && daysSincePurchase >= lifespan && !animal.retiredLivestock) {
      newlyRetired.push(animal);
      return Object.assign({}, animal, { retiredLivestock: true, retireReason: "End of productive life — send to slaughter" });
    }
    if (animal.retiredLivestock) return animal;

    // Males of egg-laying species produce nothing
    if ((species === "chicken" || species === "duck") && animal.sex === "M") {
      return Object.assign({}, animal, { marketMult: refreshMarketMult(animal) });
    }

    // Male goats and sheep produce nothing
    if ((species === "goat" || species === "sheep") && animal.sex === "M") {
      return Object.assign({}, animal, { marketMult: refreshMarketMult(animal) });
    }

    // Beef cows produce nothing (slaughter only)
    if (species === "cow" && animal.type === "beef") {
      return Object.assign({}, animal, { marketMult: refreshMarketMult(animal) });
    }

    var isDegraded = animal.degraded;
    var newlyDegraded = false;
    if (inc.degradeAtDays && !isDegraded && daysSincePurchase >= inc.degradeAtDays) {
      isDegraded = true;
      newlyDegraded = true;
    }

    var qualityTier = getQualityTier(animal.quality || 3);
    var yieldMult = qualityTier.yieldMult;
    if (isDegraded && inc.degradeMult) yieldMult = inc.degradeMult;

    // Apply male fertility decay to egg-laying species
    if (species === "chicken" || species === "duck") {
      yieldMult = yieldMult * (fertilityBySpecies[species] || 1.0);
    }

    var newMarketMult = refreshMarketMult(animal);

    if (!bySpecies[species]) bySpecies[species] = { count:0, earned:0, commodity:0, degradedCount:0 };
    bySpecies[species].count++;
    if (newlyDegraded) bySpecies[species].degradedCount++;

    // ── COMMODITY PRODUCERS ──
    if (inc.isCommodity) {
      var dailyQty = 0;

      if (species === "chicken" || species === "duck") {
        // Eggs: baseDaily is eggs per game month (real day)
        dailyQty = Math.round(inc.baseDaily * yieldMult * storageMult * 10) / 10;
        var commodityKey = "eggs";
        commodityGains[commodityKey] = (commodityGains[commodityKey] || 0) + dailyQty;
        bySpecies[species].commodity += dailyQty;

      } else if (species === "cow" && animal.type === "dairy") {
        // Milk: 100 gallons per game month per dairy cow
        dailyQty = Math.round(100 * yieldMult * storageMult * 10) / 10;
        commodityGains["milk"] = (commodityGains["milk"] || 0) + dailyQty;
        bySpecies[species].commodity += dailyQty;

      } else if (species === "goat") {
        // Goat milk based on type
        var goatOutput = GOAT_MILK_OUTPUT[animal.type] || 0;
        if (goatOutput > 0) {
          dailyQty = Math.round(goatOutput * yieldMult * storageMult * 10) / 10;
          commodityGains["goat_milk"] = (commodityGains["goat_milk"] || 0) + dailyQty;
          bySpecies[species].commodity += dailyQty;
        }
      }

      return Object.assign({}, animal, {
        marketMult: newMarketMult,
        degraded: isDegraded,
        lastIncomeTick: now
      });

    } else {
      // ── CASH PRODUCERS (pig, horse) ──
      var dailyEarning = Math.round(inc.baseDaily * yieldMult * newMarketMult * 100) / 100;
      totalEarned += dailyEarning;
      bySpecies[species].earned += dailyEarning;

      return Object.assign({}, animal, {
        marketMult:     newMarketMult,
        degraded:       isDegraded,
        lastIncomeTick: now,
        incomeTotal:    (animal.incomeTotal || 0) + dailyEarning
      });
    }
  });

  // Journal entries
  Object.keys(bySpecies).forEach(function(species) {
    var entry = bySpecies[species];
    var sp = LIVESTOCK_SPECIES.find(function(s){ return s.key === species; });
    var icon = sp ? sp.icon : "\uD83D\uDC04";
    var label = sp ? sp.label : species;
    var inc = LIVESTOCK_INCOME[species];

    if (inc && inc.isCommodity && entry.commodity > 0) {
      var unit = (species==="chicken"||species==="duck") ? "eggs" :
                 (species==="cow") ? "gal milk" : "gal goat milk";
      journalEntries.push(
        icon + " " + label + " (" + entry.count + " head) \u2014 +" +
        entry.commodity.toFixed(1) + " " + unit + " added to inventory"
      );
    } else if (entry.earned > 0) {
      journalEntries.push(
        icon + " " + label + " (" + entry.count + " head) \u2014 " +
        (inc ? inc.produceLabel : "income") +
        ": +$" + entry.earned.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})
      );
    }
    if (entry.degradedCount > 0) {
      journalEntries.push(
        "\u26A0\uFE0F " + entry.degradedCount + " " + label.toLowerCase() +
        " \u2014 " + (inc && inc.degradeMsg ? inc.degradeMsg : "value reduced") + ". Sell soon."
      );
    }
  });

  // Retirement notices
  newlyRetired.forEach(function(a) {
    var sp = LIVESTOCK_SPECIES.find(function(s){ return s.key === a.species; });
    var icon = sp ? sp.icon : "\uD83D\uDC04";
    journalEntries.push(
      "\u26A0\uFE0F " + icon + " " + (a.breed || a.species) + " has reached end of productive life. Send to slaughter."
    );
  });

  if (totalEarned > 0) {
    journalEntries.push(
      "\uD83D\uDCB0 Daily cash income: +$" +
      totalEarned.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})
    );
  }

  return {
    totalEarned:    Math.round(totalEarned * 100) / 100,
    commodityGains: commodityGains,
    journalEntries: journalEntries,
    updatedAnimals: updatedAnimals,
    newlyRetired:   newlyRetired
  };
}
