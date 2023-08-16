import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { to_upper_case } from "./to_upper_case.js";

describe("operation/to_upper_case", () => {
  it.prop([fc.string()])("should transform string to upper case", (v) => {
    expect(to_upper_case(v)).toBe(v.toUpperCase());
  });
});
