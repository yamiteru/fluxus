import { Input, Operation, Output } from "@types";

export const defaulted =
  <$Operation extends Operation>(
    operation: $Operation,
    defaultValue: (value: Input<$Operation>) => Output<$Operation>,
  ): Operation<Input<$Operation>, Output<$Operation>> =>
  (value: Input<$Operation>) => {
    try {
      return operation(value);
    } catch {
      return defaultValue(value);
    }
  };
