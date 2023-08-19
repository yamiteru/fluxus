import { ToBoolean, ToBooleanType } from "@types";

/*
 * Converts the value to a boolean.
 * */
export const to_boolean = <$Value extends ToBooleanType>(value: $Value) =>
  !!value as ToBoolean<$Value>;
