// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page).
// In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
// console.log("PLAYERS 1", players1);
// console.log("PLAYERS 2", players2);
// 2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 6
const printGoals = (...players) => {
  players.forEach((player) => {
    console.log(player);
  });
  console.log(players.length);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
console.log("____------_____");
console.log(team1 < team2 && game.team1);
console.log(team2 < team1 && game.team2);
// ----
console.log("**************");

// Use of for of array
for (const player of game.scored) {
  console.log(player);
}

const odds = Object.values(game.odds);

// MORE ADVANCED WAY
// #2
const sum = odds.reduce((odd1, odd2) => {
  return odd1 + odd2;
}, 0);

console.log((sum / odds.length).toFixed(2));

// BEGINNER WAY
// let sum = 0;
// for (const odd of odds) {
//   sum += odd;
// }

// console.log(sum / odds.length);

// #3
let message;
for (const [teamName, val] of Object.entries(game.odds)) {
  message = game[teamName]
    ? `Odd of victory ${game[teamName]}: ${val}`
    : `Odd of draw: ${val}`;
  console.log(message);
}

// #4

// scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];

const scored = {};
for (const scorer of game.scored) {
  scored[scorer] &&= scored[scorer] + 1;
  scored[scorer] ||= 1;
}

console.log(scored);

// NEW-SECTION

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
// Task 1
// Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
// After the game has finished, it was found that the yellow card from minute 64 was unfair.
// So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
// Compute and log the following string to the console :"An event happened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const gameLength = 90;
const avg = Math.ceil(gameLength / gameEvents.size);
console.log(`An event happened, on average, every ${avg} minutes`);

// Task 4
// Loop over 'gameEvents' and log each element to the console,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "[FIRST HALF] " : "[SECOND HALF] ";
  console.log(`${half} ${event}`);
}
