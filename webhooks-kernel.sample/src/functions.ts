import { AppConnectResponse, SocotraWebhookData } from "./models";
import { Utils } from "./utils";
import { Request, Response } from "express";
import axios from 'axios';


// action handler for express
export async function sendWebhookNotification(req: Request, res: Response) {
  console.log(JSON.stringify(req.body, null, 2));

  const appSettings = await getStateFromAppConnectService(req);
  // In socotra-app.json manifest we declared settings entry "slack-webhook-address" -  "app": { "fields": [ {"name": "slack-webhook-address"...}
  // Here we can read the value, which customer configured to be a webhook address:
  const webhookAddress = appSettings.settings["slack-webhook-address"]

  const message = prepareSlackWebhookMessage(req.body)

  await axios.post(webhookAddress, message, { headers: { Accept: 'application/json' } });

  res.status(200);
}

export async function getStateFromAppConnectService(req: Request): Promise<AppConnectResponse> {
  try {
    // Extract base address of AppConnect API
    const baseUrl = Utils.ParseAppConnectAddress("SMP_STATE_API");
    if (!baseUrl) throw new Error(`Failed to read AppConnect API address from SMP_STATE_API env variable`)

    // Extract request-specific x-smp-key
    const requestKey = Utils.GetSmpKey(req);
    if (!requestKey) throw new Error(`Failed to extract 'x-smp-key' value from request headers`)

    // Fetch state of an app from AppConnect service as a strongly typed result
    const instanceStateAddr = `${baseUrl}state/${requestKey}`
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

function prepareSlackWebhookMessage(body: SocotraWebhookData) {
  // we assume that webhook receiving this message is a slack webhook
  // so we'll use some nice Slack formatting https://api.slack.com/messaging/webhooks#advanced_message_formatting
  // But it can be any webhook, slack is used for convenience and illustration purposes
  return {
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": `:white_check_mark: ${body.type} in Socotra tenant`,
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `TransactionId: \`${body.transactionId}\``
        }
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": `*Issued by:*\n_${body.username}_`
          },
          {
            "type": "mrkdwn",
            "text": `*When:*\n<!date^${Math.round(body.timestamp/1000)}^Posted {date_num} {time_secs}|Posted 2014-02-18 6:39:42 AM PST>`
          }
        ]
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": `*Data:*\n\`\`\`${JSON.stringify(body.data)}\`\`\``
          }
        ]
      }
    ]
  };
}

