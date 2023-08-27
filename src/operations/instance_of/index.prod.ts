import { error } from "@utils/error/index.prod.js";
import { Instance, Operation } from "@types";

export const instance_of =
  <$Type>(desiredClass: Instance<$Type>): Operation<$Type> =>
  (currentClass) => (
    !(currentClass instanceof <any>desiredClass) && error(), currentClass
  );
