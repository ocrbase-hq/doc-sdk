// oxlint-disable typescript/no-empty-object-type
// oxlint-disable typescript/ban-types
import type { Elysia } from "elysia";

export declare const app: Elysia<
  "",
  {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
  },
  {
    typebox: {};
    error: {};
  } & {
    typebox: {};
    error: {};
  } & {
    typebox: {};
    error: {};
  },
  {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
  } & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
  } & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
  },
  {
    get: {
      body: unknown;
      params: {};
      query: unknown;
      headers: unknown;
      response: {
        200: {
          message: string;
        };
      };
    };
  } & {
    v1: {
      health: {
        get: {
          body: unknown;
          params: {};
          query: unknown;
          headers: unknown;
          response: {
            200: {
              status: string;
            };
          };
        };
      };
    };
  } & {
    v1: {
      parse: {
        post: {
          body: {
            file: string | File;
            model: string;
          };
          params: {};
          query: unknown;
          headers: unknown;
          response: {
            422: {
              type: "validation";
              on: string;
              summary?: string;
              message?: string;
              found?: unknown;
              property?: string;
              expected?: string;
            };
          };
        };
      };
    };
  },
  {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
  },
  {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
  } & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
  } & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
  }
>;

export type App = typeof app;
