# @dyrkow/eslint-cofnig

## Setup

```
yarn add eslint @dyrkow/eslint-config -D
```

## Usage

Add this lines to your `.eslintrc.json`
```
{
    "extends": ["@dyrkow/eslint-config"]
}
```

### Extends order (with TypeScript / React)

Configs are compatible with Prettier (they extend `eslint-config-prettier`). Use this order so formatting is handled by Prettier and conflicts are avoided:

1. `@dyrkow/eslint-config` (base, always first)
2. `@dyrkow/eslint-config-typescript` (if using TypeScript)
3. `@dyrkow/eslint-config-react` (if using React)

Example for a TypeScript + React project:
```
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-typescript",
        "@dyrkow/eslint-config-react"
    ]
}
```
