import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is a multiple of a number.
 * */
export const multiple_of =
  <$Multiple extends number>(multiple: $Multiple) =>
  <$Value extends number>(value: $Value) => (
    value % multiple !== 0 &&
      error(
        `Value [${value}] should be multiple of [${multiple}]`,
        "MULTIPLE_OF",
        { multiple },
      ),
    value
  );
