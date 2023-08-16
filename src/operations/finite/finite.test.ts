import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { finite } from "./finite.js";

describe("operation/finite", () => {
  it.prop([fc.nat()])("should return the value if it is finite", (value) => {
    expect(finite(value)).toBe(value);
  });

  it("should throw an error if the value is not finite", () => {
    expect(() => finite(Infinity)).toThrow();
  });
});
