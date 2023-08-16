import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { divide } from "./divide.js";

describe("operation/divide", () => {
  it.prop([fc.integer(), fc.integer()])("should divide two numbers", (a, b) => {
    expect(divide(a)(b)).toBe(a / b);
  });
});
