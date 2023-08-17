import { ToNumber, ToNumberType } from "../../../types.js";

/*
 * Converts the value to a number.
 * */
export const to_number = <$Value extends ToNumberType>(value: $Value) =>
  +value as ToNumber<$Value>;
