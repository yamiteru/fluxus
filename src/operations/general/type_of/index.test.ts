import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/type_of", () => {
  const string_prod = prod.type_of("string");
  const string_dev = dev.type_of("string");

  it("should pass if input matches typeof", () => {
    expect(string_prod("a")).toBe("a");
    expect(string_dev("a")).toBe("a");
  });

  it("should throw if input doesn't match typeof", () => {
    expect(() => string_prod(true as any)).toThrow();
    expect(() => string_dev(true as any)).toThrow();
  });
});
