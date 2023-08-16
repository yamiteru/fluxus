import { error } from "../../utils/index.js";

export const finite = <$Value extends number>(value: $Value) => (
  !Number.isFinite(value) && error("FINITE"), value
);
