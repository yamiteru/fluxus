import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/split", () => {
  it("should transform string to lower case", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.to_lower_case(v)).toBe(v.toLowerCase());
        expect(dev.to_lower_case(v)).toBe(v.toLowerCase());
      }),
    );
  });
});
