import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/divide", () => {
  it.prop([fc.integer(), fc.integer()])("should divide two numbers", (a, b) => {
    expect(prod.divide(a)(b)).toBe(b / a);
    expect(dev.divide(a)(b)).toBe(b / a);
  });
});
