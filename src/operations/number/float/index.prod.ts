import { error } from "@utils/error/index.prod.js";

export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) && error(), value
);
