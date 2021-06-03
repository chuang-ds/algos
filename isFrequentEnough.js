function isFrequentEnough(str,char,x){
    var count = 0;
    for (var i = 0; i<str.length; i++){
        if (str.charAt(i) == char){
            count ++;
        }
    }
    return (count >= x)
}

console.log(isFrequentEnough('mississipi','s',3));
console.log(isFrequentEnough('ohio','o',2));
console.log(isFrequentEnough('washington','q',1));