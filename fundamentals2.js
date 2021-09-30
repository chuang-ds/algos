// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countdown(num) {
    var arr = [];
    for(var i = num; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
}
console.log(countdown(5));

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(x, y) {
    console.log(x);
    return y;
}
console.log(printReturn(4, 2));

// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLength(arr) {
    return arr[0] + arr.length;
}
console.log(firstPlusLength([5,15,28,935,0]));

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(i == 1) {
            continue;
        }
        else if(arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
console.log(greaterThanSecond([1,3,5,7,9,13]));

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanN(arr) {
    var count = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(i == 1) {
            continue;
        }
        else if(arr[i] > arr[1]) {
            newArr.push(arr[i]);
            count++;
        }
    }
    console.log(count);
    return newArr;
}
console.log(greaterThanN([1,3,5,7,9,13]));

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function thisLenThatVal(num1, num2) {
    // I don't understand the problem
}

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function fitFirstValue(arr) {
    if(arr[0] > arr.length) {
        console.log("Too big!");
    }
    else if(arr[0] < arr.length) {
        console.log("Too small!");
    }
    else { console.log("Just right!") }
}
fitFirstValue([5,3,2]);
fitFirstValue([5,3,2,1,5,3]);
fitFirstValue([5,3,2,5,8]);

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(fDegrees) {
    return ((5/9) * (fDegrees - 32));
}
console.log(fahrenheitToCelsius(16));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(72));

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
function celsiusToFahrenheit(cDegrees) {
    return (((9/5) * cDegrees) + 32);
}
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(20));