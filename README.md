# Pratham Dubey — Portfolio

Personal portfolio of **Pratham Brijendra Dubey**, AWS Certified Solutions Architect – Associate, Cloud Engineer and Technical Trainer (Mumbai).

Built with **React + Vite**. Fully responsive, animated (scroll reveals, typing effect, animated counters, live terminal, marquee), and respects "reduced motion" accessibility settings. No UI or animation libraries — just React and CSS.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## Edit your content

Everything — name, links, services, skills, experience, projects, certifications — is in **`src/data.js`**.

- Add your LinkedIn and GitHub URLs in `profile.linkedin` / `profile.github` (empty links are hidden).
- Add project links in each project's `link` field to show an "open" icon.
- Replace `public/Pratham_Dubey_Resume.pdf` to update the "Download Resume" button.

Colours and animations are in `src/styles.css` (see the tokens at the top).

## Put it on GitHub and publish it free (GitHub Pages)

1. Create a new **public** repository on GitHub, e.g. `portfolio`.
2. Upload this project (or use git):
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Wait about a minute. Your site will be live at  
   `https://<your-username>.github.io/portfolio/`

Every time you push a change, the site redeploys automatically (see `.github/workflows/deploy.yml`).

> Tip: name the repository `<your-username>.github.io` to get the shorter address `https://<your-username>.github.io/`.

### Other free hosts
Netlify or Vercel: import the repo, build command `npm run build`, output folder `dist`.

## Project structure

```
├── public/                 # favicon + resume PDF
├── src/
│   ├── components/         # Navbar, Hero, Sections, Icon
│   ├── data.js             # ← all your content
│   ├── hooks.js            # scroll reveal, typing, counters
│   ├── styles.css          # design + animations + responsive rules
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/      # auto-deploy to GitHub Pages
├── index.html              # page title + SEO tags
└── vite.config.js
```

## Contact

- Email: prathamdubey03@gmail.com
- Phone / WhatsApp: +91 9579832094
