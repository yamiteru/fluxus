import { error } from "@utils/error/index.prod.js";
import { Operation } from "@types";

export const literal =
  <$Type>(desiredValue: $Type): Operation<$Type> =>
  (currentValue) => (currentValue !== desiredValue && error(), currentValue);
