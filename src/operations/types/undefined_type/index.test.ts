import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/undefined_type", () => {
  it("should pass if input is undefined", () => {
    expect(prod.undefined_type(undefined)).toBe(undefined);
    expect(dev.undefined_type(undefined)).toBe(undefined);
  });

  it("should throw if input is not undefined", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => prod.undefined_type(v as any)).toThrow();
        expect(() => dev.undefined_type(v as any)).toThrow();
      }),
    );
  });
});
