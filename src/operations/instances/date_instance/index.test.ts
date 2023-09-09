import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/date_instance", () => {
  it("should return the value if it is an instance of Date", () => {
    fc.assert(
      fc.property(fc.date(), (v) => {
        expect(prod.date_instance(v)).toBe(v);
        expect(dev.date_instance(v)).toBe(v);
      }),
    );
  });

  it("should throw an errorProd if the value is not an instance of Date", () => {
    fc.assert(
      fc.property(fc.anything(), (v) => {
        expect(() => prod.date_instance(v as any)).toThrow();
        expect(() => dev.date_instance(v as any)).toThrow();
      }),
    );
  });
});
