import { error } from "@utils/error/index.dev.js";

export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) &&
    error("FLOAT", `Value [${value}] should be a float`, { value }),
  value
);
