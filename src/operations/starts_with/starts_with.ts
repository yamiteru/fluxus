import { error } from "../../utils/index.js";

export const starts_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.startsWith(searchString) &&
      error("STARTS_WITH", { searchString, value }),
    value
  );
