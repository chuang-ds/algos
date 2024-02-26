/*
Given an array of positive integers representing the amounts of time that specific queries take to execute.
Only one query can be executed at a time, but the queries can be executed in any order.

A query's waiting time is amount of time that it must wait before its execution starts.  In other words,
if a query is executed second, then its waiting time is the duration of the first query; if a query is
executed third, then its waiting time is the sum of the duration of the first two queries.

Write a function that returns the min amount of total waiting time for all the queries.  For example,
if you're given the queries of duration [1, 4, 5], then the total waiting time if the queries were executed
in the order of [5, 1, 4] would be (0) + (5) + (5+1) = 11.

Note: it's OK to mutate the input array.

Sample input:
[3, 2, 1, 2, 6]

Sample output:
17, which is (1) + (1+2) + (1+2+2) + (1+2+2+3)
*/

function minimumWaitingTime(queries) {
    // in-place sort of input array
    queries.sort(function(a, b) {return a-b});
    // initialize minWait and curWait
    minWait = 0;
    curWait = 0;
    // iterate through list of queries though leave out last query as we are calculating min wait to execute all
    for (i=0; i<queries.length -1; i++) {
        // rolling increment of curWait with run times of queries thus far
        curWait += queries[i];
        // rolling increment of minWait with computed curWait thus far
        minWait += curWait;
    }
    return minWait;
}

console.log(1,minimumWaitingTime([3, 2, 1, 2, 6]));
console.log(2,minimumWaitingTime([2, 1, 1, 1]));
console.log(3,minimumWaitingTime([1, 2, 4, 5, 2, 1]));
console.log(4,minimumWaitingTime([25, 30, 2, 1]));
console.log(5,minimumWaitingTime([1, 1, 1, 1, 1]));
console.log(6,minimumWaitingTime([7, 9, 2, 3]));
console.log(7,minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]));
console.log(8,minimumWaitingTime([2]));
console.log(9,minimumWaitingTime([7]));
console.log(10,minimumWaitingTime([8, 9]));
console.log(11,minimumWaitingTime([1, 9]));
console.log(12,minimumWaitingTime([5, 4, 3, 2, 1]));
console.log(13,minimumWaitingTime([1, 2, 3, 4, 5]));
console.log(14,minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1]));
console.log(15,minimumWaitingTime([17, 4, 3]));