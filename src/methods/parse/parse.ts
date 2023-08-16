import { Operation } from "../../types.js";

export function parse<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
) {
  return operation(value as $Input);
}
