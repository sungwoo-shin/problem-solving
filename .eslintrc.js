module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:prettier/recommended"],
  rules: {
    curly: ["error", "all"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "no-array-constructor": "error",
    //
    "no-console": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "func-names": "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
