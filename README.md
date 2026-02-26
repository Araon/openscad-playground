# OpenSCAD Playground

A web-based OpenSCAD editor with WASM-powered rendering. Write and preview 3D models directly in your browser.

[![OpenSCAD](https://img.shields.io/badge/OpenSCAD-WASM-5CBDD8?style=flat&logo=openjdk)](https://openscad.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-GPL2+-A42C2C?style=flat)](LICENSE)

---

## Demo

[Open the Demo](https://3d.araon.space)

![Preview](https://github.com/user-attachments/assets/58305f27-7e95-4c56-9cd7-0d766e0a21ae)

---

## Features

| Feature | Description |
|---------|-------------|
| **Live Preview** | Automatic preview on edit (F5), full rendering on Ctrl+Enter (or F6) |
| **Customizer** | Full support for [OpenSCAD Customizer](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Customizer) |
| **Syntax Highlighting** | Monaco Editor with OpenSCAD language support |
| **Autocomplete** | Auto-complete imports, functions, and modules |
| **Libraries** | Ships with BOSL2, NopSCADlib, and more |
| **Responsive** | Works on desktop and mobile |
| **PWA Support** | Install as a web app, works offline |
| **Drag & Drop** | Drop .scad, .stl, .off, or .zip files directly |

---

## Quick Start

### Prerequisites

- Node.js >= 18.12.0
- npm
- git
- zip

### Development

```bash
# Install dependencies
npm install

# Download WASM and build libraries (first time only)
npm run build:libs

# Start dev server
npm run start
# Visit http://localhost:4000
```

### Production Build

```bash
# Build everything
npm run build:libs
npm run build

# Preview production build
npm run start:production
# Visit http://localhost:3000/dist/
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start development server (port 4000) |
| `npm run build` | Build for production |
| `npm run build:libs` | Download WASM + build libraries |
| `npm run build:all` | Build libs + production bundle |
| `npm run typecheck` | Run TypeScript type check |
| `npm run lint` | Run ESLint |
| `npm run test:e2e` | Run E2E tests |

---

## Deployment

### Environment Variables

Create a `.env` file to configure deployment:

```bash
# Set your deployment URL
PUBLIC_URL=https://your-domain.com/
```

### Build and Deploy

```bash
# Build
npm run build:libs
npm run build

# The dist/ folder contains static files
# Deploy to any static host (GitHub Pages, Vercel, Netlify, etc.)
```

### Deployment Options

- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Vercel/Netlify**: Connect repo, set build command to `npm run build:all`
- **Custom Server**: Serve `dist/` with Nginx/Apache

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `F5` | Preview render |
| `F6` | Full render |
| `F7` | Export |

---

## Project Structure

```
openscad-playground/
├── src/
│   ├── components/       # React UI components
│   ├── state/            # State management
│   ├── runner/           # OpenSCAD WASM worker
│   ├── language/         # Monaco editor support
│   ├── io/               # Import/export utilities
│   ├── fs/               # BrowserFS integration
│   └── wasm/             # OpenSCAD WASM binaries
├── tests/
│   └── e2e.test.js       # E2E tests
├── public/               # Static assets
└── dist/                 # Build output
```

---

## Adding OpenSCAD Libraries

1. Update `libs-config.json` with library metadata:

```json
{
  "name": "LibraryName",
  "repo": "https://github.com/user/repo.git",
  "branch": "main",
  "zipIncludes": ["*.scad", "LICENSE"],
  "zipExcludes": ["**/tests/**"]
}
```

2. Add to `src/fs/zip-archives.ts`

3. Update `LICENSE.md` with library license

---

## Tech Stack

- **OpenSCAD WASM** - 3D modeling engine
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Monaco Editor** - Code editing
- **PrimeReact** - UI components
- **Webpack** - Bundling

---

## License

See [LICENSE](./LICENSE) for details. OpenSCAD is GPL2+.

---

## Credits

- [OpenSCAD](https://openscad.org) - The original OpenSCAD
- [@DSchroer](https://github.com/DSchroer/openscad-wasm) - WASM port
- [BOSL2](https://github.com/BelfrySCAD/BOSL2) - Included library
- [NopSCADlib](https://github.com/nophead/NopSCADlib) - Included library
