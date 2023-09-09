import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "@operations/types/string_type/index.prod.js";
import fc from "fast-check";

describe("operation/wrap", () => {
  const wrap_operation_prod = prod.wrap(string_type, () => "message", "reason");
  const wrap_operation_dev = dev.wrap(string_type, () => "message", "reason");

  it("should return a custom error when operation fails", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(() => wrap_operation_prod(v)).toThrow();
        expect(() => wrap_operation_dev(v)).toThrow();
      }),
    );
  });

  it("should return operation output when operation doesn't fail", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(wrap_operation_prod(v)).toBe(v);
        expect(wrap_operation_dev(v)).toBe(v);
      }),
    );
  });
});
