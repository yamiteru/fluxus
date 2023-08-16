import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { email } from "./email.js";

describe("operation/email", () => {
  it("should return the value if it is an email address", () => {
    expect(email("hello@icloud.com")).toBe("hello@icloud.com");
  });

  it("should throw an error if the value is not an email address", () => {
    expect(() => email("hello")).toThrow();
  });
});
