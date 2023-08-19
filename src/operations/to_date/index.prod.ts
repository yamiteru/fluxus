import { ToDate, ToDateType } from "@types";

/*
 * Converts the value to a date.
 * */
export const to_date = <$Value extends ToDateType>(value: $Value) =>
  new Date(value) as ToDate<$Value>;