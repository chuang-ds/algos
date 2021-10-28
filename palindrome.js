function isPalindrome(s) {
    for (var i = 0; i < s.length/2; i++) {
        // console.log("i="+i+", s[i]=" + s[i] + ", s[s.length-i-1]=" + s[s.length-i-1])
        if (s[i] != s[s.length-i-1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Chet"));