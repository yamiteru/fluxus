import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { minus } from "./minus.js";

describe("operation/minus", () => {
  it.prop([fc.integer(), fc.integer()])(
    "should subtract two numbers",
    (a, b) => {
      expect(minus(a)(b)).toBe(a - b);
    },
  );
});
