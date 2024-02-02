/*
Given an array of coins, determine the smallest amount of change that you cannot make from given coins.

Sample: given coins = [1, 2, 5], the smallest amount of change you cannot make is 4
*/

function nonConstructibleChange(coins) {
    // as we are looking for smallest amount of change, we sort the array of coins in ascending order
    coins.sort(function(a, b) {return a-b});

    // check for edge cases
    if (coins.length == 0 || coins[0] > 1) return 1;

    // iterate thru coins and start looking for min change
    change[0] = coins[0];
    for (i=1; i<coins.length; i++) {
        change[i] = coins[i];
        change[i+1] = coins[i-1] + coins[i];
    }
}

console.log(nonConstructibleChange([1,5,2]));