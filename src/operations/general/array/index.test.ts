import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "../../index.prod.js";
import { primitive } from "../../../tests.js";

describe("operation/array", () => {
  const array_operation_prod = prod.array(string_type);
  const array_operation_dev = dev.array(string_type);

  it.prop([fc.array(fc.string())])(
    "should return value if it matches array operation",
    (v) => {
      expect(array_operation_prod(v)).toEqual(v);
      expect(array_operation_dev(v)).toEqual(v);
    },
  );

  it.prop([primitive])(
    "should throw errorProd if it doesn't match array operation",
    (v) => {
      expect(() => array_operation_prod(v as any)).toThrow();
      expect(() => array_operation_dev(v as any)).toThrow();
    },
  );

  it.prop([fc.array(fc.nat(), { minLength: 1 })])(
    "should throw errorProd if it of of the items doesn't match array operation",
    (v) => {
      expect(() => array_operation_prod(v as any)).toThrow();
      expect(() => array_operation_dev(v as any)).toThrow();
    },
  );
});
