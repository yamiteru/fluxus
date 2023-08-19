import { InferTupleInput, InferTupleOutput, Operation } from "@types";
import { is_array } from "@operations/is_array/index.dev.js";
import { error } from "@utils/error/index.prod.js";

/*
 * Checks if the value matches all operations in the tuple.
 * */
export const tuple = <$Tuple extends Operation[]>(
  tuple: $Tuple,
): Operation<
  InferTupleInput<$Tuple>,
  InferTupleOutput<$Tuple>,
  { tuple: $Tuple }
> => {
  const parse = (value: InferTupleInput<$Tuple>) => (
    is_array(value),
    tuple.map((operation, i) => {
      try {
        return operation(value[i]);
      } catch (e) {
        error(
          `Operation [${operation.name}] failed with value [${
            value[i]
          }] of type [${typeof value[i]}]`,
        );
      }
    })
  );

  parse.tuple = tuple;

  return parse as never;
};
