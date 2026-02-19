# lint

Lint configuration packages.

## Packages

| Package | Description |
|---------|-------------|
| [@dyrkow/editor-config](projects/editor-config/README.md) | EditorConfig preset; run `yarn editor-config` to generate `.editorconfig`. |
| [@dyrkow/eslint-config](projects/eslint-config/README.md) | Base ESLint config (always extend first). |
| [@dyrkow/eslint-config-react](projects/eslint-config-react/README.md) | ESLint config for React and React Hooks. |
| [@dyrkow/eslint-config-react-native](projects/eslint-config-react-native/README.md) | ESLint config for React Native. |
| [@dyrkow/eslint-config-typescript](projects/eslint-config-typescript/README.md) | ESLint config for TypeScript. |
| [@dyrkow/prettier-config](projects/prettier-config/README.md) | Shared Prettier config. |

Each package README has **Installation** and **Configuration** sections.

When using react, react-native, or typescript configs, the consumer explicitly installs @dyrkow/eslint-config (the base) and the configs they need — so the project’s package.json clearly shows the dependency on the base. Shared versions (eslint, prettier, typescript, @typescript-eslint/*) are kept the same in the base and related packages so that monorepos get a single resolved version and no duplicates.

## Development

This repo is a Yarn workspaces monorepo with [Nx](https://nx.dev) for task orchestration and [Changesets](https://github.com/changesets/changesets) for versioning and changelogs. Each package is versioned independently.

### Changesets workflow

- **After making changes**: run `yarn changeset` to add a changeset. Choose the package(s), bump type (major/minor/patch), and a short description. A markdown file is added under `.changeset/`.
- **Before releasing**: run `yarn run version` to apply changesets, update `package.json` versions and generate CHANGELOGs.
- **Publishing**: run `yarn release` (runs `changeset version` then `changeset publish`) to publish updated packages to npm. Packages are published with `access: "public"`.

See [.changeset/README.md](.changeset/README.md) and the [Changesets docs](https://github.com/changesets/changesets) for more.

### Nx

- List projects: `npx nx show projects`
- Dependency graph: `npx nx graph`
- When you add build/lint tasks, use `nx run-many -t <target>` or `nx affected -t <target>` for cached runs. The default comparison branch for `affected` is `main` (see `nx.json`).
