import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/number_type/index.prod.js";

describe("operation/general/optional", () => {
  const optional_number_prod = prod.optional(number_type);
  const optional_number_dev = dev.optional(number_type);

  it("should pass if value matches operation", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(optional_number_prod(v as any)).toBe(v);
        expect(optional_number_dev(v as any)).toBe(v);
      }),
    );
  });

  it("should pass if value matches undefined", () => {
    expect(optional_number_prod(undefined)).toBe(undefined);
    expect(optional_number_dev(undefined)).toBe(undefined);
  });

  it("should throw if value doesn't match operation or null", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => optional_number_prod(v as any)).toThrow();
        expect(() => optional_number_dev(v as any)).toThrow();
      }),
    );
  });
});
