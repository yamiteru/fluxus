import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/minus", () => {
  it.prop([fc.integer(), fc.integer()])(
    "should subtract two numbers",
    (a, b) => {
      expect(prod.minus(a)(b)).toBe(b - a);
      expect(dev.minus(a)(b)).toBe(b - a);
    },
  );
});
