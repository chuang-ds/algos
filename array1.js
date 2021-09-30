// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, num) {
    for(var i = arr.length-1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = num;
    return arr;
}
console.log(pushFront([1,2,3,4],'b'))

// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
    returnVal = arr[0];
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return returnVal;
}
console.log(popFront(['a',3,5,2,'b']))

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, idx, val) {
    for(var i = arr.length-1; i >= idx; i--) {
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}
console.log(insertAt(['a',3,5,2,'b'],3,'new'))

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx) {
    returnVal = arr[idx];
    for(var i = idx; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return returnVal;
}
console.log(removeAt(['a',3,5,2,'b'],3))

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
    var temp;
    for(var i = 0; i <= arr.length/2; i+=2) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
console.log(swapPairs(['a',3,5,2,'b']))

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function removeDuplicates(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            for(var j = i; j < arr.length; j++) {
                arr[j] = arr[j+1];
            }
            arr.pop()
        }
    }
    return arr;
}
console.log(removeDuplicates(['a','b','b','c',1,1,3,5]))