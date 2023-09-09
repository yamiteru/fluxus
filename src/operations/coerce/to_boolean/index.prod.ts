import { ToBoolean, ToBooleanType } from "@types";

export const to_boolean = <$Value extends ToBooleanType>(value: $Value) =>
  !!value as ToBoolean<$Value>;
