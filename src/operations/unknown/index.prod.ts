import { Operation } from "@types";
import { any } from "@operations/any/index.prod.js";

/*
 * Accepts `unknown` input.
 * */
export const unknown = any as Operation<unknown>;
