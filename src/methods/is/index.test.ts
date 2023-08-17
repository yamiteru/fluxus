import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { string_type } from "../../operations/index.prod.js";

describe("method/is", () => {
  it.prop([fc.string()])(
    "should return true if input matches operation",
    (v) => {
      expect(prod.is(string_type, v)).toBe(true);
      expect(dev.is(string_type, v)).toBe(true);
    },
  );

  it.prop([fc.integer()])(
    "should return false if input doesn't match operation",
    (v) => {
      expect(prod.is(string_type, v)).toBe(false);
      expect(dev.is(string_type, v)).toBe(false);
    },
  );
});
