// src/setupTests.js


// Mock global matchMedia BEFORE importing any component
globalThis.matchMedia = globalThis.matchMedia || function () {
  return {
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  };
};
