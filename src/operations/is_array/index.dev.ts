import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is an array.
 * */
export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) &&
    error(
      `Value [${value}] of type [${typeof value}] should be of type [array]`,
      "TYPE",
      {
        desiredType: "array",
        currentType: typeof value,
      },
    ),
  value
);
