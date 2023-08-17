import { Input, ObjectKey, Operation, Output } from "../../types.js";
import { error } from "../../utils/index.js";
import { object_type } from "../object_type/index.js";

/*
 * Checks if the value is a record with the given key and value operations.
 *
 * If the operation throws an error, the error is caught and wrapper in record error.
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
        error("RECORD", { key: k, value: v[k], operations: { key, value } }, e);
      }
    }

    return output;
  };

  parse.key = key;
  parse.value = value;

  return parse;
};
