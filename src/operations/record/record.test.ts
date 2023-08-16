import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { record } from "./record.js";
import { string_type } from "../string_type/index.js";
import { number_type } from "../number_type/index.js";

describe("operation/record", () => {
  const record_schema = record(string_type, number_type);

  it.prop([
    fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.nat(), {
      minKeys: 1,
    }),
  ])("should return the value if it matches a schema", (v) => {
    expect(record_schema(v)).toEqual(v);
  });

  it.prop([
    fc.dictionary(fc.string({ minLength: 1, maxLength: 4 }), fc.string(), {
      minKeys: 1,
    }),
  ])("should throw an error if the value does not match a schema", (v) => {
    expect(() => record_schema(v as any)).toThrow();
  });
});
