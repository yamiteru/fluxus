import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/finite", () => {
  it("should return the value if it is finite", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(prod.finite(v)).toBe(v);
        expect(dev.finite(v)).toBe(v);
      }),
    );
  });

  it("should throw an errorProd if the value is not finite", () => {
    expect(() => prod.finite(Infinity)).toThrow();
    expect(() => dev.finite(Infinity)).toThrow();
  });
});
