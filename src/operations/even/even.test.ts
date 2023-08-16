import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { even } from "./even.js";

describe("operation/even", () => {
  it("should return the value if it is even", () => {
    expect(even(4)).toBe(4);
  });

  it("should throw an error if the value is not even", () => {
    expect(() => even(5)).toThrow();
  });
});
