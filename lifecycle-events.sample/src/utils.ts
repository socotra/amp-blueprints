import { Request, Response } from "express"

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
    ParsePort(envVariable: string, defaultPort: number = 10111): number {
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
     * Returns promise which is being resolved after a certain amount of seconds.
     * This method has no specific purpose other than imitate some real work application may want to perform.
     * @param seconds number of seconds the promise should sleep for.
     * @returns
     */
    Sleep(seconds: number) {
        return new Promise((r) => setTimeout(r, seconds * 1000))
    }

    /**
     * Sets response status code to 200 OK and writes an arbitrary JSON with some data from incoming request. Helper method to use in samples.
     * @param req incoming request object
     * @param res outgoing response object
     */
    RespondWith200Ok(req: Request, res: Response): void {
        res
            .status(200)
            .json(this.CreateResponseBody(req));
    }

    /**
     * Returns an object with timestamp and some interesting properties from initial request, such as url, query, headers. This object is used purely for illustration purposes.
     * @param req initial request
     * @returns an object with various properties of initial request
     */
    CreateResponseBody(req: Request): any {

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

