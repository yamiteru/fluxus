import { Operation } from "@types";
import { error } from "@utils/error/index.prod.js";

export const wrap =
  <$Input, $Output>(
    operation: Operation<$Input, $Output>,
    reason: string,
    message: (value: $Input) => string,
    context: (value: $Input) => Record<string, unknown> = () => ({}),
  ) =>
  (value: $Input) => {
    try {
      return operation(value);
    } catch (e) {
      error(reason, message(value), context(value), e);
    }
  };
