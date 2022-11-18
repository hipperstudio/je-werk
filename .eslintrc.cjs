module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["jsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsdoc/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
