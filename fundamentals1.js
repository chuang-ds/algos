// Print integers from -52 to 1066 using a FOR loop.
function printInt() {
    for(var i=-52; i<1067; i++) {
        console.log(i);
    }
}
console.log("printing integers from -52 to 1066");
printInt();

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function goodMorning() {
    for(var i=1; i<99; i++) {
        console.log(i + ": good morning!");
    }
}
goodMorning();

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
function multipleThree() {
    for(var i=-300; i<1; i += 3) {
        if(i == -3 || i == -6) {
            continue;
        }
        console.log(i);
    }
}
multipleThree();

// Print integers from 2000 to 5280, using a WHILE.
function integerWhile() {
    var i = 2000;
    while(i < 5281) {
        console.log(i);
        i++;
    }
}
integerWhile();

// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
function luckyGuess(i, j) {
    if((i==1 && j==27) || (i==27 && j==1)) {
        console.log('How did you know?');
    }
    else {
        console.log('Just another day...');
    }
}
luckyGuess(1,27);
luckyGuess(27,1);
luckyGuess(8,8);

// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function isLeapYear(y) {
    if((y % 100 == 0) || (y % 4 != 0)) {
        if(y % 400 != 0){
            console.log(y + ' is not a leap year!');
        }
        else {
            console.log(y + ' is a leap year!');
        }
    }
    else {
        console.log(y + ' is a leap year!');
    }
}
isLeapYear(2021);
isLeapYear(2024);
isLeapYear(2100);
isLeapYear(2000);

// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
function fiveByFive() {
    var count = 0;
    for(var i=515; i<4096; i+=5) {
        count++;
        console.log(i);
    }
    console.log('There were ' + count + ' integers between 512 and 4096 that are multiples of 5');
}
fiveByFive();

// Print multiples of 6 up to 60,000, using a WHILE.
function multipleSix() {
    var i = 6;
    while(i < 60006) {
        console.log(i);
        i += 6;
    }
}
multipleSix();

// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
function dojoCount() {
    for(var i=1; i<101; i++) {
        if(i % 5 == 0) {
            if(i % 10 ==0) {
                console.log('Coding Dojo');
            }
            else{
                console.log('Coding');
            }
        }
        else {
            console.log(i);
        }
    }
}
dojoCount();

// Your function will be given an input parameter incoming. Please console.log this value.
function sayWhat(what) {
    console.log(what);
}
sayWhat('huh?');
sayWhat(5);

// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
function oddSum() {
    var sum = 0;
    for(var i=-299999; i<300000; i+=2) {
        sum = sum + i;
    }
    console.log(sum);
}
oddSum();

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
function countDown() {
    var year = 2016;
    while(year > 0) {
        console.log(year);
        year -= 4;
    }
}
countDown();

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function countDown(lowNum, highNum, mult) {
    var start = highNum;
    while(start % mult != 0) {
        start--;
    }
    for(var i = start; i>lowNum; i -= mult) {
        console.log(i);
    }
}
countDown(2, 9, 3);

// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
function finalCountdown(mult, low, high, except) {
    var start = low;
    while(start % mult != 0) {
        start++;
    }
    for(var i=start; i<high; i += mult) {
        if(i != except) {
            console.log(i);
        }
    }
}
finalCountdown(3,5,17,9);