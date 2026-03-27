import type { ZodType } from "zod";

import type { OutputDescriptor } from "./types.ts";

export const Output = {
  object<T>(opts: { schema: ZodType<T> }): OutputDescriptor<T> {
    return {
      schema: opts.schema,
      type: "object",
    };
  },
};
