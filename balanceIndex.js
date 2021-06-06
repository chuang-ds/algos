function balanceIndex(arr){
    if (arr.length < 3){
        return -1;
    }
    for (var i=1; i<arr.length-1; i++){
        // sum left of i
        let sumLeft = 0;
        for (var ileft=0; ileft<i; ileft++){
            sumLeft += arr[ileft];
        }
        // sum right of i
        let sumRight = 0;
        for (var iright=i+1; iright<arr.length; iright++){
            sumRight += arr[iright];
        }
        if (sumLeft == sumRight) return i;
    }
    return -1;
}

console.log(balanceIndex([1,2]))
console.log(balanceIndex([1,2,3]))
console.log(balanceIndex([1,2,6,9]))
console.log(balanceIndex([1,3,1,2,2]))
console.log(balanceIndex([44,2,33,11]))