/*11. Write a JavaScript function to validate whether a given value is
a number or not.*/
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Testing the function
console.log(isNumber(42)); // true
console.log(isNumber(-3.14)); // true
console.log(isNumber("42")); // false (string)
console.log(isNumber(NaN)); // false (NaN)
console.log(isNumber(null)); // false (null)
console.log(isNumber(undefined)); // false (undefined)
console.log(isNumber([])); // false (array)
console.log(isNumber({})); // false (object)