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

| Provider               | Price ($ / 1k pages) |
| ---------------------- | -------------------- |
| ocrbase                | 1$                   |
| Mistral OCR            | 2$                   |
| LlamaParse             | 3.75$                |
| Azure Doc Intelligence | 10–30$               |
| AWS Textract           | 15–50$               |
| Extend AI\*            | 10–15$               |
| Reducto\*              | 5–10$                |
| Unstructured\*         | 30$                  |

\*Sales call required. Only `ocrbase` is available today — other providers are coming soon.

## 🚀 Quick Start

```sh
bun i document-sdk
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

Set your provider credentials in `.env` eg. using:

**[Generate ocrbase api key](https://ocrbase.dev/playground/api-keys)**

```sh
OCRBASE_API_KEY=
```

## 🎛️ Picking a Provider

By default, `doc-sdk` auto-resolves `@doc-sdk/ocrbase` if installed. Override via pass a model per call:

```ts
import { parse } from "document-sdk";
import { ocrbase } from "@doc-sdk/ocrbase";

await parse({
  model: ocrbase("paddleocr"),
  file: "invoice.pdf",
});
```

```ts
import { parse } from "document-sdk";
import { mistral } from "@doc-sdk/mistral";

await parse({
  model: mistral("mistral-ocr-latest"),
  file: "invoice.pdf",
});
```
