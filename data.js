/* =============================================================================
   Tom Houck EP — project data
   -----------------------------------------------------------------------------
   Edit THIS file to update lyrics, demo links, checkmarks, players, and
   session details. You do not need to change app.js or index.html for
   ordinary production updates.

   Lyrics:
     Set song.lyrics to plain text (line breaks are kept). Leave it as ""
     and the card will show a short placeholder until lyrics are added.

   Demo links:
     song.demos.latestUrl  — audio file for the on-card player (mp3, wav, etc.)
     song.demos.versions   — download / link list. If "url" is set, the label
                             becomes a link; otherwise "note" is shown as text.

   Checkmarks:
     List completed stage ids in song.done, for example:
       done: ["suno", "arrange", "click"]
     Stage ids:
       Pre-production: suno, arrange, click, orch, charts, finalBounce
       Production:     drums, drumEdits, bass, acoustic, rhythm, gtrEdits,
                       keys, fiddle, fiddleEdits, eg2, leadVox, leadEdits,
                       bgVox, bgEdits, deliver
       Post:           mix, atmos, master
     Only stages that apply to that song are shown. A stage applies when
     the matching flag is present (see song.flags), or when the stage has
     no flag (it applies to every song).

   Players:
     Put the player’s name on the matching flag, or true if the part is
     needed but no name is assigned yet (shown as TBA for EG2).
     Flag keys: drums, bass, acoustic, rhythm, gtrEdits, keys, orch,
     fiddle, eg2, leadVox, bgVox.
   ============================================================================= */

window.TOM_HOUCK_EP = {

  driveFolder: "https://drive.google.com/drive/folders/1LPrY73uKP7VnGPec14ncnVlhbGjkkgqk",

  drums: {
    player: "Darius Ross",
    rate: "$1,000 for the day",
    studio: "Stormy Cooper Media",
    city: "Houston",
    date: "Jan 4 or 5, 2027 (TBC)"
  },

  /* Names shown when a stage has no per-song flag (mix / master / atmos). */
  postPlayers: {
    mix: "Rob Hitchcock",
    atmos: "",
    master: "Chris Henderson"
  },

  fiddleFirstCall: "Josh Masters",
  leadVocalists: "James O’Neal or Tanner Bishop",

  songs: [
    {
      id: "taste-of-forever",
      n: 1,
      title: "A Taste of Forever",
      subtitle: "CCM",
      flags: {
        drums: "Darius Ross",
        bass: "Nick Matzke",
        acoustic: "Nick Matzke",
        rhythm: "Nick Matzke",
        gtrEdits: true,
        keys: "Rob Hitchcock",
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "dark-horse",
      n: 2,
      title: "The Dark Horse",
      subtitle: "Rock",
      flags: {
        drums: "Darius Ross",
        bass: "Nick Matzke",
        acoustic: "Nick Matzke",
        rhythm: "Nick Matzke",
        gtrEdits: true,
        keys: "Rob Hitchcock",
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "my-god-is-bigger",
      n: 3,
      title: "My God is Bigger",
      subtitle: "CCM / Symphonic",
      flags: {
        drums: "Darius Ross",
        bass: "Nick Matzke",
        acoustic: "Nick Matzke",
        rhythm: "Nick Matzke",
        gtrEdits: true,
        keys: "Rob Hitchcock",
        orch: "Dave Hitchcock",
        fiddle: true,
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop",
        bgVox: "If needed"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "theme",
      n: 4,
      title: "Theme to an Imaginary Love Story",
      subtitle: "Instrumental",
      instrumental: true,
      flags: {
        keys: "Rob Hitchcock",
        orch: "Dave Hitchcock",
        fiddle: true
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "southern-star",
      n: 5,
      title: "My Southern Star",
      subtitle: "Country / folk",
      flags: {
        drums: "Darius Ross",
        bass: "Nick Matzke",
        acoustic: "Nick Matzke",
        rhythm: "Nick Matzke",
        gtrEdits: true,
        keys: "Rob Hitchcock",
        leadVox: "James O’Neal or Tanner Bishop",
        bgVox: "If needed"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "say-hello",
      n: 6,
      title: "Say Hello to Jesus",
      subtitle: "CCM",
      flags: {
        drums: "Darius Ross",
        bass: "Nick Matzke",
        acoustic: "Nick Matzke",
        rhythm: "Nick Matzke",
        gtrEdits: true,
        keys: "Rob Hitchcock",
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    },
    {
      id: "i-wonder",
      n: 7,
      title: "I Wonder What You’re Thinking",
      subtitle: "Synth rock",
      /* Subtle on-card / grid note. This song is in production with the others. */
      note: "May be cut later.",
      flags: {
        keys: "Rob Hitchcock",
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop"
      },
      lyrics: "",
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: []
    }
  ]
};
