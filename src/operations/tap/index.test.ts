import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/number_type/index.prod.js";

describe("operation/tap", () => {
  const tap_operation_prod = prod.tap(number_type);
  const tap_operation_dev = dev.tap(number_type);

  it("should return input value if no errorProd is thrown", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(tap_operation_prod(v)).toEqual(v);
        expect(tap_operation_dev(v)).toEqual(v);
      }),
    );
  });

  it("should throw if callback throws", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(() => tap_operation_prod(v as any)).toThrow();
        expect(() => tap_operation_dev(v as any)).toThrow();
      }),
    );
  });
});
