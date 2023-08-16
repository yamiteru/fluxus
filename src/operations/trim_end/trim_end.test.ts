import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { trim_end } from "./trim_end.js";

describe("operation/trim_end", () => {
  it.prop([fc.string()])("should return trimmed value", (v) => {
    expect(trim_end(v)).toBe(v.trimEnd());
  });
});
