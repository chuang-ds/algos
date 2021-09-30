// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
function lastFew(arr, num) {
    for(var i = 0; i < num; i++) {
        arr[i] = arr[arr.length-num+i]
    }
    return arr.slice(0, num);
}
console.log(lastFew([2,4,6,8,10],3));

// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
function mathHelp(m, b) {
    return -(b/m);
}
console.log(mathHelp(5, 4));

// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
function whatHappensToday() {
    var r = Math.floor(Math.random() * 101);
    if(r<11) { return 'volcano' }
    else if(r<26) { return 'tsunami' }
    else if(r<46) { return 'earthquake' }
    else if(r<71) { return 'blizzard' }
    else { return 'meteor' }
}
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());
console.log(whatHappensToday());

// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
function whatReallyHappened() {
    const today = [];
    var r = 0;
    r = Math.floor(Math.random() * 101);
    if(r<11) { today.push('volcano') }
    r = Math.floor(Math.random() * 101);
    if(r<16) { today.push('tsunami') }
    r = Math.floor(Math.random() * 101);
    if(r<21) { today.push('earthquake') }
    r = Math.floor(Math.random() * 101);
    if(r<26) { today.push('blizzard') }
    r = Math.floor(Math.random() * 101);
    if(r<31) { today.push('meteor') }
    return today;
}
console.log(whatReallyHappened());
console.log(whatReallyHappened());
console.log(whatReallyHappened());
console.log(whatReallyHappened());
console.log(whatReallyHappened());

// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
function soaringIQ() {
    var IQ = 101;
    multiplier = 0.01;
    for(var i = 1; i < 99; i++) {
        IQ += i*multiplier;
    }
    return IQ;
}
console.log(soaringIQ());

// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
function letterGrade(num) {
    if(num >= 90) { console.log('Score: ' + num + '. Grade: A') }
    else if(num >= 80) { console.log('Score: ' + num + '. Grade: B') }
    else if(num >= 70) { console.log('Score: ' + num + '. Grade: C') }
    else if(num >= 60) { console.log('Score: ' + num + '. Grade: D') }
    else { console.log('Score: ' + num + '. Grade: F') }
}
letterGrade(90);
letterGrade(55);
letterGrade(61);
letterGrade(73);
letterGrade(88);

// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
function moreAccurateGrade(num) {
    if(num >= 93) { console.log('Score: ' + num + '. Grade: A') }
    else if(num >= 90) { console.log('Score: ' + num + '. Grade: A-') }
    else if(num >= 88) { console.log('Score: ' + num + '. Grade: B+') }
    else if(num >= 83) { console.log('Score: ' + num + '. Grade: B') }
    else if(num >= 80) { console.log('Score: ' + num + '. Grade: B-') }
    else if(num >= 78) { console.log('Score: ' + num + '. Grade: C+') }
    else if(num >= 73) { console.log('Score: ' + num + '. Grade: C') }
    else if(num >= 70) { console.log('Score: ' + num + '. Grade: C-') }
    else if(num >= 68) { console.log('Score: ' + num + '. Grade: D+') }
    else if(num >= 63) { console.log('Score: ' + num + '. Grade: D') }
    else if(num >= 60) { console.log('Score: ' + num + '. Grade: D-') }
    else { console.log('Score: ' + num + '. Grade: F') }
}
moreAccurateGrade(61);
moreAccurateGrade(78);
moreAccurateGrade(85);
moreAccurateGrade(92);
moreAccurateGrade(99);
moreAccurateGrade(32);