import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/set_instance", () => {
  it("should return value if it's an instance of a Set", () => {
    const v = new Set();
    expect(prod.set_instance(v)).toBe(v);
    expect(dev.set_instance(v)).toBe(v);
  });

  it.prop([fc.anything()])(
    "should throw errorProd if value is not an instance of a Set",
    (v) => {
      expect(() => prod.set_instance(v as any)).toThrow();
      expect(() => dev.set_instance(v as any)).toThrow();
    },
  );
});
