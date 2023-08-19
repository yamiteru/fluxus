import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import { string_type } from "@operations/string_type/index.prod.js";
import fc from "fast-check";

describe("operation/wrap", () => {
  const wrap_operation = prod.wrap("message", "reason")(string_type);

  it("should return a custom error when operation fails", () => {
    fc.assert(
      fc.property(fc.nat(), (v) => {
        expect(() => wrap_operation(v)).toThrow();
      }),
    );
  });

  it("should return operation output when operation doesn't fail", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(wrap_operation(v)).toBe(v);
      }),
    );
  });
});
