
<h1 align="center">
Socotra MarketPlace feature blueprints.
</h1>

A collection of blueprint projects which illustrate various features of AMP Marketplace applications.

This repository contains sample blueprint apps illustrating the all Socotra Marketplace Application features. Each blueprint is a self-contained extension that explains one topic in [Public docs](https://socotra.atlassian.net/wiki/spaces/MD/pages/2593620097/Reference+Guides). You can read, play with or adapt from these samples to create your own applications using all listed features.

You can expect from each sample:
- An explanation of its functionality
- Link to a guide in Socotra MarketPlace documentation
- Code of the same style, enforced using ESLint
- Example marketplace `app-manifest.json` with minimal necessary configuration for the specific feature


## Prerequisites

You need to have [docker](https://www.docker.com/), [node](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) installed on your system to run the examples. It is recommended to use the latest LTS node version.


## Usage

- `git clone https://github.com/socotra/amp-blueprints`
- `code <any-blueprint-folder>`
- FIXME: ~~`npm install` in the terminal, then `F5` to run the sample~~
- Alternatively, follow the instructions in each blueprint's README for setting up and running the sample


## Getting Started

- [Socotra Marketplace Minimal app blueprint](minimal-amp): The minimal app. See documentation.


## Blueprints

| Sample | Reference to docs | Marketplace Features used| Language |
| ------ | ----- | --- | --- |
| [LifeCycle Events blueprint](https://github.com/socotra/amp-blueprints/tree/main/lifecycle-events-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.Lifecycle](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [Webhooks blueprint](https://github.com/socotra/amp-blueprints/tree/main/webhooks-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.Webhooks](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [Autofill blueprint](https://github.com/socotra/amp-blueprints/tree/main/autofill-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.Autofill](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [External Rater blueprint](https://github.com/socotra/amp-blueprints/tree/main/external-rater-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Socotra.ExternalRater](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [State Service blueprint](https://github.com/socotra/amp-blueprints/tree/main/state-service-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [State Service](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [Customer logging blueprint](https://github.com/socotra/amp-blueprints/tree/main/customer-logs-sample) | [link-to-docs](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [Customer Logs](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [Application Settings blueprint](https://github.com/socotra/amp-blueprints/tree/main/app-settings-sample) | [Instance settings](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [App Settings](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript
| [Mapped Fields blueprint](https://github.com/socotra/amp-blueprints/tree/main/mapped-fields-sample) | [Instance settings](https://socotra.atlassian.net/wiki/spaces/MD/pages) | [App Mapped fields](https://socotra.atlassian.net/wiki/spaces/MD/pages)| Typescript




----

## Notes
Format of this repository is heavily inspired by [VSCode extension examples](https://github.com/microsoft/vscode-extension-samples)


## License

