import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { nullable } from "./nullable.js";

describe("operation/nullable", () => {
  const nullable_number = nullable((v: unknown) => {
    if (typeof v !== "number") throw {};
    return v;
  });

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(nullable_number(v as any)).toBe(v);
  });

  it("should pass if value matches null", () => {
    expect(nullable_number(null)).toBe(null);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => nullable_number(v as any)).toThrow();
    },
  );
});
