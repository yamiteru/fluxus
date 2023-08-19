import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/string_type", () => {
  it("should pass if input is string", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.string_type(v)).toBe(v);
        expect(dev.string_type(v)).toBe(v);
      }),
    );
  });

  it("should throw if input is not string", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => prod.string_type(v as any)).toThrow();
        expect(() => dev.string_type(v as any)).toThrow();
      }),
    );
  });
});
