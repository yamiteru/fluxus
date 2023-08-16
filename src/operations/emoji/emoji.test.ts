import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { emoji } from "./emoji.js";

describe("operation/emoji", () => {
  it("should return the value if it is an emoji", () => {
    expect(emoji("👍")).toBe("👍");
  });

  it("should throw an error if the value is not an emoji", () => {
    expect(() => emoji("foo")).toThrow();
  });
});
