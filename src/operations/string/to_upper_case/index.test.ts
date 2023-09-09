import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/to_upper_case", () => {
  it("should transform string to upper case", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.to_upper_case(v)).toBe(v.toUpperCase());
        expect(dev.to_upper_case(v)).toBe(v.toUpperCase());
      }),
    );
  });
});
