/**
 * Check if a character is an alphabet letter (A-Z, a-z).
 *
 * @param {string} char - The character to check.
 * @returns {boolean} Returns `true` if the character is a letter, otherwise `false`.
 * @throws {Error} Will throw an error if the input is not a single character.
 */

export const isLetter = (char: string): boolean => {
  if (char.length !== 1) {
    throw new Error("Input must be a single character.");
  }

  const ascii = char.charCodeAt(0);

  return (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122);
};
