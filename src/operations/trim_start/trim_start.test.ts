import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { trim_start } from "./trim_start.js";

describe("operation/trim_start", () => {
  it.prop([fc.string()])("should return trimmed value", (v) => {
    expect(trim_start(v)).toBe(v.trimStart());
  });
});
