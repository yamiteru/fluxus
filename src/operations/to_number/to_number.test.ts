import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { to_number } from "./to_number.js";

describe("operations/to_number", () => {
  it.prop([fc.string()])("should transform string to number", (v) => {
    expect(to_number(v)).toBe(+v);
  });

  it.prop([fc.integer()])("should transform number to number", (v) => {
    expect(to_number(v)).toBe(+v);
  });

  it.prop([fc.boolean()])("should transform boolean to number", (v) => {
    expect(to_number(v)).toBe(+v);
  });

  it.prop([fc.record(fc.anything)])(
    "should transform object to number",
    (v) => {
      expect(to_number(v as any)).toBe(+v);
    },
  );

  it.prop([fc.array(fc.anything(), { minLength: 1 })])(
    "should transform array to number",
    (v) => {
      expect(to_number(v as any)).toBe(+v);
    },
  );

  it.prop([fc.bigInt()])("should throw on transform bigint to number", (v) => {
    expect(() => to_number(v as any)).toThrow();
  });
});
