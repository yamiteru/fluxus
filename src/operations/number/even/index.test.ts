import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/even", () => {
  it("should return the value if it is even", () => {
    expect(prod.even(4)).toBe(4);
    expect(dev.even(4)).toBe(4);
  });

  it("should throw an errorProd if the value is not even", () => {
    expect(() => prod.even(5)).toThrow();
    expect(() => dev.even(5)).toThrow();
  });
});
