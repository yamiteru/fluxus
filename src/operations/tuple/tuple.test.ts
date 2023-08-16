import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { tuple } from "./tuple.js";
import { string_type } from "../string_type/index.js";
import { number_type } from "../number_type/index.js";
import { boolean_type } from "../boolean_type/index.js";

describe("operation/tuple", () => {
  const tuple_operation = tuple([string_type, number_type, boolean_type]);

  it.prop([fc.tuple(fc.string(), fc.nat(), fc.boolean())])(
    "should return value if matches a tuple",
    (v) => {
      expect(tuple_operation(v)).toEqual(v);
    },
  );

  it.prop([fc.anything()])(
    "should throw error if value doesn't match a tuple",
    (v) => {
      expect(() => tuple_operation(v as any)).toThrow();
    },
  );
});
