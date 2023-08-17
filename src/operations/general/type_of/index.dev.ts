import { Operation, TypeOfOptions, TypeOfType } from "../../../types.js";
import { error } from "../../../utils/error/index.dev.js";

/*
 * Checks if the input is of a certain type.
 *
 * @example
 * ```ts
 * indexProd("bigint");
 * indexProd("boolean");
 * ```
 * */
export const type_of =
  <$TypeOfOptions extends TypeOfOptions>(
    desiredType: $TypeOfOptions,
  ): Operation<any, TypeOfType<$TypeOfOptions>> =>
  (value) => (
    typeof value !== desiredType && error("TYPE"),
    value as TypeOfType<$TypeOfOptions>
  );
