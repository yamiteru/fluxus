import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { float } from "./float.js";

describe("operation/float", () => {
  it.prop([fc.integer(), fc.integer({ min: 1 })])(
    "should pass on float",
    (a, b) => {
      expect(float(Number.parseFloat(`${a}.${b}`))).toBe(
        Number.parseFloat(`${a}.${b}`),
      );
    },
  );

  it.prop([fc.integer()])("should throw on integer", (v) => {
    expect(() => float(v)).toThrow();
  });
});
