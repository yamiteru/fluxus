import { error } from "@utils/error/index.prod.js";
import { ComparisonType, InferComparisonType } from "@types";

export const gt =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value <= min && error(), value
  );
