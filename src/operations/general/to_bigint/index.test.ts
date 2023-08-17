import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { alphabetCharacters, numberCharacters, primitive } from "../../../tests.js";

describe("operations/to_bigint", () => {
  it.prop([numberCharacters])(
    "should transform string to bigint if string is numerical",
    (v) => {
      expect(prod.to_bigint(v)).toBe(BigInt(v));
      expect(dev.to_bigint(v)).toBe(BigInt(v));
    },
  );

  it.prop([alphabetCharacters])(
    "should throw on transform string to bigint if string is not numerical",
    (v) => {
      expect(() => prod.to_bigint(v)).toThrow();
      expect(() => dev.to_bigint(v)).toThrow();
    },
  );

  it.prop([fc.integer()])("should transform number to bigint", (v) => {
    expect(prod.to_bigint(v)).toBe(BigInt(v));
    expect(dev.to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.boolean()])("should transform boolean to bigint", (v) => {
    expect(prod.to_bigint(v)).toBe(BigInt(v));
    expect(dev.to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.bigInt()])("should transform bigint to bigint", (v) => {
    expect(prod.to_bigint(v)).toBe(BigInt(v));
    expect(dev.to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.record(fc.anything)])(
    "should throw on transform object to bigint",
    (v) => {
      expect(() => prod.to_bigint(v as any)).toThrow();
      expect(() => dev.to_bigint(v as any)).toThrow();
    },
  );

  it("should transform empty array to bigint", () => {
    expect(prod.to_bigint([] as any)).toBe(BigInt([] as any));
    expect(dev.to_bigint([] as any)).toBe(BigInt([] as any));
  });

  it("should transform [undefined] to bigint", () => {
    expect(prod.to_bigint([undefined] as any)).toBe(BigInt([undefined] as any));
    expect(dev.to_bigint([undefined] as any)).toBe(BigInt([undefined] as any));
  });

  it.prop([fc.array(fc.bigInt(), { maxLength: 1, minLength: 1 })])(
    "should transform [bigint] to bigint",
    (v) => {
      expect(prod.to_bigint(v as any)).toBe(BigInt(v as any));
      expect(dev.to_bigint(v as any)).toBe(BigInt(v as any));
    },
  );

  it.prop([fc.array(fc.integer(), { maxLength: 1, minLength: 1 })])(
    "should transform [number] to bigint",
    (v) => {
      expect(prod.to_bigint(v as any)).toBe(BigInt(v as any));
      expect(dev.to_bigint(v as any)).toBe(BigInt(v as any));
    },
  );

  it.prop([fc.array(primitive, { minLength: 2 })])(
    "should throw on transform array to bigint",
    (v) => {
      expect(() => prod.to_bigint(v as any)).toThrow();
      expect(() => dev.to_bigint(v as any)).toThrow();
    },
  );
});
