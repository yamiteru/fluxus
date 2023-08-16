import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { capitalize } from "./capitalize.js";

describe("operation/capitalize", () => {
  it.prop([fc.string({ minLength: 1 })])(
    "should capitalize the first letter of the string",
    (v) => {
      expect(capitalize(v)).toBe(`${v[0].toUpperCase()}${v.slice(1)}`);
    },
  );
});
