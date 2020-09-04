// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? 
 * 
 *the variable countaining the number is in global scope in counter1  

counter 1 inside the function there is closure 
counter 2 count is in global scope 

 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure because it was a block level funtion inside of another funtion.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 is protected, if you want to reuse the same code 
 * counter2 can be accesed to multiple things
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

counter2();
counter2();

console.log(count);
/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/) {
  return Math.floor(Math.random() * 2 + 0);
  /*Code Here*/
}
console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 


finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, inningNum) {
  let home = 0;
  let away = 0;

  for (let i = 0; i < inningNum; i++) {
    home += inning();
    away += inning();
  }
  return {
    Home: home,
    Away: away,
  };
}

/*Code Here*/

console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

// function scoreboard(getInningScoreCB , inningCB , innings) {

//  const scoreByInning = [];
//  const temp = getInningScoreCB(inningCB);
//  let suffix = '';
//  let home = 0 ;
//  let away = 0;

//  for (let i = 0 ; i < innings ; i++){
//     scoreByInning.push(temp());

//     if ( i === 1 ){
//       suffix = 'st'
//     }
//     if ( i === 2 ){
//       suffix = 'nd'
//     }
//     if ( i === 3 ){
//       suffix = 'rd'
//     }
//     else {
//       suffix = 'th'
//     }
//     }
//     console.log(`[i]${suffix} inning: ${home} - ${away} `)
//     console.log (`Final Score: ${home} - ${away} `)
//  }

//   /* CODE HERE */

// function getInningScore(inningCB){

//   let home = 0 ;
//   let away = 0;
//   return function(){

//     home += inningCB();
//     away += inningCB();
//       return {
//         Home: home,
//         Away: away,
//       };

//   }

// }

// console.log(scoreboard(getInningScore, innings(), 9))
// console.log()
