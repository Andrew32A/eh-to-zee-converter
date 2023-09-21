const RuleTester = require("eslint").RuleTester;
import rule from "../src/canadianToAmerican"; // TODO: need to fix import

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

ruleTester.run("no-canadian-words", rule, {
  valid: [
    {
      code: `const color = "blue";`,
    },
    {
      code: `const center = "middle";`,
    },
  ],
  invalid: [
    {
      code: `const colour = "blue";`,
      errors: [
        {
          message: "Use American spelling. Change 'colour' to 'color'.",
        },
      ],
      output: `const color = "blue";`,
    },
    {
      code: `const centre = "middle";`,
      errors: [
        {
          message: "Use American spelling. Change 'centre' to 'center'.",
        },
      ],
      output: `const center = "middle";`,
    },
  ],
});
