/*
These are our default linting rules for React projects.
*/

const config = require('./.eslintrc');

/*
 * Cover React and rules of hooks
 */
config.extends.push('plugin:react-hooks/recommended', 'plugin:react/recommended');

/*
 * We use TypeScript - we don't need prop types
 */
config.rules['react/prop-types'] = 'off';

/*
 * We use anonymous functions for components - having displayNames would be good,
 * but we don't want to change the entire code base
 */
config.rules['react/display-name'] = 'off';

/*
 * Enable ' in unescaped entities - it's safe and escaping it makes adding copy harder
 */
config.rules['react/no-unescaped-entities'] = ['error', {forbid: ['>', '}', '"']}];

/*
 * Make exhaustive deps mandatory
 */
config.rules['react-hooks/exhaustive-deps'] = 'error';

module.exports = config;
