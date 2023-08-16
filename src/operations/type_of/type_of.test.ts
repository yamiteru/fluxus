import { describe, expect, it } from "vitest";
import { type_of } from "./type_of.js";

describe("operation/type_of", () => {
  const string = type_of("string");

  it("should pass if input matches typeof", () => {
    expect(string("a")).toBe("a");
  });

  it("should throw if input doesn't match typeof", () => {
    expect(() => string(true as any)).toThrow();
  });
});
