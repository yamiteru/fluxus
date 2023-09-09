import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/trim_end", () => {
  it("should return trimmed value", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.trim_end(v)).toBe(v.trimEnd());
        expect(dev.trim_end(v)).toBe(v.trimEnd());
      }),
    );
  });
});
