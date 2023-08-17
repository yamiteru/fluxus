import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { fc, it } from "@fast-check/vitest";

describe("util/error", () => {
  it.prop([fc.dictionary(fc.string(), fc.anything())])(
    "should throw a custom errorProd",
    (v) => {
      expect(() => prod.error("TEST", v)).toThrow(prod.CustomError);
      expect(() => dev.error("TEST")).toThrow(dev.CustomError);
    },
  );
});
