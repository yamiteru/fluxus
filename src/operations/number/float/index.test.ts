import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/float", () => {
  it("should pass on float", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer({ min: 1 }), (a, b) => {
        expect(prod.float(Number.parseFloat(`${a}.${b}`))).toBe(
          Number.parseFloat(`${a}.${b}`),
        );
        expect(dev.float(Number.parseFloat(`${a}.${b}`))).toBe(
          Number.parseFloat(`${a}.${b}`),
        );
      }),
    );
  });

  it("should throw on integer", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => prod.float(v)).toThrow();
        expect(() => dev.float(v)).toThrow();
      }),
    );
  });
});
