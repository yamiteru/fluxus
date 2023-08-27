import { error } from "@utils/error/index.dev.js";

export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) &&
      error(`Value [${value}] should end with [${searchString}]`, "ENDS_WITH", {
        searchString,
        value,
      }),
    value
  );
