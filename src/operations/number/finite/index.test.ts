import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/finite", () => {
  it.prop([fc.nat()])("should return the value if it is finite", (value) => {
    expect(prod.finite(value)).toBe(value);
    expect(dev.finite(value)).toBe(value);
  });

  it("should throw an errorProd if the value is not finite", () => {
    expect(() => prod.finite(Infinity)).toThrow();
    expect(() => dev.finite(Infinity)).toThrow();
  });
});
