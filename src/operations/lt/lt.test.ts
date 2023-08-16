import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { lt } from "./lt.js";

describe("operation/lt", () => {
  it.prop([fc.integer({ max: 9 })])(
    "should return the value if it is less than the max",
    (v) => {
      expect(lt(10)(v)).toBeLessThan(10);
    },
  );

  it.prop([fc.integer({ min: 10 })])(
    "should throw if the value is not less than the max",
    (v) => {
      expect(() => lt(10)(v)).toThrow();
    },
  );
});
