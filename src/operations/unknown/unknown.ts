import { Operation } from "../../types.js";
import { any } from "../any/index.js";

/*
 * Accepts `unknown` input and returns it back.
 * */
export const unknown = any as Operation<unknown>;
