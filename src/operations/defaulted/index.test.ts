import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";

describe("operation/defaulted", () => {
  const default_value = "hello";
  const defaulted_operation_prod = prod.defaulted(
    string_type,
    () => default_value,
  );
  const defaulted_operation_dev = dev.defaulted(
    string_type,
    () => default_value,
  );

  it("should return input if it matches operation", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(defaulted_operation_prod(v)).toBe(v);
        expect(defaulted_operation_dev(v)).toBe(v);
      }),
    );
  });

  it("should return default value if it does not match operation", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(defaulted_operation_prod(v as any)).toBe(default_value);
        expect(defaulted_operation_dev(v as any)).toBe(default_value);
      }),
    );
  });
});
