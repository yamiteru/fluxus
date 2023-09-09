import { ToBigInt, ToBigIntType } from "@types";

export const to_bigint = <$Value extends ToBigIntType>(value: $Value) =>
  BigInt(value) as ToBigInt<$Value>;
