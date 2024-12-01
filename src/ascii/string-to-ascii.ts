/**
 * Convert a string into an array of ASCII (or Unicode) code points for each character.
 *
 * @param {string} str - The string to be converted into an array of ASCII (or Unicode) values.
 * @returns {number[]} An array of ASCII values representing the characters in the input string.
 * @throws {Error} Will throw an error if the input is not a string.
 */

export const string_to_ASCII = (str: string): number[] => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }

  if (str.length === 0) {
    return [];
  }

  return str.split("").map((char) => char.charCodeAt(0));
};
