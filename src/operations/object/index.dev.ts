import { ObjectInput, ObjectOutput, ObjectSchema, Operation } from "@types";
import { object_type } from "@operations/object_type/index.dev.js";
import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value is an object and then runs the schema on it.
 *
 * The schema is an object where each key is a key in the object and each value is an operation.
 *
 * If the operation throws an errorProd, the errorProd is caught and wrapper in object errorProd.
 *
 * The resulting object has the same keys as the schema so no extra keys are allowed.
 *
 * @example
 * ```ts
 * object({
 *   name: string_type,
 *   age: and(number_type, integer, gte(18)),
 *   address: object({
 *     street: string_type,
 *     city: string_type,
 *  })
 * });
 * ```
 * */
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
