import { error } from "../../utils/index.js";

/*
 * Determines whether a string ends with the characters of a specified string.
 *
 * If it ends with the characters of the specified string, it returns the string back.
 *
 * If not it throws an error.
 * */
export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) &&
      error("ENDS_WITH", { searchString, value }),
    value
  );
