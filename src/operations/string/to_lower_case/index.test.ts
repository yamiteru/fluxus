import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/split", () => {
  it.prop([fc.string()])("should transform string to lower case", (v) => {
    expect(prod.to_lower_case(v)).toBe(v.toLowerCase());
    expect(dev.to_lower_case(v)).toBe(v.toLowerCase());
  });
});
