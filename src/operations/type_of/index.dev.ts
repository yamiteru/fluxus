import { Operation, TypeOfOptions, TypeOfType } from "@types";
import { error } from "@utils/error/index.dev.js";

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
    typeof value !== desiredType &&
      error(
        `Value [${value}] of type [${typeof value}] should be of type [${desiredType}]`,
        "TYPE",
        {
          desiredType,
          currentType: typeof value,
        },
      ),
    value as TypeOfType<$TypeOfOptions>
  );
