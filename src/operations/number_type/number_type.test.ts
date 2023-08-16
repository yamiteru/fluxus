import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { number_type } from "./number_type.js";

describe("operation/number_type", () => {
  it.prop([fc.integer()])("should pass if input is number", (v) => {
    expect(number_type(v)).toBe(v);
  });

  it.prop([fc.string()])("should throw if input is not number", (v) => {
    expect(() => number_type(v as any)).toThrow();
  });
});
