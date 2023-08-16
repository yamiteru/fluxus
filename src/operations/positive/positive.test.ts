import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { positive } from "./positive.js";

describe("operation/positive", () => {
  it.prop([fc.integer({ min: 0 })])("should pass on positive number", (v) => {
    expect(positive(v)).toBe(v);
  });

  it.prop([fc.integer({ max: -1 })])("should throw on negative number", (v) => {
    expect(() => positive(v)).toThrow();
  });
});
