import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { primitive } from "@tests";
import { string_type } from "@operations/string_type/index.prod.js";

describe("operation/array", () => {
  const array_operation_prod = prod.array(string_type);
  const array_operation_dev = dev.array(string_type);

  it("should return value if it matches array operation", () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (v) => {
        expect(array_operation_prod(v)).toEqual(v);
        expect(array_operation_dev(v)).toEqual(v);
      }),
    );
  });

  it("should throw errorProd if it doesn't match array operation", () => {
    fc.assert(
      fc.property(primitive, (v) => {
        expect(() => array_operation_prod(v as any)).toThrow();
        expect(() => array_operation_dev(v as any)).toThrow();
      }),
    );
  });

  it("should throw errorProd if it of of the items doesn't match array operation", () => {
    fc.assert(
      fc.property(fc.array(fc.nat(), { minLength: 1 }), (v) => {
        expect(() => array_operation_prod(v as any)).toThrow();
        expect(() => array_operation_dev(v as any)).toThrow();
      }),
    );
  });
});
