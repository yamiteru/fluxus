import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/object_type", () => {
  it("should return the value if it is an object", () => {
    fc.assert(
      fc.property(
        fc.oneof(fc.object(), fc.array(fc.anything()), fc.constantFrom(null)),
        (v) => {
          expect(prod.object_type(v as any)).toBe(v);
          expect(dev.object_type(v as any)).toBe(v);
        },
      ),
    );
  });
});
