import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/gt", () => {
  it.prop([fc.integer({ min: 11 })])(
    "should return the value if it is greater than the min",
    (v) => {
      expect(prod.gt(10)(v)).toBeGreaterThan(10);
      expect(dev.gt(10)(v)).toBeGreaterThan(10);
    },
  );

  it.prop([fc.integer({ max: 10 })])(
    "should throw if the value is not greater than the min",
    (v) => {
      expect(() => prod.gt(10)(v)).toThrow();
      expect(() => dev.gt(10)(v)).toThrow();
    },
  );
});
