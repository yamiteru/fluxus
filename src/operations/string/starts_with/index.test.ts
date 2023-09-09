import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "@tests";

describe("operation/starts_with", () => {
  it("should pass if input starts with search", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 2 }), (v) => {
        expect(prod.starts_with(v[0])(v)).toBe(v);
        expect(dev.starts_with(v[0])(v)).toBe(v);
      }),
    );
  });

  it("should throw if input doesn't start with search", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(ALPHABET[0]),
        fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 2 }),
        (char, string) => {
          expect(() => prod.starts_with(char)(string)).toThrow();
          expect(() => dev.starts_with(char)(string)).toThrow();
        },
      ),
    );
  });
});
