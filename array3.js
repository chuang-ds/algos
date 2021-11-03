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
