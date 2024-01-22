import { Request, Response } from "express";
import { URL } from "url";

/**
 * Class with various utility methods for samples
 */
export class Utils {

  /**
   * Parses a port for service from environment variable
   * @param envVariable Name of the env variable to parse
   * @param defaultPort Default fallback port if env variable is not defined or it's not a port number
   * @returns Parsed port number or default port that is provided as a fallback option
   */
  static ParsePort(envVariable: string, defaultPort = 10111): number {
    const smpPort = process.env[envVariable];
    if (smpPort) {

      const parsedPort = parseInt(smpPort);
      if (!isNaN(parsedPort) && 0 < parsedPort && parsedPort <= 65535) {
        return parsedPort;
      }
    }
    return defaultPort;
  }

  /**
   * Extracts routeid value from received request headers
   * @param req Incoming request
   * @returns value of x-smp-key header or null if header is not found.
   */
  static GetSmpKey(req: Request): string | null {
    var keyValue = req.headers['x-smp-key']; // type here is string|string[]|null which is how node handles the headers in request

    if (typeof keyValue === "string") // value is of a string type
      return keyValue
    else if (keyValue) // not null and is string[]. Unlikely we'll get an array here as custom header values are joined with ', '
      return keyValue[0]

    return null;
  }

  static ParseAppConnectAddress(StateServiceVariable: string): URL | null {
    const appConnectUrl = process.env[StateServiceVariable];

    if (appConnectUrl) {
      // This instantiation will throw if URL is not correct
      return new URL(appConnectUrl);
    }
    return null;
  }


  /**
   * Returns promise which is being resolved after a certain amount of seconds.
   * This method has no specific purpose other than imitate some real work application may want to perform.
   * @param seconds number of seconds the promise should sleep for.
   * @returns
   */
  static Sleep(seconds: number) {
    return new Promise((r) => setTimeout(r, seconds * 1000));
  }

  /**
   * Sets response status code to 200 OK and writes an arbitrary JSON with some data from incoming request. Helper method to use in samples.
   * @param req incoming request object
   * @param res outgoing response object
   */
  static RespondWith200Ok(req: Request, res: Response): void {
    res.status(200).json(Utils.CreateResponseBody(req));
  }

  /**
   * Returns an object with timestamp and some interesting properties from initial request, such as url, query, headers. This object is used purely for illustration purposes.
   * @param req initial request
   * @returns an object with various properties of initial request
   */
  static CreateResponseBody(req: Request): any {
    return {
      ts: new Date().toISOString(),
      method: `${req.method}`,
      url: `${req.url}`,
      query: req.query,
      body: req.body,
      headers: req.headers,
      paramz: req.params,
    };
  }
}
