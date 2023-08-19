import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

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
        // We ignore the error here since we want to try the next operation
      }
    }

    error("OR", { operations });
  };
}
