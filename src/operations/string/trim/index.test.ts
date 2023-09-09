import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/string/trim", () => {
  it("should return trimmed value", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.trim(v)).toBe(v.trim());
        expect(dev.trim(v)).toBe(v.trim());
      }),
    );
  });
});
