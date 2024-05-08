//12. Write a JavaScript function to validate whether a given value is
// RegExp or not.
function isRegExp(value) {
    return value instanceof RegExp;
}

// Testing the function
console.log(isRegExp(/test/)); // true
console.log(isRegExp(new RegExp("pattern"))); // true
console.log(isRegExp("test")); // false (string)
console.log(isRegExp(42)); // false (number)
console.log(isRegExp({})); // false (object)
console.log(isRegExp(null)); // false (null)
console.log(isRegExp(undefined)); // false (undefined)
console.log(isRegExp([])); // false (array)