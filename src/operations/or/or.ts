import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

export function or<$Operations extends Operation<any, any>[]>(
  operations: $Operations,
): $Operations[number] {
  return (value) => {
    for (const operation of operations) {
      try {
        return operation(value);
      } catch {
        // ignore
      }
    }

    error("OR", { operations });
  };
}
