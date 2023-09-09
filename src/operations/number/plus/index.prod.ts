import { Operation } from "@types";

export const plus =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left + right;
