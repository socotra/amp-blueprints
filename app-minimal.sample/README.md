
# Minimal application

This a sample application which shows a bare minimal Marketplace application which implements only required parts.
More details about required parts of Marketplace app can be found in [Create an app guide]https://socotra.atlassian.net/wiki/spaces/MD/pages/2540371975/Create+an+app).

> This sample is not intended to be a "production quality" application and should be used for reference and illustration only.


# How it works, what it shows?

App manifest contains only required properties, no additional configuration or any integration features. Application itself is a minimal runnable app which does nothing but reports that it's healthy.

Upload, configure and launch an instance this application in Socotra Marketplace. Check "Logs" tab of the running application instance to see that it's `/health` endpoint being probed.


# How to run and deploy this sample application to Socotra Marketplace


## Step by step guide

> Run `npm install` once per project to restore all required dependencies in the project.

1. Create a Draft application in your Organization at [Socotra Marketplace](https://marketplace.socotra.com/publish). At the end of the process there will be instruction how to initialize new application manifest and full application name. E.g. `blueprints-org/minimal-marketplace-app`.

2. Update manifest file **socotra-app.json** and set the name of this sample to a name of created application from step 1 :
```
{
    "name":"blueprints-org/minimal-marketplace-app",
    ...
}
```

3. Compile sample application. This will create `./dist` directory with compiled code to package into docker.
```
npm run build-app
```


4. Build docker image with application locally. This command will build a docker image from Dockerfile and `./dist/` content and tag this image as `minimal-marketplace-app:latest` in local docker storage.

```
IMG=minimal-marketplace-app npm run build-docker
```

5. Increment application version in manifest file `socotra-app.json` so we can publish and upload new docker image without expecting any version conflict:
```
npm run increment-version
```

6. Upload new version of the app to Socotra Marketplace draft from step 1:

```
IMG=minimal-marketplace-app npm run publish-marketplace
```

After upload process completes and new application version is published in Socotra Marketplace - you can launch an instance of an app using Marketplace's [website](https://marketplace.socotra.com/).

