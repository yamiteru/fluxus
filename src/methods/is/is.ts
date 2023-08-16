import { Operation } from "../../types.js";
import { assert } from "../assert/index.js";

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
