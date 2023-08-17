import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "../../../tests.js";

describe("operation/ends_with", () => {
  it.prop([fc.char()])("should pass if input ends with search", (v) => {
    expect(prod.ends_with(v)(v)).toBe(v);
    expect(dev.ends_with(v)(v)).toBe(v);
  });

  it.prop([
    fc.constantFrom(ALPHABET[0]),
    fc.stringOf(fc.constantFrom(...ALPHABET.slice(1)), { minLength: 1 }),
  ])("should throw if input doesn't end with search", (char, string) => {
    expect(() => prod.ends_with(char)(string)).toThrow();
    expect(() => dev.ends_with(char)(string)).toThrow();
  });
});
