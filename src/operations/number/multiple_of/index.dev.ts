import { error } from "@utils/error/index.dev.js";

export const multiple_of =
  <$Multiple extends number>(multiple: $Multiple) =>
  <$Value extends number>(value: $Value) => (
    value % multiple !== 0 &&
      error(
        "MULTIPLE_OF",
        `Value [${value}] should be multiple of [${multiple}]`,
        { multiple },
      ),
    value
  );
