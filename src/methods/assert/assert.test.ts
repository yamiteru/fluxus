import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { assert } from "./assert.js";
import { string_type } from "../../operations/string_type/index.js";

describe("method/assert", () => {
  it.prop([fc.string()])("should not throw if input matches operation", (v) => {
    expect(() => assert(string_type, v)).not.toThrow();
  });

  it.prop([fc.integer()])(
    "should throw if input doesn't match operation",
    (v) => {
      expect(() => assert(string_type, v)).toThrow();
    },
  );
});
