import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { ends_with } from "./ends_with.js";
import { ALPHABET } from "../../constants.js";

describe("operation/ends_with", () => {
  it.prop([fc.string({ minLength: 2 })])(
    "should pass if input ends with search",
    (v) => {
      expect(ends_with(v.at(-1) as string)(v)).toBe(v);
    },
  );

  it.prop([
    fc.constantFrom(ALPHABET[0]),
    fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 1 }),
  ])("should throw if input doesn't end with search", (char, string) => {
    expect(() => ends_with(char)(string)).toThrow();
  });
});
