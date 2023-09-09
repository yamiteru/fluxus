import { InferTupleInput, InferTupleOutput, Operation } from "@types";
import { is_array } from "@operations/array/is_array/index.prod.js";

export const tuple = <$Tuple extends Operation[]>(
  tuple: $Tuple,
): Operation<
  InferTupleInput<$Tuple>,
  InferTupleOutput<$Tuple>,
  { tuple: $Tuple }
> => {
  const parse = (value: InferTupleInput<$Tuple>) => (
    is_array(value), tuple.map((operation, i) => operation(value[i]))
  );

  parse.tuple = tuple;

  return parse as never;
};
