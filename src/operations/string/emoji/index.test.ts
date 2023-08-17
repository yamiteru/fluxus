import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/emoji", () => {
  it("should return the value if it is an emoji", () => {
    expect(prod.emoji("👍")).toBe("👍");
    expect(dev.emoji("👍")).toBe("👍");
  });

  it("should throw an errorProd if the value is not an emoji", () => {
    expect(() => prod.emoji("foo")).toThrow();
    expect(() => dev.emoji("foo")).toThrow();
  });
});
