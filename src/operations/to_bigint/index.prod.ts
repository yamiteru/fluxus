import { ToBigInt, ToBigIntType } from "@types";

/*
 * Converts the value to a bigint.
 * */
export const to_bigint = <$Value extends ToBigIntType>(value: $Value) =>
  BigInt(value) as ToBigInt<$Value>;