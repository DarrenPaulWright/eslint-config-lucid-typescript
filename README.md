# Eslint Config Lucid Typescript

> A collection of eslint plugins for typescript with settings focused on reducing cognitive load and improving readability.
>
> 
<br><a name="Disclaimer"></a>

## Disclaimer
Lucid only supports the new flat config that shipped with ESLint v8.21.0

<br><a name="Installation"></a>

## Installation
First install peer dependencies:
- [eslint](https://www.npmjs.com/package/eslint) &gt;&#x3D;8.56.0
- [typescript](https://www.npmjs.com/package/typescript) *
```
npm i eslint typescript 
```
Next, install eslint-config-lucid-typescript:
```
npm i eslint-config-lucid-typescript
```
Then add Lucid to your eslint.config.js configuration file.


<br>

## Rules

<dl>
<dt><a href="docs/@stylistic/plus.md">@stylistic/plus</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/@stylistic/eslint-plugin-plus">@stylistic/eslint-plugin-plus</a>.</p>
</dd>
<dt><a href="docs/@stylistic/ts.md">@stylistic/ts</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/@stylistic/eslint-plugin-ts">@stylistic/eslint-plugin-ts</a>.
NOTE: Rules that re-implement rules from other plugins have the same settings as lucid and
are omitted from this page.</p>
</dd>
<dt><a href="docs/@typescript-eslint.md">@typescript-eslint</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin">@typescript-eslint/eslint-plugin</a>.
NOTE: Rules that re-implement core rules have the same settings as lucid and
are omitted from this page. Rules that are not specific to typescript are disabled.</p>
</dd>
</dl>

