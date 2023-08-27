import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

export const lte =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value > max &&
      error(
        `Value [${value}] should be less than or equal to [${max}]`,
        "LTE",
        {
          max,
          value,
        },
      ),
    value
  );
