import { Input, ObjectKey, Operation, Output } from "@types";
import { object_type } from "@operations/object_type/index.dev.js";
import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is a record with the given key and value operations.
 *
 * If the operation throws an errorProd, the errorProd is caught and wrapper in record errorProd.
 *
 * @example
 * ```ts
 * record(
 *   string_type,
 *   number_type,
 * );
 * */
export const record = <
  $Key extends Operation<any, ObjectKey>,
  $Value extends Operation,
>(
  key: $Key,
  value: $Value,
): Operation<
  Record<Input<$Key>, Input<$Value>>,
  Record<Output<$Key>, Output<$Value>>,
  { key: $Key; value: $Value }
> => {
  const parse = (v: Record<Input<$Key>, Input<$Value>>) => {
    object_type(v);

    const output = {} as Record<Output<$Key>, Output<$Value>>;

    for (const k in v) {
      try {
        output[key(k)] = value(v[k]);
      } catch (e) {
        error(
          `KV operation pair [${key.name}, ${
            value.name
          }] failed with values [${k}, ${
            v[k]
          }] of types [${typeof k}, ${typeof v[k]}]`,
          "RECORD",
          {
            key: k,
            value: v[k],
            operations: { key, value },
          },
          e,
        );
      }
    }

    return output;
  };

  parse.key = key;
  parse.value = value;

  return parse;
};
