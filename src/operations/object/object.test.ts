import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { object } from "./object.js";
import { string_type } from "../string_type/index.js";
import { number_type } from "../number_type/index.js";
import { boolean_type } from "../boolean_type/index.js";

describe("operation/object/object", () => {
  const object_schema = object({
    a: string_type,
    b: number_type,
    c: boolean_type,
  });

  it.prop([
    fc.record({
      a: fc.string(),
      b: fc.nat(),
      c: fc.boolean(),
    }),
  ])("should return the value if it matches a schema", (v) => {
    expect(object_schema(v)).toEqual(v);
  });

  it.prop([
    fc.record({
      a: fc.string(),
      b: fc.nat(),
      c: fc.string(),
    }),
  ])("should throw an error if the value does not match a schema", (v) => {
    expect(() => object_schema(v as any)).toThrow();
  });
});
