import { describe, it, expect } from "vitest";
import { CustomError, error } from "./error.js";

describe("util/error", () => {
  it("should throw a custom error", () => {
    expect(() => error("test", { hello: "world" })).toThrow(CustomError);
  });
});
