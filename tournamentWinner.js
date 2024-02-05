/*
tournament winner.  array named competitions contains names of home team, visiting team.
array named results contains 0 if away team won, 1 if home team won.  Each win counts as 3 pts.
Determine winning team.  index in each array represents match between teams and results

Sample input:
 competitions = [ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ]
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