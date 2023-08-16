import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { map_instance } from "./map_instance.js";

describe("operation/map_instance", () => {
  it("should return value if it's an instance of a Map", () => {
    const v = new Map();
    expect(map_instance(v)).toBe(v);
  });

  it.prop([fc.anything()])(
    "should throw error if value is not an instance of a Map",
    (v) => {
      expect(() => map_instance(v as any)).toThrow();
    },
  );
});
