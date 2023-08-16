import { ToString, ToStringType } from "../../types.js";

export const to_string = <$Value extends ToStringType>(value: $Value) =>
  `${value}` as ToString<$Value>;
