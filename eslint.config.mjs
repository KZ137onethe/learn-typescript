import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "lib",
    ignores: [],
    gitignore: true,
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    javascript: false,
    typescript: {
      overrides: {},
      tsconfigPath: "tsconfig.json",
    },
  },
  {
    rules: {
      "style/quote-props": ["error", "as-needed"],
      "style/max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
        },
      ],
      "prefer-const": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
);
