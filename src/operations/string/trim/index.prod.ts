import { Trim } from "../../../types.js";

/*
 * Removes whitespace from both ends of a string and returns a new string, without modifying the original string.
 * */
export const trim = <$Value extends string>(value: $Value) =>
  value.trim() as Trim<$Value>;
