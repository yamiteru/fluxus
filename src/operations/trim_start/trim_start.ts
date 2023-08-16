import { TrimStart } from "../../types.js";

export const trim_start = <$Value extends string>(value: $Value) =>
  value.trimStart() as TrimStart<$Value>;
