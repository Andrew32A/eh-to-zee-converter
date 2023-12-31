import { RuleTester } from "eslint";
const ruleCanadianToAmerican = require("../src/rules/canadian-to-american");
const ruleAmericanToCanadian = require("../src/rules/american-to-canadian");

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

// canadian to american
ruleTester.run("canadian-to-american", ruleCanadianToAmerican, {
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
    {
      code: `const this_colour = "red";`,
      errors: [
        {
          message: "Change 'this_colour' to 'this_color'.",
        },
      ],
      output: `const this_color = "red";`,
    },
    {
      code: `const thisColour = "red";`,
      errors: [
        {
          message: "Change 'thisColour' to 'thisColor'.",
        },
      ],
      output: `const thisColor = "red";`,
    },
  ] as InvalidTestCase[],
});

// american to canadian
ruleTester.run("american-to-canadian", ruleAmericanToCanadian, {
  valid: [
    `const colour = "red";`,
    `let programme = "ESLint";`,
    `function behaviour() {}`,
  ] as string[],
  invalid: [
    {
      code: `const color = "red";`,
      errors: [
        {
          message: "Change 'color' to 'colour'.",
        },
      ],
      output: `const colour = "red";`,
    },
    {
      code: `let program = "ESLint";`,
      errors: [
        {
          message: "Change 'program' to 'programme'.",
        },
      ],
      output: `let programme = "ESLint";`,
    },
    {
      code: `function behavior() {}`,
      errors: [
        {
          message: "Change 'behavior' to 'behaviour'.",
        },
      ],
      output: `function behaviour() {}`,
    },
    {
      code: `const this_color = "red";`,
      errors: [
        {
          message: "Change 'this_color' to 'this_colour'.",
        },
      ],
      output: `const this_colour = "red";`,
    },
    {
      code: `const thisColor = "red";`,
      errors: [
        {
          message: "Change 'thisColor' to 'thisColour'.",
        },
      ],
      output: `const thisColour = "red";`,
    },
  ] as InvalidTestCase[],
});
