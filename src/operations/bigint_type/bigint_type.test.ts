import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { bigint_type } from "./bigint_type.js";

describe("operation/bigint_type", () => {
  it.prop([fc.bigInt()])(
    "should return the value if it is a bigint",
    (value) => {
      expect(bigint_type(value)).toBe(value);
    },
  );

  it.prop([fc.anything()])(
    "should throw an error if the value is not a bigint",
    (v) => {
      expect(() => bigint_type(v as any)).toThrow();
    },
  );
});
