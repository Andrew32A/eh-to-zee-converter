import { Rule } from "eslint";

const canadianToAmerican: Record<string, string> = {
  colour: "color",
  // Add other word mappings as needed
};

const rule: Rule.RuleModule = {
  create: function (context) {
    return {
      Identifier(node: Rule.Node) {
        if (node.type !== "Identifier") return;

        Object.keys(canadianToAmerican).forEach((canadian) => {
          if (node.name === canadian) {
            context.report({
              node: node,
              message: `Use American spelling. Change '${canadian}' to '${canadianToAmerican[canadian]}'.`,
              fix: function (fixer) {
                return fixer.replaceText(node, canadianToAmerican[canadian]);
              },
            });
          }
        });
      },
    };
  },
};

export default rule;
