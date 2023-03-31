# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

`pnpm install --shamefully-hoist` is prefered method, npm or yarn will mostly likely fail

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```


### Install Errors

If `npm install` exits with errors for peer dependancies in Vue packages:

- Remove storybook package entries from `package.json`
- Do an `npm install` then add the Storybook packages back into the json and run `pnpm install --shamefully-hoist`

```javascript
{
  "devDependencies": {
    "storybook-i18n": "^1.1.4",
    "@storybook/addon-a11y": "^6.5.16",
    "@storybook/addon-actions": "^6.5.16",
    "@storybook/addon-essentials": "^6.5.16",
    "@storybook/addon-interactions": "^6.5.16",
    "@storybook/addon-links": "^6.5.16",
    "@storybook/testing-library": "^0.0.13",
    "@storybook/vue3": "^6.5.16"
  },
  "dependencies": {
    "@storybook/builder-vite": "^0.4.2",
  }
}
```

# From root dir, use following to run applications

## Start dev mode:

```shell
pnpm run -r dev
```

## Build applications:

```shell
pnpm run -r build
```

## Start specific application

*website1* corresponds to the name of the application within its `package.json`

```shell
pnpm --filter website1 run dev
```

## Adding components to 'packages'

Before you can use a new component, it needs installing:

```shell
pnpm i
```
