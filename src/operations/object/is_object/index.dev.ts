import { ObjectKey } from "@types";
import { error } from "@utils/error/index.dev.js";

export const is_object = <$Value extends Record<ObjectKey, any>>(
  value: $Value,
) => (
  typeof value !== "object" ||
    (value === null &&
      error("IS_OBJECT", `Value [${value}] is not a valid POJO`, { value })),
  value
);
