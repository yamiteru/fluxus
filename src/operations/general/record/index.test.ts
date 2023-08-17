import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type, string_type } from "../../index.prod.js";

describe("operation/record", () => {
  const record_schema_prod = prod.record(string_type, number_type);
  const record_schema_dev = dev.record(string_type, number_type);

  it.prop([
    fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.nat(), {
      minKeys: 1,
    }),
  ])("should return the value if it matches a schema", (v) => {
    expect(record_schema_prod(v)).toEqual(v);
    expect(record_schema_dev(v)).toEqual(v);
  });

  it.prop([
    fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.string(), {
      minKeys: 1,
    }),
  ])("should throw an errorProd if the value does not match a schema", (v) => {
    expect(() => record_schema_prod(v as any)).toThrow();
    expect(() => record_schema_dev(v as any)).toThrow();
  });
});
