import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/instance_of", () => {
  const date_instance_prod = prod.instance_of(Date);
  const date_instance_dev = dev.instance_of(Date);

  it("should pass if input is instance of Date", () => {
    fc.assert(
      fc.property(fc.date(), (v) => {
        expect(date_instance_prod(v)).toBe(v);
        expect(date_instance_dev(v)).toBe(v);
      }),
    );
  });

  it("should throw if input isn't instance of Date", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(() => date_instance_prod(v as any)).toThrow();
        expect(() => date_instance_dev(v as any)).toThrow();
      }),
    );
  });
});
