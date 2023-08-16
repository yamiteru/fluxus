import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { split } from "./split.js";

describe("operation/split", () => {
  it.prop([fc.string()])("should split string into string array", (v) => {
    expect(split("")(v)).toEqual(v.split(""));
  });
});
