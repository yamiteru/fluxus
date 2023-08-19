import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

/*
 * Throws an error no matter what the value is.
 * */
export const never: Operation<never> = () => error("NEVER");
