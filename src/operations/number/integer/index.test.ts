import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/integer", () => {
  it.prop([fc.integer()])("should pass on integer", (v) => {
    expect(prod.integer(v)).toBe(v);
    expect(dev.integer(v)).toBe(v);
  });

  it.prop([fc.integer(), fc.integer({ min: 1 })])(
    "should throw on float",
    (a, b) => {
      expect(() => prod.integer(Number.parseFloat(`${a}.${b}`))).toThrow();
      expect(() => dev.integer(Number.parseFloat(`${a}.${b}`))).toThrow();
    },
  );
});
