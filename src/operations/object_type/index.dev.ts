import { type_of } from "@operations/type_of/index.dev.js";

/*
 * Checks if the input is a `Record<string | symbol | number, any>`.
 * */
export const object_type = type_of("object");
