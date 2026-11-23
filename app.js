(() => {
  const DATA = window.TOM_HOUCK_EP || {};
  const SONGS = DATA.songs || [];
  const DRIVE = DATA.driveFolder || "";
  const USER_KEY = "tom-houck-ep-user";
  const NAMES = { tom: "Tom", rob: "Rob" };

  const PHASES = [
    {
      id: "pre",
      name: "Pre-production",
      stages: [
        { id: "suno", label: "Suno Flat BPM Demo", short: "Suno BPM" },
        { id: "arrange", label: "Arrangement Finalization", short: "Arrange" },
        { id: "click", label: "Click / Guide" },
        { id: "orch", label: "Orchestration", flag: "orch", short: "Orch." },
        { id: "charts", label: "Charts" },
        { id: "finalBounce", label: "Final Bounce" }
      ]
    },
    {
      id: "prod",
      name: "Production",
      stages: [
        { id: "drums", label: "Drums", flag: "drums" },
        { id: "drumEdits", label: "Drum Edits", flag: "drums", by: "Rob Hitchcock" },
        { id: "bass", label: "Bass", flag: "bass" },
        { id: "acoustic", label: "Acoustic", flag: "acoustic" },
        { id: "rhythm", label: "Rhythm Guitars", flag: "rhythm", short: "Rhythm Gtr" },
        { id: "gtrEdits", label: "Guitar Edits", flag: "gtrEdits", by: "Rob Hitchcock" },
        { id: "keys", label: "Keys", flag: "keys" },
        { id: "fiddle", label: "Fiddle", flag: "fiddle" },
        { id: "fiddleEdits", label: "Fiddle Edits", flag: "fiddle", by: "Rob Hitchcock" },
        { id: "eg2", label: "Guitar Solo / EG2", flag: "eg2", short: "EG2" },
        { id: "leadVox", label: "Lead Vocal", flag: "leadVox" },
        { id: "leadEdits", label: "Vocal Edits (lead)", flag: "leadVox", short: "Vox Edits", by: "Rob Hitchcock" },
        { id: "bgVox", label: "BG Vox / Harmonies", flag: "bgVox", short: "BG Vox" },
        { id: "bgEdits", label: "Vocal Edits (BG)", flag: "bgVox", short: "BG Edits", by: "Rob Hitchcock" },
        { id: "deliver", label: "Bounce-in-Place to Mix", short: "Bounce-in-Place" }
      ]
    },
    {
      id: "post",
      name: "Post",
      stages: [
        { id: "mix", label: "Mixing" },
        { id: "atmos", label: "Dolby Atmos (optional)", optional: true, short: "Atmos (opt.)" },
        { id: "master", label: "Mastering" }
      ]
    }
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

  const applies = (song, stage) => !stage.flag || Boolean(song.flags && song.flags[stage.flag]);

  const playerOf = (song, stage) => {
    if (stage.by) return stage.by;
    if (!stage.flag) {
      const post = (DATA.postPlayers || {})[stage.id];
      return post == null ? "" : post;
    }
    const v = song.flags[stage.flag];
    return typeof v === "string" ? v : "";
  };

  const isDone = (song, stageId) => {
    const d = song.done;
    if (!d) return false;
    if (Array.isArray(d)) return d.includes(stageId);
    return !!d[stageId];
  };

  const applicable = (song, phase) => phase.stages.filter((st) => applies(song, st));
  const pct = (song, phase) => {
    const list = applicable(song, phase);
    if (!list.length) return 0;
    return Math.round(100 * list.filter((st) => isDone(song, st.id)).length / list.length);
  };

  const demoUrl = (item) => {
    if (!item || !item.url) return "";
    return item.url === "DRIVE" ? DRIVE : item.url;
  };

  const hintOf = (song, stage) => {
    const who = playerOf(song, stage);
    const parts = [stage.label];
    if (who) parts.push(who);
    if (stage.id === "drums" && DATA.drums) {
      const d = DATA.drums;
      if (d.rate) parts.push(d.rate);
      if (d.date) parts.push(d.date);
    }
    if (stage.flag === "fiddle" && !stage.by && DATA.fiddleFirstCall) {
      parts.push("First call: " + DATA.fiddleFirstCall);
    }
    return parts.join(" · ");
  };

  let user = null;
  let phFilter = "all";

  const mk = (kind) => `<span class="mk ${kind}" role="img" aria-hidden="true"></span>`;
  const ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg>';
  const ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor"/></svg>';

  function lyricsPanel(s) {
    if (s.instrumental) {
      return `<p class="ly-empty">This song is an instrumental.</p>`;
    }
    const text = String(s.lyrics || "").trim();
    if (text) {
      return `<div class="ly">${esc(text)}</div>`;
    }
    return `<p class="ly-empty">Lyrics not added yet.</p>`;
  }

  function grid() {
    const phases = phFilter === "all" ? PHASES : PHASES.filter((p) => p.id === phFilter);
    const btns = ["pre", "prod", "post", "all"].map((id) => {
      const label = id === "all" ? "All" : PHASES.find((p) => p.id === id).name;
      return `<button class="btn" type="button" data-ph="${id}" aria-pressed="${id === phFilter}">${label}</button>`;
    }).join(" ");
    const head1 = phases.map((p) => `<th colspan="${p.stages.length}" class="${p.id} grp">${esc(p.name)}</th>`).join("");
    const head2 = phases.map((p) => p.stages.map((st, i) =>
      `<th class="st ${i ? "" : "grp"} ${st.optional ? "opt" : ""}" title="${esc(st.label)}"><span class="colh">${esc(st.short || st.label)}</span></th>`
    ).join("")).join("");
    const rows = SONGS.map((s) => {
      const cells = phases.map((p) => p.stages.map((st, i) => {
        if (!applies(s, st)) return `<td class="na ${i ? "" : "grp"}">${mk("na")}</td>`;
        const done = isDone(s, st.id);
        return `<td class="${i ? "" : "grp"} ${st.optional ? "opt" : ""}" title="${esc(hintOf(s, st))}">${mk(done ? "done" : "open")}</td>`;
      }).join("")).join("");
      const marks = [
        s.instrumental ? `<span class="mark inst">Instrumental</span>` : "",
        s.note ? `<span class="mark note">${esc(s.note)}</span>` : ""
      ].join("");
      return `<tr>
        <td class="song">
          <button type="button" data-goto="${s.id}">${esc(s.title)}</button>
          ${marks}
        </td>${cells}
      </tr>`;
    }).join("");
    return `<div class="controls" role="group" aria-label="Show phase columns">${btns}</div>
      <div class="legend">${mk("open")}<span>Open</span>${mk("done")}<span>Done</span>${mk("na")}<span>Not on this song</span></div>
      <div class="grid-shell"><div class="gridwrap" tabindex="0" role="region" aria-label="Song by element table">
        <table id="tbl">
          <caption class="sr">All songs by production element</caption>
          <thead>
            <tr class="ph"><th class="song"></th>${head1}</tr>
            <tr class="st"><th class="song">Song</th>${head2}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div></div>`;
  }

  function miniPlayer(s) {
    const url = s.demos && s.demos.latestUrl;
    if (!url) {
      return `<div class="mini none" data-mini="${esc(s.id)}">
        <button class="mp-btn" type="button" disabled aria-label="Placeholder player for ${esc(s.title)}">${ICON_PLAY}</button>
        <div class="mp-bar" role="presentation"><i></i></div>
        <span class="mp-t">Latest bounce</span>
      </div>`;
    }
    return `<div class="mini" data-mini="${esc(s.id)}">
      <button class="mp-btn" type="button" aria-label="Play latest bounce of ${esc(s.title)}" data-play="${esc(s.id)}">${ICON_PLAY}</button>
      <div class="mp-bar" role="presentation"><i></i></div>
      <span class="mp-t">Latest bounce</span>
      <audio data-audio="${esc(s.id)}" src="${esc(url)}" preload="none"></audio>
    </div>`;
  }

  function stageItem(s, st) {
    if (!applies(s, st)) return "";
    const done = isDone(s, st.id);
    const who = playerOf(s, st);
    const whoHtml = who ? ` <span class="who">— ${esc(who)}</span>` : (st.id === "eg2" ? ` <span class="who">— TBA</span>` : "");
    const title = ` title="${esc(hintOf(s, st))}"`;
    return `<li${title}>${mk(done ? "done" : "open")}<span>${esc(st.label)}${whoHtml}</span></li>`;
  }

  function demoList(s) {
    const versions = (s.demos && s.demos.versions) || [];
    const items = versions.map((item) => {
      const url = demoUrl(item);
      const right = url
        ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(item.label === "All versions" ? "Open Drive folder" : (item.linkLabel || "Open"))}</a>`
        : `<span class="muted">${esc(item.note || "Not linked yet")}</span>`;
      return `<li><span>${esc(item.label)}</span>${right}</li>`;
    }).join("");
    return `<ul class="dl">${items}</ul>`;
  }

  function card(s) {
    const bars = PHASES.map((p) => {
      const v = pct(s, p);
      const n = applicable(s, p).length;
      const d = applicable(s, p).filter((st) => isDone(s, st.id)).length;
      return `<div class="barl"><span>${esc(p.name)}</span><span>${d}/${n}</span></div>
        <div class="bar" role="img" aria-label="${esc(p.name)}: ${v}%"><i style="width:${v}%"></i></div>`;
    }).join("");
    const lists = PHASES.map((p) => {
      const items = p.stages.map((st) => stageItem(s, st)).join("");
      return items ? `<div class="ph-lab">${esc(p.name)}</div><ul class="stages">${items}</ul>` : "";
    }).join("");
    const note = s.note ? `<p class="song-note">${esc(s.note)}</p>` : "";
    return `<article class="card" id="song-${s.id}">
      <span class="num" aria-hidden="true">${String(s.n).padStart(2, "0")}</span>
      <h3>${esc(s.title)}</h3>
      <p class="sub">${esc(s.subtitle)}</p>
      ${note}
      ${miniPlayer(s)}
      ${bars}
      <details class="brk lyrics">
        <summary>Lyrics</summary>
        <div class="ly-body">${lyricsPanel(s)}</div>
      </details>
      <details class="brk">
        <summary>Demos</summary>
        ${demoList(s)}
      </details>
      <details class="brk" data-pipe="${s.id}">
        <summary>Progress</summary>
        ${lists}
      </details>
    </article>`;
  }

  function paint() {
    $("#grid-root").innerHTML = grid();
    $("#cards").innerHTML = SONGS.map(card).join("");
    bind();
    syncGridFade();
  }

  function syncGridFade() {
    const wrap = document.querySelector(".gridwrap");
    const shell = document.querySelector(".grid-shell");
    if (!wrap || !shell) return;
    const update = () => {
      const overflow = wrap.scrollWidth > wrap.clientWidth + 16;
      const atEnd = wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 4;
      shell.classList.toggle("overflows", overflow && !atEnd);
    };
    update();
    wrap.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function bind() {
    $$("[data-ph]").forEach((b) => b.addEventListener("click", () => {
      phFilter = b.dataset.ph;
      paint();
      document.getElementById("grid-title").scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    $$("[data-goto]").forEach((b) => b.addEventListener("click", () => {
      const el = document.getElementById("song-" + b.dataset.goto);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    $$("[data-play]").forEach((btn) => {
      const id = btn.dataset.play;
      const root = btn.closest("[data-mini]");
      const audio = root && root.querySelector("audio");
      const bar = root && root.querySelector(".mp-bar i");
      if (!audio) return;
      btn.addEventListener("click", () => {
        if (audio.paused) {
          $$("audio").forEach((a) => { if (a !== audio) { a.pause(); } });
          audio.play();
        } else {
          audio.pause();
        }
      });
      audio.addEventListener("play", () => {
        $$("[data-play]").forEach((b) => { b.innerHTML = ICON_PLAY; });
        btn.innerHTML = ICON_PAUSE;
      });
      audio.addEventListener("pause", () => { btn.innerHTML = ICON_PLAY; });
      audio.addEventListener("ended", () => {
        btn.innerHTML = ICON_PLAY;
        if (bar) bar.style.width = "0%";
      });
      audio.addEventListener("timeupdate", () => {
        if (bar && audio.duration) bar.style.width = (100 * audio.currentTime / audio.duration) + "%";
      });
    });
  }

  function loadUser() {
    try {
      const raw = JSON.parse(localStorage.getItem(USER_KEY) || "null");
      if (raw && raw.u && Date.now() < raw.exp) return raw.u;
    } catch {}
    return null;
  }
  function saveUser(u) {
    localStorage.setItem(USER_KEY, JSON.stringify({ u, exp: Date.now() + 1000 * 60 * 60 * 24 * 14 }));
  }

  function gate() {
    const splash = $("#splash");
    const app = $("#app");
    if (user) {
      splash.hidden = true;
      app.hidden = false;
      document.body.classList.remove("locked");
      $("#who").textContent = user;
      return true;
    }
    splash.hidden = false;
    app.hidden = true;
    document.body.classList.add("locked");
    $("#code").focus();
    return false;
  }

  $("#enter").addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = String($("#code").value || "").trim().toLowerCase();
    const found = NAMES[raw];
    const err = $("#gate-err");
    if (!found) {
      err.textContent = "That name isn’t recognized.";
      $("#code").select();
      return;
    }
    user = found;
    saveUser(user);
    err.textContent = "";
    paint();
    gate();
  });
  $("#signout").addEventListener("click", () => {
    localStorage.removeItem(USER_KEY);
    user = null;
    $("#code").value = "";
    gate();
  });

  const params = new URLSearchParams(location.search);
  if (params.get("preview") === "1" || params.get("user") || params.get("shot")) {
    const want = (params.get("user") || "Rob").trim().toLowerCase();
    user = NAMES[want] || "Rob";
    saveUser(user);
  } else {
    user = loadUser();
  }

  if (gate()) paint();

  if (params.get("shot") === "card" || params.get("shot") === "lyrics") {
    document.body.classList.add("card-shot");
    const cardEl = document.getElementById("song-taste-of-forever");
    if (cardEl) {
      const ly = cardEl.querySelector("details.lyrics");
      if (ly) ly.open = true;
    }
  }
})();
