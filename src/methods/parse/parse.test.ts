import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { parse } from "./index.js";
import { string_type } from "../../operations/string_type/index.js";

describe("method/parse", () => {
  it.prop([fc.string()])(
    "should return output if input matches operation",
    (v) => {
      expect(parse(string_type, v)).toBe(v);
    },
  );

  it.prop([fc.integer()])(
    "should throw if input doesn't match operation",
    (v) => {
      expect(() => parse(string_type, v)).toThrow();
    },
  );
});
