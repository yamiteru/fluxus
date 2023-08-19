import { Operation } from "@types";
import { any } from "@operations/any/index.dev.js";

/*
 * Accepts `unknown` input.
 * */
export const unknown = any as Operation<unknown>;
