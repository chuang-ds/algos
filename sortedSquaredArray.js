/* Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length
with the squares of the original integers also sorted in ascending order.

Sample input:
array = [1, 2, 3, 5, 8]

Sample output:
[1, 4, 9, 25, 64]
*/

// solution
function sortedSquaredArray(array) {
    outputArray = [];
    outputIdx = array.length-1;
    for (i = 0; i < array.length; i++) {
        curMax = Math.max(...array);
        curMin = Math.min(...array);
        if (Math.abs(curMax) >= Math.abs(curMin)) {
            outputArray[outputIdx] = curMax * curMax;
            array[array.indexOf(curMax)] = 0;
            outputIdx--;
        }
        else {
            outputArray[outputIdx] = curMin * curMin;
            array[array.indexOf(curMin)] = 0;
            outputIdx--;
        }
    }
    return outputArray;
}

// tests
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([1]));
console.log(sortedSquaredArray([1, 2]));
console.log(sortedSquaredArray([1, 2, 3, 4, 5]));
console.log(sortedSquaredArray([0]));
console.log(sortedSquaredArray([10]));
console.log(sortedSquaredArray([-1]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-5, -4, -3, -2, -1]));
console.log(sortedSquaredArray([-10]));
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]));
console.log(sortedSquaredArray([-7, -3, 1, 9, 22, 30]));
console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
console.log(sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(sortedSquaredArray([-1, -1, 2, 3, 3, 3, 4]));
console.log(sortedSquaredArray([-3, -2, -1]));