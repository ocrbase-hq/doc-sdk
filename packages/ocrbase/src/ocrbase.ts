import { treaty } from "@elysiajs/eden";
import { createProvider } from "document-sdk";
import type { DocumentFile } from "document-sdk";
import { toJSONSchema } from "zod";
import type { ZodType } from "zod";

import type { App } from "./api.ts";
import { env } from "./env.ts";

function createClient() {
  const { OCRBASE_BASE_URL, OCRBASE_API_KEY } = env();
  return treaty<App>(OCRBASE_BASE_URL, {
    headers: {
      "x-api-key": OCRBASE_API_KEY,
    },
  });
}

function isRemoteUrl(value: string): boolean {
  return /^(https?|data):/i.test(value);
}

async function toFileInput(file: DocumentFile): Promise<string | File> {
  if (typeof file === "string") {
    if (isRemoteUrl(file)) {
      return file;
    }
    const bun = Bun.file(file);
    return new File([await bun.arrayBuffer()], bun.name ?? "document", {
      type: bun.type || "application/octet-stream",
    });
  }
  if (file instanceof File) {
    return file;
  }
  if (file instanceof URL) {
    return file.href;
  }
  return new File([file], "document");
}

type OcrbaseModel = "glm-ocr" | "paddleocr";

export const ocrbase = createProvider({
  async extract(modelId: string, file: DocumentFile, schema?: ZodType): Promise<unknown> {
    const api = createClient();

    const { data, error } = await api.v1.extract.post({
      file: await toFileInput(file),
      model: modelId as OcrbaseModel,
      schema: schema ? toJSONSchema(schema) : undefined,
    });

    if (error) {
      throw new Error(
        `@doc-sdk/ocrbase: extract failed (${error.status}): ${JSON.stringify(error.value)}`,
      );
    }

    if (!data || typeof data !== "object" || !("json_result" in data)) {
      throw new Error(`@doc-sdk/ocrbase: extract failed: ${JSON.stringify(data)}`);
    }

    return data.json_result;
  },

  async parse(modelId: string, file: DocumentFile): Promise<string> {
    const api = createClient();

    const { data, error } = await api.v1.parse.post({
      file: await toFileInput(file),
      model: modelId as OcrbaseModel,
    });

    if (error) {
      throw new Error(
        `@doc-sdk/ocrbase: parse failed (${error.status}): ${JSON.stringify(error.value)}`,
      );
    }

    if (!data || typeof data !== "object" || !("markdown_result" in data)) {
      throw new Error(`@doc-sdk/ocrbase: parse failed: ${JSON.stringify(data)}`);
    }

    return data.markdown_result;
  },
  provider: "ocrbase",
});
