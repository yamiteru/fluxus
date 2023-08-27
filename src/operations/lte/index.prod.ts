import { error } from "@utils/error/index.prod.js";
import { ComparisonType, InferComparisonType } from "@types";

export const lte =
  <$Max extends ComparisonType>(max: $Max) =>
  <$Value extends InferComparisonType<$Max>>(value: $Value) => (
    <any>value > max && error(), value
  );
