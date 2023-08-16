import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

export const never: Operation<never> = () => error("NEVER");
