/*
Given a 2D array of integers, write a function that returns the transpose of the matrix.
Assume the input matrix always has at least 1 value, however col & rows are not necessarily same

e.g.
sample input:
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

expected output:
[
    [1, 3, 5],
    [2, 4, 6]
]
*/

function transposeMatrix(matrix) {
    // initialize results array
    results = [];
    // 
    for (j=0; j<matrix[0].length; j++) {
        // initialize sub-array within results array
        results[j] = Array(matrix.length);
    }
    // interate thru rows and columns of matrix and assign transpose to results matrix
    for (i=0; i<matrix.length; i++) {
        for (j=0; j<matrix[0].length; j++) {
            results[j][i] = matrix[i][j];
        }
    }
    return results;
}

console.log(1, transposeMatrix([[1]]));
console.log(2, transposeMatrix([[1],[-1]]));
console.log(3, transposeMatrix([[1, 2, 3]]));
console.log(4, transposeMatrix([[1],[2],[3]]));
console.log(5, transposeMatrix([[1, 2, 3],[4, 5, 6]]));
console.log(6, transposeMatrix([[0, 0, 0],[1, 1, 1]]));
console.log(7, transposeMatrix([[0, 1],[0, 1],[0, 1]]));
console.log(8, transposeMatrix([[0, 0, 0],[0, 0, 0]]));
console.log(9, transposeMatrix([[1, 4],[2, 5],[3, 6]]));
console.log(10, transposeMatrix([[-7, -7],[100, 12],[-33, 17]]));
console.log(11, transposeMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
console.log(12, transposeMatrix([[1, 4, 7],[2, 5, 8],[3, 6, 9]]));
console.log(13, transposeMatrix([[5, 6, 3, -3, 12],[-3, 6, 5, 2, -1],[0, 0, 3, 12, 3]]));
console.log(14, transposeMatrix([[0, -1, -2, -3],[4, 5, 6, 7],[2, 3, -2, -3],[42, 100, 30, -42]]));
console.log(15, transposeMatrix([[1234, 6935, 4205],[-23459, 314159, 0],[100, 3, 987654]]));