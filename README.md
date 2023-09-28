# Eh to Zee Converter

<img src="https://github.com/Andrew32A/eh-to-zee-converter/blob/main/images/screenshot.png" align="center">

![npm](https://img.shields.io/npm/v/eslint-plugin-eh-to-zee-converter)

This is a custom eslint plugin that adds a rule to check and convert Canadian English to American English and vice versa! It's published to [NPM](https://www.npmjs.com/package/eslint-plugin-eh-to-zee-converter) for the public to download and use.

## Installation

You'll first need to install [ESLint](http://eslint.org) if you haven't done so already:

```bash
npm install eslint --save-dev
```

Next, install `eh-to-zee-converter`:

```bash
npm install --save-dev eslint-plugin-eh-to-zee-converter
```

## Usage

Add `eh-to-zee-converter` to the plugins section of your `.eslintrc` file and `eh-to-zee-converter/canadian-to-american` OR `eh-to-zee-converter/american-to-canadian` to the list of rules. The `eslint-plugin-` prefix is optional:

```json
{
  "plugins": ["eh-to-zee-converter"],
  "rules": {
    "eh-to-zee-converter/canadian-to-american": "error"
  }
}
```

If you want to modify or add more rules in the src, make sure to build the dist folder with the following command:

```bash
tsc
```

## Publishing

```bash
npm publish --access public
```
