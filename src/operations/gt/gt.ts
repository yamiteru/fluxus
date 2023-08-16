import { error } from "../../utils/index.js";
import { ComparisonType, InferComparisonType } from "../../types.js";

export const gt =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value <= min && error("GT", { min, value }), value
  );
