import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/is_object", () => {
  it("should return if value is an object", () => {
    fc.assert(
      fc.property(fc.object(), (v) => {
        expect(prod.is_object(v)).toEqual(v);
        expect(dev.is_object(v)).toEqual(v);
      }),
    );
  });

  it("should throw error if value is null", () => {
    fc.assert(
      fc.property(fc.constantFrom(null), (v) => {
        expect(() => prod.is_object(v as any)).toThrow();
        expect(() => dev.is_object(v as any)).toThrow();
      }),
    );
  });
});
