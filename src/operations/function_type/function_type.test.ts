import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { function_type } from "./function_type.js";

describe("function_type", () => {
  it.prop([fc.func(fc.anything())])(
    "should return the value if it is a function",
    (v) => {
      expect(function_type(v)).toBe(v);
    },
  );

  it.prop([fc.oneof(fc.string(), fc.nat(), fc.boolean())])(
    "should throw an error if the value is not a function",
    (v) => {
      expect(() => function_type(v as any)).toThrow();
    },
  );
});
