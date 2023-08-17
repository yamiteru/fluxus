import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/unknown", () => {
  it.prop([fc.anything()])("should pass on anything", (v) => {
    expect(prod.unknown(v)).toBe(v);
    expect(dev.unknown(v)).toBe(v);
  });
});
