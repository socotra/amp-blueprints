
# Lifecycle events sample

This a sample application which shows a minimal marketplace application which supports lifecycle events.
Reference documentation for Lifecycle events (LCE) can be [found here.](https://socotra.atlassian.net/wiki/spaces/MD/pages/2592637297/Lifecycle+events)

> This sample is not intended to be a "production quality" application and should be used for reference and illustration only.


# How it works, what it shows?

App manifest shows how to enable `Start` and `Stop` lifecycle events for this application. Application itself is a minimal necessary example which contains only required endpoints for health check and handling lifecycle events.



# How to run and deploy this sample application to Socotra Marketplace

## Basic Pre-reqs for this sample

- Docker engine for your platform - [official Docker installers.](https://www.docker.com/)
- Node.js for your platform - [official Nodejs installers.](https://nodejs.org)
- Latest version of [Socotra's app-cli](https://www.npmjs.com/package/@socotra/app-cli) CLI. 
    - Install it globally via `npm install -g @socotra/app-cli`


All necessary commands are in "scripts" section of `package.json` and can be called via `npm run` command using your preffered terminal and shell. Some commands may need to be adjusted for shell-specific syntax. Examples below use `bash` shell syntax, which compartible with MacOS, Linux and Windows WSL standard shells.

## Step by step guide

1. Create a Draft application in your Organization at [Socotra Marketplace](https://marketplace.socotra.com/publish). At the end of the process there will be instruction how to initialize new application manifest and full application name. E.g. `blueprints-org/lifecycle-sample-app`.

2. Update manifest file **socotra-app.json** and set the name of this sample to a name of created application from step 1 :
```
{
    "name":"blueprints-org/lifecycle-sample-app",
    ...
}
```

3. Compile sample application. This will create `./dist` directory with compiled code to package into docker.
```
npm run build-app
```


4. Build docker image with application locally. This command will build a docker image from Dockerfile and `./dist/` content and tag this image as `lifecycle-sample-app:latest` in local docker storage.

```
IMG=lifecycle-sample-app npm run build-docker
```

5. Increment application version in manifest file `socotra-app.json` so we can publish and upload new docker image without expecting any version conflict:
```
npm run increment-version
```

6. Upload new version of the app to Socotra Marketplace draft from step 1:

```
IMG=lifecycle-sample-app npm run publish-marketplace
```

After upload process completes and new application version is published in Socotra Marketplace - you can launch an instance of an app using Marketplace's [website](https://marketplace.socotra.com/).


# Additional notes

