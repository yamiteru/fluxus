import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operations/to_number", () => {
  it.prop([fc.string()])("should transform string to number", (v) => {
    expect(prod.to_number(v)).toBe(+v);
    expect(dev.to_number(v)).toBe(+v);
  });

  it.prop([fc.integer()])("should transform number to number", (v) => {
    expect(prod.to_number(v)).toBe(+v);
    expect(dev.to_number(v)).toBe(+v);
  });

  it.prop([fc.boolean()])("should transform boolean to number", (v) => {
    expect(prod.to_number(v)).toBe(+v);
    expect(dev.to_number(v)).toBe(+v);
  });

  it.prop([fc.record(fc.anything)])(
    "should transform object to number",
    (v) => {
      expect(prod.to_number(v as any)).toBe(+v);
      expect(dev.to_number(v as any)).toBe(+v);
    },
  );

  it.prop([
    fc.array(fc.oneof(fc.string(), fc.nat(), fc.boolean()), { minLength: 1 }),
  ])("should transform array to number", (v) => {
    expect(prod.to_number(v as any)).toBe(+v);
    expect(dev.to_number(v as any)).toBe(+v);
  });

  it.prop([fc.bigInt()])("should throw on transform bigint to number", (v) => {
    expect(() => prod.to_number(v as any)).toThrow();
    expect(() => dev.to_number(v as any)).toThrow();
  });
});
