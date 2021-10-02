// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
function sigma(num) {
    var val = 0;
    for(var i = 1; i <= num; i++) {
        val += i;
    }
    return val;
}
console.log(sigma(3));
console.log(sigma(5));

// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
function factorial(num) {
    var val = 1;
    for(var i = 1; i <= num; i++) {
        val *= i;
    }
    return val;
}
console.log(factorial(3));
console.log(factorial(5));

function factorialv2(num) {  // using recursion
    if(num == 1) {
        return 1;
    }
    return num * factorialv2(num-1);
}
console.log(factorialv2(3));
console.log(factorialv2(5));

function drawLeftStars(num) {
    var returnVal = '';
    for(var i = 0; i < num; i++) {
        returnVal += '*';
    }
    for(var j = 0; j < 75-num; j++) {
        returnVal += ' ';
    }
    return returnVal;
}
console.log(drawLeftStars(5));

function drawRightStars(num) {
    var returnVal = '';
    for(var j = 0; j < 75-num; j++) {
        returnVal += ' ';
    }
    for(var i = 0; i < num; i++) {
        returnVal += '*';
    }
    return returnVal;
}
console.log(drawRightStars(5));

function drawCenterStars(num) {
    var returnVal = '';
    for(var i = 0; i < (((75-num)/2)); i++) {
        returnVal += '.';
    }
    for(var j = 0; j < num; j++) {
        returnVal += '*';
    }
    for(var k = 0; k < ((75-num)/2)-.5; k++) {
        returnVal += '.';
    }
    return returnVal;
}
console.log(drawCenterStars(70));
console.log(drawCenterStars(67));


function drawLeftChars(num, char) {
    var returnVal = '';
    for(var i = 0; i < num; i++) {
        returnVal += char;
    }
    for(var j = 0; j < 75-num; j++) {
        returnVal += ' ';
    }
    return returnVal;
}
console.log(drawLeftChars(5, 'c'));

function drawRightStars(num, char) {
    var returnVal = '';
    for(var j = 0; j < 75-num; j++) {
        returnVal += ' ';
    }
    for(var i = 0; i < num; i++) {
        returnVal += char;
    }
    return returnVal;
}
console.log(drawRightChars(5, 'c'));

function drawCenterChars(num, char) {
    var returnVal = '';
    for(var i = 0; i < (((75-num)/2)); i++) {
        returnVal += '.';
    }
    for(var j = 0; j < num; j++) {
        returnVal += char;
    }
    for(var k = 0; k < ((75-num)/2)-.5; k++) {
        returnVal += '.';
    }
    return returnVal;
}
console.log(drawCenterChars(70, 'c'));
console.log(drawCenterChars(67, 'c'));