<div align="center">
  <h1>doc-sdk: Provider-Agnostic Document SDK</h1>
  <p>
    <a href="https://www.npmjs.com/package/document-sdk"><img src="https://img.shields.io/npm/v/document-sdk?color=blue" alt="npm"></a>
    <img src="https://img.shields.io/badge/runtime-Bun-black?logo=bun&logoColor=white" alt="Bun">
    <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </p>
</div>

📄 **doc-sdk** is a **developer-first, ultra-lightweight** TypeScript SDK that standardizes integrating visual language models (VLMs) across supported providers.

## Key Features of doc-sdk

🪶 **Lightweight**: Tiny core, tree-shakeable, zero runtime config for the happy path.

🔌 **Provider-Agnostic**: Swap between ocrbase, mistral, llamaparse, and azure via a single import.

🧬 **Type-Safe Extraction**: First-class Zod schemas — get validated, typed JSON out of any document.

## 🧩 Core

- `parse()` — turn a document into text
- `extract()` — extract structured JSON from a document, with Zod-typed output
- `batchParse()` — batch parse
- `batchExtract()` — batch extract

## 🔌 Providers

- **[ocrbase](https://ocrbase.dev)** — `@doc-sdk/ocrbase`
- **[mistral](https://github.com/mistralai/client-ts)** — `@doc-sdk/mistral`
- **[llamaparse](https://github.com/run-llama/llama-cloud-ts)** — `@doc-sdk/llamaparse`
- **[azure](https://github.com/Azure/azure-sdk-for-js)** — `@doc-sdk/azure`

## 🚀 Quick Start

```sh
bun i document-sdk
```

Set your provider credentials in `.env`:

```sh
OCRBASE_API_KEY=sk_...
```

Parse a document:

```ts
import { parse } from "document-sdk";

const { text } = await parse({
  file: "invoice.pdf",
});
```

Extract structured data:

```ts
import { extract, Output } from "document-sdk";
import { z } from "zod";

const { output } = await extract({
  file: "invoice.pdf",
  output: Output.object({
    schema: z.object({
      total: z.number(),
      vendor: z.string(),
    }),
  }),
});
```

## 🎛️ Picking a Provider

By default, `doc-sdk` auto-resolves `@doc-sdk/ocrbase` if installed. Override via `configure()` or pass a model per call:

```ts
import { configure } from "document-sdk";
import { llamaparse } from "@doc-sdk/llamaparse";

configure({ model: llamaparse("cost-effective") });
```

Or inline:

```ts
import { parse } from "document-sdk";
import { mistral } from "@doc-sdk/mistral";

await parse({
  file: "invoice.pdf",
  model: mistral("mistral-ocr-latest"),
});
```

## 🛠️ Develop

```sh
bun install
bun run typecheck
```
