import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/types/string_type/index.prod.js";
import { number_type } from "@operations/types/number_type/index.prod.js";
import { boolean_type } from "@operations/types/boolean_type/index.prod.js";

describe("operation/tuple", () => {
  const tuple_operation_prod = prod.tuple([
    string_type,
    number_type,
    boolean_type,
  ]);
  const tuple_operation_dev = dev.tuple([
    string_type,
    number_type,
    boolean_type,
  ]);

  it("should return value if matches a tuple", () => {
    fc.assert(
      fc.property(fc.tuple(fc.string(), fc.nat(), fc.boolean()), (v) => {
        expect(tuple_operation_prod(v)).toEqual(v);
        expect(tuple_operation_dev(v)).toEqual(v);
      }),
    );
  });

  it("should throw if one of the values doesn't match an operation", () => {
    fc.assert(
      fc.property(fc.tuple(fc.string(), fc.string(), fc.boolean()), (v) => {
        expect(() => tuple_operation_prod(v as any)).toThrow();
        expect(() => tuple_operation_dev(v as any)).toThrow();
      }),
    );
  });

  it("should throw if value is not an array", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => tuple_operation_prod(v as any)).toThrow();
        expect(() => tuple_operation_dev(v as any)).toThrow();
      }),
    );
  });
});
