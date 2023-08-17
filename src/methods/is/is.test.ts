import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { is } from "./is.js";
import { string_type } from "../../operations/index.js";

describe("method/is", () => {
  it.prop([fc.string()])(
    "should return true if input matches operation",
    (v) => {
      expect(is(string_type, v)).toBe(true);
    },
  );

  it.prop([fc.integer()])(
    "should return false if input doesn't match operation",
    (v) => {
      expect(is(string_type, v)).toBe(false);
    },
  );
});
