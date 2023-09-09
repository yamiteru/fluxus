import fc from "fast-check";
import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operations/to_boolean", () => {
  it("should transform string to boolean", () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        expect(prod.to_boolean(v)).toBe(!!v);
        expect(dev.to_boolean(v)).toBe(!!v);
      }),
    );
  });

  it("should transform number to boolean", () => {
    fc.assert(
      fc.property(fc.integer(), (v) => {
        expect(prod.to_boolean(v)).toBe(!!v);
        expect(dev.to_boolean(v)).toBe(!!v);
      }),
    );
  });

  it("should transform boolean to boolean", () => {
    fc.assert(
      fc.property(fc.boolean(), (v) => {
        expect(prod.to_boolean(v)).toBe(!!v);
        expect(dev.to_boolean(v)).toBe(!!v);
      }),
    );
  });

  it("should transform bigint to boolean", () => {
    fc.assert(
      fc.property(fc.bigInt(), (v) => {
        expect(prod.to_boolean(v)).toBe(!!v);
        expect(dev.to_boolean(v)).toBe(!!v);
      }),
    );
  });

  it("should transform object to boolean", () => {
    fc.assert(
      fc.property(fc.record(fc.anything), (v) => {
        expect(prod.to_boolean(v as any)).toBe(!!v);
        expect(dev.to_boolean(v as any)).toBe(!!v);
      }),
    );
  });

  it("should transform array to boolean", () => {
    fc.assert(
      fc.property(fc.array(fc.anything()), (v) => {
        expect(prod.to_boolean(v as any)).toBe(!!v);
        expect(dev.to_boolean(v as any)).toBe(!!v);
      }),
    );
  });
});
