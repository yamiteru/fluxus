import { error } from "@utils/error/index.prod.js";

/*
 * Determines whether a string ends with the characters of a specified string.
 *
 * If it ends with the characters of the specified string, it returns the string back.
 *
 * If not it throws an errorProd.
 * */
export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) && error(), value
  );
