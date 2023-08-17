import { error } from "../../../utils/error/index.prod.js";

/*
 * Checks if the value is a finite number.
 * */
export const finite = <$Value extends number>(value: $Value) => (
  !Number.isFinite(value) && error("FINITE"), value
);
