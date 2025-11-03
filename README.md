
# anhbui-portfolio

A minimal but bold portfolio for Anh Bui - built with React, Vite, Tailwind, and Framer Motion. Deploys to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Tailwind setup

Already configured. The important files are:
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`

## Resume

Place your PDF at `public/resume.pdf` so it displays in the Resume section and the Download button works.

## EmailJS

Edit the placeholders in `src/App.jsx` under the Contact section:
```js
serviceId: "REPLACE_WITH_EMAILJS_SERVICE_ID",
templateId: "REPLACE_WITH_EMAILJS_TEMPLATE_ID",
publicKey: "REPLACE_WITH_EMAILJS_PUBLIC_KEY",
```
Create a free EmailJS account and set template variables: `from_name`, `reply_to`, `message`.

## Deploy to GitHub Pages

This project is pre-configured to deploy to:
`https://buikhueanh.github.io/anhbui-portfolio/`

1. Initialize git and push:
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/buikhueanh/anhbui-portfolio.git
git push -u origin main
```

2. Build and deploy:
```bash
npm run deploy
```

GitHub Pages will serve from the `gh-pages` branch automatically.

## Notes
- Vite's `base` is set in `vite.config.js` to `/anhbui-portfolio/` which fixes asset paths for GitHub Pages.
- No server required. All static.
# anhbui-portfolio
