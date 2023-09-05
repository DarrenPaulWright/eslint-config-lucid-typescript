import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import lucid from 'eslint-config-lucid';

const core = lucid[1].rules;

/**
 * ESLint rules for [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
 * NOTE: Rules that re-implement core rules have the same settings as lucid and
 * are omitted from this page. Rules that are not specific to typescript are disabled.
 *
 * @namespace @typescript-eslint
 * @property files .ts, .tsx
 **/
const typescriptRules = {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		'@typescript-eslint': typescriptPlugin
	},
	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			project: ['./tsconfig.json']
		}
	},
	rules: {
		/**
		 * @property @typescript-eslint/adjacent-overload-signatures=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		/**
		 * @property @typescript-eslint/array-type=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/array-type': ['error', { default: 'generic' }],

		/**
		 * @property @typescript-eslint/await-thenable=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/await-thenable': 'off',

		/**
		 * @property @typescript-eslint/ban-ts-comment=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/ban-ts-comment': 'error',

		/**
		 * @property @typescript-eslint/ban-tslint-comment=error - Consistency.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/ban-tslint-comment': 'error',

		/**
		 * @property @typescript-eslint/ban-types=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/ban-types': 'error',

		'block-spacing': 'off',
		'@typescript-eslint/block-spacing': core['block-spacing'],

		'brace-style': 'off',
		'@typescript-eslint/brace-style': core['brace-style'],

		/**
		 * @property @typescript-eslint/class-literal-property-style=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/class-literal-property-style': 'off',

		'class-methods-use-this': 'off',
		'@typescript-eslint/class-methods-use-this': core['class-methods-use-this'],

		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': core['comma-dangle'],

		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': core['comma-spacing'],

		/**
		 * @property @typescript-eslint/consistent-generic-constructors=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-generic-constructors': 'error',

		/**
		 * @property @typescript-eslint/consistent-indexed-object-style=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-indexed-object-style': ['error',
			'index-signature'],

		/**
		 * @property @typescript-eslint/consistent-type-assertions=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter'
		}],

		/**
		 * @property @typescript-eslint/consistent-type-definitions=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-type-definitions': 'error',

		/**
		 * @property @typescript-eslint/consistent-type-exports=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-type-exports': ['error', {
			fixMixedExportsWithInlineTypeSpecifier: true
		}],

		/**
		 * @property @typescript-eslint/consistent-type-imports=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/consistent-type-imports': ['error', {
			prefer: 'type-imports',
			fixStyle: 'inline-type-imports',
			disallowTypeAnnotations: true
		}],

		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': core['default-param-last'],

		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': core['dot-notation'],

		/**
		 * @property @typescript-eslint/explicit-function-return-type=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/explicit-function-return-type': 'error',

		/**
		 * @property @typescript-eslint/explicit-member-accessibility=error -  Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/explicit-member-accessibility': ['error', {
			accessibility: 'no-public'
		}],

		/**
		 * @property @typescript-eslint/explicit-module-boundary-types=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/explicit-module-boundary-types': 'error',

		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': core['func-call-spacing'],

		indent: 'off',
		'@typescript-eslint/indent': core.indent,

		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': core['init-declarations'],

		'key-spacing': 'off',
		'@typescript-eslint/key-spacing': core['key-spacing'],

		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': core['keyword-spacing'],

		'lines-around-comment': 'off',
		'@typescript-eslint/lines-around-comment': core['lines-around-comment'],

		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members':
			core['lines-between-class-members'],

		/**
		 * @property @typescript-eslint/member-delimiter-style=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/member-delimiter-style': 'error',

		/**
		 * @property @typescript-eslint/member-ordering=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/member-ordering': 'error',

		/**
		 * @property @typescript-eslint/method-signature-style=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/method-signature-style': ['error', 'property'],

		/**
		 * @property @typescript-eslint/naming-convention=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/naming-convention': 'off',

		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': core['no-array-constructor'],

		/**
		 * @property @typescript-eslint/no-base-to-string=warn - Code Quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-base-to-string': 'warn',

		/**
		 * @property @typescript-eslint/no-confusing-non-null-assertion=warn - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-confusing-non-null-assertion': 'off',

		/**
		 * @property @typescript-eslint/no-confusing-void-expression=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-confusing-void-expression': 'error',

		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members':
			core['no-dupe-class-members'],

		/**
		 * @property @typescript-eslint/no-duplicate-enum-values=warn - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-duplicate-enum-values': 'warn',

		/**
		 * @property @typescript-eslint/no-duplicate-type-constituents=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-duplicate-type-constituents': 'error',

		/**
		 * @property @typescript-eslint/no-dynamic-delete=warn - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-dynamic-delete': 'off',

		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': core['no-empty-function'],

		/**
		 * @property @typescript-eslint/no-empty-interface=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-empty-interface': 'error',

		/**
		 * @property @typescript-eslint/no-explicit-any=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-explicit-any': 'error',

		/**
		 * @property @typescript-eslint/no-extra-non-null-assertion=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-extra-non-null-assertion': 'off',

		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': core['no-extra-parens'],

		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': core['no-extra-semi'],

		/**
		 * @property @typescript-eslint/no-extraneous-class=warn - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-extraneous-class': 'off',

		/**
		 * @property @typescript-eslint/no-floating-promises=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-floating-promises': 'off',

		/**
		 * @property @typescript-eslint/no-for-in-array=error - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-for-in-array': 'off',

		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': core['no-implied-eval'],

		/**
		 * @property @typescript-eslint/no-import-type-side-effects=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-import-type-side-effects': 'error',

		/**
		 * @property @typescript-eslint/no-inferrable-types=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-inferrable-types': 'error',

		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': core['no-invalid-this'],

		/**
		 * @property @typescript-eslint/no-invalid-void-type=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-invalid-void-type': 'warn',

		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': core['no-loop-func'],

		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': core['no-loss-of-precision'],

		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': core['no-magic-numbers'],

		/**
		 * @property @typescript-eslint/no-meaningless-void-operator=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-meaningless-void-operator': 'warn',

		/**
		 * @property @typescript-eslint/no-misused-new=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-misused-new': 'off',

		/**
		 * @property @typescript-eslint/no-misused-promises=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-misused-promises': 'off',

		/**
		 * @property @typescript-eslint/no-mixed-enums=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-mixed-enums': 'error',

		/**
		 * @property @typescript-eslint/no-namespace=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-namespace': 'error',

		/**
		 * @property @typescript-eslint/no-non-null-asserted-nullish-coalescing=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

		/**
		 * @property @typescript-eslint/no-non-null-asserted-optional-chain=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

		/**
		 * @property @typescript-eslint/no-non-null-assertion=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-non-null-assertion': 'off',

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': core['no-redeclare'],

		/**
		 * @property @typescript-eslint/no-redundant-type-constituents=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-redundant-type-constituents': 'error',

		/**
		 * @property @typescript-eslint/no-require-imports=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-require-imports': 'off',

		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports':
			core['no-restricted-imports'],

		'no-return-await': core['no-return-await'],

		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': core['no-shadow'],

		/**
		 * @property @typescript-eslint/no-this-alias=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-this-alias': 'off',

		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': core['no-throw-literal'],

		/**
		 * @property @typescript-eslint/no-unnecessary-boolean-literal-compare=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

		/**
		 * @property @typescript-eslint/no-unnecessary-condition=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-condition': 'off',

		/**
		 * @property @typescript-eslint/no-unnecessary-qualifier=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-qualifier': 'error',

		/**
		 * @property @typescript-eslint/no-unnecessary-type-arguments=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',

		/**
		 * @property @typescript-eslint/no-unnecessary-type-assertion=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',

		/**
		 * @property @typescript-eslint/no-unnecessary-type-constraint=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-argument=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-argument': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-assignment=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-assignment': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-call=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-call': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-declaration-merging=warn - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-declaration-merging': 'warn',

		/**
		 * @property @typescript-eslint/no-unsafe-enum-comparison=error - Code Quality;
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-member-access=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-member-access': 'error',

		/**
		 * @property @typescript-eslint/no-unsafe-return=error - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-unsafe-return': 'error',

		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions':
			core['no-unused-expressions'],

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': core['no-unused-vars'],

		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': core['no-use-before-define'],

		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor':
			core['no-useless-constructor'],

		/**
		 * @property @typescript-eslint/no-useless-empty-export=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-useless-empty-export': 'off',

		/**
		 * @property @typescript-eslint/no-var-requires=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/no-var-requires': 'off',

		/**
		 * @property @typescript-eslint/non-nullable-type-assertion-style=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',

		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': core['object-curly-spacing'],

		'padding-line-between-statements': 'off',
		'@typescript-eslint/padding-line-between-statements':
			core['padding-line-between-statements'],

		/**
		 * @property @typescript-eslint/parameter-properties=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/parameter-properties': 'off',

		/**
		 * @property @typescript-eslint/prefer-as-const=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-as-const': 'error',

		/**
		 * @property @typescript-eslint/prefer-enum-initializers=error - Code Quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-enum-initializers': 'error',

		/**
		 * @property @typescript-eslint/prefer-for-of=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-for-of': 'off',

		/**
		 * @property @typescript-eslint/prefer-function-type=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-function-type': 'error',

		/**
		 * @property @typescript-eslint/prefer-includes=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-includes': 'off',

		/**
		 * @property @typescript-eslint/prefer-literal-enum-member=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-literal-enum-member': 'warn',

		/**
		 * @property @typescript-eslint/prefer-namespace-keyword=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-namespace-keyword': 'error',

		/**
		 * @property @typescript-eslint/prefer-nullish-coalescing=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-nullish-coalescing': 'off',

		/**
		 * @property @typescript-eslint/prefer-optional-chain=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-optional-chain': 'off',

		/**
		 * @property @typescript-eslint/prefer-readonly=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-readonly': 'off',

		/**
		 * @property @typescript-eslint/prefer-readonly-parameter-types=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		/**
		 * @property @typescript-eslint/prefer-reduce-type-parameter=warn - Code Quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',

		/**
		 * @property @typescript-eslint/prefer-regexp-exec=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-regexp-exec': 'off',

		/**
		 * @property @typescript-eslint/prefer-return-this-type=warn - Code quality.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-return-this-type': 'warn',

		/**
		 * @property @typescript-eslint/prefer-string-starts-ends-with=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-string-starts-ends-with': 'off',

		/**
		 * @property @typescript-eslint/prefer-ts-expect-error=warn - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/prefer-ts-expect-error': 'warn',

		/**
		 * @property @typescript-eslint/promise-function-async=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/promise-function-async': 'off',

		quotes: 'off',
		'@typescript-eslint/quotes': core.quotes,

		/**
		 * @property @typescript-eslint/require-array-sort-compare=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/require-array-sort-compare': 'off',

		'require-await': 'off',
		'@typescript-eslint/require-await': core['require-await'],

		/**
		 * @property @typescript-eslint/restrict-plus-operands=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/restrict-plus-operands': 'off',

		/**
		 * @property @typescript-eslint/restrict-template-expressions=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/restrict-template-expressions': 'off',

		/**
		 * @property @typescript-eslint/return-await=off - Not specific to typescript.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/return-await': 'off',

		semi: 'off',
		'@typescript-eslint/semi': core.semi,

		/**
		 * @property @typescript-eslint/sort-type-constituents=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/sort-type-constituents': 'off',

		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': core['space-before-blocks'],

		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren':
			core['space-before-function-paren'],

		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': core['space-infix-ops'],

		/**
		 * @property @typescript-eslint/strict-boolean-expressions=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/strict-boolean-expressions': 'off',

		/**
		 * @property @typescript-eslint/switch-exhaustiveness-check=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/switch-exhaustiveness-check': 'off',

		/**
		 * @property @typescript-eslint/triple-slash-reference=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/triple-slash-reference': 'error',

		/**
		 * @property @typescript-eslint/type-annotation-spacing=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/type-annotation-spacing': ['error', {
			before: false,
			after: true,
			overrides: {
				arrow: {
					before: true
				}
			}
		}],

		/**
		 * @property @typescript-eslint/typedef=off - Handled by compiler.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/typedef': 'off',

		/**
		 * @property @typescript-eslint/unbound-method=error - Readability and maintainability.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/unbound-method': 'error',

		/**
		 * @property @typescript-eslint/unified-signatures=off - Arbitrary.
		 * @memberof @typescript-eslint
		 **/
		'@typescript-eslint/unified-signatures': 'off'
	}
};

export default typescriptRules;
