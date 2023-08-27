import { error } from "@utils/error/index.dev.js";

export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) &&
    error(`Value [${value}] should be a float`, "FLOAT", { value }),
  value
);
