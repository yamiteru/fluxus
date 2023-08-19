import { describe, expect, it } from "bun:test";
import { error } from "@utils/error/index.prod.js";
import * as prod from "@utils/is_error/index.prod.js";
import * as dev from "@utils/is_error/index.dev.js";

describe("util/is_error", () => {
  it("should return true if the input is FluxusError", () => {
    try {
      error();
    } catch (e) {
      expect(prod.is_error(e)).toBe(true);
      expect(dev.is_error(e)).toBe(true);
    }
  });

  it("should return false if the input is not FluxusError", () => {
    try {
      throw new Error("TEST");
    } catch (e) {
      expect(prod.is_error(e)).toBe(false);
      expect(dev.is_error(e)).toBe(false);
    }
  });
});
