import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/set_instance", () => {
  it("should return value if it's an instance of a Set", () => {
    const v = new Set();
    expect(prod.set_instance(v)).toBe(v);
    expect(dev.set_instance(v)).toBe(v);
  });

  it("should throw errorProd if value is not an instance of a Set", () => {
    fc.assert(
      fc.property(fc.anything(), (v) => {
        expect(() => prod.set_instance(v as any)).toThrow();
        expect(() => dev.set_instance(v as any)).toThrow();
      }),
    );
  });
});
