import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { instance_of } from "./instance_of.js";

describe("operation/instance_of", () => {
  const date_instance = instance_of(Date);

  it.prop([fc.date()])("should pass if input is instance of Date", (v) => {
    expect(date_instance(v)).toBe(v);
  });

  it.prop([fc.integer()])(
    "should throw if input isn't instance of Date",
    (v) => {
      expect(() => date_instance(v as any)).toThrow();
    },
  );
});
