import { Instance, Operation } from "../../types.js";
import { error } from "../../utils/index.js";

export const instance_of =
  <$Type>(desiredClass: Instance<$Type>): Operation<$Type> =>
  (currentClass) => (
    !(currentClass instanceof <any>desiredClass) &&
      error("INSTANCE", { desiredClass, currentClass }),
    currentClass
  );
