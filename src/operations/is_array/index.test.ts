import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/is_array", () => {
  it("should return value if it matches operation", () => {
    fc.assert(
      fc.property(fc.array(fc.anything()), (v) => {
        expect(prod.is_array(v)).toEqual(v);
        expect(dev.is_array(v)).toEqual(v);
      }),
    );
  });

  it("should throw errorProd if it doesn't match operation", () => {
    fc.assert(
      fc.property(fc.oneof(fc.string(), fc.nat(), fc.boolean()), (v) => {
        expect(() => prod.is_array(v as any)).toThrow();
        expect(() => dev.is_array(v as any)).toThrow();
      }),
    );
  });
});
