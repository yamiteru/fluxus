import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { any } from "./any.js";

describe("operation/any", () => {
  it.prop([fc.anything()])("should pass on anything", (v) => {
    expect(any(v)).toBe(v);
  });
});
