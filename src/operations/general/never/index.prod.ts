import { error } from "@utils/error/index.prod.js";
import { Operation } from "@types";

export const never: Operation<never> = error;
