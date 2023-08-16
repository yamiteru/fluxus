import { error } from "../../utils/index.js";
import { ComparisonType, InferComparisonType } from "../../types.js";

/*
 * Checks if the value is greater (>) than the minimum.
 *
 * It supports strings, numbers, and dates.
 * */
export const gt =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value <= min && error("GT", { min, value }), value
  );
