import { error } from "../../utils/index.js";

export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) &&
      error("ENDS_WITH", { searchString, value }),
    value
  );
