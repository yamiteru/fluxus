import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import fc from "fast-check";

describe("util/error", () => {
  it("should throw a custom error", () => {
    fc.assert(
      fc.property(fc.dictionary(fc.string(), fc.anything()), (v) => {
        expect(() => prod.error("TEST", v)).toThrow(prod.FluxusError as any);
        expect(() => dev.error()).toThrow(dev.FluxusError as any);
      }),
    );
  });
});
