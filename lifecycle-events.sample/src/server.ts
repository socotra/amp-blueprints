import express, { Request, Response } from "express";
import { Utils } from "./utils";

const app = express();
app.get("/", Utils.RespondWith200Ok);
app.get("/health", Utils.RespondWith200Ok);


// Lifecycle event - Start
app.get("/_app/start",
  async (req: Request, res: Response): Promise<void> => {
    await Utils.Sleep(3); // Do useful work for OnStart
    Utils.RespondWith200Ok(req, res);
  }
);

// Lifecycle event - Stop
app.get("/_app/stop",
  async (req: Request, res: Response): Promise<void> => {
    await Utils.Sleep(5); // Do useful work for OnStop
    Utils.RespondWith200Ok(req, res);
  }
);

// We must always parse port for server from an environment variable.
const port = Utils.ParsePort("SMP_PORT");

console.log(`Server is running on http://127.0.0.1:${port}`);
console.log(`Health - http://127.0.0.1:${port}/health`);

app.listen(port);
