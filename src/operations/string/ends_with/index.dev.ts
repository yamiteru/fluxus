import { error } from "@utils/error/index.dev.js";

export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) &&
      error("ENDS_WITH", `Value [${value}] should end with [${searchString}]`, {
        searchString,
        value,
      }),
    value
  );
