import { type_of } from "../type_of/index.js";

/*
 * Checks if the input is a `Record<string | symbol | number, any>` and returns it back.
 * */
export const object_type = type_of("object");
