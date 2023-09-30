import { Rule } from "eslint";
import { canadianToAmerican } from "../data/data.json";

const americanToCanadian: { [key: string]: string } = {};

for (let [key, value] of Object.entries(canadianToAmerican)) {
  americanToCanadian[value] = key;
}

// sort words by length so that we can replace the longest words first
const sortedAmericanSpellings = Object.keys(americanToCanadian).sort(
  (a, b) => b.length - a.length
);

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Convert American spellings to Canadian",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
  },

  create: function (context) {
    return {
      Identifier(node: any) {
        for (const americanSpelling of sortedAmericanSpellings) {
          const lowercasedNodeName = node.name.toLowerCase();
          const regex = new RegExp(
            `(?<=\\b|_|^|(?<=[a-z])[A-Z])${americanSpelling}(?=\\b|_|$)`,
            "i"
          );

          if (regex.test(lowercasedNodeName)) {
            const match = node.name.match(regex);
            let canadianSpelling = americanToCanadian[americanSpelling];

            if (
              match &&
              match[0].charAt(0).toUpperCase() === match[0].charAt(0)
            ) {
              canadianSpelling =
                canadianSpelling.charAt(0).toUpperCase() +
                canadianSpelling.slice(1);
            }

            const fixedName = node.name.replace(regex, canadianSpelling);

            context.report({
              node: node,
              message: `Change '${node.name}' to '${fixedName}'.`,
              fix: function (fixer) {
                return fixer.replaceText(node, fixedName);
              },
            });
            break;
          }
        }
      },
    };
  },
};

module.exports = rule;
