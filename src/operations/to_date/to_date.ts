import { ToDate, ToDateType } from "../../types.js";

export const to_date = <$Value extends ToDateType>(value: $Value) =>
  new Date(value) as ToDate<$Value>;
