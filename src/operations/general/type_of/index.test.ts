import { describe, expect, it } from "vitest";
import { type_of as prod } from "./index.prod.js";
import { type_of as dev } from "./index.dev.js";

describe("operation/type_of", () => {
  const string_prod = prod("string");
  const string_dev = dev("string");

  it("should pass if input matches typeof", () => {
    expect(string_prod("a")).toBe("a");
    expect(string_dev("a")).toBe("a");
  });

  it("should throw if input doesn't match typeof", () => {
    expect(() => string_prod(true as any)).toThrow();
    expect(() => string_dev(true as any)).toThrow();
  });
});
