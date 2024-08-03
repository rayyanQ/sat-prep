/**
 * Place this file in the `he` folder in node_modules.
 * The file should be named `he.d.ts`.
 * The `he` modules does not have a declaration file by default.
 */

type encodeOptions = {
  "allowUnsafeSymbols"?: boolean;
  "encodeEverything"?: boolean;
  "strict"?: boolean;
  "useNamedReferences"?: boolean;
  "decimal"?: boolean;
}
type decodeOptions = {
  "isAttributeValue"?: boolean;
  "strict"?: boolean;
};

declare var he: {
  version: string;
  encode: (string: string, options?: encodeOptions) => string;
  decode: (html: string, options?: decodeOptions) => string;
  escape: (string: string) => string;
  unescape: (html: string, options?: decodeOptions) => string;
}

export = he;