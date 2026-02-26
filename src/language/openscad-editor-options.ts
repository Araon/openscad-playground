// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default {
  lineNumbers: 'on',
  scrollBeyondLastLine: false,
  fontSize: 14,
  fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace",
  language: 'openscad',
  tabSize: 2,
  wordWrap: 'on',
  wrappingStrategy: 'advanced',
  minimap: { enabled: true, scale: 1 },
  smoothScrolling: true,
  cursorBlinking: 'smooth',
  cursorSmoothCaretAnimation: 'on',
  renderLineHighlight: 'all',
  bracketPairColorization: { enabled: true },
  suggest: {
    localityBonus: true,
    showStatusBar: true,
    preview: true,
  },
  codeLens: true,
  wordBasedSuggestions: "off",
} as monaco.editor.IStandaloneEditorConstructionOptions;
