import { RuleTester } from "eslint";
const rule = require("../src/rules/canadian-to-american");

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2020,
  },
});

type TestCaseError = {
  message: string;
};

type InvalidTestCase = {
  code: string;
  errors: (string | TestCaseError)[];
  output: string;
};

ruleTester.run("canadian-to-american", rule, {
  valid: [
    `const color = "red";`,
    `let program = "ESLint";`,
    `function behavior() {}`,
  ] as string[],
  invalid: [
    {
      code: `const colour = "red";`,
      errors: [
        {
          message: "Change 'colour' to 'color'.",
        },
      ],
      output: `const color = "red";`,
    },
    {
      code: `let programme = "ESLint";`,
      errors: [
        {
          message: "Change 'programme' to 'program'.",
        },
      ],
      output: `let program = "ESLint";`,
    },
    {
      code: `function behaviour() {}`,
      errors: [
        {
          message: "Change 'behaviour' to 'behavior'.",
        },
      ],
      output: `function behavior() {}`,
    },
  ] as InvalidTestCase[],
});
