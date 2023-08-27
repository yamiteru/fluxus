import { ToNumber, ToNumberType } from "@types";

export const to_number = <$Value extends ToNumberType>(value: $Value) =>
  +value as ToNumber<$Value>;
