import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { boolean_type } from "./boolean_type.js";

describe("operation/boolean_type", () => {
  it.prop([fc.boolean()])("should pass if input is boolean", (v) => {
    expect(boolean_type(v)).toBe(v);
  });

  it.prop([fc.integer()])("should throw if input is not boolean", (v) => {
    expect(() => boolean_type(v as any)).toThrow();
  });
});
