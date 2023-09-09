import { Trim } from "@types";

export const trim = <$Value extends string>(value: $Value) =>
  value.trim() as Trim<$Value>;
