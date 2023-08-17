import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { boolean_type, number_type, string_type } from "../../index.prod.js";

describe("operation/object/object", () => {
  const object_schema_prod = prod.object({
    a: string_type,
    b: number_type,
    c: boolean_type,
  });

  const object_schema_dev = dev.object({
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
    expect(object_schema_prod(v)).toEqual(v);
    expect(object_schema_dev(v)).toEqual(v);
  });

  it.prop([
    fc.record({
      a: fc.string(),
      b: fc.nat(),
      c: fc.string(),
    }),
  ])("should throw an errorProd if the value does not match a schema", (v) => {
    expect(() => object_schema_prod(v as any)).toThrow();
    expect(() => object_schema_dev(v as any)).toThrow();
  });
});
