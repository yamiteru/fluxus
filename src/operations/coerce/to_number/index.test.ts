import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operations/to_number", () => {
  it("should transform string to number", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.to_number(v)).toBe(+v);
        expect(dev.to_number(v)).toBe(+v);
      }),
    );
  });

  it("should transform number to number", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.to_number(v)).toBe(+v);
        expect(dev.to_number(v)).toBe(+v);
      }),
    );
  });

  it("should transform boolean to number", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(prod.to_number(v)).toBe(+v);
        expect(dev.to_number(v)).toBe(+v);
      }),
    );
  });

  it("should transform object to number", () => {
    fc.assert(
      fc.property(fc.record(fc.anything), (v) => {
        expect(prod.to_number(v as any)).toBe(+v);
        expect(dev.to_number(v as any)).toBe(+v);
      }),
    );
  });

  it("should transform array to number", () => {
    fc.assert(
      fc.property(
        fc.array(fc.oneof(fc.string(), fc.nat(), fc.boolean()), {
          minLength: 1,
        }),
        (v) => {
          expect(prod.to_number(v as any)).toBe(+v);
          expect(dev.to_number(v as any)).toBe(+v);
        },
      ),
    );
  });

  it("should throw on transform bigint to number", () => {
    fc.assert(
      fc.property(fc.bigInt(), (v) => {
        expect(() => prod.to_number(v as any)).toThrow();
        expect(() => dev.to_number(v as any)).toThrow();
      }),
    );
  });
});
