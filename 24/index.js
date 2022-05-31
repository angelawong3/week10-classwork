// Exercise 1
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

// TODO: Which operator is being used here?
// spread
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
console.log(newSongs);
// => "Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // the reduce() method executes the reducer function on each element of the array
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));
// =>6

// TODO: What is this syntax that is being used as the parameter?
// we are using the rest parameter syntax that allows us to represent
// an indefinite number of arguments in an array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));
// =>6

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
// =>110
