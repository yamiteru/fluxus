import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { defaulted } from "./defaulted.js";
import { string_type } from "../string_type/index.js";

describe("operation/defaulted", () => {
  const default_value = "hello";
  const defaulted_operation = defaulted(string_type, default_value);

  it.prop([fc.string()])("should return input if it matches operation", (v) => {
    expect(defaulted_operation(v)).toBe(v);
  });

  it.prop([fc.nat()])(
    "should return default value if it does not match operation",
    (v) => {
      expect(defaulted_operation(v as any)).toBe(default_value);
    },
  );
});
