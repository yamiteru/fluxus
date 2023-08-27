import { error } from "@utils/error/index.prod.js";

export const starts_with =
  <$SearchString extends string>(searchString: $SearchString) =>
  <$Value extends string>(value: $Value) => (
    !value.startsWith(searchString) && error(), value
  );
