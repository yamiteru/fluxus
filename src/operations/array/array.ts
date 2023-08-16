import { Input, Operation, Output } from "../../types.js";
import { error } from "../../utils/index.js";
import { is_array } from "../is_array/index.js";

export const array = <$Operation extends Operation<any>>(
  operation: $Operation,
): Operation<
  Input<$Operation>[],
  Output<$Operation>[],
  {
    operation: $Operation;
  }
> => {
  const parse = (value: Input<$Operation>[]) => {
    is_array(value);

    try {
      return value.map((v) => operation(v));
    } catch (e) {
      error("ARRAY", { operation }, e);
    }
  };

  parse.operation = operation;

  return parse as never;
};
