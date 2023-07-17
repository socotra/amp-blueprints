
# Socotra Marketplace feature blueprints.

A collection of blueprint projects which illustrate various features of Socotra Marketplace applications.

This repository contains example apps illustrating various Socotra Marketplace Application features. Each blueprint is a self-contained project that illustrates one of the features from [Socotra Marketplace docs](https://socotra.atlassian.net/wiki/spaces/MD/pages/2593620097/Reference+Guides). You can read, play with or adapt from these samples to create your own applications using all listed features.

You can expect from each sample:
- An explanation of its functionality
- Link to a guide in Socotra MarketPlace documentation
- Code of the same style
- Correct `app-manifest.json` with minimal necessary configuration for the specific feature


## Pre-requsites for all samples

Developer needs to have installed and configured:

- Docker engine for your platform - [official Docker installers.](https://www.docker.com/)
- Node.js for your platform - [official Nodejs installers.](https://nodejs.org)
- Latest version of [Socotra's app-cli](https://www.npmjs.com/package/@socotra/app-cli) CLI.
    - Install it globally via `npm install -g @socotra/app-cli`
    - Authenticate a console session with `socotra-app login --client-id <clientid> --client-secret <secret>` command, using clientID and Secret created in
    Socotra Marketplace ([API Keys section](https://marketplace.socotra.com/dashboard/api-keys) )


All necessary commands are in "scripts" section of corresponding `package.json` and can be called via `npm run` command using your preffered terminal and shell. Some commands may need to be adjusted for shell-specific syntax. Examples below use `bash` shell syntax, which compartible with MacOS, Linux and Windows WSL default shells.

## Usage

- `git clone https://github.com/socotra/amp-blueprints`
- `code <blueprint-sample-folder>` opens a sample folder in VSCode or open it in your favorite IDE.
- Follow the instructions in each blueprint's README for setting up and running the sample


## Getting Started

Developers can start with Socotra Marketplace [Minimal app blueprint](https://github.com/socotra/amp-blueprints/tree/main/app-minimal.sample). It illustrates a minimal required set of endpoints and settings for a marketplace app. See [Getting started](https://socotra.atlassian.net/wiki/spaces/MD/pages) documentation.

## Blueprints

| Sample | Reference to docs | Marketplace Features used| Language |
| ------ | ----- | --- | --- |
| [Minimal app blueprint](https://github.com/socotra/amp-blueprints/tree/main/app-minimal.sample)| [Build an app](https://docs.marketplace.smp-dev.com/user-guides/build-an-app) | -- | Typescript
| [Product Fields blueprint](https://github.com/socotra/amp-blueprints/tree/main/product-fields.sample) | [Product fields mapping](https://socotra.atlassian.net/wiki/spaces/MD/pages/2634219752/Product+fields+mapping) | [Socotra.Fields](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [LifeCycle Events blueprint](https://github.com/socotra/amp-blueprints/tree/main/lifecycle-events.sample) | [Lifecycle Events](https://docs.marketplace.smp-dev.com/reference-guides/lifecycle-events) | [Socotra.Lifecycle](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: Application Settings blueprint](https://github.com/socotra/amp-blueprints/tree/main/app-settings-sample) | [App Instance settings](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Manifest.Fields](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: Webhooks blueprint](https://github.com/socotra/amp-blueprints/tree/main/webhooks-sample) | [Docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.Webhooks](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: Autofill blueprint](https://github.com/socotra/amp-blueprints/tree/main/autofill-sample) | [Docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.Autofill](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: External Rater blueprint](https://github.com/socotra/amp-blueprints/tree/main/external-rater-sample) | [Docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.ExternalRater](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: State Service blueprint](https://github.com/socotra/amp-blueprints/tree/main/state-service-sample) | [Docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [State Service](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [TBD: Customer logging blueprint](https://github.com/socotra/amp-blueprints/tree/main/customer-logs-sample) | [Docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Customer Logs](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript






----

## Notes
Format of this repository is heavily inspired by [VSCode extension examples](https://github.com/microsoft/vscode-extension-samples)


## License

