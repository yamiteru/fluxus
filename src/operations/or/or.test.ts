import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { or } from "./or.js";

describe("operation/or", () => {
  const string_or_number = or([
    (v: unknown) => {
      if (typeof v !== "string") throw {};
      return v;
    },
    (v: unknown) => {
      if (typeof v !== "number") throw {};
      return v;
    },
  ]);

  it.prop([fc.string(), fc.integer()])(
    "should pass if one of operations matches",
    (a, b) => {
      expect(string_or_number(a)).toBe(a);
      expect(string_or_number(b)).toBe(b);
    },
  );

  it.prop([fc.boolean()])(
    "should throw if none of operations doesn't match",
    (v) => {
      expect(() => string_or_number(v)).toThrow();
    },
  );
});
