import { Operation } from "@types";
import { error } from "@utils/error/index.prod.js";

export const not =
  <$Operation extends Operation>(operation: $Operation) =>
  <$Value>(value: $Value) => {
    try {
      operation(value);
    } catch {
      return value;
    }

    error("NOT", `Operation [${operation.name}] passed`, { operation, value });
  };
