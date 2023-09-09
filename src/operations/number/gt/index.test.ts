import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/gt", () => {
  it("should return the value if it is greater than the min", () => {
    fc.assert(
      fc.property(fc.integer({ min: 11 }), (v) => {
        expect(prod.gt(10)(v)).toBeGreaterThan(10);
        expect(dev.gt(10)(v)).toBeGreaterThan(10);
      }),
    );
  });

  it("should throw if the value is not greater than the min", () => {
    fc.assert(
      fc.property(fc.integer({ max: 10 }), (v) => {
        expect(() => prod.gt(10)(v)).toThrow();
        expect(() => dev.gt(10)(v)).toThrow();
      }),
    );
  });
});
