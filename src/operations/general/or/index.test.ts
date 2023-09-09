import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/types/string_type/index.prod.js";
import { number_type } from "@operations/types/number_type/index.prod.js";

describe("operation/or", () => {
  const string_or_number_prod = prod.or([string_type, number_type]);
  const string_or_number_dev = dev.or([string_type, number_type]);

  it("should pass if one of operations matches", () => {
    fc.assert(
      fc.property(fc.string(), fc.integer(), (a, b) => {
        expect(string_or_number_prod(a)).toBe(a);
        expect(string_or_number_prod(b)).toBe(b);
        expect(string_or_number_dev(a)).toBe(a);
        expect(string_or_number_dev(b)).toBe(b);
      }),
    );
  });

  it("should throw if none of operations doesn't match", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(() => string_or_number_prod(v)).toThrow();
        expect(() => string_or_number_dev(v)).toThrow();
      }),
    );
  });
});
