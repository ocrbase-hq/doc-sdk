import { treaty } from "@elysiajs/eden";
import { createProvider } from "doc-sdk";
import type { DocumentFile } from "doc-sdk";
import type { ZodType } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

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

async function toFile(file: DocumentFile): Promise<File> {
  if (file instanceof File) {
    return file;
  }
  if (typeof file === "string") {
    const res = await fetch(file);
    const blob = await res.blob();
    return new File([blob], "document");
  }
  if (file instanceof Blob) {
    return new File([file], "document");
  }
  return new File([file], "document");
}

export const ocrbase = createProvider({
  async extract(
    _modelId: string,
    file: DocumentFile,
    schema?: ZodType
  ): Promise<unknown> {
    const api = createClient();
    const f = await toFile(file);

    let jsonSchema: Record<string, unknown> = {};
    if (schema) {
      jsonSchema = zodToJsonSchema(
        schema as unknown as Parameters<typeof zodToJsonSchema>[0]
      ) as Record<string, unknown>;
    }

    const { data, error } = await api.v1.extract.post({
      file: f,
      schema: jsonSchema,
    });

    if (error) {
      throw new Error(
        `doc-sdk: ocrbase extract failed (${error.status}): ${JSON.stringify(error.value)}`
      );
    }

    return data.data;
  },

  async parse(_modelId: string, file: DocumentFile): Promise<string> {
    const api = createClient();
    const f = await toFile(file);

    const { data, error } = await api.v1.parse.post({ file: f });

    if (error) {
      throw new Error(
        `doc-sdk: ocrbase parse failed (${error.status}): ${JSON.stringify(error.value)}`
      );
    }

    return data.markdown_result;
  },

  provider: "ocrbase",
});
