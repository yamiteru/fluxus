import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "../../index.prod.js";

describe("operation/tap", () => {
  const tap_operation_prod = prod.tap(number_type);
  const tap_operation_dev = dev.tap(number_type);

  it.prop([fc.nat()])(
    "should return input value if no errorProd is thrown",
    (v) => {
      expect(tap_operation_prod(v)).toEqual(v);
      expect(tap_operation_dev(v)).toEqual(v);
    },
  );

  it.prop([fc.string()])("should throw if callback throws", (v) => {
    expect(() => tap_operation_prod(v as any)).toThrow();
    expect(() => tap_operation_dev(v as any)).toThrow();
  });
});
