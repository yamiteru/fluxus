import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { one_of } from "./one_of.js";

describe("operation/one_of", () => {
  const options = ["hello", "ola", "ahoj", "你好"];
  const one_of_operation = one_of(options);

  it("should return input if it matches one of options", () => {
    options.forEach((v) => {
      expect(one_of_operation(v)).toBe(v);
    });
  });

  it.prop([fc.string()])(
    "should throw when input isn't one of options",
    (v) => {
      expect(() => one_of_operation(v)).toThrow();
    },
  );
});
