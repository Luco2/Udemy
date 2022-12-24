//Coding Challenge 1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95
/*
const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn)
console.log(markHigherBMI) // should be boolean value of true for first data set and false for second data set
// logging them straight to the console would have worked too
*/
// Coding Challenge 2

/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement � */

/*
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`) 
} else {
    console.log(`Johns BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
} 
*/

// Coding Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//  const averageScoreDolphins = (96 + 108 + 89) / 3
//  const averageScoreKoalas = (88 + 91 + 110) / 3
// console.log(averageScoreDolphins, averageScoreKoalas)
//  if (averageScoreDolphins > averageScoreKoalas) {
//     console.log("Dolphins win")
//  } else if (averageScoreDolphins === averageScoreKoalas) {
//     console.log('Tie!')
//  } else {
//     console.log('Koalas win')
//  } 

 // could also be done like this 
 
//  if (averageScoreDolphins > averageScoreKoalas) {
//     console.log("Dolphins win")
//  } else if (averageScoreDolphins < averageScoreKoalas) {
//     console.log('Koalas win')
//  } else if (averageScoreDolphins === averageScoreKoalas){
//     console.log('Tie!')
//  } 

 // Bonus 1

//  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

//  const averageScoreDolphins = (97 + 112 + 101) / 3
//  const averageScoreKoalas = (109 + 95 + 123) / 3
// console.log(averageScoreDolphins, averageScoreKoalas)
//  if ((averageScoreDolphins > averageScoreKoalas) && averageScoreDolphins >= 100) {
//     console.log('Dolphins win')
//  } else if ((averageScoreKoalas > averageScoreDolphins) && averageScoreKoalas >= 100) {
//     console.log('Koalas win')
//  } else if (averageScoreDolphins === averageScoreKoalas) {
//     console.log('Tie!')
//  }

 //Bonus 2
 // Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 
 /*
 const averageScoreDolphins = (97 + 112 + 80) / 3
 const averageScoreKoalas = (109 + 95 + 50) / 3
 console.log(averageScoreDolphins, averageScoreKoalas)
 if ((averageScoreDolphins > averageScoreKoalas) && averageScoreDolphins >= 100) {
    console.log('Dolphins win')
 } else if ((averageScoreKoalas > averageScoreDolphins) && averageScoreKoalas >= 100) {
    console.log('Koalas win')
 } else if ((averageScoreDolphins === averageScoreKoalas) && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log('Tie!')
 } else {
    console.log('Nobody wins')
 } // if score is lower than 100 then else block will be executed
*/

// Coding Challenge 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
*/

const billValue1 = 275
const tip1 = (billValue1 >= 50 && billValue1 <= 300) ?(billValue1) * .15 : (billValue1) * .2
console.log(tip1)

console.log(`The bill value was ${billValue1}, the tip was ${tip1}, and the total is ${billValue1 + tip1}`)

const billValue2 = 40
const tip2 = (billValue2 >= 50 && billValue2 <= 300) ?(billValue2) * .15 : (billValue2) * .2
console.log(tip2)

console.log(`The bill value was ${billValue2}, the tip was ${tip2}, and the total is ${billValue2 + tip2}`)

const billValue3 = 430
const tip3 = (billValue3 >= 50 && billValue3 <= 300) ?(billValue3) * .15 : (billValue3) * .2
console.log(tip3)

console.log(`The bill value was ${billValue3}, the tip was ${tip3}, and the total is ${billValue3 + tip3}`)

const billValue4 = 246
const tip4 =(billValue4 >= 50 && billValue4 <= 300) ?(billValue4) * .15 : (billValue4) * .2
console.log(tip4)
