import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

/*
 * Throws an error no matter what the value is.
 * */
export const never: Operation<never> = () => error("NEVER");
