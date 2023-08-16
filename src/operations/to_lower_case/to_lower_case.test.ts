import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { to_lower_case } from "./to_lower_case.js";

describe("operation/split", () => {
  it.prop([fc.string()])("should transform string to lower case", (v) => {
    expect(to_lower_case(v)).toBe(v.toLowerCase());
  });
});
