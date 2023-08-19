import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";

describe("method/parse", () => {
  it("should return output if input matches operation", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.parse(string_type, v)).toBe(v);
        expect(dev.parse(string_type, v)).toBe(v);
      }),
    );
  });

  it("should throw if input doesn't match operation", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(() => prod.parse(string_type, v)).toThrow();
        expect(() => dev.parse(string_type, v)).toThrow();
      }),
    );
  });
});
