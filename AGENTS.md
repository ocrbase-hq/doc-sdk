# doc-sdk

This is developer first, ultra light weight, provider agnostic TS SDK standardizes integrating visual language models (VLMs) across supported providers.

## doc-sdk core

- loads supported providers API_TOKENs from .env
- parse() # turn document into text
- streamParse() # stream text from document parse
- extract() # extract data from document into .json, supports structured outputs
- streamExtract() # stream json from document extract
- batchParse() # batch parse
- batchExtract() # batch extract

## doc-sdk providers

- [ocrbase](https://ocrbase.dev)
- [mistral-ocr](https://docs.mistral.ai/capabilities/document_ai/basic_ocr)
- [llamaparse](https://developers.llamaindex.ai/reference/typescript)
- [Azure](https://learn.microsoft.com/en-us/javascript/api/@azure/ai-form-recognizer/?view=azure-node-latest)