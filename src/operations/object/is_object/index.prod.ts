import { ObjectKey } from "@types";
import { error } from "@utils/error/index.prod.js";

export const is_object = <$Value extends Record<ObjectKey, any>>(
  value: $Value,
) => (typeof value !== "object" || (value === null && error()), value);
