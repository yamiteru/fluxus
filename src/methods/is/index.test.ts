import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";

describe("method/is", () => {
  it("should return true if input matches operation", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.is(string_type, v)).toBe(true);
        expect(dev.is(string_type, v)).toBe(true);
      }),
    );
  });

  it("should return false if input doesn't match operation", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(prod.is(string_type, v)).toBe(false);
        expect(dev.is(string_type, v)).toBe(false);
      }),
    );
  });
});
