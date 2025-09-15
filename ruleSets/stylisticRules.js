import lucid from 'eslint-config-lucid';

/**
 * ESLint rules for [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin).
 *
 * @namespace @stylistic
 * @property files - .ts, .tsx
 **/
export default {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	rules: {
		...lucid[2].rules,

		/**
		 * @see {@link https://eslint.style/rules/type-annotation-spacing}
		 *
		 * @property @stylistic/type-annotation-spacing=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-annotation-spacing': 'error',

		/**
		 * @see {@link https://eslint.style/rules/member-delimiter-style}
		 *
		 * @property @stylistic/member-delimiter-style=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/member-delimiter-style': 'error',

		/**
		 * This rule enforces consistent spacing inside TypeScript type generics.
		 * @see {@link https://eslint.style/rules/type-generic-spacing}
		 *
		 * @property @stylistic/type-generic-spacing=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-generic-spacing': 'error',

		/**
		 * Expect space before the type declaration in the named tuple.
		 * @see {@link https://eslint.style/rules/type-named-tuple-spacing}
		 *
		 * @property @stylistic/type-named-tuple-spacing=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-named-tuple-spacing': 'error'
	}
};
