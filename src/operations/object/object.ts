import {
  ObjectInput,
  ObjectOutput,
  ObjectSchema,
  Operation,
} from "../../types.js";
import { error } from "../../utils/index.js";
import { object_type } from "../object_type/index.js";

export const object = <$Schema extends ObjectSchema>(
  schema: $Schema,
): Operation<
  ObjectInput<$Schema>,
  ObjectOutput<$Schema>,
  { schema: $Schema }
> => {
  const parse = (value: ObjectInput<$Schema>) => {
    object_type(value);

    const output = {} as ObjectOutput<$Schema>;

    for (const key in schema) {
      try {
        output[key] = schema[key](value[key]);
      } catch (e) {
        error("OBJECT", { key }, e);
      }
    }

    return output;
  };

  parse.schema = schema;

  return parse;
};
