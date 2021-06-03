function scrabbleScore(str, scoreObj){
    var totalScore = 0;
    var STR = str.toUpperCase();
    for (var i=0; i<str.length; i++){
        var curChar = STR[i];
        totalScore += scoreObj[curChar];
    }
    return totalScore;
}

var word = 'Quebec';
var scoreObject = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10
};

console.log(scrabbleScore(word,scoreObject));