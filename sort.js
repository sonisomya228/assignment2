/*8. Write a JavaScript program to sort the characters in a string
alphabetically.*/
function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

const inputString = 'hello world';
const sortedString = sortStringAlphabetically(inputString);
console.log('Sorted String:', sortedString);