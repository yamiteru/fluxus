import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { date } from "./date.js";

describe("operation/date", () => {
  it.prop([fc.date()])("should return the value if it is a date", (v) => {
    expect(date(v)).toBe(v);
  });

  it.prop([fc.anything()])(
    "should throw an error if the value is not a date",
    (v) => {
      expect(() => date(v as any)).toThrow();
    },
  );
});
