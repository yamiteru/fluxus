import { TrimStart } from "@types";

/*
 * Removes whitespace from the beginning of a string and returns a new string, without modifying the original string.
 * */
export const trim_start = <$Value extends string>(value: $Value) =>
  value.trimStart() as TrimStart<$Value>;
