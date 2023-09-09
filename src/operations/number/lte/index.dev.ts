import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

export const lte =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value > max &&
      error(
        "LTE",
        `Value [${value}] should be less than or equal to [${max}]`,
        {
          max,
          value,
        },
      ),
    value
  );
