import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/number_type", () => {
  it.prop([fc.integer()])("should pass if input is number", (v) => {
    expect(prod.number_type(v)).toBe(v);
  });

  it.prop([fc.string()])("should throw if input is not number", (v) => {
    expect(() => prod.number_type(v as any)).toThrow();
    expect(() => dev.number_type(v as any)).toThrow();
  });
});
