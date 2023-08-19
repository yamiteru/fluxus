import { error } from "@utils/error/index.prod.js";

/*
 * Checks if the value is a float.
 * */
export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) && error(), value
);
