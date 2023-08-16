import { ToBoolean, ToBooleanType } from "../../types.js";

export const to_boolean = <$Value extends ToBooleanType>(value: $Value) =>
  !!value as ToBoolean<$Value>;
