import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { plus } from "./plus.js";

describe("operation/plus", () => {
  it.prop([fc.integer(), fc.integer()])("should add two numbers", (a, b) => {
    expect(plus(a)(b)).toBe(a + b);
  });
});
