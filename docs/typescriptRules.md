# Eslint Config Lucid Typescript

> A collection of eslint plugins for typescript with settings focused on reducing cognitive load and improving readability.


<br><a name="@typescript-eslint"></a>

## @typescript-eslint : <code>object</code>> ESLint rules for [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
> NOTE: Rules that re-implement core rules have the same settings as lucid and
> are omitted from this page. Rules that are not specific to typescript are disabled.

**Properties**

| Name | Description |
| --- | --- |
| files | .ts, .tsx |

| Rule | Value | Description |
| --- | --- | --- |
| @typescript-eslint/adjacent-overload-signatures | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/array-type | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/await-thenable | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/ban-ts-comment | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/ban-tslint-comment | error |   **Reasoning**:Consistency. |
| @typescript-eslint/ban-types | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/class-literal-property-style | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/consistent-generic-constructors | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/consistent-indexed-object-style | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/consistent-type-assertions | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/consistent-type-definitions | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/consistent-type-exports | error |   **Reasoning**:Code quality. |
| @typescript-eslint/consistent-type-imports | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/explicit-function-return-type | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/explicit-member-accessibility | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/explicit-module-boundary-types | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/member-ordering | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/method-signature-style | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/naming-convention | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-base-to-string | warn |   **Reasoning**:Code Quality. |
| @typescript-eslint/no-confusing-non-null-assertion | warn |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-confusing-void-expression | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-duplicate-enum-values | warn |   **Reasoning**:Code quality. |
| @typescript-eslint/no-duplicate-type-constituents | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-dynamic-delete | warn |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-empty-interface | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-explicit-any | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-extra-non-null-assertion | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-extraneous-class | warn |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-floating-promises | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-for-in-array | error |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-import-type-side-effects | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-inferrable-types | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-invalid-void-type | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-meaningless-void-operator | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-misused-new | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-misused-promises | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-mixed-enums | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-namespace | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-non-null-asserted-nullish-coalescing | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-non-null-asserted-optional-chain | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-non-null-assertion | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-redundant-type-constituents | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-require-imports | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-this-alias | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-unnecessary-boolean-literal-compare | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-unnecessary-condition | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-unnecessary-qualifier | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-unnecessary-type-arguments | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-unnecessary-type-assertion | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-unnecessary-type-constraint | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/no-unsafe-argument | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-assignment | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-call | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-declaration-merging | warn |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-enum-comparison | error |   **Reasoning**:Code Quality; |
| @typescript-eslint/no-unsafe-member-access | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-return | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-unsafe-unary-minus | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-useless-empty-export | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/no-useless-template-literals | error |   **Reasoning**:Code quality. |
| @typescript-eslint/no-var-requires | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/non-nullable-type-assertion-style | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/parameter-properties | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/prefer-as-const | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/prefer-enum-initializers | error |   **Reasoning**:Code Quality. |
| @typescript-eslint/prefer-for-of | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-function-type | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/prefer-includes | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-literal-enum-member | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/prefer-namespace-keyword | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/prefer-nullish-coalescing | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-optional-chain | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-readonly | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/prefer-readonly-parameter-types | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/prefer-reduce-type-parameter | warn |   **Reasoning**:Code Quality. |
| @typescript-eslint/prefer-regexp-exec | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-return-this-type | warn |   **Reasoning**:Code quality. |
| @typescript-eslint/prefer-string-starts-ends-with | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/prefer-ts-expect-error | warn |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/promise-function-async | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/require-array-sort-compare | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/restrict-plus-operands | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/restrict-template-expressions | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/return-await | off |   **Reasoning**:Not specific to typescript. |
| @typescript-eslint/sort-type-constituents | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/strict-boolean-expressions | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/switch-exhaustiveness-check | off |   **Reasoning**:Arbitrary. |
| @typescript-eslint/triple-slash-reference | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/typedef | off |   **Reasoning**:Handled by compiler. |
| @typescript-eslint/unbound-method | error |   **Reasoning**:Readability and maintainability. |
| @typescript-eslint/unified-signatures | off |   **Reasoning**:Arbitrary. |
