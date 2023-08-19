import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is a finite number.
 * */
export const finite = <$Value extends number>(value: $Value) => (
  !Number.isFinite(value) &&
    error(`Value [${value}] should be finite`, "FINITE"),
  value
);
