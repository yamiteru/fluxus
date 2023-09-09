import { ObjectInput, ObjectOutput, ObjectSchema, Operation } from "@types";
import { object_type } from "@operations/types/object_type/index.dev.js";
import { error } from "@utils/error/index.dev.js";
import { not } from "@operations/general/not/index.dev.js";
import { literal } from "@operations/general/literal/index.dev.js";

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
