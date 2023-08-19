import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/lt", () => {
  it("should return the value if it is less than the max", () => {
    fc.assert(
      fc.property(fc.integer({ max: 9 }), (v) => {
        expect(prod.lt(10)(v)).toBeLessThan(10);
        expect(dev.lt(10)(v)).toBeLessThan(10);
      }),
    );
  });

  it("should throw if the value is not less than the max", () => {
    fc.assert(
      fc.property(fc.integer({ min: 10 }), (v) => {
        expect(() => prod.lt(10)(v)).toThrow();
        expect(() => dev.lt(10)(v)).toThrow();
      }),
    );
  });
});
