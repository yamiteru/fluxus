import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/trim_start", () => {
  it.prop([fc.string()])("should return trimmed value", (v) => {
    expect(prod.trim_start(v)).toBe(v.trimStart());
    expect(dev.trim_start(v)).toBe(v.trimStart());
  });
});
