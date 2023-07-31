
export type AppConnectResponse = {
  settings: Record<string, string>;
  mappings: Array<PolicyProductMapping>;
};

export type PolicyProductMapping = {
  productName: string;
  fields: Record<string, string>;
};

export type SocotraWebhookData = {
  id: string;
  timestamp: number
  transactionId: string
  username: string
  type: string
  data: any
};
