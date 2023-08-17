import { error } from "../../utils/index.js";

/*
 * Checks if the value is a multiple of a number.
 * */
export const multiple_of =
  <$Multiple extends number>(multiple: $Multiple) =>
  <$Value extends number>(value: $Value) => (
    value % multiple !== 0 && error("MULTIPLE_OF", { multiple }), value
  );
