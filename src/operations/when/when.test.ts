import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { when } from "./when.js";
import { number_type } from "../number_type/index.js";

describe("operation/when", () => {
  const when_operation1 = when(
    number_type,
    (v) => v,
    (v) => `${v}`,
  );

  const when_operation2 = when(number_type, (v) => v);

  it.prop([fc.integer()])(
    "should return true case if condition doesn't throw",
    (v) => {
      expect(when_operation1(v)).toBe(v);
    },
  );

  it.prop([fc.string()])(
    "should return false case if condition throws",
    (v) => {
      expect(when_operation1(v as any)).toBe(`${v}`);
    },
  );

  it.prop([fc.string()])(
    "should throw if condition throws and no false case is provided",
    (v) => {
      expect(() => when_operation2(v as any)).toThrow();
    },
  );
});
