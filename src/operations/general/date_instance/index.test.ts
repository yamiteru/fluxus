import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/date_instance", () => {
  it.prop([fc.date()])(
    "should return the value if it is an instance of Date",
    (v) => {
      expect(prod.date_instance(v)).toBe(v);
      expect(dev.date_instance(v)).toBe(v);
    },
  );

  it.prop([fc.anything()])(
    "should throw an errorProd if the value is not an instance of Date",
    (v) => {
      expect(() => prod.date_instance(v as any)).toThrow();
      expect(() => dev.date_instance(v as any)).toThrow();
    },
  );
});
