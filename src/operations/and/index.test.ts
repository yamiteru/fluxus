import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "@operations/number_type/index.prod.js";
import { multiply } from "@operations/multiply/index.prod.js";
import { to_string } from "@operations/to_string/index.prod.js";

describe("operation/and", () => {
  const and_pipe_prod = prod.and([number_type, multiply(2), to_string]);
  const and_pipe_dev = dev.and([number_type, multiply(2), to_string]);

  it("should pass if all sub-guards pass", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(and_pipe_prod(v)).toBe(`${v * 2}`);
        expect(and_pipe_dev(v)).toBe(`${v * 2}`);
      }),
    );
  });

  it("should throw if one sub-guard throws", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(() => and_pipe_prod(v as any)).toThrow();
        expect(() => and_pipe_dev(v as any)).toThrow();
      }),
    );
  });
});
