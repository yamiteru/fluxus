import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/to_upper_case", () => {
  it.prop([fc.string()])("should transform string to upper case", (v) => {
    expect(prod.to_upper_case(v)).toBe(v.toUpperCase());
    expect(dev.to_upper_case(v)).toBe(v.toUpperCase());
  });
});
