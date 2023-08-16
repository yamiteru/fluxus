import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { set_instance } from "./set_instance.js";

describe("operation/set_instance", () => {
  it("should return value if it's an instance of a Set", () => {
    const v = new Set();
    expect(set_instance(v)).toBe(v);
  });

  it.prop([fc.anything()])(
    "should throw error if value is not an instance of a Set",
    (v) => {
      expect(() => set_instance(v as any)).toThrow();
    },
  );
});
