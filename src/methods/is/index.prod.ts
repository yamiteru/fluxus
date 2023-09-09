import { Operation } from "@types";
import { assert } from "@methods/assert/index.prod.js";

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
