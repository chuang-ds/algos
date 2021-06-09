function pangram(str){
    dict = [];
    for (var i=0; i<str.length; i++){
        if (!dict.includes(str[i].toLowerCase())){
            dict.push(str[i].toLowerCase());
        }
    }
    return (dict.length >= 26);
}
console.log(pangram("abcdefghjijklmnbvcxzqwertyuio "));