import { error } from "../../utils/index.js";

export const multiple_of =
  <$Multiple extends number>(multiple: $Multiple) =>
  <$Value extends number>(value: $Value) => (
    value % multiple !== 0 && error("MULTIPLE_OF", { multiple }), value
  );
