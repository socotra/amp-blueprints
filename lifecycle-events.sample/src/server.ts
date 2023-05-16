import express, { Request, Response } from "express"
import { Utils } from "./utils"

const utils = new Utils();

const app = express()
app.get("/", utils.RespondWith200Ok)
app.get("/health", utils.RespondWith200Ok)


// Lifecycle event - Start
app.get("/_app/start",
  async (req: Request, res: Response): Promise<void> => {
    await utils.Sleep(5); // Do useful work for OnStart
    utils.RespondWith200Ok(req, res);
  }
);

// Lifecycle event - Stop
app.get("/_app/stop",
  async (req: Request, res: Response): Promise<void> => {
    await utils.Sleep(5); // Do useful work for OnStop
    utils.RespondWith200Ok(req, res)
  }
)

// We must always parse port for server from an environment variable.
const port = utils.ParsePort("SMP_PORT");
console.log(`Server is running on port ${port}`)
app.listen(port)
