# Eh to Zee Converter

![npm](https://img.shields.io/npm/v/eslint-plugin-eh-to-zee-converter)

https://www.npmjs.com/package/eslint-plugin-eh-to-zee-converter

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

Add `eh-to-zee-converter` to the plugins section of your `.eslintrc` file and `eh-to-zee-converter/canadian-to-american` to the list of rules. The `eslint-plugin-` prefix is optional:

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
