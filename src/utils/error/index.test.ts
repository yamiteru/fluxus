import { describe, expect, it } from "bun:test";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("util/error", () => {
  it("should throw FluxusError", () => {
    expect(() => prod.error()).toThrow(prod.FluxusError as never);
    expect(() => dev.error()).toThrow(dev.FluxusError as never);
  });
});
