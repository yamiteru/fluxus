import { Operation, TypeOfOptions, TypeOfType } from "../../types.js";
import { error } from "../../utils/index.js";

export const type_of =
  <$TypeOfOptions extends TypeOfOptions>(
    desiredType: $TypeOfOptions,
  ): Operation<TypeOfType<$TypeOfOptions>> =>
  (value: TypeOfType<$TypeOfOptions>) => (
    typeof value !== desiredType &&
      error("TYPE", { desiredType, currentType: typeof value }),
    value
  );
