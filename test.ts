import { parse } from "@doc-sdk/core";

process.env["OCRBASE_API_KEY"] = "xaat-b1eee2b3-807e-4e75-b459-db3cf3e3d881";

const document = Bun.file(
  "/Users/adammajcher/Documents/health/medical bill.png"
);

const { text } = await parse({
  file: document,
});

console.log(text);
