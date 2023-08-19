import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("function_type", () => {
  it("should return the value if it is a function", () => {
    fc.assert(
      fc.property(fc.func(fc.anything()), (v) => {
        expect(prod.function_type(v)).toBe(v);
        expect(dev.function_type(v)).toBe(v);
      }),
    );
  });

  it("should throw an errorProd if the value is not a function", () => {
    fc.assert(
      fc.property(fc.oneof(fc.string(), fc.nat(), fc.boolean()), (v) => {
        expect(() => prod.function_type(v as any)).toThrow();
        expect(() => dev.function_type(v as any)).toThrow();
      }),
    );
  });
});
