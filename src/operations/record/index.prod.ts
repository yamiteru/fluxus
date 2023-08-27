import { Input, ObjectKey, Operation, Output } from "@types";
import { object_type } from "@operations/object_type/index.prod.js";

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
      output[key(k)] = value(v[k]);
    }

    return output;
  };

  parse.key = key;
  parse.value = value;

  return parse;
};
