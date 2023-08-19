import { error } from "@utils/error/index.prod.js";

/*
 * Checks if the value is a multiple of a number.
 * */
export const multiple_of =
  <$Multiple extends number>(multiple: $Multiple) =>
  <$Value extends number>(value: $Value) => (
    value % multiple !== 0 && error(), value
  );