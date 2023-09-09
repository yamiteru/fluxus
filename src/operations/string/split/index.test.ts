import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/split", () => {
  it("should split string into string array", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.split("")(v)).toEqual(v.split(""));
        expect(dev.split("")(v)).toEqual(v.split(""));
      }),
    );
  });
});
