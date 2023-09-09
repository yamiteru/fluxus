import { TypeOfOptions, TypeOfType } from "@types";
import { error } from "@utils/error/index.dev.js";

export const type_of =
  <$TypeOfOptions extends TypeOfOptions>(desiredType: $TypeOfOptions) =>
  (value: unknown) => (
    typeof value !== desiredType &&
      error(
        "TYPE_OF",
        `Value [${value}] of type [${typeof value}] should be of type [${desiredType}]`,
        {
          desiredType,
          currentType: typeof value,
        },
      ),
    value as TypeOfType<$TypeOfOptions>
  );
