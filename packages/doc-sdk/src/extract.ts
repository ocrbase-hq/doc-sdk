import { resolveModel } from "./config.ts";
import type { ExtractOptions, ExtractResult } from "./types.ts";

export async function extract<T = unknown>(
  options: ExtractOptions<T>
): Promise<ExtractResult<T>> {
  const { file, output: outputDescriptor } = options;
  const model = options.model ?? (await resolveModel());

  if (!model) {
    throw new Error(
      "doc-sdk: no model found. Install @doc-sdk/ocrbase, call configure({ model }), or pass model directly."
    );
  }

  const schema = outputDescriptor?.schema;
  const raw = await model.doExtract(file, schema);

  if (schema) {
    const parsed = schema.parse(raw);
    return { output: parsed };
  }

  return { output: raw as T };
}
