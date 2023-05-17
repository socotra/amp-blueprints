import express, { Request, Response } from "express";
import { Utils } from "./utils";

const utils = new Utils();

const app = express();
app.get("/", utils.RespondWith200Ok);
app.get("/health", utils.RespondWith200Ok);


// We must always parse port for server from an environment variable.
const port = utils.ParsePort("SMP_PORT");
console.log(`Server is running on port ${port}`);
app.listen(port);
