import { Input, ObjectKey, Operation, Output } from "@types";
import { error } from "@utils/error/index.dev.js";
import { is_object } from "@operations/object/is_object/index.dev.js";

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
    is_object(v);

    const output = {} as Record<Output<$Key>, Output<$Value>>;

    for (const k in v) {
      try {
        output[key(k)] = value(v[k]);
      } catch (e) {
        error(
          "RECORD",
          `KV operation pair [${key.name}, ${
            value.name
          }] failed with values [${k}, ${
            v[k]
          }] of types [${typeof k}, ${typeof v[k]}]`,
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
