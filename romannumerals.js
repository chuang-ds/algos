function romanToNum(s) {
    const romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    var totals = 0;
    console.log("string has length " + s.length);
    for (var i = 0; i < s.length; i++) {
        currVal = romanMap.get(s[i]);
        nextVal = romanMap.get(s[i+1]);
        // if(i == s.length -1) {
        //     nextVal = 0;
        // }
        if (currVal < nextVal) {
            // subtraction
            // console.log("in subtraction, totals=" + totals + "currVal=" + currVal + "nextVal=" + nextVal + "i=" + i);
            totals -= currVal;
        }
        else {
            // addition
            // console.log("in addition, totals=" + totals + "currVal=" + currVal + "nextVal=" + nextVal + "i=" + i);
            totals += currVal;
        }

    }
    return totals;
}

console.log(romanToNum("III"));
console.log(romanToNum("IV"));
console.log(romanToNum("IX"));
console.log(romanToNum("LVIII"));
console.log(romanToNum("MCMXCIV"));

// MC = 1000 + 100
// CM = -100 + 1000