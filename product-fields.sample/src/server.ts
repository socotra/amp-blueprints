import express from "express";
import { Utils } from "./utils";

const app = express();
app.get("/", Utils.RespondWith200Ok);
app.get("/health", Utils.RespondWith200Ok);

// We must always parse port for server from an environment variable.
const port = Utils.ParsePort("SMP_PORT");

console.log(`Server is running on http://127.0.0.1:${port}`);
console.log(`Health - http://127.0.0.1:${port}/health`);

app.listen(port);
