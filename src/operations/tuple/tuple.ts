import { InferTupleInput, InferTupleOutput, Operation } from "../../types.js";
import { is_array } from "../is_array/index.js";

export const tuple = <$Tuple extends Operation<any, any>[]>(
  tuple: $Tuple,
): Operation<
  InferTupleInput<$Tuple>,
  InferTupleOutput<$Tuple>,
  { tuple: $Tuple }
> => {
  const parse = (value: InferTupleInput<$Tuple>) => {
    is_array(value);

    return tuple.map((operation, i) => operation(value[i]));
  };

  parse.tuple = tuple;

  return parse as never;
};