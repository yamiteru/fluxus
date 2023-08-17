import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "../../index.prod.js";

describe("operation/nullable", () => {
  const nullable_number_prod = prod.nullable(number_type);
  const nullable_number_dev = dev.nullable(number_type);

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(nullable_number_prod(v as any)).toBe(v);
    expect(nullable_number_dev(v as any)).toBe(v);
  });

  it("should pass if value matches null", () => {
    expect(nullable_number_prod(null)).toBe(null);
    expect(nullable_number_dev(null)).toBe(null);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => nullable_number_prod(v as any)).toThrow();
      expect(() => nullable_number_dev(v as any)).toThrow();
    },
  );
});
