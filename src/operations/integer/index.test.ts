import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/integer", () => {
  it("should pass on integer", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.integer(v)).toBe(v);
        expect(dev.integer(v)).toBe(v);
      }),
    );
  });

  it("should throw on float", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer({ min: 1 }), (a, b) => {
        expect(() => prod.integer(Number.parseFloat(`${a}.${b}`))).toThrow();
        expect(() => dev.integer(Number.parseFloat(`${a}.${b}`))).toThrow();
      }),
    );
  });
});
