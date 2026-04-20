import type { ZodType } from "zod";

export type DocumentFile = string | Buffer | ArrayBuffer | Uint8Array | File | Blob | URL;

export interface DocumentModel {
  readonly provider: string;
  readonly modelId: string;

  doParse(file: DocumentFile): Promise<string>;
  doExtract(file: DocumentFile, schema?: ZodType): Promise<unknown>;
}

export interface ParseOptions {
  model?: DocumentModel;
  file: DocumentFile;
}

export interface ParseResult {
  text: string;
}

export interface ExtractOptions<T = unknown> {
  model?: DocumentModel;
  file: DocumentFile;
  output?: OutputDescriptor<T>;
}

export interface ExtractResult<T = unknown> {
  output: T;
}

export interface OutputDescriptor<T = unknown> {
  type: "object";
  schema: ZodType<T>;
}
