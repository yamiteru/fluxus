import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/unknown", () => {
  it("should pass on anything", () => {
    fc.assert(
      fc.property(fc.anything(), (v) => {
        expect(prod.unknown(v)).toBe(v);
        expect(dev.unknown(v)).toBe(v);
      }),
    );
  });
});
