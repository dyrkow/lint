# @dyrkow/eslint-config

Base ESLint config. Must be listed first in `extends`. Compatible with Prettier (extends `eslint-config-prettier`).

## Installation

Install only this package (and any other configs you need). You do not need to install eslint or plugins separately — they are included.

```bash
pnpm add -D @dyrkow/eslint-config
# or: yarn add @dyrkow/eslint-config -D
# or: npm i -D @dyrkow/eslint-config
```

## Configuration

Add to your `.eslintrc.json`:
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
