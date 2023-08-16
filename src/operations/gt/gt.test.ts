import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { gt } from "./gt.js";

describe("operation/gt", () => {
  it.prop([fc.integer({ min: 11 })])(
    "should return the value if it is greater than the min",
    (v) => {
      expect(gt(10)(v)).toBeGreaterThan(10);
    },
  );

  it.prop([fc.integer({ max: 10 })])(
    "should throw if the value is not greater than the min",
    (v) => {
      expect(() => gt(10)(v)).toThrow();
    },
  );
});
