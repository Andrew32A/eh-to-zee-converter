import { Rule } from "eslint";
import { canadianToAmerican } from "../data/data.json";

const americanToCanadian: { [key: string]: string } = {};

for (let [key, value] of Object.entries(canadianToAmerican)) {
  americanToCanadian[value] = key;
}

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
        const canadianSpelling = americanToCanadian[node.name];
        if (canadianSpelling) {
          context.report({
            node: node,
            message: `Change '${node.name}' to '${canadianSpelling}'.`,
            fix: function (fixer) {
              return fixer.replaceText(node, canadianSpelling);
            },
          });
        }
      },
    };
  },
};

module.exports = rule;
