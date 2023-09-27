import { Rule } from "eslint";
import { canadianToAmerican } from "../data/data.json";

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Convert Canadian spellings to American",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
  },

  create: function (context) {
    return {
      Identifier(node: any) {
        const americanSpelling = canadianToAmerican[node.name];
        if (americanSpelling) {
          context.report({
            node: node,
            message: `Change '${node.name}' to '${americanSpelling}'.`,
            fix: function (fixer) {
              return fixer.replaceText(node, americanSpelling);
            },
          });
        }
      },
    };
  },
};

export default rule;
module.exports = rule;
