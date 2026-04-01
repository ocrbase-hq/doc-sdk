import { treaty } from "@elysiajs/eden";
import { createProvider } from "document-sdk";
import type { DocumentFile } from "document-sdk";
import type { ZodType } from "zod";

import type { App } from "./api.ts";
import { env } from "./env.ts";

function createClient() {
  const { OCRBASE_BASE_URL, OCRBASE_API_KEY } = env();
  return treaty<App>(OCRBASE_BASE_URL, {
    headers: {
      authorization: `Bearer ${OCRBASE_API_KEY}`,
    },
  });
}

function toFileInput(file: DocumentFile): string | File {
  if (typeof file === "string") {
    return file;
  }
  if (file instanceof File) {
    return file;
  }
  return new File([file], "document");
}

export const ocrbase = createProvider({
  extract(
    _modelId: string,
    _file: DocumentFile,
    _schema?: ZodType
  ): Promise<unknown> {
    throw new Error(
      "doc-sdk: ocrbase will suport extract soon — use parse() instead"
    );
  },

  async parse(_modelId: string, file: DocumentFile): Promise<string> {
    const api = createClient();

    const { data, error } = await api.v1.parse.post({
      file: toFileInput(file),
      model: _modelId,
    });

    if (error) {
      throw new Error(
        `doc-sdk: ocrbase parse failed (${error.status}): ${JSON.stringify(error.value)}`
      );
    }

    return (data as { markdown_result: string }).markdown_result;
  },
  provider: "ocrbase",
});
