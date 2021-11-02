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
    let numQuarter = 0, numDime = 0, numNickel = 0, numPenny = 0;
    numQuarter = Math.floor(cents / 25);
    let remQuarter = cents % 25;
    numDime = Math.floor(remQuarter / 10);
    let remDime = remQuarter % 10;
    numNickel = Math.floor(remDime / 5);
    let remNickel = remDime % 5;
    console.log("For " + cents + " cents, there are:");
    console.log(numQuarter + " quarters");
    console.log(numDime + " dimes");
    console.log(numNickel + " nickels");
    console.log(remNickel + " pennies");
}
generateChange(99);
generateChange(87);
generateChange(53);
generateChange(11);
generateChange(3);
