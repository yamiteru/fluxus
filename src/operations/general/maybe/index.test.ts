import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "../../index.prod.js";

describe("operation/general/maybe", () => {
  const maybe_number_prod = prod.maybe(number_type);
  const maybe_number_dev = dev.maybe(number_type);

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(maybe_number_prod(v)).toBe(v);
    expect(maybe_number_dev(v)).toBe(v);
  });

  it("should pass if value matches undefined", () => {
    expect(maybe_number_prod(undefined)).toBe(undefined);
    expect(maybe_number_dev(undefined)).toBe(undefined);
  });

  it("should pass if value matches null", () => {
    expect(maybe_number_prod(null)).toBe(null);
    expect(maybe_number_dev(null)).toBe(null);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => maybe_number_prod(v)).toThrow();
      expect(() => maybe_number_dev(v)).toThrow();
    },
  );
});
