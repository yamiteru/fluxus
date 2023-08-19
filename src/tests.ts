import fc from "fast-check";

export const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export const NUMBERS = "0123456789";

export const numberCharacters = fc.stringOf(fc.constantFrom(...NUMBERS), {
  minLength: 1,
});

export const alphabetCharacters = fc.stringOf(fc.constantFrom(...ALPHABET), {
  minLength: 1,
});

export const primitive = fc.oneof(fc.string(), fc.nat(), fc.boolean());
