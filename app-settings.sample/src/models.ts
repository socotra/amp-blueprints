
export type AppConnectResponse = {
  settings: Record<string, string>;
  mappings: Array<PolicyProductMapping>;
};

export type PolicyProductMapping = {
  productName: string;
  fields: Record<string, string>;
};
