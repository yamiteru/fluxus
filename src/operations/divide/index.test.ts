import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/divide", () => {
  it("should divide two numbers", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        expect(prod.divide(a)(b)).toBe(b / a);
        expect(dev.divide(a)(b)).toBe(b / a);
      }),
    );
  });
});
