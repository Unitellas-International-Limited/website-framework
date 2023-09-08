module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "eslint:recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    // "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "prettier.config.js",
    "tailwind.config.js",
    "postcss.config.js",
    "next.config.js",
  ],
};
