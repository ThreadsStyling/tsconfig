# tsconfig

Forbes Lindesay's tsconfig, tslint, prettier etc. configs. These shared configs are used to set up our TypeScript projects.

## TypeScript Config

To use my tsconfig as your default config. Install `typescript` via:

```sh
yarn add -D @forbeslindesay/tsconfig typescript
```

and add the following `tsconfig.json` in your project's root directory:

```json
{
  "extends": "@forbeslindesay/tsconfig",
  "compilerOptions": {
    "outDir": "lib"
  },
  "include": ["src"]
}
```

In `package.json` add:

```json
{
  ...
  "scripts": {
    ...
    "build": "tsc"
    ...
  }
  ...
}
```

## TSLint Config

To use my tslint as your default config. Install `tslint` via:

```sh
yarn add -D @forbeslindesay/tsconfig tslint
```

and add the following `tslint.json` in your project's root directory:

```json
{
  "extends": "@forbeslindesay/tsconfig/tslint"
}
```

In `package.json` add:

```json
{
  ...
  "scripts": {
    ...
    "lint": "tslint './src/**/*.{ts,tsx}' -t verbose -p ."
    ...
  }
  ...
}
```

## Prettier Config

To use my prettier as your default config. Install `prettier` via:

```sh
yarn add -D @forbeslindesay/tsconfig prettier
```

and add the following `prettier.config.js` in your project's root directory:

```json
module.exports = require('@forbeslindesay/tsconfig/prettier');
```

In `package.json` add:

```json
{
  ...
  "scripts": {
    ...
    "prettier:write": "prettier --ignore-path .gitignore --write './**/*.{md,json,yaml,js,jsx,ts,tsx}'",
    "prettier:check": "prettier --ignore-path .gitignore --list-different './**/*.{md,json,yaml,js,jsx,ts,tsx}'",
    ...
  }
  ...
}
```

## Husky / Lint-Staged

We recommend using husky with lint staged. To do this, run:

```sh
yarn add -D @forbeslindesay/tsconfig tslint prettier husky lint-staged
```

and add the following to package.json. This will run prettier and tslint on just files that have changed, and enforce that commits all start with `feat:`/`fix:`/etc.

```json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --write",
      "tslint -t verbose -p .",
      "git add"
    ],
    "*.{md,json,yaml,js,jsx}": [
      "prettier --write",
      "git add"
    ]
  }
  ...
}
```

## License

MIT
