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

## ESLint Config

To use my eslint as your default config. Install `eslint` via:

```sh
yarn add -D \
  eslint \
  eslint-plugin-import \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

and add the following `.eslintrc.js` in your project's root directory:

```js
module.exports = require('@forbeslindesay/tsconfig/eslint')({
  internalRegex: '^@my-name',
});
```

and add the following `.eslintrc-ts.js` in your project's root directory:

````js
module.exports = require('@forbeslindesay/tsconfig/eslint-ts')({
  internalRegex: '^@my-name',
});

In `package.json` add:

```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint --config .eslintrc-ts.js --no-eslintrc --ext .ts,.tsx src",
    "lint:fix": "eslint --fix --config .eslintrc-ts.js --no-eslintrc --ext .ts,.tsx src"
    ...
  }
  ...
}
````

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
yarn add -D @forbeslindesay/tsconfig prettier husky lint-staged
```

and add the following to package.json. This will run prettier on just files that have changed.

```json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{md,json,yaml,js,jsx,ts,tsx}": [
      "prettier --write",
      "git add"
    ]
  }
  ...
}
```

## License

MIT
