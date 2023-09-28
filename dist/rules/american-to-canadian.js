"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = require("../data/data.json");
const americanToCanadian = {};
for (let [key, value] of Object.entries(data_json_1.canadianToAmerican)) {
    americanToCanadian[value] = key;
}
const rule = {
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
            Identifier(node) {
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
