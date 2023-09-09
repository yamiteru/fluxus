import { ObjectInput, ObjectOutput, ObjectSchema, Operation } from "@types";
import { object_type } from "@operations/types/object_type/index.prod.js";
import { not } from "@operations/general/not/index.prod.js";
import { literal } from "@operations/general/literal/index.prod.js";

export const object = <$Schema extends ObjectSchema>(
  schema: $Schema,
): Operation<
  ObjectInput<$Schema>,
  ObjectOutput<$Schema>,
  { schema: $Schema }
> => {
  const parse = (value: ObjectInput<$Schema>) => {
    object_type(value);
    not(literal(null))(value);

    const output = {} as ObjectOutput<$Schema>;

    for (const key in schema) {
      output[key] = schema[key](value[key]);
    }

    return output;
  };

  parse.schema = schema;

  return parse;
};
