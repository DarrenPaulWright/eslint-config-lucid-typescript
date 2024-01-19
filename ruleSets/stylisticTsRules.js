import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import lucid from '../../eslint-config-lucid/index.js';

const stylisticJs = lucid[2].rules;

/**
 * ESLint rules for [@stylistic/eslint-plugin-ts](https://www.npmjs.com/package/@stylistic/eslint-plugin-ts).
 * NOTE: Rules that re-implement rules from other plugins have the same settings as lucid and
 * are omitted from this page.
 *
 * @namespace @stylistic/ts
 * @property files - .ts, .tsx
 **/
export default {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		'@stylistic/ts': stylisticTsPlugin
	},
	rules: {
		'@stylistic/js/block-spacing': 'off',
		'@stylistic/ts/block-spacing': stylisticJs['@stylistic/js/block-spacing'],

		'@stylistic/js/brace-style': 'off',
		'@stylistic/ts/brace-style': stylisticJs['@stylistic/js/brace-style'],

		'@stylistic/js/comma-dangle': 'off',
		'@stylistic/ts/comma-dangle': stylisticJs['@stylistic/js/comma-dangle'],

		'@stylistic/js/comma-spacing': 'off',
		'@stylistic/ts/comma-spacing': stylisticJs['@stylistic/js/comma-spacing'],

		'@stylistic/js/function-call-spacing': 'off',
		'@stylistic/ts/func-call-spacing': 'off',
		'@stylistic/ts/function-call-spacing': stylisticJs['@stylistic/js/func-call-spacing'],

		'@stylistic/js/indent': 'off',
		'@stylistic/ts/indent': stylisticJs['@stylistic/js/indent'],

		'@stylistic/js/key-spacing': 'off',
		'@stylistic/ts/key-spacing': stylisticJs['@stylistic/js/key-spacing'],

		'@stylistic/js/keyword-spacing': 'off',
		'@stylistic/ts/keyword-spacing': stylisticJs['@stylistic/js/keyword-spacing'],

		'@stylistic/js/lines-around-comment': 'off',
		'@stylistic/ts/lines-around-comment': stylisticJs['@stylistic/js/lines-around-comment'],

		'@stylistic/js/lines-between-class-members': 'off',
		'@stylistic/ts/lines-between-class-members':
			stylisticJs['@stylistic/js/lines-between-class-members'],

		/**
		 * @property @stylistic/ts/member-delimiter-style=error - Readability and maintainability.
		 * @memberOf @stylistic/ts
		 **/
		'@stylistic/ts/member-delimiter-style': 'error',

		'@stylistic/js/no-extra-parens': 'off',
		'@stylistic/ts/no-extra-parens': stylisticJs['@stylistic/js/no-extra-parens'],

		'@stylistic/js/no-extra-semi': 'off',
		'@stylistic/ts/no-extra-semi': stylisticJs['@stylistic/js/no-extra-semi'],

		'@stylistic/js/object-curly-spacing': 'off',
		'@stylistic/ts/object-curly-spacing': stylisticJs['@stylistic/js/object-curly-spacing'],

		'@stylistic/js/padding-line-between-statements': 'off',
		'@stylistic/ts/padding-line-between-statements':
			stylisticJs['@stylistic/js/padding-line-between-statements'],

		'@stylistic/js/quotes': 'off',
		'@stylistic/ts/quotes': stylisticJs['@stylistic/js/quotes'],

		'babel/semi': 'off',
		'@stylistic/js/semi': 'off',
		'@stylistic/ts/semi': stylisticJs['@stylistic/js/semi'],

		'@stylistic/js/space-before-blocks': 'off',
		'@stylistic/ts/space-before-blocks': stylisticJs['@stylistic/js/space-before-blocks'],

		'@stylistic/js/space-before-function-paren': 'off',
		'@stylistic/ts/space-before-function-paren':
			stylisticJs['@stylistic/js/space-before-function-paren'],

		'@stylistic/js/space-infix-ops': 'off',
		'@stylistic/ts/space-infix-ops': stylisticJs['@stylistic/js/space-infix-ops'],

		/**
		 * @property @stylistic/ts/type-annotation-spacing=error - Readability and maintainability.
		 * @memberOf @stylistic/ts
		 **/
		'@stylistic/ts/type-annotation-spacing': ['error', {
			before: false,
			after: true,
			overrides: {
				arrow: {
					before: true
				}
			}
		}]
	}
};
