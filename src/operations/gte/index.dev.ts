import { error } from "@utils/error/index.dev.js";
import { ComparisonType, InferComparisonType } from "@types";

/*
 * Checks if the value is greater than or equal (>=) to the minimum.
 *
 * It supports strings, numbers, and dates.
 * */
export const gte =
  <$Min extends ComparisonType>(min: $Min) =>
  <$Value extends InferComparisonType<$Min>>(value: $Value) => (
    <any>value < min && error("GTE", { min, value }), value
  );
