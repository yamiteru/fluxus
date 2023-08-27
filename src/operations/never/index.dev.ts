import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

export const never: Operation<never> = () => error("NEVER");
