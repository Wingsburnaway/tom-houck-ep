/* =============================================================================
   Tom Houck EP — project data
   -----------------------------------------------------------------------------
   Edit THIS file to update lyrics, demo links, checkmarks, players, and
   session details. You do not need to change app.js or index.html for
   ordinary production updates.

   Lyrics:
     Set song.lyrics to plain text (line breaks are kept). Leave it as ""
     and the card will show a short placeholder until lyrics are added.

   Notes:
     song.tomNotes  — Tom’s production notes as plain text. Leave "" or omit
                      to hide the Tom’s notes block on that card.
     song.robNotes  — Rob’s notes as an array of bullet strings. Leave [] or
                      omit to hide the Rob’s notes block. The Notes section
                      is omitted entirely when both are empty.

   Demo links:
     song.demos.latestUrl  — audio file for the on-card player (mp3, wav, etc.)
     song.demos.versions   — download / link list. If "url" is set, the label
                             becomes a link; otherwise "note" is shown as text.

   Checkmarks:
     List completed stage ids in song.done, for example:
       done: ["suno", "arrange", "click"]
     Stage ids:
       Pre-production: deposit, suno, arrange, click, orch, charts, finalBounce
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
      lyrics: `The sun is smiling, what a beautiful day
Birds singing, kids out to play
I hear ‘em laughing, what a wonderful sound when they’re near
A gentle breeze ripples through my hair
I turn around, catch my baby’s stare
I’ve been waiting for a day like this for so long
When I think of all you’ve done for me
How can I write a better story?

Oh, I think it’s a taste of forever
It feels so good and I gotta believe
There’s a place even better
I’ll never doubt your love for me

So many things need to be done
Today I want to focus on what You’ve begun
So amazing and beautiful all that goes on in our world
When I think of all you’ve done for me
How can I write a better story?
There’s no place I would rather be
Surrounded by all of Your glory`,
      tomNotes: "Upbeat, catchy, feel-good song about heaven. mostly acoustic. Instrumental interlude after 2nd chorus was different from what I wrote. Wouldn’t finish the song that way.",
      robNotes: [
        "Forrest Frank vibes",
        "Sampled / real drums",
        "PC is good with 2-chord",
        "Adjust interlude chords, arrangement is fine"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
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
      lyrics: `You gotta give me a chance
You gotta let me try
I get it when you say you think you’re justified
I’m not the type you were looking for
I’m sure someone’s more qualified
But do they have the passion inside?

I’m the Dark Horse coming, no one sees
The Dark Horse, no thoroughbred
Don’t be surprised at the clever disguise
Let ‘em lose with the favorites instead
I’m the Dark Horse coming, you gotta believe (just wait and see)
When the race is finally run
This Dark Horse is gonna end on top
It’s gonna be so much fun

Before you say “no”
You gotta hear me out
Just give me one more minute to erase any doubts
I promise you’ll be sorry if you let me go
Don’t dwell on what you think I can’t do
There’s not a wall I won’t break through

I understand I’m not the safest bet
But I don’t want you burdened with any regrets
Wouldn’t you rather say you knew it all along?`,
      tomNotes: "Supposed to be a “I can do it” type song. Verses maybe more acoustic, leading to bigger chorus. Last part of song thru outro changed by AI….but you get general idea here",
      robNotes: [
        "Catchy, Queen “Don’t Stop Me Now”",
        "Review lyrics, make less wordy in chorus",
        "Figure out ending"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
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
      lyrics: `Standing at the foot of the mountain
Don’t know how I’m gonna climb
Never dreamed I’d be in a bind like this
Taking one day at a time
Hard to imagine a more difficult challenge
Never saw myself sinking so low
I need to cling to what I believe
Learn how to let go
There’s only one sure thing I know

My God is bigger
My God is better
My God is stronger
Than anything standing in my way
My God moves mountains (stops rivers)
My God breaks chains
My God is bigger
He is better, He is greater, He is God

Staring at the narrow spot
Don’t know how I’m gonna make my way across
Can’t win, can’t shake the albatross
That’s been weighing me down so long
On my own, making countless tries
Battling demons deep inside
I need to learn to set aside my pride
And learn how to let go
‘Cause there’s only one sure thing I know

So I pray to the Mighty One
Who holds the world in his hand`,
      tomNotes: "Typical worship song. I didn’t like how they handled final chorus after instrumental interlude. Envisioned intro being done differently.",
      robNotes: [
        "CCM, very good",
        "Big orchestral",
        "Change main tag line to “He Reigns”"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
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
      tomNotes: "Instrumental. Piano lead with strings accompanying. Doesn’t have to be real strings for our purposes. AI messed up ending a bit.",
      robNotes: [
        "Beautiful instrumental"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
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
      lyrics: `When storm clouds covered the sun
I never thought I’d be the one
Torn away from things most important to me
It’s scary when hope is gone
You’re sick of hearing “it’s darkest before dawn”
It’s hard to believe and then suddenly

Oh, Rhonda, you came along
Stepped into my life like a sweet song
In the middle of the night, a shining light
I needed you then (now)
You needed me, too
A miracle only God could do
Oh, Rhonda My Southern Star

As the days fade away to years
It’s easy to forget the fears
Taking for granted the wonderful life we share
But the story isn’t over yet
Nothing’s changed since the rainy night we met
Those feelings back then still ring so true

Final chorus:
Oh, Rhonda, this is “Your Song”
Now it seems like you’ve been here all along
Through the days and nights, a shining light….`,
      tomNotes: "I’d like to make this song work somehow even if not ready now. It’s written for my wife. Was thinking maybe a southern rock ballad vibe somehow. Piano emphasis in intro and outro and the musical bridge where AI completely ignored what I did. They also kept guitar solo going into chorus (which I didn’t do). Supposed to end at 3:30.",
      robNotes: [
        "Country power ballad",
        "Pretty strong"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
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
      lyrics: `You say you want someone to always love you, always care
You say you want someone who will always be there, don’t matter where
A friend to hold tight through the ups and downs of life
He’s right before your eyes

Say Hello to Jesus
The one you’re looking for
He wants to be your Savior
He’s everything and more
He wants to be your Teacher
Unclip your wings and soar
Say Hello to Jesus
He’s Everything and More

You see the endless rows of faceless names, they look the same
You search for meaning but it just seems like an endless game
You long to be great
Can’t seem to find your place
He’s right before your eyes

Can you believe the King wants you now
The One the angels sing about and every knee will bow
He wants you by His side, to take you for a ride
He’s reaching out to you
Your future’s overdue`,
      tomNotes: "Worship song. Piano originally an octave lower and continues that approach in the verses. But open to discussion. Bridge supposed to transition into big chorus.",
      robNotes: [
        "Good for Tanner",
        "Interesting changes and vibes"
      ],
      demos: {
        latestUrl: "",
        versions: [
          { label: "Latest bounce", url: "", note: "Not linked yet" },
          { label: "Original demo", url: "", note: "In the Drive folder" },
          { label: "Suno flat BPM demo", url: "", note: "In the Drive folder" },
          { label: "All versions", url: "DRIVE", note: "" }
        ]
      },
      done: ["deposit"]
    },
    {
      id: "i-wonder",
      n: 7,
      title: "I Wonder What You’re Thinking",
      subtitle: "Synth rock",
      /* Subtle on-card / grid note. This song is in production with the others. */
      note: "May be cut later.",
      stageNotes: {
        deposit: "Not in deposit yet — if kept, deposit amount updates."
      },
      flags: {
        keys: "Rob Hitchcock",
        eg2: true,
        leadVox: "James O’Neal or Tanner Bishop"
      },
      lyrics: `A conversation goes nowhere fast
It never used to be this way, you always had so much to say
Can’t erase a mistake of the past
It’s nothing like it used to be, not how it’s supposed to be
I thought you understood the choices I made

A midnight breeze gives no relief
Sweat dripping off my brow, my head really swimming now
Haven’t seen your face in weeks
They tell me you’re so busy, that you’re really not ignoring me
I know you’re disappointed with the choices I made
Love is complicated, a steep price has been paid

I wonder what you’re thinking when you look at me
I want to believe you still love me
I wonder what you’re thinking when you walk away
Do you feel betrayed?
Are you just saying the words I want to hear
But you don’t really care

Guess I missed obvious signs
Can’t stand the possibility that you’re really leaving me
Two minds, so much alike
What’s it done to me and you, apologies long overdue
I should have seen this coming
Can’t say I wasn’t warned
Losing one was bad enough
How much must I endure?

The first time you called my name
The first time I felt your hair
The first time you kissed me on the cheek
That’s what I remember`,
      tomNotes: "Dark. About a son who turns against his father. AI makes it sound very 80s. Not really the intent. I would do the first half of the verses differently musically. Needs a better transition to chorus. Bridge after second chorus/guitar solo was supposed to be Dixieland jazz (an abrupt flashback to happier times), but AI did it differently. Open to thoughts on this of course.",
      robNotes: [
        "Synthwave and The Killers",
        "Very good"
      ],
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
