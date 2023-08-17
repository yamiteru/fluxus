import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { number_type } from "../../index.prod.js";
import { to_string } from "../to_string/index.prod.js";
import { plus } from "../../number/plus/index.prod.js";

describe("operation/when", () => {
  const when_operation1_prod = prod.when(number_type,to_string);
  const when_operation1_dev = dev.when(number_type,to_string);

  const when_operation2_prod = prod.when(number_type, plus(1));
  const when_operation2_dev = dev.when(number_type, plus(1));

  it.prop([fc.integer()])(
    "should return true case if condition doesn't throw",
    (v) => {
      expect(when_operation1_prod(v)).toBe(v);
      expect(when_operation1_dev(v)).toBe(v);
    },
  );

  it.prop([fc.string()])(
    "should return false case if condition throws",
    (v) => {
      expect(when_operation1_prod(v as any)).toBe(`${v}`);
      expect(when_operation1_dev(v as any)).toBe(`${v}`);
    },
  );

  it.prop([fc.string()])(
    "should throw if condition throws and no false case is provided",
    (v) => {
      expect(() => when_operation2_prod(v as any)).toThrow();
      expect(() => when_operation2_dev(v as any)).toThrow();
    },
  );
});
