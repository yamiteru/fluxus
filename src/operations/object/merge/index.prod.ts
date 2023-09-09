import {
  InferObjectSchemaFromOperation,
  ObjectSchema,
  Operation,
  Pretty,
} from "@types";
import { object } from "@operations/object/object/index.prod.js";

export const merge = <
  $FirstOperation extends Operation<any, any, { schema: ObjectSchema }>,
  $SecondOperation extends Operation<any, any, { schema: ObjectSchema }>,
>(
  firstOperation: $FirstOperation,
  secondOperation: $SecondOperation,
) =>
  object({
    ...firstOperation.schema,
    ...secondOperation.schema,
  } as Pretty<
    InferObjectSchemaFromOperation<$FirstOperation> &
      InferObjectSchemaFromOperation<$SecondOperation>
  >);
