import { Operation } from "@types";
import { error } from "@utils/error/index.prod.js";

export const wrap =
  (message: string, reason: string, context: Record<string, unknown> = {}) =>
  <$Input, $Output>(operation: Operation<$Input, $Output>) =>
  (value: $Input) => {
    try {
      return operation(value);
    } catch (e) {
      error(message, reason, context, e);
    }
  };
