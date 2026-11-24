# Aashish Jain — Academic & Professional Portfolio

A responsive static portfolio for GitHub Pages. No build tools, paid services or server-side code are required.

## Publish with GitHub Pages

1. Upload all files and folders in this package to the root of the repository `aitoolsbyaj.github.io`.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then Save.
5. Wait for GitHub Pages to publish. Your site should be at `https://aitoolsbyaj.github.io`.

## Update your content

Most profile content is in `data.js`. Edit the relevant text or add another object to the appropriate array:
- `experience`
- `education`
- `publications`
- `projects`
- `certifications`
- `skillGroups`

Keep commas between array items and put text inside quotation marks. For publication links, add a DOI or full URL in `doi`.

### Add your live Streamlit app

In `data.js`, find:

```js
featuredProject: {
  // ...
  url: ""
}
```

Paste your actual Streamlit URL between the quotation marks.

### Add your CV PDF (optional)

Upload your PDF into `assets/documents/`, then set `cvUrl` in `data.js`, for example:

```js
cvUrl: "assets/documents/Aashish_Jain_CV.pdf"
```

## Important checks before public launch

- Confirm the Master's degree institution names, dates and grades in `education`.
- Confirm your current DOE designation and joining date in `experience`.
- Verify publication titles, journal names, indexing status and DOI links.
- Add the exact live Streamlit app URL.
- Review contact details before publishing. This site is public.
- The portfolio source is public because this is a free GitHub Pages user site. Do not add private application source code, student records, passwords, API keys or confidential information.

## Local preview

Open `index.html` in a browser. For a local web server, you may use Python's built-in server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
