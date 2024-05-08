/*9. Write a JavaScript program to check if a numeric array is sorted
or not.*/
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

const numericArray = [1, 3, 5, 7, 9];
const isSortedResult = isSorted(numericArray);
console.log('Numeric Array is sorted:', isSortedResult);