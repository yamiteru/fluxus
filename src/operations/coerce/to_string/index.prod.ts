import { ToString, ToStringType } from "@types";

export const to_string = <$Value extends ToStringType>(value: $Value) =>
  `${value}` as ToString<$Value>;
