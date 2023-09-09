import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

export const lt =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value >= max &&
      error("LT", `Value [${value}] should be less than [${max}]`, {
        max,
        value,
      }),
    value
  );
