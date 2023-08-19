import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/email", () => {
  it("should return the value if it is an email address", () => {
    expect(prod.email("hello@icloud.com")).toBe("hello@icloud.com");
    expect(dev.email("hello@icloud.com")).toBe("hello@icloud.com");
  });

  it("should throw an errorProd if the value is not an email address", () => {
    expect(() => prod.email("hello")).toThrow();
    expect(() => dev.email("hello")).toThrow();
  });
});
