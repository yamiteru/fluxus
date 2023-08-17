import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/gte", () => {
  it.prop([fc.integer({ min: 10 })])(
    "should return the value if it is greater than or equal to the min",
    (v) => {
      expect(prod.gte(10)(v)).toBeGreaterThanOrEqual(10);
      expect(dev.gte(10)(v)).toBeGreaterThanOrEqual(10);
    },
  );

  it.prop([fc.integer({ max: 9 })])(
    "should throw if the value is not greater than or equal to the min",
    (v) => {
      expect(() => prod.gte(10)(v)).toThrow();
      expect(() => dev.gte(10)(v)).toThrow();
    },
  );
});
