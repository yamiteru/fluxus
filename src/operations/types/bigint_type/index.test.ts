import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/bigint_type", () => {
  it("should return the value if it is a bigint", () => {
    fc.assert(
      fc.property(fc.bigInt(), (v) => {
        expect(prod.bigint_type(v)).toBe(v);
        expect(dev.bigint_type(v)).toBe(v);
      }),
    );
  });

  it("should throw an errorProd if the value is not a bigint", () => {
    fc.assert(
      fc.property(fc.anything(), (v) => {
        expect(() => prod.bigint_type(v as any)).toThrow();
        expect(() => dev.bigint_type(v as any)).toThrow();
      }),
    );
  });
});
