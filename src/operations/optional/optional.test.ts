import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { optional } from "./optional.js";

describe("operation/general/optional", () => {
  const optional_number = optional((v: unknown) => {
    if (typeof v !== "number") throw {};
    return v;
  });

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(optional_number(v)).toBe(v);
  });

  it("should pass if value matches undefined", () => {
    expect(optional_number(undefined)).toBe(undefined);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => optional_number(v)).toThrow();
    },
  );
});
