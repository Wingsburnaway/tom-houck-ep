# Tom Houck EP — project hub

Static site for Tom Houck and Rob Hitchcock. No backend, no forms.

Open `index.html` locally, or serve the folder:

    python3 -m http.server 8765

Then visit `http://localhost:8765`.

## Login

First-name login, case-insensitive:

- `Tom`
- `Rob`

The signed-in name is stored in this browser only (localStorage) for two weeks. It is not a real account system.

## Updating the site

Edit **`data.js`**. That one file holds songs, players, lyrics, notes, demo links, and checkmarks. Comments at the top of the file list every stage id and how to fill each field.

Typical updates:

- Add lyrics: set `song.lyrics` to the plain text.
- Add notes: set `song.tomNotes` to Tom’s text, and `song.robNotes` to an array of Rob’s bullet strings.
- Link a bounce: set `song.demos.latestUrl` to the audio file (the on-card player will use it) and put the same URL on the “Latest bounce” item in `song.demos.versions`.
- Check off a stage: add its id to `song.done`, e.g. `done: ["suno", "arrange"]`.
- Assign a player: put the name on the matching flag, e.g. `leadVox: "Tanner Bishop"`.
- Change the drum date or rate: edit the `drums` object at the top of `data.js`, and the matching copy in `index.html` (Next Up and the snapshot stats).

Do not invent lyrics or credits. Leave a field blank until you have the real text or file.

After editing, refresh the page (a hard refresh if the browser cached `data.js`).

## Deploy to GitHub Pages

The site is meant to be hosted as a GitHub Pages project site under the **wingsburnaway** GitHub account. It uses relative paths only (`styles.css`, `data.js`, `app.js`), so it works from a subpath such as:

    https://wingsburnaway.github.io/<repo-name>/

Do not add a leading slash to asset paths, and do not set a `<base href="/">`, or those assets will 404 on a project site.

A suggested setup:

1. Create a repository under the `wingsburnaway` account (name is still to be chosen).
2. Put the contents of this folder at the repository root, including the empty `.nojekyll` file (this stops Jekyll from ignoring files).
3. On GitHub: **Settings → Pages → Build and deployment**. Set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait for the Pages build, then open the URL GitHub shows.

To publish an update, commit the changed files (usually just `data.js` or `index.html`) and push to that branch. Pages will rebuild on its own.

This folder is the site. It has not been deployed from here.
