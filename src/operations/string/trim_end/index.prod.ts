import { TrimEnd } from "@types";

export const trim_end = <$Value extends string>(value: $Value) =>
  value.trimEnd() as TrimEnd<$Value>;
