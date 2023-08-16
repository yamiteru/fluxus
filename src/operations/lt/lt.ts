import { error } from "../../utils/index.js";
import { ComparisonType, InferComparisonType } from "../../types.js";

/*
 * Checks if the value is less than (<) the maximum.
 *
 * It supports strings, numbers, and dates.
 * */
export const lt =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value >= max && error("LT", { max, value }), value
  );
