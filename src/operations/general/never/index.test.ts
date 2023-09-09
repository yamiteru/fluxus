import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/never", () => {
  it("should throw on anything", () => {
    fc.assert(
      fc.property(fc.anything(), (v) => {
        expect(() => prod.never(v as never)).toThrow();
        expect(() => dev.never(v as never)).toThrow();
      }),
    );
  });
});
