import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "../../../tests.js";

describe("operation/starts_with", () => {
  it.prop([fc.string({ minLength: 2 })])(
    "should pass if input starts with search",
    (v) => {
      expect(prod.starts_with(v[0])(v)).toBe(v);
      expect(dev.starts_with(v[0])(v)).toBe(v);
    },
  );

  it.prop([
    fc.constantFrom(ALPHABET[0]),
    fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 2 }),
  ])("should throw if input doesn't start with search", (char, string) => {
    expect(() => prod.starts_with(char)(string)).toThrow();
    expect(() => dev.starts_with(char)(string)).toThrow();
  });
});
