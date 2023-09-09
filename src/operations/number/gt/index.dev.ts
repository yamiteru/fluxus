import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

export const gt =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value <= min &&
      error("GT", `Value [${value}] should be greater than [${min}]`, {
        min,
        value,
      }),
    value
  );
