module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Dodaj tę linię
    "prettier", // Dodaj tę linię
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier", "tailwindcss"], // Dodaj 'prettier' i 'tailwindcss'
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error", // Dodaj tę linię
    "tailwindcss/classnames-order": "warn", // Dodaj tę linię
    "tailwindcss/enforces-shorthand": "warn", // Dodaj tę linię
    "tailwindcss/no-contradicting-classname": "error", // Dodaj tę linię
  },
};
