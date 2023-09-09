import { ObjectInput, ObjectOutput, ObjectSchema, Operation } from "@types";
import { error } from "@utils/error/index.dev.js";
import { is_object } from "@operations/object/is_object/index.dev.js";

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
      try {
        output[key] = schema[key](value[key]);
      } catch (e) {
        error(
          "OBJECT",
          `Operation [${schema[key].name}] failed with value [${
            value[key]
          }] of type [${typeof value[key]}]`,
          { key },
          e,
        );
      }
    }

    return output;
  };

  parse.schema = schema;

  return parse;
};
