/* Iterates over each parameter provided to the function as a
 * string and joins them together with a space.
 * - If `classes` contains elements that are not strings, they will be removed.
 */
export function classNames(...classes: string[]) {
  return classes.filter((c) => typeof c === "string").join(" ");
}
/**
 * Sets the first letter of the provided `string` to uppercase.
 */
export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
/**
 * Returns the provided `string` with all hyphens replaced with a space and each
 * word capitalized.
 */
export const slugToName = (string: string) =>
  string
    .replace(/-/g, " ")
    .replace(/\w\S*/g, (word) => capitalizeFirstLetter(word));
/**
 * Sets the first letter of the provided `string` to lowercase.
 */
export const lowercaseFirstLetter = (string: string) =>
  string.charAt(0).toLowerCase() + string.slice(1);
/**
 * Removes the provided `prefix` from the beginning of the `string` if it exists.
 */
export const removePrefix = (string: string, prefix: string) =>
  string.startsWith(prefix) ? string.slice(prefix.length) : string;
/**
 * Given an english word, return the plural form of the word.
 */
export const pluralize = (word: string): string => {
  if (word.length === 0) return "";
  if (word.endsWith("y")) {
    return word.slice(0, -1) + "ies";
  } else if (word.endsWith("s")) {
    return word + "es";
  } else {
    return word + "s";
  }
};
/**
 * Given a whole number, formats the number into a string.
 * @param num the number to format
 * @param rec whether this is a recursive call
 */
export const numberToWords = (num: number, rec = false): string => {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (num === 0 && rec !== true) {
    return "zero";
  } else if (num < 20) {
    return units[num];
  } else if (num < 100) {
    return tens[Math.floor(num / 10)] + " " + units[num % 10];
  } else if (num < 1000) {
    return (
      units[Math.floor(num / 100)] +
      " hundred " +
      numberToWords(num % 100, true)
    );
  } else if (num < 1000000) {
    return (
      numberToWords(Math.floor(num / 1000), true) +
      " thousand " +
      numberToWords(num % 1000, true)
    );
  }
  return `${num}`;
};
/**
 * Given a number and a noun, return a string with the number and noun in plural
 * form if the noun should be based on the number. Optionally coverts the number
 * to it's word form if `convertNumberToWord` is true and is less than 11.
 */
export const maybePluralize = (
  number: number,
  noun: string,
  convertNumberToWord = false
): string => {
  // If the number is less than 11, convert it to it's word form if convertNumberToWord is true
  const numberOrWord = convertNumberToWord ? numberToWords(number) : number;
  if (number === 1) return `${numberOrWord} ${noun}`;
  return `${numberOrWord} ${pluralize(noun)}`;
};
export const formattedDashCase = (str: string): string => {
  return (
    str
      // Replace - with a space
      .replace(/-/g, " ")
      // Capitalize the first letter of each word
      .replace(/\b\w/g, (l) => l.toUpperCase())
      // If any words have both letters and numbers, capitalize the full word
      .replace(/\b\w+\b/g, (w) => {
        return /[a-z]/i.test(w) && /\d/.test(w) ? w.toUpperCase() : w;
      })
  );
};
/**
 * Returns the provided `url` string with the query parameter value replaced.
 * @param url {string} The url to replace the query parameter value on.
 * @param parameter {string} the name of the parameter to replace.
 * @value {string|number} the value to replace the query parameter with.
 */
export const replaceQueryParameter = (
  url: string,
  parameter: string,
  newValue: string | number
) => {
  const urlObject = new URL(url);
  urlObject.searchParams.set(parameter, newValue.toString());
  return urlObject.toString();
};
/**
 * Returns a string with tokens replaced with the provided values.
 * @param string {string} The string to replace tokens in.
 * @param tokenMap {object} The object containing the tokens and their values.
 */
export const replaceStringTokens = (
  string = "",
  tokenMap: { [key: string]: string } = {}
) =>
  Object.keys(tokenMap).reduce((acc, key) => {
    return acc.replace(new RegExp(`\\{${key}\\}`, "g"), tokenMap[key]);
  }, string);
