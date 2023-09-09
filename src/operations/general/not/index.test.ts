import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/types/string_type/index.prod.js";

describe("operation/not", () => {
  it("should pass if operation throws", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(prod.not(string_type)(v)).toBe(v);
        expect(dev.not(string_type)(v)).toBe(v);
      }),
    );
  });

  it("should throw if operation passes", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => prod.not(string_type)(v)).toThrow();
        expect(() => dev.not(string_type)(v)).toThrow();
      }),
    );
  });
});
