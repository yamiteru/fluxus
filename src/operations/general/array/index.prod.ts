import { error } from "../../../utils/error/index.prod.js";
import { Input, Operation, Output } from "../../../types.js";
import { is_array } from "../is_array/index.prod.js";

/*
 * Checks if all items in an array match a given operation.
 *
 * If any of the items fail, throws an errorProd.
 *
 * @example
 * ```ts
 * array(string_type);
 * */
export const array = <$Operation extends Operation>(
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
