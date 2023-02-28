import typescriptRules from './ruleSets/typescriptRules.js';

/**
 * @name Disclaimer
 * @private
 * @summary
 *
 * Lucid only supports the new flat config that shipped with ESLint v8.21.0
 * which is still considered experimental.
 */

/**
 * @name Installation
 * @private
 * @summary
 *
 * Then add Lucid to your eslint.config.js configuration file.
 *
 * @example
 * ```javascript
 * import lucid from 'eslint-config-lucid';
 *
 * export default [
 * 	...lucid,
 * 	// ... other rule sets.
 * ];
 * ```
 */

const lucidTypescriptConfig = [
	typescriptRules
];

export default lucidTypescriptConfig;
