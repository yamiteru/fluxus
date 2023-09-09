import { Operation } from "@types";

export const minus =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left - right;
