import type { ZodType } from "zod";

import type { DocumentFile, DocumentModel } from "./types.ts";

export interface ProviderConfig {
  provider: string;
  parse: (modelId: string, file: DocumentFile) => Promise<string>;
  extract: (modelId: string, file: DocumentFile, schema?: ZodType) => Promise<unknown>;
}

export function createProvider(config: ProviderConfig): (modelId: string) => DocumentModel {
  return (modelId: string): DocumentModel => ({
    doExtract: (file, schema) => config.extract(modelId, file, schema),
    doParse: (file) => config.parse(modelId, file),
    modelId,
    provider: config.provider,
  });
}
