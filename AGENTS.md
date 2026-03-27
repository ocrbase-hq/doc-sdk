# doc-sdk

This is developer first, ultra light weight, provider agnostic TS SDK standardizes integrating visual language models (VLMs) across supported providers.

## doc-sdk core

- loads supported providers API_TOKENs from .env
- parse() # turn document into text
- extract() # extract data from document into .json, supports structured outputs
- batchParse() # batch parse
- batchExtract() # batch extract

## doc-sdk providers

- [ocrbase](https://ocrbase.dev)
- [mistral](https://github.com/mistralai/client-ts)
- [llamaparse](https://github.com/run-llama/llama-cloud-ts)
- [azure](https://github.com/Azure/azure-sdk-for-js)
