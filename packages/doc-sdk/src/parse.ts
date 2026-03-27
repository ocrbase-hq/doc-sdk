import { resolveModel } from "./config.ts";
import type { ParseOptions, ParseResult } from "./types.ts";

export async function parse(options: ParseOptions): Promise<ParseResult> {
  const { file } = options;
  const model = options.model ?? (await resolveModel());

  if (!model) {
    throw new Error(
      "doc-sdk: no model found. Install @doc-sdk/ocrbase, call configure({ model }), or pass model directly."
    );
  }

  const text = await model.doParse(file);

  return { text };
}
