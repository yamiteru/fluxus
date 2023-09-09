import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/symbol_type", () => {
  it("should pass if input is symbol", () => {
    const symbol = Symbol("test");
    expect(prod.symbol_type(symbol)).toBe(symbol);
    expect(dev.symbol_type(symbol)).toBe(symbol);
  });

  it("should throw if input is not symbol", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => prod.symbol_type(v as any)).toThrow();
        expect(() => dev.symbol_type(v as any)).toThrow();
      }),
    );
  });
});
