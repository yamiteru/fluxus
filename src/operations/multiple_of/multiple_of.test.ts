import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { multiple_of } from "./multiple_of.js";

describe("operation/multiple_of", () => {
  it("should return the value if it is a multiple of the multiple", () => {
    expect(multiple_of(2)(4)).toBe(4);
  });

  it("should throw an error if the value is not a multiple of the multiple", () => {
    expect(() => multiple_of(2)(5)).toThrow();
  });
});
