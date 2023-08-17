import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/split", () => {
  it.prop([fc.string()])("should split string into string array", (v) => {
    expect(prod.split("")(v)).toEqual(v.split(""));
    expect(dev.split("")(v)).toEqual(v.split(""));
  });
});
