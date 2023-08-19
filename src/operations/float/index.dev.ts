import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is a float.
 * */
export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) &&
    error(`Value [${value}] should be a float`, "FLOAT", { value }),
  value
);
