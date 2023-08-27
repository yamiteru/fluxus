import { Operation } from "@types";

export function parse<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
) {
  return operation(value as $Input);
}
