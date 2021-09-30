// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
function biggieSize(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(biggieSize([-1,3,5,-5]));

// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < low) { low = arr[i] }
        if(arr[i] > high) { high = arr[i] }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([3,42,-8,9]))

// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.
function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) { return arr[i] }
    }
}
console.log(printOneReturnAnother([2,4,5,7,8.9]));

// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = 2 * arr[i];
    }
    return newArr;
}
console.log(doubleVision([1,2,3]));

// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) { count++ }
    }
    arr[arr.length -1] = count;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
function evenOdds(arr) {
    for(var i = 0; i < arr.length - 2; i++) {
        if((arr[i] % 2 != 0) && (arr[i+1] % 2 != 0) && (arr[i+2] % 2 != 0)) {
            console.log("That's odd!");
        }
        else if((arr[i] % 2 == 0) && (arr[i+1] % 2 == 0) && (arr[i+2] % 2 == 0)) {
            console.log("Even more so!");
        }
    }
}
evenOdds([1,2,3,4,4,4,4,5,5,5,5,5,7,8]);

// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
function incrementSeconds(arr) {
    for(var i = 0; i < arr.length; i+=2) {
        console.log(arr[i]);
        arr[i]++;
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6]));

// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
function previousLength(arr) {
    for(var i = arr.length -1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLength(['abc','defg','hijkl','a','xyz']));

// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSevenToMost(arr) {
    var newArr = [];
    for(var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
console.log(addSevenToMost([1,2,3,4,6,7,8]));

// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
function reverseArr(arr) {
    var temp = 0;
    for(var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5]));
console.log(reverseArr([1,2,3,4,5,6]));

// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
    const newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            newArr[i] = -arr[i];
        }
        else { newArr[i] = arr[i] }
    }
    return newArr;
}
console.log(outlookNegative([1,-3,5]));

// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'food') { 
            console.log('yummy');
            count++;
        }
    }
    if(!count) { console.log("I'm hungry") }
}
alwaysHungry(['apple','food','pear','food']);
alwaysHungry(['apple','pear','mango','grape']);

// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapTowardsCenter(arr) {
    var temp = 0;
    for(var i = 0; i < arr.length/2; i+=2) {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(swapTowardsCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardsCenter([1,2,3,4,5,6]));

// Given array arr and number num, multiply each arr value by num, and return the changed arr.
function scaleArr(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        arr[i]*= num;
    }
    return arr;
}
console.log(scaleArr([1,2,3,4], 5));