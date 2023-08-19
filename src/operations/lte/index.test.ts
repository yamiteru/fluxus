import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/lte", () => {
  it("should return the value if it is less than or equal to the max", () => {
    fc.assert(
      fc.property(fc.integer({ max: 10 }), (v) => {
        expect(prod.lte(10)(v)).toBeLessThanOrEqual(10);
        expect(dev.lte(10)(v)).toBeLessThanOrEqual(10);
      }),
    );
  });

  it("should throw if the value is not less than or equal to the max", () => {
    fc.assert(
      fc.property(fc.integer({ min: 11 }), (v) => {
        expect(() => prod.lte(10)(v)).toThrow();
        expect(() => dev.lte(10)(v)).toThrow();
      }),
    );
  });
});
