import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "../../index.prod.js";

describe("operation/defaulted", () => {
  const default_value = "hello";
  const defaulted_operation_prod = prod.defaulted(string_type, () => default_value);
  const defaulted_operation_dev = dev.defaulted(string_type, () => default_value);

  it.prop([fc.string()])("should return input if it matches operation", (v) => {
    expect(defaulted_operation_prod(v)).toBe(v);
    expect(defaulted_operation_dev(v)).toBe(v);
  });

  it.prop([fc.nat()])(
    "should return default value if it does not match operation",
    (v) => {
      expect(defaulted_operation_prod(v as any)).toBe(default_value);
      expect(defaulted_operation_dev(v as any)).toBe(default_value);
    },
  );
});
