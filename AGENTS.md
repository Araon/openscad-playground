# AGENTS.md - OpenSCAD Playground Developer Guide

This file provides guidelines for agents working on this codebase.

## Project Overview

OpenSCAD Playground is a web-based OpenSCAD editor with WASM-powered rendering. It uses React 18, TypeScript, Monaco Editor, and PrimeReact UI components.

## Build Commands

### Development
```bash
npm install
npm run build:libs    # Download WASM and build OpenSCAD libraries (first time only)
npm run start         # Start dev server at http://localhost:4000
```

### Production
```bash
npm run build:all    # Build libs + production bundle
npm run start:production  # Serve production build at http://localhost:3000/dist/
```

### Testing
```bash
# Run all E2E tests (requires dev server running)
npm run test:e2e

# Run a single test by name pattern
npx jest --testNamePattern="load the default page"

# Run specific test file
npx jest tests/e2e.test.js

# Run with custom base URL
BASE_URL=http://localhost:4000/ npx jest --testNamePattern="test name"
```

Tests use `jest-puppeteer` preset with a 60-second timeout per test. Tests are located in `tests/e2e.test.js`.

## Code Style Guidelines

### TypeScript
- **Strict mode enabled**: All TypeScript compiler strict checks are on
- Use explicit types for function parameters and return values when not obvious
- Use `any` sparingly - prefer `unknown` if type is truly unknown

### File Naming
- Components: `PascalCase.tsx` (e.g., `EditorPanel.tsx`)
- Utilities/Modules: `camelCase.ts` (e.g., `utils.ts`, `app-state.ts`)
- Types/interfaces: `camelCase.ts` with `type` or `interface` suffix when appropriate

### Imports
- Use relative imports with file extensions: `import { Foo } from './foo.ts'`
- Group imports: React/core imports first, then local modules, then third-party
- Use path aliases via `baseUrl` in tsconfig (currently set to `src`)

### React Patterns
- Use functional components with hooks
- Prefer `useContext` over prop drilling for Model/FS state
- Use PrimeReact components for UI (Button, Dialog, Toast, etc.)
- Use PrimeFlex utility classes for styling (e.g., `flex`, `flex-column`, `p-2`)
- Inline styles via `style={{}}` for dynamic values only

### Error Handling
- Use try/catch with async/await for asynchronous operations
- Throw descriptive `Error` objects with context
- Display errors via PrimeReact Toast component or `model.setState({ error: ... })`

### State Management
- Use React `useState` for local component state
- Use the `Model` class (see `src/state/model.ts`) for global app state
- State is persisted via `StatePersister` interface

### Naming Conventions
- Variables/functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE` or `camelCase` with prefix (e.g., `PREDEFINED_ORBITS`)
- Interfaces/types: `PascalCase`
- CSS classes: follow PrimeFlex naming (e.g., `flex`, `opacity-animated`)

### Code Headers
This project contains code licensed under GPL2+ from Google. Include the license header:
```typescript
// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.
```

### Browser Compatibility
- Target: Modern browsers (last 1 Chrome, Firefox, Safari)
- WebWorker support required for OpenSCAD rendering

## Project Structure

```
src/
  components/     # React UI components
  state/          # TypeScript types and state management
  runner/         # OpenSCAD WASM worker and runner
  language/       # Monaco editor language support
  io/             # Import/export utilities
  fs/             # BrowserFS filesystem integration
  wasm/           # OpenSCAD WASM binaries
  index.tsx       # App entry point
tests/
  e2e.test.js     # Puppeteer E2E tests
```

## Key Technologies

- **React 18** with TypeScript
- **Monaco Editor** for code editing
- **PrimeReact** for UI components
- **PrimeFlex** for CSS utilities
- **Webpack** for bundling
- **Jest + Puppeteer** for E2E testing
- **OpenSCAD WASM** for 3D rendering

## Common Tasks

### Adding a new component
1. Create `src/components/NewComponent.tsx`
2. Import React and needed hooks
3. Use PrimeReact components for UI
4. Add to `App.tsx` if it's a top-level panel

### Running a specific E2E test
```bash
# Start dev server in one terminal
npm run start

# In another terminal, run a single test
npx jest --testNamePattern="can render cube"
```

### Building for production
```bash
npm run build:libs:clean  # Clean rebuild of libs
npm run build:all         # Full production build
```

## Notes

- The dev server runs on port 4000
- The production server runs on port 3000
- E2E tests require Chrome/Puppeteer to be installed
- WASM files are fetched from external sources during `build:libs`
