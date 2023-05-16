
# Lifecycle events sample

This a sample application which shows a minimal marketplace application which supports lifecycle events.
Reference documentation for Lifecycle events (LCE) can be [found here.](https://socotra.atlassian.net/wiki/spaces/MD/pages/2592637297/Lifecycle+events)

> This sample is not intended to be a "production quality" application and should be used for reference and illustration only.


# How it works, what it shows?

App manifest shows how to enable `Start` and `Stop` lifecycle events for this application. Application itself is a minimal necessary example which contains only required endpoints for health check and handling lifecycle events.

When application instance starts in Marketplace environment, it will receive a call to a pre-defined endpoint and query string parameter would contain an app instance public endpoint url.

This automated call to an installed application allows developers to perform additional steps for app integrations, such as registering public endpoint with 3rd party services or subscribing it to webhook calls from an external system.

Similar to "Start" event, "Stop" event will be called when application is being stopped by a customer. This call allows developers to clear up any external registration or webhooks so 3rd party systems would not be sending data to this app endpoint, which is known to be stopped.

Upload, configure and launch an instance this application in Socotra Marketplace. Check "Logs" tab of the running application instance to see that Start even was triggered.
Stop application instance, check Logs tab of stopped instance to see that Stop event was triggered too.



# How to run and deploy this sample application to Socotra Marketplace


## Step by step guide

> Run `npm install` once per project to restore all required dependencies in the project.

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

