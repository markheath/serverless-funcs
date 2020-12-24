# Azure Functions Task List Demo

This project contains a simple Azure Functions REST-style API that can be used for CRUD operations on a todo task list. 
It is the demo application for the [Microsoft Azure Developer: Create Serverless Applications](https://pluralsight.pxf.io/c/1192349/424552/7490?u=www%2Epluralsight%2Ecom%2Fcourses%2Fmicrosoft-azure-serverless-functions-create) Pluralsight course.
There is also a Vue.js based web page that can be used as a simple test harness.

**Note:** This has now been updated to use the Azure Functions v3 runtime, which is newer than the version shown in the course. However, the changes are minimal.

To test locally with the Azure Storage emulator, you will need the following `local.settings.json` file to be set up:

```js
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "WEB_HOST": "https://serverlessfuncsbed6.blob.core.windows.net/website"
  },
  "Host": {
    "CORS": "*"
  }
}
```

To build the docker image, in same folder as `Dockerfile` enter:

```
docker build -t serverlessfuncs:v3 .
```

And to run it

```
$connStr = az storage account show-connection-string -g myResGrp -n myStorageAccount -o tsv
docker run -e AzureWebJobsStorage=$connStr -e WEB_HOST=https://serverlessfuncsbed6.blob.core.windows.net/website -p 8080:80 serverlessfuncs:v3
```

Then you can try it out at http://localhost:8080

