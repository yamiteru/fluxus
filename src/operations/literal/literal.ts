import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

export const literal =
  <$Type>(desiredValue: $Type): Operation<$Type> =>
  (currentValue) => (
    currentValue !== desiredValue &&
      error("LITERAL", { desiredValue, currentValue }),
    currentValue
  );
