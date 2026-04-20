import type { DocumentModel } from "./types.ts";

export interface DocSdkConfig {
  model?: DocumentModel;
}

let config: DocSdkConfig = {};

export function configure(nextConfig: DocSdkConfig) {
  config = nextConfig;
}

export async function resolveModel(): Promise<DocumentModel> {
  if (config.model) {
    return config.model;
  }

  const { ocrbase } = await import("@doc-sdk/ocrbase");
  return ocrbase("paddleocr");
}
