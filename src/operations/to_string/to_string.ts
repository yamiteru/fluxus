import { ToString, ToStringType } from "../../types.js";

/*
 * Converts the value to a string.
 * */
export const to_string = <$Value extends ToStringType>(value: $Value) =>
  `${value}` as ToString<$Value>;
