import { error } from "../../../utils/error/index.prod.js";

/*
 * Determines whether a string begins with the characters of a specified string.
 *
 * If it begins with the characters of the specified string, it returns the string back.
 *
 * If not it throws an errorProd.
 * */
export const starts_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.startsWith(searchString) &&
      error("STARTS_WITH", { searchString, value }),
    value
  );
