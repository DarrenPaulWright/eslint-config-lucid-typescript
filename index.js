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
	typescriptRules,
	{
		files: [
			'**/*.test.ts',
			'**/*.spec.ts'
		],
		rules: {
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/init-declarations': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': 'off'
		}
	}
];

export default lucidTypescriptConfig;
