function matrixSearch(bigMatrix, smallMatrix){
    // figure out bounds for the top left corner to begin search
    var maxCol = bigMatrix[0].length - smallMatrix[0].length;
    var maxRow = bigMatrix.length - smallMatrix.length;
    // loop through all possible top left indicies
    for (var i = 0; i <= maxRow; i++){
        for (var j = 0; j <= maxCol; j++){
            var canFit = true;
            if (bigMatrix[i][j] == smallMatrix[0][0]){
                // check if everything else matches
                for (var x = 0; x < smallMatrix.length; x++){
                    for (var y = 0; y < smallMatrix[0].length; y++){
                        if (bigMatrix[i+x][j+y] == smallMatrix[x][y]){
                            continue;
                        }
                        else{
                            canFit = false;
                            break;
                        }
                    }
                    if (!canFit){
                        break; // continue searching to find match
                    }
                    else if (x === smallMatrix.length -1){
                        return true; //found smaller matrix in larger
                    }
                }
            }
        }
    }
    return false; //can't find smaller matrix inside larger
}


var largeMatrix = [
    [1,2,3,4],
    [5,6,7,8],
    [4,8,6,4],
    [9,1,0,3]
]

var miniMatrix = [
    [6,7,4]
]

console.log(matrixSearch(largeMatrix,miniMatrix))