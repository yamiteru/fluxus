import { Operation } from "@types";

export function assert<$Input, $Output>(
  operation: Operation<$Input, $Output>,
  value: unknown,
): asserts value is $Input {
  operation(value as $Input);
}
