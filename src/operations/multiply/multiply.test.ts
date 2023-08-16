import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { multiply } from "./multiply.js";

describe("operation/multiply", () => {
  it.prop([fc.integer(), fc.integer()])(
    "should multiply two numbers",
    (a, b) => {
      expect(multiply(a)(b)).toBe(a * b);
    },
  );
});
