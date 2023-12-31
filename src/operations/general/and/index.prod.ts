import { Operation } from "@types";

export function and<$Input, $Output_1, $Output_2>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
  ],
): Operation<$Input, $Output_2>;
export function and<$Input, $Output_1, $Output_2, $Output_3>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
  ],
): Operation<$Input, $Output_3>;
export function and<$Input, $Output_1, $Output_2, $Output_3, $Output_4>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
  ],
): Operation<$Input, $Output_4>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
  ],
): Operation<$Input, $Output_5>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
  ],
): Operation<$Input, $Output_6>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
  ],
): Operation<$Input, $Output_7>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
  ],
): Operation<$Input, $Output_8>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
  ],
): Operation<$Input, $Output_9>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
  ],
): Operation<$Input, $Output_10>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
  ],
): Operation<$Input, $Output_11>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
  ],
): Operation<$Input, $Output_12>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
  ],
): Operation<$Input, $Output_13>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
  ],
): Operation<$Input, $Output_14>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
  ],
): Operation<$Input, $Output_15>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
  ],
): Operation<$Input, $Output_16>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
  ],
): Operation<$Input, $Output_17>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
  ],
): Operation<$Input, $Output_18>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
  ],
): Operation<$Input, $Output_19>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
  ],
): Operation<$Input, $Output_20>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
  ],
): Operation<$Input, $Output_21>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
  ],
): Operation<$Input, $Output_22>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
  ],
): Operation<$Input, $Output_23>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
  ],
): Operation<$Input, $Output_24>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
  ],
): Operation<$Input, $Output_25>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
  ],
): Operation<$Input, $Output_26>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
  ],
): Operation<$Input, $Output_27>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
  $Output_28,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
    operation_27_28: Operation<$Output_27, $Output_28>,
  ],
): Operation<$Input, $Output_28>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
  $Output_28,
  $Output_29,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
    operation_27_28: Operation<$Output_27, $Output_28>,
    operation_28_29: Operation<$Output_28, $Output_29>,
  ],
): Operation<$Input, $Output_29>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
  $Output_28,
  $Output_29,
  $Output_30,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
    operation_27_28: Operation<$Output_27, $Output_28>,
    operation_28_29: Operation<$Output_28, $Output_29>,
    operation_29_30: Operation<$Output_29, $Output_30>,
  ],
): Operation<$Input, $Output_30>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
  $Output_28,
  $Output_29,
  $Output_30,
  $Output_31,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
    operation_27_28: Operation<$Output_27, $Output_28>,
    operation_28_29: Operation<$Output_28, $Output_29>,
    operation_29_30: Operation<$Output_29, $Output_30>,
    operation_30_31: Operation<$Output_30, $Output_31>,
  ],
): Operation<$Input, $Output_31>;
export function and<
  $Input,
  $Output_1,
  $Output_2,
  $Output_3,
  $Output_4,
  $Output_5,
  $Output_6,
  $Output_7,
  $Output_8,
  $Output_9,
  $Output_10,
  $Output_11,
  $Output_12,
  $Output_13,
  $Output_14,
  $Output_15,
  $Output_16,
  $Output_17,
  $Output_18,
  $Output_19,
  $Output_20,
  $Output_21,
  $Output_22,
  $Output_23,
  $Output_24,
  $Output_25,
  $Output_26,
  $Output_27,
  $Output_28,
  $Output_29,
  $Output_30,
  $Output_31,
  $Output_32,
>(
  operations: [
    operation_0_1: Operation<$Input, $Output_1>,
    operation_1_2: Operation<$Output_1, $Output_2>,
    operation_2_3: Operation<$Output_2, $Output_3>,
    operation_3_4: Operation<$Output_3, $Output_4>,
    operation_4_5: Operation<$Output_4, $Output_5>,
    operation_5_6: Operation<$Output_5, $Output_6>,
    operation_6_7: Operation<$Output_6, $Output_7>,
    operation_7_8: Operation<$Output_7, $Output_8>,
    operation_8_9: Operation<$Output_8, $Output_9>,
    operation_9_10: Operation<$Output_9, $Output_10>,
    operation_10_11: Operation<$Output_10, $Output_11>,
    operation_11_12: Operation<$Output_11, $Output_12>,
    operation_12_13: Operation<$Output_12, $Output_13>,
    operation_13_14: Operation<$Output_13, $Output_14>,
    operation_14_15: Operation<$Output_14, $Output_15>,
    operation_15_16: Operation<$Output_15, $Output_16>,
    operation_16_17: Operation<$Output_16, $Output_17>,
    operation_17_18: Operation<$Output_17, $Output_18>,
    operation_18_19: Operation<$Output_18, $Output_19>,
    operation_19_20: Operation<$Output_19, $Output_20>,
    operation_20_21: Operation<$Output_20, $Output_21>,
    operation_21_22: Operation<$Output_21, $Output_22>,
    operation_22_23: Operation<$Output_22, $Output_23>,
    operation_23_24: Operation<$Output_23, $Output_24>,
    operation_24_25: Operation<$Output_24, $Output_25>,
    operation_25_26: Operation<$Output_25, $Output_26>,
    operation_26_27: Operation<$Output_26, $Output_27>,
    operation_27_28: Operation<$Output_27, $Output_28>,
    operation_28_29: Operation<$Output_28, $Output_29>,
    operation_29_30: Operation<$Output_29, $Output_30>,
    operation_30_31: Operation<$Output_30, $Output_31>,
    operation_31_32: Operation<$Output_31, $Output_32>,
  ],
): Operation<$Input, $Output_32>;

// TODO: rewrite to for loop
export function and<$Operations extends Operation[]>(operations: $Operations) {
  return (value: any) =>
    operations.reduce((acc, operation) => operation(acc), value);
}
