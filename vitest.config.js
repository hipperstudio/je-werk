import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["./vitest-setup.js"],
    environment: "jsdom",
    coverage: {
      all: true,
      include: ["src"],
      exclude: ["src/index.js"],
      lines: 50,
      statements: 50,
      functions: 50,
      branches: 50,
    },
  },
});
