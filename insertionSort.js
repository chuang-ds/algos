function selectionSort(arr){
    for (var i = 1; i<arr.length; i++){
        for (var j = i; j > 0; j--){
            if (arr[j-1] > arr[j]){
                var tmp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tmp;
            }
            else{
                break;  // value to left is smaller so stop swapping
            }
        }
    }
    return arr;
}

console.log(selectionSort([3,4,38,25,2,20,23]));