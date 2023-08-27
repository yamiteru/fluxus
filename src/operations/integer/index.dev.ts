import { error } from "@utils/error/index.dev.js";

export const integer = <$Value extends number>(value: $Value) => (
  !Number.isInteger(value) &&
    error(`Value [${value}] should be an integer`, "INTEGER", { value }),
  value
);
