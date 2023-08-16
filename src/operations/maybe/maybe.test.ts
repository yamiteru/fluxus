import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { maybe } from "./maybe.js";

describe("operation/general/maybe", () => {
  const maybe_number = maybe((v: unknown) => {
    if (typeof v !== "number") throw {};
    return v;
  });

  it.prop([fc.integer()])("should pass if value matches operation", (v) => {
    expect(maybe_number(v)).toBe(v);
  });

  it("should pass if value matches undefined", () => {
    expect(maybe_number(undefined)).toBe(undefined);
  });

  it("should pass if value matches null", () => {
    expect(maybe_number(null)).toBe(null);
  });

  it.prop([fc.string()])(
    "should throw if value doesn't match operation or null",
    (v) => {
      expect(() => maybe_number(v)).toThrow();
    },
  );
});
