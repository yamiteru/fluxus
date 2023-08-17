import { error } from "../../../utils/error/index.prod.js";
import { Operation } from "../../../types.js";

/*
 * Tries to apply one of the operations to the value.
 *
 * If none of the operations succeed, throws an errorProd.
 *
 * @example
 * ```ts
 * or(
 *   string_type,
 *   number_type,
 * );
 * ```
 * */
export function or<$Operations extends Operation[]>(
  operations: $Operations,
): $Operations[number] {
  return (value) => {
    for (const operation of operations) {
      try {
        return operation(value);
      } catch {
        // We ignore the errorProd here since we want to try the next operation
      }
    }

    error("OR", { operations });
  };
}
