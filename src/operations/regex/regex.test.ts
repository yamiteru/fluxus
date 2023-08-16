import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { regex } from "./regex.js";

describe("operation/regex", () => {
  it("should return the value if it matches the regex", () => {
    expect(regex(/abc/)("abc")).toBe("abc");
  });

  it("should throw an error if the value does not match the regex", () => {
    expect(() => regex(/abc/)("def")).toThrow();
  });
});
