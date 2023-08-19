import { error } from "@utils/error/index.dev.js";
import { Instance, Operation } from "@types";

/*
 * Checks if the value is an instance of a class.
 * */
export const instance_of =
  <$Type>(desiredClass: Instance<$Type>): Operation<$Type> =>
  (currentClass) => (
    !(currentClass instanceof <any>desiredClass) &&
      error(
        `Value [${currentClass}] should be an instance of [${desiredClass}]`,
        "INSTANCE",
        {
          desiredClass,
          currentClass,
        },
      ),
    currentClass
  );
