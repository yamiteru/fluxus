import { type_of } from "@operations/type_of/index.prod.js";

/*
 * Checks if the input is a `(...args: any[]) => any`.
 * */
export const function_type = type_of("function");
