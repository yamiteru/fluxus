import { Operation } from "../../types.js";
import { or } from "../or/index.js";
import { literal } from "../literal/index.js";

export const maybe = <$Operation extends Operation<any>>(
  operation: $Operation,
) => or([literal(undefined), literal(null), operation]);
