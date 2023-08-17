import { describe, expect } from "vitest";
import { fc, it } from "@fast-check/vitest";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "../../../tests.js";

describe("operation/to_date", () => {
  it.prop([fc.date()])("should transform ISOString to Date", (v) => {
    expect(prod.to_date(v.toISOString())).toStrictEqual(v);
    expect(dev.to_date(v.toISOString())).toStrictEqual(v);
  });

  it.prop([fc.date()])("should transform Date to Date", (v) => {
    expect(prod.to_date(v)).toStrictEqual(v);
    expect(dev.to_date(v)).toStrictEqual(v);
  });

  it.prop([fc.date()])("should transform timestamp to Date", (v) => {
    expect(prod.to_date(v.getTime())).toStrictEqual(v);
    expect(dev.to_date(v.getTime())).toStrictEqual(v);
  });

  it.prop([fc.stringOf(fc.constantFrom(...ALPHABET))])(
    "should transform random string to (Invalid) Date",
    (v) => {
      expect(prod.to_date(v)).toBeInstanceOf(Date);
      expect(dev.to_date(v)).toBeInstanceOf(Date);
    },
  );
});
