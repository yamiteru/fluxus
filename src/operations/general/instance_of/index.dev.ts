import { error } from "@utils/error/index.dev.js";
import { Instance, Operation } from "@types";

export const instance_of =
  <$Type>(desiredClass: Instance<$Type>): Operation<$Type> =>
  (currentClass) => (
    !(currentClass instanceof <any>desiredClass) &&
      error(
        "INSTANCE_OF",
        `Value [${currentClass}] should be an instance of [${desiredClass}]`,
        {
          desiredClass,
          currentClass,
        },
      ),
    currentClass
  );
