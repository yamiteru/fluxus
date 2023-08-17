import { Input, Operation, Output } from "../../../types.js";

/*
 * Tried to run an operation.
 *
 * If it fails it returns a default value.
 *
 * The default value is lazy.
 * */
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
