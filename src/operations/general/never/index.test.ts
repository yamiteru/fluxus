import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operaion/never", () => {
  it.prop([fc.anything()])("should throw on anything", (v) => {
    expect(() => prod.never(v as never)).toThrow();
    expect(() => dev.never(v as never)).toThrow();
  });
});
