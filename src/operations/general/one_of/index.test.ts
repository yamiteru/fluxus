import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/one_of", () => {
  const options = ["hello", "ola", "ahoj", "你好"];
  const one_of_operation_prod = prod.one_of(options);
  const one_of_operation_dev = dev.one_of(options);

  it("should return input if it matches one of options", () => {
    options.forEach((v) => {
      expect(one_of_operation_prod(v)).toBe(v);
      expect(one_of_operation_dev(v)).toBe(v);
    });
  });

  it.prop([fc.string()])(
    "should throw when input isn't one of options",
    (v) => {
      expect(() => one_of_operation_prod(v)).toThrow();
      expect(() => one_of_operation_dev(v)).toThrow();
    },
  );
});
