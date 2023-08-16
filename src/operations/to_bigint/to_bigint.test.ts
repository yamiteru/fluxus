import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { to_bigint } from "./to_bigint.js";
import { ALPHABET, NUMBERS } from "../../constants.js";

describe("operations/to_bigint", () => {
  it.prop([fc.stringOf(fc.constantFrom(...NUMBERS))])(
    "should transform string to bigint if string is numerical",
    (v) => {
      expect(to_bigint(v)).toBe(BigInt(v));
    },
  );

  it.prop([fc.stringOf(fc.constantFrom(...ALPHABET), { minLength: 1 })])(
    "should throw on transform string to bigint if string is not numerical",
    (v) => {
      expect(() => to_bigint(v)).toThrow();
    },
  );

  it.prop([fc.integer()])("should transform number to bigint", (v) => {
    expect(to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.boolean()])("should transform boolean to bigint", (v) => {
    expect(to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.bigInt()])("should transform bigint to bigint", (v) => {
    expect(to_bigint(v)).toBe(BigInt(v));
  });

  it.prop([fc.record(fc.anything)])(
    "should throw on transform object to bigint",
    (v) => {
      expect(() => to_bigint(v as any)).toThrow();
    },
  );

  it("should transform empty array to bigint", () => {
    expect(to_bigint([] as any)).toBe(BigInt([] as any));
  });

  it("should transform [undefined] to bigint", () => {
    expect(to_bigint([undefined] as any)).toBe(BigInt([undefined] as any));
  });

  it.prop([fc.array(fc.bigInt(), { maxLength: 1, minLength: 1 })])(
    "should transform [bigint] to bigint",
    (v) => {
      expect(to_bigint(v as any)).toBe(BigInt(v as any));
    },
  );

  it.prop([fc.array(fc.integer(), { maxLength: 1, minLength: 1 })])(
    "should transform [number] to bigint",
    (v) => {
      expect(to_bigint(v as any)).toBe(BigInt(v as any));
    },
  );

  it.prop([
    fc.array(
      fc.oneof(
        fc.string(),
        fc.integer(),
        fc.record(fc.anything),
        fc.array(fc.anything()),
        fc.boolean(),
        fc.date(),
        fc.uint8Array(),
      ),
      { minLength: 2 },
    ),
  ])("should throw on transform array to bigint", (v) => {
    expect(() => to_bigint(v as any)).toThrow();
  });
});
