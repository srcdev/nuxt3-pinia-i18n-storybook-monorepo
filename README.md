# nuxt3-pinia-i18n-storybook-monorepo

Starter kit for Nuxt3, Pinia, i18n, and Storybook as Monorepo

## Prerequisites

Before you can create a monorepo, make sure that you have Nodejs and pnpm installed on your machine

- Nodejs [installation](https://nodejs.org/en/download)
- pnpm [installation](https://pnpm.io/installation)

## Install packages:

This will install all packages for child apps.

```shell
nvm use
```

```shell
pnpm i
```

### Install Errors

If `npm install` exits with errors for peer dependancies in Vue packages:

- Remove storybook package entries from `package.json`
- Run the following package installs manually.

```bash
npm install --save-dev @storybook/vue3 @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-a11y @storybook/addon-links @storybook/testing-library storybook-i18n

npm install --save @storybook/builder-vite
```

## Start dev mode:

```shell
pnpm run -r dev
```

## Build applications:

```shell
pnpm run -r build
```

## Start specific application

```shell
pnpm --filter baseapp run dev
```

## Adding components to 'packages'

Before you can use a new component, it needs installing:

```shell
pnpm i
```
