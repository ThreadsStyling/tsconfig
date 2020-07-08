# tsconfig

ThreadsStyling tsconfig, tslint, prettier etc. configs. These shared configs are used to set up our TypeScript projects.

## ESLint

To use Threads' eslint config, install eslint, the typescript parser, and the required plugins:

```sh
yarn add -D @threads/tsconfig eslint
```

In `package.json` add:

```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint -c @threads/tsconfig/.eslintrc --ext .tsx,.ts ./src/**/*"
    ...
  }
  ...
}
```

## TypeScript Config

To use Threads' tsconfig as your default config. Install `typescript` via:

```sh
yarn add -D @threads/tsconfig typescript
```

and add the following `tsconfig.json` in your project's root directory:

```json
{
  "extends": "@threads/tsconfig",
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

### TypesScript Config options you may want to enable/disable

Compiler Options:

- `experimentalDecorators` - Enables experimental support for ES decorators (we default this to `false`)
- `importHelpers` - If you make `tslib` a dependency, you can tell typescript to import helpers from there, instead of inlining them in every file. Because we target ES2018, there are very few helpers (we default this to `false`)
- `esModuleInterop` - enables `import foo from './foo';` to interop with CommonJS modules. You can disable this and use `import foo = require('./foo');` to avoid the extra helper being inserted in your code (we default this to `true`)
- `noEmitOnError` - prevents emitting output when errors are reported. This is set to `false` so you can test your code even if it doesn't typecheck. (we default this to `false`)
- `declaration` - you can skip generating declaration files by setting this to `false` if you're not going to publish your code as a library (we default this to `true`)

You may want to ignore type checking in your tests:

```json
{
  "exclude": ["node_modules", "lib", "src/__tests__", "src/**/__tests__/**/*.*", "*.test.ts"]
}
```

## TSLint Config

To use Threads' tslint as your default config. Install `tslint` via:

```sh
yarn add -D @threads/tsconfig tslint
```

and add the following `tslint.json` in your project's root directory:

```json
{
  "extends": "@threads/tsconfig/tslint"
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

### Configure Linting

You can enable or disable tslint rules on a per project basis by adding `"rule-name": false` in `tslint.json`'s `"rules"` object. You can also disable a lint rule for an individual statement using `// tslint:disable-next-line:object-literal-sort-keys` in your code. You can use `// tslint:disable` to disable all tslint rules for an entire file. See https://palantir.github.io/tslint/usage/rule-flags/ for more on this.

You can find a complete list of what each rule means here: https://palantir.github.io/tslint/rules/

## Prettier Config

To use Threads' prettier as your default config. Install `prettier` via:

```sh
yarn add -D @threads/tsconfig prettier
```

and add the following `prettier.config.js` in your project's root directory:

```json
module.exports = require('@threads/tsconfig/prettier');
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

## Husky / Lint-Staged / Commit Lint

We recommend using husky with lint staged. To do this, run:

```sh
yarn add -D @threads/tsconfig @commitlint/cli tslint prettier husky lint-staged
```

add the following `commitlint.config.js` in your project's root directory:

```js
module.exports = require('@threads/tsconfig/commitlint');
```

and add the following to package.json. This will run prettier and tslint on just files that have changed, and enforce that commits all start with `feat:`/`fix:`/etc.

```json
{
  ...
    "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
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
