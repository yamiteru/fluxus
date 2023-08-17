import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/any", () => {
  it.prop([fc.anything()])("should pass on anything", (v) => {
    expect(prod.any(v)).toBe(v);
    expect(dev.any(v)).toBe(v);
  });
});
