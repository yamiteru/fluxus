import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/is_array", () => {
  it.prop([fc.array(fc.anything())])(
    "should return value if it matches operation",
    (v) => {
      expect(prod.is_array(v)).toEqual(v);
      expect(dev.is_array(v)).toEqual(v);
    },
  );

  it.prop([fc.oneof(fc.string(), fc.nat(), fc.boolean())])(
    "should throw errorProd if it doesn't match operation",
    (v) => {
      expect(() => prod.is_array(v as any)).toThrow();
      expect(() => dev.is_array(v as any)).toThrow();
    },
  );
});
