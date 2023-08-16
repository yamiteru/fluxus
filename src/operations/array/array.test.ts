import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { array } from "./array.js";
import { string_type } from "../string_type/index.js";

describe("operation/array", () => {
  const array_operation = array(string_type);

  it.prop([fc.array(fc.string())])(
    "should return value if it matches array operation",
    (v) => {
      expect(array_operation(v)).toEqual(v);
    },
  );

  it.prop([fc.oneof(fc.string(), fc.nat(), fc.boolean())])(
    "should throw error if it doesn't match array operation",
    (v) => {
      expect(() => array_operation(v as any)).toThrow();
    },
  );

  it.prop([fc.array(fc.nat(), { minLength: 1 })])(
    "should throw error if it of of the items doesn't match array operation",
    (v) => {
      expect(() => array_operation(v as any)).toThrow();
    },
  );
});
