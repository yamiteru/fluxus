import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/multiple_of", () => {
  it("should return the value if it is a multiple of the multiple", () => {
    expect(prod.multiple_of(2)(4)).toBe(4);
    expect(dev.multiple_of(2)(4)).toBe(4);
  });

  it("should throw an errorProd if the value is not a multiple of the multiple", () => {
    expect(() => prod.multiple_of(2)(5)).toThrow();
    expect(() => dev.multiple_of(2)(5)).toThrow();
  });
});
