import { Input, Operation, Output } from "../../types.js";

export const defaulted = <$Operation extends Operation<any>>(
  operation: $Operation,
  defaultValue: (value: Input<$Operation>) => Output<$Operation>
): Operation<Input<$Operation>, Output<$Operation>> => (value: Input<$Operation>) => {
  try {
    return operation(value);
  } catch {
    return defaultValue(value);
  }
};
