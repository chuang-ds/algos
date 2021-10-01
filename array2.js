// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    var temp;
    for(var i=0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,2,3,4,5,6]));

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions. Second: allow negative shiftBy (shift L, not R). Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.
function rotate(arr, shiftBy) {
    var temp;
        // if shiftBy is positive, the last arr element should be assigned to temp
        if(shiftBy > 0) {
            for(var rotate = 0; rotate < shiftBy; rotate++) {
                temp = arr[arr.length-1];
                for(var j = arr.length-1; j >= 0; j--) {
                    arr[j+1] = arr[j];
                }
                arr[0] = temp;
                arr.length = arr.length-1;
            }
        }
        else {
            for(var rotate = 0; rotate < (-shiftBy); rotate++) {
                temp = arr[0];
                for(var j = 0; j < arr.length; j++) {
                    arr[j] = arr[j+1];
                }
                arr[arr.length-1] = temp;
            }
        }
    return arr;
}
console.log(rotate([1,2,3,4,5], 2));
console.log(rotate([1,2,3,4,5], -2));

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, min, max) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] <= min || arr[i] >= max) {
            arr[i] = null;
        }
    }
    return arr;
}
console.log(filterRange([1,31,5,75,9,111,13,50], 5, 80));
console.log(filterRange([11,31,51,71,91,111,131,57], 50, 100));

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function concat(arr1, arr2) {
    var newArr = arr1;
    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    return newArr;
}
console.log(concat(['a','b'], [1,2]));