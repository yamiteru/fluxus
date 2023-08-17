import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/string/trim", () => {
  it.prop([fc.string()])("should return trimmed value", (v) => {
    expect(prod.trim(v)).toBe(v.trim());
    expect(dev.trim(v)).toBe(v.trim());
  });
});
