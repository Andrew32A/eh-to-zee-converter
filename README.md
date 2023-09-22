# Eh to Zee Converter

## Installation

npm:

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
