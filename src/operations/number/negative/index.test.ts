import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/negative", () => {
  it("should pass on negative number", () => {
    fc.assert(
      fc.property(fc.integer({ max: 0 }), (v) => {
        expect(prod.negative(v)).toBe(v);
        expect(dev.negative(v)).toBe(v);
      }),
    );
  });

  it("should throw on positive number", () => {
    fc.assert(
      fc.property(fc.integer({ min: 1 }), (v) => {
        expect(() => prod.negative(v)).toThrow();
        expect(() => dev.negative(v)).toThrow();
      }),
    );
  });
});
