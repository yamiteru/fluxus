import { error } from "@utils/error/index.prod.js";

export const ends_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.endsWith(searchString) && error(), value
  );
