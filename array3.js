// Arrs2Map - Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For ​arr1 = ["abc", 3, "yo"]​ and ​arr2 = [42, "wassup", true]​, return ​{"abc": 42, 3: "wassup", "yo": true}​.
function arrsToMap(arrOne, arrTwo) {
    if(arrOne.length != arrTwo.length) {
        return null;
    }
    let arrMap = new Map();
    for(let i = 0; i < arrOne.length; i++){
        arrMap.set(arrOne[i], arrTwo[i]);
    }
    return arrMap;
}
console.log(arrsToMap(['abc', 3, 'yo'], [42, 'wassup', true]))

function arrsToObj(arrOne, arrTwo) {
    if(arrOne.length != arrTwo.length) {
        return null;
    }
    let arrObj = {};
    for(let i = 0; i < arrOne.length; i++){
        arrObj[arrOne[i]] = arrTwo[i];
    }
    return arrObj;
}
console.log(arrsToObj(['abc', 3, 'yo'], [42, 'wassup', true]))

// InvertHash - Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys. Example: given ​{"name": "Zaphod"; "numHeads": 2}​, return ​{"Zaphod": "name"; 2: "numHeads"}​. You will need to learn and use a JavaScript ​for ... in​ h​ ere!
function invertHash(arr) {
    let arrReturn = {};
    for (const [key, value] of Object.entries(arr)) {
        arrReturn[value] = key;
    }
    return arrReturn;
}
console.log(invertHash({"name": "Zaphod", "numHeads": 2}))

// Remove Blanks -- Create a function that, given a string, returns the string, without blanks. Given ​" play that Funky Music "​, returns a string containing ​"playthatFunkyMusic"​.
function removeSpaces(str) {
    myArr = str.split(" ");
    newStr = myArr.join("");
    return newStr;
}
console.log(removeSpaces(" play that Funky Music "));

// Get String Digits -- Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0"​, the function should return the number 1,357,924,680.
function getStringDigits(str) {
    let newStr = "";
    for(let i=0; i<str.length; i++) {
        if(str[i] >= 0 || str[i] <= 9) {
            newStr += str[i];
        }
    }
    return parseInt(newStr);
}
console.log(getStringDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms -- Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given "there's no free lunch - gotta pay yer way"​, return ​"TNFL-GPYW"​. Given ​"Live from New York, it's Saturday Night!"​, return ​"LFNYISN"​.
function makeAcronym(str) {
    let myArr = str.split(" ");
    for(let i=0; i<myArr.length; i++) {
        myArr[i] = myArr[i][0].toUpperCase();
    }
    return myArr.join("");
}
console.log(makeAcronym("there's no free lunch - gotta pay yer way"));
console.log(makeAcronym("Live from New York, it's Saturday Night!"));

// Arrays: move zeros to the left -- Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-place.
function dropZero(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            for(let j=i; j<arr.length; j++) {
                arr[j] = arr[j+1];
            }
            arr.length = arr.length-1;
        }
    }
    return arr;
}
console.log(dropZero([1,10,20,0,59,63,0,88,0]));

let moveZeroLeft = function(arr) {
    if(arr.length < 1) {
        return;
    }
    
    let readIdx = arr.length - 1;
    let writeIdx = arr.length - 1;
    while (readIdx >= 0) {
        if(arr[readIdx] != 0) {
            arr[writeIdx] = arr[readIdx];
            writeIdx--;
        }
        readIdx--;
    }

    while (writeIdx >= 0) {
        arr[writeIdx] = 0;
        writeIdx--;
    }
}
let a = [1,10,20,0,59,63,0,88,0];
moveZeroLeft(a);
console.log(a);

// Merge Overlapping Intervals - You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.  Consider the input array below. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so they should be merged to one big interval (1, 8). Similarly, intervals (10, 12) and (12, 15) are also overlapping and should be merged to (10, 15).
class Pair { 
    constructor(first, second) { 
      this.first = first; 
      this.second = second; 
    } 
  }
  
  let mergeIntervals = function(v){
    let result = [];
    result.push(new Pair(v[0].first, v[0].second));

    for(let i = 0; i < v.length; i++) {
        let currInterval = [new Pair(v[i].first, v[i].second)];
        let currX = v[i].first;
        let currY = v[i].second;
        let resultX = result[result.length -1].first;
        let resultY = result[result.length -1].second;
        if (resultY >= currX) {
            result[result.length -1].second = Math.max(currY, resultY);
        }
        else {
            result.push(new Pair(currX, currY));
        }        
    }
    return result;    
  }
let a=[new Pair(1, 5), new Pair(3, 7), new Pair(4, 6), new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];
let result = mergeIntervals(a);
console.log(result.length);
for (let i=0; i < result.length; i++) {
    console.log(result[i].first + ", " + result[i].second);
}

// rotate a square (N x N) matrix by 90 degrees in the anti-clockwise direction without using any extra space
function rotateSquare(arr) {
    let temp = 0;
    let N = arr.length;
    for (let x=0; x < N/2; x++) {
        for (let y=x; y < N-x-1; y++) {
            temp = arr[x][y];
            arr[x][y] = arr[y][N-x-1];
            arr[y][N-x-1] = arr[N-x-1][N-y-1];
            arr[N-x-1][N-y-1] = arr[N-y-1][x];
            arr[N-y-1][x] = temp;
        }
    }
    return arr;
}
console.log(rotateSquare([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

// You are given an array with positive numbers. Explain how you will find the largest subset of the array containing elements that are Fibonacci numbers.
// solution: 1. find max in array, 2. generate Fibonacci numbers up to max, 3. traverse array and match elements in array to step 2
function subsetFibonacci(arr) {
    let max = Math.max(...arr);
    function fibonacci(n, max) {
        if (n < 2) {
            return n;
        }
        for (var i = 0; i <= max; i++) {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }
}
subsetFibonacci([1,3,5,8,2]);


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    for (var i = 0; i <= n; i++) {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(5));

function missingNum(nums) {
    let completeNum = Array.from(Array(nums.length+1).keys(0));
    console.log(completeNum);
    let missingNum = completeNum.filter(num => );
    console.log(missingNum);
}
missingNum([3,1,5,6,1,2,9]);

// determine whether array "sequence" is a subset of array "array"
function isValidSubsequence(array, sequence) {
    let subIdx = 0;
    let arrIdx = 0;
    while (subIdx < sequence.length) {
        // console.log("in outter loop");
        while (arrIdx < array.length) {
            // console.log("in inner loop");
            if(array[arrIdx] == sequence[subIdx]) {
                // match, move forward both arrays
                arrIdx++;
                subIdx++;
                // console.log("arrIdx = ", arrIdx);
                // console.log("subIdx = ", subIdx);
            }
            else {
                // no match, move forward just main array
                arrIdx++;
                // console.log("arrIdx = ", arrIdx);
            }
        } // at end of main array, check if at end of subarray, if so then return true, else false
        if (subIdx == sequence.length && array[arrIdx - 1] == sequence[subIdx-1]) {
            return true;
        }
        else {
            return false;
        }
    // at end of subarray, return false
    }
    return false;
}
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 1];
console.log(isValidSubsequence(array, sequence))