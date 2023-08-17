import { error } from "../../../index.dev.js";

/*
 * Checks if the value is an integer.
 * */
export const integer = <$Value extends number>(value: $Value) => (
  !Number.isInteger(value) && error("INTEGER"), value
);
