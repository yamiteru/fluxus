import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/undefined_type", () => {
  it("should pass if input is undefined", () => {
    expect(prod.undefined_type(undefined)).toBe(undefined);
    expect(dev.undefined_type(undefined)).toBe(undefined);
  });

  it.prop([fc.integer()])("should throw if input is not undefined", (v) => {
    expect(() => prod.undefined_type(v as any)).toThrow();
    expect(() => dev.undefined_type(v as any)).toThrow();
  });
});
