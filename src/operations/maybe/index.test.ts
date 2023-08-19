import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/number_type/index.prod.js";

describe("operation/general/maybe", () => {
  const maybe_number_prod = prod.maybe(number_type);
  const maybe_number_dev = dev.maybe(number_type);

  it("should pass if value matches operation", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(maybe_number_prod(v)).toBe(v);
        expect(maybe_number_dev(v)).toBe(v);
      }),
    );
  });

  it("should pass if value matches undefined", () => {
    expect(maybe_number_prod(undefined)).toBe(undefined);
    expect(maybe_number_dev(undefined)).toBe(undefined);
  });

  it("should pass if value matches null", () => {
    expect(maybe_number_prod(null)).toBe(null);
    expect(maybe_number_dev(null)).toBe(null);
  });

  it("should throw if value doesn't match operation or null", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => maybe_number_prod(v)).toThrow();
        expect(() => maybe_number_dev(v)).toThrow();
      }),
    );
  });
});
