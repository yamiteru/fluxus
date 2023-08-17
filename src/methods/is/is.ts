import { Operation } from "../../types.js";
import { assert } from "../assert/index.js";

/*
 * Checks if the value matches the operation.
 * */
export function is<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
): value is $Input {
  try {
    assert(operation, value);
    return true;
  } catch {
    return false;
  }
}
