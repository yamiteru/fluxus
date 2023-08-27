import { Operation, TypeOfOptions, TypeOfType } from "@types";
import { error } from "@utils/error/index.prod.js";

export const type_of =
  <$TypeOfOptions extends TypeOfOptions>(
    desiredType: $TypeOfOptions,
  ): Operation<any, TypeOfType<$TypeOfOptions>> =>
  (value) => (
    typeof value !== desiredType && error(), value as TypeOfType<$TypeOfOptions>
  );
