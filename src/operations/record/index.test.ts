import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/string_type/index.prod.js";
import { number_type } from "@operations/number_type/index.prod.js";

describe("operation/record", () => {
  const record_schema_prod = prod.record(string_type, number_type);
  const record_schema_dev = dev.record(string_type, number_type);

  it("should return the value if it matches a schema", () => {
    fc.assert(
      fc.property(
        fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.nat(), {
          minKeys: 1,
        }),
        (v) => {
          expect(record_schema_prod(v)).toEqual(v);
          expect(record_schema_dev(v)).toEqual(v);
        },
      ),
    );
  });

  it("should throw an errorProd if the value does not match a schema", () => {
    fc.assert(
      fc.property(
        fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.string(), {
          minKeys: 1,
        }),
        (v) => {
          expect(() => record_schema_prod(v as any)).toThrow();
          expect(() => record_schema_dev(v as any)).toThrow();
        },
      ),
    );
  });
});
