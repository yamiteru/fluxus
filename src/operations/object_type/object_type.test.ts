import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { object_type } from "./object_type.js";

describe("operation/object_type", () => {
  it.prop([
    fc.oneof(fc.object(), fc.array(fc.anything()), fc.constantFrom(null)),
  ])("should return the value if it is an object", (v) => {
    expect(object_type(v as any)).toBe(v);
  });
});
