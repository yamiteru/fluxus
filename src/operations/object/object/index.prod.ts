import { ObjectInput, ObjectOutput, ObjectSchema, Operation } from "@types";
import { is_object } from "@operations/object/is_object/index.prod.js";

export const object = <$Schema extends ObjectSchema>(
  schema: $Schema,
): Operation<
  ObjectInput<$Schema>,
  ObjectOutput<$Schema>,
  { schema: $Schema }
> => {
  const parse = (value: ObjectInput<$Schema>) => {
    is_object(value);

    const output = {} as ObjectOutput<$Schema>;

    for (const key in schema) {
      output[key] = schema[key](value[key]);
    }

    return output;
  };

  parse.schema = schema;

  return parse;
};
