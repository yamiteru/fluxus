import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { to_string } from "./to_string.js";

describe("operations/to_string", () => {
  it.prop([fc.string()])("should transform string to string", (v) => {
    expect(to_string(v)).toBe(`${v}`);
  });

  it.prop([fc.integer()])("should transform number to string", (v) => {
    expect(to_string(v)).toBe(`${v}`);
  });

  it.prop([fc.boolean()])("should transform boolean to string", (v) => {
    expect(to_string(v)).toBe(`${v}`);
  });
});
