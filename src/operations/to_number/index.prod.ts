import { ToNumber, ToNumberType } from "@types";

/*
 * Converts the value to a number.
 * */
export const to_number = <$Value extends ToNumberType>(value: $Value) =>
  +value as ToNumber<$Value>;
