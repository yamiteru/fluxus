import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/float", () => {
  it.prop([fc.integer(), fc.integer({ min: 1 })])(
    "should pass on float",
    (a, b) => {
      expect(prod.float(Number.parseFloat(`${a}.${b}`))).toBe(
        Number.parseFloat(`${a}.${b}`),
      );
      expect(dev.float(Number.parseFloat(`${a}.${b}`))).toBe(
        Number.parseFloat(`${a}.${b}`),
      );
    },
  );

  it.prop([fc.integer()])("should throw on integer", (v) => {
    expect(() => prod.float(v)).toThrow();
    expect(() => dev.float(v)).toThrow();
  });
});
