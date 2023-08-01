import { Utils } from "./utils";
import { sendWebhookNotification } from "./functions";
import express from "express";

const app = express();

app.use(express.json())    // for parsing JSON https://expressjs.com/en/api.html#express.json
//app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", Utils.RespondWith200Ok);
app.get("/health", Utils.RespondWith200Ok);

app.post("/webhook-notify", sendWebhookNotification);

// Always parse port for server from an environment variable.
const port = Utils.ParsePort("SMP_PORT");
console.log(`Server is running on http://127.0.0.1:${port}`);
console.log(`Health - http://127.0.0.1:${port}/health`);

app.listen(port);
