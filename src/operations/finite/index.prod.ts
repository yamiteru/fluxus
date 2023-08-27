import { error } from "@utils/error/index.prod.js";

export const finite = <$Value extends number>(value: $Value) => (
  !Number.isFinite(value) && error(), value
);
