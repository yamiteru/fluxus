import { error } from "../../utils/index.js";
import { ComparisonType, InferComparisonType } from "../../types.js";

export const gte =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value < min && error("GTE", { min, value }), value
  );
