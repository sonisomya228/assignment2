/*1. Write a JavaScript program to find all the index positions of a
given word within a given string.*/
function findAllIndexes(string, word) {
    let indexes = [];
    let index = string.indexOf(word);
    while (index !== -1) {
        indexes.push(index);
        index = string.indexOf(word, index + 1);
    }
    return indexes;
}

let inputString = "hello world hello hello";
let wordToFind = "hello";
let indexes = findAllIndexes(inputString, wordToFind);
console.log(`Indexes of '${wordToFind}' in '${inputString}':`, indexes);