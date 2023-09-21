const RuleTester = require("eslint").RuleTester;
const rule = require("../src/canadianToAmerican.ts").default;

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2020,
  },
});

ruleTester.run("canadian-to-american", rule, {
  valid: [
    `const color = "red";`,
    `let program = "ESLint";`,
    `function behavior() {}`,
  ],
  invalid: [
    {
      code: `const colour = "red";`,
      errors: [
        {
          message: "Use American spelling. Change 'colour' to 'color'.",
        },
      ],
      output: `const color = "red";`,
    },
    {
      code: `let programme = "ESLint";`,
      errors: [
        {
          message: "Use American spelling. Change 'programme' to 'program'.",
        },
      ],
      output: `let program = "ESLint";`,
    },
    {
      code: `function behaviour() {}`,
      errors: [
        {
          message: "Use American spelling. Change 'behaviour' to 'behavior'.",
        },
      ],
      output: `function behavior() {}`,
    },
  ],
});
