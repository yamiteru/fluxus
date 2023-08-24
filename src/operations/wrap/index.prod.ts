import { Operation } from "@types";
import { error } from "@utils/error/index.dev.js";

/*
 * Wrap an operation in a try/catch block that will log an error if the operation throws.
 *
 * It's useful for throwing a custom message in production since in production an empty error is thrown.
 *
 * @example
 * ```ts
 * and(
 *   wrap(check_email, () => "Invalid email", "EMAIL"),
 *   wrap(check_password, () => "Invalid password", "PASSWORD"),
 * )
 * ```
 * */
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
