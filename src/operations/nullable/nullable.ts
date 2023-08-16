import { or } from "../or/index.js";
import { literal } from "../literal/index.js";
import { Operation } from "../../types.js";

export const nullable = <$Operation extends Operation<any, any>>(
  operation: $Operation,
) => or([literal(null), operation]);
