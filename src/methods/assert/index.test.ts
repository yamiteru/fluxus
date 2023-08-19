import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";

describe("method/assert", () => {
  it("should not throw if input matches operation", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => prod.assert(string_type, v)).not.toThrow();
        expect(() => dev.assert(string_type, v)).not.toThrow();
      }),
    );
  });

  it("should throw if input doesn't match operation", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(() => prod.assert(string_type, v)).toThrow();
        expect(() => dev.assert(string_type, v)).toThrow();
      }),
    );
  });
});
