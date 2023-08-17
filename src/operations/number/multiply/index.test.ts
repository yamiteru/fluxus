import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/multiply", () => {
  it.prop([fc.integer(), fc.integer()])(
    "should multiply two numbers",
    (a, b) => {
      expect(prod.multiply(a)(b)).toBe(a * b);
      expect(dev.multiply(a)(b)).toBe(a * b);
    },
  );
});
