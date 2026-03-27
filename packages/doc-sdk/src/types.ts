import type { ZodType } from "zod";

export type DocumentFile =
  | string
  | Buffer
  | ArrayBuffer
  | Uint8Array
  | File
  | Blob;

/**
 * A document model instance returned by a provider factory.
 * e.g. `llamaparse("cost-effective")` or `ocrbase("glm-ocr")`
 */
export interface DocumentModel {
  readonly provider: string;
  readonly modelId: string;

  doParse(file: DocumentFile): Promise<string>;
  doExtract(file: DocumentFile, schema?: ZodType): Promise<unknown>;
}

/**
 * Spec that provider packages implement to create a model factory.
 */
export interface DocumentModelSpec {
  readonly provider: string;
  readonly modelId: string;
  doParse(file: DocumentFile): Promise<string>;
  doExtract(file: DocumentFile, schema?: ZodType): Promise<unknown>;
}

// ── parse ──

export interface ParseOptions {
  model?: DocumentModel;
  file: DocumentFile;
}

export interface ParseResult {
  text: string;
}

// ── extract ──

export interface ExtractOptions<T = unknown> {
  model?: DocumentModel;
  file: DocumentFile;
  output?: OutputDescriptor<T>;
}

export interface ExtractResult<T = unknown> {
  output: T;
}

// ── output descriptor ──

export interface OutputDescriptor<T = unknown> {
  type: "object";
  schema: ZodType<T>;
}
