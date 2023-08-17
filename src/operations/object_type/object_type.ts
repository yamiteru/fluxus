import { type_of } from "../type_of/index.js";

/*
 * Checks if the input is a `Record<string | symbol | number, any>`.
 * */
export const object_type = type_of("object");
