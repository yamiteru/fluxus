import { Operation } from "../../types.js";
import { any } from "../any/index.js";

/*
 * Accepts `unknown` input.
 * */
export const unknown = any as Operation<unknown>;
