/*
Given an array of coins, determine the smallest amount of change that you cannot make from given coins.

Sample: given coins = [1, 2, 5], the smallest amount of change you cannot make is 4
*/

function nonConstructibleChange(coins) {
    // as we are looking for smallest amount of change we cannot make, we sort the array of coins
    coins.sort(function(a, b) {return a-b});

    // check for edge cases
    if (coins.length == 0 || coins[0] > 1) return 1;

    // first set minChange we cannot make as 0
    minChange = 0;
    // iterate thru coins and start looking for min change
    for (i=0; i<coins.length; i++) {
        // increment minChange by value of current coin being evaluated
        minChange += coins[i];
        // if next larger coin is more than 1 denomination greater than minChange then minChange+1 is
        // the minimum change that we cannot make given our array of coins
        if (coins[i+1] > minChange + 1) {
            return minChange + 1;
        }
    }
    // if all coins evaluated and no minChange was found then the minChange is just 1 denomination greater
    return minChange + 1;
}

console.log(1, nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
console.log(2, nonConstructibleChange([1, 1, 1, 1, 1]));
console.log(3, nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(4, nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]));
console.log(5, nonConstructibleChange([]));
console.log(6, nonConstructibleChange([87]));
console.log(7, nonConstructibleChange([5, 6, 1, 1, 2, 3, 4, 9]));
console.log(8, nonConstructibleChange([5, 6, 1, 1, 2, 3, 43]));
console.log(9, nonConstructibleChange([1,1]));
console.log(10, nonConstructibleChange([2]));
console.log(11, nonConstructibleChange([1]));
console.log(12, nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]));
console.log(13, nonConstructibleChange([1, 2, 3, 4, 5, 6, 7]));