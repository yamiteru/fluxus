import { error } from "../../utils/index.js";

export const integer = <$Value extends number>(value: $Value) => (
  !Number.isInteger(value) && error("INTEGER", { value }), value
);
