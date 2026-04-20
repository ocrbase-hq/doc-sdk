---
name: doc-sdk
description: Use this skill when adding or maintaining doc-sdk integrations in TypeScript projects, including document parsing, OCR/VLM extraction, Zod structured outputs, provider setup for ocrbase, Mistral, LlamaParse, or Azure, environment variables, and tests around parse(), extract(), batchParse(), or batchExtract().
---

# doc-sdk Integration

## Purpose

Use doc-sdk as a lightweight, provider-agnostic TypeScript layer for document parsing and structured document extraction. Prefer a small integration that keeps provider credentials server-side, exposes typed application functions, and validates extracted JSON with Zod.

## Workflow

1. Inspect the target project first: package manager, runtime, framework, existing upload/storage path, TypeScript/Zod usage, and server/client boundary.
2. Choose the provider from the user's requirements. Default to ocrbase when no provider is specified. Do not expose provider API tokens in browser code.
3. Install the smallest set of dependencies needed for the chosen provider.
4. Add `.env` entries and document required secret names in the project's existing env pattern.
5. Implement a small service/module around `parse()` and `extract()` instead of scattering SDK calls through route handlers or UI components.
6. Add focused tests around the wrapper. Mock doc-sdk calls for app tests; use live provider calls only when the project already has integration-test conventions and secrets available.

## Install

Prefer the project's package manager:

```bash
bun add document-sdk zod
npm install document-sdk zod
pnpm add document-sdk zod
yarn add document-sdk zod
```

For the default ocrbase provider, ensure `@doc-sdk/ocrbase` is available if the package manager does not install it transitively:

```bash
bun add @doc-sdk/ocrbase
npm install @doc-sdk/ocrbase
pnpm add @doc-sdk/ocrbase
yarn add @doc-sdk/ocrbase
```

Only add provider-specific packages that exist in the user's dependency registry or repository. If using Mistral, LlamaParse, or Azure provider packages, verify the package name and exported model factory before importing it.

## Environment

For ocrbase:

```bash
OCRBASE_API_KEY=sk_...
# Optional; defaults to https://api.ocrbase.dev
OCRBASE_BASE_URL=https://api.ocrbase.dev
```

When integrating in Next.js, Remix, Vite, or other web stacks, keep these variables server-only. Do not prefix provider secrets with client-exposed env prefixes such as `NEXT_PUBLIC_` or `VITE_`.

## Parsing

Use `parse()` when the app needs text or Markdown-like document content.

```ts
import { parse } from "document-sdk";

export async function parseInvoice(file: string | File | Blob | Uint8Array) {
  const { text } = await parse({ file });
  return text;
}
```

`file` may be a local path string, remote URL, `Buffer`, `ArrayBuffer`, `Uint8Array`, `File`, `Blob`, or `URL`. In Node services, normalize uploads into a path or binary object before calling doc-sdk. In browser-facing apps, send the file to a server route first.

## Structured Extraction

Use `extract()` with `Output.object()` and a Zod schema when the app needs typed JSON.

```ts
import { extract, Output } from "document-sdk";
import { z } from "zod";

const invoiceSchema = z.object({
  vendor: z.string(),
  invoiceNumber: z.string().optional(),
  total: z.number(),
  currency: z.string().length(3),
  dueDate: z.string().optional(),
});

export type InvoiceData = z.infer<typeof invoiceSchema>;

export async function extractInvoice(file: string | File | Blob | Uint8Array) {
  const { output } = await extract({
    file,
    output: Output.object({ schema: invoiceSchema }),
  });

  return output;
}
```

Model responses are still external data. Keep schemas strict enough for application use, then handle Zod validation errors at the application boundary with useful user-facing messages or retry behavior.

## Provider Selection

Configure a provider once near application startup when all document operations should use the same model:

```ts
import { configure } from "document-sdk";
import { ocrbase } from "@doc-sdk/ocrbase";

configure({
  model: ocrbase("paddleocr"),
});
```

Pass `model` inline when a single call needs a different provider or model:

```ts
import { parse } from "document-sdk";
import { ocrbase } from "@doc-sdk/ocrbase";

await parse({
  file: "invoice.pdf",
  model: ocrbase("glm-ocr"),
});
```

Current ocrbase model IDs are `paddleocr` and `glm-ocr`.

## Batches

If the installed doc-sdk version exports `batchParse()` or `batchExtract()`, use those APIs for batch work. If it does not, implement a small app-local helper that preserves order and limits concurrency according to provider rate limits.

```ts
import { parse } from "document-sdk";

export async function parseDocuments(files: string[], concurrency = 3) {
  const results: string[] = [];

  for (let index = 0; index < files.length; index += concurrency) {
    const chunk = files.slice(index, index + concurrency);
    const parsed = await Promise.all(chunk.map((file) => parse({ file })));
    results.push(...parsed.map(({ text }) => text));
  }

  return results;
}
```

Do not launch unbounded provider calls for user-uploaded batches.

## Framework Pattern

Keep route handlers thin. Example server route shape:

```ts
import { extractInvoice } from "@/lib/documents";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return Response.json({ error: "Missing file" }, { status: 400 });
  }

  const invoice = await extractInvoice(file);
  return Response.json({ invoice });
}
```

Adapt response and error helpers to the framework already used by the project.

## Validation Checklist

- `document-sdk`, `zod`, and the selected provider package are installed.
- Required provider secrets are present in `.env` or the project's secret manager.
- SDK calls run only on the server when secrets are required.
- Extraction schemas match downstream app needs and export inferred TypeScript types.
- Tests cover the wrapper module and error handling. Mock SDK/provider calls unless live integration tests are explicitly expected.
- Typecheck and the project's normal test command pass.
