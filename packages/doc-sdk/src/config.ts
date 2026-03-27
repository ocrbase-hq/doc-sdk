import type { DocumentModel } from "./types.ts";

export interface DocSdkConfig {
  model: DocumentModel;
}

let defaultModel: DocumentModel | undefined;

export function configure(config: DocSdkConfig): void {
  defaultModel = config.model;
}

export async function resolveModel(): Promise<DocumentModel | undefined> {
  if (defaultModel) {
    return defaultModel;
  }

  try {
    const { ocrbase } = await import("@doc-sdk/ocrbase");
    defaultModel = ocrbase("glm-ocr");
    return defaultModel;
  } catch {
    return undefined;
  }
}
