import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { alphabetCharacters, numberCharacters, primitive } from "@tests";

describe("operations/to_bigint", () => {
  it("should transform string to bigint if string is numerical", () => {
    fc.assert(
      fc.property(numberCharacters, (v) => {
        expect(prod.to_bigint(v)).toBe(BigInt(v));
        expect(dev.to_bigint(v)).toBe(BigInt(v));
      }),
    );
  });

  it("should throw on transform string to bigint if string is not numerical", () => {
    fc.assert(
      fc.property(alphabetCharacters, (v) => {
        expect(() => prod.to_bigint(v)).toThrow();
        expect(() => dev.to_bigint(v)).toThrow();
      }),
    );
  });

  it("should transform number to bigint", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.to_bigint(v)).toBe(BigInt(v));
        expect(dev.to_bigint(v)).toBe(BigInt(v));
      }),
    );
  });

  it("should transform boolean to bigint", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(prod.to_bigint(v)).toBe(BigInt(v));
        expect(dev.to_bigint(v)).toBe(BigInt(v));
      }),
    );
  });

  it("should transform bigint to bigint", () => {
    fc.assert(
      fc.property(fc.bigInt(), (v) => {
        expect(prod.to_bigint(v)).toBe(BigInt(v));
        expect(dev.to_bigint(v)).toBe(BigInt(v));
      }),
    );
  });

  it("should throw on transform object to bigint", () => {
    fc.assert(
      fc.property(fc.record(fc.anything), (v) => {
        expect(() => prod.to_bigint(v as any)).toThrow();
        expect(() => dev.to_bigint(v as any)).toThrow();
      }),
    );
  });

  it("should transform empty array to bigint", () => {
    expect(prod.to_bigint([] as any)).toBe(BigInt([] as any));
    expect(dev.to_bigint([] as any)).toBe(BigInt([] as any));
  });

  it("should transform [undefined] to bigint", () => {
    expect(prod.to_bigint([undefined] as any)).toBe(BigInt([undefined] as any));
    expect(dev.to_bigint([undefined] as any)).toBe(BigInt([undefined] as any));
  });

  it("should transform [bigint] to bigint", () => {
    fc.assert(
      fc.property(
        fc.array(fc.bigInt(), { maxLength: 1, minLength: 1 }),
        (v) => {
          expect(prod.to_bigint(v as any)).toBe(BigInt(v as any));
          expect(dev.to_bigint(v as any)).toBe(BigInt(v as any));
        },
      ),
    );
  });

  it("should transform [number] to bigint", () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer(), { maxLength: 1, minLength: 1 }),
        (v) => {
          expect(prod.to_bigint(v as any)).toBe(BigInt(v as any));
          expect(dev.to_bigint(v as any)).toBe(BigInt(v as any));
        },
      ),
    );
  });

  it("should throw on transform array to bigint", () => {
    fc.assert(
      fc.property(fc.array(primitive, { minLength: 2 }), (v) => {
        expect(() => prod.to_bigint(v as any)).toThrow();
        expect(() => dev.to_bigint(v as any)).toThrow();
      }),
    );
  });
});
