import { error } from "@utils/error/index.prod.js";
import { Operation } from "@types";

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

    error();
  };
}
