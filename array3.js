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

