import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { unknown } from "./unknown.js";

describe("operation/unknown", () => {
  it.prop([fc.anything()])("should pass on anything", (v) => {
    expect(unknown(v)).toBe(v);
  });
});
