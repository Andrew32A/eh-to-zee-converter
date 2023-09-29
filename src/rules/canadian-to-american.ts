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
        for (const canadianSpelling in canadianToAmerican) {
          const lowercasedNodeName = node.name.toLowerCase();
          if (lowercasedNodeName.includes(canadianSpelling.toLowerCase())) {
            const regex = new RegExp(canadianSpelling, "i");

            const match = node.name.match(regex);
            let americanSpelling = canadianToAmerican[canadianSpelling];

            if (
              match &&
              match[0].charAt(0).toUpperCase() === match[0].charAt(0)
            ) {
              americanSpelling =
                americanSpelling.charAt(0).toUpperCase() +
                americanSpelling.slice(1);
            }

            const fixedName = node.name.replace(regex, americanSpelling);

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
