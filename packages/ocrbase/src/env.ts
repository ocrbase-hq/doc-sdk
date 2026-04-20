import { z } from "zod";

const envSchema = z.object({
  OCRBASE_API_KEY: z.string().min(1),
  OCRBASE_BASE_URL: z.url().default("https://api.ocrbase.dev"),
});

type Env = z.infer<typeof envSchema>;

let cached: Env | undefined;

export function env(): Env {
  if (!cached) {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
      const missing = result.error.issues.map((i) => i.path.join("."));
      throw new Error(
        `@doc-sdk/ocrbase: missing env ${missing.join(", ")}.\n` +
          `Get your API key at https://ocrbase.dev/playground and set OCRBASE_API_KEY in your .env file.`,
      );
    }
    cached = result.data;
  }
  return cached;
}
