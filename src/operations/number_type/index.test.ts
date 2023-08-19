import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/number_type", () => {
  it("should pass if input is number", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.number_type(v)).toBe(v);
      }),
    );
  });

  it("should throw if input is not number", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => prod.number_type(v as any)).toThrow();
        expect(() => dev.number_type(v as any)).toThrow();
      }),
    );
  });
});
