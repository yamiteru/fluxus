import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/gte", () => {
  it("should return the value if it is greater than or equal to the min", () => {
    fc.assert(
      fc.property(fc.integer({ min: 10 }), (v) => {
        expect(prod.gte(10)(v)).toBeGreaterThanOrEqual(10);
        expect(dev.gte(10)(v)).toBeGreaterThanOrEqual(10);
      }),
    );
  });

  it("should throw if the value is not greater than or equal to the min", () => {
    fc.assert(
      fc.property(fc.integer({ max: 9 }), (v) => {
        expect(() => prod.gte(10)(v)).toThrow();
        expect(() => dev.gte(10)(v)).toThrow();
      }),
    );
  });
});
