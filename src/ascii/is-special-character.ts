/**
 * Check if a character is a non-alphabetic or special character.
 *
 * @param {string} char - The character to be checked.
 * @returns {boolean} Returns `true` if the character is a special or non-alphabetic character, otherwise `false`.
 * @throws {Error} Will throw an error if the input is not a single character.
 */

export const isSpecialCharacter = (char: string): boolean => {
  if (char.length !== 1) {
    throw new Error("Input must be a single character.");
  }

  const ascii = char.charCodeAt(0);

  return !((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)); // Not A-Z, a-z
};
