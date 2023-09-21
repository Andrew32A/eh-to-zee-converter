import { Rule } from "eslint";
// import data = require("./data.json");

const canadianToAmerican: Record<string, string> = {
  colour: "color",
  neighbour: "neighbor",
  honour: "honor",
  favourite: "favorite",
  travelling: "traveling",
  theatre: "theater",
  centre: "center",
  defence: "defense",
  plough: "plow",
  programme: "program",
  enrol: "enroll",
  cancelled: "canceled",
  licence: "license",
  offence: "offense",
  aerobics: "aerobic",
  analogue: "analog",
  dialogue: "dialog",
  fulfil: "fulfill",
  jewellery: "jewelry",
  mould: "mold",
  practise: "practice",
  saviour: "savior",
  tumour: "tumor",
  ageing: "aging",
  behaviour: "behavior",
  fibre: "fiber",
  labelling: "labeling",
  meagre: "meager",
  odour: "odor",
  utilise: "utilize",
  vigour: "vigor",
  worshipping: "worshiping",
  armour: "armor",
  // add other word mappings as needed
};

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
      Identifier(node: Rule.Node) {
        const americanSpelling = canadianToAmerican[node.name];
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

export default rule;
