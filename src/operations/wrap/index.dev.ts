import { Operation } from "@types";
import { error } from "@utils/error/index.prod.js";

export const wrap =
  <$Input, $Output>(
    operation: Operation<$Input, $Output>,
    message: (value: $Input) => string,
    reason: string,
    context: (value: $Input) => Record<string, unknown> = () => ({}),
  ) =>
  (value: $Input) => {
    try {
      return operation(value);
    } catch (e) {
      error(message(value), reason, context(value), e);
    }
  };
