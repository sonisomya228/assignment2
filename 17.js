/*17. Write a JavaScript function to split a string and convert it into an
array of words.*/
function splitStringIntoWords(str) {
    // Split the string into an array of words using whitespace as the delimiter
    return str.split(/\s+/);
}

// Example usage:
const inputString = "This is a sample string";
const wordsArray = splitStringIntoWords(inputString);
console.log(wordsArray);