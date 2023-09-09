import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/literal", () => {
  const match_one_prod = prod.literal(1);
  const match_one_dev = dev.literal(1);

  it("should pass if value matches literal value", () => {
    expect(match_one_prod(1)).toBe(1);
    expect(match_one_dev(1)).toBe(1);
  });

  it("should throw if length doesn't match", () => {
    expect(() => match_one_prod(2 as any)).toThrow();
    expect(() => match_one_dev(2 as any)).toThrow();
  });
});
