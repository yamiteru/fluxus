import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/string_type", () => {
  it.prop([fc.string()])("should pass if input is string", (v) => {
    expect(prod.string_type(v)).toBe(v);
    expect(dev.string_type(v)).toBe(v);
  });

  it.prop([fc.integer()])("should throw if input is not string", (v) => {
    expect(() => prod.string_type(v as any)).toThrow();
    expect(() => dev.string_type(v as any)).toThrow();
  });
});
