import { error } from "../../utils/index.js";
import { ComparisonType, InferComparisonType } from "../../types.js";

export const lt =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value >= max && error("LT", { max, value }), value
  );
