import { ToDate, ToDateType } from "@types";

export const to_date = <$Value extends ToDateType>(value: $Value) =>
  new Date(value) as ToDate<$Value>;
