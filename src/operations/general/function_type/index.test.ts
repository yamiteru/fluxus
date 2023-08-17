import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("function_type", () => {
  it.prop([fc.func(fc.anything())])(
    "should return the value if it is a function",
    (v) => {
      expect(prod.function_type(v)).toBe(v);
      expect(dev.function_type(v)).toBe(v);
    },
  );

  it.prop([fc.oneof(fc.string(), fc.nat(), fc.boolean())])(
    "should throw an errorProd if the value is not a function",
    (v) => {
      expect(() => prod.function_type(v as any)).toThrow();
      expect(() => dev.function_type(v as any)).toThrow();
    },
  );
});
