import { Elysia, t } from "elysia";

/**
 * Local type-only mirror of the ocrbase API contract.
 * Used to drive Eden Treaty's type inference.
 *
 * Once ocrbase publishes `type App = typeof app`, replace this
 * with a direct import: `import type { App } from "ocrbase"`.
 */
const app = new Elysia()
  .get("/", () => ({
    message: "" as string,
  }))
  .group("/v1", (router) =>
    router
      .get("/health", () => ({ status: "ok" as const }))
      .post(
        "/parse",
        () => ({
          json_result: [[]] as {
            category_id: number;
            poly: number[];
            text: string;
            score: number;
          }[][],
          markdown_result: "" as string,
        }),
        {
          body: t.Object({
            file: t.File(),
          }),
        }
      )
      .post(
        "/extract",
        () => ({
          data: {} as Record<string, unknown>,
        }),
        {
          body: t.Object({
            file: t.File(),
            schema: t.Record(t.String(), t.Unknown()),
          }),
        }
      )
  );

export type App = typeof app;
