import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/object_type", () => {
  it.prop([
    fc.oneof(fc.object(), fc.array(fc.anything()), fc.constantFrom(null)),
  ])("should return the value if it is an object", (v) => {
    expect(prod.object_type(v as any)).toBe(v);
    expect(dev.object_type(v as any)).toBe(v);
  });
});
