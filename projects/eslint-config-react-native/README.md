# @dyrkow/eslint-config-react-native

ESLint config for React Native: globals (`__DEV__`, etc.) and rules from `eslint-plugin-react-native`.

## Setup

```bash
yarn add eslint @dyrkow/eslint-config @dyrkow/eslint-config-react @dyrkow/eslint-config-react-native -D
```

## Usage

Use after base and React config. Add to `.eslintrc.json`:

```json
{
    "extends": [
        "@dyrkow/eslint-config",
        "@dyrkow/eslint-config-react",
        "@dyrkow/eslint-config-react-native"
    ]
}
```

With TypeScript:

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

## What it adds

- **Env:** `react-native/react-native` (RN globals), `browser: false`
- **Rules:** `no-unused-styles`, `split-platform-components`, `no-inline-styles`, `no-color-literals`, `no-raw-text`, `no-single-element-style-arrays` (see plan for severity). In test files, `no-inline-styles` is turned off.
