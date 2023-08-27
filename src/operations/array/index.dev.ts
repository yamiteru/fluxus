import { Input, Operation, Output } from "@types";
import { is_array } from "@operations/is_array/index.dev.js";
import { error } from "@utils/error/index.dev.js";

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

    return value.map((v) => {
      try {
        return operation(v);
      } catch (e) {
        error(
          `Operation [${
            operation.name
          }] failed with value [${v}] of type [${typeof v}]`,
          "ARRAY",
          { operation },
          e,
        );
      }
    });
  };

  parse.operation = operation;

  return parse as never;
};
