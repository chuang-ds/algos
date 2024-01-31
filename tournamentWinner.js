/*
There's an algo tournament taking place in which teams of programmers compete against each other to solve
algo problems as fast as possible.  Teams compete in a round robin, where each team faces off against
all other teams.  Only two teams compete against each other at a time, and for each competition, one team
is designated the home team, while the other team is the away team.  In each competition there's always
one winner and one loser; there are no ties.  A team receives 3 points if it wins and 0 points if it
loses.  The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have completed against each other and an array
containing the results of each competition, write a function that returns the winner of the tournament.
The input arrays are named competitions and results, respectively.  The competitions array has elements
in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing
the name of the team.  The results array contains information about the winner of each corresponding
competition in the competitions array.  Specifically, results[i] denotes the winner of competitions[i],
where 1 in the reults array means that the home team in the corresponding compeition won and a 0 means
the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against
all the other teams exactly once.  It's also guaranteed that the tournament will always have at least
two teams.

Sample input:
 competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    [Python", "HTML]"],
 ]
 results = [0, 0, 1]

 Sample output:
  "Python"
  // C# beats HTML, Python beats C#, and Python beats HTML.
  // HTML - 0 points
  // C# - 3 points
  // Python - 6 points
  */

function tournamentWinner(competitions, results) {
    // map to hold [team, points]
    teamPointsMap = new Map();

    // loop through competitions
    for (i=0; i<competitions.length; i++) {
        // set roundPoints to points the winning team already has
        roundPoints = teamPointsMap.get(competitions[i][1-results[i]]);
        // if team has no points yet then set map for team to 3 points
        if (isNaN(roundPoints)) {
            teamPointsMap.set(competitions[i][1-results[i]], 3);
        } else {
            // if team already has points then increment by 3 and set map to new points
            roundPoints += 3;
            teamPointsMap.set(competitions[i][1-results[i]], roundPoints);
        }
    }

    // now determine the team with max points and return name of team
    maxScore = 0;
    winner = "";
    for ([team, score] of teamPointsMap) {
        if (score > maxScore) {
            maxScore = score;
            winner = team;
        }
    }
    return winner;
}

// Tests
console.log(1, tournamentWinner([["HTML", "C#"],["C#", "Python"],["Python", "HTML"]],[0, 0, 1]));
console.log(2, tournamentWinner([["HTML", "Java"],["Java", "Python"],["Python", "HTML"]],[0, 1, 1]));
console.log(3, tournamentWinner([["HTML", "Java"],["Java", "Python"],["Python", "HTML"],["C#", "Python"],["Java", "C#"],["C#", "HTML"]],[0, 1, 1, 1, 0, 1]));
console.log(4, tournamentWinner([["HTML", "Java"],["Java", "Python"],["Python", "HTML"],["C#", "Python"],["Java", "C#"],["C#", "HTML"],["SQL", "C#"],["HTML", "SQL"],["SQL", "Python"],["SQL", "Java"]],[0, 1, 1, 1, 0, 1, 0, 1, 1, 0]));
console.log(5, tournamentWinner([["Bulls", "Eagles"]],[1]));
console.log(6, tournamentWinner([["Bulls", "Eagles"],["Bulls", "Bears"],["Bears", "Eagles"]],[0, 0, 0]));
console.log(7, tournamentWinner([["Bulls", "Eagles"],["Bulls", "Bears"],["Bulls", "Monkeys"],["Eagles", "Bears"],["Eagles", "Monkeys"],["Bears", "Monkeys"]],[1, 1, 1, 1, 1, 1]));
console.log(8, tournamentWinner([["AlgoMasters", "FrontPage Freebirds"],["Runtime Terror", "Static Startup"],["WeC#", "Hypertext Assassins"],["AlgoMasters", "WeC#"],["Static Startup", "Hypertext Assassins"],["Runtime Terror", "FrontPage Freebirds"],["AlgoMasters", "Runtime Terror"],["Hypertext Assassins", "FrontPage Freebirds"],["Static Startup", "WeC#"],["AlgoMasters", "Static Startup"],["FrontPage Freebirds", "WeC#"],["Hypertext Assassins", "Runtime Terror"],["AlgoMasters", "Hypertext Assassins"],["WeC#", "Runtime Terror"],["FrontPage Freebirds", "Static Startup"]],[1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]));
console.log(9, tournamentWinner([["HTML", "Java"],["Java", "Python"],["Python", "HTML"],["C#", "Python"],["Java", "C#"],["C#", "HTML"],["SQL", "C#"],["HTML", "SQL"],["SQL", "Python"],["SQL", "Java"]],[0, 0, 0, 0, 0, 0, 1, 0, 1, 1]));
console.log(10, tournamentWinner([["A", "B"]],[0]));