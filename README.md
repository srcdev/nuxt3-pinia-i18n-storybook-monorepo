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
pnpm --filter website1 run dev
```

## Adding components to 'packages'

Before you can use a new component, it needs installing:

```shell
pnpm i
```