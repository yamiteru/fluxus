import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { is_array } from "./is_array.js";

describe("operation/is_array", () => {
  it.prop([fc.array(fc.anything())])(
    "should return value if it matches operation",
    (v) => {
      expect(is_array(v)).toEqual(v);
    },
  );

  it.prop([fc.oneof(fc.string(), fc.nat(), fc.boolean())])(
    "should throw error if it doesn't match operation",
    (v) => {
      expect(() => is_array(v as any)).toThrow();
    },
  );
});
