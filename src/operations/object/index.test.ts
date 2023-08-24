import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";
import { number_type } from "@operations/number_type/index.prod.js";
import { boolean_type } from "@operations/boolean_type/index.prod.js";
import { optional } from "@operations/optional/index.prod.js";

describe("operation/object/object", () => {
  const object_schema_prod = prod.object({
    a: string_type,
    b: number_type,
    c: optional(boolean_type),
  });

  const object_schema_dev = dev.object({
    a: string_type,
    b: number_type,
    c: optional(boolean_type),
  });

  it("should return the value if it matches a schema", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.string(),
          b: fc.nat(),
          c: fc.oneof(fc.boolean(), fc.constantFrom(undefined)),
        }),
        (v) => {
          expect(object_schema_prod(v)).toEqual(v);
          expect(object_schema_dev(v)).toEqual(v);
        },
      ),
    );
  });

  it("should throw an error if the value does not match a schema", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.boolean(),
          b: fc.string(),
          c: fc.nat(),
        }),
        (v) => {
          expect(() => object_schema_prod(v as any)).toThrow();
          expect(() => object_schema_dev(v as any)).toThrow();
        },
      ),
    );
  });
});
