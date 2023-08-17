import { Operation } from "../../../types.js";
import { any } from "../any/index.prod.js";

/*
 * Accepts `unknown` input.
 * */
export const unknown = any as Operation<unknown>;
