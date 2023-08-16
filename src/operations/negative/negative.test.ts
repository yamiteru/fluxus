import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { negative } from "./negative.js";

describe("operation/negative", () => {
  it.prop([fc.integer({ max: 0 })])("should pass on negative number", (v) => {
    expect(negative(v)).toBe(v);
  });

  it.prop([fc.integer({ min: 1 })])("should throw on positive number", (v) => {
    expect(() => negative(v)).toThrow();
  });
});
