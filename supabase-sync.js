// supabase-sync.js — Bloodline Acres cloud save/load
(function() {
  var SUPABASE_URL = "https://vjxaltcdvxlmnmymkcox.supabase.co";
  var ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGFsdGNkdnhsbW5teW1rY294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjgxMjMsImV4cCI6MjA4ODg0NDEyM30.p-zRdzhyGpDd_ujKj1ScfPnIjiIgQEkOSxdy_BgrEeE";

  function getToken() {
    try {
      if (window.sb && window.sb.auth && window.sb.auth.session) {
        var sess = window.sb.auth.session();
        if (sess && sess.access_token) return sess.access_token;
      }
      var keys = Object.keys(localStorage);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf("supabase.auth.token") !== -1 || keys[i].indexOf("-auth-token") !== -1) {
          try {
            var raw = localStorage.getItem(keys[i]);
            var parsed = JSON.parse(raw);
            if (parsed && parsed.access_token) return parsed.access_token;
            if (parsed && parsed.currentSession && parsed.currentSession.access_token) return parsed.currentSession.access_token;
          } catch(e) {}
        }
      }
    } catch(e) {}
    return ANON_KEY;
  }

  // ── Save full game state blob ─────────────────────────────────────────────
  function saveToCloud(userId, state) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        var payload = {
          user_id: userId,
          money: state.money || 0,
          facilities: state.facilitiesOwned || {},
          commodities: state.commodities || {},
          has_whelping_kennel: state.hasWhelpingKennel || false,
          game_start_date: state.gameStartDate ? new Date(state.gameStartDate).toISOString() : new Date().toISOString(),
          game_version: state.gameVersion || "",
          tutorial_dismissed: state.tutorialDismissed || {},
          full_state: state,
          updated_at: new Date().toISOString()
        };
        fetch(SUPABASE_URL + "/rest/v1/game_state?user_id=eq." + userId + "&select=id&limit=1", {
          method: "GET",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
        })
        .then(function(r){ return r.json(); })
        .then(function(rows) {
          var method = (rows && rows.length > 0) ? "PATCH" : "POST";
          var url = (rows && rows.length > 0)
            ? SUPABASE_URL + "/rest/v1/game_state?user_id=eq." + userId
            : SUPABASE_URL + "/rest/v1/game_state";
          return fetch(url, {
            method: method,
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
            body: JSON.stringify(payload)
          });
        })
        .then(function(r) {
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Save failed:", t); }); reject(new Error("Save failed")); }
          else { console.log("[BA Sync] Cloud save OK"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Save error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Save exception:", e); reject(e); }
    });
  }

  // ── Load full game state blob ─────────────────────────────────────────────
  function loadFromCloud(userId) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      fetch(SUPABASE_URL + "/rest/v1/game_state?user_id=eq." + userId + "&select=full_state,updated_at&limit=1", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        if (rows && rows.length > 0 && rows[0].full_state) {
          console.log("[BA Sync] Cloud load OK, updated_at:", rows[0].updated_at);
          resolve(rows[0]);
        } else {
          console.log("[BA Sync] No cloud save found");
          resolve(null);
        }
      })
      .catch(function(err) { console.warn("[BA Sync] Load error:", err); reject(err); });
    });
  }

  // ── Sync animals table ────────────────────────────────────────────────────
  function syncAnimals(userId, animals) {
    return new Promise(function(resolve, reject) {
      if (!userId || !animals || animals.length === 0) { resolve(null); return; }
      try {
        var dogs = animals.filter(function(a){ return !a.species || a.species === "dog"; });
        if (dogs.length === 0) { resolve(null); return; }
        var rows = dogs.map(function(a) {
          var extra = {
            coatColor: a.coatColor, vinStr: a.vinStr, mutations: a.mutations,
            traits: a.traits, aptitudes: a.aptitudes, adultWeight: a.adultWeight,
            adultHeight: a.adultHeight, sizeVariant: a.sizeVariant, photoUrl: a.photoUrl,
            isMixed: a.isMixed, litterSize: a.litterSize, born: a.born,
            lifespan: a.lifespan, generation: a.generation, sireBreed: a.sireBreed,
            damBreed: a.damBreed, group: a.group, size: a.size, sizeAvg: a.sizeAvg,
            sizeRange: a.sizeRange, retireReason: a.retireReason, retiredAt: a.retiredAt,
            heldSince: a.heldSince, lastUpdated: a.lastUpdated
          };
          return {
            id: a.id,
            user_id: userId,
            name: a.name || "",
            breed: a.breed || "",
            sex: a.sex || "M",
            age_months: a.ageMonths || 0,
            health_score: a.healthScore || 0,
            perf_score: a.perfScore || 0,
            genome: a.genome || {},
            coi: a.coi || 0,
            retired: a.retired || false,
            retire_reason: a.retireReason || null,
            kennel_id: a.kennelId ? String(a.kennelId) : null,
            species: "dog",
            earned_titles: a.earnedTitles || {},
            show_points: a.showPoints || 0,
            show_levels: a.showLevels || {},
            is_stud: a.isStud || false,
            stud_fee: a.studFee || 0,
            sire_id: a.sireId || null,
            dam_id: a.damId || null,
            extra: extra,
            updated_at: new Date().toISOString()
          };
        });
        fetch(SUPABASE_URL + "/rest/v1/animals", {
          method: "POST",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
          body: JSON.stringify(rows)
        })
        .then(function(r) {
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Animals sync failed:", t); }); reject(new Error("Animals sync failed")); }
          else { console.log("[BA Sync] Animals synced:", rows.length, "dogs"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Animals sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Animals sync exception:", e); reject(e); }
    });
  }

  // ── Sync stud listings ────────────────────────────────────────────────────
  function syncStudListings(userId, animals, ownerName) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        var activeStuds = (animals || []).filter(function(a){
          return !a.retired && a.sex === "M" && a.isStud && a.studFee > 0;
        });

        fetch(SUPABASE_URL + "/rest/v1/stud_listings?user_id=eq." + userId, {
          method: "PATCH",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
          body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
        })
        .then(function() {
          if (activeStuds.length === 0) { resolve(null); return; }
          var rows = activeStuds.map(function(a) {
            return {
              animal_id: a.id,
              user_id: userId,
              fee: a.studFee || 0,
              description: a.description || "",
              active: true,
              dog_name: a.name || "",
              breed: a.breed || "",
              health_score: a.healthScore || 0,
              perf_score: a.perfScore || 0,
              coi: a.coi || 0,
              size: a.size || "M",
              age_months: a.ageMonths || 0,
              coat_color: a.coatColor || "",
              titles: a.earnedTitles || [],
              owner_name: ownerName || "Unknown",
              genome: a.genome || {},
              updated_at: new Date().toISOString()
            };
          });
          return fetch(SUPABASE_URL + "/rest/v1/stud_listings", {
            method: "POST",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(rows)
          });
        })
        .then(function(r) {
          if (!r) return;
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Stud sync failed:", t); }); reject(new Error("Stud sync failed")); }
          else { console.log("[BA Sync] Stud listings synced:", activeStuds.length); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Stud sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Stud sync exception:", e); reject(e); }
    });
  }

  // ── Fetch community stud listings (all players) ───────────────────────────
  function fetchStudDirectory(excludeUserId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/stud_listings?active=eq.true&select=*&order=updated_at.desc&limit=100";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        var filtered = (rows || []).filter(function(r){ return r.user_id !== excludeUserId; });
        console.log("[BA Sync] Stud directory loaded:", filtered.length, "listings");
        resolve(filtered);
      })
      .catch(function(err) { console.warn("[BA Sync] Stud directory error:", err); reject(err); });
    });
  }

  // ── Sync marketplace listings ─────────────────────────────────────────────
  // Publishes dogs marked forSale, deactivates removed ones
  // Returns { soldAnimalIds: [...] } — IDs of dogs that were bought by other players
  function syncMarketListings(userId, animals, sellerName) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve({ soldAnimalIds: [] }); return; }
      try {
        var forSale = (animals || []).filter(function(a){
          return !a.retired && a.forSale && a.salePrice > 0;
        });
        var forSaleIds = {};
        for (var fi = 0; fi < forSale.length; fi++) { forSaleIds[forSale[fi].id] = forSale[fi]; }

        // Step 1: Fetch this seller's current listings to detect sales
        fetch(SUPABASE_URL + "/rest/v1/marketplace?seller_id=eq." + userId + "&select=animal_id,active,asking_price,dog_name", {
          method: "GET",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
        })
        .then(function(r){ return r.json(); })
        .then(function(existing) {
          existing = existing || [];
          // Dogs that were listed (we know because they're in marketplace table),
          // are now inactive (buyer deactivated them), but seller still has them as forSale locally
          var soldAnimalIds = [];
          for (var ei = 0; ei < existing.length; ei++) {
            var row = existing[ei];
            if (!row.active && forSaleIds[row.animal_id]) {
              soldAnimalIds.push({ animalId: row.animal_id, price: row.asking_price || 0, name: row.dog_name || "Unknown" });
            }
          }

          // Step 2: Deactivate all existing listings for this seller
          return fetch(SUPABASE_URL + "/rest/v1/marketplace?seller_id=eq." + userId, {
            method: "PATCH",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
            body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
          }).then(function() {
            // Step 3: Remove sold dogs from the forSale set before re-inserting
            var soldIdSet = {};
            for (var si = 0; si < soldAnimalIds.length; si++) { soldIdSet[soldAnimalIds[si].animalId] = true; }
            var stillForSale = forSale.filter(function(a){ return !soldIdSet[a.id]; });

            if (stillForSale.length === 0) {
              return { resp: null, soldAnimalIds: soldAnimalIds };
            }
            var rows = stillForSale.map(function(a) {
              return {
                animal_id: a.id,
                seller_id: userId,
                asking_price: a.salePrice || 0,
                description: a.saleDescription || "",
                active: true,
                dog_name: a.name || "",
                breed: a.breed || "",
                breed_group: a.group || "",
                sex: a.sex || "M",
                age_months: a.ageMonths || 0,
                health_score: a.healthScore || 0,
                perf_score: a.perfScore || 0,
                coi: a.coi || 0,
                size: a.size || "M",
                coat_color: a.coatColor || "",
                titles: (a.earnedTitles || []).map(function(t){ return t.key || t; }).join(", "),
                genome: a.genome || {},
                seller_name: sellerName || "Unknown",
                updated_at: new Date().toISOString()
              };
            });
            return fetch(SUPABASE_URL + "/rest/v1/marketplace", {
              method: "POST",
              headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
              body: JSON.stringify(rows)
            }).then(function(r){ return { resp: r, soldAnimalIds: soldAnimalIds }; });
          });
        })
        .then(function(result) {
          if (!result) { resolve({ soldAnimalIds: [] }); return; }
          if (result.resp && !result.resp.ok) {
            result.resp.text().then(function(t){ console.warn("[BA Sync] Market sync failed:", t); });
          } else {
            console.log("[BA Sync] Market listings synced. Sold dogs detected:", (result.soldAnimalIds || []).length);
          }
          resolve({ soldAnimalIds: result.soldAnimalIds || [] });
        })
        .catch(function(err) { console.warn("[BA Sync] Market sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Market sync exception:", e); reject(e); }
    });
  }

  // ── Fetch marketplace listings (browse all active) ────────────────────────
  function fetchMarketListings() {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/marketplace?active=eq.true&select=*&order=created_at.desc&limit=200";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        console.log("[BA Sync] Market listings loaded:", (rows || []).length);
        resolve(rows || []);
      })
      .catch(function(err) { console.warn("[BA Sync] Market fetch error:", err); reject(err); });
    });
  }

  // ── Buy a dog from the marketplace ────────────────────────────────────────
  // Deactivates the listing so no one else can buy it
  function buyMarketDog(listingId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/marketplace?id=eq." + listingId, {
        method: "PATCH",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=representation" },
        body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Buy failed:", t); }); reject(new Error("Buy failed")); return; }
        return r.json();
      })
      .then(function(rows) {
        if (rows && rows.length > 0) {
          console.log("[BA Sync] Market purchase OK, listing:", listingId);
          resolve(rows[0]);
        } else {
          reject(new Error("Listing not found or already sold"));
        }
      })
      .catch(function(err) { console.warn("[BA Sync] Buy error:", err); reject(err); });
    });
  }

  // ── Sync cattle stud listings ────────────────────────────────────────────
  function syncCattleStudListings(userId, livestock) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        // Deactivate existing cattle stud listings for this user
        fetch(SUPABASE_URL + "/rest/v1/stud_listings?user_id=eq." + userId + "&species=eq.cow", {
          method: "PATCH",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
          body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
        })
        .then(function() {
          var activeBulls = (livestock || []).filter(function(a) {
            return a.species === "cow" && a.sex === "M" && a.isCattleStud && a.cattleStudFee > 0;
          });
          if (activeBulls.length === 0) { resolve(null); return; }
          var rows = activeBulls.map(function(b) {
            var reasons = [];
            if (typeof calcSuggestedBullFee === "function") {
              var calc = calcSuggestedBullFee(b);
              reasons = calc.reasons || [];
            }
            return {
              animal_id: b.id,
              user_id: userId,
              species: "cow",
              fee: b.cattleStudFee || 0,
              description: reasons.join(" · "),
              active: true,
              dog_name: b.name || b.breed || "Bull",
              breed: b.breed || "Unknown",
              health_score: b.healthScore || 0,
              perf_score: b.perfScore || 0,
              coi: b.coi || 0,
              size: b.weightLbs || 1200,
              age_months: b.ageMonths || 0,
              coat_color: b.coatColor || "",
              titles: (b.cattleEarnedTitles || []).join(", "),
              genome: b.genome || {},
              updated_at: new Date().toISOString()
            };
          });
          return fetch(SUPABASE_URL + "/rest/v1/stud_listings", {
            method: "POST",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(rows)
          });
        })
        .then(function(r) {
          if (!r) { resolve(null); return; }
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Cattle stud sync failed:", t); }); reject(new Error("Cattle stud sync failed")); }
          else { console.log("[BA Sync] Cattle stud listings synced"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Cattle stud sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Cattle stud sync exception:", e); reject(e); }
    });
  }

  // ── Fetch community bull listings (all players) ───────────────────────────
  function fetchCattleStudDirectory(excludeUserId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/stud_listings?active=eq.true&species=eq.cow&select=*&order=updated_at.desc&limit=100";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        var filtered = (rows || []).filter(function(r){ return r.user_id !== excludeUserId; });
        console.log("[BA Sync] Cattle stud directory loaded:", filtered.length, "listings");
        resolve(filtered);
      })
      .catch(function(err) { console.warn("[BA Sync] Cattle stud directory error:", err); reject(err); });
    });
  }

  // ── Sync goat stud listings ─────────────────────────────────────────────
  function syncGoatStudListings(userId, livestock) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        fetch(SUPABASE_URL + "/rest/v1/stud_listings?user_id=eq." + userId + "&species=eq.goat", {
          method: "PATCH",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
          body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
        })
        .then(function() {
          var activeBucks = (livestock || []).filter(function(a) {
            return a.species === "goat" && a.sex === "M" && a.isGoatStud && a.goatStudFee > 0;
          });
          if (activeBucks.length === 0) { resolve(null); return; }
          var rows = activeBucks.map(function(b) {
            var reasons = [];
            if (typeof calcSuggestedBuckFee === "function") {
              var calc = calcSuggestedBuckFee(b);
              reasons = calc.reasons || [];
            }
            return {
              animal_id: b.id,
              user_id: userId,
              species: "goat",
              fee: b.goatStudFee || 0,
              description: reasons.join(" · "),
              active: true,
              dog_name: b.name || b.breed || "Buck",
              breed: b.breed || "Unknown",
              health_score: b.healthScore || 0,
              perf_score: b.perfScore || 0,
              coi: b.coi || 0,
              size: b.weightLbs || 150,
              age_months: b.ageMonths || 0,
              coat_color: b.coatColor || "",
              titles: (b.goatEarnedTitles || []).join(", "),
              genome: b.genome || {},
              owner_name: "Goat Farm",
              updated_at: new Date().toISOString()
            };
          });
          return fetch(SUPABASE_URL + "/rest/v1/stud_listings", {
            method: "POST",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(rows)
          });
        })
        .then(function(r) {
          if (!r) { resolve(null); return; }
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Goat stud sync failed:", t); }); reject(new Error("Goat stud sync failed")); }
          else { console.log("[BA Sync] Goat stud listings synced"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Goat stud sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Goat stud sync exception:", e); reject(e); }
    });
  }

  // ── Fetch community buck listings (all players) ──────────────────────────
  function fetchGoatStudDirectory(excludeUserId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/stud_listings?active=eq.true&species=eq.goat&select=*&order=updated_at.desc&limit=100";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        var filtered = (rows || []).filter(function(r){ return r.user_id !== excludeUserId; });
        console.log("[BA Sync] Goat stud directory loaded:", filtered.length, "listings");
        resolve(filtered);
      })
      .catch(function(err) { console.warn("[BA Sync] Goat stud directory error:", err); reject(err); });
    });
  }


  // ── Sync sheep stud listings ────────────────────────────────────────────────
  function syncSheepStudListings(userId, livestock) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        fetch(SUPABASE_URL + "/rest/v1/stud_listings?user_id=eq." + userId + "&species=eq.sheep", {
          method: "PATCH",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
          body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
        })
        .then(function() {
          var activeRams = (livestock || []).filter(function(a) {
            return a.species === "sheep" && a.sex === "M" && a.isSheepStud && a.sheepStudFee > 0;
          });
          if (activeRams.length === 0) { resolve(null); return; }
          var rows = activeRams.map(function(r) {
            var reasons = [];
            if (typeof calcSuggestedRamFee === "function") {
              var calc = calcSuggestedRamFee(r);
              reasons = calc.reasons || [];
            }
            return {
              animal_id: r.id,
              user_id: userId,
              species: "sheep",
              fee: r.sheepStudFee || 0,
              description: reasons.join(" \u00B7 "),
              active: true,
              dog_name: r.name || r.breed || "Ram",
              breed: r.breed || "Unknown",
              health_score: r.healthScore || 0,
              perf_score: r.perfScore || 0,
              coi: r.coi || 0,
              size: r.weightLbs || 200,
              age_months: r.ageMonths || 0,
              coat_color: r.coatColor || "",
              titles: (r.sheepEarnedTitles || []).join(", "),
              genome: r.genome || {},
              owner_name: "Sheep Farm",
              updated_at: new Date().toISOString()
            };
          });
          return fetch(SUPABASE_URL + "/rest/v1/stud_listings", {
            method: "POST",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(rows)
          });
        })
        .then(function(r) {
          if (!r) { resolve(null); return; }
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Sheep stud sync failed:", t); }); reject(new Error("Sheep stud sync failed")); }
          else { console.log("[BA Sync] Sheep stud listings synced"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Sheep stud sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Sheep stud sync exception:", e); reject(e); }
    });
  }

  // ── Fetch community ram listings (all players) ──────────────────────────
  function fetchSheepStudDirectory(excludeUserId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/stud_listings?active=eq.true&species=eq.sheep&select=*&order=updated_at.desc&limit=100";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        var filtered = (rows || []).filter(function(r){ return r.user_id !== excludeUserId; });
        console.log("[BA Sync] Sheep stud directory loaded:", filtered.length, "listings");
        resolve(filtered);
      })
      .catch(function(err) { console.warn("[BA Sync] Sheep stud directory error:", err); reject(err); });
    });
  }

  // ── Global Market Stock ────────────────────────────────────────────────────
  // Cycle IDs are 3-hour windows: "2026-03-22T15" means 15:00-17:59 UTC
  function getCurrentCycleId() {
    var now = new Date();
    var h = now.getUTCHours();
    var cycleHour = Math.floor(h / 3) * 3;
    var y = now.getUTCFullYear();
    var m = String(now.getUTCMonth() + 1).padStart(2, "0");
    var d = String(now.getUTCDate()).padStart(2, "0");
    var hh = String(cycleHour).padStart(2, "0");
    return y + "-" + m + "-" + d + "T" + hh;
  }

  // ── Sync pig stud listings to Supabase ───────────────────────────────────
  function syncPigStudListings(userId, livestock) {
    return new Promise(function(resolve, reject) {
      if (!userId) { resolve(null); return; }
      try {
        fetch(SUPABASE_URL + "/rest/v1/stud_listings?user_id=eq." + userId + "&species=eq.pig", {
          method: "PATCH",
          headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
          body: JSON.stringify({ active: false, updated_at: new Date().toISOString() })
        })
        .then(function() {
          var activeBoars = (livestock || []).filter(function(a) {
            return a.species === "pig" && a.sex === "M" && a.isPigStud && a.pigStudFee > 0;
          });
          if (activeBoars.length === 0) { resolve(null); return; }
          var rows = activeBoars.map(function(r) {
            var reasons = [];
            if (typeof calcSuggestedBoarFee === "function") {
              var calc = calcSuggestedBoarFee(r);
              reasons = calc.reasons || [];
            }
            return {
              animal_id: r.id,
              user_id: userId,
              species: "pig",
              fee: r.pigStudFee || 0,
              description: reasons.join(" \u00B7 "),
              active: true,
              dog_name: r.name || r.breed || "Boar",
              breed: r.breed || "Unknown",
              health_score: r.healthScore || 0,
              perf_score: r.perfScore || 0,
              coi: r.coi || 0,
              size: r.weightLbs || 550,
              age_months: r.ageMonths || 0,
              coat_color: r.coatColor || "",
              titles: (r.pigEarnedTitles || []).join(", "),
              genome: r.genome || {},
              owner_name: "Pig Farm",
              updated_at: new Date().toISOString()
            };
          });
          return fetch(SUPABASE_URL + "/rest/v1/stud_listings", {
            method: "POST",
            headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(rows)
          });
        })
        .then(function(r) {
          if (!r) { resolve(null); return; }
          if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] Pig stud sync failed:", t); }); reject(new Error("Pig stud sync failed")); }
          else { console.log("[BA Sync] Pig stud listings synced"); resolve(null); }
        })
        .catch(function(err) { console.warn("[BA Sync] Pig stud sync error:", err); reject(err); });
      } catch(e) { console.warn("[BA Sync] Pig stud sync exception:", e); reject(e); }
    });
  }

  // ── Fetch community boar listings (all players) ──────────────────────────
  function fetchPigStudDirectory(excludeUserId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/stud_listings?active=eq.true&species=eq.pig&select=*&order=updated_at.desc&limit=100";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        var filtered = (rows || []).filter(function(r){ return r.user_id !== excludeUserId; });
        console.log("[BA Sync] Pig stud directory loaded:", filtered.length, "listings");
        resolve(filtered);
      })
      .catch(function(err) { console.warn("[BA Sync] Pig stud directory error:", err); reject(err); });
    });
  }

  // Fetch current market stock from Supabase
  function fetchGlobalMarketStock() {
    return new Promise(function(resolve, reject) {
      var cycleId = getCurrentCycleId();
      var url = SUPABASE_URL + "/rest/v1/market_stock?cycle_id=eq." + cycleId + "&select=id,species,breed,sex,type_or_group,animal_data,cycle_id";
      fetch(url, {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        if (!Array.isArray(rows)) rows = [];
        console.log("[BA Sync] Market stock fetched:", rows.length, "items for cycle", cycleId);
        resolve({ cycleId: cycleId, items: rows });
      })
      .catch(function(err) { console.warn("[BA Sync] Market stock fetch error:", err); reject(err); });
    });
  }

  // Delete old cycle stock
  function cleanOldMarketStock() {
    return new Promise(function(resolve, reject) {
      var cycleId = getCurrentCycleId();
      var url = SUPABASE_URL + "/rest/v1/market_stock?cycle_id=neq." + cycleId;
      fetch(url, {
        method: "DELETE",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" }
      })
      .then(function(){ console.log("[BA Sync] Old market stock cleaned"); resolve(); })
      .catch(function(err) { console.warn("[BA Sync] Clean old stock error:", err); resolve(); });
    });
  }

  // Upload generated stock to Supabase (called by first player to trigger refresh)
  function uploadGlobalMarketStock(animals) {
    return new Promise(function(resolve, reject) {
      if (!animals || animals.length === 0) { resolve([]); return; }
      var cycleId = getCurrentCycleId();
      var rows = animals.map(function(a) {
        return {
          id: a.id || ("mkt_" + Date.now() + "_" + Math.random().toString(36).slice(2,7)),
          species: a.species || "",
          breed: a.breed || "",
          sex: a.sex || "F",
          type_or_group: a.group || a.type || "",
          animal_data: a,
          cycle_id: cycleId
        };
      });
      console.log("[BA Sync] Uploading", rows.length, "market stock items for cycle", cycleId);
      // Insert in batches of 50
      var batches = [];
      for (var i = 0; i < rows.length; i += 50) {
        batches.push(rows.slice(i, i + 50));
      }
      var chain = Promise.resolve();
      batches.forEach(function(batch) {
        chain = chain.then(function() {
          return fetch(SUPABASE_URL + "/rest/v1/market_stock", {
            method: "POST",
            headers: {
              "apikey": ANON_KEY,
              "Authorization": "Bearer " + getToken(),
              "Content-Type": "application/json",
              "Prefer": "return=minimal,resolution=merge-duplicates"
            },
            body: JSON.stringify(batch)
          });
        });
      });
      chain.then(function() {
        console.log("[BA Sync] Market stock uploaded successfully");
        resolve(rows);
      })
      .catch(function(err) { console.warn("[BA Sync] Market stock upload error:", err); reject(err); });
    });
  }

  // Buy an animal from global market (delete the row — first-come-first-served)
  function buyGlobalMarketStock(itemId) {
    return new Promise(function(resolve, reject) {
      var url = SUPABASE_URL + "/rest/v1/market_stock?id=eq." + encodeURIComponent(itemId);
      fetch(url, {
        method: "DELETE",
        headers: {
          "apikey": ANON_KEY,
          "Authorization": "Bearer " + getToken(),
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        }
      })
      .then(function(r){ return r.json(); })
      .then(function(deleted) {
        if (deleted && deleted.length > 0) {
          console.log("[BA Sync] Market stock item purchased:", itemId);
          resolve(true);
        } else {
          console.log("[BA Sync] Market stock item already sold:", itemId);
          resolve(false);
        }
      })
      .catch(function(err) { console.warn("[BA Sync] Market stock buy error:", err); reject(err); });
    });
  }

  // Get current cycle ID (for external use)
  function getMarketCycleId() {
    return getCurrentCycleId();
  }

  // ── Profile functions ─────────────────────────────────────────────────────

  function fetchProfile(userId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/profiles?id=eq." + userId + "&select=id,username,display_name,account_number,bio,location,avatar_url,name_chosen", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) {
        resolve(rows && rows.length > 0 ? rows[0] : null);
      })
      .catch(function(err) { console.warn("[BA Sync] fetchProfile error:", err); reject(err); });
    });
  }

  function updateDisplayName(userId, newName) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/profiles?id=eq." + userId, {
        method: "PATCH",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=representation" },
        body: JSON.stringify({ display_name: newName, username: newName, name_chosen: true })
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] updateDisplayName failed:", t); }); reject(new Error("Update failed")); return; }
        return r.json();
      })
      .then(function(rows) { resolve(rows && rows.length > 0 ? rows[0] : null); })
      .catch(function(err) { console.warn("[BA Sync] updateDisplayName error:", err); reject(err); });
    });
  }

  function lookupPlayerByName(displayName) {
    return new Promise(function(resolve, reject) {
      var encoded = encodeURIComponent(displayName);
      fetch(SUPABASE_URL + "/rest/v1/profiles?display_name=ilike." + encoded + "&select=id,display_name,account_number&limit=5", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) { resolve(rows || []); })
      .catch(function(err) { console.warn("[BA Sync] lookupPlayer error:", err); reject(err); });
    });
  }

  function searchPlayers(query) {
    return new Promise(function(resolve, reject) {
      var encoded = encodeURIComponent("%" + query + "%");
      fetch(SUPABASE_URL + "/rest/v1/profiles?display_name=ilike." + encoded + "&select=id,display_name,account_number&limit=10", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) { resolve(rows || []); })
      .catch(function(err) { console.warn("[BA Sync] searchPlayers error:", err); reject(err); });
    });
  }

  // ── Messaging functions ───────────────────────────────────────────────────

  function sendMessage(fromUserId, toUserId, subject, body) {
    return new Promise(function(resolve, reject) {
      var row = {
        from_user: fromUserId,
        to_user: toUserId,
        subject: (subject || "").substring(0, 200),
        body: (body || "").substring(0, 5000),
        read: false,
        private: true,
        created_at: new Date().toISOString()
      };
      fetch(SUPABASE_URL + "/rest/v1/messages", {
        method: "POST",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=representation" },
        body: JSON.stringify(row)
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] sendMessage failed:", t); }); reject(new Error("Send failed")); return; }
        return r.json();
      })
      .then(function(rows) { resolve(rows && rows.length > 0 ? rows[0] : null); })
      .catch(function(err) { console.warn("[BA Sync] sendMessage error:", err); reject(err); });
    });
  }

  function fetchInbox(userId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/messages?to_user=eq." + userId + "&select=*&order=created_at.desc&limit=100", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) { resolve(rows || []); })
      .catch(function(err) { console.warn("[BA Sync] fetchInbox error:", err); reject(err); });
    });
  }

  function fetchSent(userId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/messages?from_user=eq." + userId + "&select=*&order=created_at.desc&limit=100", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){ return r.json(); })
      .then(function(rows) { resolve(rows || []); })
      .catch(function(err) { console.warn("[BA Sync] fetchSent error:", err); reject(err); });
    });
  }

  function markMessageRead(messageId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/messages?id=eq." + messageId, {
        method: "PATCH",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" },
        body: JSON.stringify({ read: true, updated_at: new Date().toISOString() })
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] markRead failed:", t); }); reject(new Error("Mark read failed")); return; }
        resolve(true);
      })
      .catch(function(err) { console.warn("[BA Sync] markRead error:", err); reject(err); });
    });
  }

  function deleteMessage(messageId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/messages?id=eq." + messageId, {
        method: "DELETE",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=minimal" }
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] deleteMessage failed:", t); }); reject(new Error("Delete failed")); return; }
        resolve(true);
      })
      .catch(function(err) { console.warn("[BA Sync] deleteMessage error:", err); reject(err); });
    });
  }

  function fetchUnreadCount(userId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/messages?to_user=eq." + userId + "&read=eq.false&select=id", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "count=exact" }
      })
      .then(function(r){
        var count = r.headers.get("content-range");
        if (count) {
          var parts = count.split("/");
          resolve(parseInt(parts[1]) || 0);
        } else {
          return r.json().then(function(rows){ resolve((rows||[]).length); });
        }
      })
      .catch(function(err) { console.warn("[BA Sync] fetchUnreadCount error:", err); resolve(0); });
    });
  }

  // ── Friends system ──

  function sendFriendRequest(fromUserId, toUserId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/friends", {
        method: "POST",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=representation" },
        body: JSON.stringify({ user_id: fromUserId, friend_id: toUserId, status: "pending" })
      })
      .then(function(r){
        if (!r.ok) { r.text().then(function(t){ console.warn("[BA Sync] sendFriendRequest failed:", t); }); reject(new Error("Failed to send friend request")); return; }
        return r.json();
      })
      .then(function(rows) { resolve(rows && rows.length > 0 ? rows[0] : null); })
      .catch(function(err) { console.warn("[BA Sync] sendFriendRequest error:", err); reject(err); });
    });
  }

  function fetchFriends(userId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/friends?or=(user_id.eq." + userId + ",friend_id.eq." + userId + ")&select=*&order=created_at.desc", {
        method: "GET",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json" }
      })
      .then(function(r){
        if (!r.ok) { reject(new Error("Failed to fetch friends")); return; }
        return r.json();
      })
      .then(function(rows) { resolve(rows || []); })
      .catch(function(err) { console.warn("[BA Sync] fetchFriends error:", err); reject(err); });
    });
  }

  function respondFriendRequest(requestId, newStatus) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/friends?id=eq." + requestId, {
        method: "PATCH",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken(), "Content-Type": "application/json", "Prefer": "return=representation" },
        body: JSON.stringify({ status: newStatus })
      })
      .then(function(r){
        if (!r.ok) { reject(new Error("Failed to update friend request")); return; }
        return r.json();
      })
      .then(function(rows) { resolve(rows && rows.length > 0 ? rows[0] : null); })
      .catch(function(err) { console.warn("[BA Sync] respondFriendRequest error:", err); reject(err); });
    });
  }

  function removeFriend(requestId) {
    return new Promise(function(resolve, reject) {
      fetch(SUPABASE_URL + "/rest/v1/friends?id=eq." + requestId, {
        method: "DELETE",
        headers: { "apikey": ANON_KEY, "Authorization": "Bearer " + getToken() }
      })
      .then(function(r){
        if (!r.ok) { reject(new Error("Failed to remove friend")); return; }
        resolve(true);
      })
      .catch(function(err) { console.warn("[BA Sync] removeFriend error:", err); reject(err); });
    });
  }

  window.baSupabaseSync = {
    saveToCloud: saveToCloud,
    loadFromCloud: loadFromCloud,
    syncAnimals: syncAnimals,
    syncStudListings: syncStudListings,
    fetchStudDirectory: fetchStudDirectory,
    syncMarketListings: syncMarketListings,
    fetchMarketListings: fetchMarketListings,
    buyMarketDog: buyMarketDog,
    syncCattleStudListings: syncCattleStudListings,
    syncGoatStudListings: syncGoatStudListings,
    fetchGoatStudDirectory: fetchGoatStudDirectory,
    syncSheepStudListings: syncSheepStudListings,
    fetchSheepStudDirectory: fetchSheepStudDirectory,
    syncPigStudListings: syncPigStudListings,
    fetchPigStudDirectory: fetchPigStudDirectory,
    fetchCattleStudDirectory: fetchCattleStudDirectory,
    getToken: getToken,
    getCurrentCycleId: getCurrentCycleId,
    getMarketCycleId: getMarketCycleId,
    fetchGlobalMarketStock: fetchGlobalMarketStock,
    uploadGlobalMarketStock: uploadGlobalMarketStock,
    buyGlobalMarketStock: buyGlobalMarketStock,
    cleanOldMarketStock: cleanOldMarketStock,
    fetchProfile: fetchProfile,
    updateDisplayName: updateDisplayName,
    lookupPlayerByName: lookupPlayerByName,
    searchPlayers: searchPlayers,
    sendMessage: sendMessage,
    fetchInbox: fetchInbox,
    fetchSent: fetchSent,
    markMessageRead: markMessageRead,
    deleteMessage: deleteMessage,
    fetchUnreadCount: fetchUnreadCount,
    sendFriendRequest: sendFriendRequest,
    fetchFriends: fetchFriends,
    respondFriendRequest: respondFriendRequest,
    removeFriend: removeFriend
  };
})();
