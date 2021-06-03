// check whether string is a 5 digit zip code
function isZipCode(str){
    if (str.length !== 5){
        return false;
    }
    // iterate thru each char and see if number
    for (var i = 0; i<str.length; i++){
        if(!isNaN(str.charAt(i))){
            continue;
        }
        return false;
    }
    return true;
}

console.log(isZipCode("98058"));
console.log(isZipCode("9805"));
console.log(isZipCode("a8058"));
console.log(isZipCode("08058"));