import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/boolean_type", () => {
  it.prop([fc.boolean()])("should pass if input is boolean", (v) => {
    expect(prod.boolean_type(v)).toBe(v);
    expect(dev.boolean_type(v)).toBe(v);
  });

  it.prop([fc.integer()])("should throw if input is not boolean", (v) => {
    expect(() => prod.boolean_type(v as any)).toThrow();
    expect(() => dev.boolean_type(v as any)).toThrow();
  });
});
