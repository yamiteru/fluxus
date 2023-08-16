import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { symbol_type } from "./symbol_type.js";

describe("operation/symbol_type", () => {
  it("should pass if input is symbol", () => {
    const symbol = Symbol("test");
    expect(symbol_type(symbol)).toBe(symbol);
  });

  it.prop([fc.integer()])("should throw if input is not symbol", (v) => {
    expect(() => symbol_type(v as any)).toThrow();
  });
});
