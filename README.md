# How To Run on Your Local

1. make sure already install yarn. If you hasn't run this following command

```
npm install yarn -g
```

2. run this following command to install all required modules

```
yarn install
```

3. To develop all apps and packages, run the following command:

```
yarn run dev
```

4. Happy Coding!

# Staging Url

[dahs-git-staging-redchlorophyll.vercel.app](https://dahs-git-staging-redchlorophyll.vercel.app/)

# commit guideline

//tbd

# =====OLD README BELLOW======

# Turborepo starter

This is an official starter Turborepo.

## What's inside?

This repository build with Turborepo as monorepo used. with following main code structures:

### Apps, Packages, Config

- `apps/docs`: a [Next.js](https://nextjs.org) app //tbd
- `apps/web`: main web of dahs web
- `packages/shared/ui`: a stub React component library shared by both `web` and `docs` applications
- `config/eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `config/tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

This repository is used with `npx create-turbo@latest` command, but you can also use `degit` to
download and run this example, like the other examples.

Run the following command:

```sh
npx degit vercel/turborepo/examples/basic basic
cd basic
yarn install
git init . && git add . && git commit -m "Init"
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
