import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/bigint_type", () => {
  it.prop([fc.bigInt()])(
    "should return the value if it is a bigint",
    (value) => {
      expect(prod.bigint_type(value)).toBe(value);
      expect(dev.bigint_type(value)).toBe(value);
    },
  );

  it.prop([fc.anything()])(
    "should throw an errorProd if the value is not a bigint",
    (v) => {
      expect(() => prod.bigint_type(v as any)).toThrow();
      expect(() => dev.bigint_type(v as any)).toThrow();
    },
  );
});
