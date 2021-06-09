// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function longestWord(sen){
    let cleanSen = sen.match(/[^_\W]+/g).join(' ');
    let words = cleanSen.split(" ");
    let maxLength = null;
    let maxIndex = null;
    for (let i=0; i<words.length; i++){
        if (words[i].length > maxLength){
            maxLength = words[i].length;
            maxIndex = i;
        }
    }
    return words[maxIndex];
}

console.log(longestWord("This is a test of the emergency321 broadca!@*%&st123 system"));