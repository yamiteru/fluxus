import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type, string_type } from "../../index.prod.js";
import { boolean_type } from "../boolean_type/index.prod.js";

describe("operation/tuple", () => {
  const tuple_operation_prod = prod.tuple([string_type, number_type, boolean_type]);
  const tuple_operation_dev =dev.tuple([string_type, number_type, boolean_type]);

  it.prop([fc.tuple(fc.string(), fc.nat(), fc.boolean())])(
    "should return value if matches a tuple",
    (v) => {
      expect(tuple_operation_prod(v)).toEqual(v);
      expect(tuple_operation_dev(v)).toEqual(v);
    },
  );

  it.prop([fc.tuple(fc.string(), fc.string(), fc.boolean())])(
    "should throw if one of the values doesn't match an operation",
    (v) => {
      expect(() => tuple_operation_prod(v as any)).toThrow();
      expect(() => tuple_operation_dev(v as any)).toThrow();
    },
  );

  it.prop([fc.string()])("should throw if value is not an array", (v) => {
    expect(() => tuple_operation_prod(v as any)).toThrow();
    expect(() => tuple_operation_dev(v as any)).toThrow();
  });
});
