/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array,
in any order.  If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a
single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample output
[-1, 11] // the numbers could be in reverse order
*/

// solution using two indexes to iterate through array
function twoNumberSum(array, targetSum) {
    // outside loop with left element
    for (var i=0; i<array.length-1; i++)
    {
      // inside loop just to right of outside loop
      for (var j=i+1; j<array.length; j++)
        {
          if (array[i]+array[j] == targetSum) return [array[i], array[j]]
        }
    }
    return []
  }
  
  // tests
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
  console.log(twoNumberSum([4, 6], 10));
  console.log(twoNumberSum([4, 6, 1], 5));
  console.log(twoNumberSum([4, 6, 1, -3], 3));
  console.log(twoNumberSum([4, 6, 1, -3, ], 10));
  console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
  console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
  console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
  console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
  console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
  console.log(twoNumberSum([14], 15));

  // better solution using hash map
  function twoNumberSum2(array, targetSum) {
    // create hash table containing evaluated elements
    const seen = new Set();
    // iterate through array
    for (let num of array) {
        // complement is answer to evaluate true given targetSum - num
        const complement = targetSum - num;
        // check if hash table contains complement already
        if (seen.has(complement)) {
            return [num, complement];
        }
        // if complement is not in hash table then at least add num to hash table then iterate
        seen.add(num);
    }
    return []
  }

  // tests
  console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));
  console.log(twoNumberSum2([4, 6], 10));
  console.log(twoNumberSum2([4, 6, 1], 5));
  console.log(twoNumberSum2([4, 6, 1, -3], 3));
  console.log(twoNumberSum2([4, 6, 1, -3, ], 10));
  console.log(twoNumberSum2([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
  console.log(twoNumberSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
  console.log(twoNumberSum2([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
  console.log(twoNumberSum2([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
  console.log(twoNumberSum2([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
  console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 15));
  console.log(twoNumberSum2([14], 15));