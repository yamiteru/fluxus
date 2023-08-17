import { Operation, TypeOfOptions, TypeOfType } from "../../types.js";
import { error } from "../../utils/index.js";

/*
 * Checks if the input is of a certain type.
 *
 * @example
 * ```ts
 * type_of("bigint");
 * type_of("boolean");
 * ```
 * */
export const type_of =
  <$TypeOfOptions extends TypeOfOptions>(
    desiredType: $TypeOfOptions,
  ): Operation<any, TypeOfType<$TypeOfOptions>> =>
  (value) => (
    typeof value !== desiredType &&
      error("TYPE", { desiredType, currentType: typeof value }),
    value as TypeOfType<$TypeOfOptions>
  );
