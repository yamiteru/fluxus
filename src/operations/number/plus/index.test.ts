import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/plus", () => {
  it.prop([fc.integer(), fc.integer()])("should add two numbers", (a, b) => {
    expect(prod.plus(a)(b)).toBe(b + a);
    expect(dev.plus(a)(b)).toBe(b + a);
  });
});
