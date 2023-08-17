import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/instance_of", () => {
  const date_instance_prod = prod.instance_of(Date);
  const date_instance_dev = dev.instance_of(Date);

  it.prop([fc.date()])("should pass if input is instance of Date", (v) => {
    expect(date_instance_prod(v)).toBe(v);
    expect(date_instance_dev(v)).toBe(v);
  });

  it.prop([fc.integer()])(
    "should throw if input isn't instance of Date",
    (v) => {
      expect(() => date_instance_prod(v as any)).toThrow();
      expect(() => date_instance_dev(v as any)).toThrow();
    },
  );
});
