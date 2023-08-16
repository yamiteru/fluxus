import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { uuid } from "./uuid.js";

describe("operation/uuid", () => {
  it("should return the value if it is UUID", () => {
    expect(uuid("00000000-0000-0000-0000-000000000000")).toBe(
      "00000000-0000-0000-0000-000000000000",
    );
  });

  it("should throw an error if the value is not UUID", () => {
    expect(() => uuid("not a uuid")).toThrow();
  });
});
