import { ToBigInt, ToBigIntType } from "../../types.js";

export const to_bigint = <$Value extends ToBigIntType>(value: $Value) =>
  BigInt(value) as ToBigInt<$Value>;
