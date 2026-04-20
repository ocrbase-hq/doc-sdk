// oxlint-disable typescript/no-empty-object-type
// oxlint-disable typescript/ban-types
import type {
  Cookie,
  Elysia,
  ElysiaCustomStatusResponse,
  HTTPHeaders,
  redirect,
  StatusMap,
} from "elysia";
import type { ElysiaCookie } from "elysia/cookies";
import type { Server } from "elysia/universal/server";
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
  } & {
    schema: {};
    standaloneSchema: {};
    macro: Partial<{
      readonly auth: boolean;
    }>;
    macroFn: {
      readonly auth: {
        readonly resolve: ({
          status,
          request: { headers },
        }: {
          body: unknown;
          query: Record<string, string>;
          params: {};
          headers: Record<string, string | undefined>;
          cookie: Record<string, Cookie<unknown>>;
          server: Server | null;
          redirect: redirect;
          set: {
            headers: HTTPHeaders;
            status?: number | keyof StatusMap;
            redirect?: string;
            cookie?: Record<string, ElysiaCookie>;
          };
          path: string;
          route: string;
          request: Request;
          store: {};
          status: <
            const Code extends number | keyof StatusMap,
            const T = Code extends
              | 100
              | 101
              | 102
              | 103
              | 200
              | 201
              | 202
              | 203
              | 204
              | 205
              | 206
              | 207
              | 208
              | 300
              | 301
              | 302
              | 303
              | 304
              | 307
              | 308
              | 400
              | 401
              | 402
              | 403
              | 404
              | 405
              | 406
              | 407
              | 408
              | 409
              | 410
              | 411
              | 412
              | 413
              | 414
              | 415
              | 416
              | 417
              | 418
              | 420
              | 421
              | 422
              | 423
              | 424
              | 425
              | 426
              | 428
              | 429
              | 431
              | 451
              | 500
              | 501
              | 502
              | 503
              | 504
              | 505
              | 506
              | 507
              | 508
              | 510
              | 511
              ? {
                  readonly 100: "Continue";
                  readonly 101: "Switching Protocols";
                  readonly 102: "Processing";
                  readonly 103: "Early Hints";
                  readonly 200: "OK";
                  readonly 201: "Created";
                  readonly 202: "Accepted";
                  readonly 203: "Non-Authoritative Information";
                  readonly 204: "No Content";
                  readonly 205: "Reset Content";
                  readonly 206: "Partial Content";
                  readonly 207: "Multi-Status";
                  readonly 208: "Already Reported";
                  readonly 300: "Multiple Choices";
                  readonly 301: "Moved Permanently";
                  readonly 302: "Found";
                  readonly 303: "See Other";
                  readonly 304: "Not Modified";
                  readonly 307: "Temporary Redirect";
                  readonly 308: "Permanent Redirect";
                  readonly 400: "Bad Request";
                  readonly 401: "Unauthorized";
                  readonly 402: "Payment Required";
                  readonly 403: "Forbidden";
                  readonly 404: "Not Found";
                  readonly 405: "Method Not Allowed";
                  readonly 406: "Not Acceptable";
                  readonly 407: "Proxy Authentication Required";
                  readonly 408: "Request Timeout";
                  readonly 409: "Conflict";
                  readonly 410: "Gone";
                  readonly 411: "Length Required";
                  readonly 412: "Precondition Failed";
                  readonly 413: "Payload Too Large";
                  readonly 414: "URI Too Long";
                  readonly 415: "Unsupported Media Type";
                  readonly 416: "Range Not Satisfiable";
                  readonly 417: "Expectation Failed";
                  readonly 418: "I'm a teapot";
                  readonly 420: "Enhance Your Calm";
                  readonly 421: "Misdirected Request";
                  readonly 422: "Unprocessable Content";
                  readonly 423: "Locked";
                  readonly 424: "Failed Dependency";
                  readonly 425: "Too Early";
                  readonly 426: "Upgrade Required";
                  readonly 428: "Precondition Required";
                  readonly 429: "Too Many Requests";
                  readonly 431: "Request Header Fields Too Large";
                  readonly 451: "Unavailable For Legal Reasons";
                  readonly 500: "Internal Server Error";
                  readonly 501: "Not Implemented";
                  readonly 502: "Bad Gateway";
                  readonly 503: "Service Unavailable";
                  readonly 504: "Gateway Timeout";
                  readonly 505: "HTTP Version Not Supported";
                  readonly 506: "Variant Also Negotiates";
                  readonly 507: "Insufficient Storage";
                  readonly 508: "Loop Detected";
                  readonly 510: "Not Extended";
                  readonly 511: "Network Authentication Required";
                }[Code]
              : Code,
          >(
            code: Code,
            response?: T,
          ) => ElysiaCustomStatusResponse<
            Code,
            T,
            Code extends
              | "Continue"
              | "Switching Protocols"
              | "Processing"
              | "Early Hints"
              | "OK"
              | "Created"
              | "Accepted"
              | "Non-Authoritative Information"
              | "No Content"
              | "Reset Content"
              | "Partial Content"
              | "Multi-Status"
              | "Already Reported"
              | "Multiple Choices"
              | "Moved Permanently"
              | "Found"
              | "See Other"
              | "Not Modified"
              | "Temporary Redirect"
              | "Permanent Redirect"
              | "Bad Request"
              | "Unauthorized"
              | "Payment Required"
              | "Forbidden"
              | "Not Found"
              | "Method Not Allowed"
              | "Not Acceptable"
              | "Proxy Authentication Required"
              | "Request Timeout"
              | "Conflict"
              | "Gone"
              | "Length Required"
              | "Precondition Failed"
              | "Payload Too Large"
              | "URI Too Long"
              | "Unsupported Media Type"
              | "Range Not Satisfiable"
              | "Expectation Failed"
              | "I'm a teapot"
              | "Enhance Your Calm"
              | "Misdirected Request"
              | "Unprocessable Content"
              | "Locked"
              | "Failed Dependency"
              | "Too Early"
              | "Upgrade Required"
              | "Precondition Required"
              | "Too Many Requests"
              | "Request Header Fields Too Large"
              | "Unavailable For Legal Reasons"
              | "Internal Server Error"
              | "Not Implemented"
              | "Bad Gateway"
              | "Service Unavailable"
              | "Gateway Timeout"
              | "HTTP Version Not Supported"
              | "Variant Also Negotiates"
              | "Insufficient Storage"
              | "Loop Detected"
              | "Not Extended"
              | "Network Authentication Required"
              ? {
                  readonly Continue: 100;
                  readonly "Switching Protocols": 101;
                  readonly Processing: 102;
                  readonly "Early Hints": 103;
                  readonly OK: 200;
                  readonly Created: 201;
                  readonly Accepted: 202;
                  readonly "Non-Authoritative Information": 203;
                  readonly "No Content": 204;
                  readonly "Reset Content": 205;
                  readonly "Partial Content": 206;
                  readonly "Multi-Status": 207;
                  readonly "Already Reported": 208;
                  readonly "Multiple Choices": 300;
                  readonly "Moved Permanently": 301;
                  readonly Found: 302;
                  readonly "See Other": 303;
                  readonly "Not Modified": 304;
                  readonly "Temporary Redirect": 307;
                  readonly "Permanent Redirect": 308;
                  readonly "Bad Request": 400;
                  readonly Unauthorized: 401;
                  readonly "Payment Required": 402;
                  readonly Forbidden: 403;
                  readonly "Not Found": 404;
                  readonly "Method Not Allowed": 405;
                  readonly "Not Acceptable": 406;
                  readonly "Proxy Authentication Required": 407;
                  readonly "Request Timeout": 408;
                  readonly Conflict: 409;
                  readonly Gone: 410;
                  readonly "Length Required": 411;
                  readonly "Precondition Failed": 412;
                  readonly "Payload Too Large": 413;
                  readonly "URI Too Long": 414;
                  readonly "Unsupported Media Type": 415;
                  readonly "Range Not Satisfiable": 416;
                  readonly "Expectation Failed": 417;
                  readonly "I'm a teapot": 418;
                  readonly "Enhance Your Calm": 420;
                  readonly "Misdirected Request": 421;
                  readonly "Unprocessable Content": 422;
                  readonly Locked: 423;
                  readonly "Failed Dependency": 424;
                  readonly "Too Early": 425;
                  readonly "Upgrade Required": 426;
                  readonly "Precondition Required": 428;
                  readonly "Too Many Requests": 429;
                  readonly "Request Header Fields Too Large": 431;
                  readonly "Unavailable For Legal Reasons": 451;
                  readonly "Internal Server Error": 500;
                  readonly "Not Implemented": 501;
                  readonly "Bad Gateway": 502;
                  readonly "Service Unavailable": 503;
                  readonly "Gateway Timeout": 504;
                  readonly "HTTP Version Not Supported": 505;
                  readonly "Variant Also Negotiates": 506;
                  readonly "Insufficient Storage": 507;
                  readonly "Loop Detected": 508;
                  readonly "Not Extended": 510;
                  readonly "Network Authentication Required": 511;
                }[Code]
              : Code
          >;
        }) => Promise<
          | ElysiaCustomStatusResponse<401, unknown, 401>
          | {
              session: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
              };
              user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                name: string;
                image?: string | null | undefined;
                stripeCustomerId?: string | null | undefined;
              };
            }
        >;
      };
    };
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
      body: {};
      params: {};
      query: {};
      headers: {};
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
            model: "glm-ocr" | "paddleocr";
          };
          params: {};
          query: unknown;
          headers: unknown;
          response: {
            200: {
              markdown_result: string;
            };
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
  } & {
    v1: {
      parse: {
        async: {
          post: {
            body: {
              file: string | File;
              model: "glm-ocr" | "paddleocr";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
              200: {
                job_id: string | undefined;
              };
              401:
                | Record<string, unknown>
                | {
                    readonly error: "Unauthorized";
                  };
              402: Record<string, unknown>;
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
    };
  } & {
    v1: {
      extract: {
        post: {
          body: {
            file: string | File;
            model: "glm-ocr" | "paddleocr";
            schema?: unknown;
          };
          params: {};
          query: unknown;
          headers: unknown;
          response: {
            200: {
              json_result: unknown;
            };
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
  } & {
    v1: {
      extract: {
        async: {
          post: {
            body: {
              file: string | File;
              model: "glm-ocr" | "paddleocr";
              schema?: unknown;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
              200: {
                job_id: string | undefined;
              };
              401:
                | Record<string, unknown>
                | {
                    readonly error: "Unauthorized";
                  };
              402: Record<string, unknown>;
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
    };
  } & {
    v1: {
      jobs: {
        get: {
          body: unknown;
          params: {};
          query: unknown;
          headers: unknown;
          response: {
            200:
              | {
                  created_at: string;
                  file_name: string | null;
                  job_id: string;
                  method: "extract" | "parse";
                  status: "completed" | "failed" | "pending" | "processing";
                }[]
              | {
                  error: string;
                };
          };
        };
      };
    } & {
      job: {
        ":job_id": {
          get: {
            body: unknown;
            params: {
              job_id: string;
            };
            query: {
              wait?: boolean | undefined;
            };
            headers: unknown;
            response: {
              200:
                | {
                    error: string;
                    result?: undefined;
                    file_url?: undefined;
                    job_id?: undefined;
                    method?: undefined;
                    status?: undefined;
                  }
                | {
                    error: string | undefined;
                    file_url: string | null;
                    job_id: string;
                    method: "extract" | "parse";
                    result: string | null;
                    status: "completed" | "failed";
                  }
                | {
                    error: string;
                    file_url: string | null;
                    result?: undefined;
                    job_id?: undefined;
                    method?: undefined;
                    status?: undefined;
                  }
                | {
                    file_url: string | null;
                    job_id: string;
                    method: "extract" | "parse";
                    status: "pending" | "processing";
                    result?: undefined;
                    error?: undefined;
                  }
                | {
                    file_url: string | null;
                    job_id: string | undefined;
                    method: "extract" | "parse";
                    result: unknown;
                    status: "completed";
                    error?: undefined;
                  }
                | {
                    result?: undefined;
                    error: string;
                    file_url: string | null;
                    job_id: string | undefined;
                    method: "extract" | "parse";
                    status: "failed";
                  }
                | {
                    result?: undefined;
                    error?: undefined;
                    file_url: string | null;
                    job_id: string | undefined;
                    method: "extract" | "parse";
                    status:
                      | "active"
                      | "delayed"
                      | "prioritized"
                      | "unknown"
                      | "waiting"
                      | "waiting-children";
                  };
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
    } & {
      job: {
        ":job_id": {
          file: {
            get: {
              body: unknown;
              params: {
                job_id: string;
              };
              query: {
                exp: string;
                sig: string;
              };
              headers: unknown;
              response: {
                200:
                  | Response
                  | {
                      error: string;
                    };
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
      };
    };
  } & {
    v1: {
      billing: {
        usage: {
          get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
              200: {
                allow_overage: boolean;
                has_paid_plan: boolean;
                limit: number;
                overage_per_1k: number;
                period_end: string;
                period_start: string;
                plan: string | null;
                status: string | null;
                used: number;
              };
              401: {
                readonly error: "Unauthorized";
              };
            };
          };
        };
      };
    } & {
      billing: {
        overage: {
          patch: {
            body: {
              allowed: boolean;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
              200: {
                allow_overage: boolean;
              };
              401: {
                readonly error: "Unauthorized";
              };
              402: {
                readonly error: "A paid plan is required to enable overage";
              };
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
    response: {
      200: {
        readonly error: "Unauthorized";
      };
    };
  } & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
  }
>;

export type App = typeof app;
