import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import { to_date } from "./to_date.js";
import { ALPHABET } from "../../constants.js";

describe("operation/to_date", () => {
  it.prop([fc.date()])("should transform ISOString to Date", (v) => {
    expect(to_date(v.toISOString())).toStrictEqual(v);
  });

  it.prop([fc.date()])("should transform Date to Date", (v) => {
    expect(to_date(v)).toStrictEqual(v);
  });

  it.prop([fc.date()])("should transform timestamp to Date", (v) => {
    expect(to_date(v.getTime())).toStrictEqual(v);
  });

  it.prop([fc.stringOf(fc.constantFrom(...ALPHABET))])(
    "should transform random string to (Invalid) Date",
    (v) => {
      expect(to_date(v)).toBeInstanceOf(Date);
    },
  );
});
