import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { tap } from "./tap.js";
import { number_type } from "../number_type/index.js";

describe("operation/tap", () => {
  const tap_operation = tap(number_type);

  it.prop([fc.nat()])(
    "should return input value if no error is thrown",
    (v) => {
      expect(tap_operation(v)).toEqual(v);
    },
  );

  it.prop([fc.string()])("should throw if callback throws", (v) => {
    expect(() => tap_operation(v as any)).toThrow();
  });
});
