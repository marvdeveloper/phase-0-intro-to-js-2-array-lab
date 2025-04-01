// Initialize the cats array
let cats = ["Milo", "Otis", "Garfield"];

// 1. Destructive function: appends a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);  // Adds a new cat to the end of the cats array
}

// 2. Non-destructive function: appends a cat to the end of the array (returns new array)
function appendCat(name) {
  return cats.concat(name);  // Returns a new array with the cat appended
}

// 3. Destructive function: removes the last cat
function destructivelyRemoveLastCat() {
  cats.pop();  // Removes the last element of the array
}

// 4. Non-destructive function: removes the last cat (returns new array)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);  // Returns a new array without the last cat
}

// 5. Destructive function: removes the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();  // Removes the first element of the array
}

// 6. Non-destructive function: removes the first cat (returns new array)
function removeFirstCat() {
  return cats.slice(1);  // Returns a new array without the first cat
}

// 7. Destructive function: adds a cat to the end of the array
function destructivelyAddCat(name) {
  cats.push(name);  // Adds a new cat to the end of the cats array
}

// 8. Non-destructive function: adds a cat to the end of the array (returns new array)
function addCat(name) {
  return cats.concat(name);  // Returns a new array with the cat added
}

// 9. Destructive function: adds a cat to the start of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);  // Adds a new cat to the beginning of the cats array
}

// 10. Non-destructive function: adds a cat to the start of the array (returns new array)
function prependCat(name) {
  return [name].concat(cats);  // Returns a new array with the cat added to the beginning
}

// 11. Destructive function: removes the first and last cat
function destructivelyRemoveFirstAndLastCat() {
  cats.shift();  // Removes the first element
  cats.pop();    // Removes the last element
}

// 12. Non-destructive function: removes the first and last cat (returns new array)
function removeFirstAndLastCat() {
  return cats.slice(1, cats.length - 1);  // Returns a new array without the first and last cats
}
