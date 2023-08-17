import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type, string_type } from "../../index.prod.js";

describe("operation/or", () => {
  const string_or_number_prod = prod.or([string_type, number_type]);
  const string_or_number_dev = dev.or([string_type, number_type]);

  it.prop([fc.string(), fc.integer()])(
    "should pass if one of operations matches",
    (a, b) => {
      expect(string_or_number_prod(a)).toBe(a);
      expect(string_or_number_prod(b)).toBe(b);
      expect(string_or_number_dev(a)).toBe(a);
      expect(string_or_number_dev(b)).toBe(b);
    },
  );

  it.prop([fc.boolean()])(
    "should throw if none of operations doesn't match",
    (v) => {
      expect(() => string_or_number_prod(v)).toThrow();
      expect(() => string_or_number_dev(v)).toThrow();
    },
  );
});
