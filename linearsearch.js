/*2. Write a JavaScript program to find the first index of a given
element in an array using the linear search algorithm.
*/
function linearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i; // Found the element, return its index
        }
    }
    return -1; // Element not found in the array
}

let arr = [5, 10, 15, 20, 25];
let elementToFind = 15;
let firstIndex = linearSearch(arr, elementToFind);

if (firstIndex !== -1) {
    console.log(`First index of ${elementToFind} in the array:`, firstIndex);
} else {
    console.log(`${elementToFind} not found in the array.`);
}