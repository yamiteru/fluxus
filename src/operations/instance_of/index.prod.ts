import { error } from "@utils/error/index.prod.js";
import { Instance, Operation } from "@types";

/*
 * Checks if the value is an instance of a class.
 * */
export const instance_of =
  <$Type>(desiredClass: Instance<$Type>): Operation<$Type> =>
  (currentClass) => (
    !(currentClass instanceof <any>desiredClass) && error(), currentClass
  );
