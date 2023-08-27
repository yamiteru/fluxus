import { error } from "@utils/error/index.prod.js";

export const integer = <$Value extends number>(value: $Value) => (
  !Number.isInteger(value) && error(), value
);
