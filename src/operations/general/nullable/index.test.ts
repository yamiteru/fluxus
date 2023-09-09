import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/types/number_type/index.prod.js";

describe("operation/nullable", () => {
  const nullable_number_prod = prod.nullable(number_type);
  const nullable_number_dev = dev.nullable(number_type);

  it("should pass if value matches operation", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(nullable_number_prod(v as any)).toBe(v);
        expect(nullable_number_dev(v as any)).toBe(v);
      }),
    );
  });

  it("should pass if value matches null", () => {
    expect(nullable_number_prod(null)).toBe(null);
    expect(nullable_number_dev(null)).toBe(null);
  });

  it("should throw if value doesn't match operation or null", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => nullable_number_prod(v as any)).toThrow();
        expect(() => nullable_number_dev(v as any)).toThrow();
      }),
    );
  });
});
