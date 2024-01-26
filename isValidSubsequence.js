/* Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they
appear in the array.  For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the number [2, 4].
Note that a single number in an array and the array itself are both valid subsequences of the array.
*/

// solution
function isValidSubsequence(array, sequence) {
    sequencePointer = 0;
    arrayPointer = 0;
    while (sequencePointer < sequence.length) {
        while (arrayPointer < array.length) {
            if (sequence[sequencePointer] == array[arrayPointer]) {
                sequencePointer++;
                arrayPointer++;
                if (sequencePointer == sequence.length) return true;
                if (arrayPointer == array.length) return false;
            }
            else {
                arrayPointer++;
                if (arrayPointer == array.length) return false;
            }
        }
    }
  }
  
// tests
console.log('1, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log('2, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
console.log('3, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]));
console.log('4, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]));
console.log('5, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]));
console.log('6, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]));
console.log('7, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10]));
console.log('8, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]));
console.log('9, ', isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]));
console.log('10, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12]));
console.log('11, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10]));
console.log('12, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]));
console.log('13, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));
console.log('14, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]));
console.log('15, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]));
console.log('16, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10]));
console.log('17, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2]));
console.log('18, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26]));
console.log('19, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]));
console.log('20, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8]));
console.log('21, ', isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));
console.log('22, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 11, 11, 11, 11]));
console.log('23, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10]));
console.log('24, ', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 5]));
