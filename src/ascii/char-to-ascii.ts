/**
 * Convert a single character into its corresponding ASCII (or Unicode) code point.
 *
 * @param {string} char - A string containing a single character to be converted to its ASCII code.
 * @returns {number} The ASCII (or Unicode) code point of the provided character.
 * @throws {Error} Will throw an error if the input string is empty or contains more than one character.
 */

export const char_to_ASCII = (char: string): number => {
  if (char.length !== 1) {
    throw new Error("Input must be a single character");
  }

  return char.charCodeAt(0);
};
