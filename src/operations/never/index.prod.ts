import { error } from "@utils/error/index.prod.js";
import { Operation } from "@types";

/*
 * Throws an error no matter what the value is.
 * */
export const never: Operation<never> = error;
