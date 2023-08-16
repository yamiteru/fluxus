import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { string_type } from "./string_type.js";

describe("operation/string_type", () => {
  it.prop([fc.string()])("should pass if input is string", (v) => {
    expect(string_type(v)).toBe(v);
  });

  it.prop([fc.integer()])("should throw if input is not string", (v) => {
    expect(() => string_type(v as any)).toThrow();
  });
});
