import { Trim } from "../../types.js";

export const trim = <$Value extends string>(value: $Value) =>
  value.trim() as Trim<$Value>;
