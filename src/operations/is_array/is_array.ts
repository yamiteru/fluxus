import { error } from "../../utils/index.js";

export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) &&
    error("TYPE", { desiredType: "array", currentType: typeof value }),
  value
);
