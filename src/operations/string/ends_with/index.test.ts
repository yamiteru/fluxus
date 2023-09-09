import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "@tests";

describe("operation/ends_with", () => {
  it("should pass if input ends with search", () => {
    fc.assert(
      fc.property(fc.char(), (v) => {
        expect(prod.ends_with(v)(v)).toBe(v);
        expect(dev.ends_with(v)(v)).toBe(v);
      }),
    );
  });

  it("should throw if input doesn't end with search", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(ALPHABET[0]),
        fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 1 }),
        (char, string) => {
          expect(() => prod.ends_with(char)(string)).toThrow();
          expect(() => dev.ends_with(char)(string)).toThrow();
        },
      ),
    );
  });
});
