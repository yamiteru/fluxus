import { error } from "@utils/error/index.dev.js";

export const starts_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.startsWith(searchString) &&
      error(
        `Value [${value}] should start with [${searchString}]`,
        "STARTS_WITH",
        { searchString, value },
      ),
    value
  );
