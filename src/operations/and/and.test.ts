import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { and } from "./and.js";

describe("operation/and", () => {
  const and_pipe = and([
    (v: unknown) => {
      if (typeof v !== "number") throw {};
      return v;
    },
    (v) => v * 2,
    (v) => `${v}`,
  ]);

  it.prop([fc.integer()])("should pass if all sub-guards pass", (v) => {
    expect(and_pipe(v)).toBe(`${v * 2}`);
  });

  it.prop([fc.boolean()])("should throw if one sub-guard throws", (v) => {
    expect(() => and_pipe(v)).toThrow();
  });
});
