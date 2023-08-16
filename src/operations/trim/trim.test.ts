import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { trim } from "./trim.js";

describe("operation/string/trim", () => {
  it.prop([fc.string()])("should return trimmed value", (v) => {
    expect(trim(v)).toBe(v.trim());
  });
});
