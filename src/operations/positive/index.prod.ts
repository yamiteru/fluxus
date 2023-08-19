import { gte } from "@operations/gte/index.prod.js";

/*
 * Checks if the value is positive.
 * */
export const positive = gte(0);
