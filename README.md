# ❄️ React Snowfall

A gentle snowfall particle effect for the web

A lightweight React component that renders 100 CSS-animated snowflakes drifting down the screen with randomised sizes, speeds, and opacity.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Configuration](#-configuration) • [Technical Details](#-technical-details) • [License](#-license)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS Animations](https://img.shields.io/badge/CSS-Animations-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### Core Animation
- ❄️ **100 Snowflakes** — Each with a unique size, speed, and opacity
- 🌨️ **Gentle Drift** — Snowflakes fall with a slight horizontal sway
- ✨ **Soft Glow** — Each flake has a subtle white drop-shadow
- 🔄 **Infinite Loop** — Snowflakes continuously fall and reset

### Technical
- ⚡ **Pure CSS Animations** — No canvas, no WebGL, no JavaScript animation loops
- 🪶 **Lightweight** — Zero external animation dependencies
- 📱 **Responsive** — Full viewport coverage, works on any screen size
- 🚫 **Non-intrusive** — `pointer-events: none` overlay, doesn't interfere with page interaction

---

## 🎬 Demo

### [🔗 Live Demo](https://BenBrady96.github.io/react-snowfall/)

---

## 📦 Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/BenBrady96/react-snowfall.git
cd react-snowfall

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/react-snowfall/](http://localhost:5173/react-snowfall/) to view it locally.

---

## ⚙️ Configuration

### Snowflake Properties

Each of the 100 snowflakes is randomly generated with the following ranges:

| Property | Range | Description |
|---|---|---|
| Size | 2–7px | Diameter of each snowflake |
| Fall Duration | 2–5s | Time to fall from top to bottom |
| Delay | 0–5s | Staggered start time |
| Opacity | 0–1 | Transparency variation |
| Horizontal Position | 0–100% | Random placement across the viewport |

### Customising

Edit `src/Snowfall.jsx` to adjust:
- **Snowflake count** — Change `length: 100` to your preferred count
- **Size range** — Modify the `* 5 + 2` calculation on `size`
- **Fall speed** — Adjust the `* 3 + 2` calculation on `animationDuration`
- **Stagger** — Change the `* 5` multiplier on `animationDelay`

Edit `src/Snowfall.css` to adjust:
- **Glow** — Modify the `filter: drop-shadow()` value on `.snowflake`
- **Drift** — Change the `translateX` values in the `fall` keyframes

---

## 🏗️ Technical Details

### Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component rendering & state |
| Vite 7 | Build tooling & dev server |
| CSS Keyframes | Snowflake fall animation |
| gh-pages | One-command deployment |

### Project Structure

```
react-snowfall/
├── src/
│   ├── Snowfall.jsx     # Snowflake generator component
│   ├── Snowfall.css     # Fall animation & snowflake styles
│   ├── App.jsx          # Root app component
│   ├── index.css        # Global styles (dark winter background)
│   └── main.jsx         # React entry point
├── index.html           # HTML shell
├── vite.config.js       # Vite config with GitHub Pages base path
└── package.json         # Dependencies & deploy scripts
```

### How It Works

1. **On mount**, `Snowfall` generates 100 snowflake objects with randomised properties
2. Each snowflake is rendered as a tiny white `<div>` with `border-radius: 50%` and a glow filter
3. A single **CSS `fall` keyframe** moves each flake from above the viewport to below it with a slight horizontal drift
4. Randomised `animationDuration` and `animationDelay` ensure no two flakes move identically
5. All animation is handled by the browser's compositor — **zero JavaScript runs per frame**

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 📧 Contact

**BenBrady96** — [GitHub](https://github.com/BenBrady96)
