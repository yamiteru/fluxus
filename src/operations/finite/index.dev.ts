import { error } from "@utils/error/index.dev.js";

export const finite = <$Value extends number>(value: $Value) => (
  !Number.isFinite(value) &&
    error(`Value [${value}] should be finite`, "FINITE"),
  value
);
