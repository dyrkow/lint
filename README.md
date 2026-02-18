# lint

Lint configuration packages.

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
