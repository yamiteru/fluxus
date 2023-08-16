import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

/*
 * Tries to apply one of the operations to the value.
 *
 * If none of the operations succeed, throws an error.
 *
 * @example
 * ```ts
 * or(
 *   string_type,
 *   number_type,
 * );
 * ```
 * */
export function or<$Operations extends Operation<any, any>[]>(
  operations: $Operations,
): $Operations[number] {
  return (value) => {
    for (const operation of operations) {
      try {
        return operation(value);
      } catch {
        // We ignore the error here since we want to try the next operation
      }
    }

    error("OR", { operations });
  };
}
