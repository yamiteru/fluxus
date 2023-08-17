import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";

describe("operation/capitalize", () => {
  it.prop([fc.string({ minLength: 1 })])(
    "should capitalize the first letter of the string",
    (v) => {
      expect(prod.capitalize(v)).toBe(`${v[0].toUpperCase()}${v.slice(1)}`);
      expect(dev.capitalize(v)).toBe(`${v[0].toUpperCase()}${v.slice(1)}`);
    },
  );
});
