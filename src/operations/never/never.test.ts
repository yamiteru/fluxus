import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { never } from "./never.js";

describe("operaion/never", () => {
  it.prop([fc.anything()])("should throw on anything", (v) => {
    expect(() => never(v as never)).toThrow();
  });
});
