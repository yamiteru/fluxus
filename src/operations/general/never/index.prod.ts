import { error } from "../../../utils/error/index.prod.js";
import { Operation } from "../../../types.js";

/*
 * Throws an errorProd no matter what the value is.
 * */
export const never: Operation<never> = () => error("NEVER");
