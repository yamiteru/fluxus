import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { starts_with } from "./starts_with.js";
import { ALPHABET } from "../../constants.js";

describe("operation/starts_with", () => {
  it.prop([fc.string({ minLength: 2 })])(
    "should pass if input starts with search",
    (v) => {
      expect(starts_with(v[0])(v)).toBe(v);
    },
  );

  it.prop([
    fc.constantFrom(ALPHABET[0]),
    fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 2 }),
  ])("should throw if input doesn't start with search", (char, string) => {
    expect(() => starts_with(char)(string)).toThrow();
  });
});
