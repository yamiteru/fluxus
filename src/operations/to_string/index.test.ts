import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operations/to_string", () => {
  it("should transform string to string", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.to_string(v)).toBe(`${v}`);
        expect(dev.to_string(v)).toBe(`${v}`);
      }),
    );
  });

  it("should transform number to string", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.to_string(v)).toBe(`${v}`);
        expect(dev.to_string(v)).toBe(`${v}`);
      }),
    );
  });

  it("should transform boolean to string", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(prod.to_string(v)).toBe(`${v}`);
        expect(dev.to_string(v)).toBe(`${v}`);
      }),
    );
  });
});
