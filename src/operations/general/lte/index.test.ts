import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/lte", () => {
  it.prop([fc.integer({ max: 10 })])(
    "should return the value if it is less than or equal to the max",
    (v) => {
      expect(prod.lte(10)(v)).toBeLessThanOrEqual(10);
      expect(dev.lte(10)(v)).toBeLessThanOrEqual(10);
    },
  );

  it.prop([fc.integer({ min: 11 })])(
    "should throw if the value is not less than or equal to the max",
    (v) => {
      expect(() => prod.lte(10)(v)).toThrow();
      expect(() => dev.lte(10)(v)).toThrow();
    },
  );
});
