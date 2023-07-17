import { Utils } from "./utils";
import { AppConnectResponse } from "./models";
import express, { Request, Response } from "express";
import axios from 'axios';

async function getStateFromAppConnectService(req: Request): Promise<AppConnectResponse> {

  try {
    // Extract base address of AppConnect API
    const baseUrl = Utils.ParseAppConnectAddress("SMP_STATE_API");
    if (!baseUrl) throw new Error(`Failed to read AppConnect API address from SMP_STATE_API env variable`)

    console.log(`AppConnect API address is: ${baseUrl}`);

    // Extract request-specific x-smp-key
    const requestKey = Utils.GetSmpKey(req);
    if (!requestKey) throw new Error(`Failed to extract 'x-smp-key' value from request headers`)

    // Fetch state of an app from AppConnect service as a strongly typed result
    const instanceStateAddr = `${baseUrl}settings/${requestKey}`
    const stateResult = await axios.get<AppConnectResponse>(instanceStateAddr, { headers: { Accept: 'application/json' } });

    if (!(stateResult.status < 300))
      throw new Error(`GET ${instanceStateAddr}: Bad Status - ${stateResult.status}. Response: ${stateResult.data}`)
    return stateResult.data

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`Axios error: ${error.message}`);
    } else {
      console.log(`Unexpected error: ${error}`);
    }
    throw error;
  }
}

async function fetchProductMapping(req: Request, res: Response) {
  var result = await getStateFromAppConnectService(req);
  res
    .status(200)
    .json(result);
};

const app = express();
app.get("/", Utils.RespondWith200Ok);
app.get("/health", Utils.RespondWith200Ok);
app.get("/show-mapping", fetchProductMapping);

// Always parse port for server from an environment variable.
const port = Utils.ParsePort("SMP_PORT");
console.log(`Server is running on http://127.0.0.1:${port}`);
console.log(`Health - http://127.0.0.1:${port}/health`);

app.listen(port);
