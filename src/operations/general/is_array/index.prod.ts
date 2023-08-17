import { error } from "../../../utils/error/index.prod.js";

/*
 * Checks if the value is an array.
 * */
export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) &&
    error("TYPE", { desiredType: "array", currentType: typeof value }),
  value
);
