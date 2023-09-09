import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/boolean_type", () => {
  it("should pass if input is boolean", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(prod.boolean_type(v)).toBe(v);
        expect(dev.boolean_type(v)).toBe(v);
      }),
    );
  });

  it("should throw if input is not boolean", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => prod.boolean_type(v as any)).toThrow();
        expect(() => dev.boolean_type(v as any)).toThrow();
      }),
    );
  });
});
