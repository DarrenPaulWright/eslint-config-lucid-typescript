import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus';
import lucid from '../../eslint-config-lucid/index.js';

const stylisticJs = lucid[2].rules;

/**
 * ESLint rules for [@stylistic/eslint-plugin-plus](https://www.npmjs.com/package/@stylistic/eslint-plugin-plus).
 *
 * @namespace @stylistic/plus
 * @property files .ts, .tsx
 **/
export default {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		'@stylistic/plus': stylisticPlusPlugin
	},
	rules: {
		'@stylistic/plus/indent-binary-ops': stylisticJs['@stylistic/plus/indent-binary-ops'],

		/**
		 * This rule enforces consistent spacing inside TypeScript type generics.
		 * @see {@link https://eslint.style/rules/plus/type-generic-spacing}
		 *
		 * @property @stylistic/plus/type-generic-spacing=error - Readability.
		 * @memberof @stylistic/plus
		 **/
		'@stylistic/plus/type-generic-spacing': 'error',

		/**
		 * Expect space before the type declaration in the named tuple.
		 * @see {@link https://eslint.style/rules/plus/type-named-tuple-spacing}
		 *
		 * @property @stylistic/plus/type-named-tuple-spacing=error - Readability.
		 * @memberof @stylistic/plus
		 **/
		'@stylistic/plus/type-named-tuple-spacing': 'error'
	}
};
