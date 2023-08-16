import { ALPHABET, LETTERS, saveGenerated } from "../shared.js";

export const generate_or = async () => {
  let type = "";

  for (let i = 3; i < LETTERS; ++i) {
    const input: string[] = [];
    const inputs: string[] = [];
    const outputs: string[] = [];

    for (let j = 1; j < i; ++j) {
      const current = ALPHABET[j];

      input.push(
        `operation_${current.toLocaleLowerCase()}: Operation<$Input_${current}, $Output_${current}>`,
      );

      inputs.push(`$Input_${current}`);
      outputs.push(`$Output_${current}`);
    }

    type += `export function or<${inputs.join(",")},${outputs.join(
      ",",
    )}>(operations: [${input.join(",")}]): Either<[${inputs.map(
      (v, i) => `Operation<${v}, ${outputs[i]}>`,
    )}]>;`;
  }

  await saveGenerated("or", type);
};
