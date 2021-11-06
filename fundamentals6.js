// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.  Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).

function threeFives() {
    let sum = 0;
    for (var i = 100; i <= 4000000; i++) {
        if (i % 3) {
            if (i % 5) {
                continue;
            }
            sum += i;
        }
        else if (i % 5) {
            sum += i;
        }
    }
    return sum;
}
console.log(threeFives());

function betterThreesFives(start,end) {
    let sum = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3) {
            if (i % 5) {
                continue;
            }
            sum += i;
        }
        else if (i % 5) {
            sum += i;
        }
    }
    return sum;
}
console.log(betterThreesFives(100,4000000));

// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateChange(cents) {
    function helper(value, coin) {
        let numCoin = Math.floor(value / coin);
        let remainder = value % coin;
        return [numCoin, remainder];
    }
    [numDollar, remDollar] = helper(cents, 100);
    [numFifty, remFifty] = helper(remDollar, 50);
    [numQuarter, remQuarter] = helper(remFifty, 25);
    [numDime, remDime] = helper(remQuarter, 10);
    [numNickel, remNickel] = helper(remDime, 5);
    numPenny = remNickel;
    console.log("For " + cents + " cents, there are:");
    console.log(numDollar + " dollar coins");
    console.log(numFifty + " 50 cent coins");
    console.log(numQuarter + " quarters");
    console.log(numDime + " dimes");
    console.log(numNickel + " nickels");
    console.log(remNickel + " pennies");
}
generateChange(140);
generateChange(87);
generateChange(25);
generateChange(3);

// Messy Math Mashup -- Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:
// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
function messyMath(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        if((num/3) == i) {
            return -1;
        }
        if(i % 3 == 0) {
            continue;
        }
        else if(i % 7 == 0) {
            sum += i*2;
        }
        else {
            sum += i;
        }
    }
    return sum;
}
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));

//Twelve-Bar Blues -- Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.
function twelveBarBlues() {
    for(let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
twelveBarBlues();

// Fibonacci -- Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 
function wrapper(m) {
    function fibonacci(n) {
        if(n < 2) {
            return n;
        }
        return fibonacci(n-2) + fibonacci(n-1);
    }
    for(let i = 0; i <= m; i++) {
        console.log("fibonacci("+i+") = " + fibonacci(i));
    }
}
wrapper(8);