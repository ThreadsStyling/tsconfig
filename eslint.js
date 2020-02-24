module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: ['prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    /**
     * Require that member overloads be consecutive
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error', // DONE
    /**
     * Bans specific types from being used
     */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: 'Avoid using the `Object` type. Did you mean `object`?',
          Function:
            'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          Number: 'Avoid using the `Number` type. Did you mean `number`?',
          String: 'Avoid using the `String` type. Did you mean `string`?',
          Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
        },
      },
    ],
    /**
     * Requires using either `T[]` or `Array<T>` for arrays
     */
    '@typescript-eslint/array-type': ['error', {default: 'array'}],
    /**
     * Disallows awaiting a value that is not a Thenable
     */
    '@typescript-eslint/await-thenable': 'warn',
    /**
     * Bans // @ts-<directive> comments from being used
     */
    '@typescript-eslint/ban-ts-comment': 'off',
    /**
     * Enforces consistent usage of type assertions
     */
    '@typescript-eslint/consistent-type-assertions': ['error', {assertionStyle: 'as'}],
    /**
     * Consistent with type definition either `interface` or `type`
     */
    '@typescript-eslint/consistent-type-definitions': 'off',
    /**
     * Require explicit return types on functions and class methods
     */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    /**
     * Require explicit accessibility modifiers on class properties and methods
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',
    /**
     * Require explicit return and argument types on exported functions' and classes' public class methods
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /**
     * Require a specific member delimiter style for interfaces and type literals
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    /**
     * Require a consistent member declaration order
     */
    '@typescript-eslint/member-ordering': 'off',
    /**
     * Enforces naming conventions for everything across a codebase
     */
    '@typescript-eslint/naming-convention': 'error',
    /**
     * Disallow the delete operator with computed key expressions
     */
    '@typescript-eslint/no-dynamic-delete': 'off',
    /**
     * 	Disallow the declaration of empty interfaces
     */
    '@typescript-eslint/no-empty-interface': 'error',
    /**
     * Disallow usage of the `any` type
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * Disallow extra non-null assertion
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    /**
     * Forbids the use of classes as namespaces
     */
    '@typescript-eslint/no-extraneous-class': 'error',
    /**
     * Requires Promise-like values to be handled appropriately
     */
    '@typescript-eslint/no-floating-promises': 'error',
    /**
     * Disallow iterating over an array with a for-in loop
     */
    '@typescript-eslint/no-for-in-array': 'error',
    /**
     * Disallow the use of `eval()`-like methods
     */
    '@typescript-eslint/no-implied-eval': 'error',
    /**
     * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
     */
    '@typescript-eslint/no-inferrable-types': 'warn',
    /**
     * Enforce valid definition of `new` and `constructor`
     */
    '@typescript-eslint/no-misused-new': 'error',
    /**
     * Avoid using promises in places not designed to handle them
     */
    '@typescript-eslint/no-misused-promises': 'error',
    /**
     * Disallow the use of custom TypeScript modules and namespaces
     */
    '@typescript-eslint/no-namespace': 'error',
    /**
     * Disallows using a non-null assertion after an optional chain expression
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    /**
     * Disallows non-null assertions using the `!` postfix operator
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * Disallow the use of parameter properties in class constructors
     */
    '@typescript-eslint/no-parameter-properties': 'error',
    /**
     * Disallow the use of parameter properties in class constructors
     */
    '@typescript-eslint/no-require-imports': 'warn',
    /**
     * Disallow aliasing `this`
     */
    '@typescript-eslint/no-this-alias': 'error',
    /**
     * Disallow throwing literals as exceptions
     */
    '@typescript-eslint/no-throw-literal': 'error',
    /**
     * Disallow the use of type aliases
     */
    '@typescript-eslint/no-type-alias': 'off',
    /**
     * Flags unnecessary equality comparisons against boolean literals
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    /**
     * Prevents conditionals where the type is always truthy or always falsy
     */
    '@typescript-eslint/no-unnecessary-condition': 'error',
    /**
     * Warns when a namespace qualifier is unnecessary
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    /**
     * Enforces that type arguments will not be used if not required
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    /**
     * Warns if a type assertion does not change the type of an expression
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    /**
     * Disallow unused variables and arguments
     */
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    /**
     * Disallows the use of require statements except in import statements
     */
    '@typescript-eslint/no-var-requires': 'error',
    /**
     * Prefer usage of `as const` over literal type
     */
    '@typescript-eslint/prefer-as-const': 'off',
    /**
     * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
     */
    '@typescript-eslint/prefer-for-of': 'error',
    /**
     * Use function types instead of interfaces with call signatures
     */
    '@typescript-eslint/prefer-function-type': 'off',
    /**
     * Enforce `includes` method over `indexOf` method
     */
    '@typescript-eslint/prefer-includes': 'off',
    /**
     * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /**
     * Enforce the usage of the nullish coalescing operator instead of logical chaining
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    /**
     * Prefer using concise optional chain expressions instead of chained logical ands
     */
    '@typescript-eslint/prefer-optional-chain': 'error',
    /**
     * Requires that private members are marked as `readonly` if they're never modified outside of the constructor
     */
    '@typescript-eslint/prefer-readonly': 'error',
    /**
     * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
    /**
     * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    /**
     * Requires any function or method that returns a Promise to be marked async
     */
    '@typescript-eslint/promise-function-async': 'error',
    /**
     * Requires `Array#sort` calls to always provide a `compareFunction`
     */
    '@typescript-eslint/require-array-sort-compare': 'off',
    /**
     * When adding two variables, operands must both be of type `number` or of type `string`
     */
    '@typescript-eslint/restrict-plus-operands': 'error',
    /**
     * Enforce template literal expressions to be of string type
     */
    '@typescript-eslint/restrict-template-expressions': 'off',
    /**
     * Restricts the types allowed in boolean expressions
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
    /**
     * Exhaustiveness checking in switch with union type
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    /**
     * Sets preference level for triple slash directives versus ES6-style import declarations
     */
    '@typescript-eslint/triple-slash-reference': ['error', {types: 'prefer-import'}],
    /**
     * Require consistent spacing around type annotations
     */
    '@typescript-eslint/type-annotation-spacing': 'off', // Prettier
    /**
     * Requires type annotations to exist
     */
    '@typescript-eslint/typedef': 'off',
    /**
     * Enforces unbound methods are called with their expected scope
     */
    '@typescript-eslint/unbound-method': 'off',
    /**
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
