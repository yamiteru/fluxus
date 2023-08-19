import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/capitalize", () => {
  it("should capitalize the first letter of the string", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (v) => {
        expect(prod.capitalize(v)).toBe(`${v[0].toUpperCase()}${v.slice(1)}`);
        expect(dev.capitalize(v)).toBe(`${v[0].toUpperCase()}${v.slice(1)}`);
      }),
    );
  });
});
