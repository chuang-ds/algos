// sum the diagnals of a square matrix
function matrixTrace(matrix){
    var sum = null;
    for (var i = 0; i<matrix.length; i++){
        sum += matrix[i][i];
    }
    return sum;
}

console.log(matrixTrace([[1,2,3],[4,5,6],[7,8,9]]));
console.log(matrixTrace([[1,2,3,4],[4,5,6,7],[7,8,9,10],[11,12,13,14]]));
console.log(matrixTrace([[1,2],[4,5]]));
