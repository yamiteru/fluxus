import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/positive", () => {
  it.prop([fc.integer({ min: 0 })])("should pass on positive number", (v) => {
    expect(prod.positive(v)).toBe(v);
    expect(dev.positive(v)).toBe(v);
  });

  it.prop([fc.integer({ max: -1 })])("should throw on negative number", (v) => {
    expect(() => prod.positive(v)).toThrow();
    expect(() => dev.positive(v)).toThrow();
  });
});
