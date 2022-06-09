// ### Preclass Drill

// Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

// ```js
// Ex:
// Input: '1'
// Output: -1

// Input: '4'
// Output: -4

// Input: 'cow'
// Error

function negator(str) {
  const num = parseInt(str);

  if (typeof str === "string") {
    throw new Error("Error, please provide a valid number");
  }
  return -num;
}

module.exports = negator;
