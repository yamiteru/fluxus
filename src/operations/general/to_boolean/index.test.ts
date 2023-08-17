import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operations/to_boolean", () => {
  it.prop([fc.string()])("should transform string to boolean", (v) => {
    expect(prod.to_boolean(v)).toBe(!!v);
    expect(dev.to_boolean(v)).toBe(!!v);
  });

  it.prop([fc.integer()])("should transform number to boolean", (v) => {
    expect(prod.to_boolean(v)).toBe(!!v);
    expect(dev.to_boolean(v)).toBe(!!v);
  });

  it.prop([fc.boolean()])("should transform boolean to boolean", (v) => {
    expect(prod.to_boolean(v)).toBe(!!v);
    expect(dev.to_boolean(v)).toBe(!!v);
  });

  it.prop([fc.bigInt()])("should transform bigint to boolean", (v) => {
    expect(prod.to_boolean(v)).toBe(!!v);
    expect(dev.to_boolean(v)).toBe(!!v);
  });

  it.prop([fc.record(fc.anything)])(
    "should transform object to boolean",
    (v) => {
      expect(prod.to_boolean(v as any)).toBe(!!v);
      expect(dev.to_boolean(v as any)).toBe(!!v);
    },
  );

  it.prop([fc.array(fc.anything())])(
    "should transform array to boolean",
    (v) => {
      expect(prod.to_boolean(v as any)).toBe(!!v);
      expect(dev.to_boolean(v as any)).toBe(!!v);
    },
  );
});
