import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { multiply, number_type, to_string } from "../../index.prod.js";

describe("operation/and", () => {
  const and_pipe_prod = prod.and([number_type, multiply(2), to_string]);
  const and_pipe_dev = dev.and([number_type, multiply(2), to_string]);

  it.prop([fc.integer()])("should pass if all sub-guards pass", (v) => {
    expect(and_pipe_prod(v)).toBe(`${v * 2}`);
    expect(and_pipe_dev(v)).toBe(`${v * 2}`);
  });

  it.prop([fc.boolean()])("should throw if one sub-guard throws", (v) => {
    expect(() => and_pipe_prod(v as any)).toThrow();
    expect(() => and_pipe_dev(v as any)).toThrow();
  });
});
