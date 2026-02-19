# @dyrkow/eslint-config-typescript

ESLint config for TypeScript. Use together with the base config `@dyrkow/eslint-config`.

## Installation

Install the base config and this package. The base and TypeScript are required (peerDependencies): your project must have TypeScript in its dependencies (as usual for a TypeScript project). You do not need to install eslint or the TypeScript ESLint parser/plugin separately — they are included. For React Native + TypeScript, also add @dyrkow/eslint-config-react-native.

```bash
pnpm add -D @dyrkow/eslint-config @dyrkow/eslint-config-typescript
# or: yarn add @dyrkow/eslint-config @dyrkow/eslint-config-typescript -D
# or: npm i -D @dyrkow/eslint-config @dyrkow/eslint-config-typescript
```

## Configuration

Add to `.eslintrc.json`. Always extend the base config first, then TypeScript. Example with TypeScript only:

```json
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-typescript"
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
