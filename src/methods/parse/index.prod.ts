import { Operation } from "@types";

/*
 * Parses the input using the provided operation.
 * */
export function parse<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
) {
  return operation(value as $Input);
}
