import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { integer } from "./integer.js";

describe("operation/integer", () => {
  it.prop([fc.integer()])("should pass on integer", (v) => {
    expect(integer(v)).toBe(v);
  });

  it.prop([fc.integer(), fc.integer({ min: 1 })])(
    "should throw on float",
    (a, b) => {
      expect(() => integer(Number.parseFloat(`${a}.${b}`))).toThrow();
    },
  );
});
