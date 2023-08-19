import { describe, expect, it } from "bun:test";
import fc from "fast-check";
import * as prod from "./index.prod.js";
import * as dev from "./index.dev.js";
import { ALPHABET } from "@tests";

describe("operation/to_date", () => {
  it("should transform ISOString to Date", () => {
    fc.assert(
      fc.property(fc.date(), (v) => {
        expect(prod.to_date(v.toISOString())).toStrictEqual(v);
        expect(dev.to_date(v.toISOString())).toStrictEqual(v);
      }),
    );
  });

  it("should transform Date to Date", () => {
    fc.assert(
      fc.property(fc.date(), (v) => {
        expect(prod.to_date(v)).toStrictEqual(v);
        expect(dev.to_date(v)).toStrictEqual(v);
      }),
    );
  });

  it("should transform timestamp to Date", () => {
    fc.assert(
      fc.property(fc.date(), (v) => {
        expect(prod.to_date(v.getTime())).toStrictEqual(v);
        expect(dev.to_date(v.getTime())).toStrictEqual(v);
      }),
    );
  });

  it("should transform random string to (Invalid) Date", () => {
    fc.assert(
      fc.property(fc.stringOf(fc.constantFrom(...ALPHABET)), (v) => {
        expect(prod.to_date(v)).toBeInstanceOf(Date);
        expect(dev.to_date(v)).toBeInstanceOf(Date);
      }),
    );
  });
});
