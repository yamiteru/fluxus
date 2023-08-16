import { ToNumber, ToNumberType } from "../../types.js";

export const to_number = <$Value extends ToNumberType>(value: $Value) =>
  +value as ToNumber<$Value>;
