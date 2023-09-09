import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

export const gte =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value < min &&
      error(
        "GTE",
        `Value [${value}] should be greater than or equal to [${min}]`,
        {
          min,
          value,
        },
      ),
    value
  );
