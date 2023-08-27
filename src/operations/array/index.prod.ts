import { Input, Operation, Output } from "@types";
import { is_array } from "@operations/is_array/index.prod.js";

export const array = <$Operation extends Operation>(
  operation: $Operation,
): Operation<
  Input<$Operation>[],
  Output<$Operation>[],
  {
    operation: $Operation;
  }
> => {
  const parse = (value: Input<$Operation>[]) => (
    is_array(value), value.map((v) => operation(v))
  );

  parse.operation = operation;

  return parse as never;
};
