import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/regex", () => {
  it("should return the value if it matches the regex", () => {
    expect(prod.regex(/abc/)("abc")).toBe("abc");
    expect(dev.regex(/abc/)("abc")).toBe("abc");
  });

  it("should throw an errorProd if the value does not match the regex", () => {
    expect(() => prod.regex(/abc/)("def")).toThrow();
    expect(() => dev.regex(/abc/)("def")).toThrow();
  });
});
