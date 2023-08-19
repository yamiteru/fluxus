import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/multiply", () => {
  it("should multiply two numbers", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        expect(prod.multiply(a)(b)).toBe(a * b);
        expect(dev.multiply(a)(b)).toBe(a * b);
      }),
    );
  });
});
