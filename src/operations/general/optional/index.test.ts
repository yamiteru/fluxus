import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "../../index.prod.js";

describe("operation/general/optional", () => {
  const optional_number_prod = prod.optional(number_type);
  const optional_number_dev = dev.optional(number_type);

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(optional_number_prod(v)).toBe(v);
    expect(optional_number_dev(v)).toBe(v);
  });

  it("should pass if value matches undefined", () => {
    expect(optional_number_prod(undefined)).toBe(undefined);
    expect(optional_number_dev(undefined)).toBe(undefined);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => optional_number_prod(v)).toThrow();
      expect(() => optional_number_dev(v)).toThrow();
    },
  );
});
