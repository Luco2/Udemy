
/* (DATA TYPES NOTES)
// this is a comment (JS ignores any thing after //)
//console.log(true)
// (you can use // to cancel out code like above)
true;
// boolean value
console.log(true)
// above will log true into console
let javascriptIsFun = true;
// console.log(typeof true); // this will log "boolean"
console.log(typeof javascriptIsFun); // this will log "boolean" because we let it = true
// console.log(typeof 23); // this will log number
// console.log(typeof 'Jonas'); // this will log string
javascriptIsFun = 'YES!' // this is how you change the value of an already assigned variable
console.log(javascriptIsFun); // this will log as "YES!"
console.log(typeof javascriptIsFun); // this will now log as a string because you changed javascriptIsFun = "YES!"
let year;
console.log(year); //  will come out as undefined becasue you didn't define year
console.log(typeof year); // will come out as undefined
year = 1991; // here we will reassign year to make it defined 
console.log(typeof year); // it will now come out as number
console.log(typeof null); // this is a bug that is never corrected 
*/

/* (LET, CONST, AND VAR NOTES)
// we use the let key to change declare variables that can chagne later (during the execution of our program)\
//let age = 30;
//age = 31; // this is called "mutating the variable"
// we use the const ket to declare variables that can not be changed 
//const birthYear = 1991; // this is an unmutable variable (birth year cant change but age can thats why we use const here)
//birthYear = 1990; // this will lead to a TypeError 
//const job; // missing initializer error will occur
// use const as default and let only when you're sure the varibale is going to need to change
// var should be avoided but we should know how it works for legacy reasons (you will see this in old code). It works the same as let
//var job = 'programmer';
//job = 'teacher';
lastName = 'Conner'; // this doesn't create a variable in the scope; always properly declare variables never write it like this
console.log(lastName); */

/* (BASIC OPERATORS NOTES)
// an operator allows us to transform values 
const now = 2037; //so that we don't have to repeat 2037
const ageJonas = now - 1991;
const ageLucy = now - 1998;
console.log(ageJonas, ageLucy);// here we use the minus operator to calculate an age
console.log(ageJonas * 2, ageJonas / 2 /10, 2**3) // ** = to the power of 
const firstName = 'Lucy';
const lastName = 'Conner';
console.log(firstName + ' ' + lastName); // you can use + to join two sriongs toigether too. The ' ' is used to add a space.
// Assignment Operators
let x = 10 + 5; // the = is an operator and the + is an operator
x += 10; // means x = x + 10. We are reassigning the x value that's why we used let. It should now be 25.
x *= 4; // means x = x * 4 (25 * 4) so x should = 100 here
x++; // x = x +1
x--; // decreases value by 1
x--; // value should be 99 here (101 -2 (because there is two x--))
console.log(x); // result will be 15 
// Comparison Operators
console.log(ageJonas > ageLucy); // this is asking if this is true or false 
// <, >, >=, <= are all comparison operators
console.log(ageLucy >= 18); // this should be true because I'm older then 18. This would be true if the variable used is 18 or greater and false if it is less than 18.
const isFullAge = ageLucy >= 18; // this variable holds the boolean value "true"
console.log(now - 1991 > now - 1998); // this code is the same
const year = 1999;
let age = 23;
console.log(2037 - year);*/
// usually all math operators are executed before comparison operators
// division happens before subtraction

/*// (String and Template Literals Notes)
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!' // need double quotes here because of "I'm". It wont work with ''
console.log(jonas) // should come out as "I'm Jonas, a 46 year old teacher!"
//Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`// `` is a template string 
console.log (jonasNew) // should come out as I'm Jonas, a 46 year old teacher!
console.log(`Just a regular string...`)// you can use `` to write string; if you use these you don't have to know which quotations to use
console.log('String with \n\
multiple \n\
lines') 
// \n\  means new line; 
console. log(`String
with 
multiple 
lines`) // using template literal(``) will make it so you don't have to use \n\
*/

//(Taking Decisions: if/else statement notes)

/* const age = 15;
const isOldEnough = age >= 18;
if(age >= 18){
    console.log('Sarah can get driving license 👹')
} else {
const yearsLeft = 18 - age
console.log(`Sarah is too young. Wait another ${yearsLeft} years `)
}
// else block will be executed when whatever is inside if () is false
//whenever value inside () is true, then what is inside {} for if statement will be executed
// this was executed because const age = 19 and const isOldEnough is true if age is >= 18
// when const age = lower then 18 else statement will be executed
/*if (){
} else {
} // this is called a control structure because it allows us to have more control over the way our code is executed
*/
/* const birthYear = 2012; // if this value is above 2000 then it will come out as 21, if it is below (like 1998) then it will log 20
let century; // make sure you always define all variables inside the code block
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}
console.log(century)
*/ //we can take decisions using if/else statement. We need a condition or any code that returns a boolean (true or false value)


// (CONVERSION AND COERCION NOTES)

// type conversion: when we manually convwert from one type to the other
// type coercion: when JS automatically converts types behind the scenes for us

// type conversion
/*const inputYear = '1998'; // can't use a string because it'll come out as 199818
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // we can use this to calculate when someone will be of full age 

console.log(Number('Lucy')) // will come out as NaN (means an invalid number)
console.log(typeof NaN) // will come out as number

console.log(String(23)) 

// type coercion
console.log('I am ' + 24 + ' years old') // this is using type coercion; it automatically converted 23 to a string
console.log('23' - '10' - 3) // should get 10 here because - operator converted strings to number 
console.log('23' + '10' + 3) // should get 23103 here because + operator turn numbers to strings
console.log('23' * '2') // should get 46 because * (times) operator converts strings into numbers too

let n = '1' + 1; // = string 11
n = n -1 // n = 11-1
console.log(n) // should come out as 10
console.log('10' - '4' - '3' - 2+'5') // should come out as 15
*/
// (TRUTHY AND FALSY VALUES)
// falsy values are values that become false when we try to turn them into a boolean
// 5 falsy values: 0, empty String (''), null, NaN
// truthy values will be converted to true 

/*console.log(Boolean(0)); // this is a falsy value
console.log(Boolean(undefined)) // false
console.log(Boolean('Lucy')) // true; if this were empty it would be false
console.log(Boolean({})) // true
// any string that isn't empty is truthy 
// JS does type coercion to booleans when usinglogical operators and in a logical context (if/else statement)

const money = 100; // converted to false because it is a falsy value, if it were not 0 it would execute the if block (cause its true)
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
} 

//let height; // height is undefined in this moment (falsy value); so else block will be executed
let height = 0 // will still come out with else statement because 0 is also a falsy value
if(height) {
    console.log("Yay! Height is defined")
} else {
console.log('Height is UNDEFINED')
} */

// (EQUALITY OPERATORS)

// used if you want to check if two values are equal
/*
const age = 18; // if this isn't 18 it won't be executed
if (age === 18) console.log("You just became an adult (strict)") // === is used to see if a value is exactly equal
// you only need one line of code if you're only using one block

console.log(18 === 18) // will be true 
console.log(18 === 19) // will be false 
// === is the strict equality oerator (strict because it does not perform type coercion); only returns true when both values are exactly the same
// == is the loose equality operator (does type coercion)
console.log(18 == '18') // will still come out as true because == does type coercion
console.log(18 === '18') // will come out as false

if (age == 18) console.log("You just became an adult (loose)") // only this one will be executed if you change const age = 18 to const age = '18' (making it a string)
// when comparing values always use ===

const favorite = Number(prompt("What is your favorite number?"))
console.log(favorite); 
console.log(typeof favorite); // wihtout Number here it would consider your answer to the prompt a string

if (favorite === 23) { // if you use == '23' (the string) is equal to 23 (number); if you use === only 23 (number) can equal 23 (number)
    console.log('Cool 23 is an amazing number')
} // if you answer the prompt with any number but 23, it will be false and 'Cool 23 is an amazing number' will not be logged

// else if blok

else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')}
    else {
    console.log('number is not 23 or 7 or 9')
} // adding all these elses if blocks make it so that when if (favorite === 23) is false, it doesn't automatically go into the else block. It now has other conditions.
// if it's not 23, we check if it's 7, if it's not 7 we check if it's 9, and if it's not 9 we use the else block

// different operator

if (favorite !== 23) console.log('Why not 23?') // !== is the strict version of saying doesn't equal and != is the loose version of sayingdoesn't equal, but always use !== (strict)
// if you answer 9, you will get "9 "is also a cool number" and then "Why not 23?"
// if you use 23 you will get "cool 23 is an amazing number" because favorite number is 23
*/

// (BOOLEAN LOGIC NOTES)

//Boolean logic uses several logical operators to combine true and false values
// like we use arithmatic operators to combine numeric values
// boolean logic is not specific to JS
/* Example: 
A: Sarah has a driver's license 
B: Sarah has good vision
A and B: (these could both be false or true); only if both A and B are true, the result will be true (makes sense because we are using the and operator)
A or B: (one could be false and one could be true); true when one is true
Not A, Not B: (inverts true/false values); if A is true it will become false and if it false not A will be true
EXAMPLE
age = 16
Boolean Variables
A: Age is greater or equal to 20 (false) 16<20
B: Age is less than 30 (true); 16<30
!A (Not A)= true
A and B = false (if one variable is false then and operator will consider it false)
A or B = true 
!A, !B = true 
A or !B = false (A is false, B is true so not B will be false; false or false is false (only way or operator can be false is if both are false))
*/

// (LOGICAL OPERATOR NOTES)

// const hasDriversLicense = true; // (variable A from above)
// const hasGoodVision = true; // (variable B from above)

// console.log(hasDriversLicense && hasGoodVision) // && is the and operator
// console.log(hasDriversLicense || hasGoodVision) // || is the or operator
// // above will come out as true when hasDriversLicense AND hasGoodVision are both true
// //above will come out as false when hasDriversLicense is true and hasGoodVision is false
// // console.log(hasDriversLicense || hasGoodVision) will become true when one is true
// console.log(!hasDriversLicense) // ! is the not operator
// // above will become false even though it's true because of ! (the not operator)
// // Here is how we'll figure out if Sarah can driver or not

// const shouldDrive = hasDriversLicense && hasGoodVision // Sarah should drive if both A and B are true

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive')
// // } else {
// //     console.log('Someone else should drive...')
// // }

// const isTired = false; // variable C
// console.log(hasDriversLicense || hasGoodVision || isTired) // will be true when all are true
// console.log(hasDriversLicense && hasGoodVision && isTired) // will also be true when all are true; if we set one to false the it will be false

// if (hasDriversLicense && hasGoodVision && !isTired) //this says Sarah is able to drive if she has a licese, if she has good vision, and if she isn't tired 
// { console.log('Sarah is able to drive')
//      } else {
//          console.log('Someone else should drive...')
//      } // will come out as 'Someone else should drive' when !isTired is false (or isTired is true)
//      // will come out as 'Sarah is able to drive' when !isTired is true (or isTired is false)

// (SWITCH STATEMENT NOTES)

// switch statement is an alternative way of writing a complicated if/else statement when all we want to do is compare one value tomultiple different options

// const day = ''

// switch(day) {
//     case 'Monday': // this is saying day === Monday 
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break; // without break the 'prepare theory videos' will also be executed
//     case "Tuesday" :
//         console.log('Prepare theory videos');
//         break;
//         case 'Wednesday' :
//         case 'Thursday' : 
//         console.log('Write code examples')
//         break
//         case 'Friday' :
//             console.log('Record videos')
//             break
//             case 'Saturday':
//                 case 'Sunday' :
//                     console.log('Enjoy weekend')
//                     break
//                     default:
//                         console.log('Not a valid day')
//                 } // break tells it to stop executing code
//                 // switch statement does a strict comparison (designed for equality insteadof comparing)

// // this is the switch statement above in an if/else block 
// if (day === 'Monday') {
//     console.log("Plan course struture")
//     console.log("Go to coding meetup")
// } else if (day === 'Tuesday') {
//     console.log("Prepare theory videos")
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Write code examples')
// } else if (day === 'Friday') {
//     console.log("record videos")
// } else if ( day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy weekend')
// } else {
//     console.log('Not a valid day')
// }

// (STATEMENTS AND EXPRESSIONS)
// expression is a piece of code that produces a value (ex. 3 + 4); another ex. 1971
// another expression ex. true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger'
// } // this is a statement (why its called the if/else statement)
// // this statement doesnt produce a value it just declares the variable str
// // expressions produce values and statemenets are like full sentences that translate our actions (actions we want to program)
// // in a template literal we can only insert expressions but not statements

// const me = 'Lucy'
// console.log(`I'm ${2037 -1998} years old, ${me}`) // (2037 - 1998) and (me) is an expression so this will work

// (THE CONDITIONAL (TERNARY) OPERATOR)

// we already saw two ways of writing conditionals (if/else statement) and (switch statement)

//const age = 23;
//age >= 18 ?console.log('I like to drink wine') : console.log('I like to drink water') // the second is acting as an else block and the first is acting as an if block
// when age is above or equal to 18, 'I like to drink wine' will be executed if not 'I like to drink water' will be
// conditional operator is called ternary operator because it has three parts unlike others (condition, if part, and else part)
// // operator always produces a value (it is an expression)

// const drink = age >= 18 ?'wine' : 'water' // this is an expression
// console.log(drink) // will come out as wine if age is above 18 and water if not

// let drink2; // have to declare variable outside of blocks and then you can assign it inside the blocks
// if (age >= 18) {
//     drink2 = 'wine'
// } else {
//     drink2 = 'water'
// }
// console.log(drink2) // this is the same as const drink = age >= 18 ?'wine' : 'water' 

// console.log(`I like to drink ${age >= 18 ?'wine' : 'water'}`)

// ternary operator is not a replacement for if/else statement
// ternary operator is perfect for quick decisons like the one abve (water or wine)

// (JAVASCRIPT RELEASES: ES5, ES6+, AND ESNEXT)

/* JS has backwards compatibility means that JS is able to understand old code 
releases not versions 
JS does not have forwards compatibility 
development phase (when you're building site or application on your computer): make sure you use the most up to date version of Google chrome
production phase (web app is finished, deployed on internet and running on user's browsers): use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)

**check out eS6 compatibility table
future releases: ESNext; most browsers start implementing new features before they enter the official ECMAscript specification
thats possible becasue when new features are exposed they have to go through four stages; stage three: browsers are pretty sure it will pass to stage four
ES5 will help you better understand how JS works behind the scenes*/
