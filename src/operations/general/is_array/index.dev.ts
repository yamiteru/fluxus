import { error } from "../../../index.dev.js";

/*
 * Checks if the value is an array.
 * */
export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) &&
    error("TYPE"),
  value
);
