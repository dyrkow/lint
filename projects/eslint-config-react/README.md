# @dyrkow/eslint-config-react

ESLint config for React: `eslint-plugin-react`, `eslint-plugin-react-hooks`, JSX rules. Prettier-compatible (extends `eslint-config-prettier`).

## Installation

Install the base config and this package. The base is required (peerDependency) and must be listed first in `extends`. You do not need to install eslint or plugins separately — they come from the base.

```bash
pnpm add -D @dyrkow/eslint-config @dyrkow/eslint-config-react
# or: yarn add @dyrkow/eslint-config @dyrkow/eslint-config-react -D
# or: npm i -D @dyrkow/eslint-config @dyrkow/eslint-config-react
```

## Configuration

Add to `.eslintrc.json` and extend **after** the base config. Use this order so formatting is handled by Prettier and conflicts are avoided:

1. `@dyrkow/eslint-config` (base, always first)
2. `@dyrkow/eslint-config-typescript` (if using TypeScript)
3. `@dyrkow/eslint-config-react` (if using React)
4. `@dyrkow/eslint-config-react-native` (if using React Native)

Example for React only:

```json
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-react"
    ]
}
```

Example for TypeScript + React:

```json
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-typescript",
        "@dyrkow/eslint-config-react"
    ]
}
```

Example for TypeScript + React + React Native:

```json
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-typescript",
        "@dyrkow/eslint-config-react",
        "@dyrkow/eslint-config-react-native"
    ]
}
```
