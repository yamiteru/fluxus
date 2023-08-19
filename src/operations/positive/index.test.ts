import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/positive", () => {
  it("should pass on positive number", () => {
    fc.assert(
      fc.property(fc.integer({ min: 0 }), (v) => {
        expect(prod.positive(v)).toBe(v);
        expect(dev.positive(v)).toBe(v);
      }),
    );
  });

  it("should throw on negative number", () => {
    fc.assert(
      fc.property(fc.integer({ max: -1 }), (v) => {
        expect(() => prod.positive(v)).toThrow();
        expect(() => dev.positive(v)).toThrow();
      }),
    );
  });
});
