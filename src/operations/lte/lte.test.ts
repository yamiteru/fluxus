import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { lte } from "./lte.js";

describe("operation/lte", () => {
  it.prop([fc.integer({ max: 10 })])(
    "should return the value if it is less than or equal to the max",
    (v) => {
      expect(lte(10)(v)).toBeLessThanOrEqual(10);
    },
  );

  it.prop([fc.integer({ min: 11 })])(
    "should throw if the value is not less than or equal to the max",
    (v) => {
      expect(() => lte(10)(v)).toThrow();
    },
  );
});
