import { error } from "@utils/error/index.prod.js";

export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) && error(), value
);
