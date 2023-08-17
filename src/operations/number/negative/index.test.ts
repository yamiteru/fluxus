import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/negative", () => {
  it.prop([fc.integer({ max: 0 })])("should pass on negative number", (v) => {
    expect(prod.negative(v)).toBe(v);
    expect(dev.negative(v)).toBe(v);
  });

  it.prop([fc.integer({ min: 1 })])("should throw on positive number", (v) => {
    expect(() => prod.negative(v)).toThrow();
    expect(() => dev.negative(v)).toThrow();
  });
});
