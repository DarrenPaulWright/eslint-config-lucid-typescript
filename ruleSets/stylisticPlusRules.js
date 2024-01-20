import lucid from 'eslint-config-lucid';

const stylisticPlus = lucid[3].rules;

/**
 * ESLint rules for [@stylistic/eslint-plugin-plus](https://www.npmjs.com/package/@stylistic/eslint-plugin-plus).
 *
 * @namespace @stylistic/plus
 * @property files - .ts, .tsx
 **/
export default {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	rules: {
		'@stylistic/plus/indent-binary-ops': stylisticPlus['@stylistic/plus/indent-binary-ops'],

		/**
		 * This rule enforces consistent spacing inside TypeScript type generics.
		 * @see {@link https://eslint.style/rules/plus/type-generic-spacing}
		 *
		 * @property @stylistic/plus/type-generic-spacing=error - Readability.
		 * @memberOf @stylistic/plus
		 **/
		'@stylistic/plus/type-generic-spacing': 'error',

		/**
		 * Expect space before the type declaration in the named tuple.
		 * @see {@link https://eslint.style/rules/plus/type-named-tuple-spacing}
		 *
		 * @property @stylistic/plus/type-named-tuple-spacing=error - Readability.
		 * @memberOf @stylistic/plus
		 **/
		'@stylistic/plus/type-named-tuple-spacing': 'error'
	}
};
