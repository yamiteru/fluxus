import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/uuid", () => {
  it("should return the value if it is UUID", () => {
    expect(prod.uuid("00000000-0000-0000-0000-000000000000")).toBe(
      "00000000-0000-0000-0000-000000000000",
    );
    expect(dev.uuid("00000000-0000-0000-0000-000000000000")).toBe(
      "00000000-0000-0000-0000-000000000000",
    );
  });

  it("should throw an errorProd if the value is not UUID", () => {
    expect(() => prod.uuid("not a uuid")).toThrow();
    expect(() => dev.uuid("not a uuid")).toThrow();
  });
});
