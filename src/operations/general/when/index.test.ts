import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/types/number_type/index.prod.js";
import { to_string } from "@operations/coerce/to_string/index.prod.js";
import { plus } from "@operations/number/plus/index.prod.js";

describe("operation/when", () => {
  const when_operation1_prod = prod.when(number_type, to_string);
  const when_operation1_dev = dev.when(number_type, to_string);

  const when_operation2_prod = prod.when(number_type, to_string, plus(1));
  const when_operation2_dev = dev.when(number_type, to_string, plus(1));

  it("should return true case if condition doesn't throw", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(when_operation1_prod(v)).toBe(`${v}`);
        expect(when_operation1_dev(v)).toBe(`${v}`);
      }),
    );
  });

  it("should return false case if condition throws", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(when_operation2_prod(v as any)).toBe(v + 1);
        expect(when_operation2_dev(v as any)).toBe(v + 1);
      }),
    );
  });

  it("should throw if condition throws and no false case is provided", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => when_operation1_prod(v as any)).toThrow();
        expect(() => when_operation1_dev(v as any)).toThrow();
      }),
    );
  });
});
