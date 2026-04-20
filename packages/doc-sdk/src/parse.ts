import { resolveModel } from "./config.ts";
import type { ParseOptions, ParseResult } from "./types.ts";

export async function parse(options: ParseOptions): Promise<ParseResult> {
  const { file } = options;
  const model = options.model ?? (await resolveModel());
  const text = await model.doParse(file);

  return { text };
}
