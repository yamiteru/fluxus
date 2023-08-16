import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { undefined_type } from "./undefined_type.js";

describe("operation/undefined_type", () => {
  it("should pass if input is undefined", () => {
    expect(undefined_type(undefined)).toBe(undefined);
  });

  it.prop([fc.integer()])("should throw if input is not undefined", (v) => {
    expect(() => undefined_type(v as any)).toThrow();
  });
});
