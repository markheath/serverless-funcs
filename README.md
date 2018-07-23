# Azure Functions Task List Demo

This project contains a simple Azure Functions REST-style API that can be used for CRUD operations on a todo task list.
There is also a Vue.js based web page that can be used as a simple test harness.

To test locally with the Azure Storage emulator, you will need the following `local.settings.json` file to be set up:

```js
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet"
  },
  "Host": {
    "CORS": "*"
  }
}
```

To build the docker image, in same folder as `dockerfile` enter:

```
docker build -t serverlessfuncs:v1
```

And to run it

```
$connStr = az storage account show-connection-string -g myResGrp -n myStorageAccount -o tsv
docker run -e AzureWebJobsStorage=$connStr -p 3001:80 serverlessfuncs:v1
```