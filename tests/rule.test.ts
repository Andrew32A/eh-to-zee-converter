import { RuleTester } from "eslint";
import rule from "../src/rules/canadian-to-american"; // ts(1192): Had to use ES6 import syntax (module.exports = rule;) in canadian-to-american.ts to get package to work. Tests still pass though.

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2020,
  },
});

type TestCase = {
  code: string;
  errors?: {
    message: string;
  }[];
  output?: string;
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
  ] as TestCase[],
});
