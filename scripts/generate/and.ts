import { ALPHABET, LETTERS, saveGenerated } from "../shared.js";

export const generate_and = async () => {
  let type = "";

  for (let i = 3; i < LETTERS; ++i) {
    const generics: string[] = [];
    const input: string[] = [];
    let output = "";

    for (let j = 1; j < i; ++j) {
      const previous = ALPHABET[j - 1];
      const current = ALPHABET[j];

      generics.push(`$Output_${current}`);

      input.push(
        `operation_${previous.toLocaleLowerCase()}_${current.toLocaleLowerCase()}: Operation<${
          j === 1 ? "$Input" : `$Output_${previous}`
        }, $Output_${current}>`,
      );

      output = `$Output_${current}`;
    }

    type += `export function and<$Input, ${generics.join(
      ",",
    )}>(operations: [${input.join(",")}]): Operation<$Input, ${output}>;`;
  }

  await saveGenerated("and", type);
};
