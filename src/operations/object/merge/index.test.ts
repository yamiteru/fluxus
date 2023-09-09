import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { object } from "@operations/object/object/index.prod.js";
import { string_type } from "@operations/types/string_type/index.prod.js";

describe("operation/merge", () => {
  const merge_prod = prod.merge(
    object({
      a: string_type,
    }),
    object({
      b: string_type,
    }),
  );
  const merge_dev = dev.merge(
    object({
      a: string_type,
    }),
    object({
      b: string_type,
    }),
  );

  it("should return value if both objects pass", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.string(),
          b: fc.string(),
        }),
        (v) => {
          expect(merge_prod(v)).toEqual(v);
          expect(merge_dev(v)).toEqual(v);
        },
      ),
    );
  });

  it("should throw an error if the first object fails", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.boolean(),
          b: fc.string(),
        }),
        (v) => {
          expect(() => merge_prod(v as any)).toThrow();
          expect(() => merge_dev(v as any)).toThrow();
        },
      ),
    );
  });

  it("should throw an error if the second object fails", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.string(),
          b: fc.boolean(),
        }),
        (v) => {
          expect(() => merge_prod(v as any)).toThrow();
          expect(() => merge_dev(v as any)).toThrow();
        },
      ),
    );
  });

  it("should throw if one of the keys is missing", () => {
    fc.assert(
      fc.property(
        fc.record({
          a: fc.string(),
        }),
        (v) => {
          expect(() => merge_prod(v as any)).toThrow();
          expect(() => merge_dev(v as any)).toThrow();
        },
      ),
    );
  });
});
