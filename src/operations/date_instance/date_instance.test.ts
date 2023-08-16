import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { date_instance } from "./date_instance.js";

describe("operation/date_instance", () => {
  it.prop([fc.date()])(
    "should return the value if it is an instance of Date",
    (v) => {
      expect(date_instance(v)).toBe(v);
    },
  );

  it.prop([fc.anything()])(
    "should throw an error if the value is not an instance of Date",
    (v) => {
      expect(() => date_instance(v as any)).toThrow();
    },
  );
});
