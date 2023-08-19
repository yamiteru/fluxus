import { Operation } from "@types";

/*
 * Asserts that the value matches the operation.
 * */
export function assert<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
): asserts value is $Input {
  operation(value as $Input);
}
