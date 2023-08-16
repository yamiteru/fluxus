import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { literal } from "./literal.js";

describe("operation/literal", () => {
  const match_one = literal(1);

  it("should pass if value matches literal value", () => {
    expect(match_one(1)).toBe(1);
  });

  it("should throw if length doesn't match", () => {
    expect(() => match_one(2 as any)).toThrow();
  });
});
