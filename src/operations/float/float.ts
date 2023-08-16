import { error } from "../../utils/index.js";

export const float = <$Value extends number>(value: $Value) => (
  Number.isInteger(value) && error("FLOAT", { value }), value
);
