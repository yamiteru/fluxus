import { error } from "@utils/error/index.dev.js";

export const is_array = <$Value extends any[]>(value: $Value) => (
  !Array.isArray(value) &&
    error(
      "IS_ARRAY",
      `Value [${value}] of type [${typeof value}] should be of type [array]`,
      {
        desiredType: "array",
        currentType: typeof value,
      },
    ),
  value
);
