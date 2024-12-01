/**
 * Convert an ASCII (or Unicode) code point to its corresponding character.
 *
 * @param {number} ascii - A numeric value representing the ASCII (or Unicode) code point of a character.
 * @returns {string} The character corresponding to the provided ASCII code.
 * @throws {Error} Will throw an error if the `ascii` value is not a valid number or falls outside the range of Unicode characters (0-65535).
 */

export const ASCII_to_char = (ascii: number): string => {
  if (typeof ascii !== "number" || isNaN(ascii)) {
    throw new Error("Input must be a valid number");
  }
  if (ascii < 0 || ascii > 65535) {
    throw new Error("Input must be within the valid Unicode range (0-65535)");
  }

  return String.fromCharCode(ascii);
};
