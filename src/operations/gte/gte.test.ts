import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { gte } from "./gte.js";

describe("operation/gte", () => {
  it.prop([fc.integer({ min: 10 })])(
    "should return the value if it is greater than or equal to the min",
    (v) => {
      expect(gte(10)(v)).toBeGreaterThanOrEqual(10);
    },
  );

  it.prop([fc.integer({ max: 9 })])(
    "should throw if the value is not greater than or equal to the min",
    (v) => {
      expect(() => gte(10)(v)).toThrow();
    },
  );
});
