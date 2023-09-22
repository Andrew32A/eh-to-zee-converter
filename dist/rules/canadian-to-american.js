"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = require("../data/data.json");
const rule = {
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
            Identifier(node) {
                const americanSpelling = data_json_1.canadianToAmerican[node.name];
                if (americanSpelling) {
                    context.report({
                        node: node,
                        message: `Use American spelling. Change '${node.name}' to '${americanSpelling}'.`,
                        fix: function (fixer) {
                            return fixer.replaceText(node, americanSpelling);
                        },
                    });
                }
            },
        };
    },
};
module.exports = rule;
