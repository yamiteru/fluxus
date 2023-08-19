import { TrimEnd } from "@types";

/*
 * Removes whitespace from the end of a string and returns a new string, without modifying the original string.
 * */
export const trim_end = <$Value extends string>(value: $Value) =>
  value.trimEnd() as TrimEnd<$Value>;
