import { type_of } from "../type_of/index.js";

/*
 * Checks if the input is a `(...args: any[]) => any` and returns it back.
 * */
export const function_type = type_of("function");
